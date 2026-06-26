import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import Reveal from "@/components/Reveal";
import CTABanner from "@/components/CTABanner";
import { PRODUCTS } from "@/lib/content";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Ready-to-deploy business platforms by Vegavat, CRM, HRMS & Payroll, ERP, Inventory, Finance, Project Management, Helpdesk, Asset Maintenance and LMS.",
};

const BENEFITS = [
  "Launch in weeks, not months, with ready-to-deploy modules",
  "One connected source of truth across every department",
  "Tailored to your workflow with custom fields, rules and reports",
  "Role-based access, audit trails and enterprise-grade security",
  "Scales from a single team to your entire organization",
  "Backed by structured onboarding, training and ongoing support",
];

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

      {/* Why our platforms, two-column benefits */}
      <section className="section bg-charcoal-50/60">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <span className="eyebrow">Why Our Platforms</span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-charcoal sm:text-4xl">
              Powerful out of the box, flexible by design
            </h2>
            <p className="mt-4 text-charcoal/60">
              Every platform is production-ready on day one, yet adapts to exactly how your business runs. No rip-and-replace, no lock-in, just one connected system that grows with you.
            </p>
            <Link href="/contact" className="btn-primary btn-glow mt-7">
              Book a demo →
            </Link>
          </Reveal>

          <Reveal x={40} y={0}>
            <ul className="grid gap-3">
              {BENEFITS.map((b) => (
                <li key={b} className="flex items-start gap-3 rounded-2xl border border-charcoal/[0.07] bg-white p-4 shadow-card">
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-violet/10 text-violet">
                    <svg className="h-3.5 w-3.5" viewBox="0 0 12 12" fill="none"><path d="M2.5 6.5 5 9l4.5-5.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </span>
                  <span className="text-sm font-medium text-charcoal/75">{b}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Product grid */}
      <section className="section">
        <div className="container-x">
          <SectionHeader
            eyebrow="The Suite"
            title="A platform for every part of your business"
            desc="Pick the products you need today and add more as you grow, they all speak to each other out of the box."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PRODUCTS.map((p, i) => (
              <Reveal key={p.id} delay={(i % 3) * 0.07}>
                <Link href={`/products/${p.id}`} id={p.id} className="card-hover group flex h-full flex-col scroll-mt-28">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-violet/10 text-3xl transition-colors group-hover:bg-violet">
                    {p.icon}
                  </div>
                  <h3 className="mt-5 text-xl font-bold text-charcoal">{p.name}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-charcoal/60">{p.desc}</p>
                  <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-violet transition-transform group-hover:translate-x-1">
                    View details →
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        eyebrow="Get Started"
        title="Find the right platform for your team"
        desc="Tell us about your workflow and we'll recommend the right product, or build a custom solution tailored to you."
        primary={{ label: "View All Products", href: "/contact" }}
        secondary={{ label: "Talk to Sales", href: "/contact" }}
      />
    </>
  );
}
