"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export type QA = { q: string; a: string };

/**
 * She points up and to her right — the viewer's left, where the questions sit.
 * Pinned to 4:3: a portrait crop of this frame clips the fingertip, which is
 * the only reason to use the photo.
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

  /**
   * Separate cards rather than one divided panel. Each question then has its
   * own edge and hover, and the open one can lift out of the stack instead of
   * merely tinting a row inside a shared box.
   */
  const list = (
    <ul className="space-y-3.5">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <li key={i}>
            <div
              className={`group overflow-hidden rounded-2xl border transition-all duration-300 ${
                isOpen
                  ? "border-violet/35 bg-white shadow-soft"
                  : "border-charcoal/[0.08] bg-white shadow-card hover:-translate-y-0.5 hover:border-violet/25 hover:shadow-soft"
              }`}
            >
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="flex w-full items-center gap-4 px-5 py-4 text-left sm:px-6 sm:py-5"
              >
                <span
                  aria-hidden
                  className={`grid h-8 w-8 shrink-0 place-items-center rounded-xl text-xs font-extrabold tabular-nums transition-all duration-300 ${
                    isOpen
                      ? "bg-gradient-to-br from-violet to-violet-700 text-white shadow-glow"
                      : "bg-violet/10 text-violet group-hover:bg-violet/15"
                  }`}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                <span
                  className={`flex-1 text-base font-semibold leading-snug transition-colors ${
                    isOpen ? "text-violet" : "text-charcoal"
                  }`}
                >
                  {item.q}
                </span>

                <span
                  aria-hidden
                  className={`grid h-7 w-7 shrink-0 place-items-center rounded-full border transition-all duration-300 ${
                    isOpen
                      ? "rotate-180 border-violet bg-violet text-white"
                      : "border-charcoal/15 text-charcoal/50 group-hover:border-violet/40 group-hover:text-violet"
                  }`}
                >
                  <svg className="h-3.5 w-3.5" viewBox="0 0 14 14" fill="none">
                    <path d="M3 5.5 7 9.5l4-4" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </button>

              <div
                className={`grid transition-all duration-300 ${
                  isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  {/* indented to line up under the question, not the number */}
                  <p className="px-5 pb-5 pl-[4.5rem] text-sm leading-relaxed text-charcoal/65 sm:px-6 sm:pb-6 sm:pl-[4.75rem]">
                    {item.a}
                  </p>
                </div>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );

  if (!aside) return <div className="mx-auto max-w-3xl">{list}</div>;

  return (
    <div className="relative">
      {/* soft violet bloom so the block reads as a designed panel rather than
          two columns floating on a flat background */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-violet/10 blur-[110px]"
      />

      <div className="relative grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,360px)] lg:items-start lg:gap-14">
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
          <div className="sticky top-28">
            <div className="relative">
              {/* glow behind the frame gives the column some depth */}
              <div
                aria-hidden
                className="pointer-events-none absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-violet/30 via-violet/10 to-[#34E0F0]/25 blur-xl"
              />

              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/70 shadow-soft">
                <Image
                  src={ASIDE_IMAGE}
                  alt=""
                  aria-hidden
                  fill
                  sizes="(max-width:1024px) 0px, 360px"
                  className="object-cover"
                />
                {/* warms the cool studio grey into the palette */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-violet/25 via-transparent to-[#34E0F0]/15" />
                {/* darkens the base so the card below overlaps cleanly */}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-charcoal/45 to-transparent" />
              </div>

              {/* Overlaps the photo for depth, and stays fully readable on its
                  own ground if the remote image never loads. */}
              <div className="relative -mt-12 mx-3 rounded-2xl border border-charcoal/[0.07] bg-white p-5 shadow-soft">
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-violet to-violet-700 text-white shadow-glow">
                    <svg className="h-[18px] w-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                    </svg>
                  </span>
                  <p className="text-base font-bold leading-snug text-charcoal">
                    Still have a question?
                  </p>
                </div>

                <p className="mt-3 text-sm leading-relaxed text-charcoal/60">
                  Talk to someone who does this every day — the first
                  consultation is free.
                </p>

                <ul className="mt-4 space-y-1.5">
                  {["Free first consultation", "No obligation", "We reply within 24 hours"].map((t) => (
                    <li key={t} className="flex items-center gap-2 text-xs font-semibold text-charcoal/70">
                      <svg className="h-3.5 w-3.5 shrink-0 text-violet" viewBox="0 0 12 12" fill="none" aria-hidden>
                        <path d="M2.5 6.5 5 9l4.5-5.5" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {t}
                    </li>
                  ))}
                </ul>

                <Link href="/contact" className="btn-primary btn-glow mt-5 w-full">
                  Talk to us →
                </Link>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
