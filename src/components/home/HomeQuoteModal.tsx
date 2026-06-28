"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import calendlyQr from "@/assets/images/QR Code-calendly.com_contact-vegavat_30min_r=qr.png";

const CALENDLY_URL = "https://calendly.com/contact-vegavat/30min";

export default function HomeQuoteModal() {
  const [open, setOpen] = useState(false);

  return (
    <section className="relative overflow-hidden border-y border-violet/10 bg-gradient-to-br from-violet-50 via-white to-[#E6F7FB] py-10 sm:py-12">
      <div className="pointer-events-none absolute inset-0 bg-grid-violet bg-[size:34px_34px] opacity-70" />
      <div className="pointer-events-none absolute -left-16 top-1/2 h-52 w-52 -translate-y-1/2 rounded-full bg-violet/15 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-violet/10 to-transparent" />
      <div className="pointer-events-none absolute right-16 top-1/2 h-44 w-44 -translate-y-1/2 rounded-full bg-[#34E0F0]/25 blur-3xl" />
      <div className="container-x relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="max-w-none text-lg font-extrabold leading-snug text-charcoal sm:whitespace-nowrap sm:text-xl lg:text-2xl">
          Ask for a <span className="heading-gradient">Proposal</span> - fill out a simple form and we will get back to you
        </h2>
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="btn-primary btn-glow shrink-0"
        >
          Get Free Quote →
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-[70] flex items-center justify-center overflow-y-auto bg-charcoal/65 p-4 backdrop-blur-sm sm:p-6"
          >
            <motion.div
              initial={{ y: 16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 16, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-2xl border border-white/70 bg-white shadow-2xl"
            >
              <span className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-violet via-violet-400 to-[#34E0F0]" />
              <div className="flex items-center justify-between border-b border-charcoal/10 px-5 py-3 sm:px-6">
                <h3 className="text-xl font-extrabold text-charcoal sm:text-2xl">
                  Inquiry <span className="heading-gradient">Form</span>
                </h3>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Close inquiry form"
                  className="rounded-full p-2 text-charcoal/55 transition hover:bg-violet/5 hover:text-violet"
                >
                  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M6 6l12 12M18 6 6 18" />
                  </svg>
                </button>
              </div>

              <div className="p-4 sm:p-5">
                <ContactForm compact />
              </div>

              <div className="border-t border-charcoal/10 bg-charcoal-50 px-4 py-4 sm:px-6">
                <div className="grid items-center gap-4 sm:grid-cols-[172px_1fr_auto]">
                  <div className="flex justify-center sm:justify-start">
                    <div className="flex items-center gap-3">
                      <div className="rounded-lg border border-violet/10 bg-white p-1.5 shadow-card">
                        <Image
                          src={calendlyQr}
                          alt="Calendly appointment QR code"
                          className="h-auto w-24"
                        />
                      </div>
                      <svg
                        className="hidden h-12 w-16 shrink-0 text-violet sm:block"
                        viewBox="0 0 82 56"
                        fill="none"
                        aria-hidden="true"
                      >
                        <path
                          d="M74 8C56 32 34 39 14 35"
                          stroke="url(#qrArrowGradient)"
                          strokeWidth="6"
                          strokeLinecap="round"
                        />
                        <path
                          d="M18 22L5 33L20 43"
                          fill="none"
                          stroke="url(#qrArrowGradient)"
                          strokeWidth="6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <defs>
                          <linearGradient id="qrArrowGradient" x1="74" y1="8" x2="5" y2="43" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#34E0F0" />
                            <stop offset="1" stopColor="#6200EA" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                  </div>
                  <div className="text-center sm:text-left">
                    <p className="text-lg font-extrabold leading-tight text-charcoal sm:text-xl">
                      Prefer a quick call?
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-charcoal/60">
                      Scan the QR or{" "}
                      <a
                        href={CALENDLY_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold text-violet underline underline-offset-4 transition-colors hover:text-violet-700"
                      >
                        click here
                      </a>{" "}
                      to schedule a meeting and connect with us!
                    </p>
                  </div>
                  <a
                    href={CALENDLY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline whitespace-nowrap"
                  >
                    Book a Call →
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
