import Link from "next/link";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import AnimatedBackground from "@/components/effects/AnimatedBackground";
import { PROCESS } from "@/lib/process";

export default function ProcessSection() {
  return (
    <section className="section relative overflow-hidden bg-charcoal text-white">
      <AnimatedBackground variant="dark" />
      <div className="container-x relative">
        <SectionHeader
          light
          eyebrow="How We Work"
          title="Proven processes tailored to every project"
          desc="By selecting the optimal methodology for every project, we facilitate precise planning, steady progress and reliable delivery from inception to completion."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROCESS.map((s, i) => (
            <Reveal key={s.n} delay={(i % 3) * 0.1}>
              <div className="group h-full rounded-2xl border border-white/10 bg-white/[0.03] p-8 transition-colors hover:border-violet/40 hover:bg-white/[0.06]">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet/20 text-violet-200">
                    <span className="text-lg font-extrabold">{s.n}</span>
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-violet-200/80">{s.week}</span>
                </div>
                <h3 className="mt-5 text-xl font-bold">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/75">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link href="/process" className="btn-primary btn-glow">
            See our full process →
          </Link>
        </div>
      </div>
    </section>
  );
}
