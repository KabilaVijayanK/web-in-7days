import { Clock, RefreshCcw, ThumbsUp, ShieldCheck, Star } from "lucide-react";
import { motion } from "framer-motion";

const guarantees = [
  {
    icon: Clock,
    title: "7-Day Delivery Promise",
    desc: "Website live in 7 days. Missed deadline? You don’t pay.",
  },
  {
    icon: RefreshCcw,
    title: "Unlimited Revisions",
    desc: "We refine until you're fully satisfied.",
  },
  {
    icon: ThumbsUp,
    title: "30-Day Satisfaction",
    desc: "Full refund within 30 days. No questions asked.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Guarantee",
    desc: "Professional standards backed by client trust.",
  },
];

const GuaranteeSection = () => {
  return (
    <section className="bg-gradient-to-b from-white to-blue-50 py-14">
      <div className="max-w-5xl mx-auto px-6 text-center">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-5"
        >
          <span className="px-4 py-1 text-[10px] font-semibold tracking-widest uppercase bg-blue-100 text-blue-600 rounded-full">
            Risk-Free Guarantee
          </span>
        </motion.div>

        {/* Stars */}
        <div className="flex justify-center gap-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
          ))}
        </div>

        <p className="text-gray-600 text-xs mb-8">
          98% customer satisfaction rate
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-4">
          {guarantees.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md border border-blue-100"
            >
              <div className="w-10 h-10 mx-auto mb-3 rounded-lg bg-blue-100 flex items-center justify-center">
                <item.icon className="w-5 h-5 text-blue-600" />
              </div>

              <h3 className="text-sm font-semibold text-gray-900 mb-1">
                {item.title}
              </h3>

              <p className="text-xs text-gray-600">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Compact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-10 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-2xl p-6"
        >
          <h3 className="text-lg font-bold mb-2">
            Start Your Risk-Free Website Project
          </h3>

          <p className="text-xs text-blue-100 mb-4">
            Free consultation. No commitment.
          </p>

          <a
            href="#cta"
            className="inline-block bg-white text-blue-600 text-sm font-semibold px-6 py-2 rounded-lg hover:scale-105 transition"
          >
            Get Started
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default GuaranteeSection;