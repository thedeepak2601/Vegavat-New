"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export type QA = { q: string; a: string };

/** Verified to resolve; portrait crop, so it fills a tall column cleanly. */
const ASIDE_IMAGE =
  "https://images.unsplash.com/photo-1600275669439-14e40452d20b?auto=format&fit=crop&w=900&q=80";

export default function FAQ({
  items,
  eyebrow = "FAQ",
  title,
  desc,
  /** Set false where the layout has no room for the portrait column. */
  aside = true,
}: {
  items: QA[];
  eyebrow?: string;
  title?: string;
  desc?: string;
  aside?: boolean;
}) {
  const [open, setOpen] = useState<number | null>(0);

  const list = (
    <div className="divide-y divide-charcoal/[0.08] overflow-hidden rounded-2xl border border-charcoal/[0.08] bg-white shadow-card">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={i} className={isOpen ? "bg-violet/[0.02]" : ""}>
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-violet/[0.03]"
            >
              <span className={`text-base font-semibold transition-colors ${isOpen ? "text-violet" : "text-charcoal"}`}>
                {item.q}
              </span>
              <span className={`grid h-7 w-7 shrink-0 place-items-center rounded-full border transition-all duration-300 ${isOpen ? "rotate-45 border-violet bg-violet text-white" : "border-charcoal/20 text-charcoal/60"}`}>
                <svg className="h-3.5 w-3.5" viewBox="0 0 14 14" fill="none"><path d="M7 2v10M2 7h10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg>
              </span>
            </button>
            <div className={`grid overflow-hidden px-6 transition-all duration-300 ${isOpen ? "grid-rows-[1fr] pb-5 opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
              <div className="overflow-hidden">
                <p className="border-l-2 border-violet/25 pl-4 text-sm leading-relaxed text-charcoal/60">
                  {item.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );

  if (!aside) return <div className="mx-auto max-w-3xl">{list}</div>;

  return (
    // Heading and accordion share the left column; the portrait owns the
    // right one and matches its height via items-stretch + h-full.
    <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,380px)] lg:items-stretch lg:gap-14">
      <div>
        {title && (
          <div className="max-w-xl">
            <span className="eyebrow">{eyebrow}</span>
            <h2 className="mt-4 text-3xl font-extrabold leading-[1.15] tracking-tight text-charcoal sm:text-4xl">
              {title}
            </h2>
            {desc && (
              <p className="mt-4 text-base leading-relaxed text-charcoal/60">{desc}</p>
            )}
          </div>
        )}
        <div className={title ? "mt-9" : ""}>{list}</div>
      </div>

      {/* Desktop only — stacked on mobile this just pushes the answers down. */}
      <aside className="hidden lg:block">
        <div className="relative h-full min-h-[520px] overflow-hidden rounded-3xl border border-charcoal/[0.07] shadow-card">
          <Image
            src={ASIDE_IMAGE}
            alt=""
            aria-hidden
            fill
            sizes="(max-width:1024px) 0px, 380px"
            className="object-cover"
          />
          {/* scrim keeps the card legible over whatever the crop lands on */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/45 to-transparent" />

          <div className="absolute inset-x-5 bottom-5">
            {/* Opaque ground, not a translucent one: over a near-white section
                a failed image request would otherwise leave white on white. */}
            <div className="rounded-2xl border border-white/10 bg-charcoal/85 p-5 backdrop-blur-md">
              <p className="text-lg font-bold leading-snug text-white">
                Still have a question?
              </p>
              <p className="mt-1.5 text-sm leading-relaxed text-white/70">
                Talk to someone who does this every day. The first
                consultation is free.
              </p>
              <Link
                href="/contact"
                className="mt-4 inline-flex w-full items-center justify-center gap-1.5 rounded-full bg-white px-4 py-2.5 text-sm font-bold text-violet transition-all hover:-translate-y-0.5 hover:shadow-glow"
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
