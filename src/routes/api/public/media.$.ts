import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/api/public/media/$")({
  server: {
    handlers: {
      GET: async ({ params }) => {
        const path = params._splat ?? "";
        if (!/^[\w\-./]+$/.test(path) || path.includes("..")) return new Response("Not found", { status: 404 });
        const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
        const { data, error } = await supabaseAdmin.storage.from("site-media").download(path);
        if (error || !data) return new Response("Not found", { status: 404 });
        return new Response(data, {
          headers: {
            "content-type": data.type || "application/octet-stream",
            "cache-control": "public, max-age=31536000, immutable",
          },
        });
      },
    },
  },
});
