"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import EventCard from "./EventCard"; // Assuming EventCard is in the same directory
import { sampleEvents } from "../../../../data"; // Assuming your data is here

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const UpcomingEventsSection = () => {
  const [filter, setFilter] = useState("all");

  const filteredEvents =
    filter === "all"
      ? sampleEvents
      : sampleEvents.filter(
          (event) => event.type.toLowerCase() === filter.toLowerCase()
        );

  type FilterButtonProps = {
    type: string;
    children: React.ReactNode;
  };

  const FilterButton: React.FC<FilterButtonProps> = ({ type, children }) => {
    const isActive = filter === type;
    return (
      <button
        onClick={() => setFilter(type)}
        className={`px-6 py-2 text-sm font-semibold rounded-full transition-colors duration-300 ${
          isActive
            ? "bg-[#ED3E9B] text-white shadow-sm"
            : "bg-white text-gray-700 hover:bg-stone-200"
        }`}
      >
        {children}
      </button>
    );
  };

  return (
    <section className="bg-stone-50 py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold text-gray-800"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Upcoming Events
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Join our community of scribes at these upcoming workshops and events
            designed to nurture and inspire.
          </p>
        </div>

        <div className="flex justify-center items-center gap-4 mb-12">
          <FilterButton type="all">All</FilterButton>
          <FilterButton type="event">Events</FilterButton>
          <FilterButton type="workshop">Workshops</FilterButton>
        </div>

        <motion.div
          key={filter}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <AnimatePresence>
            {filteredEvents.map((event) => (
              <EventCard key={event.title} event={event} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default UpcomingEventsSection;