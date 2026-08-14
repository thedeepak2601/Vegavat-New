import Reveal from "@/components/Reveal";
import Icon from "@/components/Icon";
import SectionHeader from "@/components/SectionHeader";
import AnimatedCounter from "@/components/effects/AnimatedCounter";
import { STATS } from "@/lib/site";

export default function StatsBand() {
  return (
    <section className="section">
      <div className="container-x">
        <SectionHeader
          eyebrow="By The Numbers"
          title="Trusted results, proven at scale"
          desc="A track record built over years of delivering real products for real businesses worldwide."
        />

        <Reveal className="group/band relative mt-12 overflow-hidden rounded-[32px] shadow-soft">
          {/* The gradient itself drifts, so the band is alive before anything
              is hovered — the counters only animate once, on first scroll in. */}
          <div className="absolute inset-0 animate-gradient-shift bg-[linear-gradient(120deg,#6200EA,#8A45FF,#43009E,#6200EA,#34E0F0)] bg-[length:300%_300%]" />

          <div className="pointer-events-none absolute inset-0 bg-grid-violet bg-[size:42px_42px] opacity-20" />
          <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 animate-orb-2 rounded-full bg-[#34E0F0]/25 blur-[90px]" />
          <div className="pointer-events-none absolute -bottom-20 -left-10 h-56 w-56 animate-orb-1 rounded-full bg-white/10 blur-[90px]" />

          {/* light sweeps across on hover */}
          <span className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-1000 ease-out group-hover/band:translate-x-[400%]" />

          <div className="relative grid grid-cols-2 gap-y-10 px-6 py-12 sm:grid-cols-3 sm:px-10 lg:grid-cols-5 lg:divide-x lg:divide-white/15">
            {STATS.map((s, i) => (
              <Reveal
                key={s.label}
                delay={i * 0.08}
                className="group/stat flex flex-col items-center px-3 text-center"
              >
                <span className="relative grid h-14 w-14 place-items-center">
                  {/* halo pulses behind the tile */}
                  <span className="absolute inset-0 rounded-2xl bg-white/20 opacity-0 blur-md transition-opacity duration-300 group-hover/stat:opacity-100" />
                  <span className="relative grid h-12 w-12 place-items-center rounded-2xl bg-white/15 text-white ring-1 ring-white/25 backdrop-blur transition-all duration-300 group-hover/stat:-translate-y-1 group-hover/stat:scale-110 group-hover/stat:bg-white group-hover/stat:text-violet">
                    <Icon name={s.icon} className="h-6 w-6" />
                  </span>
                </span>

                <AnimatedCounter
                  value={s.value}
                  className="mt-4 block text-4xl font-extrabold tracking-tight text-white transition-transform duration-300 group-hover/stat:scale-105 sm:text-5xl"
                />

                <span className="mt-1 text-sm font-medium text-white/75">{s.label}</span>

                <span className="mt-3 block h-0.5 w-0 rounded-full bg-white/70 transition-all duration-300 group-hover/stat:w-10" />
              </Reveal>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
