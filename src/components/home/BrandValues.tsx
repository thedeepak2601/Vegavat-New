import Reveal from "@/components/Reveal";
import Icon from "@/components/Icon";
import { LogoMark } from "@/components/Logo";

const CATEGORIES = ["Software Development", "IT Solutions", "Digital Transformation"];

const PILLARS = [
  { icon: "rocket", title: "Innovate", desc: "We build smart, scalable solutions that move your business forward." },
  { icon: "web", title: "Develop", desc: "Clean code and strong architecture, engineered to last and to scale." },
  { icon: "crm", title: "Transform", desc: "Driving digital growth, efficiency and measurable business impact." },
  { icon: "users", title: "Empower", desc: "Empowering businesses and teams to thrive, today and tomorrow." },
];

const CONCEPT = [
  {
    label: "Letter V",
    meaning: "The Vegavat mark",
    symbol: <span className="text-2xl font-extrabold">V</span>,
  },
  {
    label: "Arrow",
    meaning: "Growth & progress",
    symbol: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 19 19 5" /><path d="M9 5h10v10" /></svg>
    ),
  },
  {
    label: "Orbit",
    meaning: "Technology & global",
    symbol: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(-30 12 12)" /><circle cx="12" cy="12" r="2.2" fill="currentColor" stroke="none" /></svg>
    ),
  },
  {
    label: "Star",
    meaning: "Vision & success",
    symbol: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.9 6.3 6.1.6-4.6 4 1.4 6L12 15.9 5.2 18.9l1.4-6L2 8.9l6.1-.6z" /></svg>
    ),
  },
];

export default function BrandValues() {
  return (
    <section className="section">
      <div className="container-x">
        {/* heading */}
        <Reveal className="text-center">
          <div className="flex items-center justify-center gap-3">
            <span className="hidden h-px w-12 bg-gradient-to-r from-transparent to-violet/60 sm:block" />
            <h2 className="text-2xl font-extrabold tracking-tight text-charcoal sm:text-3xl md:text-4xl">
              Transforming Ideas Into <span className="heading-gradient">Digital Reality</span>
            </h2>
            <span className="hidden h-px w-12 bg-gradient-to-l from-transparent to-violet/60 sm:block" />
          </div>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-[11px] font-bold uppercase tracking-widest text-charcoal/45">
            {CATEGORIES.map((c, i) => (
              <span key={c} className="flex items-center gap-3">
                {i > 0 && <span className="h-1 w-1 rounded-full bg-violet" />}
                {c}
              </span>
            ))}
          </div>
        </Reveal>

        {/* pillars */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map((p, i) => (
            <Reveal key={p.title} delay={(i % 4) * 0.08}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-charcoal/[0.07] bg-white p-7 text-center shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:border-violet/20 hover:shadow-soft">
                <span className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-gradient-to-r from-violet to-[#34E0F0] transition-transform duration-300 group-hover:scale-x-100" />
                <span className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br from-violet/15 to-[#34E0F0]/15 text-violet transition-all duration-300 group-hover:scale-110 group-hover:from-violet group-hover:to-violet group-hover:text-white group-hover:shadow-glow">
                  <Icon name={p.icon} className="h-8 w-8" />
                </span>
                <h3 className="mt-5 text-lg font-bold text-charcoal">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal/60">{p.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* logo concept */}
        <Reveal delay={0.1}>
          <div className="relative mt-8 overflow-hidden rounded-3xl border border-violet/15 bg-[#F8F5FF] px-5 py-6 shadow-soft sm:px-8 lg:px-10">
            <div className="pointer-events-none absolute inset-0 bg-grid-violet bg-[size:32px_32px] opacity-60" />
            <div className="pointer-events-none absolute -left-24 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-violet/15 blur-[90px]" />
            <div className="pointer-events-none absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-[#34E0F0]/12 to-transparent" />

            <div className="relative grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
              <div className="relative overflow-hidden rounded-2xl bg-charcoal px-6 py-8 text-white shadow-[0_24px_70px_-30px_rgba(18,18,18,0.7)]">
                <div className="pointer-events-none absolute inset-0 bg-grid-violet bg-[size:30px_30px] opacity-25" />
                <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-violet/30 blur-[70px]" />
                <div className="pointer-events-none absolute -bottom-20 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full bg-[#34E0F0]/20 blur-[80px]" />

                <p className="relative text-[11px] font-bold uppercase tracking-widest text-violet-200">
                  Logo Concept
                </p>

                <div className="relative mt-8 grid place-items-center">
                  <div className="absolute h-48 w-48 rounded-full border border-white/10" />
                  <div className="absolute h-36 w-36 rounded-full border border-violet/30" />
                  <div className="absolute h-56 w-56 rounded-full bg-violet/10 blur-3xl" />
                  <div className="relative grid h-44 w-44 place-items-center rounded-full border border-white/10 bg-white/[0.06] shadow-glow">
                    <LogoMark className="h-20 w-auto brightness-0 invert" />
                  </div>
                </div>

                <p className="relative mx-auto mt-8 max-w-sm text-center text-sm leading-relaxed text-white/65">
                  A brand mark built around motion, clarity and digital confidence.
                </p>
              </div>

              <div className="relative">
                <div className="hidden lg:absolute lg:left-7 lg:top-8 lg:block lg:h-[calc(100%-4rem)] lg:w-px lg:bg-gradient-to-b lg:from-violet/20 lg:via-[#34E0F0]/50 lg:to-violet/20" />
                <div className="space-y-3">
                  {CONCEPT.map((c, i) => (
                    <div
                      key={c.label}
                      className="group relative flex items-center gap-4 rounded-2xl border border-charcoal/[0.07] bg-white/80 p-4 shadow-card backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-violet/25 hover:bg-white hover:shadow-soft"
                    >
                      <span className="relative z-10 grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-violet to-violet-800 text-[#34E0F0] shadow-glow ring-4 ring-[#F8F5FF] transition-transform duration-300 group-hover:scale-105">
                        {c.symbol}
                      </span>
                      <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="text-[10px] font-extrabold uppercase tracking-widest text-violet/55">
                            0{i + 1}
                          </span>
                          <h3 className="text-base font-extrabold text-charcoal">{c.label}</h3>
                        </div>
                        <p className="mt-1 text-sm leading-relaxed text-charcoal/60">{c.meaning}</p>
                      </div>
                      <span className="ml-auto hidden h-8 w-8 shrink-0 place-items-center rounded-full bg-violet/5 text-violet transition-colors group-hover:bg-violet group-hover:text-white sm:grid">
                        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12h14M13 6l6 6-6 6" />
                        </svg>
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-5 rounded-2xl border border-violet/10 bg-white/60 px-5 py-4 text-sm font-medium leading-relaxed text-charcoal/65">
                  Together, these elements express growth, innovation and reliable digital delivery.
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
