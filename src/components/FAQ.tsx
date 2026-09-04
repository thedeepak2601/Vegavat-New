"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export type QA = { q: string; a: string };

/**
 * She points up and to her right — the viewer's left — which is where the
 * questions sit. Pinned to a 4:3 crop deliberately: a portrait crop of this
 * frame clips the fingertip, which is the whole point of the picture.
 */
const ASIDE_IMAGE =
  "https://images.unsplash.com/photo-1758600587766-24c6ed25576e?auto=format&fit=crop&w=880&h=660&q=80";

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
      <aside className="hidden lg:flex lg:flex-col lg:gap-5">
        <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-charcoal/[0.07] shadow-card">
          <Image
            src={ASIDE_IMAGE}
            alt=""
            aria-hidden
            fill
            sizes="(max-width:1024px) 0px, 380px"
            className="object-cover"
          />
          {/* the studio grey is cool and flat; a light violet wash ties it to
              the rest of the palette without touching the subject */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-violet/20 via-transparent to-[#34E0F0]/10" />
        </div>

        {/* Own card rather than an overlay, so nothing sits on top of the
            gesture and the copy never depends on the photo loading. */}
        <div className="flex flex-1 flex-col justify-center rounded-3xl border border-violet/15 bg-gradient-to-br from-violet/[0.07] via-white to-[#34E0F0]/[0.06] p-6 shadow-card">
          <span className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-violet to-violet-700 text-white shadow-glow">
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
            </svg>
          </span>
          <p className="mt-4 text-lg font-bold leading-snug text-charcoal">
            Still have a question?
          </p>
          <p className="mt-1.5 text-sm leading-relaxed text-charcoal/60">
            Talk to someone who does this every day. The first consultation is
            free, with no obligation.
          </p>
          <Link
            href="/contact"
            className="btn-primary btn-glow mt-5 w-full"
          >
            Talk to us →
          </Link>
        </div>
      </aside>
    </div>
  );
}
