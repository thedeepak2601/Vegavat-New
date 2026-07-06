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
import CalendlyQRModal from "@/components/effects/CalendlyQRModal";
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
  verification: {
    google: "IMJuJQ1rnodjl20xhS9UX0DxCyYAZoWHYB-apI0DOuI",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <meta
          name="google-site-verification"
          content="IMJuJQ1rnodjl20xhS9UX0DxCyYAZoWHYB-apI0DOuI"
        />
        {/* Google Tag */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-W0SNEZN898"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-W0SNEZN898');
            `,
          }}
        />
      </head>
      <body className="min-h-screen">
        <Loader />
        <ScrollProgress />
        <CursorGlow />
        <Header />
        <main>{children}</main>
        <Footer />
        <ScrollToTop />
        <CalendlyQRModal />
        <WhatsAppButton />
        <ChatWidget />
      </body>
    </html>
  );
}
