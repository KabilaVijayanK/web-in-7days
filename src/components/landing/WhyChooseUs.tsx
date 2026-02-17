import { Zap, BadgeDollarSign, Users } from "lucide-react";

const reasons = [
  {
    icon: Zap,
    title: "Fast Delivery",
    desc: "Your website ready in 7 days",
  },
  {
    icon: BadgeDollarSign,
    title: "Affordable Pricing",
    desc: "Premium quality at the best price",
  },
  {
    icon: Users,
    title: "In-House Team",
    desc: "No outsourcing, full control",
  },
];

const WhyChooseUs = () => (
  <section className="py-14 bg-gradient-to-b from-blue-50 to-white">
    <div className="max-w-5xl mx-auto px-4 lg:px-6">

      {/* Heading */}
      <div className="text-center mb-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 mb-2">
          Why Us
        </p>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900">
          Why Businesses Choose Us
        </h2>
      </div>

      {/* Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">

        {reasons.map((r) => (
          <div
            key={r.title}
            className="rounded-xl bg-white border border-blue-100 shadow-sm hover:shadow-md transition-all duration-300 p-5 flex flex-col items-center justify-center text-center h-[190px]"
          >
            <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center mb-3">
              <r.icon className="w-5 h-5 text-white" />
            </div>

            <h3 className="font-semibold text-sm text-gray-900 mb-1">
              {r.title}
            </h3>

            <p className="text-xs text-gray-600">
              {r.desc}
            </p>
          </div>
        ))}

        {/* Stats Card Same Size */}
        <div className="rounded-xl bg-blue-600 text-white shadow-sm hover:shadow-md transition-all duration-300 p-5 flex flex-col items-center justify-center text-center h-[190px]">

          <span className="text-3xl font-extrabold">100+</span>

          <h3 className="text-sm font-semibold mt-1">
            Projects
          </h3>

          <p className="text-blue-100 text-xs mt-1">
            Trusted nationwide
          </p>

        </div>

      </div>
    </div>
  </section>
);

export default WhyChooseUs;