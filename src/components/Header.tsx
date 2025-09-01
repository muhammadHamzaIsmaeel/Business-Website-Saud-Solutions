"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import clsx from "clsx";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Blog", href: "/blog" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={clsx(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled ? "backdrop-blur-md bg-white/80 shadow-md" : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link
          href="/"
          className={clsx(
            "text-2xl font-poppins font-bold transition-colors duration-300",
            scrolled ? "text-gray-900" : "text-gray-100"
          )}
        >
          Saud <span className="text-sky-500">Solutions</span>
        </Link>

        {/* Center Navigation */}
        <nav className="hidden md:flex space-x-8 text-lg font-sans font-medium">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={clsx(
                "transition-colors duration-300 hover:text-gray-400",
                scrolled ? "text-gray-800" : "text-gray-100"
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <Link
          href="/contact"
          className={clsx(
            "px-5 py-2 rounded-full font-semibold transition-all duration-300 border",
            scrolled
              ? // Scrolled (blur background state)
                "border-gray-300 text-gray-800 hover:bg-gray-800 hover:text-white hover:border-gray-800"
              : // Normal (top hero state)
                "border-white text-white hover:bg-white hover:text-gray-800 hover:border-white"
          )}
        >
          Start a Project
        </Link>
      </div>
    </header>
  );
}
