// Brand logos rendered via the Simple Icons CDN (https://cdn.simpleicons.org/<slug>),
// which returns each logo in its official brand color. BrandLogo falls back to a
// monogram chip if a slug ever fails to load.

// `src` overrides the CDN when a logo was removed from Simple Icons (AWS, Slack,
// Amazon…), those are served locally from /public/brands in full color.
export type Brand = { slug: string; name: string; src?: string };

// "Powered by an enterprise-grade open-source stack"
export const TECH_LOGOS: Brand[] = [
  { slug: "react", name: "React" },
  { slug: "typescript", name: "TypeScript" },
  { slug: "nextdotjs", name: "Next.js" },
  { slug: "tailwindcss", name: "Tailwind" },
  { slug: "vite", name: "Vite" },
  { slug: "python", name: "Python" },
  { slug: "nginx", name: "Nginx" },
  { slug: "docker", name: "Docker" },
  { slug: "kubernetes", name: "Kubernetes" },
  { slug: "aws", name: "AWS", src: "/brands/aws.svg" },
  { slug: "cloudflare", name: "Cloudflare" },
  { slug: "github", name: "GitHub" },
  { slug: "linux", name: "Linux" },
  { slug: "postgresql", name: "Postgres" },
  { slug: "mariadb", name: "MariaDB" },
  { slug: "redis", name: "Redis" },
  { slug: "frappe", name: "Frappe" },
  { slug: "erpnext", name: "ERPNext" },
];

// Orbiting integrations
export const INTEGRATIONS: Brand[] = [
  { slug: "slack", name: "Slack", src: "/brands/slack.svg" },
  { slug: "stripe", name: "Stripe", src: "/brands/stripe.svg" },
  { slug: "google", name: "Google", src: "/brands/google.svg" },
  { slug: "notion", name: "Notion" },
  { slug: "razorpay", name: "Razorpay" },
  { slug: "discord", name: "Discord", src: "/brands/discord.svg" },
  { slug: "shopify", name: "Shopify", src: "/brands/shopify.svg" },
  { slug: "amazon", name: "Amazon", src: "/brands/amazon.svg" },
  { slug: "fedex", name: "FedEx", src: "/brands/fedex.svg" },
  { slug: "dhl", name: "DHL" },
  { slug: "whatsapp", name: "WhatsApp", src: "/brands/whatsapp.svg" },
  { slug: "googlecloud", name: "Google Cloud", src: "/brands/googlecloud.svg" },
];

/**
 * Simple Icons slugs for the tech names used on service pages, where the
 * slug is not simply the lower-cased name. Anything absent falls back to
 * the normalised name, and `BrandLogo` shows a monogram chip if the CDN
 * has no such icon — which is the right outcome for the generic entries
 * ("Security", "Monitoring", "REST API") that have no brand at all.
 *
 * Verified against the CDN: the Adobe marks, Azure, OpenAI, Pinecone, Canva,
 * Twilio and Nmap have no Simple Icons entry, so they render as monograms.
 * Do not "fix" OpenAI with the `openaigym` slug — that is a different
 * project's logo.
 */
const TECH_SLUG_OVERRIDES: Record<string, string> = {
  "Next.js": "nextdotjs",
  "Node.js": "nodedotjs",
  "Tailwind CSS": "tailwindcss",
  "GCP": "googlecloud",
  "GitHub Actions": "githubactions",
  "Burp Suite": "burpsuite",
  "PostgreSQL": "postgresql",
  "REST API": "openapiinitiative",
  "WhatsApp Cloud API": "whatsapp",
};

/** Tech names that carry a local asset rather than a CDN icon. */
const TECH_LOCAL_SRC: Record<string, string> = {
  AWS: "/brands/aws.svg",
};

/** Resolve a display name from a service's `tech` list to a Brand. */
export function techBrand(name: string): Brand {
  return {
    name,
    slug:
      TECH_SLUG_OVERRIDES[name] ??
      name.toLowerCase().replace(/[^a-z0-9]/g, ""),
    src: TECH_LOCAL_SRC[name],
  };
}
