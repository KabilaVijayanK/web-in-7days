import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What does the ₹29,999 website package include?",
    a: "It includes a 5–8 page professional website, mobile responsive design, contact & WhatsApp integration, basic SEO setup, and 1 month of free support.",
  },
  {
    q: "How long does it take to complete the website?",
    a: "Most projects are delivered within 7 working days after we receive all your content and requirements.",
  },
  {
    q: "What do you need from me to start?",
    a: "We need your business details, logo, content (text & images), and any design preferences you may have.",
  },
  {
    q: "Is domain and hosting included?",
    a: "Domain and hosting are not included in the base package, but we can help you set them up at an additional cost.",
  },
  {
    q: "How many revisions are included?",
    a: "We include up to 3 rounds of revisions to ensure you're completely satisfied with the final result.",
  },
  {
    q: "Will my website work on mobile devices?",
    a: "Absolutely! Every website we build is fully responsive and optimized for all screen sizes.",
  },
  {
    q: "Can I upgrade later?",
    a: "Yes, you can upgrade your website with additional pages, features, or functionality at any time.",
  },
  {
    q: "Do you provide support after launch?",
    a: "Yes, we provide 1 month of free support. Extended support packages are also available.",
  },
  {
    q: "What is the payment structure?",
    a: "We typically require 50% upfront to begin work, and the remaining 50% upon completion before launch.",
  },
  {
    q: "Who is this service best suited for?",
    a: "Our service is ideal for small businesses, startups, freelancers, and professionals looking for a quality online presence.",
  },
];

const FAQSection = () => {
  return (
    <section
      id="faq"
      className="bg-[#0B1220] text-white py-20"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-400 mb-3">
            FAQ
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-400 mt-3 text-sm">
            Everything you need to know before getting started.
          </p>
        </div>

        {/* 2 Column Tight Layout */}
        <Accordion
          type="single"
          collapsible
          className="grid md:grid-cols-2 gap-5"
        >
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="rounded-xl border border-white/10 bg-white/5 px-5 transition-all duration-300 hover:border-blue-500/40 hover:bg-white/10"
            >
              <AccordionTrigger className="text-left text-base font-semibold py-4 hover:no-underline">
                {faq.q}
              </AccordionTrigger>

              <AccordionContent className="text-sm text-gray-400 pb-4 leading-relaxed">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

      </div>
    </section>
  );
};

export default FAQSection;