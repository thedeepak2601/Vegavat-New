import Link from "next/link";
import Reveal from "./Reveal";
import AnimatedBackground from "./effects/AnimatedBackground";

export default function CTABanner({
  eyebrow = "Get Started",
  title = "Ready to build your next product?",
  desc = "Share your requirements and get a free project estimate within 24 hours. NDA available before discussion.",
  primary = { label: "Get Free Quote", href: "/contact" },
  secondary = { label: "Schedule a Call", href: "/contact" },
}: {
  eyebrow?: string;
  title?: string;
  desc?: string;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
}) {
  return (
    <section className="section">
      <div className="container-x">
        <Reveal className="relative overflow-hidden rounded-3xl bg-charcoal px-6 py-16 text-center sm:px-12">
          <AnimatedBackground variant="dark" />
          <span className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-violet via-violet-400 to-[#34E0F0]" />
          <div className="relative">
            <span className="eyebrow border-violet/40 bg-violet/15 text-violet-200">{eyebrow}</span>
            <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-extrabold text-white sm:text-4xl">
              {title}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-white/70">{desc}</p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link href={primary.href} className="btn-primary btn-glow">{primary.label} →</Link>
              <Link href={secondary.href} className="btn border border-white/25 text-white transition-colors hover:bg-white/10">
                {secondary.label}
              </Link>
            </div>
            <ul className="mx-auto mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-medium text-white/55">
              {["Reply within 24 hours", "Free, no-obligation estimate", "NDA available on request"].map((f) => (
                <li key={f} className="inline-flex items-center gap-1.5">
                  <svg className="h-3.5 w-3.5 text-violet-300" viewBox="0 0 12 12" fill="none"><path d="M2.5 6.5 5 9l4.5-5.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
