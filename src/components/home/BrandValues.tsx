import Reveal from "@/components/Reveal";
import Icon from "@/components/Icon";

const CATEGORIES = ["Software Development", "IT Solutions", "Digital Transformation"];

const PILLARS = [
  { icon: "rocket", title: "Innovate", desc: "We build smart, scalable solutions that move your business forward." },
  { icon: "web", title: "Develop", desc: "Clean code and strong architecture, engineered to last and to scale." },
  { icon: "crm", title: "Transform", desc: "Driving digital growth, efficiency and measurable business impact." },
  { icon: "users", title: "Empower", desc: "Empowering businesses and teams to thrive, today and tomorrow." },
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
          <div className="mt-4 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xs font-bold uppercase tracking-widest text-charcoal/60">
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
      </div>
    </section>
  );
}
