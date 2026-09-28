import heroImage from "@/assets/chef-hero.jpg";
import profileImage from "@/assets/chef-profile.jpg";
import pastaImage from "@/assets/signature-pasta.jpg";
import dessertImage from "@/assets/plated-dessert.jpg";
import fusionImage from "@/assets/afro-fusion-dish.jpg";
import diningImage from "@/assets/private-dining.jpg";
import pastryImage from "@/assets/pastry-service.jpg";
import planningImage from "@/assets/menu-planning.jpg";

/** An image slot. `src` empty = no image. `position` = CSS object-position ("" keeps the design default). */
export type Img = { src: string; alt: string; position: string };

export const ICON_OPTIONS = [
  ["pot", "Cooking pot"],
  ["cutlery", "Knife & fork"],
  ["cake", "Cake"],
  ["hat", "Chef hat"],
  ["wheat", "Wheat"],
  ["sparkles", "Sparkles"],
  ["users", "Guests"],
  ["clock", "Clock"],
] as const;
export type IconName = (typeof ICON_OPTIONS)[number][0];

export const FONT_OPTIONS = [
  ["cormorant", "Cormorant Garamond (current)", '"Cormorant Garamond", Georgia, serif'],
  ["playfair", "Playfair Display", '"Playfair Display", Georgia, serif'],
  ["dmserif", "DM Serif Display", '"DM Serif Display", Georgia, serif'],
] as const;

export const POSITION_OPTIONS = [
  ["", "Default"],
  ["center", "Centre"],
  ["top", "Top"],
  ["bottom", "Bottom"],
  ["left", "Left"],
  ["right", "Right"],
] as const;

export const VIDEO_TYPES = [
  ["youtube", "YouTube"],
  ["instagram", "Instagram"],
  ["tiktok", "TikTok"],
  ["upload", "Uploaded video"],
] as const;

const img = (src: string, alt: string): Img => ({ src, alt, position: "" });

export const defaultContent = {
  settings: {
    siteTitle: "Asuzu Nkemjika Anestecia | Professional Chef Portfolio",
    logo: img("", "Logo"),
    favicon: "",
    accentColor: "",
    darkColor: "",
    lightColor: "",
    headingFont: "cormorant",
    footerNote: "Crafted with care, like every plate.",
  },
  profile: {
    fullName: "Asuzu Nkemjika Anestecia",
    shortName: "Asuzu Nkemjika",
    title: "Professional Chef",
    tagline: "Crafting Memorable Culinary Experiences",
  },
  hero: {
    eyebrow: "PROFESSIONAL CHEF PORTFOLIO",
    firstLine: "Asuzu Nkemjika",
    secondLine: "Anestecia",
    intro: "African heritage, continental craft, and artful pastry—brought together with precision and an instinct for unforgettable hospitality.",
    primaryCta: "View My Work",
    secondaryCta: "Let's Connect",
    highlights: ["African fusion", "Continental", "Pastry"],
    image: img(heroImage, "Professional chef Asuzu in a contemporary kitchen"),
  },
  about: {
    eyebrow: "The Story",
    heading: "ABOUT ME",
    paragraphs: [
      "With a passion for creating exceptional dining experiences, I bring dedication and creativity to every dish I craft. My culinary journey is driven by a commitment to excellence and a deep respect for both traditional techniques and innovative approaches.",
      "I specialize in African fusion cuisine, continental dishes, and exquisite pastry work. My goal is to deliver memorable culinary experiences that showcase quality ingredients, refined techniques, and artistic presentation.",
      "Whether working in fine dining or private service, I approach every opportunity with professionalism, precision, and a genuine love for the craft of cooking.",
    ],
    badgeLabel: "Chef Profile",
    badgeText: "Precision. Creativity. Genuine hospitality.",
    image: img(profileImage, "Chef Asuzu finishing a plated dish"),
  },
  specialties: {
    eyebrow: "Culinary Point of View",
    heading: "CULINARY SPECIALTIES",
    intro: "My expertise spans three distinct culinary domains, each representing years of focused study and hands-on experience.",
    items: [
      { id: "sp1", title: "Nigerian/Afro Fusion", icon: "pot" as IconName, description: "Nigerian traditional dishes elevated with modern fusion techniques. Bold flavors, authentic ingredients, and cultural storytelling through food." },
      { id: "sp2", title: "Continental Cuisine", icon: "cutlery" as IconName, description: "European-inspired preparations with refined techniques. Classic methods meet contemporary presentation for sophisticated dining experiences." },
      { id: "sp3", title: "Pastry & Desserts", icon: "cake" as IconName, description: "Artistic cakes, delicate pastries, and plated desserts. Precision work with sugar, chocolate, and seasonal ingredients for memorable sweet endings." },
    ],
  },
  skills: {
    eyebrow: "The Craft",
    heading: "SIGNATURE SKILLS",
    items: [
      ["Food Preparation & Cooking Techniques", "Experienced in efficient ingredient preparation and a variety of cooking methods, with a focus on flavour development."],
      ["Menu Planning & Recipe Development", "Creating cohesive menus that balance flavors, textures, and presentation."],
      ["Creative Plating & Presentation", "Artistic arrangement that enhances both visual appeal and dining experience."],
      ["Kitchen Operations & Workflow", "Efficient systems management for seamless service execution."],
      ["Food Safety & Sanitation", "Rigorous standards compliance ensuring guest safety and quality."],
      ["High-Pressure Time Management", "Thriving in demanding environments while maintaining precision."],
      ["Team Collaboration & Communication", "Building cohesive kitchen teams through clear direction and mutual respect."],
      ["Inventory & Quality Control", "Strategic ingredient sourcing and meticulous quality oversight."],
    ].map(([title, description], i) => ({ id: `sk${i + 1}`, title: title!, description: description! })),
  },
  portfolio: {
    eyebrow: "Selected Work",
    heading: "PORTFOLIO SHOWCASE",
    intro: "A curated selection of signature dishes that demonstrate technical skill, creative vision, and attention to detail.",
    items: [
      { id: "d1", title: "Signature Main Course", category: "Continental", videoUrl: "", image: img(pastaImage, "Penne pasta in a tomato reduction with fresh basil"), description: "Refined penne pasta in a delicate white wine–infused tomato reduction, layered with aromatic herbs and finished with a vibrant basil accent." },
      { id: "d2", title: "Plated Dessert", category: "Pastry", videoUrl: "", image: img(dessertImage, "Artfully plated chocolate dessert with berries and caramel"), description: "Elevated sweet creation showcasing pastry technique and artistic presentation." },
      { id: "d3", title: "African Fusion", category: "Afro Fusion", videoUrl: "", image: img(fusionImage, "Afro-fusion rice with suya chicken kebabs and coleslaw"), description: "Afro-fusion Gochujang fried rice layered with bold umami spice, paired with crisp Asian-style coleslaw and smoky suya chicken kebabs, finished with a bright citrus accent." },
    ],
  },
  menu: {
    eyebrow: "A Tasting Journey",
    heading: "SAMPLE MENU",
    intro: "A conceptual fine-dining experience blending African fusion with continental elegance.",
    note: "Menus are thoughtfully tailored to occasion, season, and guest preferences",
    items: [
      { id: "m1", course: "Appetizer", title: "African-Inspired Starter", price: "", image: img("", ""), description: "Traditional flavors presented with modern technique. Features authentic spices and locally-sourced ingredients arranged for visual impact." },
      { id: "m2", course: "Main Course", title: "Continental Fusion Entree", price: "", image: img("", ""), description: "Premium protein preparation showcasing classical French techniques with African spice profiles. Accompanied by seasonal vegetables and refined sauces." },
      { id: "m3", course: "Dessert", title: "Artisanal Sweet Creation", price: "", image: img("", ""), description: "Hand-crafted pastry featuring seasonal ingredients, chocolate work, and artistic plating. Designed to provide a memorable conclusion to the dining experience." },
    ],
  },
  caseStudy: {
    eyebrow: "Private Service",
    headingStart: "CASE STUDY:",
    headingHighlight: "PRIVATE DINING",
    headingEnd: "EXPERIENCE",
    image: img(diningImage, "Private fine dining table prepared for guests"),
    steps: [
      ["Objective", "Create an intimate six-course dining experience for a private client seeking authentic yet innovative African fusion cuisine. The menu needed to balance traditional flavors with contemporary presentation while accommodating specific dietary preferences."],
      ["Menu Selection", "Curated tasting menu featuring Nigerian-inspired appetizers, fusion main courses, and artisanal desserts. Each course designed to tell a story through ingredients and technique."],
      ["Execution Approach", "Conducted pre-service consultation to understand guest preferences and restrictions. Developed custom recipes balancing authenticity with accessibility. Implemented mise en place systems ensuring seamless service."],
      ["Outcome", "Exceptional guest feedback highlighting both flavor profiles and presentation quality. Successful execution demonstrated ability to deliver premium private dining experiences under pressure."],
    ].map(([title, description], i) => ({ id: `cs${i + 1}`, title: title!, description: description! })),
  },
  services: {
    eyebrow: "Ways to Work Together",
    heading: "SERVICES OFFERED",
    ctaLabel: "Enquire Now",
    items: [
      { id: "s1", title: "Private Chef Services", icon: "hat" as IconName, image: img(diningImage, "Private dining table set with individual fine-dining courses"), description: "In-home dining experiences featuring custom menus, wine pairings, and professional service for intimate gatherings or special occasions." },
      { id: "s2", title: "Pastries and Dessert", icon: "cake" as IconName, image: img(pastryImage, "Chef presenting loaf cakes, muffins and cookies"), description: "Skilled in preparing a variety of baked goods, including loaf cakes, muffins, cookies, etc. Focused on product balance, presentation, and consistency, with hands-on experience in baking and dessert preparation." },
      { id: "s3", title: "Custom Menu Planning", icon: "wheat" as IconName, image: img(planningImage, "Fine-dining dishes and ingredients surrounding a menu notebook"), description: "Experienced in planning and organizing balanced meals, menu development, portion control, ingredient coordination, and preparation scheduling to ensure efficiency and consistency in food service." },
    ],
  },
  videos: {
    eyebrow: "Behind the Kitchen",
    heading: "Chef in Action",
    subheading: "Watch the craft come to life.",
    ctaLabel: "View Cooking Videos",
    backgroundImage: img(fusionImage, "A richly plated African fusion dish"),
    items: [] as { id: string; title: string; description: string; url: string; type: string; thumbnail: Img }[],
  },
  testimonials: {
    eyebrow: "Kind Words",
    heading: "TESTIMONIALS",
    items: [] as { id: string; quote: string; name: string; role: string }[],
  },
  whyHire: {
    eyebrow: "A Thoughtful Partner",
    heading: "WHY HIRE ME",
    quote: "I create more than meals; I create experiences. With a strong foundation in savory cooking and growing expertise in pastry, I bring variety, creativity, and attention to detail into every dish. I understand the importance of presentation, atmosphere, and client satisfaction, making each dining experience personal and memorable.",
    ctaLabel: "Work With Me",
    image: img(profileImage, "Chef Asuzu at work in the kitchen"),
  },
  contact: {
    eyebrow: "Let's Connect",
    heading: "GET IN TOUCH",
    intro: "Ready to discuss how I can contribute to your culinary team or create a memorable dining experience for your next event?",
    email: "asuzunkemjika2002@gmail.com",
    phone: "08106230253",
    whatsapp: "",
    location: "Available for opportunities nationwide",
    availableFor: ["Full-time chef positions", "Private chef engagements", "Consulting opportunities", "Menu development projects"],
  },
  social: { instagram: "", tiktok: "", facebook: "", linkedin: "", youtube: "" },
};

export type SiteContent = typeof defaultContent;

/** Stored content overrides defaults section by section, so new fields always have a value. */
export function mergeContent(stored: unknown): SiteContent {
  const s = (stored && typeof stored === "object" ? stored : {}) as Record<string, unknown>;
  const out: Record<string, unknown> = {};
  for (const key of Object.keys(defaultContent) as (keyof SiteContent)[]) {
    const section = s[key];
    out[key] = section && typeof section === "object" ? { ...defaultContent[key], ...section } : defaultContent[key];
  }
  return out as SiteContent;
}

export const newId = () => (typeof crypto !== "undefined" && "randomUUID" in crypto ? crypto.randomUUID() : String(Date.now() + Math.random()));

export function telHref(phone: string) {
  const digits = phone.replace(/[^\d+]/g, "");
  return `tel:${digits.startsWith("0") ? `+234${digits.slice(1)}` : digits}`;
}

export function whatsappHref(num: string) {
  let d = num.replace(/\D/g, "");
  if (d.startsWith("0")) d = `234${d.slice(1)}`;
  return `https://wa.me/${d}`;
}

export function youtubeId(url: string) {
  const m = url.match(/(?:youtu\.be\/|v=|embed\/|shorts\/)([\w-]{11})/);
  return m?.[1] ?? null;
}
