import React from "react";
import {
  Facebook,
  Instagram,
  Twitter,
  MessageCircle,
  Mail,
  Phone,
} from "lucide-react";

import Logo from "../assets/StartedgeLogo.png";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 pt-20 pb-10 border-t border-gray-100">
      <div className=" mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Section 1: Logo & About */}
          <div className="space-y-6">
            {/* <h2 className="text-2xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">
              STARTEDGE
            </h2> */}
            <img className="w-44 md:w-60" src={Logo} alt="Startedge Logo" />
            <p className="text-gray-500 leading-relaxed text-sm">
              Welcome to Startedge, your digital partner for growth. We
              specialize in high-performance web development, automation, and
              cybersecurity solutions tailored to elevate your business in the
              digital era.
            </p>
          </div>

          {/* Section 2: Quick Links */}
          <div>
            <h3 className="text-sm font-bold mb-6 uppercase tracking-[2px] text-gray-900">
              Quick Links
            </h3>
            <ul className="space-y-3 text-gray-500 text-sm">
              {[
                "Home Page",
                "About Us",
                "Our Portfolio",
                "Services",
                "Privacy Policy",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="hover:text-cyan-600 transition-all duration-300 hover:pl-1 hover:underline"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 3: Customer Support */}
          <div>
            <h3 className="text-sm font-bold mb-6 uppercase tracking-[2px] text-gray-900">
              Customer Support
            </h3>
            <ul className="space-y-4 text-gray-500 text-sm">
              <li>
                <a
                  href="#"
                  className="hover:text-cyan-600 transition hover:underline"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-cyan-600 transition hover:underline"
                >
                  FAQs
                </a>
              </li>
              <li className="pt-2 text-gray-900 font-semibold flex items-center gap-2">
                <Phone size={14} className="text-cyan-600" />
                Questions? Call us 24/7
              </li>
              <li className="text-cyan-600 font-bold text-lg">
                +880 1625 239776
              </li>
            </ul>
          </div>

          {/* Section 4: Newsletter & Socials */}
          <div className="space-y-6">
            <h3 className="text-sm font-bold uppercase tracking-[2px] text-gray-900">
              Stay Connected
            </h3>
            <div className="flex flex-col space-y-2">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full bg-gray-50 border border-gray-200 p-3 pr-12 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500 rounded-xl transition-all"
                />
                <button className="absolute right-2 top-1.5 bg-gray-900 text-white p-1.5 rounded-lg hover:bg-cyan-600 transition-colors">
                  <Mail size={18} />
                </button>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex space-x-3 pt-2">
              {[Facebook, Instagram, Twitter, MessageCircle].map(
                (Icon, index) => (
                  <div
                    key={index}
                    className="p-2.5 bg-gray-50 text-gray-600 rounded-full hover:bg-cyan-50 hover:text-cyan-600 transition-all cursor-pointer border border-gray-100 shadow-sm"
                  >
                    <Icon size={18} />
                  </div>
                ),
              )}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-20 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center text-[11px] font-medium uppercase tracking-wider text-gray-400">
          <p>© 2026 Startedge Technologies. All Rights Reserved.</p>
          <div className="flex flex-wrap justify-center gap-6 mt-4 md:mt-0">
            <span className="flex items-center gap-1 hover:text-gray-700 transition cursor-default">
              startedge.official@gmail.com
            </span>
            <span className="text-gray-300 hidden sm:inline">|</span>
            <span className="hover:text-cyan-600 transition cursor-default">
              Designed by StartEdge
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
