import { motion } from "framer-motion";

const plans = [
  {
    name: "Starter",
    price: "₹29,999",
    desc: "Basic website",
    highlight: false,
  },
  {
    name: "Growth",
    price: "₹45,000",
    desc: "Website + SEO setup + lead system",
    highlight: true,
  },
  {
    name: "Premium",
    price: "₹1,20,000",
    desc: "Website + SEO + automation + CRM + ads setup",
    highlight: false,
  },
];

const PricingSection = () => {
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

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">

          {plans.map((plan, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              className={`relative rounded-2xl p-8 text-center transition-all duration-300 shadow-md ${
                plan.highlight
                  ? "bg-blue-600 text-white scale-105 shadow-xl"
                  : "bg-white border border-blue-200 hover:border-blue-500 hover:shadow-lg"
              }`}
            >
              {/* Recommended Badge */}
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-blue-600 text-xs font-semibold px-4 py-1 rounded-full shadow">
                  Recommended
                </div>
              )}

              {/* Plan Name */}
              <h3 className="text-xl font-bold">
                {plan.name}
              </h3>

              {/* Price */}
              <p className={`text-3xl font-extrabold mt-4 ${
                plan.highlight ? "text-white" : "text-blue-600"
              }`}>
                {plan.price}
              </p>

              {/* Description */}
              <p className={`text-sm mt-3 ${
                plan.highlight ? "text-blue-100" : "text-gray-600"
              }`}>
                {plan.desc}
              </p>

              {/* Button */}
              <a
                href="#cta"
                className={`mt-8 block rounded-lg py-3 text-sm font-semibold transition ${
                  plan.highlight
                    ? "bg-white text-blue-600 hover:bg-blue-100"
                    : "bg-blue-600 text-white hover:bg-blue-700"
                }`}
              >
                Get Started
              </a>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default PricingSection;