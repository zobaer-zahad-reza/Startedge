import React from "react";
import { FaDroplet, FaFacebookF, FaYoutube, FaXTwitter } from "react-icons/fa6";
import { FOOTER_LINKS, BLOOD_INFO_LINKS } from "../constants/data";

export default function Footer() {
  return (
    <footer className="bg-gray-950 pt-16 pb-8 px-5">
      <div className="max-w-6xl mx-auto">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-14">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center">
                <FaDroplet className="text-white text-xs" />
              </div>
              <span className="font-extrabold text-xl text-white">Rokto</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-6 max-w-xs">
              Rokto connects blood searchers with voluntary donors instantly through
              SMS and website — always free, always available.
            </p>
            {/* Social Icons */}
            <div className="flex gap-3">
              {[
                { icon: <FaFacebookF />, label: "Facebook" },
                { icon: <FaYoutube />,   label: "YouTube"  },
                { icon: <FaXTwitter />,  label: "Twitter"  },
              ].map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-lg bg-gray-800 border border-gray-700 flex items-center justify-center text-gray-400 text-sm hover:bg-red-600 hover:text-white hover:border-red-600 transition-all duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Important Links */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-5">
              Important Links
            </h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-gray-500 text-sm hover:text-white transition-colors duration-200"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Blood Info */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-5">
              About Blood
            </h4>
            <ul className="space-y-3">
              {BLOOD_INFO_LINKS.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-gray-500 text-sm hover:text-white transition-colors duration-200"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-gray-600 text-xs">
            Copyright © Rokto 2015 – Present | Made with ❤️ in Bangladesh
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-600 text-xs hover:text-gray-400 transition-colors duration-200">
              Terms &amp; Conditions
            </a>
            <a href="#" className="text-gray-600 text-xs hover:text-gray-400 transition-colors duration-200">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
