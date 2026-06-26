"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import Icon from "./Icon";
import SearchModal from "./SearchModal";
import SearchTrigger from "./SearchTrigger";
import { NAV } from "@/lib/nav";
import { SITE } from "@/lib/site";

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
      <div className="container-x flex h-[72px] items-center justify-between gap-6">
        <Logo header />

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {NAV.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            const hasMenu = !!item.children?.length;
            return (
              <div key={item.label} className="group relative">
                <Link
                  href={item.href}
                  className={`flex items-center gap-1 rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                    active
                      ? "text-violet"
                      : "text-charcoal/80 hover:text-violet"
                  }`}
                >
                  {item.label}
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
                    <div className="animate-menu-in relative w-[min(94vw,900px)] overflow-hidden rounded-2xl border border-charcoal/[0.08] bg-white shadow-soft">
                      {/* soft gradient wash */}
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-violet/[0.05] via-transparent to-[#34E0F0]/[0.05]" />
                      <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-violet/10 blur-3xl" />

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
                              <span className={`block text-[15px] font-bold leading-tight transition-colors group-hover/card:text-violet ${
                                childActive ? "text-violet" : "text-charcoal"
                              }`}>
                                {c.label}
                              </span>
                              {c.desc && (
                                <span className="mt-1 block text-xs leading-snug text-charcoal/55 line-clamp-2">
                                  {c.desc}
                                </span>
                              )}
                            </span>
                          </Link>
                          );
                        })}
                      </div>

                      {/* footer: View all + Get Started */}
                      <div className="relative flex items-center justify-between gap-4 border-t border-charcoal/[0.07] bg-charcoal-50/70 px-5 py-3.5">
                        <Link
                          href={item.href}
                          className="group/all inline-flex items-center gap-2 rounded-full border border-charcoal/15 bg-white px-4 py-2 text-xs font-bold uppercase tracking-wider text-charcoal/80 transition-colors hover:border-violet/40 hover:text-violet"
                        >
                          View all {item.label}
                          <span className="transition-transform group-hover/all:translate-x-0.5">→</span>
                        </Link>
                        <Link
                          href="/contact"
                          className="btn-glow inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet to-violet-700 px-5 py-2 text-xs font-bold uppercase tracking-wider text-white shadow-soft transition-all hover:shadow-glow"
                        >
                          Get Started →
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link href="/contact" className="btn-primary">
            Contact
          </Link>
          <SearchTrigger onClick={() => setSearchOpen(true)} />
        </div>

        {/* Mobile actions */}
        <div className="flex items-center gap-1 lg:hidden">
          <button
            onClick={() => setSearchOpen(true)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-charcoal"
            aria-label="Search"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="7" /><path d="m20 20-3-3" strokeLinecap="round" /></svg>
          </button>
          <button
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-charcoal"
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
        <div className="border-t border-charcoal/10 bg-white lg:hidden">
          <nav className="container-x max-h-[78vh] space-y-1 overflow-y-auto py-4">
            {NAV.map((item) => (
              <div key={item.label} className="border-b border-charcoal/[0.06] last:border-0">
                {item.children?.length ? (
                  <>
                    <button
                      onClick={() => setOpenSub((s) => (s === item.label ? null : item.label))}
                      className="flex w-full items-center justify-between py-3 text-left text-base font-semibold text-charcoal"
                    >
                      {item.label}
                      <svg className={`h-4 w-4 transition-transform ${openSub === item.label ? "rotate-180" : ""}`} viewBox="0 0 12 12" fill="none"><path d="M3 4.5 6 7.5 9 4.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg>
                    </button>
                    {openSub === item.label && (
                      <div className="space-y-1 pb-3 pl-1">
                        {item.children.map((c) => {
                          const childActive = pathname === c.href;
                          return (
                          <Link
                            key={c.label}
                            href={c.href}
                            aria-current={childActive ? "page" : undefined}
                            className={`flex items-center gap-2.5 rounded-lg px-2 py-2 text-sm ${
                              childActive ? "bg-violet/5 font-semibold text-violet" : "text-charcoal/70 hover:bg-violet/5 hover:text-violet"
                            }`}
                          >
                            <span className={`grid h-7 w-7 shrink-0 place-items-center rounded-lg ${
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
