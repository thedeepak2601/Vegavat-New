import BrandLogo from "@/components/BrandLogo";
import { TECH_LOGOS } from "@/lib/logos";
import type { Brand } from "@/lib/logos";

function Track({ items, reverse = false }: { items: Brand[]; reverse?: boolean }) {
  const row = [...items, ...items];
  return (
    <div
      className={`flex w-max items-center gap-4 ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`}
    >
      {row.map((b, i) => (
        <div
          key={`${b.slug}-${i}`}
          className="group flex items-center gap-3 rounded-full border border-charcoal/[0.07] bg-white px-5 py-2.5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-violet/25 hover:shadow-card"
        >
          <BrandLogo
            slug={b.slug}
            name={b.name}
            src={b.src}
            className="h-7 w-7 transition-transform duration-300 group-hover:scale-110"
          />
          <span className="whitespace-nowrap text-sm font-bold uppercase tracking-wide text-charcoal/70 transition-colors group-hover:text-charcoal">
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
    <section className="relative z-10 -mt-px bg-white py-16">
      <div className="container-x text-center">
        <span className="eyebrow">Our Stack</span>
        <p className="mx-auto mt-4 max-w-2xl text-lg font-semibold text-charcoal/80">
          Powered by an{" "}
          <span className="heading-gradient">enterprise-grade open-source stack</span>
        </p>
      </div>

      <div className="relative mt-10 space-y-4 overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-white to-transparent sm:w-32" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-white to-transparent sm:w-32" />
        <Track items={rowA} />
        <Track items={rowB} reverse />
      </div>
    </section>
  );
}
