import React from "react";
import Marquee from "react-fast-marquee";
import { FaAngleRight } from "react-icons/fa";

export default function SubscriptionCatagory() {
  const items = [
    {
      productName: "ChatGPT Pro",
      productImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMdM9MEQ0ExL1PmInT3U5I8v63YXBEdoIT0Q&s",
    },
    {
      productName: "Gemini Advanced",
      productImage:
        "https://raw.githubusercontent.com/lobehub/lobe-icons/refs/heads/master/packages/static-png/dark/gemini-color.png",
    },
    {
      productName: "Capcut Pro",
      productImage:
        "https://www.shutterstock.com/image-vector/capcut-logo-editorial-icon-isolated-600nw-2563301725.jpg",
    },
    {
      productName: "Canva Pro",
      productImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQi4yHiBqzGRehgq1MwiJ7yxP1Lzif73hTUw&s",
    },
    {
      productName: "Google Drive Storage",
      productImage:
        "https://img.freepik.com/premium-vector/google-drive-logo-icon_1273375-832.jpg",
    },
  ];

  return (
    <div className="mt-10">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h4 className="text-gray-700 font-semibold">Categories</h4>
      </div>

      {/* Marquee */}
      <Marquee speed={50} autoFill={true} className="my-6">
        {items.map((item, index) => (
          <button
            key={index}
            className="cursor-pointer flex items-center gap-2 border border-gray-300 rounded-full px-4 py-2 mx-2 bg-white hover:bg-gray-100 transition"
          >
            <img
              className="w-8 h-8 object-cover rounded-full"
              src={item.productImage}
              alt={item.productName}
            />

            <p className="text-sm font-semibold whitespace-nowrap">
              {item.productName}
            </p>
          </button>
        ))}
      </Marquee>
    </div>
  );
}
