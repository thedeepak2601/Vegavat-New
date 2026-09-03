"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { TESTIMONIALS } from "@/lib/content";

const PER_PAGE = 3;
const PAGES = Math.ceil(TESTIMONIALS.length / PER_PAGE);

const initials = (name: string) =>
  name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2);

function Stars() {
  return (
    <div className="flex gap-0.5 text-violet" aria-label="5 out of 5">
      {Array.from({ length: 5 }).map((_, s) => (
        <svg key={s} className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
          <path d="M10 1.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L10 15.9l-5.2 2.7 1-5.8L1.5 8.7l5.9-.9z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [[page, dir], setState] = useState<[number, number]>([0, 0]);

  const go = (d: number) => setState(([p]) => [(p + d + PAGES) % PAGES, d]);
  const jump = (idx: number) => setState(([p]) => [idx, idx > p ? 1 : -1]);

  const visible = TESTIMONIALS.slice(page * PER_PAGE, page * PER_PAGE + PER_PAGE);

  return (
    <section className="section relative overflow-hidden bg-gradient-to-b from-violet-50/60 via-white to-white dark:from-violet-900/25 dark:via-[#0b0912] dark:to-[#0b0912]">
      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-violet/10 blur-[100px]" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-[#34E0F0]/10 blur-[100px]" />

      <div className="container-x relative">
        {/* Header runs across the full width — the old two-column split left a
            large empty gap beside a single quote. */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <span className="eyebrow">Our Clients</span>
            <h2 className="mt-4 max-w-xl text-3xl font-extrabold tracking-tight text-charcoal sm:text-4xl">
              What our customers say
            </h2>
            <p className="mt-4 max-w-md text-charcoal/60">
              Authentic experiences, lasting relationships and real results we&apos;ve delivered
              across projects and industries.
            </p>
          </div>

          <div className="flex flex-col gap-5 sm:items-end">
            <div className="flex items-center gap-3 rounded-2xl border border-violet/15 bg-white px-5 py-3 shadow-card">
              <Stars />
              <p className="text-sm font-semibold text-charcoal">
                4.9/5{" "}
                <span className="font-normal text-charcoal/60">across 100+ projects</span>
              </p>
            </div>

            {PAGES > 1 && (
              <div className="flex items-center gap-3">
                <div className="flex gap-2">
                  {Array.from({ length: PAGES }).map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => jump(idx)}
                      aria-label={`Go to testimonials page ${idx + 1}`}
                      aria-current={idx === page}
                      className={`h-2 rounded-full transition-all ${
                        idx === page ? "w-7 bg-violet" : "w-2 bg-charcoal/20 hover:bg-charcoal/40"
                      }`}
                    />
                  ))}
                </div>
                <button
                  onClick={() => go(-1)}
                  aria-label="Previous testimonials"
                  className="grid h-11 w-11 place-items-center rounded-full border border-charcoal/15 text-charcoal/75 transition-all hover:-translate-y-0.5 hover:border-violet hover:bg-violet hover:text-white"
                >
                  ←
                </button>
                <button
                  onClick={() => go(1)}
                  aria-label="Next testimonials"
                  className="grid h-11 w-11 place-items-center rounded-full border border-charcoal/15 text-charcoal/75 transition-all hover:-translate-y-0.5 hover:border-violet hover:bg-violet hover:text-white"
                >
                  →
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Three quotes at a time instead of one — more proof, no dead space */}
        <div className="relative mt-12 min-h-[420px] sm:min-h-[380px]">
          <AnimatePresence mode="wait" custom={dir}>
            <motion.div
              key={page}
              custom={dir}
              initial={{ opacity: 0, x: dir >= 0 ? 50 : -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: dir >= 0 ? -50 : 50 }}
              transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
              className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
            >
              {visible.map((t) => (
                <figure
                  key={t.name}
                  className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-charcoal/[0.07] bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:border-violet/25 hover:shadow-soft"
                >
                  <span className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-violet via-violet-400 to-[#34E0F0]" />
                  <span
                    aria-hidden
                    className="pointer-events-none absolute -top-6 right-5 font-serif text-8xl leading-none text-violet/[0.08] transition-colors duration-300 group-hover:text-violet/[0.14]"
                  >
                    &rdquo;
                  </span>

                  <Stars />

                  <blockquote className="relative mt-4 flex-1 text-base leading-relaxed text-charcoal/75">
                    {t.quote}
                  </blockquote>

                  <figcaption className="relative mt-6 flex items-center gap-3.5 border-t border-charcoal/[0.07] pt-5">
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-gradient-to-br from-violet to-violet-700 text-sm font-bold text-white shadow-soft">
                      {initials(t.name)}
                    </span>
                    <span className="min-w-0">
                      <span className="block truncate font-bold text-charcoal">{t.name}</span>
                      <span className="block truncate text-sm text-charcoal/60">{t.role}</span>
                    </span>
                  </figcaption>
                </figure>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
