import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import Reveal from "@/components/Reveal";
import { SERVICE_ICONS } from "@/lib/icons";
import StatStrip from "@/components/StatStrip";
import Icon from "@/components/Icon";
import FAQ from "@/components/FAQ";
import CTABanner from "@/components/CTABanner";
import { SERVICES } from "@/lib/content";
import { STATS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Vegavat's core services, mobile app development, web development, UI/UX & graphic design, AI software, QA, SEO and dedicated developer hiring.",
};

// The SVG icon set used in the nav and on each service page, so a given service
// looks the same everywhere it appears.
// 18 services in one flat list is a wall. Grouping by discipline lets someone
// scan straight to the part of the business they came for.
const GROUPS: { id: string; title: string; desc: string; slugs: string[] }[] = [
  {
    id: "build",
    title: "Product Engineering",
    desc: "The software itself — apps, platforms and the intelligence inside them.",
    slugs: ["ai-development", "mobile-app-development", "web-development"],
  },
  {
    id: "design",
    title: "Design",
    desc: "How the product looks, feels and communicates.",
    slugs: ["ui-ux-design", "graphic-design"],
  },
  {
    id: "cloud",
    title: "Cloud & Security",
    desc: "Where it runs, how it ships and how it stays safe.",
    slugs: ["cloud-enablement", "devsecops", "cyber-security"],
  },
  {
    id: "erp",
    title: "ERP & Support",
    desc: "Implementing, moving, extending and looking after business systems.",
    slugs: [
      "erp-implementation",
      "erp-migration",
      "erp-customization",
      "erp-audit-recovery",
      "annual-support-amc",
    ],
  },
  {
    id: "consulting",
    title: "Automation & Consulting",
    desc: "Connecting the tools you already run, and the people to do it.",
    slugs: ["whatsapp-automation", "it-consulting", "dedicated-hiring"],
  },
];

const HOW = [
  { icon: "chat", t: "Discovery", d: "We map goals, scope and constraints before a line of code is written." },
  { icon: "design", t: "Design", d: "Wireframes and prototypes you can react to, so surprises happen on paper." },
  { icon: "devops", t: "Build & test", d: "Agile sprints with working demos every week, tested as they go." },
  { icon: "rocket", t: "Launch & support", d: "Deploy, monitor and keep improving after go-live." },
];

const DIFFERENTIATORS = [
  { icon: "rocket", title: "Fast, focused delivery", desc: "Agile sprints with demo builds, so you see real progress every week, not just at the end." },
  { icon: "shield", title: "Secure by default", desc: "Security, testing and monitoring are baked into every stage of delivery, never bolted on later." },
  { icon: "users", title: "Senior team only", desc: "Experienced specialists own your project end to end, from discovery through to handover." },
  { icon: "sync", title: "Built to scale", desc: "Clean, modern architecture that grows with your business, with no expensive rebuilds down the line." },
];

const FAQS = [
  { q: "How do you price a project?", a: "After a short discovery call we scope the work and send a fixed estimate with a breakdown by phase. For longer engagements we also offer a monthly retainer. Either way the number is agreed before work starts." },
  { q: "How long does a typical project take?", a: "A focused web build is usually 4–8 weeks; a full mobile app or ERP implementation runs longer. We give a realistic timeline during scoping rather than an optimistic one we would have to walk back." },
  { q: "Can you work with our existing team or codebase?", a: "Yes. We regularly join existing teams, pick up inherited codebases and work alongside in-house developers, either extending what is there or taking over specific modules." },
  { q: "What happens after launch?", a: "Nothing stops at go-live. We monitor, fix and iterate, and our Annual Support & AMC service covers ongoing maintenance, health audits and priority response if you want it formalised." },
  { q: "Who owns the code and the IP?", a: "You do. Everything we build is handed over with full ownership, in your repositories and your accounts." },
];

const bySlug = new Map(SERVICES.map((s) => [s.slug, s]));

export default function ServicesPage() {
  return (
    <>
      <PageHero
        breadcrumb="Home / Services"
        eyebrow="What We Do"
        title="Core services that turn ideas into products"
        desc="Our core services enable businesses to convert concepts into high-performing digital products. Since 2024 we've prioritized clarity, reliability and results that drive real impact."
        cta={{ label: "Get Free Quote", href: "/contact" }}
        image="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=900&q=80"
      />

      {/* Trust strip — sits tight under the hero rather than as its own section */}
      <section className="py-8 lg:py-10">
        <div className="container-x">
          <StatStrip items={STATS} />
        </div>
      </section>

      {/* Jump links — 18 services is a lot to scroll blindly */}
      <section className="section pb-0">
        <div className="container-x">
          <SectionHeader
            eyebrow="All Services"
            title="Everything you need to build and scale"
            desc="Grouped by discipline, so you can go straight to the part of the business you came for."
          />
          <Reveal className="mt-10">
            <div className="flex flex-wrap justify-center gap-2.5">
              {GROUPS.map((g) => (
                <a
                  key={g.id}
                  href={`#${g.id}`}
                  className="inline-flex items-center gap-2 rounded-full border border-charcoal/10 bg-white px-4 py-2 text-sm font-semibold text-charcoal/75 shadow-sm transition-all hover:-translate-y-0.5 hover:border-violet/40 hover:text-violet"
                >
                  {g.title}
                  <span className="rounded-full bg-violet/10 px-2 py-0.5 text-xs font-bold text-violet">
                    {g.slugs.length}
                  </span>
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Grouped service cards */}
      {GROUPS.map((group, gi) => (
        <section
          key={group.id}
          id={group.id}
          className={`section scroll-mt-24 ${gi % 2 === 1 ? "bg-charcoal-50/60" : ""}`}
        >
          <div className="container-x">
            <Reveal className="flex flex-col gap-3 border-l-4 border-violet pl-5 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2 className="text-2xl font-extrabold tracking-tight text-charcoal sm:text-3xl">
                  {group.title}
                </h2>
                <p className="mt-1.5 text-sm leading-relaxed text-charcoal/60">{group.desc}</p>
              </div>
              <span className="shrink-0 text-sm font-semibold text-charcoal/60">
                {group.slugs.length} service{group.slugs.length === 1 ? "" : "s"}
              </span>
            </Reveal>

            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {group.slugs.map((slug, i) => {
                const s = bySlug.get(slug);
                if (!s) return null;
                return (
                  <Reveal key={slug} delay={(i % 3) * 0.07} className="flex">
                    <Link
                      href={`/services/${s.slug}`}
                      className="card-hover group flex h-full flex-col overflow-hidden !p-0"
                    >
                      <div className="relative aspect-[16/10] overflow-hidden">
                        <Image
                          src={s.image}
                          alt={s.title}
                          fill
                          sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <span className="absolute inset-0 bg-gradient-to-t from-charcoal/75 via-charcoal/10 to-transparent" />
                        <span className="absolute bottom-4 left-4 grid h-11 w-11 place-items-center rounded-xl bg-white/95 text-violet shadow-card">
                          <Icon name={SERVICE_ICONS[s.slug] ?? "default"} className="h-5 w-5" />
                        </span>
                      </div>

                      <div className="flex flex-1 flex-col p-6">
                        <h3 className="text-lg font-bold leading-snug text-charcoal transition-colors group-hover:text-violet">
                          {s.title}
                        </h3>
                        <p className="mt-2 flex-1 text-sm leading-relaxed text-charcoal/60">
                          {s.short}
                        </p>

                        {s.points?.length ? (
                          <p className="mt-4 border-t border-charcoal/[0.07] pt-3 text-xs font-bold uppercase tracking-wider text-charcoal/60">
                            {s.points.length} capabilities covered
                          </p>
                        ) : null}

                        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-violet transition-transform group-hover:translate-x-1">
                          Learn more →
                        </span>
                      </div>
                    </Link>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>
      ))}

      {/* How we work */}
      <section className="section bg-charcoal text-white">
        <div className="container-x">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="eyebrow border-violet/40 bg-violet/15 text-violet-200">How We Work</span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
              The same four steps, whatever the service
            </h2>
            <p className="mt-4 leading-relaxed text-white/60">
              A predictable process means you always know what is happening and what comes next.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {HOW.map((h, i) => (
              <Reveal key={h.t} delay={i * 0.07}>
                <div className="group relative h-full rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-violet/40 hover:bg-white/[0.07]">
                  <span className="absolute right-5 top-4 text-4xl font-extrabold leading-none text-white/[0.07]">
                    {i + 1}
                  </span>
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-violet/20 text-violet-200 ring-1 ring-violet/30">
                    <Icon name={h.icon} className="h-6 w-6" />
                  </span>
                  <h3 className="relative mt-5 text-lg font-bold">{h.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">{h.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="section">
        <div className="container-x">
          <SectionHeader
            eyebrow="Why Vegavat"
            title="More than a vendor, a delivery partner"
            desc="Whatever the service, the way we work stays the same, and that's what consistently sets the results apart."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {DIFFERENTIATORS.map((d, i) => (
              <Reveal key={d.title} delay={(i % 4) * 0.07}>
                <div className="card-hover h-full">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-violet/10 text-violet">
                    <Icon name={d.icon} className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 text-base font-bold text-charcoal">{d.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-charcoal/60">{d.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-charcoal-50/60">
        <div className="container-x">
          <SectionHeader
            eyebrow="FAQ"
            title="Questions we get asked before starting"
            desc="If yours isn't here, ask us directly — we answer straight."
          />
          <div className="mt-12">
            <FAQ items={FAQS} />
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
