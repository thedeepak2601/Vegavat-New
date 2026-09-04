import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import Reveal from "@/components/Reveal";
import Icon from "@/components/Icon";
import { PRODUCT_ICONS } from "@/lib/icons";
import FAQ from "@/components/FAQ";
import CTABanner from "@/components/CTABanner";
import StatStrip from "@/components/StatStrip";
import LogoMarquee from "@/components/home/LogoMarquee";
import { PRODUCTS, TESTIMONIALS } from "@/lib/content";

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.id }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const p = PRODUCTS.find((x) => x.id === params.slug);
  return { title: p ? `${p.name} Software` : "Product", description: p?.desc };
}

const STEPS = [
  { t: "Discovery & Setup", d: "We map your workflow and configure the platform to match it." },
  { t: "Data Migration", d: "We move your existing data cleanly, with validation and zero loss." },
  { t: "Training & Go-Live", d: "We train your team and launch with hands-on hypercare support." },
  { t: "Support & Scale", d: "We maintain, optimize and add modules as you grow." },
];

const FAQS = [
  { q: "How long does setup take?", a: "Most teams are live within 2–4 weeks, depending on data volume and customization. We share a clear timeline up front." },
  { q: "Can it be customized to our process?", a: "Yes. The platform is highly configurable, custom fields, workflows, roles and reports, and we can build bespoke modules where needed." },
  { q: "Is our data secure?", a: "Yes. We use encryption in transit and at rest, role-based access and audit trails, with regular backups and monitoring." },
  { q: "Does it integrate with our other tools?", a: "Yes. Open APIs and webhooks let us connect your existing tools, and many popular integrations are available out of the box." },
  { q: "Do you provide training and support?", a: "Absolutely. Onboarding, training and ongoing support are included, with fast, guaranteed response times." },
];

const INTEGRATIONS = [
  { icon: "💬", name: "WhatsApp Business" },
  { icon: "✉️", name: "Gmail & Workspace" },
  { icon: "🪟", name: "Microsoft 365" },
  { icon: "🧾", name: "Tally & Busy" },
  { icon: "💳", name: "Razorpay & PayU" },
  { icon: "🛒", name: "Shopify & WooCommerce" },
  { icon: "💬", name: "Slack & MS Teams" },
  { icon: "📊", name: "Meta & Google Ads" },
  { icon: "🔌", name: "REST API + Webhooks" },
  { icon: "📚", name: "Zoho Books" },
];

const PLANS = [
  {
    name: "Starter",
    price: "₹1,499",
    cadence: "per user / month, billed annually",
    featured: false,
    cta: { label: "Start Free Trial", href: "/contact" },
    feats: ["Up to 5 users", "Core modules", "10,000 records", "Email & WhatsApp", "Basic reporting"],
  },
  {
    name: "Growth",
    price: "₹2,999",
    cadence: "per user / month, billed annually",
    featured: true,
    cta: { label: "Start Free Trial", href: "/contact" },
    feats: ["Unlimited users", "All modules", "Unlimited records", "Automation & workflows", "AI & advanced analytics", "Priority support"],
  },
  {
    name: "Enterprise",
    price: "Custom",
    cadence: "volume discounts, dedicated SLA",
    featured: false,
    cta: { label: "Talk to Sales", href: "/contact" },
    feats: ["Everything in Growth", "Custom integrations & API", "On-premise / private cloud", "Dedicated success manager", "SSO & advanced RBAC", "Audit logs & compliance"],
  },
];

export default function ProductDetail({ params }: { params: { slug: string } }) {
  const product = PRODUCTS.find((p) => p.id === params.slug);
  if (!product) notFound();

  const related = PRODUCTS.filter((p) => p.id !== product.id).slice(0, 3);

  return (
    <>
      <PageHero
        breadcrumb={`Home / Products / ${product.name}`}
        eyebrow={product.name}
        title={product.tagline}
        desc={product.intro}
        cta={{ label: "Request a Demo", href: "/contact" }}
        image={product.image}
      />

      {/* Product switcher */}
      <div className="border-b border-charcoal/[0.07] bg-charcoal-50/60">
        <div className="container-x no-scrollbar flex gap-2 overflow-x-auto py-3">
          {PRODUCTS.map((p) => {
            const active = p.id === product.id;
            return (
              <Link
                key={p.id}
                href={`/products/${p.id}`}
                aria-current={active ? "page" : undefined}
                className={`flex shrink-0 items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                  active
                    ? "border-violet bg-violet text-white shadow-soft"
                    : "border-charcoal/10 bg-white text-charcoal/75 hover:border-violet/40 hover:text-violet"
                }`}
              >
                <span className="text-base">{p.icon}</span>
                {p.name}
              </Link>
            );
          })}
        </div>
      </div>

      {/* Trusted by */}
      <LogoMarquee />

      {/* Benefits / metrics */}
      <section className="section">
        <div className="container-x">
          <StatStrip items={product.benefits} />
        </div>
      </section>

      {/* Features */}
      <section className="section bg-charcoal-50/60">
        <div className="container-x">
          <SectionHeader
            eyebrow="Features"
            title={`Everything ${product.name} gives you`}
            desc="Powerful out of the box, flexible enough to match exactly how your business runs."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {product.features.map((f, i) => (
              <Reveal key={f.title} delay={(i % 3) * 0.07}>
                <div className="card-hover h-full">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-violet/10 text-2xl">{product.icon}</span>
                  <h3 className="mt-5 text-base font-bold text-charcoal">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-charcoal/60">{f.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="section">
        <div className="container-x">
          <SectionHeader
            eyebrow="Integrations"
            title="Plays well with your existing stack"
            desc="Two-way sync with the tools your team already uses, no middleware, no brittle Zapier chains."
          />
          <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {INTEGRATIONS.map((it, i) => (
              <Reveal key={it.name} delay={(i % 5) * 0.05}>
                <div className="flex items-center gap-3 rounded-xl border border-charcoal/[0.07] bg-white px-4 py-3 shadow-card transition-colors hover:border-violet/30">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-violet/10 text-lg">{it.icon}</span>
                  <span className="text-sm font-semibold text-charcoal/75">{it.name}</span>
                  <span className="ml-auto h-1.5 w-1.5 shrink-0 rounded-full bg-green-500" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section bg-charcoal-50/60">
        <div className="container-x">
          <SectionHeader
            eyebrow="How It Works"
            title="From sign-up to scale in four steps"
            desc="A clear, proven rollout, no guesswork, no surprises."
          />
          <div className="relative mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((s, i) => (
              <Reveal key={s.t} delay={i * 0.08}>
                <div className="relative h-full rounded-2xl border border-charcoal/[0.07] bg-white p-6 shadow-card">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-violet text-sm font-extrabold text-white">{i + 1}</span>
                  <h3 className="mt-4 font-bold text-charcoal">{s.t}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-charcoal/60">{s.d}</p>
                  {i < STEPS.length - 1 && (
                    <span className="absolute -right-3 top-1/2 z-10 hidden -translate-y-1/2 text-violet-300 lg:block">→</span>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section">
        <div className="container-x">
          <SectionHeader
            eyebrow="Pricing"
            title="Simple plans, no surprises"
            desc="14-day free trial · data migration included · no credit card needed to start."
          />
          <div className="mt-12 grid items-start gap-6 lg:grid-cols-3">
            {PLANS.map((plan, i) => (
              <Reveal key={plan.name} delay={i * 0.08}>
                <div className={`relative h-full overflow-hidden rounded-2xl border bg-white p-7 ${
                  plan.featured ? "border-violet shadow-soft ring-1 ring-violet/20" : "border-charcoal/[0.08] shadow-card"
                }`}>
                  {plan.featured && (
                    <span className="absolute right-6 top-6 rounded-full bg-violet/10 px-3 py-1 text-xs font-bold uppercase tracking-wide text-violet">Most Popular</span>
                  )}
                  <p className="text-sm font-semibold text-charcoal/60">{plan.name}</p>
                  <p className="mt-3 text-4xl font-extrabold tracking-tight text-charcoal">{plan.price}</p>
                  <p className="mt-1 text-xs text-charcoal/60">{plan.cadence}</p>
                  <ul className="mt-6 space-y-2.5 border-t border-charcoal/[0.07] pt-6">
                    {plan.feats.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm text-charcoal/75">
                        <span className="mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded-full bg-violet/10 text-violet">
                          <svg className="h-2.5 w-2.5" viewBox="0 0 12 12" fill="none"><path d="M2.5 6.5 5 9l4.5-5.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link href={plan.cta.href} className={`mt-7 block rounded-full px-5 py-3 text-center text-sm font-bold transition-all ${
                    plan.featured ? "btn-glow bg-violet text-white hover:bg-violet-600" : "border border-charcoal/15 text-charcoal/75 hover:border-violet hover:text-violet"
                  }`}>
                    {plan.cta.label}
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Customer stories */}
      <section className="section bg-charcoal-50/60">
        <div className="container-x">
          <SectionHeader
            eyebrow="Customer Stories"
            title="Loved by teams who hate bad software"
            desc="Real results from businesses running on our platform."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {TESTIMONIALS.slice(0, 3).map((t, i) => (
              <Reveal key={t.name} delay={i * 0.08}>
                <div className="flex h-full flex-col rounded-2xl border border-charcoal/[0.07] bg-white p-7 shadow-card">
                  <div className="flex gap-1 text-violet">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <svg key={s} className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"><path d="M10 1.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L10 15.9l-5.2 2.7 1-5.8L1.5 8.7l5.9-.9z" /></svg>
                    ))}
                  </div>
                  <p className="mt-4 flex-1 text-sm italic leading-relaxed text-charcoal/75">&ldquo;{t.quote}&rdquo;</p>
                  <div className="mt-6 flex items-center gap-3 border-t border-charcoal/[0.07] pt-5">
                    <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-violet to-violet-700 text-xs font-bold text-white">
                      {t.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                    </span>
                    <div>
                      <p className="text-sm font-bold text-charcoal">{t.name}</p>
                      <p className="text-xs text-charcoal/60">{t.role}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container-x">
          <FAQ items={FAQS} />
        </div>
      </section>

      {/* Related products */}
      <section className="section">
        <div className="container-x">
          <SectionHeader eyebrow="More Products" title="Explore the rest of the suite" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p) => (
              <Link
                key={p.id}
                href={`/products/${p.id}`}
                className="card-hover group flex h-full flex-col overflow-hidden !p-0"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    sizes="(max-width:640px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute inset-0 bg-gradient-to-t from-charcoal/75 via-charcoal/10 to-transparent" />
                  <span className="absolute bottom-4 left-4 grid h-11 w-11 place-items-center rounded-xl bg-white/95 text-violet shadow-card">
                    <Icon name={PRODUCT_ICONS[p.id] ?? "default"} className="h-5 w-5" />
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-lg font-bold text-charcoal transition-colors group-hover:text-violet">{p.name}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-charcoal/60">{p.short}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-violet transition-transform group-hover:translate-x-1">Explore →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        eyebrow="Get Started"
        title={`Ready to try ${product.name}?`}
        desc="Tell us about your workflow and we'll set up a tailored demo, with migration and onboarding included."
        primary={{ label: "Request a Demo", href: "/contact" }}
        secondary={{ label: "Talk to Sales", href: "/contact" }}
      />
    </>
  );
}
