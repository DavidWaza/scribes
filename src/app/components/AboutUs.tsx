"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const communityLeader = {
  name: "Welcome to Cinematic Scribes",
  title: "Founder & Lead Scribe",
  imageUrl: "/assets/hero-2.jpg",
  bioIntro: `Become a Cinematic Scribe! All you need is an idea, a love for film & storytelling, and a
commitment to learn and grow. Use your talent to inspire, uplift, and spread the Gospel.
Embrace the opportunity to grow in your craft, participate in our faith-nurturing workshops,
and showcase your work in a community that values both creativity and Christ. Join us and
start your screenwriting journey today!`,
  journeyHighlights: [
    {
      icon: "🎬",
      text: "Penned award-winning shorts and contributed to acclaimed indie features.",
    },
    {
      icon: "🤝",
      text: "Believes passionately in the power of collaboration and mentorship.",
    },
    {
      icon: "💡",
      text: "Driven to demystify the screenwriting process and empower emerging voices.",
    },
  ],
  vision: `We are a faith-driven community of young screenwriters using
our gifts to glorify God through film. Here, we believe that creativity is a divine gift and
storytelling, a form of worship. Join us on a journey to express faith through the silver screen.!`,
  personalTouch:
    "I'm thrilled you're here. Let's build something amazing together, one scene at a time!",
};

const AboutUs = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 60, rotate: -3 },
    visible: {
      opacity: 1,
      y: 0,
      rotate: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  const blockVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="py-24 md:py-32 bg-[#050510] text-gray-200 overflow-hidden relative">
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 10% 20%, #e9456020 0%, transparent 25%), radial-gradient(circle at 90% 80%, #c444a820 0%, transparent 25%)",
        }}
      ></div>

      <div
        className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "url('/assets/hero-2.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      ></div>

      <div
        className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: "url('/assets/film-grain-texture.png')",
          backgroundRepeat: "repeat",
          backgroundSize: "150px",
        }}
      ></div>

      <div className="px-5 max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-20 md:mb-32 relative"
          initial={{ opacity: 0, y: -60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1.0, ease: "easeOut" }}
        >
          <h1 className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#f0f3f4] via-[#e94560] to-[#c444a8] drop-shadow-xl tracking-tight font-playfair">
            Cinematic{" "}
            <span className="italic text-[#f0f3f4] text-shadow-lg font-playfair">
              Scribes
            </span>
          </h1>
          <div className="absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-[#e94560] to-[#c444a8] rounded-full shadow-lg"></div>

          <p className="mt-10 text-lg md:text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed italic">
            Where stories ignite, characters breathe, and every script finds its
            stage.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row items-start justify-center md:space-x-16 lg:space-x-24 relative">
          <motion.div
            className="w-full md:w-2/5 flex-shrink-0 relative z-30 mb-12 md:mb-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={blockVariants}
          >
            <div className="relative rounded-xl shadow-2xl group">
              <Image
                src={communityLeader.imageUrl}
                alt={`Profile photo of ${communityLeader.name}`}
                width={600}
                height={700}
                className="rounded-xl object-cover w-full h-[450px] md:h-[600px] border-4 border-[#c444a8] saturate-150 hover:saturate-200 transition-all duration-700 ease-in-out"
                priority
              />
              <div className="absolute inset-0 rounded-xl ring-4 ring-inset ring-[#e94560] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div
                className="absolute inset-[-20px] rounded-xl bg-gradient-to-br from-[#e94560]/30 to-[#c444a8]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 ease-in-out"
                style={{ filter: "blur(20px)" }}
              ></div>
            </div>
            <p className="text-center text-sm italic text-gray-400 mt-4 text-shadow">
              {communityLeader.name} - {communityLeader.title}
            </p>
          </motion.div>

          <motion.div
            className="w-full md:w-3/5 flex-shrink-0 relative z-20 p-8 md:p-12 bg-[#16213e]/70 rounded-xl shadow-2xl border border-[#0f3460] transform md:-translate-x-24 lg:-translate-x-32 md:rotate-[-2deg]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={blockVariants}
          >
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.h2
                className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#c444a8] to-[#e94560] mb-4 drop-shadow"
                variants={itemVariants}
              >
                <span className="text-[#f0f3f4]">{communityLeader.name}</span>
              </motion.h2>
              <motion.p
                className="text-gray-300 leading-relaxed mb-10 text-justify relative"
                variants={itemVariants}
              >
                <span
                  className="absolute -top-4 -left-4 text-6xl text-[#0f3460] opacity-30 pointer-events-none z-0"
                  style={{ transform: "rotate(20deg)" }}
                >
                  *
                </span>
                <span className="relative z-10">
                  {communityLeader.bioIntro}
                </span>
              </motion.p>
            </motion.div>

            <div className="mb-12">
              <motion.h3
                className="text-2xl font-semibold text-[#f0f3f4] mb-6 pb-3 border-b border-gray-700 relative"
                variants={itemVariants}
              >
                Their Journey & Philosophy
                <span
                  className="absolute bottom-[-1px] left-0 w-full h-[3px] bg-repeat-x opacity-50"
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, #e94560 20%, transparent 20%), linear-gradient(to right, #e94560 40%, transparent 40%), linear-gradient(to right, #e94560 60%, transparent 60%), linear-gradient(to right, #e94560 80%, transparent 80%)",
                    backgroundSize: "20px 3px",
                  }}
                ></span>
              </motion.h3>
              <motion.ul
                className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
              >
                {communityLeader.journeyHighlights.map((item, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start bg-[#1a1a2e]/50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-2 hover:border-[#e94560] border border-transparent relative group"
                    variants={itemVariants}
                  >
                    <span className="text-[#e94560] text-4xl mr-4 transform rotate-[-10deg] group-hover:rotate-0 transition-transform duration-500 ease-in-out">
                      {item.icon}
                    </span>
                    <span className="text-gray-300 flex-1 leading-relaxed">
                      {item.text}
                    </span>
                    <span className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-[#c444a8] opacity-30 group-hover:opacity-70 transition-opacity duration-300"></span>
                  </motion.li>
                ))}
              </motion.ul>
            </div>

            <motion.div
              className="p-8 md:p-10 bg-[#e94560]/15 rounded-lg shadow-xl mb-12 border border-[#e94560] relative overflow-hidden"
              variants={itemVariants}
            >
              <span className="absolute -top-8 left-0 text-9xl font-serif text-[#f0f3f4] opacity-[0.07] pointer-events-none leading-none">
                &ldquo;
              </span>
              <span className="absolute -bottom-8 right-0 text-9xl font-serif text-[#f0f3f4] opacity-[0.07] pointer-events-none leading-none">
                &rdquo;
              </span>

              <h3 className="text-3xl font-bold text-[#f0f3f4] mb-4 relative z-10">
                A Vision for{" "}
                <span className="italic font-playfair text-shadow-sm">
                  Scribes
                </span>
              </h3>
              <blockquote className="text-gray-300 italic relative z-10 leading-loose">
                {communityLeader.vision}
              </blockquote>
            </motion.div>

            <motion.p
              className="text-xl text-[#c444a4] font-semibold italic border-t border-gray-700 pt-8 mt-8 relative text-center"
              variants={itemVariants}
            >
              <span className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-gradient-to-br from-[#e94560] to-[#c444a8] rounded-full shadow-lg"></span>
              {communityLeader.personalTouch}
            </motion.p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
