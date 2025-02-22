import { Facebook, Instagram, Twitter } from "lucide-react";
import React from "react";
import logo from "../asserts/logo.jpg";

const Footer = () => {
  // Smooth scrolling function
  const handleSmoothScroll = (e) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80, // Adjust for navbar height
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="bg-black text-white pt-16 pb-6">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 pl-2 sm:pl-24 gap-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <a href="#home" onClick={handleSmoothScroll} className="flex items-center gap-2">
              <img src={logo} alt="Xtreme Fitness" className="w-10 h-10 object-contain mr-2" />
              <span className="text-xl font-bold">COMMANDO FITNESS CLUB</span>
            </a>
            <p className="text-gray-400 text-sm">
              Your ultimate fitness destination for strength and well-being.
            </p>
            <div className="flex gap-4">
              {[
                { Icon: Facebook, label: "Facebook" },
                { Icon: Twitter, label: "Twitter" },
                { Icon: Instagram, label: "Instagram" },
              ].map(({ Icon, label }, index) => (
                <a
                  key={index}
                  href="/"
                  className="w-10 h-10 bg-zinc-900 rounded-full flex items-center justify-center hover:bg-[#22c55e] transition-colors"
                  aria-label={`Follow us on ${label}`}
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Opening Hours */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">OPENING HOURS</h3>
            <div className="space-y-2">
              <div>
                <p className="font-medium">Monday – Saturday</p>
                <p className="text-gray-400">12:00 PM – 2:45 PM</p>
              </div>
              <div>
                <p className="font-medium">Sunday – Thursday</p>
                <p className="text-gray-400">5:30 PM – 12:00 AM</p>
              </div>
              <div>
                <p className="font-medium">Friday – Saturday</p>
                <p className="text-gray-400">5:30 PM – 12:00 AM</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">QUICK LINKS</h3>
            <ul className="space-y-2">
              {[
                { name: "About", id: "about" },
                { name: "Services", id: "services" },
                { name: "Trainers", id: "trainers" },
                { name: "Pricing", id: "pricing" },
                { name: "Contact", id: "contact" },
              ].map(({ name, id }) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    onClick={handleSmoothScroll}
                    className="text-gray-400 hover:text-[#22c55e] transition-colors flex items-center gap-2"
                  >
                    <span className="text-[#22c55e]">▸</span> {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">CONTACT US</h3>
            <div className="space-y-2">
              <div>
                <p className="font-medium">Address:</p>
                <p className="text-gray-400">Jamia Millia Road Gulshan e Tayybi C-1 Malir City Karachi</p>
              </div>
              <div>
                <p className="font-medium">Email:</p>
                <p className="text-gray-400">faizcommando26@gmail.com </p>
              </div>
              <div>
                <p className="font-medium">Phone:</p>
                <p className="text-gray-400">0316-2301237 / 0334-3904505</p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-zinc-900 mt-12 pt-6 text-center text-gray-400 text-sm">
          © 2025 commandofitnessclub.com | All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
