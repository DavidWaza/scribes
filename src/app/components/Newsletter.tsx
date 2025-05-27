"use client";

import React, { useState } from "react";

const NewsletterSignup = () => {
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission logic here (e.g., API call)
    console.log("Form submitted:", form);
    setSubmitted(true);
  };

  return (
    <section className="w-full bg-slate-900 text-white py-20 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-4">
          Stay in the <span className="text-pink-400">Loop</span>
        </h2>
        <p className="text-slate-400 mb-8 text-lg">
          Sign up for our newsletter to get the latest updates, events, and exclusive resources for screenwriters.
        </p>

        {!submitted ? (
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 items-start"
          >
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              required
              value={form.firstName}
              onChange={handleChange}
              className="px-4 py-3 rounded-md bg-slate-800 text-white placeholder-slate-400 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              required
              value={form.lastName}
              onChange={handleChange}
              className="px-4 py-3 rounded-md bg-slate-800 text-white placeholder-slate-400 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
              value={form.email}
              onChange={handleChange}
              className="col-span-full px-4 py-3 rounded-md bg-slate-800 text-white placeholder-slate-400 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
            />
            <button
              type="submit"
              className="col-span-full mt-4 px-6 py-3 rounded-md bg-pink-500 text-white font-semibold hover:bg-pink-400 transition"
            >
              Subscribe
            </button>
          </form>
        ) : (
          <p className="text-green-400 font-medium text-lg mt-6">
            🎉 Thanks for subscribing! We&apos;ll be in touch soon.
          </p>
        )}
      </div>
    </section>
  );
};

export default NewsletterSignup;
