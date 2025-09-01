"use client";
import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const testimonials = [
  {
    comment: "The team delivered exactly what I was looking for. Highly professional and responsive!",
    service: "Web Development",
  },
  {
    comment: "Amazing experience! They built a pixel-perfect design and made it responsive.",
    service: "UI/UX Design",
  },
  {
    comment: "Very satisfied with the quality of work. Definitely recommend them for long-term projects.",
    service: "E-commerce Development",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  const prevTestimonial = () => {
    setFade(false);
    setTimeout(() => {
      setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
      setFade(true);
    }, 300);
  };

  const nextTestimonial = () => {
    setFade(false);
    setTimeout(() => {
      setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
      setFade(true);
    }, 300);
  };

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative w-full h-[60vh] flex items-center justify-center text-white"
      style={{
        backgroundImage: "url('/landing/testimonials.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Blur overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
      

      {/* Content */}
      <div
        className={`relative w-4/5 text-center transition-opacity duration-700 ${
          fade ? "opacity-100" : "opacity-0"
        }`}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-10">
          What Our Clients Say
        </h2>

        <p className="text-xl md:text-2xl font-medium italic mb-4">
          &quot;{testimonials[index].comment}&quot;
        </p>
        <span className="block text-lg font-semibold text-yellow-500">
          – {testimonials[index].service}
        </span>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevTestimonial}
        className="absolute left-5 top-1/2 -translate-y-1/2 bg-white/20 p-3 rounded-full hover:bg-white/40 transition"
      >
        <FaChevronLeft size={20} />
      </button>
      <button
        onClick={nextTestimonial}
        className="absolute right-5 top-1/2 -translate-y-1/2 bg-white/20 p-3 rounded-full hover:bg-white/40 transition"
      >
        <FaChevronRight size={20} />
      </button>
    </section>
  );
}
