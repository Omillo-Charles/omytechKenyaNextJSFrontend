"use client";

import React from "react";
import { motion } from "framer-motion";

const companies = [
  { name: "Google", logo: "https://cdn.simpleicons.org/google/white" },
  { name: "Microsoft", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/microsoft.svg" },
  { name: "Apple", logo: "https://cdn.simpleicons.org/apple/white" },
  { name: "Amazon", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/amazon.svg" },
  { name: "Meta", logo: "https://cdn.simpleicons.org/meta/white" },
  { name: "Netflix", logo: "https://cdn.simpleicons.org/netflix/white" },
  { name: "Tesla", logo: "https://cdn.simpleicons.org/tesla/white" },
  { name: "IBM", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/ibm.svg" },
];

export default function LogoCarousel() {
  // Duplicate the array multiple times for seamless loop
  const duplicatedCompanies = [...companies, ...companies, ...companies];

  return (
    <section className="relative py-12 overflow-hidden bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-8">
          <p className="text-gray-500 text-sm font-medium uppercase tracking-wider">
            Inspired by Industry Leaders
          </p>
        </div>

        <div className="relative">
          {/* Gradient overlays for fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0A0A0A] to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0A0A0A] to-transparent z-10" />

          {/* Scrolling container */}
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-12 items-center"
              animate={{
                x: [0, -100 / 3 + "%"],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 25,
                  ease: "linear",
                },
              }}
              style={{ width: "max-content" }}
            >
              {duplicatedCompanies.map((company, index) => (
                <div
                  key={`${company.name}-${index}`}
                  className="flex-shrink-0 w-40 flex flex-col items-center justify-center gap-3 opacity-50 hover:opacity-100 transition-all duration-300 grayscale hover:grayscale-0"
                >
                  <img
                    src={company.logo}
                    alt={`${company.name} logo`}
                    className="w-12 h-12 object-contain"
                    style={{ filter: 'brightness(0) invert(1)' }}
                    loading="lazy"
                    onError={(e) => {
                      console.error(`Failed to load logo for ${company.name}`);
                      e.target.style.display = 'none';
                    }}
                  />
                  <span className="text-gray-400 text-sm font-medium">
                    {company.name}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
