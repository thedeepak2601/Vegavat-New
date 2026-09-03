"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import calendlyQr from "@/assets/images/QR Code-calendly.com_contact-vegavat_30min_r=qr.png";

const CALENDLY_URL = "https://calendly.com/contact-vegavat/30min";

export default function InquiryModalButton({
  label = "Request a Demo",
  className,
  showArrow = false,
}: {
  label?: string;
  className?: string;
  showArrow?: boolean;
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={className}
      >
        {label}
        {showArrow ? " →" : null}
      </button>

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
                  className="rounded-full p-2 text-charcoal/60 transition hover:bg-violet/5 hover:text-violet"
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
                      <div className="rounded-xl border border-violet/10 bg-white p-1.5 shadow-card">
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
                          stroke="url(#inquiryQrArrowGradient)"
                          strokeWidth="6"
                          strokeLinecap="round"
                        />
                        <path
                          d="M18 22L5 33L20 43"
                          fill="none"
                          stroke="url(#inquiryQrArrowGradient)"
                          strokeWidth="6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <defs>
                          <linearGradient id="inquiryQrArrowGradient" x1="74" y1="8" x2="5" y2="43" gradientUnits="userSpaceOnUse">
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
    </>
  );
}
