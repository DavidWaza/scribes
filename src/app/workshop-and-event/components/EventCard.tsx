// components/EventCard.js
"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

// Icons remain the same...
const ClockIcon = ({ className }: { className: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const VenueIcon = ({ className }: { className: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M2 21h20" />
    <path d="M7 21V7l5-5 5 5v14" />
    <path d="M11 21V12" />
    <path d="M13 21V12" />
  </svg>
);

const LocationIcon = ({ className }: { className: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

interface Event {
  type: string;
  title: string;
  time: string;
  venue: string;
  location: string;
  imageUrl: string;
}

const EventCard = ({ event }: { event: Event }) => {
  const isWorkshop = event.type.toLowerCase() === "workshop";

  return (
    <motion.div
      variants={cardVariants}
      className="flex flex-col h-full bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-400"
    >
      <div className="relative w-full aspect-video">
        <Image
          src={event.imageUrl}
          alt={`Promotional image for ${event.title}`}
          fill
          className="object-cover"
        />
      </div>

      <div className="flex flex-col flex-grow p-6">
        <div className="mb-4">
          <span
            className={`inline-block px-3 py-1 text-sm font-semibold tracking-wider uppercase rounded-full ${
              isWorkshop
                ? "bg-[#311B5319] text-amber-800"
                : "bg-stone-200 text-stone-800"
            }`}
          >
            {event.type}
          </span>
        </div>

        <h3
          className="text-2xl font-bold text-gray-800 mb-6"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          {event.title}
        </h3>

        <ul className="space-y-4 text-gray-600">
          <li className="flex items-start gap-3">
            <ClockIcon className="w-5 h-5 mt-1 text-amber-700 flex-shrink-0" />
            <span>{event.time}</span>
          </li>
          <li className="flex items-start gap-3">
            <VenueIcon className="w-5 h-5 mt-1 text-amber-700 flex-shrink-0" />
            <span>{event.venue}</span>
          </li>
          <li className="flex items-start gap-3">
            <LocationIcon className="w-5 h-5 mt-1 text-amber-700 flex-shrink-0" />
            <span>{event.location}</span>
          </li>
        </ul>
      </div>

      <div className="border-t border-stone-200 p-6 mt-auto">
        <a
          href="#"
          className="font-semibold text-amber-800 hover:text-gray-900 transition-colors duration-300 group"
        >
          Learn More
          <span className="inline-block transition-transform duration-300 group-hover:translate-x-1 ml-1">
            →
          </span>
        </a>
      </div>
    </motion.div>
  );
};

export default EventCard;
