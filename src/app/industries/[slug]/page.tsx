import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import Reveal from "@/components/Reveal";
import Stats from "@/components/Stats";
import CTABanner from "@/components/CTABanner";
import AnimatedBackground from "@/components/effects/AnimatedBackground";
import IndustryFlow from "@/components/IndustryFlow";
import { INDUSTRIES, INDUSTRY_PROBLEM_IMAGES } from "@/lib/content";

export function generateStaticParams() {
  return INDUSTRIES.map((i) => ({ slug: i.id }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const ind = INDUSTRIES.find((x) => x.id === params.slug);
  return {
    title: ind ? `${ind.name} ERP Solutions` : "Industry",
    description: ind?.intro,
  };
}

// Shared implementation workflow, the path every engagement follows.
const WORKFLOW = [
  { t: "Discovery", d: "We map your processes, goals and pain points." },
  { t: "Solution Design", d: "We blueprint the modules and configuration for your operations." },
  { t: "Implementation", d: "We configure, customize and integrate the system." },
  { t: "Data Migration", d: "We move your existing data cleanly, with validation." },
  { t: "Training & Go-Live", d: "We train your team and launch with hypercare support." },
  { t: "Support & Scale", d: "We maintain, optimize and grow the system with you." },
];

export default function IndustryDetail({ params }: { params: { slug: string } }) {
  const industry = INDUSTRIES.find((i) => i.id === params.slug);
  if (!industry) notFound();

  const related = INDUSTRIES.filter((i) => i.id !== industry.id).slice(0, 3);

  return (
    <>
      <PageHero
        breadcrumb={`Home / Industries / ${industry.name}`}
        eyebrow={`${industry.name} ERP`}
        title={industry.headline}
        desc={industry.intro}
        cta={{ label: "Get Free Consultation", href: "/contact" }}
        image={industry.image}
      />

      {/* Stats */}
      <section className="container-x relative z-10 -mt-10">
        <Reveal><Stats /></Reveal>
      </section>

      {/* Business impact / ROI */}
      <section className="section">
        <div className="container-x">
          <SectionHeader
            eyebrow="Business Impact"
            title={`Measurable results for ${industry.name.toLowerCase()} teams`}
            desc="What our clients gain when their operations run on one connected system."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {industry.impact.map((m, i) => (
              <Reveal key={m} delay={(i % 4) * 0.07}>
                <div className="h-full rounded-2xl border border-violet/15 bg-violet/[0.04] p-6">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-violet/15 text-violet">
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 17l6-6 4 4 8-8" /><path d="M17 7h4v4" /></svg>
                  </span>
                  <p className="mt-4 font-bold leading-snug text-charcoal">{m}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Problems we solve */}
      <section className="section bg-charcoal-50/60">
        <div className="container-x grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-card">
            <Image
              src={INDUSTRY_PROBLEM_IMAGES[industry.id] ?? industry.image}
              alt={`${industry.name} challenges`}
              fill
              sizes="(max-width:1024px) 90vw, 480px"
              className="object-cover"
            />
          </Reveal>
          <div>
            <SectionHeader
              align="left"
              eyebrow="Problems We Solve"
              title={`The everyday friction in ${industry.name.toLowerCase()}`}
              desc="The recurring challenges we remove so your team can focus on growth."
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {industry.problems.map((p, i) => (
                <Reveal key={p} delay={(i % 2) * 0.08}>
                  <div className="flex items-start gap-3 rounded-2xl border border-charcoal/[0.07] bg-white p-4 shadow-card">
                    <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-red-50 text-red-500">
                      <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M6 6l12 12M18 6 6 18" /></svg>
                    </span>
                    <span className="text-sm font-medium text-charcoal/75">{p}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* System architecture, animated module flow */}
      <section className="section">
        <div className="container-x">
          <SectionHeader
            eyebrow="System Architecture"
            title={`How your ${industry.name} platform connects`}
            desc="Every module plugs into one connected platform that feeds a single, real-time source of truth."
          />
          <div className="mx-auto mt-12 max-w-4xl">
            <IndustryFlow name={industry.name} modules={industry.modules} />
          </div>
        </div>
      </section>

      {/* Implementation workflow */}
      <section className="section relative overflow-hidden bg-charcoal text-white">
        <AnimatedBackground variant="dark" />
        <div className="container-x relative">
          <SectionHeader
            light
            eyebrow="How It Works"
            title="Our implementation workflow"
            desc="A clear, proven path from first conversation to a live, supported system, no guesswork."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
            {WORKFLOW.map((w, i) => (
              <Reveal key={w.t} delay={i * 0.06}>
                <div className="relative h-full rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-colors hover:border-violet/40 hover:bg-white/[0.06]">
                  <span className="grid h-9 w-9 place-items-center rounded-xl bg-violet text-sm font-extrabold text-white">{i + 1}</span>
                  <h3 className="mt-4 text-sm font-bold">{w.t}</h3>
                  <p className="mt-1 text-xs leading-relaxed text-white/60">{w.d}</p>
                  {i < WORKFLOW.length - 1 && (
                    <span className="absolute -right-3 top-1/2 z-10 hidden -translate-y-1/2 text-violet-300 lg:block">→</span>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Related industries */}
      <section className="section">
        <div className="container-x">
          <SectionHeader eyebrow="More Industries" title="Explore other sectors we serve" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((ind) => (
              <Link
                key={ind.id}
                href={`/industries/${ind.id}`}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-charcoal/[0.07] bg-white shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-soft"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image src={ind.image} alt={ind.name} fill sizes="380px" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent" />
                  <h3 className="absolute bottom-3 left-4 right-4 text-lg font-bold text-white">{ind.name}</h3>
                </div>
                <p className="p-5 text-sm leading-relaxed text-charcoal/60">{ind.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title={`Ready to transform your ${industry.name.toLowerCase()} operations?`}
        desc="Share your requirements and get a free, tailored proposal within 24 hours. NDA available before discussion."
        primary={{ label: "Get Free Quote", href: "/contact" }}
        secondary={{ label: "Talk to Our Team", href: "/contact" }}
      />
    </>
  );
}
