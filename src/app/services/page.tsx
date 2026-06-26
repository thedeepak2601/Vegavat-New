import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import ServiceCard from "@/components/ServiceCard";
import Reveal from "@/components/Reveal";
import Icon from "@/components/Icon";
import Stats from "@/components/Stats";
import CTABanner from "@/components/CTABanner";
import { SERVICES } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Vegavat's core services, mobile app development, web development, UI/UX & graphic design, AI software, QA, SEO and dedicated developer hiring.",
};

const DIFFERENTIATORS = [
  { icon: "rocket", title: "Fast, focused delivery", desc: "Agile sprints with demo builds, so you see real progress every week, not just at the end." },
  { icon: "shield", title: "Secure by default", desc: "Security, testing and monitoring are baked into every stage of delivery, never bolted on later." },
  { icon: "users", title: "Senior team only", desc: "Experienced specialists own your project end to end, from discovery through to handover." },
  { icon: "sync", title: "Built to scale", desc: "Clean, modern architecture that grows with your business, with no expensive rebuilds down the line." },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        breadcrumb="Home / Services"
        eyebrow="What We Do"
        title="Core services that turn ideas into products"
        desc="Our core services enable businesses to convert concepts into high-performing digital products. Since 2024 we've prioritized clarity, reliability and results that drive real impact."
        cta={{ label: "Get Free Quote", href: "/contact" }}
        image="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=900&q=80"
      />

      {/* What sets us apart */}
      <section className="section">
        <div className="container-x">
          <SectionHeader
            eyebrow="Why Vegavat"
            title="More than a vendor, a delivery partner"
            desc="Whatever the service, the way we work stays the same, and that's what consistently sets the results apart."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {DIFFERENTIATORS.map((d, i) => (
              <Reveal key={d.title} delay={(i % 4) * 0.07}>
                <div className="card-hover h-full">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-violet/10 text-violet">
                    <Icon name={d.icon} className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 text-base font-bold text-charcoal">{d.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-charcoal/60">{d.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* All services */}
      <section className="section bg-charcoal-50/60">
        <div className="container-x">
          <SectionHeader
            eyebrow="All Services"
            title="Everything you need to build and scale"
            desc="From first concept to launch and beyond, explore the full range of services we deliver for teams worldwide."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 3) * 0.07}>
                <ServiceCard service={s} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* By the numbers */}
      <section className="section">
        <div className="container-x">
          <SectionHeader
            eyebrow="By The Numbers"
            title="A track record you can trust"
            desc="Real projects, real clients and real results built over years of development experience."
          />
          <div className="mt-12">
            <Stats />
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
