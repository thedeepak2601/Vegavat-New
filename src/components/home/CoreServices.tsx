"use client";

import { useRef, useEffect, useState } from "react";
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
  const wheelLock = useRef(false);
  const [active, setActive] = useState(0);

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
    const el = trackRef.current;
    if (el) {
      const card = el.querySelector<HTMLElement>("[data-card]");
      if (card) {
        const step = card.clientWidth + 24; // 24 = gap-6
        // Cards render three times; modulo maps back to the real service list.
        setActive(Math.round(el.scrollLeft / step) % SERVICES.length);
      }
    }
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

  // Wheel over the track steps through the cards instead of scrolling the page.
  // Registered manually because React attaches `wheel` passively at the root,
  // where preventDefault() is a no-op. One card per gesture: the lock swallows
  // the burst of events a single wheel flick or trackpad swipe emits.
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    const onWheel = (e: WheelEvent) => {
      // Sideways gestures already scroll the track natively — leave them alone.
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) return;
      if (Math.abs(e.deltaY) < 2) return;

      e.preventDefault();
      if (wheelLock.current) return;
      wheelLock.current = true;
      scroll(e.deltaY > 0 ? 1 : -1);
      window.setTimeout(() => {
        wheelLock.current = false;
      }, 450);
    };

    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, []);

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
        <div className="mt-9">
          {/* track */}
          <div
            ref={trackRef}
            id="core-services-track"
            role="region"
            aria-roledescription="carousel"
            aria-label="Core services"
            onScroll={onScroll}
            onMouseEnter={() => { paused.current = true; }}
            onMouseLeave={() => { paused.current = false; }}
            className="no-scrollbar flex snap-x snap-mandatory items-stretch gap-6 overflow-x-auto overflow-y-hidden pb-2"
          >
            {[...SERVICES, ...SERVICES, ...SERVICES].map((s, i) => (
              <Link
                key={`${s.slug}-${i}`}
                href={`/services/${s.slug}`}
                data-card
                style={{ backgroundColor: PALETTE[i % PALETTE.length] }}
                // The pastel is an inline style, which normal dark utilities
                // can't beat — the important modifier is what overrides it.
                className="group flex min-h-[440px] w-full shrink-0 snap-start flex-col overflow-hidden rounded-3xl p-5 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-soft dark:!bg-[#16131f] dark:ring-1 dark:ring-white/10 sm:w-[calc((100%-1.5rem)/2)] lg:w-[calc((100%-3rem)/3)]"
              >
                <div className="h-40 overflow-hidden rounded-2xl bg-white/40 dark:bg-white/[0.06]">
                  <Image
                    src={s.image}
                    alt={s.title}
                    width={720}
                    height={360}
                    sizes="(max-width:1024px) 90vw, 360px"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* icon badge overlapping the image */}
                <div className="relative z-10 -mt-7 ml-1 grid h-12 w-12 place-items-center rounded-2xl bg-white text-xl shadow-card ring-1 ring-charcoal/[0.04] dark:bg-[#221e30] dark:ring-white/10">
                  {s.icon}
                </div>

                <h3 className="mt-4 text-xl font-bold text-charcoal">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-charcoal/75">{s.body}</p>

                {/* A carousel card is for discovery, not detail — three
                    capability chips instead of the full task list, which now
                    lives on the service page itself. */}
                {s.points && (
                  <ul className="mt-4 flex flex-wrap gap-1.5">
                    {s.points.slice(0, 3).map((p) => (
                      <li
                        key={p}
                        className="rounded-full bg-white/70 px-2.5 py-1 text-xs font-semibold text-charcoal/75 ring-1 ring-charcoal/[0.06] dark:bg-white/[0.06] dark:text-white/75 dark:ring-white/10"
                      >
                        {p}
                      </li>
                    ))}
                  </ul>
                )}

                <span className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-semibold text-violet transition-transform group-hover:translate-x-1">
                  Learn more →
                </span>
              </Link>
            ))}
          </div>

          {/* Controls sit below the track so nothing overlaps card content. */}
          <div className="mt-7 flex items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <p aria-live="polite" className="text-sm font-bold tabular-nums text-charcoal">
                <span className="text-violet">{String(active + 1).padStart(2, "0")}</span>
                <span className="text-charcoal/60"> / {String(SERVICES.length).padStart(2, "0")}</span>
                <span className="sr-only"> services</span>
              </p>
              <div className="h-1 w-28 overflow-hidden rounded-full bg-charcoal/10 sm:w-44 dark:bg-white/15">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-violet to-[#34E0F0] transition-all duration-300"
                  style={{ width: `${((active + 1) / SERVICES.length) * 100}%` }}
                />
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <button
                onClick={() => scroll(-1)}
                aria-label="Previous services"
                aria-controls="core-services-track"
                className="grid h-11 w-11 place-items-center rounded-full border border-charcoal/10 bg-white text-charcoal/75 shadow-card transition-colors hover:bg-violet hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet focus-visible:ring-offset-2 dark:border-white/15 dark:bg-white/[0.06] dark:text-white/75"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 6l-6 6 6 6" /></svg>
              </button>
              <button
                onClick={() => scroll(1)}
                aria-label="Next services"
                aria-controls="core-services-track"
                className="grid h-11 w-11 place-items-center rounded-full border border-charcoal/10 bg-white text-charcoal/75 shadow-card transition-colors hover:bg-violet hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet focus-visible:ring-offset-2 dark:border-white/15 dark:bg-white/[0.06] dark:text-white/75"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 6l6 6-6 6" /></svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
