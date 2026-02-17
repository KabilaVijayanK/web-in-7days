import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const projects = [
  { name: "OJK Jobs", tag: "Services", image: "/ojk-jobs.jpg" },
  { name: "Pj Money Power", tag: "Finance", image: "/pj-money-power.jpg" },
  { name: "Wincity Infraworks", tag: "Infrastructure", image: "/wincity-infraworks.jpg" },
  { name: "Danesh Industries", tag: "Corporate", image: "/danesh-industries.jpg" },
  { name: "Vamtech", tag: "Technology", image: "/vamtech.jpg" },
  { name: "Digimax", tag: "Marketing", image: "/digimax.jpg" },
  { name: "Waves", tag: "Community", image: "/waves.jpg" },
];

const CARD_WIDTH = 420;
const GAP = 40;

const cloned = [
  ...projects.slice(-2),
  ...projects,
  ...projects.slice(0, 2),
];

const Portfolio = () => {
  const [active, setActive] = useState(2); // start from real first
  const [transition, setTransition] = useState(true);

  const next = () => setActive((prev) => prev + 1);
  const prev = () => setActive((prev) => prev - 1);

  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (active === cloned.length - 2) {
      setTimeout(() => {
        setTransition(false);
        setActive(2);
      }, 700);
    }

    if (active === 1) {
      setTimeout(() => {
        setTransition(false);
        setActive(cloned.length - 3);
      }, 700);
    }

    setTimeout(() => {
      setTransition(true);
    }, 750);
  }, [active]);

  return (
    <section className="relative py-32 bg-gradient-to-b from-[#0B1220] to-[#0E1A30] text-white overflow-hidden">

      <div className="text-center mb-20">
        <h2 className="text-4xl lg:text-5xl font-extrabold">
          This Could Be Your Site
        </h2>
        <p className="text-gray-400 mt-4 text-sm">
          Real sites. Custom designs. Built fast, built right.
        </p>
      </div>

      <div className="relative w-full overflow-hidden">

        {/* LEFT */}
        <button
          onClick={prev}
          className="absolute left-10 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-white/20 transition"
        >
          <ChevronLeft size={20} />
        </button>

        {/* TRACK */}
        <div className="flex justify-center">
          <div
            className={`flex ${transition ? "transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]" : ""}`}
            style={{
              gap: `${GAP}px`,
              transform: `translateX(calc(50% - ${
                active * (CARD_WIDTH + GAP) + CARD_WIDTH / 2
              }px))`,
            }}
          >
            {cloned.map((project, index) => {
              const isCenter = index === active;

              return (
                <div
                  key={index}
                  style={{ width: CARD_WIDTH }}
                  className={`flex-shrink-0 transition-all duration-700 ${
                    isCenter
                      ? "scale-100 opacity-100"
                      : "scale-90 opacity-50"
                  }`}
                >
                  <div className="relative h-[320px] rounded-[32px] overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.6)]">

                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-cover"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                    <div className="absolute top-5 right-5 bg-orange-500 text-black text-xs font-semibold px-4 py-1.5 rounded-full">
                      {project.tag}
                    </div>

                    <div className="absolute bottom-8 left-8">
                      <h3 className="text-2xl font-bold">
                        {project.name}
                      </h3>
                      <p className="text-orange-400 text-sm mt-2">
                        View demo ↗
                      </p>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* RIGHT */}
        <button
          onClick={next}
          className="absolute right-10 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-white/20 transition"
        >
          <ChevronRight size={20} />
        </button>

      </div>
    </section>
  );
};

export default Portfolio;