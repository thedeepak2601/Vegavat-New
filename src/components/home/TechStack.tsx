import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import { TECH_STACK } from "@/lib/content";

export default function TechStack() {
  return (
    <section className="section bg-charcoal-50/60">
      <div className="container-x">
        <SectionHeader
          eyebrow="Technologies We Work With"
          title="Modern tools for efficient, secure, lasting products"
          desc="From web and mobile apps to cloud systems, our team handles diverse tech stacks with consistency and accuracy, prioritizing clean architecture and maintainable code."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {TECH_STACK.map((g, i) => (
            <Reveal key={g.group} delay={i * 0.08}>
              <div className="card h-full">
                <h3 className="text-sm font-bold uppercase tracking-wider text-violet">{g.group}</h3>
                <ul className="mt-4 space-y-2.5">
                  {g.items.map((t) => (
                    <li key={t} className="flex items-center gap-2 text-sm text-charcoal/75">
                      <span className="h-1.5 w-1.5 rounded-full bg-violet/60" />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
