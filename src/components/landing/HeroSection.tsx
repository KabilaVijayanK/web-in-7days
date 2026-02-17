import { motion, useMotionValue, useTransform } from "framer-motion";
import { useRef } from "react";
import FloatingBlobs from "./FloatingBlobs";
import heroMockup from "@/assets/hero-mockup.png";

const HeroSection = () => {
  const ref = useRef<HTMLDivElement>(null);

  // Mouse tilt effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;

    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    x.set(e.clientX - centerX);
    y.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
<section className="relative min-h-screen flex items-center overflow-hidden bg-white pt-16 lg:pt-24">
      <FloatingBlobs />

      <div className="container mx-auto px-4 lg:px-8 grid lg:grid-cols-2 gap-12 items-center relative z-10">

        {/* LEFT CONTENT */}
        <div className="flex flex-col justify-center">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900"
          >
            Get Your Business Website{" "}
            <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
              Live in 7 Days
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-6 text-lg text-gray-600 max-w-lg"
          >
            Professional, mobile-friendly website designed to generate leads
            and build credibility.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-8 flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#cta"
              className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-8 py-4 text-base font-bold text-white shadow-lg shadow-blue-500/30 hover:scale-105 hover:shadow-blue-500/50 transition-all duration-300"
            >
              Get My Website Now
            </a>

            <a
              href="#cta"
              className="inline-flex items-center justify-center rounded-xl border-2 border-blue-600 px-8 py-4 text-base font-bold text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300"
            >
              Get Free Consultation
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-4 text-sm text-gray-500"
          >
            ⚡ Limited production slots every week.
          </motion.p>
        </div>

        {/* RIGHT IMAGE */}
<motion.div
  ref={ref}
  onMouseMove={handleMouseMove}
  onMouseLeave={handleMouseLeave}
  initial={{ opacity: 0, scale: 0.9, x: 120 }}
  whileInView={{ opacity: 1, scale: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{
    duration: 1,
    ease: [0.22, 1, 0.36, 1],
  }}
  className="flex justify-center items-center h-[100vh] lg:h-[80vh] overflow-hidden"
>
  <motion.img
    src={heroMockup}
    alt="Website in 7 Days Dashboard"
    style={{ rotateX, rotateY }}
    className="w-full h-full object-cover drop-shadow-[0_60px_120px_rgba(0,0,0,0.25)]"
    animate={{ y: [0, -15, 0] }}
    transition={{
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />


</motion.div>

      </div>
    </section>
  );
};

export default HeroSection;