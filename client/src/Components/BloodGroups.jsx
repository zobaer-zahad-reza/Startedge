import React, { useState } from "react";
import { FaDroplet, FaArrowRight } from "react-icons/fa6";
import { BLOOD_GROUPS, BLOOD_COMPATIBILITY } from "../constants/data";

export default function BloodGroups() {
  const [selected, setSelected] = useState(null);

  return (
    <section className="py-20 px-5 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="section-badge">Blood Compatibility</span>
          <h2 className="text-3xl lg:text-4xl font-extrabold mt-4 text-gray-900">
            Check blood group compatibility
          </h2>
          <p className="text-gray-500 text-sm mt-3">
            Click any blood group to see who you can donate to
          </p>
        </div>

        {/* Blood Group Grid */}
        <div className="grid grid-cols-4 sm:grid-cols-8 gap-3 max-w-xl mx-auto mb-8">
          {BLOOD_GROUPS.map((group) => (
            <button
              key={group}
              onClick={() => setSelected(selected === group ? null : group)}
              className={`aspect-square rounded-xl font-extrabold text-lg flex items-center justify-center transition-all duration-200 border-2 ${
                selected === group
                  ? "bg-red-600 text-white border-red-600 shadow-lg shadow-red-200 scale-105"
                  : "bg-white text-red-600 border-red-200 hover:border-red-500 hover:scale-105"
              }`}
            >
              {group}
            </button>
          ))}
        </div>

        {/* Compatibility Result */}
        {selected && (
          <div className="animate-fade-in max-w-xl mx-auto bg-white border border-red-100 rounded-xl p-6 text-center shadow-sm">
            <div className="flex items-center justify-center gap-3 mb-4">
              <FaDroplet className="text-red-600 text-lg" />
              <span className="font-bold text-gray-700 text-sm">
                <strong className="text-red-600">{selected}</strong> can donate to:
              </span>
            </div>
            <div className="flex flex-wrap gap-2 justify-center">
              {BLOOD_COMPATIBILITY[selected].map((g) => (
                <span
                  key={g}
                  className="bg-red-600 text-white text-sm font-bold px-4 py-1.5 rounded-lg"
                >
                  {g}
                </span>
              ))}
            </div>
            <p className="text-gray-400 text-xs mt-4">
              * Always consult with medical professionals before blood donation
            </p>
          </div>
        )}

        {/* Blood Info Links */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-3xl mx-auto">
          {[
            "What is blood donation?",
            "Who can donate blood?",
            "How often can I donate?",
          ].map((link) => (
            <a
              key={link}
              href="#"
              className="flex items-center justify-between bg-white border border-gray-100 rounded-xl px-5 py-4 text-sm font-medium text-gray-700 hover:border-red-200 hover:text-red-600 transition-all duration-200 group shadow-sm"
            >
              {link}
              <FaArrowRight className="text-gray-400 group-hover:text-red-600 transition-colors duration-200 text-xs" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
