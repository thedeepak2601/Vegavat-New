import type { Metadata } from "next";
import LegalPage, { type LegalSection } from "@/components/LegalPage";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${SITE.name} collects, uses, protects and shares your personal information.`,
};

const SECTIONS: LegalSection[] = [
  {
    heading: "Introduction",
    body: [
      `This Privacy Policy explains how ${SITE.name} ("we", "us" or "our") collects, uses, discloses and safeguards your information when you visit our website, contact us or use our software development and consulting services.`,
      "By using our website or services, you agree to the practices described in this policy. If you do not agree, please discontinue use of our website and services.",
    ],
  },
  {
    heading: "Information We Collect",
    body: ["We collect information you provide directly and information gathered automatically as you use our website:"],
    bullets: [
      "Contact details you submit, such as your name, email address, phone number and company.",
      "Project information you share with us during enquiries, proposals or engagements.",
      "Usage data, such as pages visited, time on site, referring URLs and approximate location.",
      "Device and technical data, such as browser type, operating system and IP address.",
      "Cookies and similar technologies used to operate and improve the website.",
    ],
  },
  {
    heading: "How We Use Your Information",
    body: ["We use the information we collect to:"],
    bullets: [
      "Respond to your enquiries and provide quotes, proposals and support.",
      "Deliver, maintain and improve our services and website.",
      "Send you service updates and, where you have opted in, relevant marketing.",
      "Analyze usage trends to improve performance, security and user experience.",
      "Comply with legal obligations and enforce our agreements.",
    ],
  },
  {
    heading: "Cookies & Tracking",
    body: [
      "We use cookies and similar technologies to keep the site functioning, remember preferences and understand how the site is used. You can control cookies through your browser settings, though disabling them may affect some features.",
    ],
  },
  {
    heading: "How We Share Information",
    body: [
      "We do not sell your personal information. We may share it with trusted service providers who help us operate our business (such as hosting, analytics and communication tools), all bound by confidentiality obligations, or where required by law or to protect our rights.",
    ],
  },
  {
    heading: "Data Security",
    body: [
      "We apply appropriate technical and organizational measures, including encryption in transit, access controls and monitoring, to protect your information. No method of transmission or storage is completely secure, but we work continuously to safeguard your data.",
    ],
  },
  {
    heading: "Data Retention",
    body: [
      "We retain personal information only for as long as necessary to fulfill the purposes described in this policy, to comply with legal and contractual obligations, and to resolve disputes.",
    ],
  },
  {
    heading: "Your Rights",
    body: ["Depending on your location, you may have the right to:"],
    bullets: [
      "Access, correct or delete the personal information we hold about you.",
      "Object to or restrict certain processing of your information.",
      "Withdraw consent for marketing communications at any time.",
      "Request a copy of your data in a portable format.",
    ],
  },
  {
    heading: "Third-Party Links",
    body: [
      "Our website may link to third-party sites. We are not responsible for the privacy practices of those sites and encourage you to review their policies.",
    ],
  },
  {
    heading: "Children's Privacy",
    body: [
      "Our services are intended for businesses and are not directed at children under 16. We do not knowingly collect personal information from children.",
    ],
  },
  {
    heading: "Changes to This Policy",
    body: [
      "We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      breadcrumb="Home / Privacy Policy"
      intro={`Your privacy matters to us. This policy describes what information ${SITE.name} collects, how we use it and the choices you have.`}
      updated="June 24, 2026"
      sections={SECTIONS}
    />
  );
}
