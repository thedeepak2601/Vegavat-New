import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import Reveal from "@/components/Reveal";
import StatStrip from "@/components/StatStrip";
import Icon from "@/components/Icon";
import CTABanner from "@/components/CTABanner";
import CallBar from "@/components/finance/CallBar";
import FAQ from "@/components/FAQ";
import {
  FINANCE_CATEGORIES,
  FINANCE_PHONE,
  FINANCE_PHONE_HREF,
  FINANCE_PROCESS,
} from "@/lib/financial";

const TRUST = [
  { value: "3", label: "Practice areas" },
  { value: "24h", label: "Response time" },
  { value: "100%", label: "Reviewed before filing" },
  { value: "Free", label: "First consultation" },
];

// One representative question from each practice, for the overview page.
const TOP_FAQS = FINANCE_CATEGORIES.map((c) => c.faqs[0]);

export const metadata: Metadata = {
  title: "Financial Services — Income Tax, GST & Accounting",
  description:
    "Income tax registration and ITR filing, GST registration and returns, and complete accounting services. Handled accurately and on time by experienced professionals.",
};

const WHY = [
  {
    icon: "shield",
    t: "Compliant, always",
    d: "Deadlines tracked and filings completed on schedule, so penalties and notices never come as a surprise.",
  },
  {
    icon: "users",
    t: "One point of contact",
    d: "A professional who knows your file, rather than a new person every time you call.",
  },
  {
    icon: "audit",
    t: "Documented and audit-ready",
    d: "Clean records with a clear trail, so audits and assessments are straightforward.",
  },
  {
    icon: "finance",
    t: "Transparent fees",
    d: "Scope and cost agreed upfront in writing. No surprise charges at filing time.",
  },
];

export default function FinancialServicesPage() {
  return (
    <>
      <PageHero
        breadcrumb="Home / Financial Services"
        eyebrow="Financial Services"
        title="Income tax, GST and accounting, handled properly"
        desc="Registration, filing, planning and advisory across direct and indirect tax, plus day-to-day bookkeeping that keeps your business audit-ready all year."
        cta={{ label: `Call ${FINANCE_PHONE}`, href: FINANCE_PHONE_HREF }}
        image="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80"
      />

      <section className="py-8 lg:py-10">
        <div className="container-x">
          <StatStrip items={TRUST} />
        </div>
      </section>

      {/* Three practice areas */}
      <section className="section">
        <div className="container-x">
          <SectionHeader
            eyebrow="What We Handle"
            title="Three practice areas, one accountable team"
            desc="Whether you need a single return filed or your entire finance function managed, the work is handled by people who do it every day."
          />

          <div className="mt-14 space-y-8">
            {FINANCE_CATEGORIES.map((cat, i) => (
              <Reveal key={cat.slug} delay={i * 0.06}>
                <div
                  className={`grid items-center gap-8 overflow-hidden rounded-3xl border border-charcoal/[0.07] bg-white shadow-card lg:grid-cols-2 ${
                    i % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""
                  }`}
                >
                  <div className="relative h-64 w-full lg:h-full lg:min-h-[340px]">
                    <Image
                      src={cat.image}
                      alt={cat.title}
                      fill
                      sizes="(max-width:1024px) 100vw, 50vw"
                      className="object-cover"
                    />
                    <span className="absolute left-5 top-5 grid h-11 w-11 place-items-center rounded-2xl bg-white/95 text-sm font-extrabold text-violet shadow-card">
                      {cat.index}
                    </span>
                  </div>

                  <div className="p-7 sm:p-10">
                    <div className="flex items-center gap-3">
                      <span className="grid h-11 w-11 place-items-center rounded-xl bg-violet/10 text-violet">
                        <Icon name={cat.icon} className="h-5 w-5" />
                      </span>
                      <h3 className="text-2xl font-extrabold tracking-tight text-charcoal">
                        {cat.title}
                      </h3>
                    </div>

                    <p className="mt-4 text-sm leading-relaxed text-charcoal/60">{cat.short}</p>

                    <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                      {cat.subs.map((s) => (
                        <li
                          key={s.slug}
                          className="flex items-start gap-2 text-sm font-medium text-charcoal/75"
                        >
                          <svg className="mt-1 h-3.5 w-3.5 shrink-0 text-violet" viewBox="0 0 12 12" fill="none">
                            <path d="M2.5 6.5 5 9l4.5-5.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          {s.label}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-7 flex flex-wrap items-center gap-3">
                      <Link href={`/financial-services/${cat.slug}`} className="btn-primary btn-glow">
                        Explore {cat.title} →
                      </Link>
                      <a href={FINANCE_PHONE_HREF} className="btn-outline">
                        Call now
                      </a>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CallBar />

      {/* How it works */}
      <section className="section pt-0">
        <div className="container-x">
          <SectionHeader
            eyebrow="How It Works"
            title="Four steps, start to finish"
            desc="A simple, predictable process — you always know what is happening and what is needed next."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {FINANCE_PROCESS.map((p, i) => (
              <Reveal key={p.t} delay={i * 0.07}>
                <div className="card-hover relative h-full">
                  <span className="absolute right-5 top-5 text-4xl font-extrabold text-violet/10">
                    {i + 1}
                  </span>
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-violet/10 text-violet">
                    <Icon name={p.icon} className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 text-lg font-bold text-charcoal">{p.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-charcoal/60">{p.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="section bg-charcoal-50/60">
        <div className="container-x">
          <SectionHeader
            eyebrow="Why Vegavat"
            title="Financial compliance without the chasing"
            desc="We take the follow-ups, the deadlines and the paperwork off your desk so you can focus on running the business."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {WHY.map((w, i) => (
              <Reveal key={w.t} delay={i * 0.06}>
                <div className="card-hover h-full">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-violet/10 text-violet">
                    <Icon name={w.icon} className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 text-lg font-bold text-charcoal">{w.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-charcoal/60">{w.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container-x">
          <FAQ
            items={TOP_FAQS}
            desc="More detail on each practice area is on its own page."
          />
        </div>
      </section>

      <CTABanner
        eyebrow="Financial Services"
        title="Get your tax and accounting sorted"
        desc={`Speak to our financial services team on ${FINANCE_PHONE} for a free, no-obligation consultation.`}
        primary={{ label: `Call ${FINANCE_PHONE}`, href: FINANCE_PHONE_HREF }}
        secondary={{ label: "Send an Enquiry", href: "/contact" }}
      />
    </>
  );
}
