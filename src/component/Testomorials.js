"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import saim from "../asserts/Saim R.jpg";
const testimonials = [
  {
    quote:
      "Commando Fitness Gym has completely transformed my fitness journey. The trainers are super motivating, and the workouts push me to my limits. I feel stronger and more confident than ever!",
    name: "Saim R.",
    role: "Happy Client",
    image: saim,
  },
];

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section
      className="relative bg-black py-20 overflow-hidden"
      data-aos="fade-up"
    >
      {/* Background Image Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="max-w-4xl mx-auto mb-16 text-center" data-aos="fade-up">
          <h3 className="text-[#22c55e] text-xl mb-4">TESTIMONIALS</h3>
          <h2 className="text-white text-4xl md:text-5xl font-bold leading-tight">
            WHAT OUR CLIENTS
            <br />
            SAY ABOUT US
          </h2>
        </div>

        {/* Testimonial Slider */}
        <div className="max-w-6xl mx-auto" data-aos="fade-up">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Quote Section */}
            <div className="space-y-6">
              <div className="text-[#22c55e] text-6xl font-serif">"</div>
              <blockquote className="text-white text-lg md:text-xl leading-relaxed">
                {testimonials[currentSlide].quote}
              </blockquote>
              <div className="border-l-4 border-[#22c55e] pl-4">
                <div className="text-white font-bold">
                  {testimonials[currentSlide].name}
                </div>
                <div className="text-gray-400">
                  {testimonials[currentSlide].role}
                </div>
              </div>
            </div>

            {/* Image Section */}
            <div className="relative">
              <div className="relative w-full h-[400px] md:h-[500px]">
                <div className="absolute inset-0 rounded-full border-[20px] border-[#22c55e]/20" />
                <img
                  src={testimonials[currentSlide].image || "/placeholder.svg"}
                  alt={testimonials[currentSlide].name}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex gap-4 mt-8">
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-[#22c55e] hover:border-[#22c55e] transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-[#22c55e] hover:border-[#22c55e] transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
