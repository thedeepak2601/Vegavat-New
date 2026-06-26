import Reveal from "./Reveal";
import AnimatedCounter from "./effects/AnimatedCounter";
import { STATS } from "@/lib/site";

export default function Stats({
  items = STATS,
  light = false,
}: {
  items?: { value: string; label: string }[];
  light?: boolean;
}) {
  return (
    <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-charcoal/[0.07] bg-charcoal/[0.06] lg:grid-cols-4">
      {items.map((s, i) => (
        <Reveal
          key={s.label}
          delay={i * 0.08}
          className={`p-7 text-center ${light ? "bg-charcoal-900" : "bg-white"}`}
        >
          <AnimatedCounter
            value={s.value}
            className={`block text-3xl font-extrabold sm:text-4xl ${light ? "text-violet-200" : "text-violet"}`}
          />
          <div className={`mt-1 text-sm ${light ? "text-white/60" : "text-charcoal/60"}`}>
            {s.label}
          </div>
        </Reveal>
      ))}
    </div>
  );
}
