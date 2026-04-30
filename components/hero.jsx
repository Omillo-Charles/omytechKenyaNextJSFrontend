"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowForward as ArrowIcon } from "@mui/icons-material";



export default function Hero() {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="min-h-screen bg-[#0A0A0A]" />
    );
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#0A0A0A]" style={{ overflow: 'clip' }}>
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px]"
        style={{ animation: 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite' }} />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[120px]"
        style={{ animation: 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite 2s' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-18 text-center" style={{ overflow: 'visible' }}>
        {/* Trust badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8"
        >
          <div className="flex -space-x-2">
            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-2 border-[#0A0A0A]" />
            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-cyan-400 to-cyan-600 border-2 border-[#0A0A0A]" />
            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-green-400 to-green-600 border-2 border-[#0A0A0A]" />
          </div>
          <span className="text-[10px] md:text-sm text-gray-400 font-medium">Over 50+ businesses trust us</span>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-[1.15] tracking-tight"
          style={{ overflow: 'visible' }}
        >
          <span className="block bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent pb-2">
            Innovating the Future,
          </span>
          <span className="block bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-500 bg-clip-text text-transparent pb-2">
            Empowering Africa
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-[13px] md:text-base lg:text-lg text-gray-400 max-w-3xl mx-auto mb-10 font-light py-2"
          style={{ lineHeight: '2', overflow: 'visible' }}
        >
          OMYTECH brings cutting-edge technology solutions to your fingertips & streamline tasks.
          We help you work smarter, not harder.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
        >
          <Link
            href="/contact"
            className="group relative px-8 py-4 bg-white text-black text-sm md:text-base font-semibold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]"
          >
            <span className="relative z-10 flex items-center gap-2">
              Get Started
              <ArrowIcon className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </span>
          </Link>

          <Link
            href="/services"
            className="group px-8 py-4 border border-white/20 text-white text-sm md:text-base font-semibold rounded-full backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-white/40"
          >
            <span className="flex items-center gap-2">
              Explore Services
              <ArrowIcon className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </span>
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto pt-8 border-t border-white/5"
        >
          {[
            { label: "Projects Delivered", value: "200+" },
            { label: "Happy Clients", value: "50+" },
            { label: "Years Experience", value: "5+" },
            { label: "Team Members", value: "15+" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-lg md:text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-[10px] md:text-sm text-gray-500 font-medium">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
