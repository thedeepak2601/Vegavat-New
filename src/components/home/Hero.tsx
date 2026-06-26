import Link from "next/link";
import Reveal from "@/components/Reveal";
import AnimatedBackground from "@/components/effects/AnimatedBackground";
import HeroGlobeMount from "@/components/three/HeroGlobeMount";
import { SITE } from "@/lib/site";

const badges = ["iOS & Android", "Web Apps", "UI/UX", "AI / GenAI", "Cloud"];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-charcoal pt-[120px] text-white">
      <AnimatedBackground variant="dark" />

      <div className="container-x relative grid items-center gap-12 pb-24 pt-10 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <Reveal>
            <span className="eyebrow border-violet/40 bg-violet/15 text-violet-200">
              Top Web &amp; Mobile App Development Company
            </span>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-5 text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
              {SITE.tagline.replace(".", "")}{" "}
              <span className="heading-gradient">with {SITE.name}</span>
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">
              The future is here with Vegavat as your trusted development partner.
              Just as great food comes from skilled chefs, effective collaboration
              between us and our clients leads to extraordinary results. Let&apos;s
              work together to bring your vision to life.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="btn-primary btn-glow">Get Free Quote →</Link>
              <Link href="/services" className="btn glass text-white hover:bg-white/15">
                Explore Services
              </Link>
            </div>
          </Reveal>
          <Reveal delay={0.32}>
            <div className="mt-8 flex flex-wrap gap-2">
              {badges.map((b) => (
                <span key={b} className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-white/70">
                  {b}
                </span>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.2} className="relative">
          <div className="relative mx-auto aspect-square w-full max-w-lg">
            <div className="absolute inset-6 rounded-full bg-violet/25 blur-[90px]" />
            {/* Interactive 3D AI sphere, drag to rotate */}
            <div className="relative h-full w-full cursor-grab active:cursor-grabbing">
              <HeroGlobeMount />
            </div>
            <div className="absolute -bottom-2 -left-2 rounded-2xl glass px-5 py-4 sm:bottom-4 sm:left-0">
              <p className="text-2xl font-extrabold text-white">6+ yrs</p>
              <p className="text-xs text-white/70">building digital products</p>
            </div>
            <div className="absolute right-0 top-4 rounded-2xl glass px-4 py-3">
              <p className="text-lg font-extrabold text-[#34E0F0]">100+</p>
              <p className="text-[11px] text-white/70">projects shipped</p>
            </div>

            <Link href="/services" className="absolute left-0 top-4 rounded-2xl glass px-4 py-3 transition-transform hover:-translate-y-0.5">
              <p className="text-[11px] font-bold uppercase tracking-wider text-violet-200">Our Stack</p>
              <p className="mt-0.5 text-xs text-white/70">React · Flutter · AWS</p>
            </Link>
            <Link href="/services" className="absolute -bottom-2 right-0 rounded-2xl glass px-4 py-3 transition-transform hover:-translate-y-0.5 sm:bottom-4">
              <p className="text-[11px] font-bold uppercase tracking-wider text-[#34E0F0]">Services</p>
              <p className="mt-0.5 text-xs text-white/70">Web · Mobile · AI</p>
            </Link>
            <Link href="/products#saas" className="absolute left-0 top-1/2 -translate-y-1/2 rounded-2xl glass px-4 py-3 transition-transform hover:-translate-y-[calc(50%+2px)]">
              <p className="text-[11px] font-bold uppercase tracking-wider text-violet-200">SaaS Products</p>
              <p className="mt-0.5 text-xs text-white/70">Ready to deploy</p>
            </Link>
          </div>
        </Reveal>
      </div>

      {/* wave divider into white body */}
      <div className="relative">
        <svg viewBox="0 0 1440 80" className="block w-full" preserveAspectRatio="none">
          <path d="M0 80 L1440 80 L1440 0 C1080 60 360 60 0 0 Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
