"use client";
import AboutSection from "@/components/landing/AboutSection";
import Achievements from "@/components/landing/Achievements";
import CaseStudies from "@/components/landing/CaseStudies";
import ContactSection from "@/components/landing/Contact";
import FeaturesSection from "@/components/landing/FeaturesSection";
import HeroSection from "@/components/landing/HeroSection";
import Services from "@/components/landing/Services";
import Testimonials from "@/components/landing/Testimonials";


export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesSection/>
      <AboutSection />
      <Achievements/>
      <Services/>
      <Testimonials/>
      <CaseStudies/>
      <ContactSection />
    </>
  );
}
