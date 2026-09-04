"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export type QA = { q: string; a: string };

/** Verified to resolve; portrait crop so it fills the column without gaps. */
const ASIDE_IMAGE =
  "https://images.unsplash.com/photo-1600275669439-14e40452d20b?auto=format&fit=crop&w=700&q=80";

export default function FAQ({
  items,
  /** Set false on a page where the aside would crowd the layout. */
  aside = true,
}: {
  items: QA[];
  aside?: boolean;
}) {
  const [open, setOpen] = useState<number | null>(0);

  const list = (
    <div className="divide-y divide-charcoal/[0.08] rounded-2xl border border-charcoal/[0.08] bg-white">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={i}>
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 p-6 text-left"
            >
              <span className="text-base font-semibold text-charcoal">{item.q}</span>
              <span className={`grid h-7 w-7 shrink-0 place-items-center rounded-full border transition-all ${isOpen ? "rotate-45 border-violet bg-violet text-white" : "border-charcoal/20 text-charcoal/60"}`}>
                <svg className="h-3.5 w-3.5" viewBox="0 0 14 14" fill="none"><path d="M7 2v10M2 7h10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg>
              </span>
            </button>
            <div className={`grid overflow-hidden px-6 transition-all duration-300 ${isOpen ? "grid-rows-[1fr] pb-6 opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
              <div className="overflow-hidden">
                <p className="text-sm leading-relaxed text-charcoal/60">{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );

  if (!aside) return <div className="mx-auto max-w-3xl">{list}</div>;

  return (
    // items-start so the aside can stick beside a long accordion
    <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[minmax(0,1fr)_340px] lg:items-start lg:gap-12">
      {list}

      {/* Desktop only — on narrow screens the answers matter more than the
          portrait, and stacking them just pushes the FAQ down the page. */}
      <aside className="hidden lg:sticky lg:top-28 lg:block">
        <div className="relative overflow-hidden rounded-3xl border border-charcoal/[0.07] shadow-card">
          <div className="relative aspect-[3/4] w-full">
            <Image
              src={ASIDE_IMAGE}
              alt=""
              aria-hidden
              fill
              sizes="(max-width:1024px) 0px, 340px"
              className="object-cover"
            />
            {/* scrim so the card below stays readable over any crop */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/25 to-transparent" />
          </div>

          <div className="absolute inset-x-4 bottom-4">
            {/* Solid-ish dark ground rather than white/10: the card must stay
                readable even if the remote image never loads, which would
                otherwise leave white text on a near-white section. */}
            <div className="rounded-2xl border border-white/15 bg-charcoal/80 p-4 backdrop-blur-md">
              {/* points back toward the answers on the left */}
              <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#34E0F0]">
                <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M19 12H5M11 6l-6 6 6 6" />
                </svg>
                Answers on the left
              </span>
              <p className="mt-2 text-base font-bold leading-snug text-white">
                Still have a question?
              </p>
              <p className="mt-1 text-xs leading-relaxed text-white/70">
                Ask us directly — the first consultation is free.
              </p>
              <Link
                href="/contact"
                className="mt-3 inline-flex w-full items-center justify-center gap-1.5 rounded-full bg-white px-4 py-2 text-sm font-bold text-violet transition-all hover:-translate-y-0.5 hover:shadow-glow"
              >
                Talk to us
                <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}
