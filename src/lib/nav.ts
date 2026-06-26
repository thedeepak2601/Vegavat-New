export type NavChild = {
  label: string;
  href: string;
  desc?: string;
  icon?: string;
};

export type NavItem = {
  label: string;
  href: string;
  children?: NavChild[];
  featured?: { title: string; desc: string; href: string; image: string };
};

export const NAV: NavItem[] = [
  { label: "Home", href: "/" },
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
  { label: "Process", href: "/process" },
  { label: "Blog", href: "/blog" },
];
