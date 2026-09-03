import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import Reveal from "@/components/Reveal";
import Icon from "@/components/Icon";
import FAQ from "@/components/FAQ";
import CTABanner from "@/components/CTABanner";
import CallBar from "@/components/finance/CallBar";
import AnimatedBackground from "@/components/effects/AnimatedBackground";
import {
  FINANCE_PHONE,
  FINANCE_PHONE_HREF,
  FINANCE_PROCESS,
  FINANCE_SUB_PATHS,
  getFinanceSub,
} from "@/lib/financial";

export function generateStaticParams() {
  return FINANCE_SUB_PATHS;
}

export function generateMetadata({
  params,
}: {
  params: { slug: string; sub: string };
}): Metadata {
  const found = getFinanceSub(params.slug, params.sub);
  if (!found) return { title: "Financial Services" };
  return {
    title: `${found.sub.label} — ${found.category.title}`,
    description: found.sub.desc,
  };
}

export default function FinanceSubPage({
  params,
}: {
  params: { slug: string; sub: string };
}) {
  const found = getFinanceSub(params.slug, params.sub);
  if (!found) notFound();
  const { category, sub } = found;

  const siblings = category.subs.filter((s) => s.slug !== sub.slug);

  return (
    <>
      <PageHero
        breadcrumb={`Home / Financial Services / ${category.title} / ${sub.label}`}
        eyebrow={category.title}
        title={sub.label}
        desc={sub.desc}
        cta={{ label: `Call ${FINANCE_PHONE}`, href: FINANCE_PHONE_HREF }}
        image={sub.image}
      />

      {/* Overview + timeline */}
      <section className="section">
        <div className="container-x">
          <div className="grid gap-12 lg:grid-cols-[1.6fr,1fr]">
            <Reveal>
              <span className="eyebrow">Overview</span>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-charcoal sm:text-4xl">
                What {sub.label} involves
              </h2>
              <p className="mt-5 leading-relaxed text-charcoal/60">{sub.intro}</p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a href={FINANCE_PHONE_HREF} className="btn-primary btn-glow">
                  Call {FINANCE_PHONE}
                </a>
                <Link href="/contact" className="btn-outline">
                  Send an enquiry
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="rounded-3xl border border-violet/15 bg-violet/[0.04] p-6">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-violet/10 text-violet">
                  <Icon name="sync" className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-base font-bold text-charcoal">Typical timeline</h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal/60">{sub.timeline}</p>

                <div className="mt-6 border-t border-violet/15 pt-5">
                  <h3 className="text-base font-bold text-charcoal">Who it&apos;s for</h3>
                  <ul className="mt-3 space-y-2">
                    {sub.who.map((w) => (
                      <li key={w} className="flex items-start gap-2 text-sm text-charcoal/75">
                        <svg className="mt-1 h-3.5 w-3.5 shrink-0 text-violet" viewBox="0 0 12 12" fill="none">
                          <path d="M2.5 6.5 5 9l4.5-5.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        {w}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Detailed breakdown */}
      <section className="section bg-charcoal-50/60">
        <div className="container-x">
          <SectionHeader
            eyebrow="In Detail"
            title={`Exactly what is covered`}
            desc="Every part of the work, spelled out — so you know what you are paying for before you commit."
          />

          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {sub.includes.map((item, i) => (
              <Reveal key={item.t} delay={i * 0.05}>
                <div className="flex h-full gap-4 rounded-2xl border border-charcoal/[0.07] bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-violet/25 hover:shadow-soft">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-violet text-sm font-extrabold text-white">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-charcoal">{item.t}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-charcoal/60">{item.d}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* What you receive + key dates */}
      <section className="section">
        <div className="container-x">
          <div className="grid gap-12 lg:grid-cols-2">
            <Reveal>
              <span className="eyebrow">Deliverables</span>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-charcoal">
                What you receive
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-charcoal/60">
                Not just the filing — the paperwork you will need if anything is ever questioned.
              </p>
              {/* single panel with a connecting spine, rather than repeated cards */}
              <div className="mt-6 overflow-hidden rounded-3xl border border-charcoal/[0.07] bg-white shadow-card">
                {sub.deliverables.map((d, i) => (
                  <div
                    key={d}
                    className="group relative flex items-center gap-4 px-6 py-4 transition-colors hover:bg-violet/[0.04]"
                  >
                    <span className="relative flex flex-col items-center self-stretch">
                      <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-violet text-white shadow-glow">
                        <svg className="h-3.5 w-3.5" viewBox="0 0 12 12" fill="none">
                          <path d="M2.5 6.5 5 9l4.5-5.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      {i < sub.deliverables.length - 1 && (
                        <span className="absolute left-1/2 top-7 h-[calc(100%+1rem)] w-px -translate-x-1/2 bg-violet/20" />
                      )}
                    </span>
                    <span className="text-sm font-semibold text-charcoal">{d}</span>
                  </div>
                ))}
              </div>
            </Reveal>

            {!sub.dueDates?.length ? (
              // No statutory dates for this service — an image keeps the row balanced.
              <Reveal delay={0.1}>
                <div className="relative h-full min-h-[320px] overflow-hidden rounded-3xl shadow-soft">
                  <Image
                    src={category.sideImage}
                    alt={`${sub.label} at Vegavat`}
                    fill
                    sizes="(max-width:1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <span className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-7">
                    <p className="text-lg font-bold text-white">{category.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-white/75">
                      {category.turnaround}
                    </p>
                  </div>
                </div>
              </Reveal>
            ) : (
              <Reveal delay={0.1}>
                <span className="eyebrow">Key Dates</span>
                <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-charcoal">
                  Deadlines that apply
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-charcoal/60">
                  We track these for you. Dates are the standard statutory ones and can be extended
                  by notification.
                </p>
                <div className="mt-6 space-y-3">
                  {sub.dueDates.map((d) => (
                    <div
                      key={d.label}
                      className="group flex items-start gap-4 rounded-2xl border border-charcoal/[0.07] bg-white p-4 shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:border-violet/25 hover:shadow-soft"
                    >
                      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-violet to-violet-700 text-white shadow-soft">
                        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="3" y="4" width="18" height="18" rx="2" />
                          <path d="M16 2v4M8 2v4M3 10h18" />
                        </svg>
                      </span>
                      <span>
                        <span className="block text-sm font-bold text-charcoal">{d.label}</span>
                        <span className="mt-0.5 block text-sm leading-snug text-charcoal/60">
                          {d.when}
                        </span>
                      </span>
                    </div>
                  ))}
                </div>
              </Reveal>
            )}
          </div>
        </div>
      </section>

      {/* Common mistakes — dark, so the warning reads as a warning and the page
          gets a visual break from the run of light sections. */}
      <section className="relative overflow-hidden bg-charcoal py-16 lg:py-20">
        <AnimatedBackground variant="dark" />
        <div className="pointer-events-none absolute -left-32 top-0 h-80 w-80 rounded-full bg-violet/20 blur-[120px]" />

        <div className="container-x relative">
          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="eyebrow border-[#F87171]/30 bg-[#F87171]/10 text-[#FCA5A5]">
              Avoid These
            </span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Common mistakes we prevent
            </h2>
            <p className="mt-4 leading-relaxed text-white/60">
              The errors that quietly cost the most — and what we do differently.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {sub.mistakes.map((m, i) => (
              <Reveal key={m.t} delay={i * 0.06}>
                <div className="group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-[#F87171]/30 hover:bg-white/[0.07]">
                  <span className="absolute right-6 top-5 text-5xl font-extrabold leading-none text-white/5">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#F87171]/15 text-[#FCA5A5] ring-1 ring-[#F87171]/25">
                    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                      <path d="M12 9v4M12 17h.01" />
                    </svg>
                  </span>
                  <h3 className="relative mt-5 text-lg font-bold text-white">{m.t}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-white/60">{m.d}</p>

                  <span className="mt-5 inline-flex items-center gap-2 rounded-full bg-white/[0.06] px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-[#34E0F0]">
                    <svg className="h-3 w-3" viewBox="0 0 12 12" fill="none">
                      <path d="M2.5 6.5 5 9l4.5-5.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    We check for this
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CallBar
        title={`Need help with ${sub.label}?`}
        desc="Call and speak to someone who handles this every day. First consultation is free."
      />

      {/* Documents + process */}
      <section className="section pt-0">
        <div className="container-x">
          <div className="grid gap-12 lg:grid-cols-2">
            <Reveal>
              <span className="eyebrow">Documents</span>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-charcoal">
                What we need from you
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-charcoal/60">
                An indicative list — we send a checklist tailored to your case after the first call.
              </p>
              <ul className="mt-6 space-y-3">
                {sub.documents.map((d) => (
                  <li
                    key={d}
                    className="flex items-start gap-3 rounded-xl border border-charcoal/[0.07] bg-white p-4 text-sm text-charcoal/75 shadow-card"
                  >
                    <svg className="mt-0.5 h-4 w-4 shrink-0 text-violet" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <path d="M14 2v6h6" />
                    </svg>
                    {d}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.1}>
              <span className="eyebrow">How It Works</span>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-charcoal">
                Four steps, start to finish
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-charcoal/60">
                You always know what is happening and what is needed next.
              </p>
              <ol className="mt-6 space-y-4">
                {FINANCE_PROCESS.map((p, i) => (
                  <li key={p.t} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-violet text-sm font-bold text-white">
                        {i + 1}
                      </span>
                      {i < FINANCE_PROCESS.length - 1 && (
                        <span className="mt-1 w-px flex-1 bg-violet/20" />
                      )}
                    </div>
                    <div className="pb-2">
                      <h3 className="text-base font-bold text-charcoal">{p.t}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-charcoal/60">{p.d}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-charcoal-50/60">
        <div className="container-x">
          <SectionHeader eyebrow="FAQ" title={`${sub.label} questions`} />
          <div className="mt-12">
            <FAQ items={sub.faqs} />
          </div>
        </div>
      </section>

      {/* Sibling services */}
      <section className="section">
        <div className="container-x">
          <SectionHeader
            eyebrow={category.title}
            title={`More ${category.title} services`}
            desc={`Other things we handle under ${category.title}.`}
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {siblings.map((s, i) => (
              <Reveal key={s.slug} delay={i * 0.06}>
                <Link
                  href={`/financial-services/${category.slug}/${s.slug}`}
                  className="card-hover group flex h-full flex-col overflow-hidden !p-0"
                >
                  <div className="relative h-40 overflow-hidden">
                    <Image
                      src={s.image}
                      alt={s.label}
                      fill
                      sizes="(max-width:768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent" />
                    <span className="absolute bottom-4 left-4 flex items-center gap-2.5">
                      <span className="grid h-9 w-9 place-items-center rounded-xl bg-white/95 text-violet shadow-card">
                        <Icon name={s.icon} className="h-[18px] w-[18px]" />
                      </span>
                      <span className="text-base font-bold text-white">{s.label}</span>
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <p className="flex-1 text-sm leading-relaxed text-charcoal/60">
                      {s.points.join(" · ")}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-violet transition-transform group-hover:translate-x-1">
                      Learn more →
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href={`/financial-services/${category.slug}`} className="btn-outline">
              ← Back to {category.title}
            </Link>
          </div>
        </div>
      </section>

      <CTABanner
        eyebrow={category.title}
        title={`Get started with ${sub.label}`}
        desc={`Call ${FINANCE_PHONE} and we will tell you exactly what is needed, what it costs and how long it takes.`}
        primary={{ label: `Call ${FINANCE_PHONE}`, href: FINANCE_PHONE_HREF }}
        secondary={{ label: "Send an Enquiry", href: "/contact" }}
      />
    </>
  );
}
