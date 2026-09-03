import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import Reveal from "@/components/Reveal";
import Icon from "@/components/Icon";
import AnimatedBackground from "@/components/effects/AnimatedBackground";
import InquiryModalButton from "@/components/InquiryModalButton";
import { SITE } from "@/lib/site";
import { METHODOLOGIES } from "@/lib/content";
import {
  PROCESS,
  PROCESS_WHY,
  PROCESS_TIMELINE,
  PROCESS_PEOPLE,
} from "@/lib/process";

export const metadata: Metadata = {
  title: "Our Process, Structured Delivery Methodology",
  description:
    "Vegavat's proven 6-step delivery process, discovery, roadmap, design, development, QA and launch, with clear milestones, timelines and deliverables.",
};

export default function ProcessPage() {
  return (
    <>
      <PageHero
        breadcrumb="Home / Process"
        eyebrow="Our Process"
        title="A structured methodology that delivers"
        desc="Our proven 6-step process ensures successful delivery with clear milestones, timelines and deliverables, no guesswork, no surprises."
        cta={{ label: "Book Free Consultation", href: "/contact" }}
        image="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80"
      />

      {/* ---- Step timeline ---- */}
      <section className="section overflow-hidden">
        <div className="container-x">
          <SectionHeader
            eyebrow="Step by Step"
            title="From idea to launch in six clear steps"
            desc="Every phase has defined activities and tangible deliverables, so you always know what's happening and what you'll receive."
          />

          <div className="relative mt-16">
            {/* center vertical line */}
            <span className="absolute left-1/2 top-0 bottom-0 hidden w-px -translate-x-1/2 bg-charcoal/15 lg:block" />

            <div className="space-y-12 lg:space-y-0">
              {PROCESS.map((s, i) => {
                // Step 1: content right / image left, then alternate each step.
                const imageLeft = i % 2 === 0;

                const content = (
                  <div>
                    <div className="flex items-center gap-4">
                      <span className="text-6xl font-extrabold leading-none text-violet">{s.n}</span>
                      <span className="h-px w-10 bg-charcoal/20" />
                      <span className="text-xs font-bold uppercase tracking-widest text-charcoal/60">Step {Number(s.n)} · {s.week}</span>
                    </div>
                    <h3 className="mt-5 text-3xl font-extrabold tracking-tight text-charcoal sm:text-4xl">{s.title}</h3>
                    <p className="mt-3 max-w-md text-charcoal/60">{s.desc}</p>

                    <div className="mt-7 grid gap-6 sm:grid-cols-2">
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-violet">Key Activities</p>
                        <ul className="mt-4 space-y-2.5">
                          {s.activities.map((a) => (
                            <li key={a} className="flex items-start gap-2.5 text-sm text-charcoal/75">
                              <span className="mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded-full bg-violet/10 text-violet">
                                <svg className="h-2.5 w-2.5" viewBox="0 0 12 12" fill="none"><path d="M2.5 6.5 5 9l4.5-5.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                              </span>
                              {a}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-violet">Deliverables</p>
                        <ul className="mt-4 space-y-2.5">
                          {s.deliverables.map((d) => (
                            <li key={d} className="flex items-start gap-2.5 text-sm text-charcoal/75">
                              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-violet" />
                              {d}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                );

                const image = (
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-card">
                    <Image
                      src={s.image}
                      alt={s.title}
                      fill
                      sizes="(max-width:1024px) 100vw, 560px"
                      className="object-cover"
                    />
                  </div>
                );

                const imageX = imageLeft ? -60 : 60;
                const contentX = imageLeft ? 60 : -60;

                return (
                  <div key={s.n} className="relative lg:grid lg:grid-cols-2 lg:items-center lg:gap-20 lg:py-12">
                    {/* node */}
                    <span className="absolute left-1/2 top-12 z-10 hidden h-5 w-5 -translate-x-1/2 rounded-full border-[3px] border-violet bg-white lg:block" />

                    {imageLeft ? (
                      <>
                        <Reveal x={imageX} y={0}>{image}</Reveal>
                        <Reveal x={contentX} y={0} delay={0.1} className="mt-6 lg:mt-0">{content}</Reveal>
                      </>
                    ) : (
                      <>
                        <Reveal x={contentX} y={0} delay={0.1} className="order-2 mt-6 lg:order-1 lg:mt-0">{content}</Reveal>
                        <Reveal x={imageX} y={0} className="order-1 lg:order-2">{image}</Reveal>
                      </>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ---- How we work: methodologies step by step ---- */}
      <section className="section bg-charcoal-50/60">
        <div className="container-x">
          <SectionHeader
            eyebrow="How We Work"
            title="Our methodologies, step by step"
            desc="By selecting the optimal methodology for every project, we facilitate precise planning, steady progress and reliable delivery from inception to completion."
          />

          <div className="mt-16 space-y-16">
            {METHODOLOGIES.map((m, mi) => (
              <Reveal key={m.slug} delay={mi * 0.05}>
                <div id={m.slug} className="scroll-mt-28">
                  <div className="max-w-2xl">
                    <span className="eyebrow border-violet/30 bg-violet/[0.06] text-violet">
                      Methodology {mi + 1}
                    </span>
                    <h3 className="mt-4 text-3xl font-extrabold tracking-tight text-charcoal sm:text-4xl">
                      {m.title}
                    </h3>
                    <p className="mt-3 text-charcoal/60">{m.desc}</p>
                  </div>

                  <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                    {m.steps.map((step, si) => (
                      <div
                        key={step.title}
                        className="group relative h-full rounded-2xl border border-charcoal/[0.08] bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-soft"
                      >
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet/10 text-violet">
                          <span className="text-lg font-extrabold">{si + 1}</span>
                        </div>
                        <h4 className="mt-5 text-base font-bold text-charcoal">{step.title}</h4>
                        <p className="mt-2 text-sm leading-relaxed text-charcoal/60">{step.desc}</p>
                        {si < m.steps.length - 1 && (
                          <span className="absolute -right-3 top-1/2 z-10 hidden -translate-y-1/2 text-violet-300 lg:block">→</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---- Why our process works ---- */}
      <section className="section">
        <div className="container-x">
          <SectionHeader
            eyebrow="Our Approach"
            title="Why our process works"
            desc="Refined through dozens of successful projects across industries."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS_WHY.map((w, i) => (
              <Reveal key={w.title} delay={(i % 4) * 0.07}>
                <div className="card-hover h-full">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-violet/10 text-violet">
                    <Icon name={w.icon} className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 text-base font-bold text-charcoal">{w.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-charcoal/60">{w.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---- At a glance: 90-day journey ---- */}
      <section className="section relative overflow-hidden bg-charcoal text-white">
        <AnimatedBackground variant="dark" />
        <div className="container-x relative">
          <SectionHeader
            light
            eyebrow="At a Glance"
            title="Your 90-day journey to launch"
            desc="A typical implementation timeline, clear milestones, weekly reviews, no surprises."
          />
          <div className="mt-14 grid gap-5 md:grid-cols-4">
            {PROCESS_TIMELINE.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08}>
                <div className="group relative h-full rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-violet/40 hover:bg-white/[0.06]">
                  <span className="text-xs font-bold uppercase tracking-widest text-violet-200">{p.weeks}</span>
                  <h3 className="mt-2 text-lg font-bold">{p.title}</h3>
                  <p className="mt-1 text-sm text-white/60">{p.desc}</p>
                  {i < PROCESS_TIMELINE.length - 1 && (
                    <span className="absolute -right-3 top-1/2 z-10 hidden -translate-y-1/2 text-violet-300 md:block">→</span>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---- The people behind it ---- */}
      <section className="section">
        <div className="container-x">
          <SectionHeader
            eyebrow="The People Behind It"
            title="A senior team on every project"
            desc="No junior consultants thrown at your project, only experienced specialists from discovery to handover."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {PROCESS_PEOPLE.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08}>
                <article className="group h-full overflow-hidden rounded-2xl border border-charcoal/[0.07] bg-white shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-soft">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image src={p.image} alt={p.title} fill sizes="(max-width:768px) 100vw, 380px" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                    <span className="absolute left-4 top-4 rounded-full bg-charcoal/85 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white backdrop-blur">{p.phase}</span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-charcoal">{p.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-charcoal/60">{p.desc}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---- CTA ---- */}
      <section className="section pt-0">
        <div className="container-x">
          <Reveal className="relative overflow-hidden rounded-3xl bg-charcoal px-6 py-16 text-center sm:px-12">
            <AnimatedBackground variant="dark" />
            <div className="relative">
              <span className="eyebrow border-violet/40 bg-violet/15 text-violet-200">Let&apos;s Build</span>
              <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-extrabold text-white sm:text-4xl">
                Ready to transform your idea into a product?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-white/75">
                Book a free consultation with our experts and discover how we streamline your project from discovery to launch.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link href="/contact" className="btn-primary btn-glow">Book Free Consultation →</Link>
                <InquiryModalButton
                  label="Request a Demo"
                  className="btn glass text-white hover:bg-white/15"
                />
                <a href={SITE.whatsappHref} target="_blank" rel="noopener noreferrer" className="btn border border-white/25 text-white hover:bg-white/10">
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.6 15l-1.3 4.7 4.8-1.3A10 10 0 1 0 12 2zm5.6 14.2c-.2.7-1.4 1.3-2 1.4-.5.1-1.2.1-1.9-.1-.4-.1-1-.3-1.7-.6-3-1.3-4.9-4.3-5-4.5s-1.2-1.6-1.2-3 .7-2.1 1-2.4c.2-.3.5-.4.7-.4h.5c.2 0 .4 0 .6.5l.8 2c.1.2.1.4 0 .5l-.4.5-.3.3c-.1.1-.3.3-.1.5.1.3.7 1.1 1.4 1.8.9.8 1.7 1 2 1.2.2.1.4.1.5-.1l.7-.8c.2-.2.4-.2.6-.1l1.9.9c.2.1.4.2.4.3.1.1.1.6-.1 1.2z"/></svg>
                  WhatsApp us
                </a>
              </div>
              <p className="mt-4 text-sm text-white/60">{SITE.whatsapp}</p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
