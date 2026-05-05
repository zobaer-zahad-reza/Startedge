import React, { useState, useEffect } from "react";
import { FaDroplet, FaBars, FaXmark } from "react-icons/fa6";
import { NAV_LINKS } from "../constants/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-md border-b border-gray-100"
          : "bg-white border-b border-gray-100"
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 flex items-center justify-between h-16">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 no-underline">
          <div className="w-9 h-9 bg-red-600 rounded-lg flex items-center justify-center">
            <FaDroplet className="text-white text-base" />
          </div>
          <div className="flex items-baseline gap-1">
            <span className="font-extrabold text-xl text-red-600 leading-none">রক্তো</span>
            <span className="text-gray-400 font-light text-base">Rokto</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <a key={link.label} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
        </div>

        {/* Auth Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <button className="btn-outline !py-2 !px-5 text-sm">Login</button>
          <button className="btn-primary !py-2 !px-5 text-sm">Register</button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-gray-600 p-1"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaXmark size={22} /> : <FaBars size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-5 py-4 flex flex-col gap-2 animate-fade-in">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="nav-link block"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="flex gap-3 mt-3 pt-3 border-t border-gray-100">
            <button className="btn-outline !py-2 !px-5 text-sm flex-1 justify-center">Login</button>
            <button className="btn-primary !py-2 !px-5 text-sm flex-1 justify-center">Register</button>
          </div>
        </div>
      )}
    </nav>
  );
}
