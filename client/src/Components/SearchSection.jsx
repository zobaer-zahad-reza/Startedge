import React from "react";
import SearchCard from "./SearchCard";

export default function SearchSection() {
  return (
    <section className="py-20 px-5 bg-white" id="search">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
        {/* Text */}
        <div className="flex-1">
          <span className="section-badge">Find a Donor</span>
          <h2 className="text-3xl lg:text-4xl font-extrabold mt-4 mb-5 text-gray-900">
            Search blood donors near you
          </h2>
          <p className="text-gray-500 text-base leading-relaxed mb-6">
            Use our search tool to instantly find available blood donors in your district.
            Filter by blood group, location, and eligibility to get the most relevant results.
          </p>
          <ul className="space-y-3">
            {[
              "Filter by blood group and district",
              "See recently active donors",
              "Contact donors directly via phone",
              "Post an urgent blood request",
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm text-gray-600">
                <span className="w-5 h-5 rounded-full bg-red-100 text-red-600 flex items-center justify-center text-xs font-bold shrink-0">
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Search Card */}
        <div className="w-full lg:w-[400px] shrink-0">
          <SearchCard />
        </div>
      </div>
    </section>
  );
}
