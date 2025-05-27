"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const TwitterIcon = () => (
  <svg
    className="w-6 h-6"
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg
    className="w-6 h-6"
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const InstagramIcon = () => (
  <svg
    className="w-6 h-6"
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.359 2.618 6.78 6.98 6.98 1.281.059 1.689.073 4.948.073s3.667-.014 4.947-.072c4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.947s-.014-3.667-.072-4.947c-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navItems = [
    { href: "/about", label: "About Us" },
    { href: "/workshops", label: "Workshop & Events" },
    { href: "/spotlight", label: "Member's Spotlight" },
  ];

  const socialLinks = [
    {
      href: "https://twitter.com/yourprofile",
      label: "Twitter",
      icon: <TwitterIcon />,
    },
    {
      href: "https://linkedin.com/in/yourprofile",
      label: "LinkedIn",
      icon: <LinkedInIcon />,
    },
    {
      href: "https://instagram.com/yourprofile",
      label: "Instagram",
      icon: <InstagramIcon />,
    },
  ];

  return (
    <nav className="bg-white text-gray-800  sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link href="/" legacyBehavior={false}>
              <span className="flex items-center">
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
              </span>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex md:items-center md:space-x-4 lg:space-x-6">
            {navItems.map((item) => (
              <Link key={item.label} href={item.href} legacyBehavior={false}>
                <span className="px-3 py-2 rounded-md text-gray-700 text-lg font-medium hover:bg-[#951388e7] hover:text-white transition duration-300">
                  {item.label}
                </span>
              </Link>
            ))}
          </div>

          {/* Desktop Social Icons */}
          <div className="hidden md:flex items-center space-x-3">
            {socialLinks.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-[#ff5ca3fb] transition duration-300 p-2 rounded-full hover:bg-[#ff5ca335]"
                aria-label={social.label}
              >
                {social.icon}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-[#FF5CA3] hover:bg-[#FF5CA3] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#FF5CA3]"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              <span className="sr-only">Open main menu</span>
              {!isMobileMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden border-t border-gray-200 ${
          isMobileMenuOpen
            ? "max-h-screen opacity-100 py-2"
            : "max-h-0 opacity-0 py-0"
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navItems.map((item) => (
            <Link key={item.label} href={item.href} legacyBehavior={false}>
              <span
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-3 rounded-md text-lg font-medium text-gray-700 hover:bg-[#FF5CA3] hover:text-[#FF5CA3] transition duration-300"
              >
                {item.label}
              </span>
            </Link>
          ))}
          <div className="pt-4 pb-2">
            <div className="border-t border-gray-200 mb-2"></div>
            <div className="flex justify-center space-x-5 px-3">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-[#FF5CA3] transition duration-300 p-2"
                  aria-label={social.label}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
