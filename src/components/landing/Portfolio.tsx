import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const projects = [
  { name: "OJK Jobs", tag: "Services", image: "/ojk-jobs.jpg" },
  { name: "Pj Money Power", tag: "Finance", image: "/pj-money-power.jpg" },
  { name: "Wincity Infraworks", tag: "Infrastructure", image: "/wincity-infraworks.jpg" },
  { name: "Danesh Industries", tag: "Corporate", image: "/danesh-industries.jpg" },
  { name: "Vamtech", tag: "Technology", image: "/vamtech.jpg" },
  { name: "Digimax", tag: "Marketing", image: "/digimax.jpg" },
  { name: "Shayeen", tag: "E-commerce", image: "/shayeen.jpg" },

  // ✅ NEW CARDS
  { name: "The Bot Agency", tag: "Agency", image: "/the-bot-agency.jpg" },
  { name: "Nagarathar Matrimony", tag: "Matrimony", image: "/nagarathar.jpg" },
  { name: "HRMS System", tag: "Software", image: "/hrms.jpg" },
];

const CARD_WIDTH = 420;
const GAP = 40;

const cloned = [
  ...projects.slice(-3),
  ...projects,
  ...projects.slice(0, 3),
];

const Portfolio = () => {
  const [active, setActive] = useState(3);
  const [transition, setTransition] = useState(true);

  const next = () => setActive((prev) => prev + 1);
  const prev = () => setActive((prev) => prev - 1);

  // 🔥 Fast → smooth slow scroll
  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 2500); // faster trigger
    return () => clearInterval(interval);
  }, []);

  // Infinite loop fix
  useEffect(() => {
    if (active === cloned.length - 3) {
      setTimeout(() => {
        setTransition(false);
        setActive(3);
      }, 900);
    }

    if (active === 2) {
      setTimeout(() => {
        setTransition(false);
        setActive(cloned.length - 4);
      }, 900);
    }
  }, [active]);

  useEffect(() => {
    if (!transition) {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setTransition(true);
        });
      });
    }
  }, [transition]);

  return (
  <section className="relative py-16 bg-gradient-to-b from-[#0B1220] to-[#0E1A30] text-white overflow-hidden">

    {/* Heading */}
    <div className="text-center mb-10">
      <h2 className="text-3xl lg:text-4xl font-extrabold">
        This Could Be Your Site
      </h2>
      <p className="text-gray-400 mt-3 text-sm">
        Real sites. Custom designs. Built fast, built right.
      </p>
    </div>

    <div className="relative w-full overflow-hidden">

      {/* LEFT */}
      <button
        onClick={prev}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-white/20 transition"
      >
        <ChevronLeft size={18} />
      </button>

      {/* TRACK */}
      <div className="flex justify-center">
        <div
          className={`flex ${
            transition
              ? "transition-transform duration-[1000ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
              : ""
          }`}
          style={{
            gap: `30px`,
            transform: `translateX(calc(50% - ${
              active * (CARD_WIDTH + 30) + CARD_WIDTH / 2
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
                    : "scale-90 opacity-40"
                }`}
              >
                <div className="relative h-[300px] rounded-[28px] overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.6)] group">

                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  <div className="absolute top-4 right-4 bg-orange-500 text-black text-xs font-semibold px-3 py-1 rounded-full">
                    {project.tag}
                  </div>

                  <div className="absolute bottom-6 left-6">
                    <h3 className="text-xl font-bold">
                      {project.name}
                    </h3>
                    <p className="text-orange-400 text-sm mt-1">
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
        className="absolute right-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-white/20 transition"
      >
        <ChevronRight size={18} />
      </button>
    </div>

    {/* ⭐ INDIA MART RATING */}
    <div className="mt-10 flex flex-col items-center justify-center text-center">
      <p className="text-gray-400 text-xs mb-2">
        Rated on IndiaMART
      </p>

      <div className="flex items-center gap-1">
        <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
        <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
        <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
        <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
        <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
      </div>

      <p className="text-gray-500 text-xs mt-1">
        5 out of 5 rating
      </p>
    </div>

  </section>
);
};

export default Portfolio;