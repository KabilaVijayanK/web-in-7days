import { motion, AnimatePresence } from "framer-motion";
import { User, Phone, Mail, X,Check } from "lucide-react";
import { useState } from "react";

interface Props {
  open: boolean;
  setOpen: (value: boolean) => void;
}

// API Configuration - can be moved to environment variables
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://127.0.0.1:8000";
const LEADS_ENDPOINT = `${API_BASE_URL}/api/leads/website/`;

const LeadFormModal = ({ open, setOpen }: Props) => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    countryCode: "+91",
    email: "",
    budget: "",
    investmentRange: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    setError("");
  };

  const handleBudgetSelect = (option: string) => {
    // Map budget labels to API investment_range values
    const budgetMap: { [key: string]: string } = {
      "Less than 10,000": "less_than_10k",
      "Between 25,000 to 50,000": "25k_to_50k",
      "More than 50,000": "more_than_50k",
    };
    
    setForm({
      ...form,
      budget: form.budget === option ? "" : option,
      investmentRange: form.budget === option ? "" : (budgetMap[option] || ""),
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Validation
    if (!form.name.trim() || !form.phone.trim() || !form.email.trim() || !form.investmentRange) {
      setError("Please fill all required fields including investment range.");
      return;
    }

    setIsLoading(true);

    try {
      // Prepare request payload
      const payload = {
        name: form.name.trim(),
        phone: `${form.countryCode}${form.phone.trim()}`,
        email: form.email.trim(),
        investment_range: form.investmentRange,
        message: "",
      };

      // Make API request
      const response = await fetch(LEADS_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      // Handle response
      if (response.status === 201 || response.ok) {
        setSubmitted(true);
        // Reset form after showing success
        setTimeout(() => {
          setForm({
            name: "",
            phone: "",
            countryCode: "+91",
            email: "",
            budget: "",
            investmentRange: "",
          });
        }, 1000);
      } else if (response.status === 400) {
        // Handle validation errors from backend
        const errorData = await response.json();
        const errorMessage =
          errorData.message ||
          errorData.detail ||
          "Invalid data. Please check your inputs.";
        setError(errorMessage);
      } else {
        setError(
          `Server error (${response.status}). Please try again later.`
        );
      }
    } catch (err) {
      // Handle network errors or parsing errors
      if (err instanceof TypeError) {
        setError(
          "Unable to connect to server. Please check your internet connection."
        );
      } else {
        setError("An unexpected error occurred. Please try again.");
      }
      console.error("Lead form submission error:", err);
    } finally {
      setIsLoading(false);
    }
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
            transition={{ duration: 0.35 }}
            className="relative w-full max-w-md rounded-3xl bg-white p-8 shadow-[0_30px_60px_rgba(0,0,0,0.15)]"
          >
            {/* Close */}
            <button
              onClick={() => {
                setOpen(false);
                setSubmitted(false);
                setError("");
              }}
              className="absolute top-4 right-4 text-gray-400 hover:text-black"
            >
              <X size={20} />
            </button>

            {!submitted ? (
              <>
                <h2 className="text-xl font-bold text-gray-900 text-center">
                  Get Your Website In 7 Days
                </h2>

                <p className="text-sm text-gray-500 text-center mt-2 mb-6">
                  Fill the details and we’ll contact you within 24 hours.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">

                  {/* Name */}
                  <div className="flex items-center gap-3 bg-gray-50 rounded-xl px-4 py-3 border border-gray-200 focus-within:border-blue-500 transition">
                    <User className="w-4 h-4 text-blue-600" />
                    <input
                      type="text"
                      name="name"
                      placeholder="Full Name"
                      value={form.name}
                      onChange={handleChange}
                      className="w-full bg-transparent outline-none text-sm"
                    />
                  </div>

                  {/* Phone */}
<div className="flex items-center bg-gray-50 rounded-xl border border-gray-200 focus-within:border-blue-500 transition overflow-hidden">

  {/* Country Code */}
  <select
    name="countryCode"
    value={form.countryCode}
    onChange={handleChange}
    className="bg-transparent px-3 py-3 text-sm outline-none border-r border-gray-200 cursor-pointer"
  >
    <option value="+91">🇮🇳 +91</option>
    <option value="+1">🇺🇸 +1</option>
    <option value="+44">🇬🇧 +44</option>
    <option value="+971">🇦🇪 +971</option>
  </select>

  {/* Phone Input */}
  <div className="flex items-center gap-2 px-3 flex-1">
    <Phone className="w-4 h-4 text-blue-600" />
    <input
      type="tel"
      name="phone"
      placeholder="Phone Number"
      value={form.phone}
      onChange={handleChange}
      className="w-full bg-transparent outline-none text-sm"
    />
  </div>

</div>

                  {/* Email */}
                  <div className="flex items-center gap-3 bg-gray-50 rounded-xl px-4 py-3 border border-gray-200 focus-within:border-blue-500 transition">
                    <Mail className="w-4 h-4 text-blue-600" />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      value={form.email}
                      onChange={handleChange}
                      className="w-full bg-transparent outline-none text-sm"
                    />
                  </div>

                 <div>
  <p className="text-[11px] text-gray-500 mb-2">
    Investment Range
  </p>

  <div className="space-y-2">
    {[
      "Less than 10,000",
      "Between 25,000 to 50,000",
      "More than 50,000",
    ].map((option) => (
      <div
        key={option}
        onClick={() => handleBudgetSelect(option)}
        className={`flex items-center justify-between cursor-pointer rounded-lg px-3 py-2 border text-sm transition-all duration-200 ${
          form.budget === option
            ? "border-blue-600 bg-blue-50"
            : "border-gray-200 bg-white hover:border-blue-400"
        }`}
      >
        <span>{option}</span>

        {form.budget === option && (
          <Check className="w-3.5 h-3.5 text-blue-600" />
        )}
      </div>
    ))}
  </div>
</div>

                  {error && (
                    <p className="text-red-500 text-xs text-center">{error}</p>
                  )}

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full rounded-full bg-blue-600 py-3 text-white text-sm font-semibold shadow-md hover:bg-blue-700 hover:scale-[1.02] transition-all duration-300 disabled:opacity-75 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    {isLoading ? "Submitting..." : "Book Your Demo"}
                  </button>

                  <p className="text-xs text-gray-500 text-center mt-3 flex items-center justify-center gap-1">
                    <span className="text-yellow-500">⚡</span>
                    This week only 3 slots available!
                  </p>

                </form>
              </>
            ) :(
  <motion.div
    initial={{ opacity: 0, scale: 0.96 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.3 }}
    className="text-center py-5"
  >
    {/* Compact Success Icon */}
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 18 }}
      className="mx-auto mb-2 w-12 h-12 rounded-full bg-green-100 flex items-center justify-center"
    >
      <span className="text-lg text-green-600">✓</span>
    </motion.div>

    {/* Same Content */}
    <h3 className="text-base font-bold text-green-600">
       Form Submitted!
    </h3>

    <p className="text-gray-600 mt-1 text-xs">
      We are working round the clock, connecting with you shortly.
    </p>
  </motion.div>
)}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LeadFormModal;