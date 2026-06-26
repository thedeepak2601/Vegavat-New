import Image from "next/image";
import Reveal from "@/components/Reveal";

const offerings = [
  "Mobile App Development",
  "Web Development",
  "Graphic Design",
  "UI/UX Design",
  "Dedicated Developer & Designer Hiring",
  "AI Software Development",
];

export default function WhoWeAre() {
  return (
    <section id="about" className="section">
      <div className="container-x grid items-center gap-14 lg:grid-cols-2">
        <Reveal className="relative">
          {/* soft glow behind the collage */}
          <div className="pointer-events-none absolute -inset-4 -z-10 rounded-[2.5rem] bg-violet/10 blur-3xl" />

          <div className="grid grid-cols-2 items-stretch gap-4">
            {/* left column */}
            <div className="flex flex-col gap-4">
              <div className="group relative aspect-[3/4] overflow-hidden rounded-2xl shadow-card ring-1 ring-charcoal/[0.05]">
                <Image src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80" alt="Vegavat team" fill sizes="300px" className="object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="flex flex-1 flex-col items-center justify-center rounded-2xl border border-charcoal/[0.07] bg-white p-5 text-center shadow-card">
                <p className="heading-gradient text-4xl font-extrabold leading-none">100+</p>
                <p className="mt-2 text-xs font-medium text-charcoal/55">Projects delivered</p>
              </div>
            </div>

            {/* right column, offset for a staggered collage on larger screens */}
            <div className="flex flex-col gap-4 sm:pt-8">
              <div className="group relative aspect-square overflow-hidden rounded-2xl shadow-card ring-1 ring-charcoal/[0.05]">
                <Image src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=600&q=80" alt="Design discussion" fill sizes="280px" className="object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="relative flex flex-1 flex-col justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-violet to-violet-700 p-5 text-white shadow-soft">
                <span className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-[#34E0F0]/20 blur-2xl" />
                <p className="relative text-3xl font-extrabold leading-none">Since 2024</p>
                <p className="relative mt-2 text-sm leading-relaxed text-white/85">Founded by Deepak Kumar, a trusted technology partner, not just a vendor.</p>
              </div>
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <span className="eyebrow">Who we are?</span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
              A software studio that turns ideas into impactful digital products
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 text-base leading-relaxed text-charcoal/65">
              Founded in 2024 by Deepak Kumar, Vegavat is a software development company
              that empowers startups and businesses to create impactful digital products. Our core
              services include mobile app development, web development, UI/UX design,
              graphic design and dedicated developer hiring to support your team&apos;s
              growth at every stage.
            </p>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-4 text-base leading-relaxed text-charcoal/65">
              We bring hands-on experience from diverse industries, prioritising a deep
              understanding of your business needs to deliver practical, structured
              solutions designed for lasting performance. As your true technology partner,
              our team aligns strategy, design and development to help you advance with confidence.
            </p>
          </Reveal>
          <Reveal delay={0.22}>
            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {offerings.map((o) => (
                <li key={o} className="flex items-center gap-2.5 text-sm font-medium text-charcoal/80">
                  <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-violet/10 text-violet">
                    <svg className="h-3 w-3" viewBox="0 0 12 12" fill="none"><path d="M2.5 6.5 5 9l4.5-5.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </span>
                  {o}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
