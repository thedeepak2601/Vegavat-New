"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { TESTIMONIALS } from "@/lib/content";

export default function Testimonials() {
  const [[i, dir], setState] = useState<[number, number]>([0, 0]);
  const t = TESTIMONIALS[i];

  const go = (d: number) =>
    setState(([p]) => [(p + d + TESTIMONIALS.length) % TESTIMONIALS.length, d]);
  const jump = (idx: number) => setState(([p]) => [idx, idx > p ? 1 : -1]);

  return (
    <section className="section relative overflow-hidden bg-gradient-to-b from-violet-50/60 via-white to-white">
      {/* decorative glow */}
      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-violet/10 blur-[100px]" />

      <div className="container-x relative grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        {/* ---- Left: heading + rating + controls ---- */}
        <div>
          <span className="eyebrow">Our Clients</span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-charcoal sm:text-4xl">
            What our customers say
          </h2>
          <p className="mt-4 max-w-md text-charcoal/60">
            Authentic experiences, lasting relationships and real results we&apos;ve delivered across projects and industries.
          </p>

          <div className="mt-7 flex items-center gap-4">
            <div className="flex gap-1 text-violet">
              {Array.from({ length: 5 }).map((_, s) => (
                <svg key={s} className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M10 1.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L10 15.9l-5.2 2.7 1-5.8L1.5 8.7l5.9-.9z" /></svg>
              ))}
            </div>
            <p className="text-sm font-semibold text-charcoal">
              4.9/5 <span className="font-normal text-charcoal/55">average across 100+ projects</span>
            </p>
          </div>

          <div className="mt-10 flex items-center gap-4">
            <button onClick={() => go(-1)} aria-label="Previous" className="grid h-12 w-12 place-items-center rounded-full border border-charcoal/15 text-charcoal/70 transition-all hover:-translate-y-0.5 hover:border-violet hover:bg-violet hover:text-white">
              ←
            </button>
            <button onClick={() => go(1)} aria-label="Next" className="grid h-12 w-12 place-items-center rounded-full border border-charcoal/15 text-charcoal/70 transition-all hover:-translate-y-0.5 hover:border-violet hover:bg-violet hover:text-white">
              →
            </button>
            <div className="ml-2 flex gap-2">
              {TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => jump(idx)}
                  aria-label={`Go to testimonial ${idx + 1}`}
                  className={`h-2 rounded-full transition-all ${idx === i ? "w-7 bg-violet" : "w-2 bg-charcoal/20 hover:bg-charcoal/40"}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* ---- Right: animated quote card ---- */}
        <div className="relative min-h-[340px] sm:min-h-[300px]">
          <AnimatePresence mode="wait" custom={dir}>
            <motion.div
              key={i}
              custom={dir}
              initial={{ opacity: 0, x: dir >= 0 ? 60 : -60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: dir >= 0 ? -60 : 60 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="relative overflow-hidden rounded-3xl border border-charcoal/[0.07] bg-white p-8 shadow-card sm:p-12"
            >
              <span className="absolute left-0 top-0 h-1.5 w-full bg-gradient-to-r from-violet via-violet-400 to-[#34E0F0]" />
              <span className="absolute -top-4 left-8 font-serif text-9xl leading-none text-violet/15">&ldquo;</span>

              <p className="relative mt-6 text-xl leading-relaxed text-charcoal/80">{t.quote}</p>

              <div className="relative mt-8 flex items-center gap-4 border-t border-charcoal/[0.07] pt-6">
                <div className="grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-violet to-violet-700 text-lg font-bold text-white shadow-soft">
                  {t.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                </div>
                <div>
                  <p className="font-bold text-charcoal">{t.name}</p>
                  <p className="text-sm text-charcoal/55">{t.role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
