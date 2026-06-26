"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { SERVICES, PRODUCTS, INDUSTRIES } from "@/lib/content";
import { POSTS } from "@/lib/blog";
import { SITE } from "@/lib/site";

type Cta = { label: string; href: string; external?: boolean };
type ListItem = { label: string; sub?: string };
type Reply = { text: string; options?: string[]; cta?: Cta; list?: ListItem[] };
type Msg = { role: "bot" | "user"; text: string; options?: string[]; cta?: Cta; list?: ListItem[]; time: string };

const GREETING: Reply = {
  text: "Hi! 👋 I'm Vega, the Vegavat assistant. What can I help you with today?",
  options: ["Explore services", "See products", "Industries", "Read the blog", "Get a free quote", "Talk to a human"],
};

const OPTION_ICONS: Record<string, string> = {
  "Explore services": "🛠️",
  "See products": "📦",
  Industries: "🏭",
  "Read the blog": "📰",
  "Get a free quote": "💬",
  "Talk to a human": "🧑‍💼",
};

// Turn site paths the AI mentions (e.g. /services, /contact) into clickable links.
const PATH_RE = /(\/(?:services|products|industries|process|blog|contact|privacy|terms)[a-zA-Z0-9/_-]*)/g;
const isPath = (s: string) => /^\/(?:services|products|industries|process|blog|contact|privacy|terms)/.test(s);
function renderText(text: string, onNavigate: () => void) {
  return text.split(PATH_RE).map((part, i) =>
    isPath(part) ? (
      <Link key={i} href={part} onClick={onNavigate} className="font-semibold text-violet underline underline-offset-2">{part}</Link>
    ) : (
      <span key={i}>{part}</span>
    )
  );
}

function reply(input: string): Reply {
  const t = input.trim().toLowerCase();

  // natural small talk, so greetings feel like a real person, not a menu
  if (/^(hi+|hey+|hello+|hii+|yo|hiya|namaste|hola|sup|howdy|good\s*(morning|afternoon|evening|day))[\s!.,]*$/.test(t))
    return { text: "Hi there! 👋 What can I help you with today?", options: ["Explore services", "See products", "Industries", "Get a free quote"] };
  if (/(how are you|how's it going|how are u|how r u|what's up|whats up)/.test(t))
    return { text: "Doing great, thanks for asking! 😊 What can I help you with today?", options: ["Explore services", "See products", "Talk to a human"] };
  if (/(thank|thanks|thx|^ty\b|appreciate)/.test(t))
    return { text: "You're welcome! 🙌 Anything else I can help you with?", options: ["Explore services", "See products", "Talk to a human"] };
  if (/^(bye|goodbye|see ya|see you|cya|that'?s all|nothing|no thanks)[\s!.]*$/.test(t))
    return { text: "Thanks for stopping by! Reach out anytime, have a great day. 👋", options: ["Get a free quote", "Talk to a human"] };
  if (/^(who are you|what are you|your name)/.test(t))
    return { text: "I'm Vega, the Vegavat assistant 🤖. I can guide you through our services, products and industries, or connect you with the team.", options: ["Explore services", "See products", "Talk to a human"] };

  // exact item match → short info + "know more"
  const service = SERVICES.find((s) => s.title.toLowerCase() === t);
  if (service) return { text: `${service.title} — ${service.short}`, cta: { label: `Know more about ${service.title}`, href: `/services/${service.slug}` }, options: ["Explore services", "Get a free quote", "Talk to a human"] };

  const product = PRODUCTS.find((p) => p.name.toLowerCase() === t);
  if (product) return { text: `${product.name} — ${product.short}. ${product.intro}`, cta: { label: `Know more about ${product.name}`, href: `/products/${product.id}` }, options: ["See products", "Get a free quote", "Talk to a human"] };

  const industry = INDUSTRIES.find((i) => i.name.toLowerCase() === t);
  if (industry) return { text: `${industry.name} — ${industry.desc}`, cta: { label: `Know more about ${industry.name}`, href: `/industries/${industry.id}` }, options: ["Industries", "Get a free quote", "Talk to a human"] };

  const post = POSTS.find((p) => p.title.toLowerCase() === t);
  if (post) return { text: `${post.title} — ${post.excerpt}`, cta: { label: "Read the article", href: `/blog/${post.slug}` }, options: ["Read the blog", "Talk to a human"] };

  // category listings
  if (t.includes("service"))
    return { text: "Here's everything we build, tap a service to learn more:", list: SERVICES.map((s) => ({ label: s.title, sub: s.short })), options: ["See products", "Industries", "Talk to a human"] };
  if (t.includes("product") || t.includes("crm") || t.includes("erp") || t.includes("hrms") || t.includes("saas"))
    return { text: "Our ready-to-deploy platforms, pick one for the details:", list: PRODUCTS.map((p) => ({ label: p.name, sub: p.short })), options: ["Explore services", "Get a free quote"] };
  if (t.includes("industr"))
    return { text: "Industries we serve, tap one to see how we help:", list: INDUSTRIES.map((i) => ({ label: i.name, sub: i.desc })), options: ["Explore services", "Talk to a human"] };
  if (t.includes("blog") || t.includes("article") || t.includes("post"))
    return { text: "Fresh from our blog, tap one to read:", list: POSTS.slice(0, 6).map((p) => ({ label: p.title, sub: p.category })), options: ["Explore services", "Talk to a human"] };

  if (t.includes("quote") || t.includes("price") || t.includes("cost") || t.includes("budget"))
    return { text: "Happy to help! Share your requirements and we'll send a tailored estimate within 24 hours, no obligation.", cta: { label: "Get a free quote", href: "/contact" }, options: ["Talk to a human"] };
  if (t.includes("human") || t.includes("talk") || t.includes("agent") || t.includes("contact") || t.includes("call"))
    return { text: "You're connected! Reach our team on WhatsApp for a quick chat, or send your details and we'll get right back to you.", cta: { label: "Chat on WhatsApp", href: SITE.whatsappHref, external: true }, options: ["Get a free quote"] };

  return { text: "Got it! I can walk you through our services, products, industries or blog, or connect you with the team. What would you like?", options: ["Explore services", "See products", "Industries", "Talk to a human"] };
}

const now = () => new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [opened, setOpened] = useState(false);
  const [teaser, setTeaser] = useState(false);
  const [msgs, setMsgs] = useState<Msg[]>([]);
  const [typing, setTyping] = useState(false);
  const [text, setText] = useState("");
  const endRef = useRef<HTMLDivElement>(null);
  const teaserDone = useRef(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const launcherRef = useRef<HTMLButtonElement>(null);

  // Close the panel when clicking outside it (but not on the launcher).
  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      const t = e.target as Node;
      if (
        panelRef.current && !panelRef.current.contains(t) &&
        launcherRef.current && !launcherRef.current.contains(t)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, [open]);

  useEffect(() => {
    if (teaserDone.current) return;
    const t = window.setTimeout(() => {
      teaserDone.current = true;
      setTeaser((prev) => (open ? prev : true));
    }, 4500);
    return () => window.clearTimeout(t);
  }, [open]);

  useEffect(() => {
    if (open && msgs.length === 0) {
      setMsgs([{ role: "bot", text: GREETING.text, options: GREETING.options, time: now() }]);
    }
  }, [open, msgs.length]);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [msgs, typing]);

  const openChat = () => { setOpen(true); setOpened(true); setTeaser(false); };

  // Scripted, instant reply, used for quick-reply chips and list items (navigation).
  const sendOption = (value: string) => {
    const v = value.trim();
    if (!v) return;
    setText("");
    setMsgs((m) => [...m, { role: "user", text: v, time: now() }]);
    setTyping(true);
    window.setTimeout(() => {
      const r = reply(v);
      setMsgs((m) => [...m, { role: "bot", text: r.text, options: r.options, cta: r.cta, list: r.list, time: now() }]);
      setTyping(false);
    }, 450);
  };

  // Free-text input answered by the scripted brain (static site, no server).
  const sendUser = (value: string) => {
    const v = value.trim();
    if (!v) return;
    setText("");

    const scripted = reply(v);
    if (scripted.list || scripted.cta) {
      sendOption(v);
      return;
    }

    setMsgs((m) => [...m, { role: "user", text: v, time: now() }]);
    setTyping(true);
    setTimeout(() => {
      const r = reply(v);
      setMsgs((m) => [...m, { role: "bot", text: r.text, options: r.options, cta: r.cta, list: r.list, time: now() }]);
      setTyping(false);
    }, 450);
  };

  const lastBot = [...msgs].reverse().find((m) => m.role === "bot");
  const quickOptions = !typing && lastBot?.options ? lastBot.options : [];

  return (
    <>
      {/* proactive teaser */}
      <AnimatePresence>
        {teaser && !open && (
          <motion.button
            initial={{ opacity: 0, y: 12, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.9 }}
            onClick={openChat}
            className="fixed bottom-[5.5rem] right-6 z-50 flex max-w-[230px] items-start gap-2.5 rounded-2xl rounded-br-sm border border-charcoal/10 bg-white px-4 py-3 text-left shadow-soft"
          >
            <span className="text-lg">👋</span>
            <span className="text-xs font-medium leading-snug text-charcoal/75">Hi there! Looking for something? I can help, ask me anything.</span>
            <span onClick={(e) => { e.stopPropagation(); setTeaser(false); }} className="absolute -right-2 -top-2 grid h-5 w-5 place-items-center rounded-full bg-charcoal text-white">
              <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"><path d="M6 6l12 12M18 6 6 18" /></svg>
            </span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* launcher */}
      <motion.button
        ref={launcherRef}
        onClick={() => (open ? setOpen(false) : openChat())}
        aria-label={open ? "Close chat" : "Open chat"}
        animate={open ? {} : { y: [0, -5, 0] }}
        transition={open ? {} : { duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="group fixed bottom-6 right-6 z-50 grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-violet to-violet-700 text-white shadow-glow"
      >
        {!open && <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-violet/40" />}
        {!open && !opened && <span className="absolute -right-0.5 -top-0.5 grid h-5 w-5 place-items-center rounded-full bg-[#34E0F0] text-[10px] font-bold text-charcoal ring-2 ring-white">1</span>}
        <AnimatePresence mode="wait" initial={false}>
          {open ? (
            <motion.svg key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><path d="M6 6l12 12M18 6 6 18" /></motion.svg>
          ) : (
            <motion.svg key="c" initial={{ scale: 0.6, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.6, opacity: 0 }} className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.5 8.5 0 0 1-12.3 7.6L3 21l1.9-5.7A8.5 8.5 0 1 1 21 11.5z" /><path d="M8.5 11.5h.01M12 11.5h.01M15.5 11.5h.01" /></motion.svg>
          )}
        </AnimatePresence>
      </motion.button>

      {/* panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            ref={panelRef}
            initial={{ opacity: 0, y: 24, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 320, damping: 26 }}
            style={{ transformOrigin: "bottom right" }}
            className="fixed bottom-24 right-6 z-50 flex h-[540px] max-h-[calc(100vh-7rem)] w-[374px] max-w-[calc(100vw-2rem)] flex-col overflow-hidden rounded-2xl border border-violet/20 bg-white shadow-[0_24px_70px_-20px_rgba(98,0,234,0.45)]"
          >
            {/* header */}
            <div className="relative overflow-hidden bg-gradient-to-r from-violet via-violet-600 to-violet-800 px-4 py-4 text-white">
              <div className="pointer-events-none absolute inset-0 bg-grid-violet bg-[size:26px_26px] opacity-30" />
              <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 animate-orb-2 rounded-full bg-[#34E0F0]/30 blur-2xl" />
              <div className="relative flex items-center gap-3">
                <span className="relative grid h-10 w-10 place-items-center rounded-full bg-white/15 text-lg ring-1 ring-white/25">
                  🤖
                  <motion.span className="absolute inset-0 rounded-full border border-white/40" animate={{ scale: [1, 1.25, 1], opacity: [0.6, 0, 0.6] }} transition={{ duration: 2.4, repeat: Infinity }} />
                </span>
                <div className="flex-1">
                  <p className="text-sm font-bold leading-tight">Vega Assistant</p>
                  <p className="flex items-center gap-1.5 text-[11px] text-white/80"><span className="h-1.5 w-1.5 rounded-full bg-green-400 shadow-[0_0_6px_#4ade80]" />Online, replies instantly</p>
                </div>
                <button onClick={() => setOpen(false)} aria-label="Close chat" className="rounded-full p-1.5 transition-colors hover:bg-white/15">
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><path d="M6 6l12 12M18 6 6 18" /></svg>
                </button>
              </div>
            </div>

            {/* messages */}
            <div className="flex-1 space-y-3 overflow-y-auto bg-charcoal-50/40 p-4">
              {msgs.map((m, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className={`flex flex-col ${m.role === "user" ? "items-end" : "items-start"}`}>
                  <div className={`max-w-[82%] whitespace-pre-wrap rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${m.role === "user" ? "rounded-br-sm bg-violet text-white" : "rounded-bl-sm border border-charcoal/[0.07] bg-white text-charcoal/80 shadow-sm"}`}>
                    {m.role === "bot" ? renderText(m.text, () => setOpen(false)) : m.text}
                    {m.cta && (
                      m.cta.external ? (
                        <a href={m.cta.href} target="_blank" rel="noopener noreferrer" className="mt-2 inline-flex items-center gap-1 rounded-lg bg-violet/10 px-3 py-1.5 text-xs font-bold text-violet transition-colors hover:bg-violet hover:text-white">{m.cta.label} →</a>
                      ) : (
                        <Link href={m.cta.href} onClick={() => setOpen(false)} className="mt-2 inline-flex items-center gap-1 rounded-lg bg-violet/10 px-3 py-1.5 text-xs font-bold text-violet transition-colors hover:bg-violet hover:text-white">{m.cta.label} →</Link>
                      )
                    )}
                  </div>

                  {/* selectable list (services / products / industries / blog) */}
                  {m.list && (
                    <div className="mt-2 w-[88%] space-y-1.5">
                      {m.list.map((it, k) => (
                        <motion.button
                          key={it.label}
                          initial={{ opacity: 0, x: -8 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: Math.min(k * 0.03, 0.3) }}
                          onClick={() => sendOption(it.label)}
                          className="group flex w-full items-center gap-2 rounded-xl border border-charcoal/[0.08] bg-white px-3 py-2 text-left shadow-sm transition-all hover:-translate-y-0.5 hover:border-violet/40 hover:shadow-card"
                        >
                          <span className="min-w-0 flex-1">
                            <span className="block truncate text-[13px] font-bold text-charcoal">{it.label}</span>
                            {it.sub && <span className="block truncate text-[11px] text-charcoal/50">{it.sub}</span>}
                          </span>
                          <span className="shrink-0 text-violet transition-transform group-hover:translate-x-0.5">→</span>
                        </motion.button>
                      ))}
                    </div>
                  )}

                  <span className="mt-1 px-1 text-[10px] text-charcoal/35">{m.time}</span>
                </motion.div>
              ))}

              {typing && (
                <div className="flex justify-start">
                  <div className="flex gap-1 rounded-2xl rounded-bl-sm border border-charcoal/[0.07] bg-white px-3.5 py-3 shadow-sm">
                    {[0, 0.15, 0.3].map((d) => (
                      <motion.span key={d} className="h-1.5 w-1.5 rounded-full bg-violet/40" animate={{ y: [0, -4, 0] }} transition={{ duration: 0.7, repeat: Infinity, delay: d }} />
                    ))}
                  </div>
                </div>
              )}
              <div ref={endRef} />
            </div>

            {/* quick replies */}
            {quickOptions.length > 0 && (
              <div className="flex flex-wrap gap-2 border-t border-charcoal/[0.07] bg-white px-3 pt-3">
                {quickOptions.map((o, i) => (
                  <motion.button key={o} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }} onClick={() => sendOption(o)} className="flex items-center gap-1.5 rounded-full border border-violet/30 bg-violet/[0.06] px-3 py-1.5 text-xs font-semibold text-violet transition-colors hover:bg-violet hover:text-white">
                    {OPTION_ICONS[o] && <span>{OPTION_ICONS[o]}</span>}
                    {o}
                  </motion.button>
                ))}
              </div>
            )}

            {/* input */}
            <form onSubmit={(e) => { e.preventDefault(); sendUser(text); }} className="border-t border-charcoal/[0.07] bg-white p-3">
              <div className="flex items-center gap-2">
                <input value={text} onChange={(e) => setText(e.target.value)} placeholder="Say something…" className="w-full rounded-full border border-charcoal/15 bg-charcoal-50/50 px-4 py-2.5 text-sm focus:border-violet focus:outline-none focus:ring-2 focus:ring-violet/20" />
                <button type="submit" aria-label="Send" disabled={!text.trim()} className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-violet text-white transition-all hover:bg-violet-600 hover:shadow-glow disabled:opacity-40">
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 2 11 13M22 2l-7 20-4-9-9-4z" /></svg>
                </button>
              </div>
              <p className="mt-2 text-center text-[10px] text-charcoal/35">⚡ Powered by Vega AI · we reply within 24h</p>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
