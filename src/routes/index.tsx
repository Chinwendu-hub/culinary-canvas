import { createFileRoute } from "@tanstack/react-router";
import { ChefPortfolio } from "@/components/chef-portfolio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Asuzu Nkemjika Anestecia | Professional Chef Portfolio" },
      { name: "description", content: "Explore the professional chef portfolio of Asuzu Nkemjika Anestecia, specializing in Nigerian/Afro fusion cuisine, continental dishes, pastry, private dining, and custom menu development." },
      { property: "og:title", content: "Asuzu Nkemjika Anestecia | Professional Chef Portfolio" },
      { property: "og:description", content: "African fusion, continental cuisine, pastry, private dining, and thoughtfully crafted culinary experiences." },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Asuzu Nkemjika Anestecia",
        jobTitle: "Professional Chef",
        email: "mailto:asuzunkemjika2002@gmail.com",
        telephone: "08106230253",
        knowsAbout: ["Nigerian cuisine", "African fusion cuisine", "Continental cuisine", "Pastry", "Private dining", "Menu development"],
      }),
    }],
  }),
  component: ChefPortfolio,
});
