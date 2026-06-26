import type { ReactNode } from "react";

// Lightweight line-icon set (24x24, stroke = currentColor) used in the nav mega-menu.
const ICONS: Record<string, ReactNode> = {
  // Services
  mobile: (
    <>
      <rect x="6.5" y="2.5" width="11" height="19" rx="2.5" />
      <line x1="10.5" y1="18.5" x2="13.5" y2="18.5" />
    </>
  ),
  web: (
    <>
      <path d="M8 9l-3 3 3 3" />
      <path d="M16 9l3 3-3 3" />
      <line x1="13.5" y1="7" x2="10.5" y2="17" />
    </>
  ),
  design: (
    <>
      <path d="M4 20l3.5-1 9-9-2.5-2.5-9 9z" />
      <path d="M14 6.5l2.5 2.5" />
      <path d="M16.5 4l1 1" />
    </>
  ),
  image: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <circle cx="8.5" cy="9" r="1.6" />
      <path d="M5 18l5-5 4 4 2-2 3 3" />
    </>
  ),
  hiring: (
    <>
      <circle cx="9" cy="8" r="3" />
      <path d="M3.5 20a5.5 5.5 0 0 1 11 0" />
      <path d="M16 5.5a3 3 0 0 1 0 6" />
      <path d="M17.5 14.5a5.5 5.5 0 0 1 3.5 5.2" />
    </>
  ),
  ai: (
    <>
      <rect x="6" y="6" width="12" height="12" rx="2.5" />
      <circle cx="12" cy="12" r="2.4" />
      <path d="M9 6V3M15 6V3M9 21v-3M15 21v-3M6 9H3M6 15H3M21 9h-3M21 15h-3" />
    </>
  ),

  // Industries
  logistics: (
    <>
      <path d="M3 7h11v8H3z" />
      <path d="M14 10h4l3 3v2h-7z" />
      <circle cx="7" cy="17.3" r="1.7" />
      <circle cx="17" cy="17.3" r="1.7" />
    </>
  ),
  education: (
    <>
      <path d="M12 4 2 9l10 5 10-5-10-5z" />
      <path d="M6 11v4c0 1.5 3 3 6 3s6-1.5 6-3v-4" />
    </>
  ),
  media: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M10.5 9l4.5 3-4.5 3z" />
    </>
  ),
  gaming: (
    <>
      <rect x="3" y="8" width="18" height="9" rx="4" />
      <line x1="8" y1="11" x2="8" y2="14" />
      <line x1="6.5" y1="12.5" x2="9.5" y2="12.5" />
      <circle cx="16" cy="11.8" r="0.9" />
      <circle cx="18" cy="14" r="0.9" />
    </>
  ),
  healthcare: (
    <>
      <path d="M12 20s-7-4.3-7-9.3A3.6 3.6 0 0 1 12 8a3.6 3.6 0 0 1 7 2.7C19 15.7 12 20 12 20z" />
      <path d="M12 10.5v3.5M10.2 12.2h3.6" />
    </>
  ),
  energy: <path d="M13 2 4 14h6l-1 8 9-12h-6z" />,
  saas: (
    <>
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
      <line x1="3" y1="12" x2="21" y2="12" />
    </>
  ),
  ecommerce: (
    <>
      <circle cx="9" cy="20" r="1.5" />
      <circle cx="17" cy="20" r="1.5" />
      <path d="M3 4h2l2.4 12h10l1.8-8H6" />
    </>
  ),

  // Products
  crm: (
    <>
      <path d="M4 5v14h16" />
      <path d="M7 15l3-4 3 2 4-6" />
    </>
  ),
  hrms: (
    <>
      <rect x="4" y="3" width="16" height="18" rx="2" />
      <circle cx="12" cy="9" r="2.4" />
      <path d="M8 17.5a4 4 0 0 1 8 0" />
    </>
  ),
  erp: (
    <>
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <line x1="4" y1="10" x2="20" y2="10" />
      <line x1="10" y1="10" x2="10" y2="20" />
    </>
  ),
  inventory: (
    <>
      <path d="M12 3 3 7.5V16l9 4.5 9-4.5V7.5z" />
      <path d="M3 7.5 12 12l9-4.5M12 12v8.5" />
    </>
  ),
  finance: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7v10" />
      <path d="M14.5 9.3c0-1-1.1-1.6-2.5-1.6s-2.5.6-2.5 1.7 1.1 1.6 2.5 1.6 2.5.5 2.5 1.6-1.1 1.7-2.5 1.7-2.5-.6-2.5-1.6" />
    </>
  ),
  projects: (
    <>
      <rect x="5" y="4" width="14" height="17" rx="2" />
      <path d="M9 4h6v3H9z" />
      <path d="M8.5 12l1.3 1.3 2-2M14 13h3" />
      <path d="M8.5 17l1.3 1.3 2-2M14 18h3" />
    </>
  ),
  helpdesk: (
    <>
      <path d="M5 13v-1a7 7 0 0 1 14 0v1" />
      <rect x="3.5" y="12.5" width="3.5" height="6" rx="1.5" />
      <rect x="17" y="12.5" width="3.5" height="6" rx="1.5" />
      <path d="M19 18.5a4 4 0 0 1-4 3h-2" />
    </>
  ),
  lms: (
    <>
      <path d="M5 4a2 2 0 0 1 2-2h11v18H7a2 2 0 0 0-2 2z" />
      <path d="M5 18a2 2 0 0 1 2-2h11" />
    </>
  ),

  // Extended services / industries
  cloud: <path d="M7 18a4 4 0 0 1 0-8 5 5 0 0 1 9.6-1.4A3.6 3.6 0 0 1 17.5 18z" />,
  chat: (
    <>
      <path d="M5 4h14a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H9l-4 3.5V15H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1z" />
      <path d="M8.5 9.5h7M8.5 12h4" />
    </>
  ),
  devops: (
    <>
      <circle cx="6" cy="6" r="2" />
      <circle cx="6" cy="18" r="2" />
      <circle cx="18" cy="9" r="2" />
      <path d="M6 8v8M6 14a6 6 0 0 1 6-6h4" />
    </>
  ),
  rocket: (
    <>
      <path d="M12 3c3 1.4 4.5 4.4 4.5 8L15 15H9l-1.5-4c0-3.6 1.5-6.6 4.5-8z" />
      <circle cx="12" cy="9" r="1.5" />
      <path d="M9 16l-2.5 1.5L8 20M15 16l2.5 1.5L16 20" />
    </>
  ),
  sync: (
    <>
      <path d="M4 9a8 8 0 0 1 13-3.5L20 8" />
      <path d="M20 15a8 8 0 0 1-13 3.5L4 16" />
      <path d="M20 4v4h-4M4 20v-4h4" />
    </>
  ),
  wrench: (
    <path d="M15.5 7a3.5 3.5 0 0 0-1 3.6L5 20l-1-1 9.4-9.5A3.5 3.5 0 0 0 17 5.5a3.5 3.5 0 0 0-1-.4l-1.8 1.8 1.4 1.4L17.4 6.5a3.5 3.5 0 0 0-1.9.5z" />
  ),
  audit: (
    <>
      <path d="M6 3h7l5 5v9a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z" />
      <path d="M13 3v5h5" />
      <circle cx="10.5" cy="13" r="2.2" />
      <path d="M12.2 14.7 14 16.5" />
    </>
  ),
  factory: (
    <>
      <path d="M3 21V10l5 3.2V10l5 3.2V8l5 3v10z" />
      <path d="M3 21h18M7.5 17h2M12.5 17h2" />
    </>
  ),
  building: (
    <>
      <path d="M5 21V5a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v16" />
      <path d="M13 21V9h5a1 1 0 0 1 1 1v11" />
      <path d="M3 21h18M8 8h2M8 12h2M8 16h2M16 13h0M16 17h0" />
    </>
  ),

  // Process page
  flag: (
    <>
      <path d="M5 21V4" />
      <path d="M5 4h11l-1.5 3.5L16 11H5" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3 5 6v5c0 4 3 7 7 9 4-2 7-5 7-9V6z" />
      <path d="M9.5 12l1.8 1.8 3.2-3.6" />
    </>
  ),
  transfer: (
    <>
      <path d="M4 8h12l-3-3M20 16H8l3 3" />
    </>
  ),
  users: (
    <>
      <circle cx="9" cy="8" r="3" />
      <path d="M3.5 20a5.5 5.5 0 0 1 11 0" />
      <path d="M16 5.5a3 3 0 0 1 0 6" />
      <path d="M17.5 14.5a5.5 5.5 0 0 1 3.5 5.2" />
    </>
  ),

  default: <rect x="4" y="4" width="16" height="16" rx="3" />,
};

export default function Icon({
  name,
  className = "h-5 w-5",
}: {
  name?: string;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      {(name && ICONS[name]) || ICONS.default}
    </svg>
  );
}
