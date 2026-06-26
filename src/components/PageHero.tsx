import Link from "next/link";
import Image from "next/image";
import Reveal from "./Reveal";
import AnimatedBackground from "./effects/AnimatedBackground";

export default function PageHero({
  eyebrow,
  title,
  desc,
  breadcrumb,
  cta,
  image,
}: {
  eyebrow?: string;
  title: string;
  desc?: string;
  breadcrumb?: string;
  cta?: { label: string; href: string };
  image?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-charcoal pt-[128px] pb-20 text-white">
      <AnimatedBackground variant="dark" />
      <div className="container-x relative">
        <div className={image ? "grid items-center gap-12 lg:grid-cols-2" : ""}>
          <Reveal className="max-w-3xl">
            {breadcrumb && (
              <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-violet-200">
                {breadcrumb}
              </p>
            )}
            {eyebrow && <span className="eyebrow border-violet/40 bg-violet/15 text-violet-200">{eyebrow}</span>}
            <h1 className="mt-4 text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl">
              {title}
            </h1>
            {desc && <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/70">{desc}</p>}
            {cta && (
              <Link href={cta.href} className="btn-primary mt-8">
                {cta.label} →
              </Link>
            )}
          </Reveal>

          {image && (
            <Reveal x={50} y={0} className="relative hidden lg:block">
              {/* glow behind the image */}
              <div className="pointer-events-none absolute -inset-6 rounded-[2rem] bg-violet/20 blur-[80px]" />
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/10 shadow-2xl ring-1 ring-white/5">
                <Image
                  src={image}
                  alt={title}
                  fill
                  priority
                  sizes="(max-width:1024px) 100vw, 560px"
                  className="object-cover"
                />
              </div>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}
