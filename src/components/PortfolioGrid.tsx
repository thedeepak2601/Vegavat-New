import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import { PORTFOLIO } from "@/lib/content";

// Portfolio items have no individual case-study page, so each card links
// through to the service it demonstrates. Keeps the whole card a real,
// honest hit target instead of a "View more" label that goes nowhere.
const TAG_SERVICE: Record<string, string> = {
  "Mobile App Development": "mobile-app-development",
  "Web Development": "web-development",
  "UI/UX Design": "ui-ux-design",
  "Graphics Design": "graphic-design",
};

export default function PortfolioGrid({ limit }: { limit?: number }) {
  const items = limit ? PORTFOLIO.slice(0, limit) : PORTFOLIO;
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((p, i) => {
        const slug = TAG_SERVICE[p.tag];
        return (
          <Reveal key={p.title} delay={(i % 3) * 0.08}>
            <Link
              href={slug ? `/services/${slug}` : "/contact"}
              aria-label={`${p.title} — view our ${p.tag} service`}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-charcoal/[0.07] bg-white shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:border-violet/30 hover:shadow-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet focus-visible:ring-offset-2 dark:border-white/10"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image src={p.image} alt={p.title} fill sizes="(max-width:768px) 100vw, 400px" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                <span className="absolute left-4 top-4 rounded-full bg-charcoal/85 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white backdrop-blur">
                  {p.tag}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-bold text-charcoal transition-colors group-hover:text-violet">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal/60 line-clamp-3">{p.desc}</p>
                <span aria-hidden className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-violet transition-transform group-hover:translate-x-1">
                  View more →
                </span>
              </div>
            </Link>
          </Reveal>
        );
      })}
    </div>
  );
}
