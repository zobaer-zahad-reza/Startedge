import React from "react";
import { FaUsers, FaMapLocationDot, FaDroplet, FaClock } from "react-icons/fa6";
import { STATS } from "../constants/data";

const iconMap = {
  users: <FaUsers className="text-white/60 text-3xl mb-4 mx-auto" />,
  map:   <FaMapLocationDot className="text-white/60 text-3xl mb-4 mx-auto" />,
  drop:  <FaDroplet className="text-white/60 text-3xl mb-4 mx-auto" />,
  clock: <FaClock className="text-white/60 text-3xl mb-4 mx-auto" />,
};

export default function Stats() {
  return (
    <section className="py-20 px-5 bg-red-600">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-white text-3xl lg:text-4xl font-extrabold mb-2">
          Our growing network
        </h2>
        <p className="text-white/60 text-base mb-14">
          Together we are saving lives across Bangladesh
        </p>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 max-w-3xl mx-auto">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="bg-white/10 border border-white/15 rounded-2xl py-9 px-5 text-center transition-transform duration-200 hover:-translate-y-1"
            >
              <div>{iconMap[stat.icon]}</div>
              <div className="text-4xl font-extrabold text-white leading-none">
                {stat.number}
              </div>
              <div className="text-white/60 text-xs mt-2">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
