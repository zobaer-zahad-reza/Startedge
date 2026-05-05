import React from "react";
import {
  FaHandHoldingHeart,
  FaRotate,
  FaGlobe,
  FaAward,
  FaArrowRight,
} from "react-icons/fa6";

const highlights = [
  {
    icon: <FaHandHoldingHeart />,
    title: "Voluntary",
    desc: "All our donors give blood voluntarily — no pressure, no payment.",
  },
  {
    icon: <FaRotate />,
    title: "Real-time",
    desc: "Instant SMS matching connects you to donors within minutes.",
  },
  {
    icon: <FaGlobe />,
    title: "Nationwide",
    desc: "Covering all 64 districts across Bangladesh.",
  },
  {
    icon: <FaAward />,
    title: "Trusted",
    desc: "Over 2,400 verified donors in our growing network.",
  },
];

export default function About() {
  return (
    <section className="py-20 px-5 bg-white" id="about">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
        {/* Left Text */}
        <div className="flex-1">
          <span className="section-badge">About Rokto</span>
          <h2 className="text-3xl lg:text-4xl font-extrabold mt-4 mb-5 text-gray-900 leading-tight">
            Saving lives through{" "}
            <span className="text-gradient">voluntary donation</span>
          </h2>
          <p className="text-gray-500 text-base leading-relaxed mb-4">
            Rokto is an automated blood service that connects blood searchers with
            voluntary blood donors in a moment through SMS. We are a not-for-profit
            initiative to raise awareness of voluntary blood donation in Bangladesh.
          </p>
          <p className="text-gray-500 text-base leading-relaxed mb-8">
            We believe that no patient should suffer due to lack of blood when there
            are thousands of willing donors across the country.
          </p>
          <button className="btn-primary">
            Learn More
            <FaArrowRight />
          </button>
        </div>

        {/* Right Tiles */}
        <div className="flex-1 grid grid-cols-2 gap-4 w-full">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="bg-red-50 border border-red-100 rounded-xl p-5 transition-transform duration-200 hover:-translate-y-1"
            >
              <span className="text-red-600 text-xl mb-3 block">{item.icon}</span>
              <h4 className="font-bold text-sm text-gray-900 mb-1.5">{item.title}</h4>
              <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
