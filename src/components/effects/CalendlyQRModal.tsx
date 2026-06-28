"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import calendlyQr from "@/assets/images/QR Code-calendly.com_contact-vegavat_30min_r=qr.png";

const CALENDLY_URL = "https://calendly.com/contact-vegavat/30min";

export default function CalendlyQRModal() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <motion.button
                onClick={() => setOpen(true)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Open appointment QR code"
                className="group fixed bottom-6 right-6 z-[90] inline-flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border border-white/15 bg-charcoal text-white shadow-[0_14px_34px_-12px_rgba(18,18,18,0.9)] ring-1 ring-violet/20 transition-all duration-300 hover:w-44 hover:justify-start hover:gap-3 hover:px-4 hover:shadow-glow"
            >
                <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M3 3h7v7H3V3zm2 2v3h3V5H5zm9-2h7v7h-7V3zm2 2v3h3V5h-3zM3 14h7v7H3v-7zm2 2v3h3v-3H5zm10-2h3v2h-3v-2zm-3 0h2v5h-2v-5zm6 3h3v4h-2v-2h-3v-2h2zm-3 2h2v2h-2v-2z" />
                </svg>
                <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-semibold leading-none opacity-0 transition-all duration-300 group-hover:max-w-[120px] group-hover:opacity-100">
                    Let's Connect
                </span>
            </motion.button>

            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setOpen(false)}
                        className="fixed inset-0 z-[60] flex items-center justify-center bg-charcoal/65 p-4 backdrop-blur-sm"
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                            className="relative w-full max-w-2xl overflow-hidden rounded-2xl border border-white/70 bg-white shadow-2xl"
                        >
                            <span className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-violet via-violet-400 to-[#34E0F0]" />
                            <button
                                onClick={() => setOpen(false)}
                                className="absolute right-4 top-4 rounded-full p-2 text-charcoal/55 transition-colors hover:bg-violet/5 hover:text-violet"
                                aria-label="Close modal"
                            >
                                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                                    <path d="M6 6l12 12M18 6 6 18" />
                                </svg>
                            </button>

                            <div className="grid items-center gap-6 px-6 pb-6 pt-12 sm:grid-cols-[170px_1fr] sm:px-8 sm:pt-10">
                                <div className="flex justify-center">
                                    <div className="rounded-2xl border border-violet/10 bg-violet/5 p-3 shadow-card">
                                        <Image
                                            src={calendlyQr}
                                            alt="Calendly appointment QR code"
                                            className="h-auto w-36 sm:w-40"
                                            priority
                                        />
                                    </div>
                                </div>
                                <div className="text-center sm:text-left">
                                    <span className="inline-flex rounded-full bg-violet/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-violet">
                                        Book a call
                                    </span>
                                    <h2 className="mt-3 text-2xl font-extrabold leading-tight text-charcoal sm:text-3xl">
                                        Scan to connect with Vegavat
                                    </h2>
                                    <p className="mt-3 text-sm leading-relaxed text-charcoal/60 sm:text-base">
                                        Use the QR code or book a 30-minute appointment directly with our team.
                                    </p>
                                </div>
                            </div>

                            <div className="border-t border-charcoal/10 bg-charcoal-50 px-6 py-5 text-center sm:px-8">
                                <a
                                    href={CALENDLY_URL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-primary btn-glow w-full sm:w-auto"
                                >
                                    Click Here to Book →
                                </a>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
