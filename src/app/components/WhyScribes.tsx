"use client";

import {
  FlowerLotus,
  HandCoins,
  LightbulbFilament,
  Sparkle,
} from "@phosphor-icons/react/dist/ssr"; 
import React from "react";

const weOfferItems = [
  {
    icon: (
      <LightbulbFilament
        size={40}
        weight="duotone"
        className="text-amber-400 group-hover:text-amber-300 transition-colors duration-300"
      />
    ),
    title: "Inspire",
    description:
      "Gain inspiration from our blogs and events that will motivate you to be better.",
    bgColor: "bg-gradient-to-br from-slate-800 to-slate-700",
    borderColor: "border-amber-500",
    shadowColor: "shadow-amber-500/30",
  },
  {
    icon: (
      <FlowerLotus
        size={40}
        weight="duotone"
        className="text-pink-400 group-hover:text-pink-300 transition-colors duration-300"
      />
    ),
    title: "Nurture",
    description:
      "We have workshops available to improve and grow the screenwriter in you.",
    bgColor: "bg-gradient-to-br from-slate-800 to-slate-700",
    borderColor: "border-pink-500",
    shadowColor: "shadow-pink-500/30",
  },
  {
    icon: (
      <HandCoins
        size={40}
        weight="duotone"
        className="text-teal-400 group-hover:text-teal-300 transition-colors duration-300"
      />
    ),
    title: "Support",
    description:
      "We support the works of our screenwriters in any way possible.",
    bgColor: "bg-gradient-to-br from-slate-800 to-slate-700",
    borderColor: "border-teal-500",
    shadowColor: "shadow-teal-500/30",
  },
];

const WhyScribesCreative = () => {
  return (
    <div className="bg-slate-900 py-20 sm:py-28 w-full font-sans">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-amber-500 mb-4">
            What We Offer
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Unlock your potential with our dedicated resources designed for
            screenwriters.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {weOfferItems.map((item, index) => (
            <div
              key={index}
              className={`
                group
                p-8 rounded-xl 
                ${item.bgColor}
                border-2 ${item.borderColor}
                shadow-2xl ${item.shadowColor}
                hover:shadow-3xl hover:${item.shadowColor.replace("/30", "/50")}
                transform hover:-translate-y-2 transition-all duration-300 ease-in-out
                flex flex-col items-center text-center
              `}
            >
              <div className="mb-6 p-4 bg-slate-800/50 rounded-full border border-slate-700 shadow-inner">
                {item.icon}
              </div>
              <h3 className="text-2xl font-semibold text-white mb-3">
                {item.title}
              </h3>
              <p className="text-slate-300 leading-relaxed text-sm">
                {item.description}
              </p>
              <Sparkle
                size={24}
                className="text-slate-600 group-hover:text-yellow-400 transition-colors duration-300 mt-6 opacity-0 group-hover:opacity-100 transform group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyScribesCreative;
