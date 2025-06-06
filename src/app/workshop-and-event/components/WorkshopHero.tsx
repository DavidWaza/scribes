"use client";
import React from "react";
import {
  BookOpen,
  Coffee,
  Users,
  ChatCenteredDots,
  Sparkle,
} from "@phosphor-icons/react";

// Updated placeholder URLs for a light grey theme
const illustrationUrls = [
  "https://placehold.co/300x300/e2e8f0/334155?text=Classics",
  "https://placehold.co/250x250/f1f5f9/475569?text=Fantasy",
  "https://placehold.co/200x200/cbd5e1/64748b?text=Sci-Fi",
  "https://placehold.co/150x150/e2e8f0/334155?text=Mystery",
  "https://placehold.co/180x180/f1f5f9/475569?text=Poetry",
];

const icons = [
  {
    Icon: BookOpen,
    style: { top: "15%", left: "10%", animationDelay: "0s" },
    size: 40,
  },
  {
    Icon: Coffee,
    style: { top: "25%", left: "85%", animationDelay: "1s" },
    size: 30,
  },
  {
    Icon: Users,
    style: { top: "70%", left: "5%", animationDelay: "2s" },
    size: 35,
  },
  {
    Icon: ChatCenteredDots,
    style: { top: "80%", left: "90%", animationDelay: "0.5s" },
    size: 45,
  },
  {
    Icon: Sparkle,
    style: { top: "5%", left: "45%", animationDelay: "1.5s" },
    size: 25,
  },
];

const WorkshopHero = () => {
  return (
    <div className="relative w-full bg-gradient-to-br from-slate-100 to-gray-200 h-96 flex items-center justify-center font-sans overflow-hidden">
      <style>{`
        @keyframes float {
          0% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
          100% { transform: translateY(0px) rotate(0deg); }
        }
        .float-animation {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>

      {/* Hero Section Container */}
      <div className="relative w-full h-screen bg-gradient-to-br from-slate-100 to-gray-200 flex items-center justify-center p-4">
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          {icons.map((item, index) => (
            <div
              key={`icon-${index}`}
              className="absolute text-slate-500/30 float-animation"
              style={item.style}
            >
              <item.Icon size={item.size} strokeWidth={1} />
            </div>
          ))}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          {illustrationUrls.map((url, index) => (
            <img
              key={`img-${index}`}
              src={url}
              alt={`Illustration ${index + 1}`}
              className="absolute object-cover rounded-full opacity-20 shadow-lg float-animation"
              style={{
                width: `${200 - index * 20}px`,
                height: `${200 - index * 20}px`,
                top: `${10 + index * 18}%`,
                left: `${10 + index * 15}%`,
                animationDelay: `${index * 0.5}s`,
                animationDuration: `${8 + index}s`,
              }}
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.onerror = null;
                target.src =
                  "https://placehold.co/200/cccccc/ffffff?text=Error";
              }}
            />
          ))}
        </div>

        {/* Foreground Content */}
        <div className="relative text-center z-10">
          <h1
            className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-slate-800 leading-tight mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Workshop and Event Hub
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-8">
            A cozy corner for those who find joy in turning pages.
          </p>
        </div>
      </div>
    </div>
  );
};
export default WorkshopHero;
