"use client";

import React from "react";
import Image from "next/image";
import {
  FacebookLogo,
  TwitterLogo,
  InstagramLogo,
} from "@phosphor-icons/react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {/* Company Info */}
        <div>
          <Image
            src="/assets/logo.png"
            alt="Scribes Logo"
            width={120}
            height={48}
            className="h-12 w-auto"
            priority
            onError={(e) => {
              e.currentTarget.src =
                "https://placehold.co/120x48/cccccc/333333?text=Scribes&font=lora";
              e.currentTarget.alt = "Scribes Placeholder Logo";
            }}
          />
        
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-white font-medium mb-3">Navigation</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#about" className="hover:text-pink-400 transition">
                About Us
              </a>
            </li>
            <li>
              <a href="#community" className="hover:text-pink-400 transition">
                Community
              </a>
            </li>
            <li>
              <a href="#events" className="hover:text-pink-400 transition">
                Events
              </a>
            </li>
            <li>
              <a href="#blog" className="hover:text-pink-400 transition">
                Blog
              </a>
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="text-white font-medium mb-3">Resources</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#faq" className="hover:text-pink-400 transition">
                FAQs
              </a>
            </li>
            <li>
              <a href="#support" className="hover:text-pink-400 transition">
                Support
              </a>
            </li>
            <li>
              <a href="#newsletter" className="hover:text-pink-400 transition">
                Newsletter
              </a>
            </li>
            <li>
              <a href="#workshops" className="hover:text-pink-400 transition">
                Workshops
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="text-white font-medium mb-3">Follow Us</h4>
          <div className="flex gap-4">
            <a
              href="#"
              className="text-pink-400 hover:text-pink-300 transition"
            >
              <FacebookLogo size={24} />
            </a>
            <a
              href="#"
              className="text-pink-400 hover:text-pink-300 transition"
            >
              <TwitterLogo size={24} />
            </a>
            <a
              href="#"
              className="text-pink-400 hover:text-pink-300 transition"
            >
              <InstagramLogo size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-12 border-t border-slate-700 pt-6 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Binary Consolidatenpm run de. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
