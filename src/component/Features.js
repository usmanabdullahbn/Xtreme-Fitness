"use client";

import {
  Activity,
  ChevronLeft,
  ChevronRight,
  Dumbbell,
  Zap,
} from "lucide-react";
import React from "react";

const features = [
  {
    title: "WEIGHT LIFTING",
    description:
      "Duia voluptas sit asper natur aut odit aut fugi sed quia conseaunta ma gni dolores eos",
    icon: (props) => (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z" />
        <line x1="16" y1="8" x2="2" y2="22" />
        <line x1="17.5" y1="15" x2="9" y2="15" />
      </svg>
    ),
  },
  {
    title: "FLEX MUSCLE",
    description:
      "Quia voluptas sit asper natur aut odit aut fugi sed quia conseaunta ma gni dolores eos",
    icon: Dumbbell,
  },
  {
    title: "POWERFUL VITAMINS",
    description:
      "Auia voluptas sit asper natur aut odit aut fugi sed quia conseaunta ma gni dolores eos",
    icon: Zap,
  },
  {
    title: "ABDOMINAL SESSIONS",
    description:
      "Ruia voluptas sit asper natur aut odit aut fugi sed quia conseaunta ma gni dolores eos",
    icon: Activity,
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h3 className="text-[#22c55e] text-xl mb-4">WHY CHOOSE US</h3>
          <h2 className="text-4xl md:text-5xl font-bold">
            BUILD YOUR BEST BODY
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg text-center group hover:shadow-lg transition-shadow"
              data-aos="fade-up"
            >
              {/* Icon */}
              <div className="mb-6 inline-flex">
                <feature.icon
                  className="w-16 h-16 text-[#22c55e] group-hover:scale-110 transition-transform"
                  aria-hidden="true"
                />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
              <p className="text-gray-600 mb-4">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex justify-center gap-4 mt-12" data-aos="fade-up">
          <button
            className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-[#22c55e] hover:text-white hover:border-[#22c55e] transition-colors"
            aria-label="Previous"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-[#22c55e] hover:text-white hover:border-[#22c55e] transition-colors"
            aria-label="Next"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
