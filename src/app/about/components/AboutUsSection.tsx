"use client";
import React from "react";
import { FilmSlate, Feather, Users, Heart } from "@phosphor-icons/react";

const AboutSection = () => {
  return (
    <section className="bg-gradient-to-br from-[#3F1B67] via-[#581c87] to-[#9d174d] py-20 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Visuals Column */}
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-white/10 p-6 rounded-lg shadow-lg backdrop-blur-sm flex items-center justify-center aspect-square flex-col text-pink-200 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
            <FilmSlate size={48} strokeWidth={1.5} />
            <span className="mt-4 font-semibold text-center">
              Passion for Film
            </span>
          </div>
          <div className="bg-white/10 p-6 rounded-lg shadow-lg backdrop-blur-sm flex items-center justify-center aspect-square flex-col text-pink-200 mt-8 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
            <Feather size={48} strokeWidth={1.5} />
            <span className="mt-4 font-semibold text-center">
              Creative Storytelling
            </span>
          </div>
          <div className="bg-white/10 p-6 rounded-lg shadow-lg backdrop-blur-sm flex items-center justify-center aspect-square flex-col text-pink-200 -mt-8 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
            <Users size={48} strokeWidth={1.5} />
            <span className="mt-4 font-semibold text-center">
              Vibrant Community
            </span>
          </div>
          <div className="bg-white/10 p-6 rounded-lg shadow-lg backdrop-blur-sm flex items-center justify-center aspect-square flex-col text-pink-200 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
            <Heart size={48} strokeWidth={1.5} />
            <span className="mt-4 font-semibold text-center">
              Bound by Love
            </span>
          </div>
        </div>
        {/* Text Content Column */}
        <div className="text-pink-100">
          <h2
            className="text-3xl md:text-4xl font-bold text-white mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            About Cinematic Scribes
          </h2>
          <p className="text-lg mb-4 leading-relaxed">
            Cinematic Scribes is a vibrant community, bound by a love for Christ
            and a passion for film and storytelling. Since our inception in
            2023, we’ve been dedicated to nurturing young talented Christian
            screenwriters, fostering a supportive environment where creativity
            flourishes in the light of God&apos;s glory.
          </p>
          <p className="text-lg leading-relaxed">
            Our members collaborate, share feedback, and grow together, united
            by a shared purpose to create stories that inspire, challenge, and
            reflect our faith.
          </p>
        </div>
      </div>
    </section>
  );
};
export default AboutSection;
