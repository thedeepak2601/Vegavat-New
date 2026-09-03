import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import { INDUSTRIES } from "@/lib/content";

export default function IndustriesStrip() {
  return (
    <section className="section">
      <div className="container-x">
        <SectionHeader
          eyebrow="Industries We Serve"
          title="Technology solutions tailored to your market"
          desc="Our experience spans startups to enterprises, empowering teams to create industry-tailored digital products that boost growth and efficiency."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {INDUSTRIES.map((ind, i) => (
            <Reveal key={ind.id} delay={(i % 3) * 0.06}>
              <Link
                href={`/industries/${ind.id}`}
                className="group relative block h-56 overflow-hidden rounded-2xl shadow-card"
              >
                <Image
                  src={ind.image}
                  alt={ind.name}
                  fill
                  sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/55 to-charcoal/10 transition-colors duration-300 group-hover:from-violet-900/90 group-hover:via-violet-900/45" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <h3 className="text-lg font-bold text-white">{ind.name}</h3>
                  <p className="mt-1 max-h-0 overflow-hidden text-sm leading-snug text-white/75 opacity-0 transition-all duration-300 group-hover:max-h-24 group-hover:opacity-100">
                    {ind.desc}
                  </p>
                  <span className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-violet-200 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    Learn more →
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
