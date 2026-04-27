"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { 
  Brush as BrushIcon,
  Science as ScienceIcon,
  AutoAwesome as AiIcon,
  ArrowForward as ArrowIcon,
  CheckCircle as CheckIcon
} from "@mui/icons-material";

const wings = [
  {
    id: "studio",
    name: "OMYTECH STUDIO",
    tagline: "Creative & Digital Excellence",
    description: "Our creative powerhouse dedicated to high-end UI/UX design, branding, and digital storytelling. We blend aesthetics with functionality to create memorable digital experiences.",
    icon: <BrushIcon />,
    color: "#f43f5e",
    features: [
      "Brand Identity Design",
      "High-Fidelity UI/UX",
      "Motion Graphics",
      "Digital Storytelling",
      "Creative Strategy"
    ]
  },
  {
    id: "labs",
    name: "OMYLABS",
    tagline: "Innovation & R&D Hub",
    description: "The experimental arm of OMYTECH where we research and develop emerging technologies. From IoT to Blockchain, OMYLABS is where the future is engineered.",
    icon: <ScienceIcon />,
    color: "#06b6d4",
    features: [
      "IoT Prototyping",
      "Blockchain Solutions",
      "R&D Experiments",
      "Emerging Tech Analysis",
      "Proof of Concepts"
    ]
  },
  {
    id: "gen",
    name: "OMYGEN",
    tagline: "Next-Gen AI Solutions",
    description: "Dedicated to Artificial Intelligence and Machine Learning. OMYGEN focuses on building intelligent systems that automate complex tasks and provide data-driven insights.",
    icon: <AiIcon />,
    color: "#3b82f6",
    features: [
      "LLM Integration",
      "Predictive Analytics",
      "Neural Networks",
      "NLP Processing",
      "AI Automation"
    ]
  }
];

export default function WingsPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[120px]" />

        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-semibold mb-6"
          >
            Our Wings
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
          >
            <span className="block bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent pb-2">
              Specialized Divisions
            </span>
            <span className="block bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent pb-2">
              Focused Excellence
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base md:text-lg text-gray-400 max-w-3xl mx-auto font-light"
            style={{ lineHeight: '2', overflow: 'visible' }}
          >
            Each wing of OMYTECH focuses on a core pillar of technological advancement 
            and creative excellence, delivering specialized solutions.
          </motion.p>
        </div>
      </section>

      {/* Wings Grid */}
      <section className="relative px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {wings.map((wing, index) => (
              <motion.div
                key={wing.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="relative h-full bg-white/[0.02] border border-white/10 rounded-3xl p-8 backdrop-blur-sm transition-all duration-300 hover:bg-white/[0.05] hover:border-white/20 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)]">
                  {/* Top accent line */}
                  <div 
                    className="absolute top-0 left-0 right-0 h-1 rounded-t-3xl transition-all duration-300"
                    style={{ backgroundColor: wing.color }}
                  />

                  {/* Icon */}
                  <div 
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110"
                    style={{ 
                      backgroundColor: `${wing.color}15`,
                      color: wing.color
                    }}
                  >
                    {React.cloneElement(wing.icon, { className: "w-8 h-8" })}
                  </div>

                  {/* Title */}
                  <h3 
                    className="text-xl font-bold mb-2 transition-colors"
                    style={{ color: wing.color }}
                  >
                    {wing.name}
                  </h3>

                  {/* Tagline */}
                  <p className="text-white font-semibold mb-4" style={{ lineHeight: '1.4', overflow: 'visible' }}>
                    {wing.tagline}
                  </p>

                  {/* Description */}
                  <p className="text-gray-400 mb-6 leading-relaxed" style={{ lineHeight: '1.8', overflow: 'visible' }}>
                    {wing.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-3 mb-6">
                    <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold">
                      Core Pillars
                    </p>
                    {wing.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckIcon 
                          className="w-5 h-5 flex-shrink-0 mt-0.5" 
                          style={{ color: wing.color }}
                        />
                        <span className="text-gray-300 text-sm" style={{ lineHeight: '1.6', overflow: 'visible' }}>
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <div 
                    className="flex items-center gap-2 text-sm font-semibold transition-all duration-300 group-hover:gap-3 mt-auto pt-4 border-t border-white/5"
                    style={{ color: wing.color }}
                  >
                    Explore {wing.id.charAt(0).toUpperCase() + wing.id.slice(1)}
                    <ArrowIcon className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="relative px-6 pb-20">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/[0.02] border border-white/10 rounded-3xl p-12 backdrop-blur-sm text-center"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              One Company, Multiple Specializations
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto mb-8" style={{ lineHeight: '1.8', overflow: 'visible' }}>
              Each wing operates with autonomy while sharing OMYTECH's core values of 
              excellence, innovation, and client success. Together, we provide comprehensive 
              solutions across the entire technology spectrum.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-semibold rounded-full hover:scale-105 transition-all duration-300"
              >
                View All Services
                <ArrowIcon className="w-5 h-5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300"
              >
                Get in Touch
                <ArrowIcon className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {wings.map((wing, index) => (
              <motion.div
                key={wing.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative rounded-3xl p-8 text-center backdrop-blur-sm overflow-hidden group cursor-pointer"
                style={{ 
                  background: `linear-gradient(135deg, ${wing.color}15, ${wing.color}05)`,
                  border: `1px solid ${wing.color}30`
                }}
              >
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px]" />
                
                <div className="relative z-10">
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:scale-110"
                    style={{ 
                      backgroundColor: `${wing.color}20`,
                      color: wing.color
                    }}
                  >
                    {React.cloneElement(wing.icon, { className: "w-6 h-6" })}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {wing.name}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4" style={{ lineHeight: '1.6', overflow: 'visible' }}>
                    {wing.tagline}
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-sm font-semibold transition-colors"
                    style={{ color: wing.color }}
                  >
                    Learn More
                    <ArrowIcon className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
