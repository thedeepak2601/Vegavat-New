// ---------------------------------------------------------------------------
// Services
// ---------------------------------------------------------------------------
export type Service = {
  slug: string;
  icon: string;
  title: string;
  short: string;
  body: string;
  points?: string[];
  image: string;
};

export const SERVICES: Service[] = [
  {
    slug: "ai-development",
    icon: "🤖",
    title: "AI Software Development",
    short: "We build practical AI applications, copilots and agents.",
    body: "We build practical AI software, autonomous agents, copilots, Generative AI solutions and machine-learning models, and integrate them cleanly into your existing platforms and workflows. The goal is real business value: smarter products, faster teams and decisions backed by your own data.",
    points: [
      "Autonomous AI Agents & Copilots",
      "Generative AI Solutions",
      "Machine Learning Models",
      "LLM & API Integration",
      "Data Pipelines & RAG",
      "AI Strategy & Consulting",
    ],
    image:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=900&q=80",
  },
  {
    slug: "mobile-app-development",
    icon: "📱",
    title: "Mobile App Development",
    short: "Native and cross-platform mobile apps for customers.",
    body: "High-performance iOS and Android apps, native or cross-platform, that drive engagement and growth across every device. From strategy and design to development, testing and post-launch support, we own the full lifecycle.",
    points: [
      "iOS App Development",
      "Android App Development",
      "Cross-Platform (Flutter, React Native)",
      "Backend Integration & APIs",
      "App Testing & Deployment",
      "Maintenance & Support",
    ],
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=900&q=80",
  },
  {
    slug: "cyber-security",
    icon: "🛡️",
    title: "Cyber Security",
    short: "Security audits and infrastructure hardening.",
    body: "Protect your business with proactive security. We run audits, harden infrastructure, fix vulnerabilities and put monitoring in place so threats are caught early, keeping your data, users and reputation safe.",
    points: [
      "Security Audits & VAPT",
      "Infrastructure Hardening",
      "Vulnerability Management",
      "Compliance (ISO, SOC 2, GDPR)",
      "Identity & Access Management",
      "Incident Response & Monitoring",
    ],
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=900&q=80",
  },
  {
    slug: "cloud-enablement",
    icon: "☁️",
    title: "Cloud Enablement",
    short: "Cloud architecture and seamless migration.",
    body: "Move to the cloud with confidence. We design scalable architectures, migrate workloads with zero data loss and optimize cost and performance across AWS, Azure and GCP, so your infrastructure grows with you.",
    points: [
      "Cloud Architecture & Strategy",
      "Seamless Migration",
      "Cost & Performance Optimization",
      "Containerization (Docker, Kubernetes)",
      "Serverless & Auto-scaling",
      "Backup & Disaster Recovery",
    ],
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=900&q=80",
  },
  {
    slug: "whatsapp-automation",
    icon: "💬",
    title: "WhatsApp Automation",
    short: "Automated WhatsApp notifications and conversations.",
    body: "Reach customers where they already are. We build WhatsApp Business API integrations for automated notifications, two-way conversations, chatbots and broadcast campaigns, connected directly to your CRM and ERP.",
    points: [
      "WhatsApp Business API Setup",
      "Automated Notifications",
      "Conversational Chatbots",
      "Broadcast Campaigns",
      "CRM & ERP Integration",
      "Analytics & Reporting",
    ],
    image:
      "https://images.unsplash.com/photo-1611606063065-ee7946f0787a?auto=format&fit=crop&w=900&q=80",
  },
  {
    slug: "devsecops",
    icon: "🔀",
    title: "DevSecOps",
    short: "CI/CD pipelines and secure automated deployments.",
    body: "Ship faster and safer. We set up CI/CD pipelines, infrastructure-as-code and security baked into every stage of delivery, so releases are automated, repeatable and protected by default.",
    points: [
      "CI/CD Pipeline Setup",
      "Infrastructure as Code",
      "Automated Security Scanning",
      "Container Orchestration",
      "Monitoring & Observability",
      "Release Automation",
    ],
    image:
      "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?auto=format&fit=crop&w=900&q=80",
  },
  {
    slug: "it-consulting",
    icon: "🧭",
    title: "IT Consulting Services",
    short: "Strategic technology consulting and digital roadmaps.",
    body: "Make the right technology decisions. Our consultants assess your systems, define a digital roadmap and guide architecture, tooling and process choices that scale with your business goals.",
    points: [
      "Technology Assessment",
      "Digital Transformation Roadmap",
      "Architecture & Tech Selection",
      "Process Optimization",
      "Vendor & Tool Evaluation",
      "Ongoing Advisory",
    ],
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80",
  },
  {
    slug: "erp-implementation",
    icon: "🚀",
    title: "ERP Implementation",
    short: "Full-cycle ERP implementation from discovery to go-live.",
    body: "End-to-end ERP implementation tailored to how you actually work. From discovery and configuration to data migration, training and go-live, we deliver a single connected source of truth across your operations.",
    points: [
      "Requirement Discovery & Scoping",
      "Module Configuration",
      "Master Data Migration",
      "Workflow Automation",
      "User Training",
      "Go-Live & Hypercare",
    ],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80",
  },
  {
    slug: "erp-migration",
    icon: "🔄",
    title: "ERP Migration",
    short: "Seamless, zero-data-loss transition from legacy systems.",
    body: "Move off legacy or fragmented systems without the pain. We plan and execute a clean migration, data, workflows and integrations, with parallel runs and validation so nothing is lost in the move.",
    points: [
      "Legacy System Assessment",
      "Data Mapping & Cleansing",
      "Zero-Data-Loss Migration",
      "Parallel Run & Validation",
      "Integration Re-wiring",
      "Cutover & Support",
    ],
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=900&q=80",
  },
  {
    slug: "erp-customization",
    icon: "🔧",
    title: "ERP Customization & Integration",
    short: "Engineering custom modules and complex integrations.",
    body: "Make your ERP fit your business, not the other way around. We engineer custom modules, automate workflows and integrate third-party systems so your platform matches your exact operations.",
    points: [
      "Custom Module Development",
      "Workflow Automation",
      "Third-Party Integrations",
      "Custom Reports & Dashboards",
      "API Development",
      "Print & Document Formats",
    ],
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=900&q=80",
  },
  {
    slug: "annual-support-amc",
    icon: "🛟",
    title: "Annual Support & AMC",
    short: "Priority technical support, regular health audits and fixes.",
    body: "Keep your systems healthy year-round. Our Annual Maintenance Contracts cover priority support, regular health audits, bug fixes, updates and proactive monitoring, with fast, guaranteed response times.",
    points: [
      "Priority Technical Support",
      "Regular Health Audits",
      "Bug Fixes & Patches",
      "Performance Tuning",
      "Version Upgrades",
      "Proactive Monitoring",
    ],
    image:
      "https://images.unsplash.com/photo-1556745757-8d76bdb6984b?auto=format&fit=crop&w=900&q=80",
  },
  {
    slug: "erp-audit-recovery",
    icon: "🔍",
    title: "ERP Audit & Recovery",
    short: "Deep-dive audits to rescue failing implementations.",
    body: "Stuck with a failing or half-finished ERP? We run a deep-dive audit, identify what went wrong and build a recovery plan, fixing data, configuration and processes to get you back on track.",
    points: [
      "Implementation Health Audit",
      "Data Integrity Review",
      "Configuration Assessment",
      "Recovery Roadmap",
      "Re-implementation Support",
      "Process Re-alignment",
    ],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80",
  },
  {
    slug: "web-development",
    icon: "💻",
    title: "Web Development",
    short: "Fast, reliable websites and web applications.",
    body: "We build fast, secure and scalable websites and web applications that power modern businesses. From marketing sites to complex SaaS platforms, we pair clean architecture with great UX so your product performs and grows.",
    points: [
      "Frontend Development",
      "Backend Development",
      "Full-Stack Web Apps",
      "Frameworks & Libraries",
      "Content Management Systems",
      "Responsive Web Design",
    ],
    image:
      "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=900&q=80",
  },
  {
    slug: "ui-ux-design",
    icon: "🎨",
    title: "UI/UX Design",
    short: "Intuitive interfaces and seamless user experiences.",
    body: "We craft intuitive interfaces and seamless experiences for web, mobile and software. Blending visual craft with user-focused thinking, we design products that engage, convert and feel effortless to use.",
    points: [
      "User Research & Personas",
      "Wireframing & User Flows",
      "Interactive Prototypes",
      "Design Systems & Style Guides",
      "Usability Testing",
      "Responsive, Accessible Design",
    ],
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=900&q=80",
  },
  {
    slug: "graphic-design",
    icon: "🖼️",
    title: "Graphic Design",
    short: "Brand identity and compelling visual communication.",
    body: "We deliver compelling visual communication through brand identity, typography, illustration and strategic layouts that elevate visibility and make your business memorable across every touchpoint.",
    points: [
      "Logo & Brand Identity",
      "Marketing Creatives",
      "Social Media Graphics",
      "Illustrations & Icons",
      "Presentation Design",
      "Print & Packaging",
    ],
    image:
      "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=900&q=80",
  },
  {
    slug: "dedicated-hiring",
    icon: "👥",
    title: "Dedicated Hiring",
    short: "Scale your team with vetted, on-demand experts.",
    body: "Scale your team with dedicated developers and designers who plug in as an extension of your in-house team. Choose hourly, monthly or project-based engagements with full transparency on timelines and deliverables.",
    points: [
      "Hire Developers & Designers",
      "Flexible Engagement Models",
      "Seamless Team Integration",
      "Transparent Reporting",
      "Managed Onboarding",
      "Quality Control",
    ],
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=80",
  },
];

// Featured 6 used on the home "Core Services" grid
export const CORE_SERVICE_SLUGS = [
  "mobile-app-development",
  "web-development",
  "ui-ux-design",
  "graphic-design",
  "dedicated-hiring",
  "ai-development",
];

// A second hero image per service, deliberately different from each service's
// `image` so a service page never shows the same photo twice (hero vs overview).
export const SERVICE_HERO_IMAGES: Record<string, string> = {
  "ai-development": "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=900&q=80",
  "mobile-app-development": "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=900&q=80",
  "cyber-security": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80",
  "cloud-enablement": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80",
  "whatsapp-automation": "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=900&q=80",
  devsecops: "https://images.unsplash.com/photo-1531973576160-7125cd663d86?auto=format&fit=crop&w=900&q=80",
  "it-consulting": "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80",
  "erp-implementation": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80",
  "erp-migration": "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=900&q=80",
  "erp-customization": "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=900&q=80",
  "annual-support-amc": "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=900&q=80",
  "erp-audit-recovery": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80",
  "web-development": "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=900&q=80",
  "ui-ux-design": "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=900&q=80",
  "graphic-design": "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=900&q=80",
  "dedicated-hiring": "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80",
};

// ---------------------------------------------------------------------------
// Industries
// ---------------------------------------------------------------------------
export type Industry = {
  id: string;
  icon: string;
  name: string;
  desc: string;
  image: string;
  headline: string;
  intro: string;
  impact: string[];
  problems: string[];
  modules: string[];
};

export const INDUSTRIES: Industry[] = [
  {
    id: "manufacturing",
    icon: "🏭",
    name: "Manufacturing",
    desc: "From raw-material procurement to finished goods, production planning, BOM and shop-floor control.",
    image: "/industries/manufacturing.jpeg",
    headline: "Transform manufacturing operations with smart ERP automation",
    intro: "From procurement and production planning to quality control and inventory management, our Manufacturing ERP solution helps businesses increase efficiency, reduce wastage and gain complete shop-floor visibility.",
    impact: [
      "40% reduction in production delays",
      "30% lower inventory holding costs",
      "Real-time production monitoring",
      "Improved quality compliance",
    ],
    problems: [
      "Production planning bottlenecks",
      "Material shortages",
      "Quality control challenges",
      "Inventory inaccuracies",
      "Equipment downtime tracking",
    ],
    modules: [
      "Production Planning",
      "BOM Management",
      "Quality Control",
      "Inventory Management",
      "Procurement",
      "Maintenance Tracking",
    ],
  },
  {
    id: "trading",
    icon: "🚛",
    name: "Trading & Distribution",
    desc: "Complete visibility across your complex trading, stock and distribution operations.",
    image: "/industries/trading.jpeg",
    headline: "Gain complete visibility across your distribution network",
    intro: "Manage purchasing, warehousing, inventory movement, sales operations and distribution channels from a single integrated platform.",
    impact: [
      "Faster order fulfillment",
      "Real-time stock visibility",
      "Reduced stock-outs",
      "Improved vendor management",
    ],
    problems: [
      "Inventory mismatches",
      "Delayed deliveries",
      "Multiple warehouse complexities",
      "Manual stock reconciliation",
      "Supply chain visibility gaps",
    ],
    modules: [
      "Multi-Warehouse Management",
      "Inventory Control",
      "Sales Management",
      "Procurement",
      "Logistics Tracking",
      "Demand Forecasting",
    ],
  },
  {
    id: "consulting",
    icon: "💼",
    name: "Services & Consulting",
    desc: "A unified platform for consulting firms, agencies and professional-services teams.",
    image: "/industries/consulting.jpeg",
    headline: "Manage projects, resources and clients from one platform",
    intro: "A complete solution for consulting firms, agencies and professional service providers to streamline project delivery and maximize billable utilization.",
    impact: [
      "Increased billable hours",
      "Better project profitability",
      "Faster client invoicing",
      "Resource optimization",
    ],
    problems: [
      "Resource allocation issues",
      "Missed project deadlines",
      "Revenue leakage",
      "Time tracking challenges",
      "Complex billing cycles",
    ],
    modules: [
      "Project Management",
      "Resource Planning",
      "Timesheets",
      "CRM",
      "Billing & Invoicing",
      "Performance Analytics",
    ],
  },
  {
    id: "healthcare",
    icon: "🏥",
    name: "Healthcare",
    desc: "From electronic patient records and appointments to billing and compliance.",
    image: "/industries/healthcare.jpeg",
    headline: "Digitize patient care and hospital operations",
    intro: "Manage patient records, appointments, billing, pharmacy operations and healthcare compliance through a secure, centralized system.",
    impact: [
      "Faster patient registration",
      "Improved patient experience",
      "Reduced paperwork",
      "Better compliance management",
    ],
    problems: [
      "Fragmented patient records",
      "Appointment scheduling issues",
      "Billing inefficiencies",
      "Compliance risks",
      "Resource utilization tracking",
    ],
    modules: [
      "Electronic Health Records",
      "Appointment Scheduling",
      "Pharmacy Management",
      "Billing",
      "Staff Management",
      "Compliance Reporting",
    ],
  },
  {
    id: "retail",
    icon: "🛍️",
    name: "Retail & E-commerce",
    desc: "Bridge the gap between your physical storefronts and online channels.",
    image: "/industries/retail.jpeg",
    headline: "Unify online and offline retail operations",
    intro: "Manage inventory, orders, POS, customers and suppliers seamlessly across physical stores and e-commerce channels.",
    impact: [
      "Omnichannel visibility",
      "Faster order processing",
      "Improved customer experience",
      "Accurate inventory tracking",
    ],
    problems: [
      "Inventory discrepancies",
      "Order fulfillment delays",
      "Multi-channel management complexity",
      "Customer retention challenges",
      "Pricing inconsistencies",
    ],
    modules: [
      "POS System",
      "Inventory Management",
      "Customer Loyalty",
      "E-Commerce Integration",
      "Order Management",
      "Supplier Management",
    ],
  },
  {
    id: "education",
    icon: "🎓",
    name: "Education",
    desc: "A complete campus-management system, from admissions to results and fees.",
    image: "/industries/education.jpeg",
    headline: "Streamline academic and administrative operations",
    intro: "A complete Campus Management System for admissions, student lifecycle management, fee collection, examinations, HR and communication.",
    impact: [
      "95% faster fee collection",
      "Paperless admissions",
      "Better parent engagement",
      "Automated academic processes",
    ],
    problems: [
      "Manual admissions and paperwork",
      "Fee collection delays",
      "Scattered student records",
      "Limited parent communication",
      "Exam and result bottlenecks",
    ],
    modules: [
      "Student Information System",
      "Admissions",
      "Fee Management",
      "Attendance",
      "Examination Management",
      "Faculty HR & Payroll",
    ],
  },
  {
    id: "realestate",
    icon: "🏢",
    name: "Real Estate & Construction",
    desc: "Built for developers and builders to track land banks, projects and sales.",
    image: "/industries/realestate.jpeg",
    headline: "Manage projects, properties and construction lifecycles",
    intro: "Track land acquisition, project execution, procurement, contractor management, budgets and property sales in one platform.",
    impact: [
      "Better project visibility",
      "Reduced cost overruns",
      "Faster approvals",
      "Improved contractor coordination",
    ],
    problems: [
      "Budget tracking difficulties",
      "Delayed project updates",
      "Procurement inefficiencies",
      "Contractor management issues",
      "Compliance documentation",
    ],
    modules: [
      "Project Management",
      "Procurement",
      "Contractor Management",
      "Budget Control",
      "Asset Tracking",
      "Sales & CRM",
    ],
  },
  {
    id: "it-software",
    icon: "💻",
    name: "IT & Software Services",
    desc: "Specifically designed for high-growth IT companies, projects, billing and resourcing.",
    image: "/industries/it-software.jpeg",
    headline: "Scale your technology business efficiently",
    intro: "Purpose-built for software companies, startups, SaaS providers and IT service organizations managing projects, teams and recurring revenue.",
    impact: [
      "Improved team productivity",
      "Better project delivery",
      "Enhanced customer support",
      "Increased profitability",
    ],
    problems: [
      "Resource and bench mismanagement",
      "Project delivery delays",
      "Revenue leakage on billing",
      "Scattered client communication",
      "Recurring revenue tracking",
    ],
    modules: [
      "Agile Project Management",
      "Resource Allocation",
      "Helpdesk",
      "CRM",
      "Subscription Billing",
      "Performance Analytics",
    ],
  },
  {
    id: "logistics",
    icon: "🚚",
    name: "Logistics & Supply Chain",
    desc: "Unify your fleet management, warehouse and last-mile delivery operations.",
    image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&w=800&q=80",
    headline: "Optimize fleet, warehousing and supply chain operations",
    intro: "Track shipments, warehouses, inventory, fleet operations, vendors and logistics performance from a centralized platform.",
    impact: [
      "Reduced transportation costs",
      "Improved delivery accuracy",
      "Real-time fleet visibility",
      "Better warehouse utilization",
    ],
    problems: [
      "Route inefficiencies",
      "Shipment tracking issues",
      "Warehouse bottlenecks",
      "Fleet maintenance challenges",
      "Inventory visibility gaps",
    ],
    modules: [
      "Fleet Management",
      "Warehouse Management",
      "Shipment Tracking",
      "Route Optimization",
      "Vendor Management",
      "Supply Chain Analytics",
    ],
  },
];

// A separate, topical image for each industry's "Problems We Solve" section,
// so it never repeats the hero photo on the same page.
export const INDUSTRY_PROBLEM_IMAGES: Record<string, string> = {
  manufacturing: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80",
  trading: "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=800&q=80",
  consulting: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
  healthcare: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80",
  retail: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80",
  education: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80",
  realestate: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80",
  "it-software": "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80",
  logistics: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=800&q=80",
};

// ---------------------------------------------------------------------------
// Process
// ---------------------------------------------------------------------------
export const PROCESS_STEPS = [
  { n: "01", title: "Planning & Discovery", desc: "We understand your goals, target users and requirements, including competitor research, feature prioritization and scope definition before development begins." },
  { n: "02", title: "Product Roadmap", desc: "A detailed roadmap with milestones, features and timelines. This guides the MVP launch and ensures development moves in the right direction from day one." },
  { n: "03", title: "UI/UX Design", desc: "Designers create wireframes, user flows and interactive Figma prototypes. You see exactly how the product looks and feels before code is written." },
  { n: "04", title: "Development", desc: "Development runs in Agile sprints. You receive regular builds for review, features are tested and refined incrementally, not at the end." },
  { n: "05", title: "Testing & QA", desc: "Functional, performance, UI and security testing across devices and OS versions. Issues are fixed before they ever reach your users." },
  { n: "06", title: "Deployment & Support", desc: "We publish to the App Store and Google Play, then continue with post-launch monitoring, updates and ongoing maintenance." },
];

export type Methodology = {
  slug: string;
  title: string;
  desc: string;
  steps: { title: string; desc: string }[];
};

export const METHODOLOGIES: Methodology[] = [
  {
    slug: "agile-development",
    title: "Agile Development",
    desc: "We organize work into short, focused phases for structured yet adaptable progress. Each phase undergoes thorough review to enable early improvements and maintain precise alignment with your goals.",
    steps: [
      { title: "Sprint Planning", desc: "We define clear goals and scope for each short, focused sprint, so every cycle moves the product forward with purpose." },
      { title: "Build & Iterate", desc: "Features are developed incrementally with working builds each cycle, never saved up for one risky push at the end." },
      { title: "Review & Demo", desc: "Every sprint ends with a demo so you give feedback early and we validate progress against your goals." },
      { title: "Retrospective & Refine", desc: "We capture learnings after each sprint and feed them straight into the next, improving with every cycle." },
    ],
  },
  {
    slug: "kanban-workflow",
    title: "Kanban Workflow",
    desc: "Kanban visualizes tasks moving through a clear, transparent board from start to finish. Teams gain full visibility, cut delays, spot bottlenecks instantly and prioritize dynamically.",
    steps: [
      { title: "Visualize the Board", desc: "Every task is mapped across clear stages, from backlog to done, giving the whole team full visibility at a glance." },
      { title: "Limit Work in Progress", desc: "We cap how many tasks are active at once, keeping flow steady and the team focused on finishing, not just starting." },
      { title: "Manage the Flow", desc: "We track how work moves through the board, spotting bottlenecks instantly and unblocking them before they cause delays." },
      { title: "Continuously Improve", desc: "Board metrics guide dynamic prioritization, so the process keeps getting faster and smoother over time." },
    ],
  },
];

// ---------------------------------------------------------------------------
// Products
// ---------------------------------------------------------------------------
export type Product = {
  id: string;
  icon: string;
  name: string;
  short: string;
  desc: string;
  image: string;
  tagline: string;
  intro: string;
  benefits: { value: string; label: string }[];
  features: { title: string; desc: string }[];
};

export const PRODUCTS: Product[] = [
  {
    id: "crm",
    icon: "📈",
    name: "Enterprise CRM",
    short: "Leads & pipelines",
    desc: "Manage omnichannel leads, complex sales pipelines, quotations and sales team performance in one connected interface.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80",
    tagline: "Close more deals, chase fewer leads",
    intro: "One intelligent workspace for your entire revenue team, from the first inquiry to the signed contract and the renewal after that.",
    benefits: [
      { value: "3.2×", label: "Revenue growth in year one" },
      { value: "47%", label: "Faster lead response time" },
      { value: "34%", label: "Higher win rate" },
    ],
    features: [
      { title: "Omnichannel Lead Capture", desc: "Web, WhatsApp, email and ad leads land in one inbox, deduplicated and scored." },
      { title: "Visual Sales Pipeline", desc: "Drag-and-drop stages, weighted forecasting and deal-rot alerts." },
      { title: "AI Lead Scoring", desc: "Rank every lead so reps focus on the deals most likely to close." },
      { title: "Sales Automation", desc: "Trigger follow-ups, auto-assign by territory and escalate stale deals." },
      { title: "Quotes & e-Signatures", desc: "Branded proposals and e-signatures that push to your ERP on approval." },
      { title: "Revenue Analytics", desc: "Win-rate trends, rep leaderboards and forecast accuracy at a glance." },
    ],
  },
  {
    id: "hrms",
    icon: "🧑‍💼",
    name: "HRMS & Payroll",
    short: "Employee lifecycle",
    desc: "Digitize the entire employee lifecycle, from onboarding and attendance to automated payroll and performance reviews.",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80",
    tagline: "Your whole team, one HR system",
    intro: "Run the complete employee journey, hiring, onboarding, attendance, payroll and reviews, without spreadsheets or guesswork.",
    benefits: [
      { value: "90%", label: "Less manual payroll work" },
      { value: "100%", label: "Statutory compliance" },
      { value: "5×", label: "Faster onboarding" },
    ],
    features: [
      { title: "Onboarding & Records", desc: "Digital onboarding with a single profile for every employee." },
      { title: "Attendance & Leave", desc: "Biometric, geo and app attendance with automated leave rules." },
      { title: "Automated Payroll", desc: "Salary, PF, ESI, TDS and payslips processed in one click." },
      { title: "Performance Reviews", desc: "Goals, OKRs and 360° appraisals with clear scorecards." },
      { title: "Self-Service Portal", desc: "Employees manage leave, claims and documents themselves." },
      { title: "Compliance & Reports", desc: "Statutory filings and HR analytics ready when you need them." },
    ],
  },
  {
    id: "erp",
    icon: "🏗️",
    name: "Comprehensive ERP",
    short: "One source of truth",
    desc: "The ultimate connected foundation unifying finance, inventory, purchase, sales and manufacturing into one single source of truth.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80",
    tagline: "Run your whole business on one platform",
    intro: "Unify finance, inventory, purchase, sales and production so every department works from the same real-time data.",
    benefits: [
      { value: "1", label: "Single source of truth" },
      { value: "30%", label: "Lower operating cost" },
      { value: "Real-time", label: "Cross-department visibility" },
    ],
    features: [
      { title: "Finance & Accounting", desc: "Ledgers, GST, payables and receivables, fully connected." },
      { title: "Inventory & Purchase", desc: "Stock, procurement and supplier management in sync." },
      { title: "Sales & CRM", desc: "Quotes to orders to invoices, with no re-entry." },
      { title: "Manufacturing", desc: "BOM, work orders and production planning built in." },
      { title: "Custom Workflows", desc: "Automate approvals and processes to match how you work." },
      { title: "Dashboards & Reports", desc: "Live KPIs across every function in one place." },
    ],
  },
  {
    id: "inventory",
    icon: "📦",
    name: "Advanced Inventory",
    short: "Multi-warehouse",
    desc: "Track stock across infinite warehouses, manage batches, serial numbers, reorder levels and real-time valuation.",
    image: "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=900&q=80",
    tagline: "Know exactly what you have, everywhere",
    intro: "Real-time stock visibility across every warehouse, with batch, serial and expiry tracking and automatic reordering.",
    benefits: [
      { value: "99.5%", label: "Inventory accuracy" },
      { value: "25%", label: "Lower holding costs" },
      { value: "0", label: "Surprise stock-outs" },
    ],
    features: [
      { title: "Multi-Warehouse", desc: "Track stock across unlimited locations in real time." },
      { title: "Batch & Serial", desc: "Full traceability with batch, serial and expiry tracking." },
      { title: "Reorder Automation", desc: "Auto reorder points and purchase suggestions." },
      { title: "Stock Valuation", desc: "FIFO, moving average and real-time valuation." },
      { title: "Barcode & Scanning", desc: "Fast, error-free picking, packing and stock-takes." },
      { title: "Transfers & Audits", desc: "Inter-warehouse transfers with full audit trails." },
    ],
  },
  {
    id: "finance",
    icon: "💰",
    name: "Finance & Accounting",
    short: "Ledgers & GST",
    desc: "Automate complex invoices, multi-currency ledgers, GST workflows, asset depreciation and rapid month-end closing.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=900&q=80",
    tagline: "Books that close themselves",
    intro: "Automate invoicing, ledgers, GST and reconciliation so month-end takes hours, not weeks, and the numbers are always right.",
    benefits: [
      { value: "80%", label: "Faster month-end close" },
      { value: "100%", label: "GST-compliant" },
      { value: "Zero", label: "Reconciliation backlog" },
    ],
    features: [
      { title: "Smart Invoicing", desc: "Recurring, multi-currency invoices with auto reminders." },
      { title: "GST & Compliance", desc: "GST-ready filings, e-invoicing and e-way bills." },
      { title: "Bank Reconciliation", desc: "Auto-match transactions and clear books fast." },
      { title: "Asset Depreciation", desc: "Track assets and post depreciation automatically." },
      { title: "Multi-Currency Ledgers", desc: "Real-time exchange handling across entities." },
      { title: "Financial Reports", desc: "P&L, balance sheet and cash flow on demand." },
    ],
  },
  {
    id: "projects",
    icon: "📋",
    name: "Project Management",
    short: "Plan, track, profit",
    desc: "Plan complex projects, allocate resources, track billable timesheets, control budgets and measure true profitability.",
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=900&q=80",
    tagline: "Deliver projects on time and on budget",
    intro: "Plan work, allocate the right people, track billable time and watch real-time profitability on every project.",
    benefits: [
      { value: "20%", label: "Higher project margins" },
      { value: "95%", label: "On-time delivery" },
      { value: "Live", label: "Budget vs actuals" },
    ],
    features: [
      { title: "Planning & Gantt", desc: "Tasks, milestones and dependencies on a visual timeline." },
      { title: "Resource Allocation", desc: "Assign the right people and avoid over-booking." },
      { title: "Billable Timesheets", desc: "Capture time and convert it straight to invoices." },
      { title: "Budget Control", desc: "Track budget vs actuals in real time." },
      { title: "Profitability", desc: "See true margin per project, client and team." },
      { title: "Collaboration", desc: "Comments, files and updates in one shared space." },
    ],
  },
  {
    id: "helpdesk",
    icon: "🎧",
    name: "Customer Helpdesk",
    short: "Omnichannel & SLAs",
    desc: "Manage omnichannel support tickets, enforce SLAs, automate escalations and delight customers with rapid resolution.",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=900&q=80",
    tagline: "Support that customers actually love",
    intro: "Bring every support channel into one queue, enforce SLAs, automate escalations and resolve issues faster.",
    benefits: [
      { value: "60%", label: "Faster resolution" },
      { value: "4.8/5", label: "Customer satisfaction" },
      { value: "24/7", label: "Automated triage" },
    ],
    features: [
      { title: "Omnichannel Inbox", desc: "Email, WhatsApp, chat and calls in one ticket queue." },
      { title: "SLA Management", desc: "Track and enforce response and resolution targets." },
      { title: "Automation & Escalation", desc: "Auto-route, assign and escalate stuck tickets." },
      { title: "Knowledge Base", desc: "Self-serve help that deflects repeat questions." },
      { title: "CSAT & Feedback", desc: "Measure satisfaction after every resolution." },
      { title: "Support Analytics", desc: "Volumes, response times and agent performance." },
    ],
  },
  {
    id: "maintenance",
    icon: "🛠️",
    name: "Asset Maintenance",
    short: "Equipment & depreciation",
    desc: "Track every piece of equipment, manage preventative maintenance schedules and calculate automated depreciation.",
    image: "https://images.unsplash.com/photo-1556745757-8d76bdb6984b?auto=format&fit=crop&w=900&q=80",
    tagline: "Keep every asset running",
    intro: "Track equipment, schedule preventive maintenance and cut downtime, with automated depreciation built in.",
    benefits: [
      { value: "40%", label: "Less unplanned downtime" },
      { value: "100%", label: "Asset visibility" },
      { value: "Auto", label: "Depreciation posting" },
    ],
    features: [
      { title: "Asset Register", desc: "A complete record of every asset and its history." },
      { title: "Preventive Maintenance", desc: "Schedule and automate recurring service jobs." },
      { title: "Work Orders", desc: "Raise, assign and track maintenance requests." },
      { title: "Downtime Tracking", desc: "Log breakdowns and analyze reliability." },
      { title: "Depreciation", desc: "Automated depreciation and asset valuation." },
      { title: "Spare Parts", desc: "Link inventory so parts are always on hand." },
    ],
  },
  {
    id: "lms",
    icon: "🎓",
    name: "Learning Portal (LMS)",
    short: "Training & certs",
    desc: "Empower your workforce with a centralized learning management system for training, certifications and knowledge sharing.",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=900&q=80",
    tagline: "Upskill your whole organization",
    intro: "Deliver training, track progress and certify your people with a centralized, engaging learning platform.",
    benefits: [
      { value: "3×", label: "Higher course completion" },
      { value: "100%", label: "Trackable certifications" },
      { value: "Anywhere", label: "Mobile-first learning" },
    ],
    features: [
      { title: "Course Builder", desc: "Create courses with video, quizzes and documents." },
      { title: "Learning Paths", desc: "Role-based paths that guide each learner." },
      { title: "Assessments", desc: "Quizzes, exams and auto-graded scoring." },
      { title: "Certifications", desc: "Issue and track certificates and renewals." },
      { title: "Progress Tracking", desc: "See completion and scores across teams." },
      { title: "Mobile Learning", desc: "Learn on any device, online or offline." },
    ],
  },
  {
    id: "saas",
    icon: "☁️",
    name: "SaaS Platform",
    short: "Multi-tenant & billing",
    desc: "Launch your own multi-tenant SaaS product with subscriptions, billing, role-based access, usage analytics and self-serve onboarding built in from day one.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80",
    tagline: "Launch your SaaS, faster",
    intro: "Everything you need to ship a multi-tenant SaaS, subscriptions, billing, roles and analytics, ready on day one.",
    benefits: [
      { value: "Weeks", label: "From idea to launch" },
      { value: "Multi-tenant", label: "Secure by design" },
      { value: "Self-serve", label: "Onboarding & billing" },
    ],
    features: [
      { title: "Multi-Tenancy", desc: "Isolated, secure workspaces for every customer." },
      { title: "Subscriptions & Billing", desc: "Plans, trials, proration and invoices out of the box." },
      { title: "Role-Based Access", desc: "Granular permissions and team management." },
      { title: "Self-Serve Onboarding", desc: "Sign-up, setup and upgrade without your team." },
      { title: "Usage Analytics", desc: "Track adoption, churn and revenue in real time." },
      { title: "API & Integrations", desc: "Open APIs and webhooks to extend anything." },
    ],
  },
  {
    id: "marketing",
    icon: "📣",
    name: "Marketing Automation",
    short: "Campaigns & journeys",
    desc: "Run multichannel campaigns, nurture leads with automated journeys and measure marketing ROI, all connected to your CRM.",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=900&q=80",
    tagline: "Turn audiences into pipeline",
    intro: "Plan, automate and measure every campaign, email, WhatsApp, SMS and social, with journeys that nurture leads straight into your CRM.",
    benefits: [
      { value: "5×", label: "More qualified leads" },
      { value: "40%", label: "Higher email engagement" },
      { value: "Full", label: "Campaign ROI tracking" },
    ],
    features: [
      { title: "Campaign Builder", desc: "Design email, WhatsApp, SMS and social campaigns in minutes." },
      { title: "Automated Journeys", desc: "Drag-and-drop drip flows triggered by behavior." },
      { title: "Audience Segmentation", desc: "Target the right people with dynamic segments." },
      { title: "Landing Pages & Forms", desc: "Capture leads with built-in pages and forms." },
      { title: "Lead Nurturing", desc: "Score and hand off sales-ready leads to your CRM." },
      { title: "Marketing Analytics", desc: "Track opens, clicks, conversions and true ROI." },
    ],
  },
  {
    id: "procurement",
    icon: "🛒",
    name: "Procurement & Purchase",
    short: "Vendors & purchase orders",
    desc: "Streamline purchase requests, approvals, vendor management and purchase orders with full spend visibility and control.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=900&q=80",
    tagline: "Control every rupee you spend",
    intro: "From purchase request to approval, PO and receipt, manage the whole procurement cycle with full spend visibility and vendor control.",
    benefits: [
      { value: "30%", label: "Lower procurement cost" },
      { value: "100%", label: "Approval compliance" },
      { value: "Live", label: "Spend visibility" },
    ],
    features: [
      { title: "Purchase Requests", desc: "Raise and route requests with multi-level approvals." },
      { title: "Vendor Management", desc: "Centralize vendors, rates, terms and performance." },
      { title: "Purchase Orders", desc: "Generate, send and track POs to delivery." },
      { title: "RFQs & Comparison", desc: "Compare quotes side by side and pick the best." },
      { title: "Goods Receipt", desc: "Match receipts to POs and invoices automatically." },
      { title: "Spend Analytics", desc: "See spend by vendor, category and department." },
    ],
  },
];

// ---------------------------------------------------------------------------
// Portfolio
// ---------------------------------------------------------------------------
export const PORTFOLIO = [
  { tag: "Mobile App Development", title: "Tourism Social App", desc: "A dynamic way to record travel journeys across 193 countries, with an intuitive interface to document every trip and personalize each adventure.", image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=800&q=80" },
  { tag: "Mobile App Development", title: "Truck Tracking App", desc: "Built for Eco Waste Management drivers to manage daily tasks, access job details, view assigned routes and stay updated in real time.", image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=800&q=80" },
  { tag: "Web Development", title: "Crypto Fantasy Game", desc: "An exhilarating crypto investment game where the lines between fantasy and reality blur in a vibrant world of digital wealth.", image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?auto=format&fit=crop&w=800&q=80" },
  { tag: "Mobile App Development", title: "Mileage App", desc: "A free programme to simplify logging vehicle business mileage, eliminating paper logbooks with just a few taps.", image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=800&q=80" },
  { tag: "UI/UX Design", title: "Golf Mobile App", desc: "Invites golfers of all skill levels to join a community that celebrates the game, tracks scores and connects players.", image: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?auto=format&fit=crop&w=800&q=80" },
  { tag: "Graphics Design", title: "Restaurant Review App", desc: "Designed to simplify restaurant management and enhance the customer dining and review experience.", image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80" },
];

// ---------------------------------------------------------------------------
// Technologies
// ---------------------------------------------------------------------------
export const TECH_STACK = [
  { group: "Mobile", items: ["Flutter", "React Native", "Swift (iOS)", "Kotlin", "Java"] },
  { group: "Frontend", items: ["React", "Next.js", "Vue.js", "TypeScript", "Tailwind CSS"] },
  { group: "Backend & API", items: ["Node.js", "Laravel", "PHP", "Firebase", "Python"] },
  { group: "Cloud & Database", items: ["AWS", "MySQL", "MongoDB", "PostgreSQL", "Docker"] },
];

// ---------------------------------------------------------------------------
// Testimonials
// ---------------------------------------------------------------------------
export const TESTIMONIALS = [
  { name: "Cameron Shaw", role: "Startup Founder", quote: "Right from the start, Vegavat left me with a great impression, genuine interest in my project and a desire to understand it. I'm constantly surprised at their eagerness to deliver on expectations. I really enjoyed the team dynamics, work ethics and honesty." },
  { name: "Jennifer Adams", role: "Sydney Adult Speech Pathology", quote: "Vegavat has produced the finest of services since day one, web design, ongoing maintenance, letterhead and business cards. No request was too small and the work was prompt every time. Very reasonably priced. Highly recommend!" },
  { name: "Tracey Hayim", role: "Metamorphosis Design", quote: "Their eye for detail is just what you need to create an impressive website. They follow a creative brief really well and their understanding of a responsive, up-to-date website is brilliant." },
  { name: "Alex Sydney", role: "National Emergency Planning Assoc.", quote: "They've taken our concept and improved it tenfold. Working with Vegavat has been a pleasure in every aspect. A team of incredibly talented individuals, full of experience, humility and professionalism." },
  { name: "James Kuczynski", role: "Product Owner", quote: "What stood out apart from quality was their commitment to delivery. The timelines were amazing and extra work was absorbed without a hiccup. Certainly amongst the best web and mobility companies." },
  { name: "Z. Tim Kahya", role: "Mobile Project Lead", quote: "A clear project plan and explanation of every phase. The different time-zones between Asia and Europe were no problem at all, we always got a quick response. Responsive, flexible and professional throughout." },
];
