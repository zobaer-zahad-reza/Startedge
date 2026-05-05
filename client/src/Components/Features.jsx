import React from "react";
import { FaBolt, FaHeart, FaClock, FaShieldHalved } from "react-icons/fa6";

const features = [
  {
    icon: <FaBolt />,
    title: "100% Automated",
    desc: "Fully automated system — get matched with donors instantly through SMS, no manual processing required.",
    bg: "bg-amber-50",
    color: "text-amber-600",
  },
  {
    icon: <FaHeart />,
    title: "Always Free",
    desc: "Rokto is and will always be completely free for blood searchers and voluntary donors across Bangladesh.",
    bg: "bg-red-50",
    color: "text-red-600",
  },
  {
    icon: <FaClock />,
    title: "24×7 Service",
    desc: "Round-the-clock service ensures you can find or request blood at any hour, any day of the year.",
    bg: "bg-blue-50",
    color: "text-blue-600",
  },
  {
    icon: <FaShieldHalved />,
    title: "Data Secured",
    desc: "Your personal information is encrypted and protected with the highest security standards available.",
    bg: "bg-green-50",
    color: "text-green-600",
  },
];

export default function Features() {
  return (
    <section className="py-20 px-5 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="section-badge">Why Rokto?</span>
          <h2 className="text-3xl lg:text-4xl font-extrabold mt-4 text-gray-900">
            Built for Bangladesh's blood needs
          </h2>
          <p className="text-gray-500 text-base mt-3 max-w-md mx-auto leading-relaxed">
            One goal — connecting every blood seeker with the right donor, instantly.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div key={f.title} className="card text-center group">
              <div
                className={`w-14 h-14 rounded-2xl ${f.bg} flex items-center justify-center mx-auto mb-5`}
              >
                <span className={`${f.color} text-2xl`}>{f.icon}</span>
              </div>
              <h3 className="font-bold text-base text-gray-900 mb-3">{f.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
