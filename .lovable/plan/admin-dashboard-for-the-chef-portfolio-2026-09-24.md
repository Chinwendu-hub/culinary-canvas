# Admin Dashboard for the Chef Portfolio

Turn the site into a self-managed website: you sign in to a private dashboard, change photos and words using forms, and the public site updates immediately. The current design, layout, colours, fonts, animations and content stay the same.

## What you will be able to do
- **Sign in** at a private `/admin` page (email + password). Only your account gets admin rights. Visitors never see edit controls.
- **Edit all text**: name, title, tagline, hero, About Me, section headings and intros, "Why hire me" quote, case study (4 parts), footer text.
- **Manage lists** (add, edit, delete with an "Are you sure?" box, drag to reorder):
  Specialties, Skills, Portfolio dishes (name, category, description, photos, optional video link), Sample menu items (category, name, description, photo, optional price), Services (title, description, icon, photo), Videos (title, description, link or uploaded file, thumbnail, type YouTube/Instagram/TikTok/Upload), Testimonials (hidden on the site until you add one).
- **Photos**: every picture has Replace / Remove / Preview. The phone or computer photo picker opens, you see a preview, press Save. JPG, PNG, WEBP accepted. Includes an image position setting (focus top/centre/bottom/left/right) so crops look right.
- **Contact & social**: email, phone, WhatsApp, location, availability; Instagram, TikTok, Facebook, LinkedIn, YouTube links. Empty social links hide their icons.
- **Website settings**: site title, logo, favicon, gold accent / dark / light colours, heading font choice, footer text.
- **Preview**: split screen on laptops (form left, live site right, updates as you type); on phones a Preview toggle. Save writes your change for good.
- Works on iPhone, Android, tablet and desktop.

## Starting content
Everything currently on the site (texts and all 8 photos) is copied into the database first, so nothing is lost or changed.

## Technical details
- Enable Lovable Cloud: tables `site_content` (single JSON row per section: hero, about, case study, contact, social, settings, headings), `specialties`, `skills`, `dishes`, `menu_items`, `services`, `videos`, `testimonials` — each with `sort_order`. Public read for anon, write only for `has_role(auth.uid(),'admin')` via separate `user_roles` table.
- Storage bucket `site-media` (public read, admin write). Existing images uploaded as seeded defaults.
- Public page loads content through a public server function + TanStack Query; falls back to the current built-in content if loading fails.
- `/admin` under the managed auth gate; first sign-up automatically becomes admin, later sign-ups get no rights.
- Drag reorder with @dnd-kit; confirmation dialogs with AlertDialog; toasts with sonner.
- Theme colours applied as CSS variable overrides from settings; favicon/title from settings in head.
- Verify with browser tests: sign in, edit text, upload image, add/delete/reorder a dish, refresh and confirm persistence.
