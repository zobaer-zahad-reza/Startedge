import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Payment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const planName = queryParams.get("plan") || "Custom Service";

  const [amount, setAmount] = useState("");

  // Auto-set price based on plan name (Simple logic based on your HTML)
  useEffect(() => {
    if (planName.toLowerCase().includes("basic")) setAmount("12000");
    else if (planName.toLowerCase().includes("super")) setAmount("50000");
    else if (planName.toLowerCase().includes("premium")) setAmount("25000");
    else setAmount("");
  }, [planName]);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Payment logic will be connected to Backend API.");
    // Here you will call axios.post('http://localhost:5000/api/payment', ...)
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-dark-bg text-white font-rajdhani flex items-center justify-center p-5">
      <div className="w-full max-w-lg bg-light-bg p-8 rounded-2xl border border-neon-blue shadow-[0_0_30px_rgba(157,0,255,0.3)]">
        <h2 className="text-3xl font-orbitron text-center text-neon-blue mb-6">
          CONFIRM PAYMENT
        </h2>

        <div className="bg-white/5 p-4 rounded mb-6 border-l-4 border-neon-pink">
          <span className="text-gray-400 block text-sm">Selected Plan:</span>
          <span className="text-xl font-bold text-white">{planName}</span>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-400 mb-1">Full Name</label>
            <input
              type="text"
              required
              className="w-full p-3 bg-dark-bg border border-white/20 rounded focus:border-neon-blue focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-gray-400 mb-1">Email</label>
            <input
              type="email"
              required
              className="w-full p-3 bg-dark-bg border border-white/20 rounded focus:border-neon-blue focus:outline-none"
            />
          </div>
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block text-gray-400 mb-1">Mobile (BD)</label>
              <input
                type="tel"
                required
                className="w-full p-3 bg-dark-bg border border-white/20 rounded focus:border-neon-blue focus:outline-none"
              />
            </div>
            <div className="flex-1">
              <label className="block text-gray-400 mb-1">Amount (BDT)</label>
              <input
                type="number"
                value={amount}
                readOnly
                className="w-full p-3 bg-dark-bg border border-white/20 rounded text-neon-green font-bold text-center"
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-400 mb-1">Payment Method</label>
            <select className="w-full p-3 bg-dark-bg border border-white/20 rounded focus:border-neon-blue focus:outline-none">
              <option>bKash</option>
              <option>Nagad</option>
              <option>Rocket</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full py-4 mt-4 bg-gradient-to-r from-neon-blue to-neon-purple rounded font-bold text-lg hover:shadow-lg transition"
          >
            COMPLETE PAYMENT
          </button>
        </form>
      </div>
    </div>
  );
};

export default Payment;
