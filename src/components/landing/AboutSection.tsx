"use client";
import {
  Sparkles, // Creative
  Code2,    // Nerd / Coding
  Flame,    // Passionate
  Briefcase // Professional
} from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="w-full bg-white py-16 px-6 md:px-20 lg:px-32">
      <div className="max-w-6xl mx-auto text-center">
        {/* Main Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          We Are Saud Solutions
        </h1>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Something You&apos;ll Always Love
        </h2>
        <p className="text-gray-600 text-lg mb-12 max-w-3xl mx-auto">
          We create experiences that transform brands, grow businesses, and make people&apos;s lives better. Building brands and driving sales with powerful ideas in website development, e-commerce solutions, WooCommerce, WordPress websites, Shopify stores, AI automation, agentic AI, and graphic design.
        </p>

        {/* Grid of Value Propositions */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* We're Creative */}
          <div className="flex items-start space-x-4">
            <Sparkles className="w-40 h-40 text-yellow-600" />
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">We&apos;re Creative</h3>
              <h4 className="text-lg font-semibold text-gray-700 mb-2">Crafting With Love</h4>
              <p className="text-gray-600">
                Operating and booming since our inception, we have an excellent record of delivering futuristic website development, e-commerce websites, WooCommerce integrations, WordPress websites, Shopify solutions, AI automation, agentic AI systems, and graphic design services to hundreds of clients.
              </p>
            </div>
          </div>

          {/* We're Cool Nerds */}
          <div className="flex items-start space-x-4">
            <Code2 className="w-40 h-40 text-yellow-600" />
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">We&apos;re Cool Nerds</h3>
              <h4 className="text-lg font-semibold text-gray-700 mb-2">Coding With Fun</h4>
              <p className="text-gray-600">
                Years of international exposure and experience in website development, e-commerce, WooCommerce, WordPress, Shopify, AI automation, agentic AI, and graphic design have led us to refine and mature our development methodology.
              </p>
            </div>
          </div>

          {/* We're Passionate */}
          <div className="flex items-start space-x-4">
            <Flame className="w-40 h-40 text-yellow-600" />
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">We&apos;re Passionate</h3>
              <h4 className="text-lg font-semibold text-gray-700 mb-2">Available When You Need Us</h4>
              <p className="text-gray-600">
                The driving force behind Saud Solutions&apos; progress is its client-centric philosophy, ensuring top-notch website development, e-commerce solutions, WooCommerce, WordPress websites, Shopify, AI automation, agentic AI, and graphic design.
              </p>
            </div>
          </div>

          {/* We're Professional */}
          <div className="flex items-start space-x-4">
            <Briefcase className="w-40 h-40 text-yellow-600" />
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">We&apos;re Professional</h3>
              <h4 className="text-lg font-semibold text-gray-700 mb-2">Goal Oriented</h4>
              <p className="text-gray-600">
                We have helped companies move from traditional businesses to online powerhouses with expert website development, e-commerce websites, WooCommerce, WordPress, Shopify, AI automation, agentic AI, and graphic design. Today, if you are not making the best use of the internet, you are not making much of your brand.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
