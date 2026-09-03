import Link from "next/link";
import Image from "next/image";
import Reveal from "./Reveal";
import AnimatedBackground from "./effects/AnimatedBackground";
import InquiryModalButton from "./InquiryModalButton";
import { opensInquiry } from "@/lib/cta";


/**
 * Turns "Home / Services / Cyber Security" into real navigation. Every segment
 * but the last links to its cumulative path; the last is the current page, so
 * it stays plain text — which is also what a breadcrumb should do.
 *
 * Ancestor labels map cleanly to their routes (Financial Services →
 * /financial-services), and the leaf is never linked, so slugs that differ from
 * their title (ai-development vs "AI Software Development") can't break it.
 */
function crumbs(trail: string) {
  // Split on the padded separator, not a bare slash — labels can contain one
  // themselves ("UI/UX Design"), which a bare split would tear in half.
  const parts = trail.split(" / ").map((s) => s.trim()).filter(Boolean);
  let path = "";
  return parts.map((label, i) => {
    if (label.toLowerCase() === "home") {
      path = "";
      return { label, href: "/", last: i === parts.length - 1 };
    }
    path += "/" + label.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
    return { label, href: path, last: i === parts.length - 1 };
  });
}

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
  // Shared with CTABanner so one label can't behave differently in the hero
  // and the banner on the same page.
  const ctaOpensInquiry = cta ? opensInquiry(cta.label) : false;

  return (
    <section className="relative overflow-hidden bg-charcoal pt-[128px] pb-20 text-white">
      <AnimatedBackground variant="dark" />
      <div className="container-x relative">
        <div className={image ? "grid items-center gap-12 lg:grid-cols-2" : ""}>
          <Reveal className="max-w-3xl">
            {breadcrumb && (
              <nav aria-label="Breadcrumb" className="mb-4">
                <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-semibold uppercase tracking-widest">
                  {crumbs(breadcrumb).map((c, i) => (
                    <li key={c.href + i} className="flex items-center gap-2">
                      {i > 0 && <span className="text-white/25">/</span>}
                      {c.last ? (
                        <span aria-current="page" className="text-white/75">
                          {c.label}
                        </span>
                      ) : (
                        <Link
                          href={c.href}
                          className="text-violet-200 underline-offset-4 transition-colors hover:text-white hover:underline"
                        >
                          {c.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ol>
              </nav>
            )}
            {eyebrow && <span className="eyebrow border-violet/40 bg-violet/15 text-violet-200">{eyebrow}</span>}
            <h1 className="mt-4 text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl">
              {title}
            </h1>
            {desc && <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/75">{desc}</p>}
            {cta && ctaOpensInquiry ? (
              <InquiryModalButton
                label={cta.label}
                showArrow
                className="btn-primary mt-8"
              />
            ) : cta ? (
              <Link href={cta.href} className="btn-primary mt-8">
                {cta.label} →
              </Link>
            ) : null}
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
