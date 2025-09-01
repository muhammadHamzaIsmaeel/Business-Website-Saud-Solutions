"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { CgMathPlus } from "react-icons/cg";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const projects = [
  {
    id: 1,
    title: "Eyes Look",
    service: "Website Development",
    image: "/project/art.jpg",
    link: "#",
    category: "Website Development",
  },
  {
    id: 2,
    title: "Strong Body",
    service: "E-commerce Website",
    image: "/project/web.jpg",
    link: "#",
    category: "E-commerce Website",
  },
  {
    id: 3,
    title: "Hard Work",
    service: "Graphic Design",
    image: "/project/art1.jpg",
    link: "#",
    category: "Graphic Design",
  },
];

const categories = [
  "All",
  "Website Development",
  "E-commerce Website",
  "WooCommerce",
  "WordPress Website",
  "Shopify",
  "AI Automation",
  "Agentic AI",
  "Graphic Design",
];

export default function CaseStudies() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="portfolio" className="w-full py-16 bg-white text-gray-900">
      <div className="max-w-6xl px-3 md:px-0 mx-auto">
        {/* Heading */}
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold mb-6">Case Studies</h2>

          {/* Filter Buttons Slider */}
          <Swiper
            spaceBetween={12}
            slidesPerView="auto"
            freeMode={true}
            className="w-full px-6"
          >
            {categories.map((cat) => (
              <SwiperSlide key={cat} style={{ width: "auto" }}>
                <button
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition ${
                    activeCategory === cat
                      ? "bg-gray-900 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {cat}
                </button>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="relative rounded-lg overflow-hidden shadow-lg"
              >
                <div className="relative group rounded-md overflow-hidden shadow-lg">
                  {/* Image */}
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={700}
                    height={400}
                    className="w-full h-[430px] object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* Overlay */}

                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end items-center p-4">
                    <Link className="w-full" href={project.link}>                     
                      <div className="bg-white rounded-sm flex px-6 py-4 justify-between items-center">
                        <div className="space-y-1">
                          <h3 className="text-gray-600">{project.service}</h3>
                          <p className="text-gray-950 text-lg font-semibold">
                            {project.title}
                          </p>
                        </div>
                        <div>
                          <CgMathPlus className="text-2xl" />
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
