"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export type QA = { q: string; a: string };

/**
 * Single source for the FAQ portrait.
 *
 * To use a cutout PNG instead, drop it at `public/faq-person.png` and point
 * this at "/faq-person.png". A cutout sits inside the circle with no photo
 * edge, which is what the reference art does; a photograph brings its own
 * background, so the circle keeps a wash and ring to make that read as
 * deliberate rather than accidental.
 */
const ASIDE_IMAGE =
  "https://images.unsplash.com/photo-1758521540744-83f97766e971?auto=format&fit=crop&crop=faces&w=760&h=760&q=80";

/** Cycled per question, so rows read as distinct topics. */
const ICONS = [
  // check badge
  <path key="a" d="m9 12 2 2 4-4M12 3l2.1 1.6 2.6-.3 1 2.4 2.3 1.2-.6 2.6.6 2.6-2.3 1.2-1 2.4-2.6-.3L12 21l-2.1-1.6-2.6.3-1-2.4L4 15.7l.6-2.6L4 10.5l2.3-1.2 1-2.4 2.6.3z" />,
  // two-way arrows
  <path key="b" d="M7 7h11l-3-3m3 3-3 3M17 17H6l3-3m-3 3 3 3" />,
  // document
  <path key="c" d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8zm0 0v5h5M9 13h6M9 17h4" />,
  // clock
  <path key="d" d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zm0-13v5l3.5 2" />,
  // shield
  <path key="e" d="M12 3l7.5 3v5.5c0 4.3-3 8.2-7.5 9.5-4.5-1.3-7.5-5.2-7.5-9.5V6z" />,
  // chat
  <path key="f" d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />,
];

/**
 * Bubble palette taken from the reference: blue, green, orange, red. Glyph
 * colour is measured rather than chosen — white on the orange reaches only 2.3:1
 * and on the green 2.5:1, so those two carry charcoal (8.2:1 and 7.4:1). The
 * blue and red were darkened a step so white clears AA on them (5.7:1 and
 * 5.2:1 rather than 4.8 and 4.1).
 */
const BUBBLES = [
  { bg: "bg-[#2A5FD4]", fg: "text-white", size: "h-14 w-14 text-xl", pos: "left-0 top-8", delay: "0s" },
  { bg: "bg-[#3BB964]", fg: "text-charcoal", size: "h-12 w-12 text-lg", pos: "left-1 bottom-28", delay: "1.1s" },
  { bg: "bg-[#F0972B]", fg: "text-charcoal", size: "h-12 w-12 text-lg", pos: "right-0 top-1/2", delay: "0.6s" },
  { bg: "bg-[#CE2A43]", fg: "text-white", size: "h-10 w-10 text-base", pos: "right-5 bottom-16", delay: "1.7s" },
];

/** Small solid dots, purely decorative. */
const DOTS = [
  "left-20 top-1 h-3 w-3 bg-[#2A5FD4]",
  "right-16 top-8 h-2.5 w-2.5 bg-[#CE2A43]",
  "left-8 top-[38%] h-2.5 w-2.5 bg-[#F0972B]",
  "right-6 bottom-[38%] h-2.5 w-2.5 bg-[#3BB964]",
  "left-16 bottom-8 h-2.5 w-2.5 bg-[#CE2A43]",
];

export default function FAQ({
  items,
  eyebrow = "Help & Support",
  title = "Frequently asked questions",
  desc = "Everything you need to know before getting started. Can't spot the answer you need? Our team is only a message away.",
  /** Set false where the layout has no room for the portrait column. */
  aside = true,
}: {
  items: QA[];
  eyebrow?: string;
  title?: string;
  desc?: string;
  aside?: boolean;
}) {
  /** First answer open, the rest closed; clicking an open row closes it. */
  const [open, setOpen] = useState<number | null>(0);

  const list = (
    <div className="divide-y divide-charcoal/[0.08] dark:divide-white/10">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={i} className="group py-5 first:pt-0">
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-start gap-4 text-left sm:gap-5"
            >
              <span
                aria-hidden
                className={`grid h-11 w-11 shrink-0 place-items-center rounded-full transition-all duration-300 ${
                  isOpen
                    ? "bg-violet text-white shadow-glow"
                    : "bg-violet/10 text-violet ring-1 ring-violet/10 group-hover:bg-violet/20 dark:bg-white/[0.07] dark:text-violet-200 dark:ring-white/10"
                }`}
              >
                <svg className="h-[19px] w-[19px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                  {ICONS[i % ICONS.length]}
                </svg>
              </span>

              <span
                className={`flex-1 pt-2.5 text-base font-bold leading-snug transition-colors sm:text-lg ${
                  isOpen ? "text-violet dark:text-violet-200" : "text-charcoal"
                }`}
              >
                {item.q}
              </span>

              <span
                aria-hidden
                className={`mt-2 grid h-8 w-8 shrink-0 place-items-center rounded-full border transition-all duration-300 ${
                  isOpen
                    ? "rotate-45 border-violet bg-violet text-white"
                    : "border-charcoal/15 text-charcoal/50 group-hover:border-violet/40 group-hover:text-violet dark:border-white/15 dark:text-white/60"
                }`}
              >
                <svg className="h-3.5 w-3.5" viewBox="0 0 14 14" fill="none">
                  <path d="M7 2v10M2 7h10" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" />
                </svg>
              </span>
            </button>

            <div
              className={`grid transition-all duration-300 ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                {/* indented to sit under the question, clear of the icon */}
                <p className="pl-[3.75rem] pt-2 text-sm leading-relaxed text-charcoal/60 sm:pl-16">
                  {item.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );

  const heading = title ? (
    <div className="max-w-xl">
      <span className="text-sm font-bold tracking-wide text-violet dark:text-violet-200">
        {eyebrow}
      </span>
      <h2 className="mt-3 text-3xl font-extrabold leading-[1.12] tracking-tight text-charcoal sm:text-4xl lg:text-[42px]">
        {title}
      </h2>
      {desc && (
        <p className="mt-4 text-base leading-relaxed text-charcoal/60">{desc}</p>
      )}
    </div>
  ) : null;

  if (!aside) {
    return (
      <div className="mx-auto max-w-3xl">
        {heading}
        <div className={title ? "mt-9" : ""}>{list}</div>
      </div>
    );
  }

  return (
    <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,44%)] lg:items-center lg:gap-16">
      <div>
        {heading}
        <div className={title ? "mt-9" : ""}>{list}</div>
      </div>

      {/* Desktop only — the bubble composition needs room to read, and on a
          phone it would push the answers off the first screen. */}
      <div className="relative hidden lg:block">
        {/* padding leaves room for the bubbles to sit outside the circle */}
        <div className="relative mx-auto aspect-square w-full max-w-[440px] px-12 py-6">
          <div className="relative h-full w-full overflow-hidden rounded-full bg-charcoal-50 ring-8 ring-charcoal-50 dark:bg-white/[0.06] dark:ring-white/[0.06]">
            <Image
              src={ASIDE_IMAGE}
              alt=""
              aria-hidden
              fill
              sizes="(max-width:1024px) 0px, 380px"
              className="object-cover"
            />
            {/* pulls the photo's own background into the palette */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-violet/25 via-violet/5 to-[#34E0F0]/20 mix-blend-multiply" />
            <div className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-inset ring-charcoal/[0.06] dark:ring-white/10" />
          </div>

          {BUBBLES.map((b, i) => (
            <span
              key={i}
              aria-hidden
              style={{ animationDelay: b.delay }}
              className={`animate-float absolute grid place-items-center rounded-full font-extrabold shadow-soft ${b.bg} ${b.fg} ${b.size} ${b.pos}`}
            >
              ?
            </span>
          ))}

          {DOTS.map((d, i) => (
            <span
              key={i}
              aria-hidden
              style={{ animationDelay: `${0.4 + i * 0.5}s` }}
              className={`animate-float absolute rounded-full ${d}`}
            />
          ))}
        </div>

        <p className="mt-4 text-center text-sm text-charcoal/60">
          Can&apos;t spot your question?{" "}
          <Link href="/contact" className="font-bold text-violet hover:underline dark:text-violet-200">
            Ask us directly →
          </Link>
        </p>
      </div>
    </div>
  );
}
