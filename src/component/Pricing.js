import React from "react";
import { Check } from "lucide-react";

const pricingPlans = [
  {
    name: "BASIC PLAN",
    price: "29",
    duration: "Per Month",
    features: ["Personal Trainer", "Convenient Time", "Special Class", "Group Training", "Free Fitness Training"],
    isPopular: false,
  },
  {
    name: "STANDARD PLAN",
    price: "49",
    duration: "Per Month",
    features: [
      "Personal Trainer",
      "Convenient Time",
      "Special Class",
      "Group Training",
      "Free Fitness Training",
      "Diet Plan Included",
    ],
    isPopular: true,
  },
  {
    name: "PREMIUM PLAN",
    price: "99",
    duration: "Per Month",
    features: [
      "Personal Trainer",
      "Convenient Time",
      "Special Class",
      "Group Training",
      "Free Fitness Training",
      "Diet Plan Included",
      "Full Access",
    ],
    isPopular: false,
  },
];

const PricingSection = () => {
  return (
    <section className="bg-white py-20" data-aos="fade-up">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h3 className="text-[#22c55e] text-xl mb-4">PRICING TABLES</h3>
          <h2 className="text-black text-4xl md:text-5xl font-bold">EXCLUSIVE PRICING PLANS</h2>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-zinc-900 rounded-lg p-8 flex flex-col h-full ${plan.isPopular ? "border-2 border-[#22c55e]" : ""}`}
              data-aos="fade-up"
            >
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-[#22c55e] text-white text-sm font-semibold px-4 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Plan Content */}
              <div className="flex-grow">
                <div className="text-center mb-8">
                  <h3 className="text-white text-2xl font-bold mb-4">{plan.name}</h3>
                  <div className="flex items-center justify-center gap-1">
                    <span className="text-[#22c55e] text-4xl font-bold">$</span>
                    <span className="text-white text-6xl font-bold">{plan.price}</span>
                  </div>
                  <p className="text-gray-400 mt-2">{plan.duration}</p>
                </div>

                {/* Features List */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <span className="text-[#22c55e]">
                        <Check size={20} />
                      </span>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Button */}
              <button className="w-full py-3 text-white rounded-md transition-colors bg-zinc-800 hover:bg-[#22c55e]">
                CHOOSE PLAN
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
