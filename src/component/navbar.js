"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../asserts/logo.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", id: "features" },
    { name: "About", id: "about" },
    { name: "Services", id: "services" },
    { name: "Trainers", id: "trainers" },
    { name: "Pricing", id: "pricing" },
  ];

  // Smooth Scrolling Function
  const handleSmoothScroll = (e) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80, // Adjust for fixed navbar height
        behavior: "smooth",
      });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm">
      <div className="container flex items-center justify-between h-20">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 pl-2 lg:pl-20">
          <img
            src={logo}
            alt="Xtreme Fitness"
            className="w-10 h-10 object-contain"
          />
          <span className="text-xl font-bold text-white">
            COMMANDO FITNESS CLUB
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={handleSmoothScroll}
              className="text-sm font-medium text-white hover:text-[#22c55e] transition-colors"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Contact Button (Desktop) */}
        <a
          href="#contact"
          onClick={handleSmoothScroll}
          className="hidden lg:inline-flex border border-[#22c55e] text-white py-2 px-6 rounded-full transition 
                     bg-transparent hover:bg-[#22c55e] hover:text-black"
        >
          Contact
        </a>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white p-2 rounded-md"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {isOpen && (
        <div className="fixed inset-0 bg-black z-50 flex flex-col items-center justify-center">
          {/* Close Button */}
          <button
            className="absolute top-6 right-6 text-white"
            onClick={() => setIsOpen(false)}
          >
            <X className="h-8 w-8" />
          </button>

          {/* Mobile Navigation */}
          <nav className="flex flex-col gap-6 text-center">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  handleSmoothScroll(e);
                  setIsOpen(false);
                }}
                className="text-xl font-medium text-white hover:text-[#22c55e] transition-colors"
              >
                {item.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => {
                handleSmoothScroll(e);
                setIsOpen(false);
              }}
              className="border border-[#22c55e] text-white py-2 px-6 rounded-full transition 
                         bg-transparent hover:bg-[#22c55e] hover:text-black mt-4"
            >
              Contact
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
