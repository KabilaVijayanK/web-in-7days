import { motion } from "framer-motion";

const ClosingCTA = () => (
  <section id="cta" className="relative py-24 overflow-hidden">
    <div className="absolute inset-0 gradient-primary" />
    <div className="absolute inset-0 opacity-10">
      <div className="floating-blob w-96 h-96 top-0 left-0" />
      <div className="floating-blob w-72 h-72 bottom-0 right-0" style={{ animationDelay: "3s" }} />
    </div>

    <div className="relative z-10 container mx-auto px-4 text-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl sm:text-5xl font-extrabold text-primary-foreground mb-6"
      >
        Ready to Launch Your Website This Week?
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <a
          href="#"
          className="glow-button inline-flex items-center justify-center rounded-xl bg-primary-foreground px-10 py-4 text-lg font-bold text-primary"
        >
          Book Free Call Now
        </a>
      </motion.div>
    </div>
  </section>
);

export default ClosingCTA;
