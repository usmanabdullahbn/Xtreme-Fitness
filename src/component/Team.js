import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import img from "../asserts/profile.jpg";

const teamMembers = [
  {
    name: "Sadiq Ali Khan",
    role: "CrossFit Coach",
    image: img,
  },
];

const SocialLinks = () => (
  <div className="flex justify-center gap-4 mt-4">
    {[{ Icon: Facebook, label: "Facebook" }, { Icon: Twitter, label: "Twitter" }, { Icon: Instagram, label: "Instagram" }].map(({ Icon, label }, index) => (
      <Link
        key={index}
        to="/"
        className="w-12 h-12 bg-white rounded-full flex items-center justify-center group transition-all duration-300 hover:bg-[#22c55e]"
        aria-label={`Follow on ${label}`}
      >
        <Icon className="w-6 h-6 text-[#22c55e] group-hover:text-white transition-colors duration-300" />
      </Link>
    ))}
  </div>
);

const TeamSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="bg-[#22c55e] py-24 flex justify-center items-center" data-aos="fade-up">
      <div className="container px-4 text-center">
        {/* Section Header */}
        <div className="mb-16" data-aos="fade-up">
          <h3 className="text-white text-2xl md:text-3xl mb-4">TEAM MEMBERS</h3>
          <h2 className="text-white text-5xl md:text-6xl font-bold">TEAM OF EXPERT COACHES</h2>
        </div>

        {/* Team Member */}
        <div className="flex flex-col items-center" data-aos="fade-up">
          {/* Profile Image */}
          <div className="w-72 h-72 rounded-full overflow-hidden mb-6 border-4 border-white shadow-lg">
            <img src={teamMembers[0].image} alt={teamMembers[0].name} className="w-full h-full object-cover" />
          </div>

          {/* Member Info */}
          <h3 className="text-white text-3xl md:text-4xl font-bold mb-2">{teamMembers[0].name}</h3>
          <p className="text-white/90 text-lg md:text-xl mb-6">{teamMembers[0].role}</p>

          {/* Social Links */}
          <SocialLinks />
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
