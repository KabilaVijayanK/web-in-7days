import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "₹29,999",
    highlight: false,
    features: [
      "5-page business website",
      "Mobile optimized",
      "WhatsApp integration",
      "Lead form",
      "Delivery in 7 days",
    ],
    footer:
      "Perfect for businesses starting their digital presence.",
  },
  {
    name: "Growth",
    price: "₹45,000",
    highlight: true,
    features: [
      "Conversion-focused website",
      "Local SEO setup",
      "Google Business optimization",
      "Lead tracking dashboard",
      "Basic automation",
    ],
    footer:
      "Best for businesses serious about generating consistent enquiries.",
  },
  {
    name: "Premium",
    price: "₹1,20,000",
    highlight: false,
    features: [
      "High-conversion website",
      "Advanced SEO",
      "CRM integration",
      "Sales automation workflows",
      "Paid ads funnel setup",
      "Dedicated account manager",
    ],
    footer:
      "For scaling businesses ready to dominate their market.",
  },
];
interface Props {
  setOpen: (value: boolean) => void;
}
const PricingSection = ({ setOpen }: Props) => {
  return (
    <section id="pricingg" className="py-16 bg-white scroll-mt-24">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900">
            Choose Your Plan
          </h2>
          <p className="text-gray-600 mt-2 text-sm">
            Simple pricing. Powerful results.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {plans.map((plan, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -6 }}
              className={`relative rounded-2xl p-8 transition-all duration-300 shadow-md ${
                plan.highlight
                  ? "bg-blue-600 text-white scale-105 shadow-2xl growth-premium"
                  : "bg-white border border-blue-200 hover:border-blue-500 hover:shadow-lg"
              }`}
            >

              {/* Recommended Badge */}
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-blue-600 text-xs font-semibold px-4 py-1 rounded-full shadow">
                  Recommended
                </div>
              )}

              <h3 className="text-xl font-bold text-center">
                {plan.name}
              </h3>

              <p
                className={`text-3xl font-extrabold mt-4 text-center ${
                  plan.highlight ? "text-white" : "text-blue-600"
                }`}
              >
                {plan.price}
              </p>

              {/* Feature List */}
              <div className="mt-6 space-y-3">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm">
                    <Check
                      className={`w-4 h-4 mt-[2px] ${
                        plan.highlight ? "text-white" : "text-blue-600"
                      }`}
                    />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              {/* Footer Description */}
              <p
                className={`text-sm mt-6 ${
                  plan.highlight ? "text-blue-100" : "text-gray-600"
                }`}
              >
                {plan.footer}
              </p>

            <button
  onClick={() => setOpen(true)}
  className={`mt-8 w-full rounded-lg py-3 text-sm font-semibold transition ${
    plan.highlight
      ? "bg-white text-blue-600 hover:bg-blue-100"
      : "bg-blue-600 text-white hover:bg-blue-700"
  }`}
>
  Get Started
</button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;