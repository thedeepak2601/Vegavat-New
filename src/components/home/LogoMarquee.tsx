import BrandLogo from "@/components/BrandLogo";
import { TECH_LOGOS } from "@/lib/logos";
import type { Brand } from "@/lib/logos";

function Track({ items, reverse = false }: { items: Brand[]; reverse?: boolean }) {
  const row = [...items, ...items];
  return (
    <div
      className={`flex w-max items-center gap-2 ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`}
    >
      {row.map((b, i) => (
        <div
          key={`${b.slug}-${i}`}
          // Full colour at rest, muted on hover — the inverse of the usual
          // logo-wall treatment, so the strip reads as vivid by default.
          className="group flex shrink-0 items-center gap-3 px-8 py-1 transition-all duration-300 hover:opacity-60 hover:grayscale"
        >
          <BrandLogo
            slug={b.slug}
            name={b.name}
            src={b.src}
            className="h-8 w-8 transition-transform duration-300 group-hover:scale-110"
          />
          <span className="whitespace-nowrap text-base font-bold tracking-tight text-charcoal transition-colors group-hover:text-charcoal/60">
            {b.name}
          </span>
        </div>
      ))}
    </div>
  );
}

export default function LogoMarquee() {
  const half = Math.ceil(TECH_LOGOS.length / 2);
  const rowA = TECH_LOGOS.slice(0, half);
  const rowB = TECH_LOGOS.slice(half);

  return (
    <section className="relative z-10 -mt-px bg-white py-3 dark:bg-[#0b0912]">
      <div className="relative space-y-1 overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-white to-transparent dark:from-[#0b0912] sm:w-40" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-white to-transparent dark:from-[#0b0912] sm:w-40" />
        <Track items={rowA} />
        <Track items={rowB} reverse />
      </div>
    </section>
  );
}
