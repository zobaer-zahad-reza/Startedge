import React, { useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { BLOOD_GROUPS, DISTRICTS } from "../constants/data";

export default function SearchCard({ shadow = false }) {
  const [bloodGroup, setBloodGroup] = useState("");
  const [district, setDistrict]     = useState("");
  const [date, setDate]             = useState("");
  const [donorType, setDonorType]   = useState("all");

  const handleSearch = (e) => {
    e.preventDefault();
    alert(`Searching for ${bloodGroup || "any"} blood group donors in ${district || "all districts"}`);
  };

  return (
    <div
      className={`bg-white rounded-2xl p-7 border border-gray-100 ${
        shadow ? "shadow-2xl" : "shadow-sm"
      }`}
    >
      <h3 className="font-bold text-lg text-gray-900 mb-5 flex items-center gap-2">
        <FaMagnifyingGlass className="text-red-600 text-sm" />
        Search Donors
      </h3>

      <form onSubmit={handleSearch} className="flex flex-col gap-4">
        {/* Blood Group */}
        <div>
          <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
            Blood Group
          </label>
          <select
            className="form-input"
            value={bloodGroup}
            onChange={(e) => setBloodGroup(e.target.value)}
          >
            <option value="">Select Blood Group</option>
            {BLOOD_GROUPS.map((g) => (
              <option key={g} value={g}>{g}</option>
            ))}
          </select>
        </div>

        {/* District */}
        <div>
          <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
            District
          </label>
          <select
            className="form-input"
            value={district}
            onChange={(e) => setDistrict(e.target.value)}
          >
            <option value="">Select District</option>
            {DISTRICTS.map((d) => (
              <option key={d} value={d}>{d}</option>
            ))}
          </select>
        </div>

        {/* Date */}
        <div>
          <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
            Last Donation Date
          </label>
          <input
            type="date"
            className="form-input"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        {/* Donor Type Toggle */}
        <div>
          <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
            Donor Type
          </label>
          <div className="flex gap-2">
            {["all", "eligible"].map((type) => (
              <button
                key={type}
                type="button"
                onClick={() => setDonorType(type)}
                className={`flex-1 py-2 rounded-lg font-semibold text-sm capitalize border-2 transition-all duration-200 ${
                  donorType === type
                    ? "border-red-600 bg-red-50 text-red-600"
                    : "border-gray-200 bg-white text-gray-500 hover:border-red-300 hover:text-red-500"
                }`}
              >
                {type === "all" ? "All" : "Eligible"}
              </button>
            ))}
          </div>
        </div>

        {/* Submit */}
        <button type="submit" className="btn-primary w-full justify-center mt-1 py-3">
          <FaMagnifyingGlass />
          Search Donors
        </button>
      </form>
    </div>
  );
}
