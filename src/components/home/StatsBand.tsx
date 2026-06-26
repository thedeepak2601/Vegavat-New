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
        <Reveal className="relative mt-12 overflow-hidden rounded-3xl bg-gradient-to-br from-violet to-violet-700 px-6 py-12 shadow-soft sm:px-10">
          {/* decorative */}
          <div className="pointer-events-none absolute inset-0 bg-grid-violet bg-[size:42px_42px] opacity-20" />
          <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 animate-orb-2 rounded-full bg-[#34E0F0]/20 blur-[90px]" />
          <div className="pointer-events-none absolute -bottom-20 -left-10 h-56 w-56 animate-orb-1 rounded-full bg-white/10 blur-[90px]" />

          <div className="relative grid grid-cols-2 gap-y-10 lg:grid-cols-4 lg:divide-x lg:divide-white/15">
            {STATS.map((s, i) => (
              <Reveal
                key={s.label}
                delay={i * 0.08}
                className="flex flex-col items-center px-4 text-center"
              >
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-white/15 text-white ring-1 ring-white/20 backdrop-blur">
                  <Icon name={s.icon} className="h-6 w-6" />
                </span>
                <AnimatedCounter
                  value={s.value}
                  className="mt-4 block text-4xl font-extrabold tracking-tight text-white sm:text-5xl"
                />
                <span className="mt-1 text-sm font-medium text-white/75">{s.label}</span>
              </Reveal>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
