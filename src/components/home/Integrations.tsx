import Link from "next/link";
import Reveal from "@/components/Reveal";
import BrandLogo from "@/components/BrandLogo";
import Icon from "@/components/Icon";
import InquiryModalButton from "@/components/InquiryModalButton";
import mark from "@/assets/images/Favicons.png";
import { INTEGRATIONS } from "@/lib/logos";

function ring(items: typeof INTEGRATIONS, radius: number, offset = 0) {
  return items.map((b, i) => {
    const angle = ((360 / items.length) * i + offset - 90) * (Math.PI / 180);
    return {
      ...b,
      x: 50 + radius * Math.cos(angle),
      y: 50 + radius * Math.sin(angle),
    };
  });
}

// Left-column selling points. Kept factual — how the connections work, not
// invented volume claims.
const POINTS = [
  { icon: "sync", t: "Two-way sync", d: "Data flows both directions, not a one-off import." },
  { icon: "shield", t: "Secure by default", d: "Scoped API access with credentials you control." },
  { icon: "devops", t: "No manual exports", d: "No CSV shuffling between systems." },
  { icon: "wrench", t: "Custom connectors", d: "If a standard one doesn't exist, we build it." },
];

export default function Integrations() {
  const inner = ring(INTEGRATIONS.slice(0, 5), 30);
  const outer = ring(INTEGRATIONS.slice(5), 47, 25);
  const nodes = [...inner, ...outer];

  return (
    <section className="section overflow-hidden bg-charcoal-50/50">
      {/* Copy on the left, the orbit on the right — the centred stack left the
          diagram floating with a lot of dead space beside it. */}
      <div className="container-x grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <Reveal>
            <span className="eyebrow">
              <Icon name="transfer" className="h-3.5 w-3.5" />
              <span className="font-extrabold">{INTEGRATIONS.length}+</span> Integrations
            </span>
            <h2 className="mt-4 text-3xl font-extrabold leading-[1.15] tracking-tight sm:text-4xl">
              Connect your <span className="heading-gradient">critical workflows</span>
            </h2>
            <p className="mt-4 max-w-lg leading-relaxed text-charcoal/60">
              Vegavat plugs into the tools you already run — payments, logistics, messaging,
              storefronts and more — so data flows seamlessly across your stack.
            </p>
          </Reveal>

          <div className="mt-8 grid gap-x-7 gap-y-5 sm:grid-cols-2">
            {POINTS.map((p, i) => (
              <Reveal key={p.t} delay={0.06 + i * 0.06}>
                <div className="group flex items-start gap-3.5">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-violet/15 to-[#34E0F0]/15 text-violet ring-1 ring-violet/15 transition-all duration-300 group-hover:from-violet group-hover:to-violet-700 group-hover:text-white group-hover:ring-violet/40">
                    <Icon name={p.icon} className="h-[18px] w-[18px]" />
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-base font-bold leading-snug text-charcoal">{p.t}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-charcoal/60">{p.d}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.3} className="mt-8 flex flex-col gap-3 border-t border-charcoal/[0.07] pt-7 sm:flex-row sm:items-center">
            <Link href="/services" className="btn-primary btn-glow">
              Explore Our Services →
            </Link>
            <InquiryModalButton label="Book Demo" className="btn-outline" />
          </Reveal>
        </div>

        <Reveal delay={0.1} className="relative mx-auto aspect-square w-full max-w-md">
          {/* decorative orbit rings */}
          <span className="absolute left-1/2 top-1/2 h-[60%] w-[60%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-charcoal/25" />
          <span className="absolute left-1/2 top-1/2 h-[94%] w-[94%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-charcoal/25" />

          {/* center node (static) */}
          <div className="absolute left-1/2 top-1/2 z-20 grid h-28 w-28 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-violet/15 bg-white shadow-glow">
            <span className="absolute inset-0 animate-pulse-glow rounded-full bg-violet/15 blur-xl" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={mark.src} alt="Vegavat" className="relative w-24 object-contain" />
          </div>

          {/* rotating orbit of logos */}
          <div className="absolute inset-0 animate-orbit">
            {nodes.map((n, i) => (
              <div
                key={`${n.slug}-${i}`}
                className="absolute -translate-x-1/2 -translate-y-1/2"
                style={{ left: `${n.x}%`, top: `${n.y}%` }}
              >
                <div className="animate-orbit-reverse">
                  <div className="grid h-12 w-12 place-items-center rounded-full border border-charcoal/[0.06] bg-white shadow-card transition-transform duration-300 hover:scale-110 hover:shadow-soft">
                    <BrandLogo slug={n.slug} name={n.name} src={n.src} className="h-6 w-6" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
