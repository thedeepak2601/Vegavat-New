import Link from "next/link";
import Hero from "@/components/home/Hero";
import WhoWeAre from "@/components/home/WhoWeAre";
import BrandValues from "@/components/home/BrandValues";
import CoreServices from "@/components/home/CoreServices";
import StatsBand from "@/components/home/StatsBand";
import ProductsSection from "@/components/home/ProductsSection";
import IndustriesStrip from "@/components/home/IndustriesStrip";
import MoreThanImplementers from "@/components/home/MoreThanImplementers";
import ProcessSection from "@/components/home/ProcessSection";
import Integrations from "@/components/home/Integrations";
import LogoMarquee from "@/components/home/LogoMarquee";
import Testimonials from "@/components/home/Testimonials";
import PortfolioGrid from "@/components/PortfolioGrid";
import SectionHeader from "@/components/SectionHeader";
import Newsletter from "@/components/Newsletter";
import HomeQuoteModal from "@/components/home/HomeQuoteModal";

export default function HomePage() {
  return (
    <>
      <Hero />

      <LogoMarquee />
      <WhoWeAre />
      <BrandValues />
      <CoreServices />
      <StatsBand />

      {/* Social proof, sits high as trust-building after services */}
      <Testimonials />

      <ProductsSection />
      <Integrations />

      {/* Newsletter, mid-page breather */}
      <section className="section">
        <div className="container-x">
          <Newsletter />
        </div>
      </section>

      <IndustriesStrip />
      <MoreThanImplementers />
      <ProcessSection />

      {/* Our Work */}
      <section className="section">
        <div className="container-x">
          <SectionHeader
            eyebrow="Our Work"
            title="Reliable solutions tailored to your business"
            desc="From robust software applications to strong digital experiences, here's a sample of our portfolio across categories."
          />
          <div className="mt-14">
            <PortfolioGrid limit={6} />
          </div>
          <div className="mt-12 text-center">
            <Link href="/contact" className="btn-outline">View More Work</Link>
          </div>
        </div>
      </section>

      <HomeQuoteModal />
    </>
  );
}
