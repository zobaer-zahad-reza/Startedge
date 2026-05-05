import React from "react";
import { FaDroplet, FaUserPlus, FaPlus } from "react-icons/fa6";

export default function CTA() {
  return (
    <section className="py-20 px-5 bg-gray-900">
      <div className="max-w-2xl mx-auto text-center">
        <FaDroplet className="text-red-500 text-4xl mx-auto mb-5" />
        <h2 className="text-white text-3xl lg:text-4xl font-extrabold mb-4 leading-tight">
          Ready to save a life?
        </h2>
        <p className="text-gray-400 text-base leading-relaxed mb-10">
          Join our growing network of voluntary blood donors across Bangladesh.
          Registration is free and takes only 2 minutes.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <button className="btn-primary text-sm px-8 py-3.5">
            <FaUserPlus />
            Register as Donor
          </button>
          <button className="flex items-center gap-2 text-white border-2 border-white/20 px-8 py-3.5 rounded-lg font-semibold text-sm transition-all duration-200 hover:border-white/50 hover:bg-white/5">
            <FaPlus />
            Add Blood Request
          </button>
        </div>
      </div>
    </section>
  );
}
