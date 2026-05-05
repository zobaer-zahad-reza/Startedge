import React from "react";
import { FaUserPlus, FaMagnifyingGlass, FaCircleCheck } from "react-icons/fa6";
import SearchCard from "./SearchCard";

const heroStats = [
  { number: "2,439", label: "Registered Donors" },
  { number: "64", label: "Districts Covered" },
  { number: "8", label: "Blood Groups" },
];

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden py-20 px-5"
      style={{
        background:
          "linear-gradient(135deg, #8B0000 0%, #C62828 55%, #B71C1C 100%)",
      }}
    >
      {/* Decorative circles */}
      <div className="absolute -top-1/3 -right-10 w-[600px] h-[600px] rounded-full bg-white opacity-[0.03] pointer-events-none" />
      <div className="absolute -bottom-1/3 -left-10 w-[400px] h-[400px] rounded-full bg-white opacity-[0.03] pointer-events-none" />

      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-14 relative z-10">
        {/* Left Content */}
        <div className="flex-1 animate-slide-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-1.5 mb-6">
            <FaCircleCheck className="text-red-200 text-xs" />
            <span className="text-red-100 text-xs font-medium">
              Bangladesh's #1 Blood Donation Platform
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-5">
            SMS-based platform to{" "}
            <span className="text-red-200">connect blood</span> searchers with
            donors
          </h1>

          <p className="text-white/75 text-base leading-relaxed mb-9 max-w-lg">
            Rokto is a real-time free platform to help blood searchers connect
            voluntary blood donors around Bangladesh — 24×7, always free.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mb-12">
            <button className="bg-white text-red-600 font-bold px-8 py-3.5 rounded-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg flex items-center gap-2 text-sm">
              <FaUserPlus />
              Join as a Donor
            </button>
            <button className="border-2 border-white/40 text-white font-semibold px-8 py-3.5 rounded-lg transition-all duration-200 hover:border-white/80 hover:bg-white/10 flex items-center gap-2 text-sm">
              <FaMagnifyingGlass />
              Search Donors
            </button>
          </div>

          {/* Mini Stats */}
          <div className="flex gap-10 flex-wrap">
            {heroStats.map((stat, i) => (
              <div key={stat.label}>
                {i > 0 && (
                  <div className="hidden sm:block absolute w-px h-8 bg-white/20" />
                )}
                <div className="text-3xl font-extrabold text-white">
                  {stat.number}
                </div>
                <div className="text-xs text-white/60 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — Search Card */}
        {/* <div className="w-full lg:w-[380px] shrink-0 animate-fade-in">
          <SearchCard shadow />
        </div> */}
      </div>
    </section>
  );
}
