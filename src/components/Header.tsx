"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import Icon from "./Icon";
import SearchModal from "./SearchModal";
import SearchTrigger from "./SearchTrigger";
import ThemeToggle from "./ThemeToggle";
import { NAV } from "@/lib/nav";
import type { NavItem } from "@/lib/nav";
import { SITE } from "@/lib/site";

/**
 * One top-level nav entry with its dropdown. Rendered both inside the centre
 * capsule and, for highlighted sections, as a standalone pill beside it.
 */
function NavPill({
  item,
  pathname,
  standalone = false,
}: {
  item: NavItem;
  pathname: string;
  standalone?: boolean;
}) {
  const active =
    item.href === "/"
      ? pathname === "/"
      : pathname.startsWith(item.href);
  const hasGroups = !!item.groups?.length;
  const hasMenu = hasGroups || !!item.children?.length;
  return (
    <div key={item.label} className="group">
      <Link
        href={item.href}
        className={
          standalone
            ? `flex items-center gap-1.5 whitespace-nowrap rounded-full border px-4 py-2 text-sm font-semibold transition-all duration-200 ${
                active
                  ? "border-violet bg-violet text-white shadow-soft"
                  : "border-violet/35 bg-violet/[0.07] text-violet hover:border-violet hover:bg-violet hover:text-white hover:shadow-soft"
              }`
            : `flex items-center gap-1 whitespace-nowrap rounded-full px-2.5 py-1.5 text-sm font-semibold transition-all duration-200 ${
                active
                  ? "bg-violet/10 text-violet"
                  : "text-charcoal/75 hover:bg-charcoal/[0.04] hover:text-violet"
              }`
        }
      >
        {item.icon && (
          <Icon
            name={item.icon}
            className="h-3.5 w-3.5 shrink-0 opacity-70 transition-opacity group-hover:opacity-100"
          />
        )}
        {/* highlighted items share the normal nav colour and simply blink */}
        <span className={item.highlight ? "animate-blink" : undefined}>
          {item.label}
        </span>
        {hasMenu && (
          <svg
            className="h-3.5 w-3.5 transition-transform duration-200 group-hover:rotate-180"
            viewBox="0 0 12 12"
            fill="none"
          >
            <path d="M3 4.5 6 7.5 9 4.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </Link>

      {hasMenu && (
        <div className="invisible absolute left-1/2 top-full z-40 -translate-x-1/2 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
          <div className={`animate-menu-in relative overflow-hidden rounded-2xl border border-charcoal/[0.08] bg-white shadow-soft ${
            hasGroups && item.groups!.length > 3 ? "w-[min(96vw,1180px)]" : "w-[min(94vw,900px)]"
          }`}>
            {/* soft gradient wash */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-violet/[0.05] via-transparent to-[#34E0F0]/[0.05]" />
            <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-violet/10 blur-3xl" />

            {hasGroups ? (
              // Grouped layout: one column per category, its sub-services listed beneath.
              <div
                className={`relative grid p-5 ${
                  item.groups!.length > 3 ? "grid-cols-4" : "grid-cols-3"
                }`}
              >
                {item.groups!.map((g, gi) => (
                  <div
                    key={g.label}
                    className={`px-3 ${gi > 0 ? "border-l border-charcoal/[0.06]" : ""}`}
                  >
                    <Link
                      href={g.href}
                      className="group/head flex items-center justify-between gap-2 rounded-xl px-2.5 py-2.5 transition-colors hover:bg-violet/[0.05]"
                    >
                      <span className="flex items-center gap-2.5">
                        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-violet to-violet-700 text-white shadow-soft">
                          <Icon name={g.icon} className="h-[18px] w-[18px]" />
                        </span>
                        <span className="text-base font-extrabold tracking-tight text-charcoal transition-colors group-hover/head:text-violet">
                          {g.label}
                        </span>
                      </span>
                      <span className="text-violet opacity-0 transition-all duration-200 group-hover/head:translate-x-0.5 group-hover/head:opacity-100">
                        →
                      </span>
                    </Link>

                    <span className="mx-2.5 mb-1 mt-1.5 block h-px bg-gradient-to-r from-violet/25 via-violet/10 to-transparent" />

                    <ul className="space-y-0.5">
                      {g.items.map((s) => {
                        const subActive = pathname === s.href;
                        return (
                          <li key={s.href}>
                            <Link
                              href={s.href}
                              aria-current={subActive ? "page" : undefined}
                              className={`group/sub flex items-start gap-2.5 rounded-xl px-2.5 py-2 transition-all duration-200 ${
                                subActive
                                  ? "bg-violet/[0.07]"
                                  : "hover:bg-violet/[0.05]"
                              }`}
                            >
                              <span
                                className={`grid h-8 w-8 shrink-0 place-items-center rounded-xl transition-all duration-200 group-hover/sub:scale-110 group-hover/sub:bg-violet group-hover/sub:text-white group-hover/sub:shadow-glow ${
                                  subActive
                                    ? "bg-violet text-white shadow-glow"
                                    : "bg-violet/10 text-violet"
                                }`}
                              >
                                <Icon name={s.icon} className="h-4 w-4" />
                              </span>
                              <span className="min-w-0 pt-px">
                                <span
                                  className={`block text-[13.5px] font-bold leading-tight transition-colors ${
                                    subActive
                                      ? "text-violet"
                                      : "text-charcoal group-hover/sub:text-violet"
                                  }`}
                                >
                                  {s.label}
                                </span>
                                {s.desc && (
                                  <span className="mt-0.5 block text-xs leading-snug text-charcoal/60">
                                    {s.desc}
                                  </span>
                                )}
                              </span>
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                ))}
              </div>
            ) : (
            <div className="relative grid grid-cols-3 gap-1.5 p-4">
              {item.children!.map((c) => {
                const childActive = pathname === c.href;
                return (
                <Link
                  key={c.label}
                  href={c.href}
                  aria-current={childActive ? "page" : undefined}
                  className={`group/card relative flex items-start gap-3 overflow-hidden rounded-xl border p-3 transition-all duration-200 hover:-translate-y-0.5 hover:border-violet/15 hover:bg-white hover:shadow-card ${
                    childActive ? "border-violet/20 bg-white shadow-card" : "border-transparent"
                  }`}
                >
                  {/* left accent, shown on hover or when active */}
                  <span className={`absolute inset-y-2 left-0 w-0.5 origin-top rounded-full bg-gradient-to-b from-violet to-[#34E0F0] transition-transform duration-200 group-hover/card:scale-y-100 ${
                    childActive ? "scale-y-100" : "scale-y-0"
                  }`} />
                  <span className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl transition-all duration-200 group-hover/card:scale-110 group-hover/card:bg-violet group-hover/card:text-white group-hover/card:shadow-glow ${
                    childActive ? "bg-violet text-white shadow-glow" : "bg-violet/10 text-violet"
                  }`}>
                    <Icon name={c.icon} className="h-[22px] w-[22px]" />
                  </span>
                  <span className="min-w-0">
                    <span className={`block text-base font-bold leading-tight transition-colors group-hover/card:text-violet ${
                      childActive ? "text-violet" : "text-charcoal"
                    }`}>
                      {c.label}
                    </span>
                    {c.desc && (
                      <span className="mt-1 block text-xs leading-snug text-charcoal/60 line-clamp-2">
                        {c.desc}
                      </span>
                    )}
                  </span>
                </Link>
                );
              })}
            </div>
            )}

            {/* footer: View all + Get Started */}
            <div className="relative flex items-center justify-between gap-4 border-t border-charcoal/[0.07] bg-charcoal-50/70 px-5 py-3.5">
              <Link
                href={item.href}
                className="group/all inline-flex items-center gap-2 rounded-full border border-charcoal/15 bg-white px-4 py-2 text-xs font-bold uppercase tracking-wider text-charcoal/75 transition-colors hover:border-violet/40 hover:text-violet"
              >
                View all {item.label}
                <span className="transition-transform group-hover/all:translate-x-0.5">→</span>
              </Link>
              {item.cta ? (
                <a
                  href={item.cta.href}
                  className="btn-glow btn-compact"
                >
                  <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  {item.cta.label}
                </a>
              ) : (
                <Link
                  href="/contact"
                  className="btn-glow btn-compact"
                >
                  Get Started →
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false); // mobile drawer
  const [openSub, setOpenSub] = useState<string | null>(null); // mobile accordion
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setOpenSub(null);
    setSearchOpen(false);
  }, [pathname]);

  // ⌘K / Ctrl+K or "/" opens search, Esc closes it
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const el = e.target as HTMLElement | null;
      const typing = !!el && (el.tagName === "INPUT" || el.tagName === "TEXTAREA" || el.isContentEditable);
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setSearchOpen((v) => !v);
      } else if (e.key === "/" && !typing) {
        e.preventDefault();
        setSearchOpen(true);
      } else if (e.key === "Escape") {
        setSearchOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 shadow-card backdrop-blur-md"
          : "bg-white"
      }`}
    >
      <div className="flex h-[72px] w-full items-center gap-4 px-5 sm:px-8 lg:px-10">
        <div className="flex flex-1 items-center">
          <Logo header />
        </div>

        {/* Desktop nav */}
        {/* `relative` lives here, not on each item: mega panels are centred on
            the whole nav so a left-most trigger can't push one off-screen. */}
        {/* Desktop nav: a home pill plus one bordered capsule holding the links,
            so the row reads as grouped controls rather than loose text. */}
        <nav className="relative hidden shrink-0 items-center gap-2 xl:flex">
          <Link
            href="/"
            aria-label="Home"
            aria-current={pathname === "/" ? "page" : undefined}
            className={`grid h-10 w-10 shrink-0 place-items-center rounded-full transition-all duration-200 ${
              pathname === "/"
                ? "bg-violet text-white shadow-soft"
                : "border border-charcoal/10 text-charcoal/75 hover:border-violet/30 hover:text-violet"
            }`}
          >
            <svg className="h-[18px] w-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="M3 10.5 12 3l9 7.5" />
              <path d="M5 9.5V20h14V9.5" />
            </svg>
          </Link>

          <div className="flex items-center rounded-full border border-charcoal/10 bg-white/60 px-1.5 py-1">
          {NAV.filter((i) => !i.highlight).map((item) => (
            <NavPill key={item.label} item={item} pathname={pathname} />
          ))}
          </div>

          {/* Highlighted sections sit outside the capsule as their own pill */}
          {NAV.filter((i) => i.highlight).map((item) => (
            <NavPill key={item.label} item={item} pathname={pathname} standalone />
          ))}
        </nav>

        <div className="hidden flex-1 items-center justify-end gap-2 xl:flex">
          <ThemeToggle />
          <Link href="/contact" className="btn-primary">
            Contact
          </Link>
          <SearchTrigger onClick={() => setSearchOpen(true)} />
        </div>

        {/* Mobile actions */}
        <div className="flex flex-1 items-center justify-end gap-1 xl:hidden">
          <ThemeToggle className="!h-9 !w-9" />
          <button
            onClick={() => setSearchOpen(true)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl text-charcoal"
            aria-label="Search"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="7" /><path d="m20 20-3-3" strokeLinecap="round" /></svg>
          </button>
          <button
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl text-charcoal"
            aria-label="Toggle menu"
          >
          <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open ? <path d="M6 6 18 18M6 18 18 6" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="border-t border-charcoal/10 bg-white xl:hidden">
          <nav className="container-x max-h-[78vh] space-y-1 overflow-y-auto py-4">
            {NAV.map((item) => (
              <div key={item.label} className="border-b border-charcoal/[0.06] last:border-0">
                {item.children?.length || item.groups?.length ? (
                  <>
                    <button
                      onClick={() => setOpenSub((s) => (s === item.label ? null : item.label))}
                      className="flex w-full items-center justify-between py-3 text-left text-base font-semibold text-charcoal"
                    >
                      <span className={item.highlight ? "animate-blink" : undefined}>
                        {item.label}
                      </span>
                      <svg className={`h-4 w-4 transition-transform ${openSub === item.label ? "rotate-180" : ""}`} viewBox="0 0 12 12" fill="none"><path d="M3 4.5 6 7.5 9 4.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg>
                    </button>
                    {openSub === item.label && item.groups?.length ? (
                      <div className="space-y-4 pb-4 pl-1">
                        {item.groups.map((g) => (
                          <div key={g.label}>
                            <Link
                              href={g.href}
                              className="flex items-center gap-2.5 rounded-xl px-2 py-2 text-sm font-bold text-charcoal"
                            >
                              <span className="grid h-7 w-7 shrink-0 place-items-center rounded-xl bg-violet/10 text-violet">
                                <Icon name={g.icon} className="h-4 w-4" />
                              </span>
                              {g.label}
                            </Link>
                            <ul className="ml-[18px] border-l border-violet/15 pl-4">
                              {g.items.map((s) => {
                                const subActive = pathname === s.href;
                                return (
                                  <li key={s.href}>
                                    <Link
                                      href={s.href}
                                      aria-current={subActive ? "page" : undefined}
                                      className={`block rounded-xl px-2 py-1.5 text-sm ${
                                        subActive
                                          ? "font-semibold text-violet"
                                          : "text-charcoal/75 hover:text-violet"
                                      }`}
                                    >
                                      {s.label}
                                    </Link>
                                  </li>
                                );
                              })}
                            </ul>
                          </div>
                        ))}
                      </div>
                    ) : null}
                    {openSub === item.label && item.children?.length && (
                      <div className="space-y-1 pb-3 pl-1">
                        {item.children.map((c) => {
                          const childActive = pathname === c.href;
                          return (
                          <Link
                            key={c.label}
                            href={c.href}
                            aria-current={childActive ? "page" : undefined}
                            className={`flex items-center gap-2.5 rounded-xl px-2 py-2 text-sm ${
                              childActive ? "bg-violet/5 font-semibold text-violet" : "text-charcoal/75 hover:bg-violet/5 hover:text-violet"
                            }`}
                          >
                            <span className={`grid h-7 w-7 shrink-0 place-items-center rounded-xl ${
                              childActive ? "bg-violet text-white" : "bg-violet/10 text-violet"
                            }`}>
                              <Icon name={c.icon} className="h-4 w-4" />
                            </span>
                            {c.label}
                          </Link>
                          );
                        })}
                      </div>
                    )}
                  </>
                ) : (
                  <Link href={item.href} className="block py-3 text-base font-semibold text-charcoal hover:text-violet">
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            <div className="flex flex-col gap-3 pt-4">
              <a href={SITE.phoneHref} className="btn-outline w-full">Call Us</a>
              <Link href="/contact" className="btn-primary w-full">Contact</Link>
            </div>
          </nav>
        </div>
      )}

      <SearchModal open={searchOpen} onClose={() => setSearchOpen(false)} />
    </header>
  );
}
