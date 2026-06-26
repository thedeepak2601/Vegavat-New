"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import { SERVICES } from "@/lib/content";

// Soft pastel card backgrounds, cycled across the slider
const PALETTE = ["#EDE7FF", "#E3EEFF", "#FCE7EF", "#FFF1E6", "#E6F7FB", "#EAF6E9"];

export default function CoreServices() {
  const trackRef = useRef<HTMLDivElement>(null);
  const wrapTimer = useRef<number | null>(null);
  const paused = useRef(false);

  // Cards render THREE times. We park the viewport in the middle copy and,
  // whenever the scroll drifts toward a neighbouring copy, silently jump back
  // by exactly one set-width (measured from the card offsets, so gaps are
  // included exactly). The copies are pixel-identical and the jump happens
  // off-screen, so the loop is seamless, with no reset or flicker.
  const period = () => {
    const el = trackRef.current;
    if (!el) return 0;
    const cards = el.querySelectorAll<HTMLElement>("[data-card]");
    if (cards.length <= SERVICES.length) return 0;
    return cards[SERVICES.length].offsetLeft - cards[0].offsetLeft;
  };

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const center = () => { const p = period(); if (p) el.scrollLeft = p; };
    const raf = requestAnimationFrame(center); // center in the middle copy after layout
    return () => cancelAnimationFrame(raf);
  }, []);

  const normalize = () => {
    const el = trackRef.current;
    if (!el) return;
    const p = period();
    if (!p) return;
    if (el.scrollLeft < p * 0.5) el.scrollLeft += p;
    else if (el.scrollLeft >= p * 1.5) el.scrollLeft -= p;
  };

  const onScroll = () => {
    if (wrapTimer.current) window.clearTimeout(wrapTimer.current);
    wrapTimer.current = window.setTimeout(normalize, 80);
  };

  const scroll = (dir: number) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const step = card ? card.clientWidth + 24 : 340; // 24 = gap-6
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  // Autoplay: advance one card every 3.5s, pause on hover. Respects reduced-motion.
  useEffect(() => {
    if (typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => {
      if (!paused.current) scroll(1);
    }, 3500);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section className="relative overflow-hidden bg-charcoal-50/60 py-9 lg:py-11">
      {/* soft decorative glow */}
      <div className="pointer-events-none absolute -right-32 top-0 h-80 w-80 rounded-full bg-violet/10 blur-[120px]" />

      <div className="container-x relative">
        {/* ---- Header: text on the left, button on the right ---- */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <Reveal className="max-w-2xl">
            <span className="eyebrow">Core Services</span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-charcoal sm:text-4xl">
              Concepts turned into high-performing digital products
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-charcoal/60">
              Since 2024 we&apos;ve partnered closely with teams across industries, prioritizing clarity, reliability and results that drive real impact.
            </p>
          </Reveal>

          <Link href="/services" className="btn-primary btn-glow shrink-0">
            View all services →
          </Link>
        </div>

        {/* ---- Slider ---- */}
        <div className="relative mt-9">
          {/* side arrows, vertically centered over the slider */}
          <button
            onClick={() => scroll(-1)}
            aria-label="Previous services"
            className="absolute -left-3 top-1/2 z-20 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-charcoal/10 bg-white text-charcoal/70 shadow-card transition-colors hover:bg-violet hover:text-white lg:-left-5"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 6l-6 6 6 6" /></svg>
          </button>
          <button
            onClick={() => scroll(1)}
            aria-label="Next services"
            className="absolute -right-3 top-1/2 z-20 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-charcoal/10 bg-white text-charcoal/70 shadow-card transition-colors hover:bg-violet hover:text-white lg:-right-5"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 6l6 6-6 6" /></svg>
          </button>

          {/* track */}
          <div
            ref={trackRef}
            onScroll={onScroll}
            onMouseEnter={() => { paused.current = true; }}
            onMouseLeave={() => { paused.current = false; }}
            className="no-scrollbar flex snap-x snap-mandatory items-stretch gap-6 overflow-x-auto pb-2"
          >
            {[...SERVICES, ...SERVICES, ...SERVICES].map((s, i) => (
              <Link
                key={`${s.slug}-${i}`}
                href={`/services/${s.slug}`}
                data-card
                style={{ backgroundColor: PALETTE[i % PALETTE.length] }}
                className="group flex w-full shrink-0 snap-start flex-col rounded-3xl p-5 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-soft sm:w-[calc((100%-1.5rem)/2)] lg:w-[calc((100%-3rem)/3)]"
              >
                <div className="relative h-40 overflow-hidden rounded-2xl bg-white/40">
                  <Image src={s.image} alt={s.title} fill sizes="(max-width:1024px) 90vw, 360px" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>

                {/* icon badge overlapping the image */}
                <div className="relative z-10 -mt-7 ml-1 grid h-12 w-12 place-items-center rounded-2xl bg-white text-xl shadow-card ring-1 ring-charcoal/[0.04]">
                  {s.icon}
                </div>

                <h3 className="mt-4 text-xl font-bold text-charcoal">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-charcoal/70">{s.body}</p>

                {s.points && (
                  <>
                    <p className="mt-4 text-sm font-semibold text-charcoal/80">It covers key tasks including:</p>
                    <ul className="mt-2 space-y-1.5">
                      {s.points.map((p) => (
                        <li key={p} className="flex items-start gap-2 text-sm text-charcoal/70">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-violet/70" />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </>
                )}

                <span className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-semibold text-violet transition-transform group-hover:translate-x-1">
                  Learn more →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
