"use client";
import React from "react";
import { motion } from "framer-motion";

const panelVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "easeOut",
      duration: 0.8,
      staggerChildren: 0.2,
    },
  },
};

const borderVariants = {
  hidden: { pathLength: 0 },
  visible: {
    pathLength: 1,
    transition: {
      duration: 1.5,
      ease: "circOut",
    },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const VisionIcon = () => (
  <motion.svg
    variants={textVariants}
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#B48A43"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2" />
    <path d="M12 20v2" />
    <path d="m4.93 4.93 1.41 1.41" />
    <path d="m17.66 17.66 1.41 1.41" />
    <path d="M2 12h2" />
    <path d="M20 12h2" />
    <path d="m6.34 17.66-1.41 1.41" />
    <path d="m19.07 4.93-1.41 1.41" />
  </motion.svg>
);

const MissionIcon = () => (
  <motion.svg
    variants={textVariants}
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#B48A43"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M2 17c2.2 0 3.8-1.4 4.8-3.6A4.9 4.9 0 0 1 11 10c1.8 0 3.2.8 4 2.1" />
    <path d="M12 21c-2.2 0-3.8-1.4-4.8-3.6a4.9 4.9 0 0 1-4.2-5.3c0-2.8 2.2-5.1 5-5.1s5 2.3 5 5.1" />
    <path d="M18 21c-2.2 0-3.8-1.4-4.8-3.6a4.9 4.9 0 0 1-2.1-4.8A5.1 5.1 0 0 1 16 7c2.8 0 5 2.2 5 5a4.9 4.9 0 0 1-2.2 4.2" />
  </motion.svg>
);

const VisionMissionSection = () => {
  return (
    <section className="bg-stone-50 py-24 px-4">
      <div className="max-w-4xl mx-auto space-y-16">
        <motion.div
          className="relative p-8 md:p-12 bg-white shadow-sm"
          variants={panelVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.svg
            className="absolute top-0 left-0 w-full h-full"
            fill="none"
          >
            <motion.rect
              x="2"
              y="2"
              width="calc(100% - 4px)"
              height="calc(100% - 4px)"
              stroke="#B48A43"
              strokeWidth="2"
              variants={borderVariants}
            />
          </motion.svg>
          <div className="relative">
            <motion.div
              variants={textVariants}
              className="flex items-center gap-4 mb-6"
            >
              <VisionIcon />
              <h3
                className="text-3xl md:text-4xl font-bold text-gray-800"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Our Vision
              </h3>
            </motion.div>
            <motion.p
              variants={textVariants}
              className="text-xl md:text-2xl text-gray-600 leading-relaxed"
            >
              The Cinematic Scribes Club exists to inspire, nurture, and support
              young screenwriters in their pursuit of crafting stories that
              glorify God. As our stories transit from script to screen, we
              aspire to touch hearts, transform lives, and inspire a generation
              of Christian screenwriters who will glorify God and spread His
              word across the globe. In a nutshell, we&apos;re committed to
              providing a platform where faith and creativity merge.
            </motion.p>
          </div>
        </motion.div>

        <motion.div
          className="relative p-8 md:p-12 bg-white shadow-sm"
          variants={panelVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.svg
            className="absolute top-0 left-0 w-full h-full"
            fill="none"
          >
            <motion.rect
              x="2"
              y="2"
              width="calc(100% - 4px)"
              height="calc(100% - 4px)"
              stroke="#B48A43"
              strokeWidth="2"
              variants={borderVariants}
            />
          </motion.svg>
          <div className="relative">
            <motion.div
              variants={textVariants}
              className="flex items-center gap-4 mb-6"
            >
              <MissionIcon />
              <h3
                className="text-3xl md:text-4xl font-bold text-gray-800"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Our Mission
              </h3>
            </motion.div>
            <motion.p
              variants={textVariants}
              className="text-xl md:text-2xl text-gray-600 leading-relaxed"
            >
              We see Cinematic Scribes as a divine mission to make disciples for
              the Kingdom of God through the gift of storytelling. Our vision is
              to be faithful witnesses, using the power of film to illuminate
              Christ&apos;s teachings.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VisionMissionSection;
