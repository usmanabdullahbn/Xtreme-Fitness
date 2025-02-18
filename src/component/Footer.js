import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-16 pb-6">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 sm:pl-24 gap-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              {/* <img
                src="/placeholder.svg"
                alt="Xtreme Fitness"
                className="w-10 h-10 object-contain"
              /> */}
              <span className="text-xl font-bold">COMMANDO FITNESS GYM</span>
            </Link>
            <p className="text-gray-400 text-sm">
              Your ultimate fitness destination for strength and well-being.
            </p>
            <div className="flex gap-4">
              {[{ Icon: Facebook, label: "Facebook" }, { Icon: Twitter, label: "Twitter" }, { Icon: Instagram, label: "Instagram" }].map(({ Icon, label }, index) => (
                <Link
                  key={index}
                  to="/"
                  className="w-10 h-10 bg-zinc-900 rounded-full flex items-center justify-center hover:bg-[#22c55e] transition-colors"
                  aria-label={`Follow us on ${label}`}
                >
                  <Icon size={20} />
                </Link>
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
              {["About", "Services", "Trainers", "Pricing", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-[#22c55e] transition-colors flex items-center gap-2"
                  >
                    <span className="text-[#22c55e]">▸</span> {item}
                  </Link>
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
                <p className="text-gray-400">121 King Street, Melbourne, 3000, Australia</p>
              </div>
              <div>
                <p className="font-medium">Email:</p>
                <p className="text-gray-400">info@commandofitnessgym.com</p>
              </div>
              <div>
                <p className="font-medium">Phone:</p>
                <p className="text-gray-400">+61 3 8376 6284</p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-zinc-900 mt-12 pt-6 text-center text-gray-400 text-sm">
          © 2025 commandofitnessgym.com | All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
