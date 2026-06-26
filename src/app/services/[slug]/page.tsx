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
import CTABanner from "@/components/CTABanner";
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
      <section className="section">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <Reveal className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-card">
            <Image src={service.image} alt={service.title} fill sizes="(max-width:1024px) 90vw, 560px" className="object-cover" />
          </Reveal>
          <div>
            <Reveal>
              <span className="eyebrow">Overview</span>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight">{service.title}</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 text-base leading-relaxed text-charcoal/65">{service.body}</p>
            </Reveal>
            <Reveal delay={0.18}>
              <Link href="/contact" className="btn-primary btn-glow mt-7">Discuss your project →</Link>
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
                  <div className="h-full rounded-2xl border border-charcoal/[0.07] bg-white p-5 shadow-card">
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-violet/10 text-violet">
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
        <section className="section">
          <div className="container-x">
            <SectionHeader
              eyebrow="Core Capabilities"
              title={`What our ${service.title} covers`}
              desc="A complete, end-to-end offering tailored to your goals, delivered with robust quality at every step."
            />
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {service.points.map((p, i) => (
                <Reveal key={p} delay={(i % 3) * 0.06}>
                  <div className="card-hover flex h-full items-start gap-3">
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-violet/10 text-violet">
                      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none"><path d="M5 12.5 10 17.5 19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </span>
                    <span className="pt-1 font-semibold text-charcoal">{p}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Service Flow */}
      <section className="section relative overflow-hidden bg-charcoal text-white">
        <AnimatedBackground variant="dark" />
        <div className="container-x relative">
          <SectionHeader
            light
            eyebrow="Service Flow"
            title="How your project moves forward"
            desc="A clear, transparent path from first conversation to a live, supported product."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {FLOW.map((f, i) => (
              <Reveal key={f.t} delay={i * 0.07}>
                <div className="relative h-full rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-colors hover:border-violet/40 hover:bg-white/[0.06]">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-violet text-sm font-extrabold text-white">{i + 1}</span>
                  <h3 className="mt-4 font-bold">{f.t}</h3>
                  <p className="mt-1 text-sm text-white/60">{f.d}</p>
                  {i < FLOW.length - 1 && (
                    <span className="absolute -right-3 top-1/2 z-10 hidden -translate-y-1/2 text-violet-300 lg:block">→</span>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies We Use */}
      <section className="section pb-6">
        <div className="container-x">
          <SectionHeader
            eyebrow="Technologies We Use"
            title="Modern, proven tools for the job"
            desc={`The core stack we rely on to deliver reliable, scalable ${service.title.toLowerCase()}.`}
          />
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {tech.map((t) => (
              <span key={t} className="inline-flex items-center gap-2 rounded-full border border-charcoal/10 bg-white px-4 py-2 text-sm font-semibold text-charcoal/75 shadow-sm">
                <span className="h-2 w-2 rounded-full bg-violet" />
                {t}
              </span>
            ))}
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
                <div className="h-full rounded-2xl border-l-2 border-violet/30 bg-charcoal-50/50 p-6 transition-colors hover:border-violet">
                  <span className="text-2xl font-extrabold text-violet/30">{w.n}</span>
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
                  {e.popular && <span className="absolute -top-3 right-6 rounded-full bg-violet px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-white">★ Most Popular</span>}
                  <span className="text-3xl">{e.icon}</span>
                  <h3 className="mt-4 text-lg font-bold text-charcoal">{e.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-charcoal/60">{e.desc}</p>
                  <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-violet">Best for: <span className="text-charcoal/70">{e.best}</span></p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container-x">
          <SectionHeader eyebrow="FAQ" title="Frequently asked questions" />
          <div className="mt-10"><FAQ items={FAQS} /></div>
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
