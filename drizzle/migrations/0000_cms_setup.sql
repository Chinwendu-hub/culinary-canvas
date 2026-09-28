create type public.app_role as enum ('admin', 'user');
create table public.user_roles (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null,
  role app_role not null,
  unique (user_id, role)
);
grant select on public.user_roles to authenticated;
grant all on public.user_roles to service_role;
alter table public.user_roles enable row level security;
create policy "Users read own roles" on public.user_roles for select to authenticated using (user_id = auth.uid());

create or replace function public.has_role(_user_id uuid, _role app_role)
returns boolean language sql stable security definer set search_path = public
as $$ select exists (select 1 from public.user_roles where user_id = _user_id and role = _role) $$;

create or replace function public.claim_admin()
returns boolean language plpgsql security definer set search_path = public
as $$
begin
  if auth.uid() is null then return false; end if;
  if exists (select 1 from public.user_roles where role = 'admin') then
    return public.has_role(auth.uid(), 'admin');
  end if;
  insert into public.user_roles (user_id, role) values (auth.uid(), 'admin');
  return true;
end $$;
revoke execute on function public.claim_admin() from anon, public;
grant execute on function public.claim_admin() to authenticated;

create table public.site_content (
  id text primary key,
  data jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);
grant select on public.site_content to anon, authenticated;
grant insert, update, delete on public.site_content to authenticated;
grant all on public.site_content to service_role;
alter table public.site_content enable row level security;
create policy "Anyone can read site content" on public.site_content for select to anon, authenticated using (true);
create policy "Admins insert content" on public.site_content for insert to authenticated with check (public.has_role(auth.uid(), 'admin'));
create policy "Admins update content" on public.site_content for update to authenticated using (public.has_role(auth.uid(), 'admin')) with check (public.has_role(auth.uid(), 'admin'));
create policy "Admins delete content" on public.site_content for delete to authenticated using (public.has_role(auth.uid(), 'admin'));
insert into public.site_content (id, data) values ('main', '{}'::jsonb);