import Reveal from "@/components/Reveal";
import Icon from "@/components/Icon";
import { LogoMark } from "@/components/Logo";
import {
  Rocket,
  PlanetArc,
  Constellation,
  ChartIcon,
  BulbIcon,
  ShieldCheckIcon,
  GlobeIcon,
  SparkleIcon,
} from "@/components/home/LogoConceptArt";

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
    desc: "Our identity begins with a strong foundation.",
    tone: "violet" as const,
    symbol: <span className="text-xl font-extrabold">V</span>,
  },
  {
    label: "Arrow",
    desc: "Moving forward with purpose and progress.",
    tone: "violet" as const,
    symbol: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 19 19 5" /><path d="M9 5h10v10" /></svg>
    ),
  },
  {
    label: "Orbit",
    desc: "Global thinking, limitless impact.",
    tone: "cyan" as const,
    symbol: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(-30 12 12)" /><circle cx="12" cy="12" r="2.2" fill="currentColor" stroke="none" /></svg>
    ),
  },
  {
    label: "Star",
    desc: "Guided by vision, driven by success.",
    tone: "cyan" as const,
    symbol: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.9 6.3 6.1.6-4.6 4 1.4 6L12 15.9 5.2 18.9l1.4-6L2 8.9l6.1-.6z" /></svg>
    ),
  },
];

// Bottom strip — what the mark stands for in practice.
const MARK_VALUES = [
  { Icon: ChartIcon, title: "Growth", desc: "Scaling new heights.", tone: "violet" as const },
  { Icon: BulbIcon, title: "Innovation", desc: "Creative solutions for tomorrow.", tone: "violet" as const },
  { Icon: ShieldCheckIcon, title: "Reliability", desc: "Trusted by clients, delivered with pride.", tone: "cyan" as const },
  { Icon: GlobeIcon, title: "Global Reach", desc: "Connecting ideas across the world.", tone: "cyan" as const },
];

// Scattered starfield positions — fixed so the layout is deterministic.
const STARS = [
  [6, 18], [14, 62], [23, 8], [31, 78], [9, 40], [44, 14], [57, 88],
  [68, 26], [77, 70], [86, 12], [93, 48], [72, 6], [38, 92], [52, 34],
];

/**
 * One element of the mark. The left column mirrors itself on large screens so
 * both sides read inward, with a connector and node bridging to the centre.
 */
function ConceptNode({
  item,
  index,
  side,
}: {
  item: (typeof CONCEPT)[number];
  index: number;
  side: "left" | "right";
}) {
  const isLeft = side === "left";
  const cyan = item.tone === "cyan";

  return (
    <div className={`flex items-center ${isLeft ? "lg:flex-row" : "lg:flex-row-reverse"}`}>
      <div
        className={`group relative flex-1 overflow-hidden rounded-2xl border p-3.5 backdrop-blur transition-all duration-300 sm:p-4 ${
          cyan
            ? "border-[#34E0F0]/20 bg-[#34E0F0]/[0.05] hover:border-[#34E0F0]/45 hover:bg-[#34E0F0]/[0.09]"
            : "border-violet-300/25 bg-violet/[0.10] hover:border-violet-300/50 hover:bg-violet/[0.16]"
        }`}
      >
        <div className={`flex items-center gap-4 ${isLeft ? "lg:flex-row-reverse lg:text-right" : ""}`}>
          <span
            className={`grid h-12 w-12 shrink-0 place-items-center rounded-full border transition-transform duration-300 group-hover:scale-110 ${
              cyan
                ? "border-[#34E0F0]/40 bg-[#34E0F0]/10 text-[#34E0F0] shadow-[0_0_26px_rgba(52,224,240,0.35)]"
                : "border-violet-300/40 bg-violet/20 text-violet-100 shadow-[0_0_26px_rgba(138,69,255,0.4)]"
            }`}
          >
            {item.symbol}
          </span>

          <div className="min-w-0">
            <span
              className={`text-lg font-extrabold ${cyan ? "text-[#34E0F0]" : "text-violet-300"}`}
            >
              0{index + 1}
            </span>
            <h4 className="mt-0.5 text-base font-bold text-white">{item.label}</h4>
            <span
              className={`mt-1.5 block h-px w-8 ${isLeft ? "lg:ml-auto" : ""} ${
                cyan ? "bg-[#34E0F0]/50" : "bg-violet-300/50"
              }`}
            />
            <p className="mt-2 text-sm leading-relaxed text-white/60">{item.desc}</p>
          </div>
        </div>
      </div>

      {/* connector into the mark — decorative, large screens only */}
      <span aria-hidden className="hidden shrink-0 items-center lg:flex">
        <span
          className={`h-2 w-2 rounded-full ${cyan ? "bg-[#34E0F0]" : "bg-violet-300"} ${
            isLeft ? "order-1" : "order-2"
          }`}
        />
        <span
          className={`h-px w-10 ${isLeft ? "order-2" : "order-1"} ${
            cyan
              ? "bg-gradient-to-l from-[#34E0F0]/70 to-transparent"
              : "bg-gradient-to-r from-violet-300/70 to-transparent"
          }`}
        />
      </span>
    </div>
  );
}

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
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
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

        {/* Logo concept — a brand-anatomy diagram set in space: the four
            elements connect into the mark, with what they stand for beneath. */}
        <Reveal delay={0.1}>
          <div className="relative mt-8 overflow-hidden rounded-[32px] bg-[#080510] px-5 py-7 shadow-soft sm:px-8 lg:py-9">
            {/* deep-space atmosphere */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_40%,rgba(98,0,234,0.30),transparent_70%),radial-gradient(40%_40%_at_88%_88%,rgba(52,224,240,0.18),transparent_70%),radial-gradient(35%_35%_at_6%_92%,rgba(138,69,255,0.20),transparent_70%)]" />
            <span className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-violet via-violet-400 to-[#34E0F0]" />
            <PlanetArc className="pointer-events-none absolute -bottom-40 -left-40 h-[420px] w-[420px]" />
            <PlanetArc tone="cyan" className="pointer-events-none absolute -bottom-48 -right-44 h-[460px] w-[460px]" />
            <Constellation className="pointer-events-none absolute bottom-6 left-6 hidden w-52 opacity-70 lg:block" />
            <Rocket className="pointer-events-none absolute -right-6 -top-8 hidden h-36 w-36 animate-float lg:block xl:h-44 xl:w-44" />
            {STARS.map(([left, top], i) => (
              <span
                key={i}
                aria-hidden
                className="pointer-events-none absolute h-[3px] w-[3px] animate-pulse-glow rounded-full bg-white/70"
                style={{ left: `${left}%`, top: `${top}%`, animationDelay: `${i * 0.4}s` }}
              />
            ))}

            <div className="relative text-center">
              <span className="eyebrow border-violet/40 bg-violet/15 text-violet-200">
                <SparkleIcon className="h-3.5 w-3.5" />
                Logo Concept
              </span>
              <h3 className="mt-3 text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
                Four ideas,{" "}
                <span className="bg-gradient-to-r from-violet-300 to-[#34E0F0] bg-clip-text text-transparent">
                  one mark
                </span>
              </h3>
              <p className="mx-auto mt-2 max-w-xl text-sm text-white/60">
                One symbol that reflects{" "}
                <span className="font-semibold text-violet-300">growth</span>,{" "}
                <span className="font-semibold text-[#34E0F0]">innovation</span> and limitless
                possibilities.
              </p>
            </div>

            <div className="relative mt-6 grid items-center gap-4 lg:grid-cols-[1fr_auto_1fr] lg:gap-2">
              <div className="space-y-3">
                {CONCEPT.slice(0, 2).map((c, i) => (
                  <ConceptNode key={c.label} item={c} index={i} side="left" />
                ))}
              </div>

              {/* the mark: a lit sphere with a ring, on a pedestal */}
              <div className="relative mx-auto flex shrink-0 flex-col items-center">
                <div className="relative grid h-[184px] w-[184px] place-items-center">
                  {/* halo */}
                  <span className="absolute h-40 w-40 rounded-full bg-violet/40 blur-[55px]" />

                  {/* sphere */}
                  <span className="relative grid h-36 w-36 place-items-center rounded-full border border-white/20 bg-[radial-gradient(circle_at_32%_26%,rgba(255,255,255,0.22),rgba(138,69,255,0.28)_42%,rgba(12,8,28,0.95)_78%)] shadow-[0_0_90px_-12px_rgba(138,69,255,0.95),inset_0_2px_30px_rgba(255,255,255,0.12)]">
                    <LogoMark className="relative z-10 h-14 w-auto brightness-0 invert" />
                    {/* glossy highlight */}
                    <span className="pointer-events-none absolute left-5 top-4 h-10 w-16 rounded-[100%] bg-white/15 blur-xl" />
                  </span>

                  {/* orbital ring, tilted around the sphere */}
                  <span className="pointer-events-none absolute inset-0 grid place-items-center">
                    <span className="block h-[180px] w-[180px] rotate-[-22deg] animate-orbit rounded-[100%] border-2 border-[#34E0F0]/45 [transform-style:preserve-3d] [border-bottom-color:transparent]" style={{ transform: "rotateX(72deg) rotate(-18deg)" }} />
                  </span>
                  <span className="pointer-events-none absolute inset-0 grid place-items-center">
                    <span className="block h-[156px] w-[156px] rounded-[100%] border border-violet-300/35" style={{ transform: "rotateX(72deg) rotate(-18deg)" }} />
                  </span>
                </div>

                {/* pedestal */}
                <div className="relative -mt-4 flex flex-col items-center">
                  <span className="h-5 w-36 rounded-[100%] bg-gradient-to-r from-violet/70 via-[#34E0F0]/70 to-violet/70 blur-lg" />
                  <span className="-mt-4 h-4 w-28 rounded-[100%] border border-white/20 bg-gradient-to-b from-violet-300/40 to-violet-900/60 backdrop-blur" />
                  <span className="mt-1 h-3 w-40 rounded-[100%] border border-[#34E0F0]/25" />
                  <span className="-mt-1.5 h-3 w-48 rounded-[100%] border border-violet-300/20" />
                </div>
              </div>

              <div className="space-y-3">
                {CONCEPT.slice(2).map((c, i) => (
                  <ConceptNode key={c.label} item={c} index={i + 2} side="right" />
                ))}
              </div>
            </div>

            {/* what the mark stands for */}
            <div className="relative mt-6 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur">
              <div className="grid divide-y divide-white/10 sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x">
                {MARK_VALUES.map((v) => (
                  <div key={v.title} className="group flex items-center gap-3 p-3.5">
                    <span
                      className={`grid h-10 w-10 shrink-0 place-items-center rounded-full border transition-transform duration-300 group-hover:scale-110 ${
                        v.tone === "cyan"
                          ? "border-[#34E0F0]/40 bg-[#34E0F0]/10 text-[#34E0F0] shadow-[0_0_22px_rgba(52,224,240,0.3)]"
                          : "border-violet-300/40 bg-violet/20 text-violet-100 shadow-[0_0_22px_rgba(138,69,255,0.35)]"
                      }`}
                    >
                      <v.Icon className="h-5 w-5" />
                    </span>
                    <div className="min-w-0">
                      <p className="text-sm font-bold text-white">{v.title}</p>
                      <p className="mt-0.5 text-xs leading-relaxed text-white/55">{v.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </Reveal>
      </div>
    </section>
  );
}
