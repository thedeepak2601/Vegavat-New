"use client";

import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

const services = [
  "Mobile App Development",
  "Web Development",
  "UI/UX Design",
  "Graphic Design",
  "AI Software Development",
  "Dedicated Hiring",
  "Other",
];

// EmailJS configuration. IDs come from your EmailJS dashboard; the public key
// must be supplied via .env.local (NEXT_PUBLIC_EMAILJS_PUBLIC_KEY).
const EMAILJS = {
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_zdu39qy",
  templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_ie1tk0p",
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "",
};

type Status = "idle" | "sending" | "error";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  service: "",
  message: "",
};

export default function ContactForm({ compact = false }: { compact?: boolean } = {}) {
  // Initialize EmailJS with the public key once on the client.
  useEffect(() => {
    if (!EMAILJS.publicKey) return;
    try {
      // @ts-ignore
      emailjs.init(EMAILJS.publicKey);
    } catch (err) {
      // initialization errors will be surfaced during send
      // eslint-disable-next-line no-console
      console.warn("EmailJS init failed:", err);
    }
  }, []);
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState<Status>("idle");
  const [sent, setSent] = useState(false);
  const [lastError, setLastError] = useState<string | null>(null);

  const update =
    (key: keyof typeof initialForm) =>
      (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
        setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    const subject = form.service ? `${form.service} enquiry` : "Website Enquiry";

    // Send both flat keys ({{name}}) and a nested params object ({{params.name}})
    // so the EmailJS templates resolve no matter which style they reference.
    const fields = { ...form, Subject: subject };
    const templateParams = { ...fields, params: fields };

    try {
      // 1. Notification to the Vegavat inbox.
      // Pass the public key as the fourth argument (per @emailjs/browser API).
      await emailjs.send(EMAILJS.serviceId, EMAILJS.templateId, templateParams, EMAILJS.publicKey);

      // Note: auto-reply template removed. If you want to re-enable an
      // auto-reply to the customer, add a template ID and call emailjs.send()
      // here as a best-effort (non-blocking) operation.

      setForm(initialForm);
      setSent(true);
      setStatus("idle");
    } catch (err: any) {
      // Log the error for debugging and show an inline error message.
      // Keep status at "error" so the UI shows the failure but allows retry.
      // eslint-disable-next-line no-console
      console.error("Contact form send failed:", err);
      setLastError(err?.message ? String(err.message) : String(err));
      setStatus("error");
    }
  };

  if (sent) {
    return (
      <div className="rounded-2xl border border-violet/20 bg-violet/5 p-10 text-center">
        <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-violet text-2xl text-white">✓</div>
        <h3 className="mt-5 text-xl font-bold text-charcoal">Thank you!</h3>
        <p className="mt-2 text-sm text-charcoal/60">
          Your request has been received. Our team will get back to you with a free
          estimate within 24 hours.
        </p>
        <button onClick={() => setSent(false)} className="btn-outline mt-6">Send another message</button>
      </div>
    );
  }

  const sending = status === "sending";

  return (
    <form
      onSubmit={handleSubmit}
      className={`rounded-2xl border border-charcoal/[0.07] bg-white shadow-card ${compact ? "space-y-3 p-4 sm:p-5" : "space-y-5 p-7 sm:p-9"
        }`}
    >
      <div className={`grid sm:grid-cols-2 ${compact ? "gap-3" : "gap-5"}`}>
        <Field label="Full Name *">
          <input required value={form.name} onChange={update("name")} placeholder="Jane Doe" className={compact ? compactInputCls : inputCls} />
        </Field>
        <Field label="Email *">
          <input required type="email" value={form.email} onChange={update("email")} placeholder="jane@company.com" className={compact ? compactInputCls : inputCls} />
        </Field>
      </div>
      <div className={`grid sm:grid-cols-2 ${compact ? "gap-3" : "gap-5"}`}>
        <Field label="Phone">
          <input type="tel" value={form.phone} onChange={update("phone")} placeholder="+1 (555) 000-0000" className={compact ? compactInputCls : inputCls} />
        </Field>
        <Field label="Service Interested In">
          <select value={form.service} onChange={update("service")} className={compact ? compactInputCls : inputCls}>
            <option value="" disabled>Select a service</option>
            {services.map((s) => <option key={s}>{s}</option>)}
          </select>
        </Field>
      </div>
      <Field label="Project Details *">
        <textarea required rows={compact ? 3 : 5} value={form.message} onChange={update("message")} placeholder="Tell us about your project, goals and timeline…" className={compact ? compactInputCls : inputCls} />
      </Field>

      {status === "error" && (
        <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
          <p>Something went wrong while sending your message. Please try again or email us directly at contact.vegavat@gmail.com.</p>
          {lastError && (
            <details className="mt-2 text-xs text-red-700">
              <summary>Show error details</summary>
              <pre className="whitespace-pre-wrap">{lastError}</pre>
            </details>
          )}
        </div>
      )}

      <p className="text-xs text-charcoal/50">
        By submitting this form you agree to the processing of personal data according to our Privacy Policy.
        An NDA is available before any detailed discussion.
      </p>
      <button type="submit" disabled={sending} className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto">
        {sending ? "Sending…" : "Get Free Quote →"}
      </button>
    </form>
  );
}

const inputCls =
  "w-full rounded-xl border border-charcoal/15 px-4 py-3 text-sm text-charcoal placeholder:text-charcoal/40 focus:border-violet focus:outline-none focus:ring-2 focus:ring-violet/20";

const compactInputCls =
  "w-full rounded-lg border border-charcoal/15 px-3 py-2 text-sm text-charcoal placeholder:text-charcoal/40 focus:border-violet focus:outline-none focus:ring-2 focus:ring-violet/20";

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-charcoal/60">{label}</span>
      {children}
    </label>
  );
}
