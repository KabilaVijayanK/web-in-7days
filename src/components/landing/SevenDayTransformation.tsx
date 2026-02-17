import {
  Users,
  CalendarDays,
  Palette,
  RefreshCcw,
  Code2,
  Zap,
  Rocket,
} from "lucide-react";
import { motion, Variants } from "framer-motion";


const steps = [
  { day: "Day 1", icon: Users, title: "Strategy", desc: "Understand goals & audience." },
  { day: "Day 2", icon: CalendarDays, title: "Content", desc: "Collect assets & finalize copy." },
  { day: "Day 3", icon: Palette, title: "Design", desc: "Create modern UI layout." },
  { day: "Day 4", icon: RefreshCcw, title: "Refinement", desc: "Feedback & approval." },
  { day: "Day 5", icon: Code2, title: "Development", desc: "Build responsive site." },
  { day: "Day 6", icon: Zap, title: "Testing", desc: "Speed & SEO optimization." },
  { day: "Day 7", icon: Rocket, title: "Launch", desc: "Go live with support." },
];

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const SevenDayTransformation = () => {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-14 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading Animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900">
            Your 7-Day Transformation
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Simple. Structured. Fast.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="hidden xl:block absolute top-10 left-0 right-0 h-[2px] bg-blue-200 origin-left"
          />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-7 gap-4 relative"
          >

            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -6 }}
                className="relative bg-white border border-blue-100 rounded-lg p-4 shadow-sm hover:shadow-md transition-all flex flex-col items-center text-center min-h-[180px]"
              >

                {/* Day Badge */}
                <div className="absolute -top-3 px-2 py-[3px] text-[10px] font-semibold bg-blue-600 text-white rounded-full">
                  {step.day}
                </div>

                {/* Icon Pop Animation */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1, type: "spring" }}
                  className="mt-4 mb-2 w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center"
                >
                  <step.icon className="w-5 h-5 text-white" />
                </motion.div>

                <h3 className="text-sm font-semibold text-gray-900">
                  {step.title}
                </h3>

                <p className="text-[11px] text-gray-600 mt-1">
                  {step.desc}
                </p>

              </motion.div>
            ))}

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SevenDayTransformation;