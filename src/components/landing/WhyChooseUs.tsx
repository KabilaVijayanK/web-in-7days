import { useEffect, useRef, useState } from "react";
import { Zap, BadgeDollarSign, Users, Trophy } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

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

const Counter = ({ target }: { target: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          const step = Math.ceil(target / 40);
          const timer = setInterval(() => {
            start += step;
            if (start >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(start);
            }
          }, 25);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span
      ref={ref}
      className="text-5xl font-extrabold bg-gradient-to-r from-white-600 to-blue-800 bg-clip-text text-transparent"
    >
      {count}+
    </span>
  );
};

const WhyChooseUs = () => (
  <section className="py-28 bg-gradient-to-b from-blue-50 to-white">
    <div className="max-w-6xl mx-auto px-6 lg:px-16">

      {/* Heading */}
      <ScrollReveal>
        <div className="text-center mb-20">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600 mb-4">
            Why Us
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900">
            Why Businesses Choose Us
          </h2>
        </div>
      </ScrollReveal>

      {/* Grid Layout */}
      <div className="grid lg:grid-cols-4 gap-8">

        {/* Feature Cards */}
        {reasons.map((r, i) => (
          <ScrollReveal key={r.title} delay={i * 0.1}>
            <div className="group rounded-3xl bg-white shadow-lg hover:shadow-2xl border border-blue-100 p-8 text-center transition-all duration-300 hover:-translate-y-2">
              
              <div className="mx-auto w-14 h-14 rounded-2xl bg-blue-600 flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition">
                <r.icon className="w-7 h-7 text-white" />
              </div>

              <h3 className="font-bold text-lg text-gray-900 mb-2">
                {r.title}
              </h3>
              <p className="text-sm text-gray-600">
                {r.desc}
              </p>

            </div>
          </ScrollReveal>
        ))}

        {/* Highlight Stats Card */}
        <ScrollReveal delay={0.3}>
          <div className="rounded-3xl bg-blue-600 text-white p-10 text-center shadow-2xl flex flex-col justify-center">
            
            <Counter target={100} />

            <h3 className="text-xl font-bold mt-4">
             Projects
            </h3>

            <p className="text-blue-100 mt-2 text-sm">
              Trusted by businesses nationwide
            </p>

          </div>
        </ScrollReveal>

      </div>
    </div>
  </section>
);

export default WhyChooseUs;