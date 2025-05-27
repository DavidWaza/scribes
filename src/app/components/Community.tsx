"use client";

import Image from "next/image";
import React from "react";
import { Users, ChatDots } from "@phosphor-icons/react"; // Added icons

// Array of Tailwind CSS gradient classes for avatar backgrounds
const avatarGradientClasses = [
  "bg-gradient-to-br from-green-400 to-blue-500",
  "bg-gradient-to-br from-pink-400 to-yellow-500",
  "bg-gradient-to-br from-lime-400 to-emerald-500",
  "bg-gradient-to-br from-purple-400 to-indigo-500",
  "bg-gradient-to-br from-teal-400 to-cyan-500",
  "bg-gradient-to-br from-orange-400 to-rose-500",
];

const CommunitySectionRedesigned = () => {
  // Placeholder data for avatars - in a real app, this would come from props or state
  const communityMembers = [
    { id: 1, name: "User 1", imageUrl: "/av.jpg" },
    { id: 2, name: "User 2", imageUrl: "/av.jpg" },
    { id: 3, name: "User 3", imageUrl: "/av.jpg" },
    { id: 4, name: "User 4", imageUrl: "/av.jpg" },
    { id: 5, name: "User 5", imageUrl: "/av.jpg" },
    { id: 6, name: "User 6", imageUrl: "/av.jpg" },
  ];

  return (
    <section className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white py-16 sm:py-24 px-6 w-full">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          {/* Text Content Section */}
          <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center justify-center lg:justify-start gap-2 bg-purple-500/20 text-purple-300 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Users size={18} />
              <span>Connect & Grow</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight">
              Join Our Vibrant{" "}
              <span className="text-purple-400">Screenwriter&apos;s Hub</span>
            </h2>
            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed">
              Our Slack community is your dedicated space to find inspiration,
              nurture your craft, and receive unwavering support on your journey
              to becoming an accomplished screenwriter. You don&apos;t have to
              navigate this path alone—your fellow scribes are here with you.
            </p>
            <div className="pt-4">
              <a
                href="#join-slack" // Replace with your actual Slack invite link
                className="inline-flex items-center justify-center gap-2.5 bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8 py-4 rounded-lg shadow-lg hover:shadow-purple-500/40 transition-all duration-300 transform hover:scale-105 text-lg"
              >
                <ChatDots size={32} />
                Join the Conversation on Slack
              </a>
            </div>
          </div>

          {/* Avatar Grid Section */}
          <div className="lg:w-1/2 grid grid-cols-3 gap-4 sm:gap-6 place-items-center">
            {communityMembers.map((member, index) => (
              <div
                key={member.id}
                className="group relative transform transition-all duration-300 hover:scale-110 hover:z-10"
                title={`Community member ${member.id}`} // Basic accessibility
              >
                <div
                  className={`
                    w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 
                    rounded-full overflow-hidden 
                    border-4 border-slate-700 group-hover:border-purple-500 
                    shadow-xl group-hover:shadow-purple-500/50
                    p-1.5 
                    ${
                      avatarGradientClasses[
                        index % avatarGradientClasses.length
                      ]
                    }
                    transition-all duration-300
                  `}
                >
                  <Image
                    src={member.imageUrl} // Using placeholder images
                    width={120} // Max image width based on md:w-32 (128px) - p-1.5 (6px*2=12px) = 116px. Using 120 for good quality.
                    height={120} // Max image height
                    alt={`Community member ${member.name}`}
                    className="w-full h-full rounded-full object-cover"
                    // onError to handle broken image links
                    onError={(e) => {
                      e.currentTarget.src = `https://placehold.co/120x120/757575/FFFFFF?text=Error&font=roboto`;
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySectionRedesigned;
