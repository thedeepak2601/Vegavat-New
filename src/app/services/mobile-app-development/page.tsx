import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import Reveal from "@/components/Reveal";
import Stats from "@/components/Stats";
import FAQ from "@/components/FAQ";
import PortfolioGrid from "@/components/PortfolioGrid";
import LogoMarquee from "@/components/home/LogoMarquee";
import CTABanner from "@/components/CTABanner";
import { PROCESS_STEPS } from "@/lib/content";

export const metadata: Metadata = {
  title: "Mobile App Development Company",
  description:
    "Vegavat builds scalable iOS, Android and cross-platform apps for startups and enterprises, from strategy and design to development, testing and support.",
};

const offered = [
  {
    tag: "Native Development",
    title: "Native iOS & Android App Development",
    body: "Native development delivers the best performance, security and device integration. We build iOS apps with Swift and Android apps with Kotlin and Java, giving users a fast, smooth experience that feels native to their platform.",
    points: ["iOS development using Swift", "Android using Kotlin & Java", "Device hardware & sensor integration", "App Store & Google Play deployment"],
  },
  {
    tag: "Cross-Platform",
    title: "Flutter & React Native App Development",
    body: "Build iOS and Android applications from a single codebase, reducing development time, cost and maintenance while delivering a consistent experience. Flutter offers fast rendering with custom UI; React Native brings strong community support.",
    points: ["Flutter app development", "React Native development", "Single codebase for iOS & Android", "Faster MVP delivery and lower cost"],
  },
  {
    tag: "Custom Development",
    title: "Custom Mobile App Development",
    body: "Off-the-shelf apps cannot meet every requirement. We help startups and enterprises build powerful, scalable applications around their specific users, on-demand, eCommerce, booking and social platforms.",
    points: ["MVP to full product development", "Third-party API integrations", "Scalable architecture from day one", "Source code ownership transferred to you"],
  },
  {
    tag: "UI/UX Design",
    title: "Mobile App UI/UX Design",
    body: "A well-designed interface is the difference between an app users love and one they abandon. We research, wireframe, prototype and design final interfaces in Figma, optimized for usability before a line of code is written.",
    points: ["User research & wireframing", "Interactive prototypes in Figma", "Design system & style guide delivery", "Responsive design across screen sizes"],
  },
  {
    tag: "Support & Maintenance",
    title: "App Maintenance & Support",
    body: "Launching is only the beginning. Apps need continuous monitoring, updates and optimization. We offer dedicated support engineers on a monthly retainer with a maximum 2-hour response time on all requests.",
    points: ["Bug fixing & performance monitoring", "iOS & Android OS compatibility updates", "Security patches & vulnerability fixes", "Post-launch feature additions"],
  },
];

const industries = [
  { icon: "🛒", name: "E-Commerce & Retail", desc: "Shopping apps with browsing, cart, payments and real-time order tracking." },
  { icon: "🏥", name: "Healthcare & Medical", desc: "Appointment booking, patient records, telemedicine and health monitoring." },
  { icon: "📚", name: "Education & E-Learning", desc: "LMS, video courses, quizzes and student progress tracking." },
  { icon: "🚚", name: "Logistics & Transport", desc: "Fleet tracking, delivery management and route optimization." },
  { icon: "💼", name: "SaaS & Enterprise", desc: "Internal tools, workflow automation and B2B mobility solutions." },
  { icon: "🏛️", name: "Finance & Fintech", desc: "Payment apps, digital wallets, expense trackers and secure banking." },
  { icon: "🍽️", name: "Food & Restaurant", desc: "On-demand food ordering, delivery tracking and loyalty programs." },
  { icon: "🏡", name: "Real Estate", desc: "Property listings, virtual tours, booking systems and agent management." },
];

const engagement = [
  { icon: "🔒", title: "Fixed Price Model", desc: "You define the scope, we deliver at a fixed cost and timeline. Ideal when requirements are clear before development starts.", best: "Small to mid projects", popular: false },
  { icon: "👥", title: "Dedicated Development Team", desc: "Hire developers who work exclusively on your project. Full control, flexible scope, direct communication and complete transparency.", best: "Startups & long-term products", popular: true },
  { icon: "◷", title: "Time & Material Model", desc: "Pay for actual time and resources used. Best for projects where requirements evolve. Maximum flexibility with transparent billing.", best: "Evolving or complex projects", popular: false },
];

const whyUs = [
  { n: "01", t: "End-to-End Development", d: "From idea validation to App Store launch, design, development, testing and post-launch support, all in one place, one team." },
  { n: "02", t: "Transparent Communication", d: "Regular sprint updates, direct access to your team and clear progress reports. No communication gaps, no surprises." },
  { n: "03", t: "On-Time Delivery", d: "We plan realistic timelines and follow structured Agile sprints to meet them, quality is never compromised to hit a date." },
  { n: "04", t: "Scalable Architecture", d: "Every app is designed for growth. Whether you reach 100 users or 100,000, the architecture handles it without a rebuild." },
  { n: "05", t: "Competitive Pricing", d: "High-quality development at transparent rates, an India-based team giving global clients strong expertise cost-effectively." },
  { n: "06", t: "Post-Launch Support", d: "We stay involved after launch with bug fixes, OS updates, performance improvements and feature additions." },
];

const faqs = [
  { q: "How much does mobile app development cost?", a: "Cost depends on complexity, number of features, target platforms and whether you choose native or cross-platform. A basic app starts from a few thousand dollars; a feature-rich enterprise application costs more. We provide a detailed, transparent estimate after a free discovery call, no obligation, no hidden charges." },
  { q: "How long does it take to develop a mobile app?", a: "A simple MVP typically takes 6–10 weeks. Mid-complexity apps take 3–5 months, and large enterprise platforms can run 6+ months. We share a milestone-based roadmap up front so you always know what ships when." },
  { q: "What is the difference between native and cross-platform development?", a: "Native apps (Swift/Kotlin) deliver maximum performance and deepest device integration per platform. Cross-platform (Flutter/React Native) shares one codebase across iOS and Android, lowering cost and speeding delivery. We recommend the right fit after understanding your goals." },
  { q: "Do you develop apps for both Android and iOS?", a: "Yes. We build for both platforms, natively or with a shared cross-platform codebase, and deploy to both the Apple App Store and Google Play." },
  { q: "Can you help if I only have an idea and no technical specification?", a: "Absolutely. Many clients come to us with just an idea. Our discovery process turns it into a clear scope, feature list and roadmap before any code is written." },
  { q: "Do you sign an NDA before the project discussion?", a: "Yes. We are happy to sign an NDA before any detailed project discussion begins so your idea stays protected." },
  { q: "Will I own the source code of the app after delivery?", a: "Yes. Full source code ownership is transferred to you on delivery, the product is entirely yours." },
  { q: "Do you provide support after the app is launched?", a: "Yes. We offer ongoing maintenance and support plans covering bug fixes, OS updates, performance improvements and new features, with fast response times." },
];

export default function MobileAppPage() {
  return (
    <>
      <PageHero
        breadcrumb="Home / Services / Mobile App Development"
        eyebrow="Mobile App Development"
        title="Mobile App Development Company for Startups & Enterprises"
        desc="A trusted mobile app development company building scalable iOS, Android and cross-platform applications worldwide. We combine strong UI/UX with solid engineering to deliver fast, secure apps built to grow."
        cta={{ label: "Get Free Quote", href: "/contact" }}
        image="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=900&q=80"
      />

      <section className="container-x -mt-12 relative z-10">
        <Reveal><Stats items={[
          { value: "6+", label: "Years Experience" },
          { value: "10+", label: "Clients Worldwide" },
          { value: "100+", label: "Mobile Apps Delivered" },
          { value: "15+", label: "Expert Developers" },
        ]} /></Reveal>
      </section>

      {/* Services offered */}
      <section className="section">
        <div className="container-x">
          <SectionHeader
            eyebrow="Our Services"
            title="Mobile App Development Services We Offer"
            desc="We craft high-performance, scalable apps tailored to your goals, with robust security, blazing-fast performance and forward-thinking architecture."
          />
          <div className="mt-14 space-y-6">
            {offered.map((o, i) => (
              <Reveal key={o.title} delay={(i % 2) * 0.06}>
                <div className="grid items-center gap-6 rounded-2xl border border-charcoal/[0.07] bg-white p-7 shadow-card md:grid-cols-[1fr_1.4fr] md:p-9">
                  <div>
                    <span className="eyebrow">{o.tag}</span>
                    <h3 className="mt-3 text-xl font-bold text-charcoal">{o.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-charcoal/65">{o.body}</p>
                  </div>
                  <ul className="grid gap-3 sm:grid-cols-2">
                    {o.points.map((p) => (
                      <li key={p} className="flex items-start gap-2.5 rounded-xl bg-violet/5 p-3 text-sm font-medium text-charcoal/80">
                        <span className="mt-0.5 text-violet">✓</span> {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why custom */}
      <section className="section bg-charcoal text-white">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <span className="eyebrow border-violet/40 bg-violet/15 text-violet-200">Why Custom?</span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">Built around your business</h2>
            <p className="mt-5 text-white/70">
              Off-the-shelf apps rarely fit perfectly. We build custom applications from scratch,
              designed specifically around your goals, your users and your operations, pairing
              strong UX thinking with every project.
            </p>
            <Link href="/contact" className="btn-primary mt-7">Start your project →</Link>
          </Reveal>
          <Reveal delay={0.1}>
            <ul className="grid gap-3 sm:grid-cols-2">
              {[
                "Requirement analysis before development",
                "Scalable architecture for future growth",
                "Secure data & third-party API integrations",
                "Performance optimized across all devices",
                "Regular client updates each sprint",
                "Full source code ownership on delivery",
                "NDA available before discussion",
                "Dedicated project manager",
              ].map((p) => (
                <li key={p} className="flex items-start gap-2.5 rounded-xl border border-white/10 bg-white/[0.03] p-4 text-sm text-white/85">
                  <span className="text-violet-200">✓</span> {p}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Industries */}
      <section className="section">
        <div className="container-x">
          <SectionHeader
            eyebrow="Industries"
            title="Industries We Build Mobile Apps For"
            desc="We understand industry-specific user needs and build apps that solve real business problems."
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {industries.map((ind, i) => (
              <Reveal key={ind.name} delay={(i % 4) * 0.06}>
                <div className="card-hover h-full">
                  <span className="text-3xl">{ind.icon}</span>
                  <h3 className="mt-4 text-base font-bold text-charcoal">{ind.name}</h3>
                  <p className="mt-2 text-sm leading-snug text-charcoal/55">{ind.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section bg-charcoal-50/60">
        <div className="container-x">
          <SectionHeader
            eyebrow="How We Work"
            title="Our Mobile App Development Process"
            desc="An Agile approach combined with Kanban workflow management, ensuring faster delivery, regular updates and complete transparency at every stage."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PROCESS_STEPS.map((s, i) => (
              <Reveal key={s.n} delay={(i % 3) * 0.07}>
                <div className="card-hover h-full">
                  <span className="text-3xl font-extrabold text-violet/25">{s.n}</span>
                  <h3 className="mt-2 text-lg font-bold text-charcoal">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-charcoal/60">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Tech stack (Our Stack marquee) */}
      <LogoMarquee />

      {/* Engagement models */}
      <section className="section bg-charcoal-50/60">
        <div className="container-x">
          <SectionHeader
            eyebrow="Engagement Models"
            title="Flexible Engagement Models"
            desc="Choose the model that best matches your project type, budget and timeline. All include full transparency, regular communication and quality assurance."
          />
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {engagement.map((e, i) => (
              <Reveal key={e.title} delay={i * 0.08}>
                <div className={`relative h-full rounded-2xl border p-7 transition-all duration-300 hover:-translate-y-1 ${e.popular ? "border-violet bg-white shadow-soft" : "border-charcoal/[0.07] bg-white shadow-card hover:shadow-soft"}`}>
                  {e.popular && (
                    <span className="absolute -top-3 right-6 rounded-full bg-violet px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-white">★ Most Popular</span>
                  )}
                  <span className="text-3xl">{e.icon}</span>
                  <h3 className="mt-4 text-lg font-bold text-charcoal">{e.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-charcoal/60">{e.desc}</p>
                  <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-violet">Best for: <span className="text-charcoal/70">{e.best}</span></p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="section">
        <div className="container-x">
          <SectionHeader
            eyebrow="Why Us"
            title="Why Businesses Choose Vegavat"
            desc="Here's what consistently makes clients across multiple countries come back to us."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyUs.map((w, i) => (
              <Reveal key={w.n} delay={(i % 3) * 0.07}>
                <div className="h-full rounded-2xl border-l-2 border-violet/30 bg-charcoal-50/50 p-6 transition-colors hover:border-violet">
                  <span className="text-2xl font-extrabold text-violet/30">{w.n}</span>
                  <h3 className="mt-1 text-lg font-bold text-charcoal">{w.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-charcoal/60">{w.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-charcoal-50/60">
        <div className="container-x">
          <SectionHeader eyebrow="FAQ" title="Frequently Asked Questions" />
          <div className="mt-12"><FAQ items={faqs} /></div>
        </div>
      </section>

      {/* Latest work */}
      <section className="section">
        <div className="container-x">
          <SectionHeader
            eyebrow="Our Work"
            title="Our Latest Mobile App Work"
            desc="A selection of mobile applications we have designed and developed across industries."
          />
          <div className="mt-14"><PortfolioGrid /></div>
        </div>
      </section>

      <CTABanner
        title="Ready to Build Your Mobile App?"
        desc="Whether you're starting from scratch or improving an existing product, our team is ready to help. Get a free estimate within 24 hours, NDA available."
        primary={{ label: "Talk to Our Team", href: "/contact" }}
        secondary={{ label: "View Portfolio", href: "/contact" }}
      />
    </>
  );
}
