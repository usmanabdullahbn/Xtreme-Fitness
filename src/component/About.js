import { Play } from "lucide-react";
import "aos/dist/aos.css";
import { useEffect } from "react";
import AOS from "aos";
import img from "../asserts/about img.jpg";

const stats = [
  { number: "600K+", label: "WORKING HOURS" },
  { number: "790+", label: "SUCCESS PROGRAM" },
  { number: "2560+", label: "HAPPY CLIENTS" },
  { number: "830+", label: "PERFECT BODIES" },
];

const AboutSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="bg-black py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="relative" data-aos="fade-up">
            <div className="relative w-full aspect-square rounded-full overflow-hidden">
              <div className="absolute inset-0 border-[20px] border-[#22c55e] rounded-full" />
              <img
                src={img}
                alt="Training session"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-8" data-aos="fade-up">
            <div>
              <h3 className="text-[#22c55e] text-xl mb-4">ABOUT US</h3>
              <h2 className="text-white text-4xl md:text-5xl font-bold leading-tight mb-6">
                WELCOME TO THE
                <br />
                COMMANDO FITNESS CLUB
              </h2>
              <p className="text-gray-300 text-lg">
                At Commando Fitness Club, we believe in pushing limits and
                building strength—both physically and mentally. Whether you're
                just starting your fitness journey or looking to take it to the
                next level, we’ve got you covered. Our gym offers top-quality
                equipment, expert trainers, and high-energy workouts designed to
                help you get stronger, fitter, and more confident. Join our
                community and train like a commando!
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-8" data-aos="fade-up">
              {stats.map((stat, index) => (
                <div key={index} className="space-y-2">
                  <div className="text-[#22c55e] text-4xl md:text-5xl font-bold">
                    {stat.number}
                  </div>
                  <div className="text-white text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
