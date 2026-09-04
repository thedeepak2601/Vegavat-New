import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import Reveal from "@/components/Reveal";
import StatStrip from "@/components/StatStrip";
import Icon from "@/components/Icon";
import FAQ from "@/components/FAQ";
import CTABanner from "@/components/CTABanner";
import CallBar from "@/components/finance/CallBar";
import {
  FINANCE_CATEGORIES,
  FINANCE_PHONE,
  FINANCE_PHONE_HREF,
  FINANCE_PROCESS,
  getFinanceCategory,
} from "@/lib/financial";

// Cycled through the "who it's for" list so each entry gets a distinct icon.
const WHO_ICONS = ["users", "building", "factory", "saas", "crm", "flag"];

/**
 * "Income Tax" -> "Income Tax services". Titles that already end in
 * "Services" are left alone, so "Business Services" does not become
 * "Business Services services".
 */
const withServices = (t: string, word = "services") =>
  /services$/i.test(t) ? t : `${t} ${word}`;

export function generateStaticParams() {
  return FINANCE_CATEGORIES.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const cat = getFinanceCategory(params.slug);
  return {
    title: cat ? withServices(cat.title, "Services") : "Financial Services",
    description: cat?.short,
  };
}

export default function FinanceCategoryPage({ params }: { params: { slug: string } }) {
  const cat = getFinanceCategory(params.slug);
  if (!cat) notFound();

  const others = FINANCE_CATEGORIES.filter((c) => c.slug !== cat.slug);

  return (
    <>
      <PageHero
        breadcrumb={`Home / Financial Services / ${cat.title}`}
        eyebrow="Financial Services"
        title={withServices(cat.title)}
        desc={cat.short}
        cta={{ label: `Call ${FINANCE_PHONE}`, href: FINANCE_PHONE_HREF }}
        image={cat.image}
      />

      <section className="py-8 lg:py-10">
        <div className="container-x">
          <StatStrip items={cat.stats} />
        </div>
      </section>

      {/* Overview */}
      <section className="section">
        <div className="container-x">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Reveal>
              <span className="eyebrow">Overview</span>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-charcoal sm:text-4xl">
                What we do for {cat.title}
              </h2>
              <p className="mt-5 leading-relaxed text-charcoal/60">{cat.intro}</p>

              <div className="mt-7 flex items-start gap-3 rounded-2xl border border-violet/15 bg-violet/[0.04] p-4">
                <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-xl bg-violet/10 text-violet">
                  <Icon name="sync" className="h-4 w-4" />
                </span>
                <p className="text-sm font-medium text-charcoal/75">{cat.turnaround}</p>
              </div>

              <div className="mt-7 flex flex-wrap gap-3">
                <a href={FINANCE_PHONE_HREF} className="btn-primary btn-glow">
                  Call {FINANCE_PHONE}
                </a>
                <Link href="/contact" className="btn-outline">
                  Send an enquiry
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-soft">
                <Image
                  src={cat.sideImage}
                  alt={withServices(cat.title)}
                  fill
                  sizes="(max-width:1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Sub-services with images */}
      <section className="section bg-charcoal-50/60">
        <div className="container-x">
          <SectionHeader
            eyebrow="What's Included"
            title={`Everything under ${cat.title}`}
            desc="Engage us for a single piece of work or hand over the whole cycle — the scope is yours to set."
          />

          {/* Wide rows rather than tall cards: the image anchors each service on
              the left and every covered item fits in a scannable two-column grid,
              instead of four long paragraphs the reader has to work through. */}
          <div className="mt-14 space-y-6">
            {cat.subs.map((s, i) => (
              <Reveal key={s.slug} delay={i * 0.05}>
                <Link
                  href={`/financial-services/${cat.slug}/${s.slug}`}
                  id={s.slug}
                  className="group grid scroll-mt-28 overflow-hidden rounded-3xl border border-charcoal/[0.07] bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-violet/25 hover:shadow-soft lg:grid-cols-[320px,1fr]"
                >
                  {/* image panel */}
                  <div className="relative h-52 overflow-hidden lg:h-auto">
                    <Image
                      src={s.image}
                      alt={s.label}
                      fill
                      sizes="(max-width:1024px) 100vw, 320px"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute inset-0 bg-gradient-to-t from-charcoal/75 via-charcoal/20 to-transparent" />
                    <span className="absolute left-5 top-5 grid h-11 w-11 place-items-center rounded-2xl bg-white/95 text-violet shadow-card">
                      <Icon name={s.icon} className="h-5 w-5" />
                    </span>
                    <span className="absolute bottom-4 right-5 text-5xl font-extrabold leading-none text-white/25">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* content */}
                  <div className="flex flex-col p-7 sm:p-8">
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                      <h3 className="text-2xl font-extrabold tracking-tight text-charcoal transition-colors group-hover:text-violet">
                        {s.label}
                      </h3>
                      <span className="rounded-full bg-violet/10 px-2.5 py-1 text-xs font-bold uppercase tracking-wider text-violet">
                        {s.includes.length} services
                      </span>
                      {/* Indicative starting fee, where the service has one. */}
                      {s.priceFrom ? (
                        <span className="rounded-full bg-gradient-to-r from-violet to-violet-700 px-3 py-1 text-xs font-bold text-white shadow-soft">
                          From {s.priceFrom}
                        </span>
                      ) : null}
                    </div>

                    <p className="mt-3 text-sm leading-relaxed text-charcoal/60">{s.desc}</p>

                    {/* every covered item, titles only — the full explanation is on the page */}
                    <div className="mt-5 grid gap-x-6 gap-y-2.5 sm:grid-cols-2">
                      {s.includes.map((inc) => (
                        <div key={inc.t} className="flex items-start gap-2">
                          <svg className="mt-[3px] h-4 w-4 shrink-0 text-violet" viewBox="0 0 20 20" fill="currentColor">
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.7-9.3a1 1 0 00-1.4-1.4L9 10.6 7.7 9.3a1 1 0 00-1.4 1.4l2 2a1 1 0 001.4 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className="text-sm font-semibold text-charcoal/75">{inc.t}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-charcoal/[0.07] pt-5">
                      <span className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-bold uppercase tracking-wider text-charcoal/60">
                        <span>{s.documents.length} documents</span>
                        <span className="text-violet/30">•</span>
                        <span>{s.faqs.length} FAQs</span>
                        {s.dueDates?.length ? (
                          <>
                            <span className="text-violet/30">•</span>
                            <span>{s.dueDates.length} key dates</span>
                          </>
                        ) : null}
                      </span>

                      <span className="inline-flex items-center justify-center gap-2 rounded-full border border-violet/25 bg-violet/[0.06] px-6 py-2.5 text-sm font-bold text-violet transition-all duration-300 group-hover:border-violet group-hover:bg-violet group-hover:text-white group-hover:shadow-glow">
                        {s.ctaLabel ?? "View Full Details"}
                        <span className="transition-transform duration-300 group-hover:translate-x-1">
                          →
                        </span>
                      </span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CallBar
        title={`Questions about ${cat.title}?`}
        desc="Call and speak to someone who handles this every day. First consultation is free."
      />

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

      {/* Documents + benefits — one split panel, dark on the left, so this block
          breaks up the run of white sections instead of repeating card rows. */}
      <section className="section bg-charcoal-50/60">
        <div className="container-x">
          <Reveal>
            <div className="grid overflow-hidden rounded-3xl shadow-soft lg:grid-cols-2">
              {/* left: what you bring */}
              <div className="relative overflow-hidden bg-charcoal p-8 sm:p-10">
                <Image
                  src={cat.sideImage}
                  alt=""
                  fill
                  sizes="(max-width:1024px) 100vw, 50vw"
                  className="object-cover opacity-[0.18]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-charcoal via-charcoal/95 to-violet-900/80" />

                <div className="relative">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-white/75 backdrop-blur">
                    You bring
                  </span>
                  <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-white">
                    What we usually need
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-white/60">
                    An indicative list — we send a checklist tailored to your case after the first
                    call.
                  </p>

                  <ol className="mt-7 space-y-0">
                    {cat.documents.map((d, i) => (
                      <li
                        key={d}
                        className="flex items-center gap-4 border-b border-white/10 py-3.5 last:border-0"
                      >
                        <span className="grid h-8 w-8 shrink-0 place-items-center rounded-xl bg-white/10 text-xs font-extrabold text-white/75">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="text-sm font-medium text-white/90">{d}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>

              {/* right: what you get back */}
              <div className="relative bg-white p-8 sm:p-10">
                <div className="pointer-events-none absolute -right-12 -top-12 h-48 w-48 rounded-full bg-violet/10 blur-[80px]" />

                <div className="relative">
                  <span className="inline-flex items-center gap-2 rounded-full border border-violet/20 bg-violet/[0.06] px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-violet">
                    You get back
                  </span>
                  <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-charcoal">
                    Handled properly, start to finish
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-charcoal/60">
                    No last-minute scrambles, no missing paperwork and no guessing where things
                    stand.
                  </p>

                  <ul className="mt-7 space-y-3">
                    {cat.benefits.map((b) => (
                      <li
                        key={b}
                        className="group/b relative flex items-start gap-3 overflow-hidden rounded-2xl bg-charcoal-50/70 p-4 transition-colors hover:bg-violet/[0.05]"
                      >
                        <span className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-violet to-[#34E0F0]" />
                        <span className="ml-1 mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-violet text-white shadow-glow">
                          <svg className="h-3.5 w-3.5" viewBox="0 0 12 12" fill="none">
                            <path d="M2.5 6.5 5 9l4.5-5.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </span>
                        <span className="text-sm font-semibold text-charcoal/75">{b}</span>
                      </li>
                    ))}
                  </ul>

                  <a href={FINANCE_PHONE_HREF} className="btn-primary btn-glow mt-7 w-full">
                    Call {FINANCE_PHONE}
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Who it's for */}
      <section className="section">
        <div className="container-x">
          <SectionHeader
            eyebrow="Who It's For"
            title={`${cat.title} support for every kind of business`}
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {cat.who.map((w, i) => (
              <Reveal key={w} delay={i * 0.05}>
                <div className="group flex items-center gap-4 rounded-2xl border border-charcoal/[0.07] bg-white p-5 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-violet/25 hover:shadow-soft">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-violet/10 text-violet transition-all duration-300 group-hover:scale-110 group-hover:bg-violet group-hover:text-white">
                    <Icon name={WHO_ICONS[i % WHO_ICONS.length]} className="h-6 w-6" />
                  </span>
                  <span className="text-sm font-bold text-charcoal">{w}</span>
                </div>
              </Reveal>
            ))}
          </div>

        </div>
      </section>

      {/* FAQ */}
      <section className="section pt-0">
        <div className="container-x">
          <FAQ items={cat.faqs} title={`${cat.title} questions, answered`} />
        </div>
      </section>

      {/* Cross-links */}
      <section className="section pt-0">
        <div className="container-x">
          <SectionHeader eyebrow="Also Available" title="Other financial services" />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {others.map((o, i) => (
              <Reveal key={o.slug} delay={i * 0.06}>
                <Link
                  href={`/financial-services/${o.slug}`}
                  className="card-hover group flex h-full flex-col overflow-hidden !p-0"
                >
                  <div className="relative h-40 overflow-hidden">
                    <Image
                      src={o.image}
                      alt={o.title}
                      fill
                      sizes="(max-width:768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 gap-4 p-6">
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-violet/10 text-violet transition-colors group-hover:bg-violet group-hover:text-white">
                      <Icon name={o.icon} className="h-6 w-6" />
                    </span>
                    <div>
                      <h3 className="text-lg font-bold text-charcoal">{o.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-charcoal/60">{o.short}</p>
                      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-violet transition-transform group-hover:translate-x-1">
                        Learn more →
                      </span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        eyebrow={cat.title}
        title={`Get started with ${cat.title} today`}
        desc={`Call ${FINANCE_PHONE} and we will tell you exactly what is needed, what it costs and how long it takes.`}
        primary={{ label: `Call ${FINANCE_PHONE}`, href: FINANCE_PHONE_HREF }}
        secondary={{ label: "Send an Enquiry", href: "/contact" }}
      />
    </>
  );
}
