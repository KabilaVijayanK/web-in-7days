import { useState, useEffect } from "react";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import privacyContent from "@/contents/privacyContent";

const PrivacyPolicy = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen flex flex-col">
      
      <Navbar setOpen={setOpen} />

      <main className="flex-1">
        <section className="max-w-4xl mx-auto px-6 py-20">

          {/* Heading */}
          <div className="mb-10 text-center">
            <h1 className="text-3xl lg:text-4xl font-extrabold text-gray-900">
              Privacy Policy
            </h1>
            <div className="mt-4 h-[2px] w-16 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          {/* Content */}
          <div className="prose prose-gray max-w-none whitespace-pre-line leading-relaxed text-gray-700 text-sm">
            {privacyContent}
          </div>

        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;