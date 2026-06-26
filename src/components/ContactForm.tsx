"use client";

import { useState } from "react";
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
  autoReplyTemplateId:
    process.env.NEXT_PUBLIC_EMAILJS_AUTOREPLY_TEMPLATE_ID || "template_i57bl0f",
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

export default function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState<Status>("idle");
  const [sent, setSent] = useState(false);

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
      await emailjs.send(EMAILJS.serviceId, EMAILJS.templateId, templateParams, {
        publicKey: EMAILJS.publicKey,
      });

      // 2. Auto-reply to the customer (best effort, does not block success).
      if (EMAILJS.autoReplyTemplateId) {
        emailjs
          .send(EMAILJS.serviceId, EMAILJS.autoReplyTemplateId, templateParams, {
            publicKey: EMAILJS.publicKey,
          })
          .catch(() => {});
      }

      setForm(initialForm);
      setSent(true);
      setStatus("idle");
    } catch {
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
      className="space-y-5 rounded-2xl border border-charcoal/[0.07] bg-white p-7 shadow-card sm:p-9"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full Name *">
          <input required value={form.name} onChange={update("name")} placeholder="Jane Doe" className={inputCls} />
        </Field>
        <Field label="Email *">
          <input required type="email" value={form.email} onChange={update("email")} placeholder="jane@company.com" className={inputCls} />
        </Field>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Phone">
          <input type="tel" value={form.phone} onChange={update("phone")} placeholder="+1 (555) 000-0000" className={inputCls} />
        </Field>
        <Field label="Service Interested In">
          <select value={form.service} onChange={update("service")} className={inputCls}>
            <option value="" disabled>Select a service</option>
            {services.map((s) => <option key={s}>{s}</option>)}
          </select>
        </Field>
      </div>
      <Field label="Project Details *">
        <textarea required rows={5} value={form.message} onChange={update("message")} placeholder="Tell us about your project, goals and timeline…" className={inputCls} />
      </Field>

      {status === "error" && (
        <p className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
          Something went wrong while sending your message. Please try again or email us directly at contact.vegavat@gmail.com.
        </p>
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

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-charcoal/60">{label}</span>
      {children}
    </label>
  );
}
