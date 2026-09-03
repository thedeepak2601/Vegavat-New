import Reveal from "@/components/Reveal";
import AnimatedCounter from "@/components/effects/AnimatedCounter";
import { STATS } from "@/lib/site";

/**
 * The single stat strip used everywhere counts appear — home, services,
 * products, industries and the financial pages — so they can't drift apart.
 *
 * The border is a "beam": a conic gradient that is transparent for most of its
 * sweep with one bright arc, spun behind an inset panel. Only the border edge
 * shows, so the highlight appears to travel around the full perimeter. Done
 * this way rather than with an animated @property angle, which silently does
 * nothing in browsers that don't support it.
 */
export default function StatStrip({
  items = STATS,
  className = "",
}: {
  items?: { value: string; label: string }[];
  className?: string;
}) {
  return (
    <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-r from-violet/15 via-[#34E0F0]/30 to-violet/15 p-[1.5px] ${className}`}>
      <span
        aria-hidden
        className="absolute left-1/2 top-1/2 h-[240%] w-[240%] -translate-x-1/2 -translate-y-1/2"
        style={{
          background:
            "conic-gradient(from 0deg, transparent 0deg, transparent 285deg, rgba(98,0,234,0.15) 300deg, #6200EA 340deg, #34E0F0 358deg, transparent 360deg)",
          animation: "spin 5s linear infinite",
        }}
      />

      <div className="relative overflow-hidden rounded-2xl bg-white shadow-card dark:bg-[#100e19]">
        {/* faint grid so the strip isn't a flat slab */}
        <div className="pointer-events-none absolute inset-0 bg-grid-violet bg-[size:34px_34px] opacity-50" />
        <div className="pointer-events-none absolute left-1/3 top-0 h-40 w-40 rounded-full bg-violet/10 blur-[80px]" />

        <div
          className={`relative grid divide-x divide-y divide-charcoal/[0.07] sm:divide-y-0 ${
            items.length >= 4
              ? "grid-cols-2 lg:grid-cols-4"
              : items.length === 3
                ? "grid-cols-1 sm:grid-cols-3"
                : "grid-cols-2"
          }`}
        >
          {items.map((s, i) => (
            <Reveal
              key={s.label}
              delay={i * 0.06}
              className="group flex flex-col items-center px-4 py-7 text-center"
            >
              <AnimatedCounter
                value={s.value}
                className="block bg-gradient-to-r from-violet via-violet-400 to-[#34E0F0] bg-clip-text text-3xl font-extrabold tracking-tight text-transparent sm:text-4xl"
              />

              {/* small swoosh under each number */}
              <span
                aria-hidden
                className="mt-1.5 block h-[3px] w-9 rounded-full bg-gradient-to-r from-violet to-[#34E0F0] transition-all duration-300 group-hover:w-14"
              />

              <span className="mt-2.5 text-sm font-semibold text-charcoal/60">{s.label}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
