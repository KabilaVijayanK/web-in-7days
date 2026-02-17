import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import PricingAnchor from "@/components/landing/PricingAnchor";
import WhatYouGet from "@/components/landing/WhatYouGet";
import WhyChooseUs from "@/components/landing/WhyChooseUs";
import Portfolio from "@/components/landing/Portfolio";
import ProcessSteps from "@/components/landing/ProcessSteps";
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
    <Portfolio />
    <ProcessSteps />
    <ClosingCTA />
    <FAQSection />
    <Footer />
  </div>
);

export default Index;
