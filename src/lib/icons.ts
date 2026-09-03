/**
 * Slug → SVG icon name, shared by the nav, the index pages and every detail
 * page. The SERVICES/PRODUCTS data carries an emoji too, but emoji render
 * differently on every OS and don't match the rest of the interface, so the
 * SVG set is the single source of truth for iconography.
 */
export const SERVICE_ICONS: Record<string, string> = {
  "ai-development": "ai",
  "mobile-app-development": "mobile",
  "web-development": "web",
  "ui-ux-design": "design",
  "graphic-design": "image",
  "cloud-enablement": "cloud",
  devsecops: "devops",
  "cyber-security": "shield",
  "erp-implementation": "rocket",
  "erp-migration": "sync",
  "erp-customization": "wrench",
  "erp-audit-recovery": "audit",
  "annual-support-amc": "helpdesk",
  "whatsapp-automation": "chat",
  "it-consulting": "users",
  "dedicated-hiring": "hiring",
  "agile-development": "sync",
  "kanban-workflow": "projects",
};

export const PRODUCT_ICONS: Record<string, string> = {
  crm: "crm",
  hrms: "hrms",
  erp: "erp",
  inventory: "inventory",
  finance: "finance",
  projects: "projects",
  helpdesk: "helpdesk",
  maintenance: "wrench",
  lms: "lms",
  saas: "cloud",
  marketing: "chat",
  procurement: "ecommerce",
};

export const INDUSTRY_ICONS: Record<string, string> = {
  manufacturing: "factory",
  trading: "logistics",
  consulting: "saas",
  healthcare: "healthcare",
  retail: "ecommerce",
  education: "education",
  realestate: "building",
  "it-software": "web",
  logistics: "logistics",
};
