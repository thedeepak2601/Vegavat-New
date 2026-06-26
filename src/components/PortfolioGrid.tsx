import Image from "next/image";
import Reveal from "@/components/Reveal";
import { PORTFOLIO } from "@/lib/content";

export default function PortfolioGrid({ limit }: { limit?: number }) {
  const items = limit ? PORTFOLIO.slice(0, limit) : PORTFOLIO;
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((p, i) => (
        <Reveal key={p.title} delay={(i % 3) * 0.08}>
          <article className="group h-full overflow-hidden rounded-2xl border border-charcoal/[0.07] bg-white shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-soft">
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image src={p.image} alt={p.title} fill sizes="(max-width:768px) 100vw, 400px" className="object-cover transition-transform duration-500 group-hover:scale-105" />
              <span className="absolute left-4 top-4 rounded-full bg-charcoal/85 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-white backdrop-blur">
                {p.tag}
              </span>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-bold text-charcoal">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-charcoal/60 line-clamp-3">{p.desc}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-violet transition-transform group-hover:translate-x-1">
                View more →
              </span>
            </div>
          </article>
        </Reveal>
      ))}
    </div>
  );
}
