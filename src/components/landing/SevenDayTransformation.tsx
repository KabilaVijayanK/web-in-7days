import {
  Users,
  CalendarDays,
  Palette,
  RefreshCcw,
  Code2,
  Zap,
  Rocket,
} from "lucide-react";

const steps = [
  {
    day: "Day 1",
    icon: Users,
    title: "Strategy & Discovery",
    desc: "Deep dive into your business goals, target audience, competitors, and brand positioning to build a strong foundation.",
  },
  {
    day: "Day 2",
    icon: CalendarDays,
    title: "Content & Assets",
    desc: "Gather all materials, refine messaging, optimize copy, images, and brand assets to align with your vision.",
  },
  {
    day: "Day 3",
    icon: Palette,
    title: "Design & Wireframes",
    desc: "Create conversion-focused layouts, user flows, and modern UI designs tailored to your brand identity.",
  },
  {
    day: "Day 4",
    icon: RefreshCcw,
    title: "Refinement & Approval",
    desc: "Polish designs based on your feedback and finalize structure before moving into development.",
  },
  {
    day: "Day 5",
    icon: Code2,
    title: "Development & Build",
    desc: "Transform approved designs into a fast, responsive, and fully functional website.",
  },
  {
    day: "Day 6",
    icon: Zap,
    title: "Testing & Optimization",
    desc: "Performance tuning, SEO setup, mobile responsiveness, cross-browser testing, and bug fixes.",
  },
  {
    day: "Day 7",
    icon: Rocket,
    title: "Launch & Handover",
    desc: "Your website goes live with training, documentation, and post-launch support included.",
  },
];

const SevenDayTransformation = () => {
  return (
    <section className="relative bg-gradient-to-b from-blue-50 to-white py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900">
            Your 7-Day Transformation
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            From strategy to launch, here's your step-by-step journey to a website
            that converts visitors into customers.
          </p>
        </div>

        {/* Timeline Wrapper */}
        <div className="relative">

          {/* Horizontal Line */}
          <div className="hidden xl:block absolute top-16 left-0 right-0 h-1 bg-blue-200 z-0" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-7 gap-8 relative z-10">

            {steps.map((step, index) => (
              <div
                key={index}
                className="relative bg-white border border-blue-100 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center min-h-[320px]"
              >

                {/* Day Badge */}
                <div className="absolute -top-5 px-4 py-1 text-xs font-semibold bg-blue-600 text-white rounded-full shadow-md">
                  {step.day}
                </div>

                {/* Icon */}
                <div className="mt-8 mb-5 w-14 h-14 rounded-xl bg-blue-600 flex items-center justify-center shadow-md">
                  <step.icon className="w-7 h-7 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-base font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-600 leading-relaxed">
                  {step.desc}
                </p>

              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
};

export default SevenDayTransformation;