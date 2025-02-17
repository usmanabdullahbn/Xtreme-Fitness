import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram } from "lucide-react";

const teamMembers = [
  {
    name: "MARVIN JOINER",
    role: "CrossFit Coach",
    image: "https://html.designingmedia.com/xtreme-fitness/assets/images/team_member_1.png",
  },
  {
    name: "PATRICIA WOODRUM",
    role: "Cardio & Conditioning",
    image: "https://html.designingmedia.com/xtreme-fitness/assets/images/team_member_2.png",
  },
  {
    name: "HANNAZ STONE",
    role: "Fitness Coach",
    image: "https://html.designingmedia.com/xtreme-fitness/assets/images/team_member_3.png",
  },
];

const SocialLinks = () => (
  <div className="flex justify-center gap-3">
    {[{ Icon: Facebook, label: "Facebook" }, { Icon: Twitter, label: "Twitter" }, { Icon: Instagram, label: "Instagram" }].map(({ Icon, label }, index) => (
      <Link
        key={index}
        to="/"
        className="w-10 h-10 bg-white rounded-full flex items-center justify-center group transition-colors duration-300 hover:bg-[#22c55e]"
        aria-label={`Follow on ${label}`}
      >
        <Icon className="w-5 h-5 text-[#22c55e] group-hover:text-white transition-colors duration-300" />
      </Link>
    ))}
  </div>
);

const TeamSection = () => {
  return (
    <section className="bg-[#22c55e] py-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h3 className="text-white text-xl mb-4">TEAM MEMBERS</h3>
          <h2 className="text-white text-4xl md:text-5xl font-bold">TEAM OF EXPERT COACHES</h2>
        </div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col items-center">
              {/* Profile Image */}
              <div className="w-64 h-64 rounded-full overflow-hidden mb-6">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Member Info */}
              <h3 className="text-white text-2xl font-bold mb-2">{member.name}</h3>
              <p className="text-white/90 mb-6">{member.role}</p>

              {/* Social Links */}
              <SocialLinks />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
