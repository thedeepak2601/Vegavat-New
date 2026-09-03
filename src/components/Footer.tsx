import Link from "next/link";
import type { ReactNode } from "react";
import Logo from "./Logo";
import Icon from "./Icon";
import { SITE } from "@/lib/site";
import { SERVICES } from "@/lib/content";
import { FINANCE_CATEGORIES, FINANCE_PHONE, FINANCE_PHONE_HREF } from "@/lib/financial";

// Brand icons for the footer social links, keyed by SITE.socials label.
const SOCIAL_ICONS: Record<string, ReactNode> = {
  LinkedIn: <path d="M6.94 5a1.94 1.94 0 1 1-3.88 0 1.94 1.94 0 0 1 3.88 0zM3.5 8.5h3.3V21H3.5zM9.5 8.5h3.16v1.71h.05c.44-.83 1.51-1.71 3.11-1.71 3.32 0 3.93 2.19 3.93 5.03V21h-3.3v-5.54c0-1.32-.02-3.01-1.83-3.01-1.84 0-2.12 1.43-2.12 2.91V21H9.5z" />,
  Twitter: <path d="M13.8 10.6 19.3 4h-1.6l-4.7 5.5L9.2 4H4l5.8 8.4L4 20h1.6l5-5.9 4 5.9H20l-6-8.8zm-1.8 2.1-.6-.8L6 5.2h2l3.7 5.3.6.8 4.8 6.9h-2z" />,
  Dribbble: <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm6.6 4.7a8.5 8.5 0 0 1 1.9 5.3c-.28-.06-3.06-.62-5.85-.27-.06-.15-.12-.3-.19-.46-.18-.42-.38-.85-.59-1.27 3.07-1.25 4.46-3.05 4.73-3.3zM12 3.5c2.05 0 3.92.77 5.35 2.04-.23.32-1.48 2-4.44 3.1A41 41 0 0 0 9.96 4 8.5 8.5 0 0 1 12 3.5zM8.3 4.6a44 44 0 0 1 2.93 4.55C7.5 10.14 4.2 10.1 3.8 10.1A8.52 8.52 0 0 1 8.3 4.6zM3.5 12v-.26c.42.01 4.3.06 8.28-1.13.23.44.44.9.64 1.35l-.32.1c-4.1 1.32-6.28 4.94-6.46 5.24A8.47 8.47 0 0 1 3.5 12zm8.5 8.5a8.46 8.46 0 0 1-5.23-1.8c.14-.29 1.62-3.13 6.1-4.69l.05-.01c1.12 2.9 1.58 5.34 1.7 6.04A8.4 8.4 0 0 1 12 20.5zm4.18-1.2c-.08-.49-.5-2.78-1.54-5.64 2.63-.42 4.93.27 5.22.36a8.52 8.52 0 0 1-3.68 5.28z" />,
  GitHub: <path d="M12 2A10 10 0 0 0 8.84 21.5c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2z" />,
};

function SocialIcon({ label }: { label: string }) {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      {SOCIAL_ICONS[label] ?? <circle cx="12" cy="12" r="4" />}
    </svg>
  );
}

const company = [
  { label: "About Us", href: "/#about" },
  { label: "Our Process", href: "/process" },
  { label: "Industries", href: "/industries" },
  { label: "Products", href: "/products" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white">
      <div className="container-x">
        <div className="grid gap-10 py-16 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo light />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
              {SITE.tagline} A software development partner empowering startups
              and enterprises to build impactful digital products since {SITE.founded}.
            </p>
            <div className="mt-5 flex gap-3">
              {SITE.socials.map((s) => {
                const external = s.href.startsWith("http");
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    title={s.label}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                    className="grid h-9 w-9 place-items-center rounded-full border border-white/15 text-white/75 transition-colors hover:border-violet hover:bg-violet hover:text-white"
                  >
                    <SocialIcon label={s.label} />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-white/90">Services</h2>
            <ul className="mt-4 space-y-2.5 text-sm text-white/60">
              {SERVICES.slice(0, 6).map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="transition-colors hover:text-violet-200">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>

          </div>

          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-white/90">Company</h2>
            <ul className="mt-4 space-y-2.5 text-sm text-white/60">
              {company.map((c) => (
                <li key={c.label}>
                  <Link href={c.href} className="transition-colors hover:text-violet-200">
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-white/90">Get in touch</h2>
            <ul className="mt-4 space-y-3 text-sm text-white/60">
              <li><a href={`mailto:${SITE.email}`} className="hover:text-violet-200">{SITE.email}</a></li>
              <li><a href={SITE.phoneHref} className="hover:text-violet-200">{SITE.phone}</a></li>
              <li>{SITE.address}</li>
            </ul>
            <Link href="/contact" className="btn-primary mt-5">Start a project →</Link>
          </div>
        </div>

        {/* Financial services — a separate practice, given its own band on one
            line rather than a column buried among the IT services. */}
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-r from-violet/25 via-white/[0.04] to-[#34E0F0]/[0.12] px-5 py-4 sm:px-7 sm:py-5">
          <div className="pointer-events-none absolute -left-10 -top-16 h-40 w-40 rounded-full bg-violet/30 blur-[70px]" />

          <div className="relative flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            {/* whole heading block links through to the practice overview */}
            <Link href="/financial-services" className="group/fs flex items-center gap-3.5">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-violet to-violet-700 text-white shadow-glow transition-transform duration-300 group-hover/fs:scale-110">
                <Icon name="finance" className="h-[22px] w-[22px]" />
              </span>
              <span>
                <span className="flex items-center gap-1.5 text-sm font-extrabold uppercase tracking-wider text-white transition-colors group-hover/fs:text-violet-200">
                  Financial Services
                  <span className="-translate-x-1 opacity-0 transition-all duration-300 group-hover/fs:translate-x-0 group-hover/fs:opacity-100">
                    →
                  </span>
                </span>
                <span className="mt-0.5 block text-xs text-white/60">
                  Income tax, GST &amp; accounting, handled end to end
                </span>
              </span>
            </Link>

            <div className="flex flex-wrap items-center gap-2">
              {FINANCE_CATEGORIES.map((c) => (
                <Link
                  key={c.slug}
                  href={`/financial-services/${c.slug}`}
                  className="group/pill inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] py-2 pl-2 pr-4 text-sm font-semibold text-white/75 backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-violet/50 hover:bg-violet hover:text-white hover:shadow-glow"
                >
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-white/10 text-violet-200 transition-colors group-hover/pill:bg-white/20 group-hover/pill:text-white">
                    <Icon name={c.icon} className="h-4 w-4" />
                  </span>
                  {c.title}
                  <span className="w-0 -translate-x-1 overflow-hidden opacity-0 transition-all duration-300 group-hover/pill:w-3 group-hover/pill:translate-x-0 group-hover/pill:opacity-100">
                    →
                  </span>
                </Link>
              ))}
            </div>

            <a
              href={FINANCE_PHONE_HREF}
              className="btn-glow btn-invert shrink-0 whitespace-nowrap"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              {FINANCE_PHONE}
            </a>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-white/10 py-6 text-sm text-white/60 sm:flex-row">
          <p>
            ©{" "}
            <Link href="/" className="transition-colors hover:text-white/75">
              {new Date().getFullYear()} {SITE.name} Technologies
            </Link>
            . All rights reserved.
          </p>
          <div className="flex gap-5">
            <Link href="/privacy" className="hover:text-white/75">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white/75">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
