import emailjs from "@emailjs/browser";
import { SITE } from "@/lib/site";

// Same EmailJS service the contact form uses. Subscriptions fall back to the
// contact template, but set NEXT_PUBLIC_EMAILJS_SUBSCRIBE_TEMPLATE_ID to point
// them at a dedicated template with subscription-appropriate wording.
const EMAILJS = {
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_zdu39qy",
  templateId:
    process.env.NEXT_PUBLIC_EMAILJS_SUBSCRIBE_TEMPLATE_ID ||
    process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ||
    "template_ie1tk0p",
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "",
};

/**
 * Best-effort display name from an address: the local part up to the first dot,
 * with any +tag stripped, capitalised for use in a greeting.
 *
 *   deepak.aaa65@gmail.com → "Deepak"
 *   priya+news@work.com    → "Priya"
 *   hello@company.com      → "Hello"
 */
export function nameFromEmail(email: string) {
  const local = (email.split("@")[0] || "").trim();
  const first = local.split("+")[0].split(".")[0].trim();
  if (!first) return "there";
  return first.charAt(0).toUpperCase() + first.slice(1);
}

/**
 * Tells the Vegavat inbox that someone subscribed.
 *
 * Fields are sent both flat ({{email}}) and nested ({{params.email}}) so the
 * template resolves either style. The actual recipient is whatever the EmailJS
 * template has configured as its "To" address; `to_email` is passed for
 * templates that use a dynamic one.
 */
export async function subscribe(email: string) {
  const fields = {
    name: nameFromEmail(email),
    email,
    phone: "—",
    service: "Newsletter Subscription",
    message:
      `${email} subscribed from the homepage hero. ` +
      `They want notifications for the latest updates, LinkedIn posts and new announcements.`,
    to_email: SITE.email,
    Subject: "New newsletter subscription",
  };

  await emailjs.send(
    EMAILJS.serviceId,
    EMAILJS.templateId,
    { ...fields, params: fields },
    EMAILJS.publicKey
  );
}
