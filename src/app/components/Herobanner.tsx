"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// Enhanced section reveal with a dreamy fade-in
const sectionVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      staggerChildren: 0.3,
      duration: 0.8,
      ease: "easeInOut",
    },
  },
};

// Text content block with a cascading entrance
const textContentVariants = {
  hidden: { opacity: 0, y: 50, rotate: -5 },
  visible: {
    opacity: 1,
    y: 0,
    rotate: 0,
    transition: {
      type: "spring",
      damping: 14,
      stiffness: 80,
      mass: 1.2,
    },
  },
};

// Headline container with a rhythmic word reveal
const headlineVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

// Individual words with a whimsical pop-up effect
const wordVariants = {
  hidden: { opacity: 0, y: 30, rotateX: -60, scale: 0.8 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    scale: 1,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 120,
    },
  },
};

// The "Unusual" word with a magical flourish
const unusualWordVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.5, filter: "blur(6px)", rotate: 10 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1.2,
    filter: "blur(0px)",
    rotate: 0,
    transition: {
      type: "spring",
      damping: 8,
      stiffness: 60,
      delay: 0.8,
      duration: 1,
    },
  },
};

// Paragraph with a gentle fade-in and slight drift
const paragraphVariants = {
  hidden: { opacity: 0, x: -20, y: 20 },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.9,
      ease: "easeOut",
      delay: 1.2,
    },
  },
};

// Button with a playful bounce and glow
const buttonVariants = {
  hidden: { opacity: 0, scale: 0.7, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 10,
      stiffness: 130,
      delay: 1.8,
    },
  },
};

// Image with a cinematic zoom and subtle spin
const imageVariants = {
  hidden: { opacity: 0, x: 100, scale: 0.8, rotate: 8 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 70,
      duration: 1.2,
    },
  },
};

// Floating decorative elements animation
const floatVariants = {
  animate: {
    y: [-10, 10],
    rotate: [0, 5, -5, 0],
    transition: {
      repeat: Infinity,
      repeatType: "reverse" as const,
      duration: 4,
      ease: "easeInOut",
    },
  },
};

const Herobanner = () => {
  const headlineText1 = "Crafting Timeless Tales with";
  const unusualWord = "Unusual";
  const headlineText2 = "Twists";

  return (
    <motion.section
      className="min-h-screen bg-gradient-to-br from-[#dfbfcd] via-[#f5e1e9] to-[#e8d1dc] flex items-center justify-center py-16 md:py-20 overflow-hidden relative"
      variants={sectionVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Floating decorative elements */}
      <motion.div
        className="absolute top-10 left-10 w-16 h-16 bg-[#C444A8]/20 rounded-full opacity-50"
        variants={floatVariants}
        animate="animate"
      />
      <motion.div
        className="absolute bottom-20 right-20 w-24 h-24 bg-[#331220]/10 rounded-full opacity-40"
        variants={floatVariants}
        animate="animate"
        style={{ animationDelay: "1s" }}
      />
      <motion.div
        className="absolute top-1/3 left-1/4 w-12 h-12 border-2 border-[#C444A8]/30 rounded-full opacity-60"
        variants={floatVariants}
        animate="animate"
        style={{ animationDelay: "2s" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          <motion.div
            className="text-center md:text-left relative"
            variants={textContentVariants}
          >
            {/* Subtle background text for depth */}
            <div className="absolute -top-10 left-0 text-[#C444A8]/10 text-9xl font-serif tracking-widest -z-10">
              Stories
            </div>

            <motion.h1
              className="text-5xl sm:text-6xl lg:text-6xl font-extrabold text-[#331220] leading-tight relative"
              variants={headlineVariants}
            >
              {headlineText1.split(" ").map((word, index) => (
                <motion.span
                  key={`h1-p1-${index}`}
                  variants={wordVariants}
                  className="inline-block mr-2 sm:mr-3 lg:mr-4 drop-shadow-sm"
                >
                  {word}
                </motion.span>
              ))}
              <motion.span
                variants={unusualWordVariants}
                className="italic text-[#C444A8] font-light inline-block mr-2 sm:mr-3 lg:mr-4 relative"
              >
                {unusualWord}
                <motion.span
                  className="absolute -bottom-2 left-0 w-full h-1 bg-[#C444A8]/50 rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 2, duration: 0.6, ease: "easeOut" }}
                />
              </motion.span>
              {headlineText2.split(" ").map((word, index) => (
                <motion.span
                  key={`h1-p2-${index}`}
                  variants={wordVariants}
                  className="inline-block drop-shadow-sm"
                >
                  {word}
                </motion.span>
              ))}
            </motion.h1>

            <motion.p
              className="mt-8 text-lg sm:text-xl text-[#4a2533] max-w-md mx-auto md:mx-0 font-serif leading-relaxed"
              variants={paragraphVariants}
            >
              Unravel the magic woven into the ordinary. At Scribes, we spin
              stories that linger like whispers of a forgotten dream.
            </motion.p>

            <motion.div className="mt-12" variants={buttonVariants}>
              <button
                className="px-10 py-4 bg-gradient-to-r from-[#C444A8] to-[#A9338C] text-white text-lg font-semibold rounded-lg shadow-xl hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-[#C444A8]/50 transition-all duration-500 transform hover:scale-110 active:scale-95 relative overflow-hidden"
              >
                <span className="relative z-10">Join our Community</span>
                <motion.div
                  className="absolute inset-0 bg-[#ffffff]/20"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                />
              </button>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative w-full h-[300px] sm:h-[400px] md:h-[600px] rounded-2xl overflow-hidden shadow-2xl group"
            variants={imageVariants}
          >
            <Image
              src="/assets/hero-1.jpg"
              alt="A moonlit desk where a vintage typewriter, glowing quill, and scattered stardust-dusted pages weave tales that defy the ordinary."
              fill
              style={{ objectFit: "cover" }}
              className="transform group-hover:scale-110 group-hover:rotate-1 transition-transform duration-700 ease-in-out border-4 border-white/80 p-2 bg-gradient-to-br from-white/50 to-white/20"
              priority
              onError={(e) => {
                e.currentTarget.src =
                  "https://placehold.co/600x500/A987C9/FFFFFF?text=Story+Unfolds&font=lora";
                e.currentTarget.alt =
                  "Placeholder: A constellation of words and ideas, swirling into stories yet to be told.";
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#331220]/30 via-transparent to-transparent opacity-80 group-hover:opacity-50 transition-opacity duration-500" />
            {/* Subtle glowing overlay on hover */}
            <motion.div
              className="absolute inset-0 bg-[#C444A8]/10"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 0.4 }}
              transition={{ duration: 0.5 }}
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Herobanner;