import { motion } from "framer-motion";

interface Props {
  setOpen: (value: boolean) => void;
}

const ClosingCTA = ({ setOpen }: Props) => (
  <section
    id="cta"
    className="relative py-16 bg-blue-600 overflow-hidden"
  >
    {/* Soft Glow */}
    <div className="absolute -top-32 -left-32 w-72 h-72 bg-white/10 blur-3xl rounded-full" />
    <div className="absolute -bottom-32 -right-32 w-72 h-72 bg-white/10 blur-3xl rounded-full" />

    <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight"
      >
        Ready to Launch Your Website This Week?
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
        className="mt-3 text-blue-100 text-sm sm:text-base"
      >
        Let’s build something powerful for your business.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25 }}
        className="mt-6"
      >
        <button
          onClick={() => setOpen(true)}
          className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-3 text-base font-semibold text-blue-600 shadow-md hover:scale-105 transition-all duration-300"
        >
          Book Free Call Now
        </button>
      </motion.div>

    </div>
  </section>
);

export default ClosingCTA;