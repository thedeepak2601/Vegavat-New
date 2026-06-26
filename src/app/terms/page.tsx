import type { Metadata } from "next";
import LegalPage, { type LegalSection } from "@/components/LegalPage";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `The terms and conditions that govern your use of ${SITE.name}'s website and services.`,
};

const SECTIONS: LegalSection[] = [
  {
    heading: "Acceptance of Terms",
    body: [
      `These Terms of Service ("Terms") govern your access to and use of the website and services provided by ${SITE.name} ("we", "us" or "our"). By using our website or engaging our services, you agree to be bound by these Terms.`,
    ],
  },
  {
    heading: "Our Services",
    body: [
      "We provide software development, design, consulting and related technology services. The specific scope, deliverables, timelines and fees for any engagement are defined in a separate proposal, statement of work or agreement signed by both parties.",
    ],
  },
  {
    heading: "Engagements & Proposals",
    body: [
      "Estimates and proposals are valid for the period stated within them and are based on the information available at the time. Any change in scope may affect timelines and cost and will be agreed in writing before work proceeds.",
    ],
  },
  {
    heading: "Client Responsibilities",
    body: ["To deliver successfully, we rely on you to:"],
    bullets: [
      "Provide accurate, complete information and timely feedback.",
      "Make available the access, accounts and assets needed for the work.",
      "Review deliverables and respond within agreed timeframes.",
      "Ensure any materials you provide do not infringe third-party rights.",
    ],
  },
  {
    heading: "Intellectual Property",
    body: [
      "Upon full payment, ownership of the final, custom deliverables created specifically for you is transferred to you, unless stated otherwise in your agreement. We retain ownership of our pre-existing tools, frameworks, know-how and any third-party or open-source components, which are provided under their respective licenses.",
    ],
  },
  {
    heading: "Payment Terms",
    body: [
      "Fees, milestones and payment schedules are set out in your agreement. Invoices are payable within the stated period. Late payments may pause work and incur charges where permitted by law. All fees are exclusive of applicable taxes unless stated otherwise.",
    ],
  },
  {
    heading: "Confidentiality & NDA",
    body: [
      "We treat your business and project information as confidential and are happy to sign a Non-Disclosure Agreement before detailed discussions. Each party agrees not to disclose the other's confidential information except as required to perform the services or by law.",
    ],
  },
  {
    heading: "Warranties & Disclaimers",
    body: [
      "We perform our services with reasonable skill and care in line with industry standards. Except as expressly stated, our website and services are provided \"as is\" without warranties of any kind, whether express or implied, to the fullest extent permitted by law.",
    ],
  },
  {
    heading: "Limitation of Liability",
    body: [
      `To the maximum extent permitted by law, ${SITE.name} shall not be liable for any indirect, incidental or consequential damages. Our total liability arising from any engagement shall not exceed the fees paid for the specific services giving rise to the claim.`,
    ],
  },
  {
    heading: "Termination",
    body: [
      "Either party may terminate an engagement as set out in the applicable agreement. On termination, you agree to pay for all work performed and approved expenses incurred up to the termination date.",
    ],
  },
  {
    heading: "Governing Law",
    body: [
      "These Terms are governed by the laws applicable in India, and any disputes shall be subject to the jurisdiction of the courts located in Lucknow, Uttar Pradesh, unless otherwise agreed in writing.",
    ],
  },
  {
    heading: "Changes to These Terms",
    body: [
      "We may update these Terms from time to time. Continued use of our website or services after changes are posted constitutes acceptance of the revised Terms.",
    ],
  },
];

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Service"
      breadcrumb="Home / Terms of Service"
      intro={`Please read these terms carefully. They set out the rules for using ${SITE.name}'s website and working with us.`}
      updated="June 24, 2026"
      sections={SECTIONS}
    />
  );
}
