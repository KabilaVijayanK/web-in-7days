import { ClipboardList, Palette, Rocket } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const steps = [
  { icon: ClipboardList, title: "Share Requirement", desc: "Tell us about your business and what you need." },
  { icon: Palette, title: "We Design & Develop", desc: "Our team crafts a stunning, conversion-ready website." },
  { icon: Rocket, title: "Launch in 7 Days", desc: "Go live with a professional online presence." },
];

const ProcessSteps = () => (
  <section id="process" className="section-alt py-24">
    <div className="container mx-auto px-4">
      <ScrollReveal>
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">How It Works</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground">
            Launch in 3 Simple Steps
          </h2>
        </div>
      </ScrollReveal>

      <div className="flex flex-col lg:flex-row gap-8 max-w-4xl mx-auto items-stretch">
        {steps.map((step, i) => (
          <ScrollReveal key={step.title} delay={i * 0.15} className="flex-1">
            <div className="card-lift rounded-2xl bg-card border border-border p-8 text-center h-full relative">
              {/* Step number */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full gradient-primary flex items-center justify-center text-sm font-bold text-primary-foreground">
                {i + 1}
              </div>
              <div className="mt-4 mb-4 mx-auto w-14 h-14 rounded-2xl gradient-primary flex items-center justify-center">
                <step.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-bold text-lg text-foreground mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default ProcessSteps;
