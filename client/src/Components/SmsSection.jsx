import React, { useState } from "react";
import { FaMessage } from "react-icons/fa6";
import { SMS_COMMANDS } from "../constants/data";

export default function SmsSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="py-20 px-5 bg-red-50" id="sms">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 items-start">
        {/* Left Info */}
        <div className="flex-1">
          <span className="section-badge">SMS Service</span>
          <h2 className="text-3xl lg:text-4xl font-extrabold mt-4 mb-4 text-gray-900">
            How to use Rokto via SMS?
          </h2>
          <p className="text-gray-500 text-base leading-relaxed mb-8">
            Send an SMS to the number below with the right format to request blood,
            register as a donor, or search for available donors near you.
          </p>

          {/* SMS Number Card */}
          <div className="bg-white rounded-xl p-5 border border-red-100 inline-block">
            <div className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-1">
              SMS Number
            </div>
            <div className="text-2xl font-extrabold text-red-600">01625524255</div>
            <div className="text-xs text-gray-400 mt-1 flex items-center gap-1">
              <FaMessage className="text-green-500" />
              Available 24 hours, 7 days a week
            </div>
          </div>
        </div>

        {/* Right — SMS Commands */}
        <div className="flex-1 w-full">
          {/* Tabs */}
          <div className="flex flex-wrap gap-2 mb-5">
            {SMS_COMMANDS.map((cmd, i) => (
              <button
                key={cmd.label}
                onClick={() => setActive(i)}
                className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all duration-200 border ${
                  active === i
                    ? "bg-red-600 text-white border-red-600"
                    : "bg-white text-gray-600 border-gray-200 hover:border-red-300 hover:text-red-600"
                }`}
              >
                {cmd.label}
              </button>
            ))}
          </div>

          {/* Active Command Card */}
          <div
            key={active}
            className="bg-white rounded-xl p-6 border border-red-100 animate-fade-in"
          >
            <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-3">
              {SMS_COMMANDS[active].desc}
            </p>

            {/* Code Block */}
            <div className="bg-gray-900 rounded-xl px-5 py-4 font-mono">
              <span className="text-xs text-gray-500 block mb-2">// SMS Format</span>
              <span className="text-green-400 text-base tracking-wide">
                {SMS_COMMANDS[active].code}
              </span>
            </div>

            {/* Example */}
            <div className="mt-4 flex items-center gap-2 text-sm text-gray-500 bg-gray-50 rounded-lg px-4 py-2.5">
              <span className="text-green-500 font-bold">✓</span>
              <span className="font-mono text-xs">{SMS_COMMANDS[active].example}</span>
            </div>

            <p className="text-gray-500 text-sm mt-4 leading-relaxed">
              Send this format to{" "}
              <strong className="text-red-600">01625524255</strong>. You will
              receive a confirmation reply within minutes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
