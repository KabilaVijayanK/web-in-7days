import { useEffect, useState } from "react";
import ScrollReveal from "./ScrollReveal";

const AnimatedPrice = ({ value }: { value: number }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1200; // animation speed
    const increment = value / (duration / 16);

    const counter = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(counter);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(counter);
  }, [value]);

  return (
    <span className="gradient-text">
      ₹{count.toLocaleString()}
    </span>
  );
};

const PricingAnchor = () => (
  <section id="pricing" className="section-alt py-20">
    <div className="container mx-auto px-4 text-center">
      <ScrollReveal>
        <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">
          Transparent Pricing
        </p>

        <h2 className="text-4xl sm:text-5xl font-extrabold text-foreground">
          Packages Starting From{" "}
          <AnimatedPrice value={29999} />
        </h2>

        <p className="mt-4 text-lg text-muted-foreground max-w-md mx-auto">
          Clear. Transparent. No confusion.
        </p>
      </ScrollReveal>
    </div>
  </section>
);

export default PricingAnchor;