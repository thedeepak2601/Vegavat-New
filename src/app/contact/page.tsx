import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Vegavat. Share your requirements and receive a free project estimate within 24 hours. NDA available before discussion.",
};

const contactCards = [
  { icon: "✉️", label: "Email us", value: SITE.email, href: `mailto:${SITE.email}` },
  { icon: "📞", label: "Call us", value: SITE.phone, href: SITE.phoneHref },
  { icon: "📍", label: "Location", value: SITE.address, href: "#" },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        breadcrumb="Home / Contact Us"
        eyebrow="Let's Talk"
        title="Ask for a proposal, we'll get back to you"
        desc="Fill out a simple form and our team will reach out with a tailored plan and free estimate within 24 hours. NDA available before discussion begins."
        image="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=900&q=80"
      />

      <section className="section">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.3fr]">
          {/* Info side */}
          <div>
            <Reveal>
              <span className="eyebrow">Get in touch</span>
              <h2 className="mt-4 text-2xl font-extrabold text-charcoal sm:text-3xl">
                Start the conversation
              </h2>
              <p className="mt-3 text-charcoal/60">
                Whether you&apos;re starting from scratch or improving an existing product,
                our team is ready to help bring your vision to life.
              </p>
            </Reveal>

            <div className="mt-8 space-y-4">
              {contactCards.map((c, i) => (
                <Reveal key={c.label} delay={i * 0.08}>
                  <a href={c.href} className="flex items-center gap-4 rounded-2xl border border-charcoal/[0.07] bg-white p-5 transition-all hover:-translate-y-0.5 hover:border-violet/30 hover:shadow-card">
                    <span className="grid h-12 w-12 place-items-center rounded-xl bg-violet/10 text-xl">{c.icon}</span>
                    <span>
                      <span className="block text-xs font-semibold uppercase tracking-wider text-charcoal/50">{c.label}</span>
                      <span className="block font-semibold text-charcoal">{c.value}</span>
                    </span>
                  </a>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.2}>
              <div className="mt-8 rounded-2xl bg-charcoal p-6 text-white">
                <p className="text-sm font-bold uppercase tracking-wider text-violet-200">Quick response</p>
                <p className="mt-2 text-sm text-white/70">
                  Free project estimate within <span className="font-bold text-white">24 hours</span>.
                  Maximum 2-hour response time on all support requests.
                </p>
              </div>
            </Reveal>
          </div>

          {/* Form side */}
          <Reveal delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>

        {/* Map */}
        <div className="container-x mt-12">
          <Reveal>
            <div className="overflow-hidden rounded-3xl border border-charcoal/[0.07] shadow-card">
              <iframe
                src={SITE.mapEmbed}
                title={`${SITE.name} location map`}
                className="h-[420px] w-full"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
