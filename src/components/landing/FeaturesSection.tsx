"use client";
import { motion } from "framer-motion";
import { FaLightbulb, FaMoneyBillWave, FaRocket } from "react-icons/fa";

const features = [
  {
    icon: <FaLightbulb className="text-gray-700 text-7xl" />,
    title: "Grow your business",
    description: "We believe in challenges and so we have made challenges.",
  },
  {
    icon: <FaMoneyBillWave className="text-gray-700 text-7xl" />,
    title: "Cost savings ideas",
    description: "We also help our clients with social media strategy.",
  },
  {
    icon: <FaRocket className="text-gray-700 text-7xl" />,
    title: "Boost performance",
    description: "We deliver email marketing campaigns to your audience.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="relative bg-white py-20">
      <div className="relative z-10 container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start space-x-4">
              {/* Animated Icon */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {feature.icon}
              </motion.div>

              {/* Text */}
              <div>
                <h3 className="text-xl font-bold text-gray-800">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm mt-1">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}