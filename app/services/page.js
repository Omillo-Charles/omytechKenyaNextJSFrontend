"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Code as CodeIcon,
  Storage as StorageIcon,
  Brush as DesignIcon,
  Security as SecurityIcon,
  AutoGraph as AiIcon,
  Lightbulb as StrategyIcon,
  ArrowForward as ArrowIcon
} from "@mui/icons-material";

const services = [
  {
    id: "software-engineering",
    title: "Software Engineering",
    description: "High-performance web and mobile applications built with modern frameworks for scale and speed.",
    icon: <CodeIcon />,
    color: "#3b82f6",
    features: ["Web Development", "Mobile Apps", "API Integration"]
  },
  {
    id: "cloud-infrastructure",
    title: "Cloud & Infrastructure",
    description: "Scalable, secure, and reliable cloud solutions to power your digital ecosystem with 99.9% uptime.",
    icon: <StorageIcon />,
    color: "#06b6d4",
    features: ["AWS/Azure Setup", "DevOps", "Server Management"]
  },
  {
    id: "ui-ux-design",
    title: "UI/UX Design",
    description: "User-centric interfaces that blend aesthetic beauty with seamless functionality for maximum engagement.",
    icon: <DesignIcon />,
    color: "#f59e0b",
    features: ["Interface Design", "User Research", "Prototyping"]
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity",
    description: "Enterprise-grade security audits and system hardening to protect your data and digital assets.",
    icon: <SecurityIcon />,
    color: "#ef4444",
    features: ["Security Audits", "Penetration Testing", "Compliance"]
  },
  {
    id: "ai-data-science",
    title: "AI & Data Science",
    description: "Custom AI models and data analytics that turn raw information into actionable business intelligence.",
    icon: <AiIcon />,
    color: "#10b981",
    features: ["Machine Learning", "Data Analytics", "Predictive Models"]
  },
  {
    id: "digital-strategy",
    title: "Digital Strategy",
    description: "Comprehensive roadmaps for digital growth, focusing on market penetration and user acquisition.",
    icon: <StrategyIcon />,
    color: "#06b6d4",
    features: ["SEO Optimization", "Growth Strategy", "Market Analysis"]
  }
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px]" />

        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs md:text-sm font-semibold mb-6"
          >
            Our Services
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
          >
            <span className="block bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent pb-2">
              AI Solutions That Take
            </span>
            <span className="block bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent pb-2">
              Your Business to the Next Level
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-sm md:text-base lg:text-lg text-gray-400 max-w-3xl mx-auto font-light"
            style={{ lineHeight: '2', overflow: 'visible' }}
          >
            We design, develop, and implement automation tools that help you work smarter, not harder
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="relative px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <Link href={`/services/${service.id}`}>
                  <div className="relative h-full bg-white/[0.02] border border-white/10 rounded-3xl p-8 backdrop-blur-sm transition-all duration-300 hover:bg-white/[0.05] hover:border-white/20 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)]">
                    {/* Icon */}
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110"
                      style={{
                        backgroundColor: `${service.color}15`,
                        color: service.color
                      }}
                    >
                      {React.cloneElement(service.icon, { className: "w-7 h-7" })}
                    </div>

                    {/* Title */}
                    <h3 className="text-lg md:text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm md:text-base text-gray-400 mb-6 leading-relaxed" style={{ lineHeight: '1.8', overflow: 'visible' }}>
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {service.features.map((feature, i) => (
                        <span
                          key={i}
                          className="text-xs px-3 py-1 rounded-full bg-white/5 text-gray-400 border border-white/10"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    {/* Arrow */}
                    <div className="flex items-center gap-2 text-xs md:text-sm font-semibold transition-all duration-300 group-hover:gap-3" style={{ color: service.color }}>
                      Learn More
                      <ArrowIcon className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative px-6 pb-20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-white/10 rounded-3xl p-12 text-center backdrop-blur-sm overflow-hidden"
          >
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px]" />

            <div className="relative z-10">
              <h2 className="text-xl md:text-3xl font-bold text-white mb-4">
                Ready to Transform Your Business?
              </h2>
              <p className="text-gray-400 mb-8 text-sm md:text-base lg:text-lg" style={{ lineHeight: '1.8', overflow: 'visible' }}>
                Let's discuss how we can help you achieve your goals
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black text-sm md:text-base font-semibold rounded-full hover:scale-105 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]"
              >
                Get Started
                <ArrowIcon className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
