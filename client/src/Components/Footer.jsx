import React from "react";

import { Facebook, Instagram, Twitter, MessageCircle } from "lucide-react"; // lucide-react use kora hoyeche icons er jonno

const Footer = () => {
  return (
    <footer className="bg-[#050505] text-white pt-16 pb-8 border-t border-gray-800">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Section 1: Logo & About */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
              STARTEDGE
            </h2>
            <p className="text-gray-400 leading-relaxed text-sm">
              Welcome to Startedge, your digital partner for growth. We
              specialize in high-performance web development, automation, and
              cybersecurity solutions tailored to elevate your business in the
              digital era.
            </p>
          </div>

          {/* Section 2: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li>
                <a href="/" className="hover:text-cyan-400 transition">
                  Home Page
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-cyan-400 transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="/portfolio" className="hover:text-cyan-400 transition">
                  Our Portfolio
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-cyan-400 transition">
                  Services
                </a>
              </li>
              <li>
                <a href="/privacy" className="hover:text-cyan-400 transition">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Section 3: Customer Support */}
          <div>
            <h3 className="text-lg font-semibold mb-6 uppercase tracking-wider">
              Customer Support
            </h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li>
                <a href="/contact" className="hover:text-cyan-400 transition">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="/faqs" className="hover:text-cyan-400 transition">
                  FAQs
                </a>
              </li>
              <li>
                <a href="/terms" className="hover:text-cyan-400 transition">
                  Terms & Conditions
                </a>
              </li>
              <li className="pt-2 text-white font-medium">
                Questions? Call us 24/7
              </li>
              <li className="text-cyan-400">+880 1234 567890</li>
            </ul>
          </div>

          {/* Section 4: Newsletter & Socials */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold uppercase tracking-wider">
              Stay Connected
            </h3>
            <p className="text-gray-400 text-sm">
              Subscribe to our newsletter to get the latest updates on tech
              trends.
            </p>
            <div className="flex flex-col space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-transparent border border-gray-700 p-3 text-sm focus:outline-none focus:border-cyan-400 rounded-sm"
              />
              <button className="bg-white text-black font-bold py-3 px-6 text-xs tracking-widest uppercase hover:bg-cyan-400 transition duration-300">
                Subscribe
              </button>
            </div>
            {/* Social Icons */}
            <div className="flex space-x-4 pt-4">
              <div className="p-2 border border-gray-700 rounded-full hover:bg-cyan-400 hover:text-black transition cursor-pointer">
                <Facebook size={18} />
              </div>
              <div className="p-2 border border-gray-700 rounded-full hover:bg-cyan-400 hover:text-black transition cursor-pointer">
                <Instagram size={18} />
              </div>
              <div className="p-2 border border-gray-700 rounded-full hover:bg-cyan-400 hover:text-black transition cursor-pointer">
                <Twitter size={18} />
              </div>
              <div className="p-2 border border-gray-700 rounded-full hover:bg-cyan-400 hover:text-black transition cursor-pointer">
                <MessageCircle size={18} />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-[2px] text-gray-500">
          <p>© 2026 Startedge Technologies. All Rights Reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <span>Hotline: +880 1234-567890</span>
            <span>Email: startedge@gmail.com</span>
            <span className="text-gray-400">Designed by StartEdge</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
