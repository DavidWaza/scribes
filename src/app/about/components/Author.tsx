"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const founderImageUrl =
  "/assets/WhatsApp Image 2025-05-09 at 12.21.05_8f8c42e0.jpg";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      ease: "easeOut",
    },
  },
};

const imageVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "easeOut",
      duration: 0.8,
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
      delay: 0.5,
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

const QuillIcon = ({ className }: { className: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
  >
    <path d="M4 18.2V21h2.8l11-11.2L14 6 3 17.2V21H4zM14 6l4 4" />
    <path d="M11 9l-1.5 1.5" />
    <path d="M19.5 3.5L18 2l-1.5 1.5L18 5l1.5-1.5z" />
  </svg>
);

const FounderSection = () => {
  return (
    <section className="bg-stone-50 py-24 px-4">
      <motion.div
        className="max-w-6xl mx-auto grid md:grid-cols-5 gap-12 items-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div
          variants={imageVariants}
          className="relative md:col-span-2 w-full h-[28rem]"
        >
          <div className="absolute inset-0 bg-white p-4 shadow-sm">
            <div className="relative w-full h-full">
              <Image
                src={founderImageUrl}
                alt="A portrait of the founder, Emediong Akpan"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
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
        </motion.div>

        <div className="md:col-span-3">
          <motion.div
            variants={textVariants}
            className="flex items-center gap-4 mb-4"
          >
            <QuillIcon className="w-8 h-8 text-gray-800" />
            <h2
              className="text-3xl md:text-4xl font-bold text-gray-800"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Meet the Visioneer
            </h2>
          </motion.div>
          <motion.div variants={textVariants}>
            <h3 className="text-2xl font-semibold text-gray-900">
              Emediong Akpan
            </h3>
            <p className="text-md text-amber-700 font-medium">
              Founder & Lead Scribe
            </p>
          </motion.div>

          <motion.blockquote
            variants={textVariants}
            className="relative mt-6 pl-8 text-xl text-gray-600 leading-relaxed border-l-2 border-[#321C55]"
          >
            <div className="space-y-4">
              <p>
                Emy&apos;s journey began with a simple love for stories,
                blooming over the years into a deep-seated passion for
                screenwriting that intertwines with her faith.
              </p>
              <p>
                From her early days as a young writer to her scholarly pursuits
                at The Michener Center for Writers at the University of Texas at
                Austin, where she earned her MFA in Writing, Emy has
                continuously sought to refine her craft. This pursuit of
                knowledge also earned her a screenwriting certificate from the
                prestigious Ebony Life Creative Academy and the honor of
                becoming a Tejumola Olaniyan Creative Writing Fellow.
              </p>
              <p>
                Her stories, a rich tapestry of life and faith, inspire the
                Cinematic Scribes community to see screenwriting not merely as
                an art but as a form of worship because each script Emy pens,
                each story she brings to life, is a testament to her talent and
                her unwavering love and dedication to Christ.
              </p>
            </div>
          </motion.blockquote>
        </div>
      </motion.div>
    </section>
  );
};

export default FounderSection;
