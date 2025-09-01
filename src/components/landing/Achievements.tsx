import { useEffect } from "react";
import { CheckCircle, Globe, Clock } from "lucide-react";

export default function Achievements() {
  useEffect(() => {
    const counters: { id: string; target: number; duration: number }[] = [
      { id: "projects-counter", target: 150, duration: 2000 },
      { id: "clients-counter", target: 10, duration: 2000 },
      { id: "years-counter", target: 5, duration: 2000 },
    ];

    const options: IntersectionObserverInit = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const handleIntersection = (
      entries: IntersectionObserverEntry[],
      observer: IntersectionObserver
    ) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          counters.forEach((counter) => {
            const element = document.getElementById(counter.id);
            if (!element) return; // ✅ null check added

            let current = 0;
            const increment = counter.target / (counter.duration / 16); // Approx 60fps

            const updateCounter = () => {
              if (current < counter.target) {
                current += increment;
                element.textContent = Math.ceil(current) + "+";
                requestAnimationFrame(updateCounter);
              } else {
                element.textContent = counter.target + "+";
              }
            };

            updateCounter();
          });
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);
    const section = document.querySelector("section#achievements");
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="achievements"
      className="w-full relative bg-cover bg-center py-10 px-6 md:px-20 lg:px-32"
      style={{
        backgroundImage: "url('/landing/Achievements.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative max-w-6xl mx-auto text-center text-white">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-24">
          {/* Projects Delivered */}
          <div className="flex flex-col items-center">
            <CheckCircle className="w-14 h-14 text-yellow-400 mb-4 animate-pulse" />
            <h3
              className="text-5xl font-extrabold text-yellow-300"
              id="projects-counter"
            >
              0
            </h3>
            <p className="text-lg text-gray-200 mt-2">Projects Delivered</p>
          </div>

          {/* Clients in Countries */}
          <div className="flex flex-col items-center">
            <Globe className="w-14 h-14 text-yellow-400 mb-4 animate-pulse" />
            <h3
              className="text-5xl font-extrabold text-yellow-300"
              id="clients-counter"
            >
              0
            </h3>
            <p className="text-lg text-gray-200 mt-2">Clients in Countries</p>
          </div>

          {/* Years Experience */}
          <div className="flex flex-col items-center">
            <Clock className="w-14 h-14 text-yellow-400 mb-4 animate-pulse" />
            <h3
              className="text-5xl font-extrabold text-yellow-300"
              id="years-counter"
            >
              0
            </h3>
            <p className="text-lg text-gray-200 mt-2">Years Experience</p>
          </div>
        </div>
      </div>
    </section>
  );
}
