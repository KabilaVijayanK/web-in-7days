import { ClipboardList, Palette, Rocket } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const steps = [
  {
    icon: ClipboardList,
    title: "Share Requirement",
    desc: "Tell us about your business and what you need.",
  },
  {
    icon: Palette,
    title: "We Design & Develop",
    desc: "Our team crafts a stunning, conversion-ready website.",
  },
  {
    icon: Rocket,
    title: "Launch in 7 Days",
    desc: "Go live with a professional online presence.",
  },
];

const ProcessSteps = () => (
  <section
    id="process"
    className="py-14 bg-gradient-to-b from-white to-blue-50 scroll-mt-24"
  >
    <div className="max-w-5xl mx-auto px-4 lg:px-6">

      {/* Heading */}
      <ScrollReveal>
        <div className="text-center mb-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 mb-2">
            How It Works
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900">
            Launch in 3 Simple Steps
          </h2>
        </div>
      </ScrollReveal>

      {/* Steps Grid */}
      <div className="grid md:grid-cols-3 gap-5">

        {steps.map((step, i) => (
          <ScrollReveal key={step.title} delay={i * 0.12}>
            <div className="relative bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-blue-100 flex flex-col items-center text-center">

              {/* Step Number */}
              <div className="absolute -top-3 w-7 h-7 rounded-full bg-blue-600 text-white text-xs font-bold flex items-center justify-center">
                {i + 1}
              </div>

              {/* Icon */}
              <div className="mb-4 mt-3 w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center">
                <step.icon className="w-5 h-5 text-white" />
              </div>

              {/* Title */}
              <h3 className="text-base font-bold text-gray-900 mb-1">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-xs text-gray-600 leading-relaxed">
                {step.desc}
              </p>

            </div>
          </ScrollReveal>
        ))}

      </div>
    </div>
  </section>
);

export default ProcessSteps;