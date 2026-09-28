import { createServerFn } from "@tanstack/react-start";
import { createClient } from "@supabase/supabase-js";

export const getSiteContent = createServerFn({ method: "GET" }).handler(async () => {
  try {
    const key = process.env["SUPABASE_PUBLISHABLE_KEY"]!;
    const client = createClient(process.env["SUPABASE_URL"]!, key, {
      auth: { persistSession: false, autoRefreshToken: false },
      global: {
        fetch: (input, init) => {
          const h = new Headers(init?.headers);
          if (key.startsWith("sb_") && h.get("Authorization") === `Bearer ${key}`) h.delete("Authorization");
          h.set("apikey", key);
          return fetch(input, { ...init, headers: h });
        },
      },
    });
    const { data, error } = await client.from("site_content").select("data").eq("id", "main").maybeSingle();
    if (error) {
      console.error("site content load failed", error.message);
      return { data: null as string | null };
    }
    return { data: data ? JSON.stringify(data.data) : null };
  } catch (e) {
    console.error(e);
    return { data: null as string | null };
  }
});
