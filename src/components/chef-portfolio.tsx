import { useEffect, useRef, useState, type FormEvent, type ReactNode } from "react";
import emailjs from "@emailjs/browser";
import {
  ArrowDown,
  ArrowRight,
  ArrowUp,
  CakeSlice,
  ChefHat,
  Clock3,
  CookingPot,
  Expand,
  Instagram,
  Mail,
  MapPin,
  Menu,
  Phone,
  Quote,
  Sparkles,
  UtensilsCrossed,
  UsersRound,
  Wheat,
  X,
} from "lucide-react";

import heroImage from "@/assets/chef-hero.jpg";
import profileImage from "@/assets/chef-profile.jpg";
import pastaImage from "@/assets/signature-pasta.jpg";
import dessertImage from "@/assets/plated-dessert.jpg";
import fusionImage from "@/assets/afro-fusion-dish.jpg";
import diningImage from "@/assets/private-dining.jpg";
import pastryImage from "@/assets/pastry-service.jpg";
import planningImage from "@/assets/menu-planning.jpg";
import { Button } from "@/components/ui/button";

const navItems = [
  ["Home", "home"],
  ["About", "about"],
  ["Specialties", "specialties"],
  ["Skills", "skills"],
  ["Portfolio", "portfolio"],
  ["Menu", "sample-menu"],
  ["Services", "services"],
  ["Contact", "contact"],
] as const;

const specialties = [
  {
    number: "01",
    title: "Nigerian/Afro Fusion",
    description:
      "Nigerian traditional dishes elevated with modern fusion techniques. Bold flavors, authentic ingredients, and cultural storytelling through food.",
    icon: CookingPot,
  },
  {
    number: "02",
    title: "Continental Cuisine",
    description:
      "European-inspired preparations with refined techniques. Classic methods meet contemporary presentation for sophisticated dining experiences.",
    icon: UtensilsCrossed,
  },
  {
    number: "03",
    title: "Pastry & Desserts",
    description:
      "Artistic cakes, delicate pastries, and plated desserts. Precision work with sugar, chocolate, and seasonal ingredients for memorable sweet endings.",
    icon: CakeSlice,
  },
];

const skills = [
  ["Food Preparation & Cooking Techniques", "Experienced in efficient ingredient preparation and a variety of cooking methods, with a focus on flavour development."],
  ["Menu Planning & Recipe Development", "Creating cohesive menus that balance flavors, textures, and presentation."],
  ["Creative Plating & Presentation", "Artistic arrangement that enhances both visual appeal and dining experience."],
  ["Kitchen Operations & Workflow", "Efficient systems management for seamless service execution."],
  ["Food Safety & Sanitation", "Rigorous standards compliance ensuring guest safety and quality."],
  ["High-Pressure Time Management", "Thriving in demanding environments while maintaining precision."],
  ["Team Collaboration & Communication", "Building cohesive kitchen teams through clear direction and mutual respect."],
  ["Inventory & Quality Control", "Strategic ingredient sourcing and meticulous quality oversight."],
];

const dishes = [
  {
    title: "Signature Main Course",
    category: "Continental",
    image: pastaImage,
    alt: "Penne pasta in a tomato reduction with fresh basil",
    description:
      "Refined penne pasta in a delicate white wine–infused tomato reduction, layered with aromatic herbs and finished with a vibrant basil accent.",
  },
  {
    title: "Plated Dessert",
    category: "Pastry",
    image: dessertImage,
    alt: "Artfully plated chocolate dessert with berries and caramel",
    description: "Elevated sweet creation showcasing pastry technique and artistic presentation.",
  },
  {
    title: "African Fusion",
    category: "Afro Fusion",
    image: fusionImage,
    alt: "Afro-fusion rice with suya chicken kebabs and coleslaw",
    description:
      "Afro-fusion Gochujang fried rice layered with bold umami spice, paired with crisp Asian-style coleslaw and smoky suya chicken kebabs, finished with a bright citrus accent.",
  },
];

const sampleMenu = [
  {
    course: "Appetizer",
    title: "African-Inspired Starter",
    description:
      "Traditional flavors presented with modern technique. Features authentic spices and locally-sourced ingredients arranged for visual impact.",
  },
  {
    course: "Main Course",
    title: "Continental Fusion Entree",
    description:
      "Premium protein preparation showcasing classical French techniques with African spice profiles. Accompanied by seasonal vegetables and refined sauces.",
  },
  {
    course: "Dessert",
    title: "Artisanal Sweet Creation",
    description:
      "Hand-crafted pastry featuring seasonal ingredients, chocolate work, and artistic plating. Designed to provide a memorable conclusion to the dining experience.",
  },
];


const services = [
  {
    title: "Private Chef Services",
    description:
      "In-home dining experiences featuring custom menus, wine pairings, and professional service for intimate gatherings or special occasions.",
    image: diningImage,
    alt: "Private dining table set with individual fine-dining courses",
    icon: ChefHat,
  },
  {
    title: "Pastries and Dessert",
    description:
      "Skilled in preparing a variety of baked goods, including loaf cakes, muffins, cookies, etc. Focused on product balance, presentation, and consistency, with hands-on experience in baking and dessert preparation.",
    image: pastryImage,
    alt: "Chef presenting loaf cakes, muffins and cookies",
    icon: CakeSlice,
  },
  {
    title: "Custom Menu Planning",
    description:
      "Experienced in planning and organizing balanced meals, menu development, portion control, ingredient coordination, and preparation scheduling to ensure efficiency and consistency in food service.",
    image: planningImage,
    alt: "Fine-dining dishes and ingredients surrounding a menu notebook",
    icon: Wheat,
  },
];

function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry?.isIntersecting) {
        setVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.12 });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return <div ref={ref} className={`reveal ${visible ? "is-visible" : ""} ${className}`}>{children}</div>;
}

function SectionHeading({ eyebrow, title, intro, light = false }: { eyebrow?: string; title: string; intro?: string; light?: boolean }) {
  return (
    <div className="mb-12 max-w-3xl md:mb-16">
      {eyebrow && <p className={`eyebrow ${light ? "text-gold" : "text-primary"}`}>{eyebrow}</p>}
      <h2 className={`display-title mt-4 ${light ? "text-ivory" : "text-foreground"}`}>{title}</h2>
      {intro && <p className={`mt-5 max-w-2xl text-base leading-7 md:text-lg ${light ? "text-ivory-muted" : "text-muted-foreground"}`}>{intro}</p>}
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled || open ? "bg-charcoal/95 shadow-nav backdrop-blur-md" : "bg-transparent"}`}>
      <div className="mx-auto flex h-20 max-w-screen-2xl items-center gap-4 px-5 md:h-24 md:px-10 xl:px-16">
        <a href="#home" className="flex shrink-0 items-center gap-2.5" aria-label="Asuzu Nkemjika Anestecia, home">
          <span className="grid size-10 shrink-0 place-items-center rounded-full border border-gold/60 text-gold"><ChefHat className="size-5" /></span>
          <span className="min-w-0">
            <span className="block truncate text-base font-display text-ivory lg:text-lg">Asuzu Nkemjika</span>
            <span className="hidden text-[10px] uppercase tracking-[0.22em] text-gold lg:block">Professional Chef</span>
          </span>
        </a>
        <nav className="ml-auto hidden items-center gap-3 md:flex lg:gap-5" aria-label="Primary navigation">
          {navItems.map(([label, id]) => <a key={id} href={`#${id}`} className="nav-link">{label}</a>)}
        </nav>
        <Button asChild variant="gold" size="lg" className="ml-2 hidden md:ml-3 md:inline-flex">
          <a href="#contact">Hire Me <ArrowRight /></a>
        </Button>
        <Button variant="ghostLight" size="iconLg" onClick={() => setOpen(!open)} aria-expanded={open} aria-label={open ? "Close navigation" : "Open navigation"} className="ml-auto md:hidden">
          {open ? <X /> : <Menu />}
        </Button>
      </div>
      {open && (
        <nav className="border-t border-ivory/10 bg-charcoal px-5 pb-7 pt-3 md:hidden" aria-label="Mobile navigation">
          {navItems.map(([label, id]) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)} className="block border-b border-ivory/10 py-3.5 font-display text-xl text-ivory">{label}</a>)}
          <Button asChild variant="gold" size="lg" className="mt-5 w-full"><a href="#contact" onClick={() => setOpen(false)}>Hire Me <ArrowRight /></a></Button>
        </nav>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="relative flex min-h-[760px] items-end overflow-hidden bg-charcoal md:min-h-[800px]">
      <img src={heroImage} alt="Professional chef Asuzu in a contemporary kitchen" className="absolute inset-0 h-full w-full object-cover object-[68%_center] md:object-center" width={1920} height={1080} fetchPriority="high" />
      <div className="absolute inset-0 bg-hero-overlay" />
      <div className="relative z-10 mx-auto w-full max-w-screen-2xl px-5 pb-20 pt-36 md:px-10 md:pb-24 xl:px-16">
        <div className="max-w-3xl animate-hero">
          <p className="eyebrow text-gold">PORTFOLIO</p>
          <h1 className="mt-7 font-display text-[clamp(3.5rem,7.6vw,7.4rem)] leading-[0.88] text-ivory">Asuzu Nkemjika<br /><em className="font-normal text-gold">Anestecia</em></h1>
          <p className="mt-7 max-w-xl font-display text-2xl leading-snug text-ivory md:text-3xl">Crafting Memorable Culinary Experiences</p>
          <p className="mt-5 max-w-lg text-sm leading-7 text-ivory-muted md:text-base">African heritage, continental craft, and artful pastry—brought together with precision and an instinct for unforgettable hospitality.</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button asChild variant="gold" size="xl"><a href="#portfolio">View My Work <ArrowDown /></a></Button>
            <Button asChild variant="outlineLight" size="xl"><a href="#contact">Let&apos;s Connect <ArrowRight /></a></Button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 right-0 z-10 hidden items-center gap-5 border-l border-t border-ivory/15 bg-charcoal/60 px-8 py-5 text-ivory-muted backdrop-blur-sm lg:flex">
        <span className="font-display text-lg text-ivory">African fusion</span><span className="size-1 rounded-full bg-gold" /><span>Continental</span><span className="size-1 rounded-full bg-gold" /><span>Pastry</span>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="section-pad bg-background">
      <div className="section-shell grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <Reveal className="relative">
          <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
            <img src={profileImage} alt="Chef Asuzu finishing a plated dish" loading="lazy" className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.03]" width={1200} height={1600} />
          </div>
          <div className="absolute -bottom-6 -right-2 max-w-[230px] border border-gold/30 bg-charcoal p-6 text-ivory shadow-elevated md:-right-8">
            <Sparkles className="mb-4 size-5 text-gold" />
            <p className="eyebrow text-gold">Chef Profile</p>
            <p className="mt-2 font-display text-xl">Precision. Creativity. Genuine hospitality.</p>
          </div>
        </Reveal>
        <Reveal>
          <SectionHeading eyebrow="The Story" title="ABOUT ME" />
          <div className="space-y-5 text-base leading-8 text-muted-foreground">
            <p>With a passion for creating exceptional dining experiences, I bring dedication and creativity to every dish I craft. My culinary journey is driven by a commitment to excellence and a deep respect for both traditional techniques and innovative approaches.</p>
            <p>I specialize in African fusion cuisine, continental dishes, and exquisite pastry work. My goal is to deliver memorable culinary experiences that showcase quality ingredients, refined techniques, and artistic presentation.</p>
            <p>Whether working in fine dining or private service, I approach every opportunity with professionalism, precision, and a genuine love for the craft of cooking.</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Specialties() {
  return (
    <section id="specialties" className="section-pad bg-soft">
      <Reveal className="section-shell">
        <SectionHeading eyebrow="Culinary Point of View" title="CULINARY SPECIALTIES" intro="My expertise spans three distinct culinary domains, each representing years of focused study and hands-on experience." />
        <div className="grid gap-px overflow-hidden rounded-sm border border-border bg-border lg:grid-cols-3">
          {specialties.map(({ number, title, description, icon: Icon }) => (
            <article key={title} className="group bg-background p-8 transition-colors duration-500 hover:bg-charcoal md:p-10">
              <div className="flex items-center justify-between"><Icon className="size-8 text-primary group-hover:text-gold" strokeWidth={1.4} /><span className="font-display text-5xl text-border group-hover:text-ivory/15">{number}</span></div>
              <h3 className="mt-16 font-display text-3xl text-foreground transition-colors group-hover:text-ivory">{title}</h3>
              <p className="mt-5 leading-7 text-muted-foreground transition-colors group-hover:text-ivory-muted">{description}</p>
              <div className="mt-8 h-px w-12 bg-primary transition-all duration-500 group-hover:w-full group-hover:bg-gold" />
            </article>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="section-pad bg-charcoal">
      <Reveal className="section-shell">
        <SectionHeading eyebrow="The Craft" title="SIGNATURE SKILLS" light />
        <div className="grid gap-px bg-ivory/10 md:grid-cols-2 lg:grid-cols-4">
          {skills.map(([title, description], index) => (
            <article key={title} className="group min-h-72 bg-charcoal p-7 transition-colors duration-300 hover:bg-charcoal-raised">
              <div className="flex items-center justify-between"><span className="font-display text-3xl text-gold">{String(index + 1).padStart(2, "0")}</span><ArrowRight className="size-5 text-ivory/25 transition-transform group-hover:translate-x-1 group-hover:text-gold" /></div>
              <h3 className="mt-12 font-display text-2xl leading-tight text-ivory">{title}</h3>
              <p className="mt-4 text-sm leading-6 text-ivory-muted">{description}</p>
            </article>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

function Portfolio() {
  const [selected, setSelected] = useState<(typeof dishes)[number] | null>(null);
  const [expanded, setExpanded] = useState<string | null>(null);

  useEffect(() => {
    if (!selected) return;
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && setSelected(null);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [selected]);

  return (
    <section id="portfolio" className="section-pad bg-background">
      <Reveal className="section-shell">
        <SectionHeading eyebrow="Selected Work" title="PORTFOLIO SHOWCASE" intro="A curated selection of signature dishes that demonstrate technical skill, creative vision, and attention to detail." />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-12">
          {dishes.map((dish, index) => (
            <article key={dish.title} className={`group ${index === 0 ? "lg:col-span-7" : index === 1 ? "lg:col-span-5" : "md:col-span-2 lg:col-span-12"}`}>
              <button type="button" onClick={() => setSelected(dish)} className={`relative block w-full cursor-zoom-in overflow-hidden rounded-sm text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary ${index === 2 ? "aspect-[16/7]" : "aspect-[4/3]"}`} aria-label={`Open larger image of ${dish.title}`}>
                <img src={dish.image} alt={dish.alt} loading="lazy" width={1408} height={1104} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <span className="absolute right-4 top-4 grid size-11 place-items-center rounded-full bg-charcoal/75 text-ivory opacity-100 backdrop-blur-sm transition-opacity md:opacity-0 md:group-hover:opacity-100"><Expand className="size-4" /></span>
                <span className="absolute inset-x-0 bottom-0 bg-image-fade px-6 pb-6 pt-20 text-ivory">
                  <span className="eyebrow text-gold">{dish.category}</span>
                  <span className="mt-2 block font-display text-3xl md:text-4xl">{dish.title}</span>
                </span>
              </button>
              <div className="border-x border-b border-border p-5">
                <p className={`${expanded === dish.title ? "" : "line-clamp-2"} leading-7 text-muted-foreground`}>{dish.description}</p>
                <Button variant="linkGold" className="mt-3 px-0" onClick={() => setExpanded(expanded === dish.title ? null : dish.title)}>{expanded === dish.title ? "Show Less" : "View Details"}<ArrowRight /></Button>
              </div>
            </article>
          ))}
        </div>
      </Reveal>
      {selected && (
        <div className="fixed inset-0 z-[70] grid place-items-center bg-charcoal/95 p-4 backdrop-blur-sm" role="dialog" aria-modal="true" aria-label={`${selected.title} image preview`} onClick={() => setSelected(null)}>
          <Button variant="ghostLight" size="iconLg" className="absolute right-5 top-5" onClick={() => setSelected(null)} aria-label="Close image"><X /></Button>
          <figure className="max-w-5xl" onClick={(event) => event.stopPropagation()}>
            <img src={selected.image} alt={selected.alt} className="max-h-[78vh] w-full rounded-sm object-contain" width={1408} height={1104} />
            <figcaption className="mt-4 text-center font-display text-2xl text-ivory">{selected.title}</figcaption>
          </figure>
        </div>
      )}
    </section>
  );
}

function SampleMenu() {
  return (
    <section id="sample-menu" className="section-pad bg-menu-texture">
      <Reveal className="section-shell">
        <div className="mx-auto max-w-3xl text-center"><SectionHeading eyebrow="A Tasting Journey" title="SAMPLE MENU" intro="A conceptual fine-dining experience blending African fusion with continental elegance." /></div>
        <div className="mx-auto max-w-5xl border-y border-primary/30">
          {sampleMenu.map((item, index) => (
            <article key={item.course} className="grid gap-5 border-b border-border py-9 last:border-0 md:grid-cols-[140px_1fr_auto] md:items-center md:gap-10">
              <span className="eyebrow text-primary">{String(index + 1).padStart(2, "0")} · {item.course}</span>
              <div><h3 className="font-display text-3xl text-foreground">{item.title}</h3><p className="mt-3 max-w-2xl leading-7 text-muted-foreground">{item.description}</p></div>
              <span className="hidden size-12 place-items-center rounded-full border border-primary/30 text-primary md:grid"><UtensilsCrossed className="size-4" /></span>
            </article>
          ))}
        </div>
        <p className="mt-8 text-center text-xs uppercase tracking-[0.2em] text-muted-foreground">Menus are thoughtfully tailored to occasion, season, and guest preferences</p>
      </Reveal>
    </section>
  );
}


function Services() {
  return (
    <section id="services" className="section-pad bg-background">
      <Reveal className="section-shell">
        <SectionHeading eyebrow="Ways to Work Together" title="SERVICES OFFERED" />
        <div className="grid gap-6 lg:grid-cols-3">
          {services.map(({ title, description, image, alt, icon: Icon }) => (
            <article key={title} className="group overflow-hidden rounded-sm border border-border bg-card shadow-soft transition-transform duration-500 hover:-translate-y-1 hover:shadow-elevated">
              <div className="aspect-[4/3] overflow-hidden"><img src={image} alt={alt} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" width={1408} height={1104} /></div>
              <div className="p-7"><Icon className="size-7 text-primary" strokeWidth={1.5} /><h3 className="mt-6 font-display text-3xl text-foreground">{title}</h3><p className="mt-4 min-h-28 leading-7 text-muted-foreground">{description}</p><Button asChild variant="outlineGold" size="lg" className="mt-6 w-full"><a href="#contact">Enquire Now <ArrowRight /></a></Button></div>
            </article>
          ))}
        </div>
      </Reveal>
    </section>
  );
}


function WhyHire() {
  return (
    <section className="bg-gold-soft">
      <div className="grid lg:grid-cols-2">
        <Reveal className="min-h-[520px]"><img src={profileImage} alt="Chef Asuzu at work in the kitchen" loading="lazy" className="h-full min-h-[520px] w-full object-cover object-top" width={1200} height={1600} /></Reveal>
        <Reveal className="flex items-center px-6 py-16 md:px-14 lg:px-16 xl:px-24">
          <div className="max-w-2xl"><Quote className="size-10 text-primary" strokeWidth={1.2} /><p className="eyebrow mt-7 text-primary">A Thoughtful Partner</p><h2 className="display-title mt-4 text-foreground">WHY HIRE ME</h2><p className="mt-7 font-display text-2xl leading-relaxed text-foreground md:text-3xl">“I create more than meals; I create experiences. With a strong foundation in savory cooking and growing expertise in pastry, I bring variety, creativity, and attention to detail into every dish. I understand the importance of presentation, atmosphere, and client satisfaction, making each dining experience personal and memorable.”</p><Button asChild variant="dark" size="xl" className="mt-9"><a href="#contact">Work With Me <ArrowRight /></a></Button></div>
        </Reveal>
      </div>
    </section>
  );
}

function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState("");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;

    const publicKey = import.meta.env["VITE_EMAILJS_PUBLIC_KEY"];
    const serviceId = import.meta.env["VITE_EMAILJS_SERVICE_ID"];
    const notificationTemplateId = import.meta.env["VITE_EMAILJS_NOTIFICATION_TEMPLATE_ID"];
    const autoReplyTemplateId = import.meta.env["VITE_EMAILJS_AUTOREPLY_TEMPLATE_ID"];
    if (!publicKey || !serviceId || !notificationTemplateId || !autoReplyTemplateId) {
      setStatus("error");
      setError("The contact form is not configured yet. Please email directly instead.");
      return;
    }

    const data = new FormData(form);
    const templateParams = {
      name: String(data.get("name") ?? "").slice(0, 100),
      email: String(data.get("email") ?? "").slice(0, 254),
      phone: String(data.get("phone") ?? "").slice(0, 30),
      subject: String(data.get("subject") ?? "Chef portfolio enquiry").slice(0, 120),
      message: String(data.get("message") ?? "").slice(0, 2000),
    };

    setStatus("sending");
    setError("");
    try {
      await emailjs.send(serviceId, notificationTemplateId, templateParams, publicKey);
      await emailjs.send(serviceId, autoReplyTemplateId, templateParams, publicKey);
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
      setError("Something went wrong while sending. Please email directly instead.");
    }
  }

  return (
    <section id="contact" className="section-pad bg-charcoal text-ivory">
      <div className="section-shell grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <Reveal>
          <p className="eyebrow text-gold">Let&apos;s Connect</p><h2 className="display-title mt-4 text-ivory">GET IN TOUCH</h2>
          <p className="mt-6 max-w-lg text-lg leading-8 text-ivory-muted">Ready to discuss how I can contribute to your culinary team or create a memorable dining experience for your next event?</p>
          <div className="mt-9 space-y-5">
            <a href="mailto:asuzunkemjika2002@gmail.com" className="contact-link"><Mail /><span>asuzunkemjika2002@gmail.com</span></a>
            <a href="tel:+2348106230253" className="contact-link"><Phone /><span>08106230253</span></a>
            <div className="contact-link"><MapPin /><span>Available for opportunities nationwide</span></div>
          </div>
          <div className="mt-10 border-t border-ivory/15 pt-7"><p className="eyebrow text-gold">Available For</p><ul className="mt-5 grid gap-3 sm:grid-cols-2">{["Full-time chef positions", "Private chef engagements", "Consulting opportunities", "Menu development projects"].map((item) => <li key={item} className="flex items-start gap-3 text-sm text-ivory-muted"><span className="mt-2 size-1.5 shrink-0 rounded-full bg-gold" />{item}</li>)}</ul></div>
        </Reveal>
        <Reveal>
          <form onSubmit={submit} className="border border-ivory/15 bg-charcoal-raised p-6 md:p-9" aria-label="Contact form">
            <div className="grid gap-6 sm:grid-cols-2">
              <Field label="Name" name="name" autoComplete="name" required maxLength={100} />
              <Field label="Email" name="email" type="email" autoComplete="email" required maxLength={254} />
              <Field label="Phone" name="phone" type="tel" autoComplete="tel" maxLength={30} />
              <Field label="Subject" name="subject" required maxLength={120} />
            </div>
            <label className="mt-6 block"><span className="form-label">Message</span><textarea name="message" required maxLength={2000} rows={6} className="form-input resize-y" /></label>
            <Button type="submit" variant="gold" size="xl" className="mt-7 w-full" disabled={status === "sending"}>{status === "sending" ? "Sending..." : "Send Inquiry"} {status !== "sending" && <ArrowRight />}</Button>
            <p className="mt-4 text-center text-xs leading-5 text-ivory-muted">You&apos;ll receive an email confirmation immediately after submitting.</p>
            {status === "sent" && <p role="status" className="mt-3 text-center text-sm text-gold">Message sent. A confirmation email is on its way.</p>}
            {status === "error" && <p role="alert" className="mt-3 text-center text-sm text-red-300">{error}</p>}
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Field({ label, ...props }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return <label className="block"><span className="form-label">{label}</span><input {...props} className="form-input" /></label>;
}

function Footer() {
  return (
    <footer className="border-t border-ivory/10 bg-charcoal-deep px-5 py-14 text-ivory md:px-10">
      <div className="mx-auto grid max-w-screen-xl gap-10 md:grid-cols-[1.3fr_0.7fr_1fr]">
        <div><ChefHat className="size-9 text-gold" /><h2 className="mt-5 font-display text-3xl">Asuzu Nkemjika Anestecia</h2><p className="mt-2 text-sm uppercase tracking-[0.18em] text-gold">Professional Chef</p><p className="mt-4 font-display text-xl text-ivory-muted">Crafting Memorable Culinary Experiences</p></div>
        <div><p className="eyebrow text-gold">Quick Links</p><div className="mt-5 grid gap-3">{navItems.filter((_, index) => [0,1,2,4,6,7].includes(index)).map(([label, id]) => <a key={id} href={`#${id}`} className="text-sm text-ivory-muted transition-colors hover:text-gold">{label}</a>)}</div></div>
        <div><p className="eyebrow text-gold">Contact</p><div className="mt-5 space-y-3 text-sm text-ivory-muted"><a className="block break-all hover:text-gold" href="mailto:asuzunkemjika2002@gmail.com">asuzunkemjika2002@gmail.com</a><a className="block hover:text-gold" href="tel:+2348106230253">08106230253</a></div><div className="mt-6 flex gap-3" aria-label="Social profiles"><a className="hover:text-gold" href="https://www.instagram.com/aa.nkem?stkn=bnZxMmUydTF6ZHMy" target="_blank" rel="noopener noreferrer" title="Instagram profile"><Instagram /></a></div></div>
      </div>
      <div className="mx-auto mt-12 flex max-w-screen-xl flex-col gap-3 border-t border-ivory/10 pt-6 text-xs text-ivory-muted sm:flex-row sm:justify-between"><p>© {new Date().getFullYear()} Asuzu Nkemjika Anestecia.</p><p>Crafted with care, like every plate.</p></div>
    </footer>
  );
}

export function ChefPortfolio() {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <main><Hero /><About /><Specialties /><Skills /><Portfolio /><SampleMenu /><Services /><WhyHire /><Contact /></main>
      <Footer />
      <Button asChild variant="gold" size="iconLg" className="fixed bottom-5 right-5 z-40 rounded-full shadow-elevated" aria-label="Back to top"><a href="#home"><ArrowUp /></a></Button>
    </div>
  );
}