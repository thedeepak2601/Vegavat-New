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
