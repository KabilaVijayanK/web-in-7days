import { motion, AnimatePresence } from "framer-motion";
import { User, Phone, Mail, MessageSquare, X } from "lucide-react";
import { useState } from "react";

interface Props {
  open: boolean;
  setOpen: (value: boolean) => void;
}

const LeadFormModal = ({ open, setOpen }: Props) => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!form.name || !form.phone || !form.email || !form.message) {
      setError("Please fill all fields.");
      return;
    }

    // Simulate submission
    setTimeout(() => {
      setSubmitted(true);
    }, 500);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-sm px-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 40 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="relative w-full max-w-lg rounded-3xl bg-white/90 backdrop-blur-xl p-8 shadow-[0_40px_80px_rgba(0,0,0,0.15)]"
          >
            {/* Close */}
            <button
              onClick={() => {
                setOpen(false);
                setSubmitted(false);
              }}
              className="absolute top-4 right-4 text-gray-500 hover:text-black"
            >
              <X size={20} />
            </button>

            {!submitted ? (
              <>
                <h2 className="text-2xl font-bold text-gray-900 text-center">
                  Let’s Build Your Website
                </h2>

                <p className="text-sm text-gray-600 text-center mt-2 mb-6">
                  Fill out the form below and we’ll get back to you within 24 hours.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">

                  {/* Name */}
                  <div className="input-box">
                    <User className="icon" />
                    <input
                      type="text"
                      name="name"
                      placeholder="Full Name"
                      value={form.name}
                      onChange={handleChange}
                      className="input"
                    />
                  </div>

                  {/* Phone */}
                  <div className="input-box">
                    <Phone className="icon" />
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number"
                      value={form.phone}
                      onChange={handleChange}
                      className="input"
                    />
                  </div>

                  {/* Email */}
                  <div className="input-box">
                    <Mail className="icon" />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      value={form.email}
                      onChange={handleChange}
                      className="input"
                    />
                  </div>

                  {/* Message */}
                  <div className="input-box items-start">
                    <MessageSquare className="icon mt-1" />
                    <textarea
                      name="message"
                      placeholder="Tell us about your business..."
                      rows={3}
                      value={form.message}
                      onChange={handleChange}
                      className="input resize-none"
                    />
                  </div>

                  {error && (
                    <p className="text-red-500 text-xs text-center">{error}</p>
                  )}

                  <button
                    type="submit"
                    className="w-full mt-4 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 py-4 text-white font-semibold shadow-lg hover:scale-[1.02] transition-all duration-300"
                  >
                    Get Free Consultation
                  </button>

                  <p className="text-xs text-gray-600 text-center mt-4 flex items-center justify-center gap-1">
                    <span className="text-yellow-500">⚡</span>
                    Limited production slots every week
                  </p>
                </form>
              </>
            ) : (
              <div className="text-center py-10">
                <h3 className="text-xl font-bold text-green-600">
                  ✅ Form Submitted!
                </h3>
                <p className="text-gray-600 mt-3 text-sm">
                  We will get back to you soon.
                </p>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LeadFormModal;