"use client";
import React from "react";
import Image from "next/image";


const imageUrl1 = "/assets/study-group-african-people.jpg";
const imageUrl2 = "/assets/study-group-learning-library.jpg";


const WhyScribesSection = () => {
  return (
    <section className="bg-slate-50 py-20 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Headline */}
        <div className="text-center mb-16">
          <h2
            className="text-3xl md:text-4xl font-bold text-slate-800 inline-block px-4 py-2 border-t border-b border-slate-300"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Why Cinematic Scribes?
          </h2>
        </div>

        <div className="space-y-16">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
            <div className="relative h-80">
              <div className="absolute inset-0 bg-pink-100 transform -rotate-3 rounded-xl"></div>
              <Image
                src={imageUrl1}
                alt="A person writing thoughtfully in a notebook"
                fill
                style={{ objectFit: "cover" }}
                className="relative rounded-xl shadow-lg"
              />
            </div>

            <div className="text-slate-600 text-lg leading-relaxed">
              <p>
                At its core, Cinematic Scribes is about two key elements: cinema
                and writing. &apos;Cinematic&apos; symbolizes our medium of choice:
                the enchanting world of film.
              </p>
              <p className="mt-4">
                We&apos;re fascinated by the power of the silver screen to capture
                the human experience, to make us laugh and cry, and most
                importantly, to spread the light of God&apos;s love.
                &apos;Scribes,&apos; on the other hand, is an ode to our commitment
                to the art of writing.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
            <div className="text-slate-600 text-lg leading-relaxed md:order-first">
              <p>
                Historically, scribes were regarded as esteemed record keepers
                who translated important messages and stories. Similarly, we see
                ourselves as modern-day scribes, tasked with the noble duty of
                narrating engaging stories that echo God’s teachings.
              </p>
              <p className="mt-4">
                Together, the name &apos;Cinematic Scribes&apos; embodies our mission:
                to craft narratives for the screen that are not just
                entertaining, but also imbued with our faith.
              </p>
            </div>
            
            <div className="relative h-80">
               <div className="absolute inset-0 bg-pink-100 transform rotate-3 rounded-xl"></div>
               <Image
                src={imageUrl2}
                alt="Hands typing on a laptop keyboard"
                fill
                style={{ objectFit: "cover" }}
                className="relative rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyScribesSection;