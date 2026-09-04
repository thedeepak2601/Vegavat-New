import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import ServiceCard from "@/components/ServiceCard";
import Reveal from "@/components/Reveal";
import Icon from "@/components/Icon";
import Stats from "@/components/Stats";
import FAQ from "@/components/FAQ";
import AnimatedBackground from "@/components/effects/AnimatedBackground";
import LogoMarquee from "@/components/home/LogoMarquee";
import BrandLogo from "@/components/BrandLogo";
import { techBrand } from "@/lib/logos";
import CTABanner from "@/components/CTABanner";
import InquiryModalButton from "@/components/InquiryModalButton";
import { SERVICES, SERVICE_HERO_IMAGES } from "@/lib/content";

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const s = SERVICES.find((x) => x.slug === params.slug);
  return { title: s ? s.title : "Service", description: s?.short };
}

const PROBLEMS = [
  { icon: "sync", t: "Slow, manual processes", d: "We automate repetitive work and connect your tools so your team moves faster with fewer errors." },
  { icon: "transfer", t: "Disconnected systems", d: "We integrate your data and platforms into one connected source of truth, with no more silos." },
  { icon: "crm", t: "Hard to scale", d: "We build on clean, modern architecture that grows with you without expensive rebuilds." },
  { icon: "shield", t: "Security & reliability gaps", d: "We bake in security, testing and monitoring so your product stays stable and safe in production." },
];

const FLOW = [
  { t: "Discover", d: "Goals, scope and requirements" },
  { t: "Design", d: "Wireframes and prototypes" },
  { t: "Build", d: "Agile sprints with demos" },
  { t: "Test", d: "QA across devices and cases" },
  { t: "Launch & Support", d: "Deploy, monitor and improve" },
];

const DEFAULT_TECH = ["React", "Node.js", "Python", "AWS", "PostgreSQL", "Docker"];
const SERVICE_TECH: Record<string, string[]> = {
  "web-development": ["React", "Next.js", "Node.js", "Laravel", "Tailwind CSS", "PostgreSQL"],
  "ui-ux-design": ["Figma", "Adobe XD", "Sketch", "Illustrator", "Framer", "Photoshop"],
  "graphic-design": ["Photoshop", "Illustrator", "Figma", "After Effects", "InDesign", "Canva"],
  "dedicated-hiring": ["React", "Flutter", "Node.js", "Python", "AWS", "DevOps"],
  "ai-development": ["Python", "PyTorch", "TensorFlow", "LangChain", "OpenAI", "Pinecone"],
  "cyber-security": ["Nmap", "Burp Suite", "Wireshark", "OWASP", "SIEM", "Linux"],
  "cloud-enablement": ["AWS", "Azure", "GCP", "Docker", "Kubernetes", "Terraform"],
  "whatsapp-automation": ["WhatsApp Cloud API", "Node.js", "Twilio", "Webhooks", "MongoDB"],
  devsecops: ["Docker", "Kubernetes", "GitHub Actions", "Jenkins", "Terraform", "Grafana"],
  "it-consulting": ["Cloud", "ERPNext", "Data", "Security", "Architecture"],
  "erp-implementation": ["Frappe", "ERPNext", "MariaDB", "Python", "Redis"],
  "erp-migration": ["ERPNext", "Python", "SQL", "ETL", "MariaDB"],
  "erp-customization": ["Frappe", "Python", "JavaScript", "REST API", "MariaDB"],
  "annual-support-amc": ["Frappe", "ERPNext", "Linux", "Monitoring", "Redis"],
  "erp-audit-recovery": ["ERPNext", "SQL", "Python", "Frappe", "Data Tools"],
};

const SERVICE_ICONS: Record<string, string> = {
  "ai-development": "ai",
  "mobile-app-development": "mobile",
  "web-development": "web",
  "ui-ux-design": "design",
  "graphic-design": "image",
  "dedicated-hiring": "hiring",
  "cyber-security": "shield",
  "cloud-enablement": "cloud",
  "whatsapp-automation": "chat",
  devsecops: "devops",
  "it-consulting": "users",
  "erp-implementation": "erp",
  "erp-migration": "sync",
  "erp-customization": "wrench",
  "annual-support-amc": "helpdesk",
  "erp-audit-recovery": "audit",
};

const SERVICE_METRICS: Record<string, { value: string; label: string }[]> = {
  "ai-development": [
    { value: "40%", label: "Less manual effort" },
    { value: "24/7", label: "AI-assisted workflows" },
    { value: "3x", label: "Faster internal responses" },
  ],
  "web-development": [
    { value: "90+", label: "Performance targets" },
    { value: "100%", label: "Responsive layouts" },
    { value: "4w", label: "Typical MVP launch" },
  ],
  "ui-ux-design": [
    { value: "30%", label: "Clearer user journeys" },
    { value: "2x", label: "Faster design decisions" },
    { value: "100%", label: "Responsive handoff" },
  ],
  "graphic-design": [
    { value: "50+", label: "Brand assets delivered" },
    { value: "3x", label: "Faster campaign rollout" },
    { value: "100%", label: "Multi-format files" },
  ],
  "dedicated-hiring": [
    { value: "7d", label: "Typical onboarding" },
    { value: "15+", label: "Expert developers" },
    { value: "100%", label: "Transparent reporting" },
  ],
};

const DEFAULT_SERVICE_METRICS = [
  { value: "6+", label: "Years Experience" },
  { value: "100+", label: "Projects Delivered" },
  { value: "24h", label: "Estimate turnaround" },
];

const DELIVERABLES = [
  "Discovery summary",
  "Technical roadmap",
  "Sprint milestones",
  "Quality checklist",
  "Launch handover",
  "Support plan",
];

const WHY = [
  { n: "01", t: "End-to-End Delivery", d: "From discovery to launch and beyond, one team owns strategy, design, build, testing and support." },
  { n: "02", t: "Transparent Communication", d: "Regular updates, direct access to your team and clear progress at every stage. No surprises." },
  { n: "03", t: "On-Time Delivery", d: "Realistic timelines and structured sprints, so milestones are met without cutting corners." },
  { n: "04", t: "Scalable Architecture", d: "Everything we build is designed to grow with you, with no expensive rebuilds later." },
  { n: "05", t: "Competitive Pricing", d: "Strong technical expertise at transparent, cost-effective rates for clients worldwide." },
  { n: "06", t: "Ongoing Support", d: "We stay involved after launch with fixes, updates and continuous improvements." },
];

const ENGAGEMENT = [
  { icon: "🔒", title: "Fixed Price", desc: "You define the scope, we deliver at a fixed cost and timeline. Ideal when requirements are clear up front.", best: "Small to mid projects", popular: false },
  { icon: "👥", title: "Dedicated Team", desc: "Hire specialists who work exclusively on your product, with full control and direct communication.", best: "Startups & long-term products", popular: true },
  { icon: "◷", title: "Time & Material", desc: "Pay for actual time and resources used. Best when requirements evolve. Transparent billing each sprint.", best: "Evolving or complex projects", popular: false },
];

const FAQS = [
  { q: "How do we get started?", a: "Start with a free discovery call. We learn your goals, define the scope and share a clear plan and estimate, usually within 24 hours, with no obligation." },
  { q: "How much will my project cost?", a: "Cost depends on scope, features and complexity. After a short discovery call we provide a detailed, transparent estimate with no hidden charges." },
  { q: "How long does delivery take?", a: "Timelines depend on scope. We share a milestone-based roadmap up front so you always know what ships and when." },
  { q: "Do you sign an NDA?", a: "Yes. We are happy to sign an NDA before any detailed discussion so your idea stays protected." },
  { q: "Will I own the work and source code?", a: "Yes. Full ownership and source code are transferred to you on delivery. The work is entirely yours." },
  { q: "Do you provide support after delivery?", a: "Yes. We offer ongoing maintenance and support covering fixes, updates and improvements with fast response times." },
];

export default function ServiceDetail({ params }: { params: { slug: string } }) {
  const service = SERVICES.find((s) => s.slug === params.slug);
  if (!service) notFound();

  const related = SERVICES.filter((s) => s.slug !== service.slug).slice(0, 3);
  const tech = SERVICE_TECH[service.slug] ?? DEFAULT_TECH;
  const metrics = SERVICE_METRICS[service.slug] ?? DEFAULT_SERVICE_METRICS;
  const iconName = SERVICE_ICONS[service.slug] ?? "default";

  return (
    <>
      <PageHero
        breadcrumb={`Home / Services / ${service.title}`}
        eyebrow={service.title}
        title={`${service.title} for startups and enterprises`}
        desc={service.short}
        cta={{ label: "Get Free Quote", href: "/contact" }}
        image={SERVICE_HERO_IMAGES[service.slug] ?? service.image}
      />

      {/* Stats */}
      <section className="container-x relative z-10 -mt-10">
        <Reveal><Stats /></Reveal>
      </section>

      {/* Overview */}
      <section className="section overflow-hidden">
        <div className="container-x grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal className="relative">
            <div className="pointer-events-none absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-violet/20 via-transparent to-[#34E0F0]/20 blur-3xl" />
            <div className="relative overflow-hidden rounded-3xl border border-charcoal/[0.08] bg-white p-3 shadow-soft">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image src={service.image} alt={service.title} fill sizes="(max-width:1024px) 90vw, 560px" className="object-cover" />
                <span className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/10 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/15 bg-white/12 p-4 text-white backdrop-blur-md">
                  <div className="flex items-center gap-3">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white text-violet shadow-card">
                      <Icon name={iconName} className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-sm font-bold">{service.title}</p>
                      <p className="mt-0.5 text-xs text-white/75">Strategy, design, build and support</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <span className="eyebrow">Overview</span>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-charcoal sm:text-4xl">
                A clearer path from idea to working product
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 text-base leading-relaxed text-charcoal/60">{service.body}</p>
            </Reveal>
            <Reveal delay={0.16}>
              <div className="mt-7 grid gap-3 sm:grid-cols-3">
                {metrics.map((m) => (
                  <div key={m.label} className="rounded-2xl border border-charcoal/[0.07] bg-charcoal-50/70 p-4 text-center">
                    <p className="bg-gradient-to-r from-violet to-[#34E0F0] bg-clip-text text-2xl font-extrabold text-transparent">{m.value}</p>
                    <p className="mt-1 text-xs font-semibold text-charcoal/60">{m.label}</p>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <InquiryModalButton label="Discuss your project" showArrow className="btn-primary btn-glow" />
                <Link href="#capabilities" className="btn-outline">View capabilities</Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* The Problems We Solve */}
      <section className="section bg-charcoal-50/60">
        <div className="container-x grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-card">
            <Image
              src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=900&q=80"
              alt="Solving business problems with Vegavat"
              fill
              sizes="(max-width:1024px) 90vw, 480px"
              className="object-cover"
            />
          </Reveal>
          <div>
            <SectionHeader
              align="left"
              eyebrow="The Problems We Solve"
              title="Turning everyday pain points into outcomes"
              desc="Most teams struggle with the same friction. Here is how our approach removes it."
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {PROBLEMS.map((p, i) => (
                <Reveal key={p.t} delay={(i % 2) * 0.08}>
                  <div className="group relative h-full overflow-hidden rounded-2xl border border-charcoal/[0.07] bg-white p-5 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-violet/25 hover:shadow-soft">
                    <span className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-violet to-[#34E0F0] opacity-0 transition-opacity group-hover:opacity-100" />
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-violet/10 text-violet transition-colors group-hover:bg-violet group-hover:text-white">
                      <Icon name={p.icon} className="h-5 w-5" />
                    </span>
                    <h3 className="mt-4 font-bold text-charcoal">{p.t}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-charcoal/60">{p.d}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      {service.points && (
        <section id="capabilities" className="section scroll-mt-24">
          <div className="container-x">
            <SectionHeader
              eyebrow="Core Capabilities"
              title={`What our ${service.title} covers`}
              desc="A complete, end-to-end offering tailored to your goals, delivered with robust quality at every step."
            />
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {service.points.map((p, i) => (
                <Reveal key={p} delay={(i % 3) * 0.06}>
                  <div className="group relative h-full overflow-hidden rounded-2xl border border-charcoal/[0.07] bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:border-violet/25 hover:shadow-soft">
                    <span className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-violet/10 blur-2xl transition-transform duration-300 group-hover:scale-150" />
                    <span className="text-xs font-extrabold uppercase tracking-[0.22em] text-charcoal/40">
                      Capability {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="mt-4 grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-violet to-violet-700 text-white shadow-glow">
                      <Icon name={iconName} className="h-5 w-5" />
                    </span>
                    <h3 className="relative mt-5 text-lg font-bold leading-snug text-charcoal">{p}</h3>
                    <p className="relative mt-2 text-sm leading-relaxed text-charcoal/60">
                      Planned, designed and delivered with handover-ready documentation.
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Service Flow */}
      <section className="section relative overflow-hidden section-dark text-white">
        <AnimatedBackground variant="dark" />
        <div className="container-x relative">
          <SectionHeader
            light
            eyebrow="Service Flow"
            title="How your project moves forward"
            desc="A clear, transparent path from first conversation to a live, supported product."
          />
          <div className="relative mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            <span className="absolute left-[10%] right-[10%] top-5 hidden h-px bg-gradient-to-r from-transparent via-violet/45 to-transparent lg:block" />
            {FLOW.map((f, i) => (
              <Reveal key={f.t} delay={i * 0.07}>
                <div className="relative h-full rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-violet/40 hover:bg-white/[0.08]">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-violet to-[#34E0F0] text-sm font-extrabold text-white shadow-glow">{i + 1}</span>
                  <h3 className="mt-4 font-bold">{f.t}</h3>
                  <p className="mt-1 text-sm text-white/60">{f.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies We Use */}
      <section className="section pb-6">
        <div className="container-x">
          <div className="relative overflow-hidden rounded-3xl border border-charcoal/[0.07] bg-white p-7 shadow-card sm:p-10">
            <div className="pointer-events-none absolute inset-0 bg-grid-violet bg-[size:34px_34px] opacity-35" />
            <div className="pointer-events-none absolute right-0 top-0 h-56 w-56 rounded-full bg-[#34E0F0]/15 blur-3xl" />
            <div className="relative grid gap-9 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-12">
              <div>
                <span className="eyebrow">Technologies We Use</span>
                <h2 className="mt-4 text-3xl font-extrabold leading-[1.15] tracking-tight text-charcoal sm:text-[34px]">
                  Modern, proven tools for the job
                </h2>
                {/* The title is not lower-cased here: "AI Software
                    Development" became "ai software development". */}
                <p className="mt-4 text-base leading-relaxed text-charcoal/60">
                  The core stack behind our {service.title} work — chosen for
                  reliability over novelty.
                </p>
                <p className="mt-5 inline-flex items-center gap-2 rounded-full bg-violet/[0.07] px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-violet ring-1 ring-violet/15">
                  <span className="h-1.5 w-1.5 rounded-full bg-violet" />
                  {tech.length} core tools
                </p>
              </div>

              {/* Real brand marks rather than identical dots — the logo
                  language already used by the strip below. Names with no
                  Simple Icons entry fall back to a monogram chip. */}
              <ul className="grid grid-cols-2 gap-2.5 sm:grid-cols-3">
                {tech.map((t) => {
                  const brand = techBrand(t);
                  return (
                    <li key={t}>
                      <span className="group flex h-full items-center gap-2.5 rounded-xl border border-charcoal/[0.07] bg-white px-3 py-2.5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-violet/30 hover:shadow-card">
                        <BrandLogo
                          slug={brand.slug}
                          name={brand.name}
                          src={brand.src}
                          className="h-5 w-5 shrink-0"
                        />
                        <span className="truncate text-sm font-semibold text-charcoal/80 transition-colors group-hover:text-charcoal">
                          {t}
                        </span>
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </section>
      <LogoMarquee />

      {/* Why us */}
      <section className="section">
        <div className="container-x">
          <SectionHeader
            eyebrow="Why Vegavat"
            title="Why businesses choose us"
            desc="Here's what consistently makes clients across multiple countries come back to us."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {WHY.map((w, i) => (
              <Reveal key={w.n} delay={(i % 3) * 0.07}>
                <div className="group h-full rounded-2xl border border-charcoal/[0.07] bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-violet/25 hover:shadow-soft">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-charcoal-50 text-sm font-extrabold text-violet transition-colors group-hover:bg-violet group-hover:text-white">{w.n}</span>
                  <h3 className="mt-1 text-lg font-bold text-charcoal">{w.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-charcoal/60">{w.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement models */}
      <section className="section bg-charcoal-50/60">
        <div className="container-x">
          <SectionHeader
            eyebrow="Engagement Models"
            title="Flexible ways to work with us"
            desc="Choose the model that best matches your project type, budget and timeline. All include full transparency and quality assurance."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {ENGAGEMENT.map((e, i) => (
              <Reveal key={e.title} delay={i * 0.08}>
                <div className={`relative h-full rounded-2xl border p-7 transition-all duration-300 hover:-translate-y-1 ${e.popular ? "border-violet bg-white shadow-soft" : "border-charcoal/[0.07] bg-white shadow-card hover:shadow-soft"}`}>
                  {e.popular && <span className="absolute -top-3 right-6 rounded-full bg-violet px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">★ Most Popular</span>}
                  <span className="text-3xl">{e.icon}</span>
                  <h3 className="mt-4 text-lg font-bold text-charcoal">{e.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-charcoal/60">{e.desc}</p>
                  <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-violet">Best for: <span className="text-charcoal/75">{e.best}</span></p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="section">
        <div className="container-x">
          <div className="grid gap-10 rounded-3xl bg-charcoal p-7 text-white shadow-soft sm:p-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <Reveal>
              <span className="eyebrow border-violet/40 bg-violet/15 text-violet-200">What You Receive</span>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
                Clear deliverables at every stage
              </h2>
              <p className="mt-4 text-white/75">
                You always know what is being made, what is approved, and what moves into the next sprint.
              </p>
            </Reveal>
            <div className="grid gap-3 sm:grid-cols-2">
              {DELIVERABLES.map((item, i) => (
                <Reveal key={item} delay={(i % 2) * 0.05}>
                  <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-white text-xs font-extrabold text-violet">
                      {i + 1}
                    </span>
                    <span className="text-sm font-semibold text-white/90">{item}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container-x">
          <FAQ items={FAQS} />
        </div>
      </section>

      {/* Related */}
      <section className="section bg-charcoal-50/60">
        <div className="container-x">
          <SectionHeader eyebrow="Related Services" title="Explore what else we can build" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title={`Ready to start your ${service.title} project?`}
        desc="Share your requirements and get a free project estimate within 24 hours. NDA available before discussion."
        primary={{ label: "Get Free Quote", href: "/contact" }}
        secondary={{ label: "Talk to Our Team", href: "/contact" }}
      />
    </>
  );
}
