import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import Reveal from "@/components/Reveal";
import { PRODUCT_ICONS } from "@/lib/icons";
import StatStrip from "@/components/StatStrip";
import Icon from "@/components/Icon";
import FAQ from "@/components/FAQ";
import CTABanner from "@/components/CTABanner";
import InquiryModalButton from "@/components/InquiryModalButton";
import { PRODUCTS } from "@/lib/content";
import { STATS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Ready-to-deploy business platforms by Vegavat, CRM, HRMS & Payroll, ERP, Inventory, Finance, Project Management, Helpdesk, Asset Maintenance and LMS.",
};

// Same SVG set as the nav and each product page, so a product looks identical
// wherever it appears.
// Twelve platforms in one flat grid gives no sense of what belongs together.
// Grouping by business function lets someone find their department fast.
const GROUPS: { id: string; title: string; desc: string; ids: string[] }[] = [
  {
    id: "revenue",
    title: "Revenue & Customers",
    desc: "Winning the work and looking after the people who bought it.",
    ids: ["crm", "marketing", "helpdesk"],
  },
  {
    id: "people",
    title: "People & Projects",
    desc: "Your team, what they are working on and how they grow.",
    ids: ["hrms", "projects", "lms"],
  },
  {
    id: "finance",
    title: "Finance & Supply Chain",
    desc: "Money in, money out, and everything moving between.",
    ids: ["finance", "inventory", "procurement"],
  },
  {
    id: "platform",
    title: "Core Platform",
    desc: "The systems everything else plugs into.",
    ids: ["erp", "saas", "maintenance"],
  },
];

const ROLLOUT = [
  { icon: "chat", t: "Demo", d: "We walk the platform through your workflow, not a generic sandbox." },
  { icon: "wrench", t: "Configure", d: "Modules, fields, roles and rules tailored to how you actually operate." },
  { icon: "transfer", t: "Migrate", d: "Existing data moved across and reconciled before anyone goes live." },
  { icon: "users", t: "Train & support", d: "Your team onboarded properly, then ongoing support after launch." },
];

const BENEFITS = [
  "Launch in weeks, not months, with ready-to-deploy modules",
  "One connected source of truth across every department",
  "Tailored to your workflow with custom fields, rules and reports",
  "Role-based access, audit trails and enterprise-grade security",
  "Scales from a single team to your entire organization",
  "Backed by structured onboarding, training and ongoing support",
];

const FAQS = [
  { q: "Can we start with one product and add others later?", a: "Yes, and most clients do. Each platform works on its own, and because they share one data model, adding a second later means switching it on rather than integrating two separate systems." },
  { q: "Will these work with the tools we already use?", a: "Generally yes. We integrate with payment providers, logistics partners, messaging platforms and storefronts, and we can build a connector where a standard one doesn't exist. Tell us your stack and we will confirm before you commit." },
  { q: "Is it hosted by you, or can we run it ourselves?", a: "Either. We can host and manage it for you, or deploy into your own cloud account if your policies require the data to stay there." },
  { q: "How much can be customised?", a: "Fields, workflows, roles, approval rules and reports are all configurable without custom code. Beyond that, our ERP Customization service builds bespoke modules on top." },
  { q: "How long does implementation take?", a: "It depends on scope and how much data has to migrate. A single module for one team is quick; a multi-department rollout is a project. We give a realistic schedule during scoping rather than an optimistic one." },
];

const byId = new Map(PRODUCTS.map((p) => [p.id, p]));

export default function ProductsPage() {
  return (
    <>
      <PageHero
        breadcrumb="Home / Products"
        eyebrow="Our Products"
        title="Ready-to-deploy platforms for modern business"
        desc="Battle-tested business products you can launch fast and tailor to your operations, connected, scalable and built on one single source of truth."
        cta={{ label: "Get Started", href: "/contact" }}
        image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80"
      />

      {/* Trust strip, tight under the hero */}
      <section className="py-8 lg:py-10">
        <div className="container-x">
          <StatStrip items={STATS} />
        </div>
      </section>

      {/* Jump links */}
      <section className="section pb-0">
        <div className="container-x">
          <SectionHeader
            eyebrow="The Suite"
            title="A platform for every part of your business"
            desc="Grouped by function, so you can jump straight to the department you're solving for."
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
                    {g.ids.length}
                  </span>
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Grouped product cards */}
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
                {group.ids.length} platforms
              </span>
            </Reveal>

            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {group.ids.map((pid, i) => {
                const p = byId.get(pid);
                if (!p) return null;
                const headline = p.benefits?.[0];
                return (
                  <Reveal key={pid} delay={(i % 3) * 0.07} className="flex">
                    <Link
                      href={`/products/${p.id}`}
                      id={p.id}
                      className="card-hover group flex h-full scroll-mt-28 flex-col overflow-hidden !p-0"
                    >
                      <div className="relative aspect-[16/10] overflow-hidden">
                        <Image
                          src={p.image}
                          alt={p.name}
                          fill
                          sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <span className="absolute inset-0 bg-gradient-to-t from-charcoal/75 via-charcoal/10 to-transparent" />
                        <span className="absolute bottom-4 left-4 grid h-11 w-11 place-items-center rounded-xl bg-white/95 text-violet shadow-card">
                          <Icon name={PRODUCT_ICONS[p.id] ?? "default"} className="h-5 w-5" />
                        </span>
                        {headline && (
                          <span className="absolute right-4 top-4 rounded-full bg-white/95 px-3 py-1 text-xs font-bold text-violet shadow-card backdrop-blur">
                            {headline.value} {headline.label}
                          </span>
                        )}
                      </div>

                      <div className="flex flex-1 flex-col p-6">
                        <h3 className="text-lg font-bold leading-snug text-charcoal transition-colors group-hover:text-violet">
                          {p.name}
                        </h3>
                        <p className="mt-2 flex-1 text-sm leading-relaxed text-charcoal/60">
                          {p.desc}
                        </p>

                        {p.features?.length ? (
                          <p className="mt-4 border-t border-charcoal/[0.07] pt-3 text-xs font-bold uppercase tracking-wider text-charcoal/60">
                            {p.features.length} modules included
                          </p>
                        ) : null}

                        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-violet transition-transform group-hover:translate-x-1">
                          View details →
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

      {/* How a rollout runs */}
      <section className="section section-dark text-white">
        <div className="container-x">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="eyebrow border-violet/40 bg-violet/15 text-violet-200">Rollout</span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
              From demo to live, without the drama
            </h2>
            <p className="mt-4 leading-relaxed text-white/60">
              The same four steps whichever platform you start with.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {ROLLOUT.map((r, i) => (
              <Reveal key={r.t} delay={i * 0.07}>
                <div className="group relative h-full rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-violet/40 hover:bg-white/[0.07]">
                  <span className="absolute right-5 top-4 text-4xl font-extrabold leading-none text-white/[0.07]">
                    {i + 1}
                  </span>
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-violet/20 text-violet-200 ring-1 ring-violet/30">
                    <Icon name={r.icon} className="h-6 w-6" />
                  </span>
                  <h3 className="relative mt-5 text-lg font-bold">{r.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">{r.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why our platforms */}
      <section className="section">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <span className="eyebrow">Why Our Platforms</span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-charcoal sm:text-4xl">
              Powerful out of the box, flexible by design
            </h2>
            <p className="mt-4 text-charcoal/60">
              Every platform is production-ready on day one, yet adapts to exactly how your business
              runs. No rip-and-replace, no lock-in, just one connected system that grows with you.
            </p>
            <InquiryModalButton
              label="Book a demo"
              showArrow
              className="btn-primary btn-glow mt-7"
            />
          </Reveal>

          <Reveal x={40} y={0}>
            <ul className="grid gap-3">
              {BENEFITS.map((b) => (
                <li
                  key={b}
                  className="flex items-start gap-3 rounded-2xl border border-charcoal/[0.07] bg-white p-4 shadow-card"
                >
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-violet/10 text-violet">
                    <svg className="h-3.5 w-3.5" viewBox="0 0 12 12" fill="none">
                      <path d="M2.5 6.5 5 9l4.5-5.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className="text-sm font-medium text-charcoal/75">{b}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-charcoal-50/60">
        <div className="container-x">
          <FAQ
            items={FAQS}
            desc="If yours isn't here, ask us directly — we answer straight."
          />
        </div>
      </section>

      <CTABanner
        eyebrow="Get Started"
        title="Find the right platform for your team"
        desc="Tell us about your workflow and we'll recommend the right product, or build a custom solution tailored to you."
        primary={{ label: "Book a Demo", href: "/contact" }}
        secondary={{ label: "Talk to Sales", href: "/contact" }}
      />
    </>
  );
}
