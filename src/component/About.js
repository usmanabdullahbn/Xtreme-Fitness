import { Play } from "lucide-react";

const stats = [
  { number: "600K+", label: "WORKING HOURS" },
  { number: "790+", label: "SUCCESS PROGRAM" },
  { number: "2560+", label: "HAPPY CLIENTS" },
  { number: "830+", label: "PERFECT BODIES" },
];

const AboutSection = () => {
  return (
    <section className="bg-black py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="relative">
            <div className="relative w-full aspect-square rounded-full overflow-hidden">
              <div className="absolute inset-0 border-[20px] border-[#22c55e] rounded-full" />
              <img
                src="/placeholder.svg?height=800&width=800"
                alt="Training session"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-8">
            <div>
              <h3 className="text-[#22c55e] text-xl mb-4">ABOUT US</h3>
              <h2 className="text-white text-4xl md:text-5xl font-bold leading-tight mb-6">
                WELCOME TO THE
                <br />
                COMMANDO FITNESS GYM
              </h2>
              <p className="text-gray-300 text-lg">
                Euis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur ex
                sint occaecat cupidatat non proident, sunt in cular aui officia deserunt mollit anim laborum.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="space-y-2">
                  <div className="text-[#22c55e] text-4xl md:text-5xl font-bold">{stat.number}</div>
                  <div className="text-white text-sm">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <button className="bg-transparent border border-gray-700 text-white hover:bg-[#22c55e] hover:border-[#22c55e] group px-6 py-3 rounded-md flex items-center">
              Read more
              <span className="ml-2 w-6 h-6 rounded-full bg-[#22c55e] group-hover:bg-white flex items-center justify-center">
                <Play className="w-3 h-3 text-white group-hover:text-[#22c55e]" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
