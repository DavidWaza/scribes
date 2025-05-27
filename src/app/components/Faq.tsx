"use client";

import React, { useState } from "react";
import { Question, CaretDown, CaretUp } from "@phosphor-icons/react";

interface FaqItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FaqItem: React.FC<FaqItemProps> = ({
  question,
  answer,
  isOpen,
  onClick,
}) => {
  const accent = "#ec4899"; // softer pink (tailwind pink-500)

  return (
    <div className="border-b border-slate-700/50">
      <button
        onClick={onClick}
        className="flex items-center justify-between w-full py-4 px-6 text-left text-base font-medium text-slate-200 hover:bg-slate-800/50 focus:outline-none focus-visible:ring focus-visible:ring-pink-500 focus-visible:ring-opacity-50 transition-colors duration-200"
        aria-expanded={isOpen}
      >
        <span>{question}</span>
        {isOpen ? (
          <CaretUp size={20} style={{ color: accent }} />
        ) : (
          <CaretDown size={20} className="text-slate-400" />
        )}
      </button>
      <div
        className={`transition-all duration-400 ease-in-out overflow-hidden ${
          isOpen ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 pb-4 pt-2 text-slate-300 bg-slate-800/40 rounded-b-md text-sm leading-relaxed">
          <p>{answer}</p>
        </div>
      </div>
    </div>
  );
};

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const accent = "#ec4899";

  const faqData = [
    {
      question: "Can I submit my own screenplay?",
      answer:
        "Our platform aims to inspire, nurture, and support screenwriters by providing resources, workshops, and a vibrant community to help them grow and succeed in their craft.",
    },
    {
      question: "How can I join the screenwriting community?",
      answer:
        "You can join our Slack community by clicking the 'Join the Conversation on Slack' button in our community section. If you can't find it, please contact support for an invite.",
    },
    {
      question: "Is the community open to writers of all level of experience?associated with joining?",
      answer:
        "Basic community membership is free. Some specialized workshops or premium content may have fees, which are clearly indicated.",
    },
    {
      question: "Are there opportunities for collaboration with other writers in the community?",
      answer:
        "We offer peer feedback, mentorship opportunities, script development resources, and help promote members' works.",
    },
    {
      question: "Are there any mentorship programs available within the community?",
      answer:
        "We post new blogs weekly and host events monthly. Check our events page or subscribe to the newsletter.",
    },
      {
      question: "Can I connect with other members outside of the community platform?",
      answer:
        "We post new blogs weekly and host events monthly. Check our events page or subscribe to the newsletter.",
    },
  ];

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      className="text-white py-16 sm:py-24 px-4 sm:px-6 w-full"
      style={{
        backgroundColor: "#0f172a", // tailwind slate-900 solid background
      }}
    >
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-4"
            style={{ backgroundColor: "#312e81", color: "#f3f4f6" }} // purple-900, slate-100 text
          >
            <Question size={18} style={{ color: accent }} />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight text-slate-100">
            Frequently Asked{" "}
            <span
              style={{
                backgroundImage: `linear-gradient(to right, #a78bfa, ${accent})`,
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              Questions
            </span>
          </h2>
          <p className="text-lg text-slate-400 mt-4 max-w-2xl mx-auto">
            Find answers to common questions about our platform, community, and
            services.
          </p>
        </div>

        <div className="bg-slate-800/60 rounded-xl shadow-xl border border-slate-700/40">
          {faqData.map((item, index) => (
            <FaqItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              onClick={() => handleToggle(index)}
            />
          ))}
        </div>

        <p className="text-center text-slate-400 mt-10 text-sm">
          Can’t find the answer you’re looking for?{" "}
          <a
            href="#contact-support"
            className="text-pink-400 hover:text-pink-300 hover:underline"
          >
            Contact our support team.
          </a>
        </p>
      </div>
    </section>
  );
};

export default FaqSection;
