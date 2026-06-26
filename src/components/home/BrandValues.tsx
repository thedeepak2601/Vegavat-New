import Reveal from "@/components/Reveal";
import Icon from "@/components/Icon";

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
          <div className="relative mt-8 overflow-hidden rounded-3xl bg-charcoal px-6 py-10 text-white sm:px-10">
            <div className="pointer-events-none absolute inset-0 bg-grid-violet bg-[size:34px_34px] opacity-30" />
            <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-violet/25 blur-[100px]" />

            <p className="relative text-center text-[11px] font-bold uppercase tracking-widest text-violet-200">Logo Concept</p>

            <div className="relative mx-auto mt-8 grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
              {CONCEPT.map((c) => (
                <div
                  key={c.label}
                  className="group flex flex-col items-center rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[#34E0F0]/40 hover:bg-white/[0.06]"
                >
                  <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-violet/30 to-[#34E0F0]/15 text-[#34E0F0] ring-1 ring-white/10 transition-transform duration-300 group-hover:scale-110">
                    {c.symbol}
                  </span>
                  <span className="mt-4 text-sm font-bold">{c.label}</span>
                  <span className="mt-1 text-[11px] leading-snug text-white/50">{c.meaning}</span>
                </div>
              ))}
            </div>

            <p className="relative mx-auto mt-8 max-w-xl text-center text-sm leading-relaxed text-white/60">
              A modern, dynamic combination that represents growth, innovation and digital excellence.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
