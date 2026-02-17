import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ScrollReveal from "./ScrollReveal";

const faqs = [
  { q: "What does the ₹29,999 website package include?", a: "It includes a 5–8 page professional website, mobile responsive design, contact & WhatsApp integration, basic SEO setup, and 1 month of free support." },
  { q: "How long does it take to complete the website?", a: "Most projects are delivered within 7 working days after we receive all your content and requirements." },
  { q: "What do you need from me to start?", a: "We need your business details, logo, content (text & images), and any design preferences you may have." },
  { q: "Is domain and hosting included?", a: "Domain and hosting are not included in the base package, but we can help you set them up at an additional cost." },
  { q: "How many revisions are included?", a: "We include up to 3 rounds of revisions to ensure you're completely satisfied with the final result." },
  { q: "Will my website work on mobile devices?", a: "Absolutely! Every website we build is fully responsive and optimized for all screen sizes." },
  { q: "Can I upgrade later?", a: "Yes, you can upgrade your website with additional pages, features, or functionality at any time." },
  { q: "Do you provide support after launch?", a: "Yes, we provide 1 month of free support. Extended support packages are also available." },
  { q: "What is the payment structure?", a: "We typically require 50% upfront to begin work, and the remaining 50% upon completion before launch." },
  { q: "Who is this service best suited for?", a: "Our service is ideal for small businesses, startups, freelancers, and professionals looking for a quality online presence." },
];

const FAQSection = () => (
  <section
    id="faq"
    className="relative py-32 bg-gradient-to-b from-[#0B1220] to-[#0E1A30] text-white overflow-hidden"
  >
    <div className="max-w-4xl mx-auto px-6">

      {/* Heading */}
      <ScrollReveal>
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-orange-400 mb-3">
            FAQ
          </p>
          <h2 className="text-4xl lg:text-5xl font-extrabold">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-400 mt-4 text-sm">
            Everything you need to know before getting started.
          </p>
        </div>
      </ScrollReveal>

      {/* Accordion */}
      <ScrollReveal>
        <Accordion type="single" collapsible className="space-y-5">

          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl px-6 transition-all duration-300 hover:border-orange-400/50 hover:bg-white/10"
            >

              <AccordionTrigger className="text-left text-lg font-semibold text-white py-6 hover:no-underline group-hover:text-orange-400 transition-colors duration-300">
                {faq.q}
              </AccordionTrigger>

              <AccordionContent className="text-gray-300 pb-6 leading-relaxed">
                {faq.a}
              </AccordionContent>

            </AccordionItem>
          ))}

        </Accordion>
      </ScrollReveal>
    </div>

    {/* Soft glow background effect */}
    <div className="absolute -z-10 w-[600px] h-[600px] bg-orange-500/20 blur-[160px] rounded-full bottom-0 left-1/2 -translate-x-1/2" />
  </section>
);

export default FAQSection;