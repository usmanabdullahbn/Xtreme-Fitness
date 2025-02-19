import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram } from "lucide-react";
import { ReactTyped } from "react-typed";
import img from "../asserts/@sadiqAlikhan.svg";

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-black">
      <div className="absolute inset-0">
        {/* <img alt="Hero Background" className="w-full h-full " src={bgImg} /> */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Social Links */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 flex flex-col gap-6" data-aos="fade-up">
        {[Facebook, Twitter, Instagram].map((Icon, index) => (
          <Link key={index} to="/" className="text-white/80 hover:text-[#22c55e] transition-colors">
            <Icon size={20} />
          </Link>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative container pt-32 px-16 min-h-screen flex flex-col md:flex-row items-center justify-between">
        {/* Text Content */}
        <div className="max-w-xl space-y-6">
          <h1 className="text-7xl font-bold text-white" data-aos="fade-up">
            <span className="block">
              <ReactTyped strings={["BE"]} typeSpeed={50} showCursor={false} />
            </span>
            <span className="text-[#22c55e]">
              <ReactTyped strings={["STRONG"]} typeSpeed={50} showCursor={false} />
            </span>
          </h1>
          <p className="text-2xl text-white/90" data-aos="fade-up">
            <ReactTyped strings={["Best GYM And Fitness Center Build Your Health."]} typeSpeed={20} showCursor={false} />
          </p>
          <Link to="/join" className="inline-block bg-[#22c55e] text-white text-lg font-semibold py-3 px-8 rounded-full transition hover:bg-[#22c55e]/90" data-aos="fade-up">
            Join us now
          </Link>
        </div>

        {/* Image Section */}
        <div className="relative w-96 h-96 rounded-full overflow-hidden border-[8px] border-[#22c55e] shadow-lg" data-aos="fade-up">
          <img src={img} alt="Training session" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Slider Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2" data-aos="fade-up">
        {[0, 1, 2, 3].map((index) => (
          <button key={index} className={`w-2 h-2 rounded-full ${index === 2 ? "bg-[#22c55e]" : "bg-white/50"}`} aria-label={`Go to slide ${index + 1}`} />
        ))}
      </div>

      {/* Play Button */}
      <button className="absolute bottom-8 right-8 w-14 h-14 rounded-full bg-[#22c55e] flex items-center justify-center" aria-label="Play video" data-aos="fade-up">
        <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-white border-b-8 border-b-transparent ml-1" />
      </button>
    </div>
  );
};

export default Hero;
