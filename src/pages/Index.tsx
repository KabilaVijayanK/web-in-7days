import { useState } from "react";
import Navbar from "@/components/landing/Navbar";
import LeadFormModal from "@/components/landing/LeadFormModal";
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

const Index = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Navbar setOpen={setOpen} />
      <HeroSection setOpen={setOpen} />
      <PricingAnchor />
      <WhatYouGet />
      <WhyChooseUs />
      <PricingSection setOpen={setOpen} />
      <SevenDayTransformation />
      <GuaranteeSection setOpen={setOpen} />
      <Portfolio />
      <ProcessSteps />
      <ClosingCTA setOpen={setOpen} />
      <FAQSection />
      <Footer />

      {/* GLOBAL FORM MODAL */}
      <LeadFormModal open={open} setOpen={setOpen} />
    </div>
  );
};

export default Index;