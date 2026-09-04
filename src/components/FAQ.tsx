"use client";

import Image from "next/image";
import Link from "next/link";

export type QA = { q: string; a: string };

/**
 * Hand on chin, looking up — the questioning expression the section is
 * about. Face-cropped square so she centres in the circle, and her light
 * neutral backdrop blends into it rather than showing a hard photo edge.
 */
const ASIDE_IMAGE =
  "https://images.unsplash.com/photo-1758521540744-83f97766e971?auto=format&fit=crop&crop=faces&w=760&h=760&q=80";

/** Cycled per question, so each row reads as its own topic. */
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
 * Floating question bubbles around the portrait. Glyph colour is picked per
 * background, not by taste: white on amber-400 measures 1.67:1 and on cyan
 * 1.61:1, so those two carry charcoal (11.2:1 and 11.7:1) instead.
 */
const BUBBLES = [
  { cls: "bg-violet text-white", size: "h-14 w-14 text-xl", pos: "left-0 top-10", delay: "0s" },
  { cls: "bg-[#34E0F0] text-charcoal", size: "h-11 w-11 text-base", pos: "left-2 bottom-24", delay: "1.1s" },
  { cls: "bg-amber-400 text-charcoal", size: "h-12 w-12 text-lg", pos: "right-0 top-1/2", delay: "0.6s" },
  { cls: "bg-violet-400 text-white", size: "h-9 w-9 text-sm", pos: "right-6 bottom-14", delay: "1.7s" },
];

/** Small solid dots, purely decorative. */
const DOTS = [
  "left-16 top-2 h-3 w-3 bg-violet",
  "right-14 top-6 h-2.5 w-2.5 bg-[#34E0F0]",
  "left-6 top-1/2 h-2 w-2 bg-amber-400",
  "right-4 bottom-1/3 h-2.5 w-2.5 bg-violet-300",
  "left-24 bottom-4 h-2 w-2 bg-[#34E0F0]",
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
  /**
   * Answers stay open. These lists are short, and hiding them behind a click
   * buries the one thing the section exists to deliver. `dl/dt/dd` is the
   * correct structure for question and answer pairs.
   */
  const list = (
    <dl className="space-y-7">
      {items.map((item, i) => (
        <div key={i} className="group flex gap-4 sm:gap-5">
          <span
            aria-hidden
            className="mt-0.5 grid h-11 w-11 shrink-0 place-items-center rounded-full bg-violet/10 text-violet ring-1 ring-violet/10 transition-all duration-300 group-hover:bg-violet group-hover:text-white group-hover:ring-violet/30"
          >
            <svg className="h-[19px] w-[19px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
              {ICONS[i % ICONS.length]}
            </svg>
          </span>

          <div className="min-w-0">
            <dt className="text-base font-bold leading-snug text-charcoal sm:text-lg">
              {item.q}
            </dt>
            <dd className="mt-2 text-sm leading-relaxed text-charcoal/65">{item.a}</dd>
          </div>
        </div>
      ))}
    </dl>
  );

  const heading = title ? (
    <div className="max-w-xl">
      <span className="text-sm font-bold tracking-wide text-violet">{eyebrow}</span>
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
        <div className={title ? "mt-10" : ""}>{list}</div>
      </div>
    );
  }

  return (
    <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,44%)] lg:items-center lg:gap-16">
      <div>
        {heading}
        <div className={title ? "mt-10" : ""}>{list}</div>
      </div>

      {/* Desktop only — the bubble composition needs room to read, and on a
          phone it would push the answers off the first screen. */}
      <div className="relative hidden lg:block">
        {/* padding leaves room for the bubbles to sit outside the circle */}
        <div className="relative mx-auto aspect-square w-full max-w-[440px] px-12 py-6">
          {/* the circle the portrait sits in — her white backdrop dissolves
              into it, so no photo edge is visible */}
          <div className="relative h-full w-full overflow-hidden rounded-full bg-charcoal-50 ring-8 ring-charcoal-50">
            <Image
              src={ASIDE_IMAGE}
              alt=""
              aria-hidden
              fill
              sizes="(max-width:1024px) 0px, 380px"
              className="object-cover"
            />
            {/* The reference art is a cutout on flat grey; this is a real
                photograph, so a light violet wash pulls its background into
                the palette instead of reading as an unrelated wall. */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-violet/25 via-violet/5 to-[#34E0F0]/20 mix-blend-multiply" />
            <div className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-inset ring-charcoal/[0.06]" />
          </div>

          {BUBBLES.map((b, i) => (
            <span
              key={i}
              aria-hidden
              style={{ animationDelay: b.delay }}
              className={`animate-float absolute grid place-items-center rounded-full font-extrabold shadow-soft ${b.cls} ${b.size} ${b.pos}`}
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
          <Link href="/contact" className="font-bold text-violet hover:underline">
            Ask us directly →
          </Link>
        </p>
      </div>
    </div>
  );
}
