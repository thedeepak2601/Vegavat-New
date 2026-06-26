import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Loader from "@/components/effects/Loader";
import ScrollProgress from "@/components/effects/ScrollProgress";
import ScrollToTop from "@/components/effects/ScrollToTop";
import CursorGlow from "@/components/effects/CursorGlow";
import WhatsAppButton from "@/components/effects/WhatsAppButton";
import ChatWidget from "@/components/effects/ChatWidget";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

export const metadata: Metadata = {
  title: {
    default: "Vegavat - Transforming Ideas Into Digital Reality",
    template: "%s | Vegavat",
  },
  description:
    "Vegavat is a top web and mobile app development company. We build scalable iOS, Android, web, AI and design solutions for startups and enterprises worldwide.",
  keywords: [
    "software development company",
    "mobile app development",
    "web development",
    "UI UX design",
    "AI development",
    "Vegavat",
  ],
  openGraph: {
    title: "Vegavat - Transforming Ideas Into Digital Reality",
    description:
      "Top web and mobile app development company building scalable digital products worldwide.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen">
        <Loader />
        <ScrollProgress />
        <CursorGlow />
        <Header />
        <main>{children}</main>
        <Footer />
        <ScrollToTop />
        <WhatsAppButton />
        <ChatWidget />
      </body>
    </html>
  );
}
