import React, { useState, useEffect } from "react";
import Logo from "../assets/StartedgeLogo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll korle navbar e shadow/blur effect er jonno
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Services", href: "#" },
    { name: "Courses", href: "#" },
    { name: "Subscriptions", href: "#" },
    { name: "Portfolio", href: "#" },
    { name: "Social Impact", href: "#" },
    { name: "About", href: "#" },
    { name: "Contact", href: "#" },
  ];

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md shadow-lg py-2"
          : "bg-white py-4"
      }`}
    >
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section - Hover scaling effect */}
          <div className="flex-shrink-0 transition-transform duration-300 hover:scale-105">
            <img className="w-44 md:w-52" src={Logo} alt="Startedge Logo" />
          </div>

          {/* Desktop Menu - Modern font & hover state */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-center space-x-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="relative group px-4 py-2 text-sm font-semibold text-gray-700 hover:text-cyan-600 transition-colors duration-300"
                >
                  {link.name}
                  {/* Bottom animated line */}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-500 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}

              {/* Optional: Add a 'Get Started' button for better UX */}
              {/* <button className="ml-4 bg-cyan-600 text-white px-5 py-2 rounded-full text-sm font-bold hover:bg-cyan-700 transition-all shadow-md hover:shadow-cyan-200">
                Join Now
              </button> */}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-gray-600 hover:bg-gray-100 focus:outline-none transition-colors"
            >
              <span className="sr-only">Open menu</span>
              {isOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Clean slide-down effect */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-height-screen opacity-100" : "max-h-0 opacity-0"
        } bg-white border-t border-gray-100`}
      >
        <div className="px-4 pt-2 pb-6 space-y-2 shadow-inner">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block px-4 py-3 text-base font-medium text-gray-700 hover:bg-cyan-50 hover:text-cyan-600 rounded-xl transition-all"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 px-4">
            <button className="w-full bg-cyan-600 text-white py-3 rounded-xl font-bold">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
