export type ProcessStep = {
  n: string;
  week: string;
  title: string;
  desc: string;
  activities: string[];
  deliverables: string[];
  image: string;
};

export const PROCESS: ProcessStep[] = [
  {
    n: "01",
    week: "Week 1–2",
    title: "Discovery & Planning",
    desc: "We understand your business inside-out. Detailed workshops with stakeholders to map current processes, define goals and lock the scope.",
    activities: [
      "Stakeholder interviews & workshops",
      "Competitor and market research",
      "Business requirement gathering",
      "Project scope definition",
      "Timeline and milestone planning",
    ],
    deliverables: ["Requirements Document (BRD)", "Project Plan"],
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=900&q=80",
  },
  {
    n: "02",
    week: "Week 2–3",
    title: "Product Roadmap",
    desc: "We translate requirements into a clear roadmap with milestones, features and a sharp MVP definition that guides the build from day one.",
    activities: [
      "Feature prioritization (MoSCoW)",
      "MVP scope definition",
      "Tech stack selection",
      "System architecture blueprint",
      "Sprint planning",
    ],
    deliverables: ["Product Roadmap", "Technical Architecture Doc"],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80",
  },
  {
    n: "03",
    week: "Week 3–6",
    title: "UI/UX Design",
    desc: "Designers craft wireframes, user flows and interactive prototypes, you see exactly how the product looks and feels before a line of code.",
    activities: [
      "User research & personas",
      "Wireframing & user flows",
      "Interactive Figma prototypes",
      "Design system & style guide",
      "Usability testing",
    ],
    deliverables: ["Clickable Prototype", "Design System"],
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=900&q=80",
  },
  {
    n: "04",
    week: "Week 6–10",
    title: "Development",
    desc: "Engineering runs in Agile sprints with regular demo builds. Features are tested and refined incrementally, never all at the end.",
    activities: [
      "Frontend & backend development",
      "API & third-party integrations",
      "Sprint demos & reviews",
      "Code reviews & CI pipelines",
      "Incremental QA",
    ],
    deliverables: ["Working Builds each sprint", "Integration Documentation"],
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=900&q=80",
  },
  {
    n: "05",
    week: "Week 10–12",
    title: "Testing & QA",
    desc: "Functional, performance, UI and security testing across devices and OS versions. Your team validates the system during UAT.",
    activities: [
      "Test plan & scenarios",
      "Automated & manual testing",
      "Performance & security audits",
      "Bug fixing & refinement",
      "User Acceptance Testing (UAT)",
    ],
    deliverables: ["QA & Test Report", "UAT Sign-off"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80",
  },
  {
    n: "06",
    week: "Week 12+",
    title: "Launch & Support",
    desc: "Go-live to the App Store, Play Store or cloud with data cutover, parallel run and intensive post-launch hypercare for smooth operations.",
    activities: [
      "Production deployment",
      "Store submission / data cutover",
      "Performance monitoring",
      "Hypercare support",
      "Knowledge transfer",
    ],
    deliverables: ["Live Product", "Support Handover"],
    image: "https://images.unsplash.com/photo-1531973576160-7125cd663d86?auto=format&fit=crop&w=900&q=80",
  },
];

export const PROCESS_WHY = [
  { icon: "flag", title: "Clear Milestones", desc: "Defined checkpoints ensure the project stays on track." },
  { icon: "users", title: "Stakeholder Alignment", desc: "Regular reviews keep everyone informed and aligned." },
  { icon: "shield", title: "Risk Mitigation", desc: "Early discovery prevents costly surprises later." },
  { icon: "transfer", title: "Knowledge Transfer", desc: "Your team becomes self-sufficient after go-live." },
];

export const PROCESS_TIMELINE = [
  { weeks: "Weeks 1–3", title: "Discover & Design", desc: "Workshops, BRD, prototypes" },
  { weeks: "Weeks 4–8", title: "Build", desc: "Develop, integrate, demo" },
  { weeks: "Weeks 9–11", title: "Test", desc: "QA, UAT, refinements" },
  { weeks: "Week 12+", title: "Launch", desc: "Cutover, parallel run, hypercare" },
];

export const PROCESS_PEOPLE = [
  { phase: "Phase 1", title: "Discovery Workshops", desc: "Cross-functional sessions to map your real workflows.", image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=700&q=80" },
  { phase: "Phase 2", title: "Design & Build", desc: "Hands-on design, custom development and integrations.", image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=700&q=80" },
  { phase: "Phase 3", title: "Launch & Handover", desc: "Hypercare support and structured knowledge transfer.", image: "https://images.unsplash.com/photo-1531973576160-7125cd663d86?auto=format&fit=crop&w=700&q=80" },
];
