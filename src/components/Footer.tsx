import Link from "next/link";
import type { ReactNode } from "react";
import Logo from "./Logo";
import { SITE } from "@/lib/site";
import { SERVICES } from "@/lib/content";

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
                    className="grid h-9 w-9 place-items-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-violet hover:bg-violet hover:text-white"
                  >
                    <SocialIcon label={s.label} />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white/90">Services</h4>
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
            <h4 className="text-sm font-bold uppercase tracking-wider text-white/90">Company</h4>
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
            <h4 className="text-sm font-bold uppercase tracking-wider text-white/90">Get in touch</h4>
            <ul className="mt-4 space-y-3 text-sm text-white/60">
              <li><a href={`mailto:${SITE.email}`} className="hover:text-violet-200">{SITE.email}</a></li>
              <li><a href={SITE.phoneHref} className="hover:text-violet-200">{SITE.phone}</a></li>
              <li>{SITE.address}</li>
            </ul>
            <Link href="/contact" className="btn-primary mt-5">Start a project →</Link>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-white/10 py-6 text-sm text-white/50 sm:flex-row">
          <p>
            ©{" "}
            <Link href="/" className="transition-colors hover:text-white/80">
              {new Date().getFullYear()} {SITE.name} Technologies
            </Link>
            . All rights reserved.
          </p>
          <div className="flex gap-5">
            <Link href="/privacy" className="hover:text-white/80">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white/80">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
