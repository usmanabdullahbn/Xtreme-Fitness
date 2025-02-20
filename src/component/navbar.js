"use client";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../asserts/logo.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = ["Home", "About", "Services", "Trainers", "Pricing"];

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm">
      <div className="container flex items-center justify-between h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 pl-2 lg:pl-20">
          <img
            src={logo}
            alt="Xtreme Fitness"
            className="w-10 h-10 object-contain"
          />
          <span className="text-xl font-bold text-white">
            COMMANDO FITNESS Club
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item}
              to="/"
              className={`text-sm font-medium ${
                item === "Home"
                  ? "text-[#22c55e]"
                  : "text-white hover:text-[#22c55e]"
              } transition-colors`}
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* Contact Button (Desktop) */}
        <Link
          to="/contact"
          className="hidden lg:inline-flex border border-[#22c55e] text-white py-2 px-6 rounded-full transition 
                     bg-transparent hover:bg-[#22c55e] hover:text-black"
        >
          Contact
        </Link>

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
      <div
        className={`fixed inset-0 bg-black transition-all ${
          isOpen ? "h-screen w-full opacity-100" : "h-0 w-0 opacity-0"
        } z-50 flex flex-col items-center justify-center`}
      >
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
            <Link
              key={item}
              to={`/${item.toLowerCase().replace(" ", "-")}`}
              onClick={() => setIsOpen(false)}
              className="text-xl font-medium text-white hover:text-[#22c55e] transition-colors"
            >
              {item}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="border border-[#22c55e] text-white py-2 px-6 rounded-full transition 
                       bg-transparent hover:bg-[#22c55e] hover:text-black mt-4"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
