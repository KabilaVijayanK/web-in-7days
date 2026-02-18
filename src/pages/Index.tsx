import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import PricingAnchor from "@/components/landing/PricingAnchor";
import WhatYouGet from "@/components/landing/WhatYouGet";
import WhyChooseUs from "@/components/landing/WhyChooseUs";
import PricingSection from "@/components/landing/PricingSection";
import Portfolio from "@/components/landing/Portfolio";
import SevenDayTransformation from "@/components/landing/SevenDayTransformation";
import ProcessSteps from "@/components/landing/ProcessSteps";
import GuaranteeSection from "@/components/landing/GuaranteeSection";
import ClosingCTA from "@/components/landing/ClosingCTA";
import FAQSection from "@/components/landing/FAQSection";
import Footer from "@/components/landing/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <HeroSection />
    <PricingAnchor />
    <WhatYouGet />
    <WhyChooseUs />
     <PricingSection />
    <SevenDayTransformation />
   <GuaranteeSection />
    <Portfolio />
    <ProcessSteps />
    <ClosingCTA />
    <FAQSection />
    <Footer />
  </div>
);

export default Index;
