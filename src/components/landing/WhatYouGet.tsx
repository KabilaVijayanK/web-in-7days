import { Globe, Smartphone, MessageCircle, Search, HeadphonesIcon } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const features = [
  { icon: Globe, title: "5–8 Page Professional Website" },
  { icon: Smartphone, title: "Mobile Responsive" },
  { icon: MessageCircle, title: "Contact & WhatsApp Integration" },
  { icon: Search, title: "Basic SEO Setup" },
  { icon: HeadphonesIcon, title: "1 Month Free Support" },
];

const WhatYouGet = () => (
  <section
    id="features"
    className="py-20 bg-gradient-to-br from-blue-600 via-blue-600 to-blue-600 text-white"
  >
    <div className="mx-auto px-6 lg:px-16 max-w-6xl">

      {/* Heading */}
      <ScrollReveal>
        <div className="text-center mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-blue-200 mb-3">
            What's Included
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
            Everything You Need to Go Live
          </h2>
        </div>
      </ScrollReveal>

      {/* Feature Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((f, i) => (
          <ScrollReveal key={f.title} delay={i * 0.1}>
            <div className="rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 p-6 flex items-center gap-4 hover:scale-[1.03] transition-all duration-300 shadow-md">
              
              <div className="flex-shrink-0 w-11 h-11 rounded-lg bg-white flex items-center justify-center">
                <f.icon className="w-5 h-5 text-blue-700" />
              </div>

              <span className="font-semibold text-base text-white">
                {f.title}
              </span>

            </div>
          </ScrollReveal>
        ))}
      </div>

    </div>
  </section>
);

export default WhatYouGet;