import Image from "next/image";
import Reveal from "@/components/Reveal";

const points = [
  "Workshop-led discovery, not assumptions",
  "Senior consultants on every project",
  "Documentation in plain English",
  "Training your team can actually use",
];

export default function MoreThanImplementers() {
  return (
    <section className="section">
      <div className="container-x grid items-center gap-12 lg:grid-cols-2">
        <Reveal className="relative">
          <div className="absolute -inset-3 -z-10 rounded-3xl bg-gradient-to-br from-violet/15 to-[#34E0F0]/10 blur-2xl" />
          <div className="relative aspect-[5/4] overflow-hidden rounded-3xl shadow-card">
            <Image
              src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1000&q=80"
              alt="Vegavat consultants in a discovery workshop"
              fill
              sizes="(max-width:1024px) 90vw, 560px"
              className="object-cover"
            />
          </div>
        </Reveal>

        <div>
          <Reveal>
            <span className="eyebrow">A team that listens</span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
              More than just <span className="heading-gradient">implementers</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 text-base leading-relaxed text-charcoal/65">
              We sit with your team and understand how work actually flows, on your shop
              floor, in your warehouse, or in your accounts office, and then design the
              solution around it. No jargon. No vanity dashboards. Just clean processes that scale.
            </p>
          </Reveal>
          <Reveal delay={0.16}>
            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {points.map((p) => (
                <li key={p} className="flex items-start gap-2.5 text-sm font-medium text-charcoal/80">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-violet/10 text-violet">
                    <svg className="h-3 w-3" viewBox="0 0 12 12" fill="none"><path d="M2.5 6.5 5 9l4.5-5.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </span>
                  {p}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.22}>
            <div className="mt-7 flex items-center gap-4 rounded-2xl border border-charcoal/[0.07] bg-charcoal-50/60 p-3">
              <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-xl">
                <Image src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=200&q=80" alt="Industry experience" fill sizes="56px" className="object-cover" />
              </div>
              <div>
                <p className="text-sm font-bold text-charcoal">Hands-on industry experience</p>
                <p className="text-sm text-charcoal/55">Manufacturing · Trading · Services · Healthcare</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
