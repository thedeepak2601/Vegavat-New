import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import Reveal from "@/components/Reveal";
import CTABanner from "@/components/CTABanner";
import AnimatedBackground from "@/components/effects/AnimatedBackground";
import { INDUSTRIES } from "@/lib/content";

export const metadata: Metadata = {
  title: "Industries We Serve",
  description:
    "Vegavat partners with businesses across logistics, education, healthcare, gaming, SaaS, e-commerce and more, delivering industry-tailored digital products.",
};

const APPROACH = [
  { n: "01", t: "Understand your domain", d: "We learn your sector's workflows, regulations and real pain points before proposing a single solution." },
  { n: "02", t: "Tailor the solution", d: "We configure and build around how you actually operate, not a generic, one-size-fits-all template." },
  { n: "03", t: "Scale with confidence", d: "We deploy, support and evolve the solution as your business and your market keep growing." },
];

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        breadcrumb="Home / Industries"
        eyebrow="Industries We Serve"
        title="Technology solutions tailored to your industry"
        desc="We partner with businesses across diverse industries, providing technology solutions customized to their specific operational and market demands, from startups to enterprises."
        cta={{ label: "Discuss your industry", href: "/contact" }}
        image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80"
      />

      {/* Industry grid */}
      <section className="section">
        <div className="container-x">
          <SectionHeader
            eyebrow="Industries"
            title="Solutions built for the way your sector works"
            desc="Each industry has its own rules, rhythms and challenges. We shape technology around yours."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {INDUSTRIES.map((ind, i) => (
              <Reveal key={ind.id} delay={(i % 3) * 0.07}>
                <Link
                  href={`/industries/${ind.id}`}
                  id={ind.id}
                  className="group flex h-full flex-col scroll-mt-28 overflow-hidden rounded-2xl border border-charcoal/[0.07] bg-white shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-soft"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={ind.image}
                      alt={ind.name}
                      fill
                      sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent" />
                    <h3 className="absolute bottom-3 left-4 right-4 text-lg font-bold text-white">{ind.name}</h3>
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <p className="flex-1 text-sm leading-relaxed text-charcoal/60">{ind.desc}</p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-violet transition-transform group-hover:translate-x-1">
                      Explore {ind.name} →
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Our approach, dark numbered band */}
      <section className="section relative overflow-hidden bg-charcoal text-white">
        <AnimatedBackground variant="dark" />
        <div className="container-x relative">
          <SectionHeader
            light
            eyebrow="Our Approach"
            title="How we tailor technology to every industry"
            desc="The same disciplined method, adapted to the realities of your sector, every time."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {APPROACH.map((a, i) => (
              <Reveal key={a.n} delay={i * 0.08}>
                <div className="group relative h-full rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition-colors hover:border-violet/40 hover:bg-white/[0.06]">
                  <span className="text-5xl font-extrabold leading-none text-violet-300/30">{a.n}</span>
                  <h3 className="mt-4 text-lg font-bold">{a.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">{a.d}</p>
                  {i < APPROACH.length - 1 && (
                    <span className="absolute -right-3 top-1/2 z-10 hidden -translate-y-1/2 text-violet-300 md:block">→</span>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Don't see your industry?"
        desc="We adapt quickly to new domains. Tell us about your business and we'll show you how we can help."
      />
    </>
  );
}
