export type NavChild = {
  label: string;
  href: string;
  desc?: string;
  icon?: string;
};

/** A column in a grouped mega menu: a heading link plus its sub-links. */
export type NavGroup = {
  label: string;
  href: string;
  icon?: string;
  items: { label: string; href: string; desc?: string; icon?: string }[];
};

export type NavItem = {
  label: string;
  href: string;
  children?: NavChild[];
  /** When set, the dropdown renders as grouped columns instead of a card grid. */
  groups?: NavGroup[];
  featured?: { title: string; desc: string; href: string; image: string };
  /** Overrides the mega-menu footer button. Defaults to "Get Started". */
  cta?: { label: string; href: string };
  /** Draws attention to a newly launched section (shimmering label). */
  highlight?: boolean;
};

// "Home" is intentionally absent — the logo links there.
export const NAV: NavItem[] = [
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "AI Software Development", href: "/services/ai-development", desc: "We build practical AI applications, copilots...", icon: "ai" },
      { label: "Mobile App Development", href: "/services/mobile-app-development", desc: "Native and cross-platform mobile apps for customers...", icon: "mobile" },
      { label: "Cyber Security", href: "/services/cyber-security", desc: "Security audits, infrastructure hardening...", icon: "shield" },
      { label: "Cloud Enablement", href: "/services/cloud-enablement", desc: "Cloud architecture, seamless migration...", icon: "cloud" },
      { label: "WhatsApp Automation", href: "/services/whatsapp-automation", desc: "Automated WhatsApp notifications, conversation...", icon: "chat" },
      { label: "DevSecOps", href: "/services/devsecops", desc: "CI/CD pipelines, secure automated deployments...", icon: "devops" },
      { label: "IT Consulting Services", href: "/services/it-consulting", desc: "Strategic technology consulting, digital...", icon: "users" },
      { label: "ERP Implementation", href: "/services/erp-implementation", desc: "Full-cycle ERP implementation from...", icon: "rocket" },
      { label: "ERP Migration", href: "/services/erp-migration", desc: "Seamless, zero-data-loss transition from legacy...", icon: "sync" },
      { label: "ERP Customization & Integration", href: "/services/erp-customization", desc: "Engineering custom modules, complex...", icon: "wrench" },
      { label: "Annual Support & AMC", href: "/services/annual-support-amc", desc: "Priority technical support, regular health audits, bug...", icon: "helpdesk" },
      { label: "ERP Audit & Recovery", href: "/services/erp-audit-recovery", desc: "Deep-dive audits to rescue failing implementations...", icon: "audit" },
    ],
    featured: {
      title: "Our core services",
      desc: "From concept to launch, design, build, test and scale your digital products with one trusted partner.",
      href: "/services",
      image:
        "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=900&q=80",
    },
  },
  {
    label: "Industries",
    href: "/industries",
    children: [
      { label: "Manufacturing", href: "/industries/manufacturing", desc: "From raw materials procurement to finished...", icon: "factory" },
      { label: "Trading & Distribution", href: "/industries/trading", desc: "Complete visibility across your complex trading...", icon: "logistics" },
      { label: "Services & Consulting", href: "/industries/consulting", desc: "A unified platform for consulting firms, agencies...", icon: "saas" },
      { label: "Healthcare", href: "/industries/healthcare", desc: "From electronic patient records and appointment...", icon: "healthcare" },
      { label: "Retail & E-commerce", href: "/industries/retail", desc: "Bridge the gap between your physical storefronts and...", icon: "ecommerce" },
      { label: "Education", href: "/industries/education", desc: "A complete Campus Management System. Fro...", icon: "education" },
      { label: "Real Estate & Construction", href: "/industries/realestate", desc: "Built for developers and builders to track land bank...", icon: "building" },
      { label: "IT & Software Services", href: "/industries/it-software", desc: "Specifically designed for high-growth IT companies...", icon: "web" },
      { label: "Logistics & Supply Chain", href: "/industries/logistics", desc: "Unify your fleet management, warehouse...", icon: "logistics" },
    ],
  },
  {
    label: "Products",
    href: "/products",
    children: [
      { label: "Enterprise CRM", href: "/products/crm", desc: "Omnichannel leads & pipelines.", icon: "crm" },
      { label: "HRMS & Payroll", href: "/products/hrms", desc: "Full employee lifecycle.", icon: "hrms" },
      { label: "Comprehensive ERP", href: "/products/erp", desc: "One source of truth.", icon: "erp" },
      { label: "Advanced Inventory", href: "/products/inventory", desc: "Multi-warehouse tracking.", icon: "inventory" },
      { label: "Finance & Accounting", href: "/products/finance", desc: "Automated ledgers & GST.", icon: "finance" },
      { label: "Project Management", href: "/products/projects", desc: "Plan, track, profit.", icon: "projects" },
      { label: "Customer Helpdesk", href: "/products/helpdesk", desc: "Omnichannel support & SLAs.", icon: "helpdesk" },
      { label: "Asset Maintenance", href: "/products/maintenance", desc: "Equipment, schedules & depreciation.", icon: "wrench" },
      { label: "Learning Portal (LMS)", href: "/products/lms", desc: "Training & certifications.", icon: "lms" },
      { label: "SaaS Platform", href: "/products/saas", desc: "Multi-tenant, subscriptions & billing.", icon: "cloud" },
      { label: "Marketing Automation", href: "/products/marketing", desc: "Campaigns, journeys & ROI.", icon: "chat" },
      { label: "Procurement & Purchase", href: "/products/procurement", desc: "Vendors, POs & spend control.", icon: "ecommerce" },
    ],
    featured: {
      title: "Ready-to-deploy products",
      desc: "Battle-tested business platforms you can launch fast and tailor to your operations.",
      href: "/products",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80",
    },
  },
  {
    label: "Financial Services",
    href: "/financial-services",
    highlight: true,
    cta: { label: "Call +91 88729 76232", href: "tel:+918872976232" },
    groups: [
      {
        label: "Income Tax",
        href: "/financial-services/income-tax",
        icon: "finance",
        items: [
          { label: "Registration", href: "/financial-services/income-tax/registration", desc: "PAN, TAN & portal setup", icon: "flag" },
          { label: "ITR Filing", href: "/financial-services/income-tax/itr-filing", desc: "All ITR forms, filed on time", icon: "audit" },
          { label: "Tax Planning", href: "/financial-services/income-tax/tax-planning", desc: "Regime choice & deductions", icon: "projects" },
          { label: "Tax Consultancy", href: "/financial-services/income-tax/tax-consultancy", desc: "Notices, TDS & advisory", icon: "users" },
        ],
      },
      {
        label: "GST",
        href: "/financial-services/gst",
        icon: "erp",
        items: [
          { label: "Registration", href: "/financial-services/gst/registration", desc: "GSTIN, amendments & composition", icon: "flag" },
          { label: "GST Filing", href: "/financial-services/gst/gst-filing", desc: "GSTR-1, 3B and annual returns", icon: "sync" },
          { label: "GST Consultancy", href: "/financial-services/gst/gst-consultancy", desc: "Rates, e-invoicing & notices", icon: "users" },
          { label: "Reconciliation", href: "/financial-services/gst/reconciliation", desc: "2B matching & audit support", icon: "audit" },
        ],
      },
      {
        label: "Accounting Services",
        href: "/financial-services/accounting-services",
        icon: "projects",
        items: [
          { label: "Financial Recording", href: "/financial-services/accounting-services/financial-recording", desc: "Day-to-day bookkeeping", icon: "finance" },
          { label: "Data Recording", href: "/financial-services/accounting-services/data-recording", desc: "Digitisation & document filing", icon: "inventory" },
          { label: "Accounts Management", href: "/financial-services/accounting-services/accounts-management", desc: "Reconciliation & monthly close", icon: "crm" },
          { label: "MIS & Reporting", href: "/financial-services/accounting-services/mis-reporting", desc: "P&L, balance sheet & cash flow", icon: "web" },
        ],
      },
    ],
    featured: {
      title: "Talk to a tax expert",
      desc: "Income tax, GST and accounting handled end to end. Call +91 88729 76232 for a free consultation.",
      href: "/financial-services",
      image:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=900&q=80",
    },
  },
  { label: "Process", href: "/process" },
  { label: "Blog", href: "/blog" },
];
