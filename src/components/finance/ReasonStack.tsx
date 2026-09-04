import Image from "next/image";

type Props = {
  /** What the reasons are for, e.g. "Trademark Registration". */
  subject: string;
  reasons: string[];
  image?: string;
};

/**
 * Numbered reasons that pile up as you scroll.
 *
 * Each card is `position: sticky` with a top offset a little larger than the
 * card before it, so once a card reaches its stop it stays there while the
 * next one slides up and covers it — leaving a visible sliver of every card
 * already passed. It is pure CSS: no scroll listeners, no layout thrash, and
 * it degrades to a plain stacked list wherever sticky is unsupported.
 *
 * The offsets are inline because they are computed per index; Tailwind cannot
 * express an arbitrary per-item `top` without generating a class per card.
 */
export default function ReasonStack({ subject, reasons, image }: Props) {
  if (!reasons.length) return null;

  return (
    // No `overflow-hidden` anywhere up this tree — it would break sticky.
    <section className="section">
      <div className="container-x">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
          {/* Left column rides along with the stack */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <span className="eyebrow">Why It Matters</span>
            <h2 className="mt-4 text-3xl font-extrabold leading-[1.15] tracking-tight text-charcoal sm:text-4xl">
              {reasons.length} reasons to choose{" "}
              <span className="heading-gradient">{subject}</span>
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-charcoal/60">
              The reasons clients most often give for getting this done properly
              rather than leaving it to chance.
            </p>

            {image && (
              <div className="relative mt-8 hidden aspect-[4/3] w-full overflow-hidden rounded-3xl border border-charcoal/[0.07] shadow-card lg:block">
                <Image
                  src={image}
                  alt=""
                  aria-hidden
                  fill
                  sizes="(max-width:1024px) 0px, 440px"
                  className="object-cover"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-violet/25 to-transparent" />
              </div>
            )}
          </div>

          {/* The stack. space-y gives each card scroll distance to travel. */}
          <ol className="space-y-7 lg:space-y-14">
            {reasons.map((r, i) => (
              <li
                key={r}
                className="sticky"
                style={{ top: `${112 + i * 18}px` }}
              >
                <div className="group flex min-h-[132px] items-center gap-6 rounded-3xl border border-violet/20 bg-white p-6 shadow-card transition-colors hover:border-violet/45 sm:p-7 dark:border-white/10 dark:bg-[#16131f]">
                  <span
                    aria-hidden
                    className="shrink-0 text-4xl font-extrabold tabular-nums text-violet/70 transition-colors group-hover:text-violet sm:text-5xl"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-base font-semibold leading-relaxed text-charcoal sm:text-lg">
                    {r}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
