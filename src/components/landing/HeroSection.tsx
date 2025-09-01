"use client";
import Link from "next/link";
import { HiOutlineSpeakerphone } from "react-icons/hi";

export default function Hero() {
  return (
    <section
      className="relative w-full h-[90vh] bg-gray-900 flex"
      style={{
        backgroundImage: "url('/landing/Hero-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content wrapper - left aligned */}
      <div className="relative z-10 flex items-center w-full">
        <div className="max-w-6xl mx-auto px-6 md:px-12 w-full">
          <div className="max-w-2xl text-left">
            <span className="inline-flex items-center gap-2 text-white rounded-full backdrop-blur-md bg-gray-600/20 py-2 px-6 font-semibold text-sm uppercase tracking-wider">
              <HiOutlineSpeakerphone className="w-4 h-4" />
              Empowering Your Vision
            </span>

            {/* Heading */}
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mt-4 leading-tight">
              We Build Modern <br /> Digital Experiences
            </h1>

            {/* Short description */}
            <p className="text-gray-200 text-base md:text-lg mt-4 max-w-lg">
              Transforming your ideas into interactive, responsive and scalable
              digital solutions tailored to your business needs.
            </p>

            {/* Buttons */}
            <div className="mt-6 flex gap-4">
              <Link
                href="/contact"
                className="px-6 py-3 rounded-full bg-sky-500 text-white font-medium hover:bg-sky-600 transition"
              >
                Contact Us
              </Link>

              <Link
                href="/projects"
                className="px-6 py-3 rounded-full border border-white text-white font-medium hover:bg-white hover:text-gray-900 transition"
              >
                View Projects
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
