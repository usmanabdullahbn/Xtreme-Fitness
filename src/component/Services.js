import { Play } from "lucide-react";
import "aos/dist/aos.css";
import { useEffect } from "react";
import AOS from "aos";

const services = [
  {
    title: "PERSONAL TRAINING",
    description: "Auia voluptas sit aspernatur aut odit aut fugi sea conseaunta magni dolores eos",
    icon: (
      <svg className="w-12 h-12 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 19h8v-2H4v2zM20 5H4v2h16V5zm-6 6H4v2h10v-2z" />
      </svg>
    ),
  },
  {
    title: "YOGA LESSON",
    description: "Ruia voluptas sit aspernatur aut odit aut fugi sea conseaunta magni dolores eos",
    icon: (
      <svg className="w-12 h-12 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 4c2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4 1.79-4 4-4zm0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4z" />
      </svg>
    ),
  },
  {
    title: "BOXING MARTIAL ARTS",
    description: "Nuia voluptas sit aspernatur aut odit aut fugi sea conseaunta magni dolores eos",
    icon: (
      <svg className="w-12 h-12 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
      </svg>
    ),
  },
  {
    title: "ONLINE COACHING",
    description: "Muia voluptas sit aspernatur aut odit aut fugi sea conseaunta magni dolores eos",
    icon: (
      <svg className="w-12 h-12 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M15 5v2h3v10h-3v2h5V5h-5zM4 5v14h5v-2H6V7h3V5H4z" />
      </svg>
    ),
  },
];

const ServicesSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="relative" data-aos="fade-up">
      {/* Split Background */}
      <div className="absolute inset-0">
        <div className="h-1/2 bg-[#22c55e]" />
        <div className="h-1/2 bg-white" />
      </div>

      <div className="relative container mx-auto px-4 py-20">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h3 className="text-white text-xl mb-4">OUR SERVICES</h3>
          <h2 className="text-white text-4xl md:text-5xl font-bold leading-tight">
            SOLUTIONS FOR MOVING BETTER
            <br />& FEELING A HEALTHIER
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12" data-aos="fade-up">
          {services.map((service, index) => (
            <div key={index} className="relative group overflow-hidden bg-black" data-aos="fade-up">
              <div className="aspect-[4/3]">
                <img src="/placeholder.svg" alt="" className="w-full h-full object-cover opacity-60" />
              </div>
              <div className="absolute inset-0 p-8 flex flex-col justify-end transition-all duration-300">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-white text-2xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-200 mb-4">{service.description}</p>
                <button className="flex items-center text-white group/button">
                  Read more
                  <span className="ml-2 w-6 h-6 rounded-full bg-[#22c55e] group-hover/button:bg-white flex items-center justify-center transition-colors">
                    <Play className="w-3 h-3 text-white group-hover/button:text-[#22c55e]" />
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center" data-aos="fade-up">
          <button className="inline-flex items-center bg-[#22c55e] text-white hover:bg-black hover:text-white px-8 py-4 rounded-full text-lg font-bold transition-colors">
            Join us now
            <span className="ml-2 w-6 h-6 rounded-full bg-white flex items-center justify-center">
              <Play className="w-3 h-3 text-[#22c55e]" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
