"use client";

import React from "react";
import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Brush as BrushIcon,
  Science as ScienceIcon,
  AutoAwesome as AiIcon,
  ArrowBack as BackIcon,
  CheckCircle as CheckIcon,
  Launch as LaunchIcon,
  ArrowForward as ArrowIcon,
  Lightbulb as LightbulbIcon,
  Code as CodeIcon,
  Layers as LayersIcon
} from "@mui/icons-material";

const wingsData = {
  studio: {
    name: "OMYTECH STUDIO",
    tagline: "Creative & Digital Excellence",
    description: "Our creative powerhouse dedicated to high-end UI/UX design, branding, and digital storytelling. We blend aesthetics with functionality to create memorable digital experiences that resonate with audiences and drive engagement.",
    icon: <BrushIcon />,
    color: "#f43f5e",
    gradient: "from-pink-500 to-rose-600",
    overview: "At OMYTECH STUDIO, we believe that design is more than just how things look; it's about how they work and feel. Our team of expert designers and creative strategists work together to transform brand visions into digital reality.",
    pillars: [
      {
        title: "User-Centric Design",
        desc: "Deep research into user behavior to create intuitive interfaces.",
        icon: <LayersIcon />
      },
      {
        title: "Brand Identity",
        desc: "Crafting unique visual languages that set your brand apart.",
        icon: <LightbulbIcon />
      },
      {
        title: "Motion & Interaction",
        desc: "Bringing static designs to life with meaningful animations.",
        icon: <LaunchIcon />
      }
    ],
    features: [
      "High-Fidelity Prototyping",
      "Comprehensive Design Systems",
      "Interactive Digital Campaigns",
      "Content Strategy & Production",
      "Accessibility Audits (WCAG)",
      "Cross-Platform Visual Design"
    ]
  },
  labs: {
    name: "OMYLABS",
    tagline: "Innovation & R&D Hub",
    description: "The experimental arm of OMYTECH where we research and develop emerging technologies. From IoT to Blockchain, OMYLABS is where the future is engineered, tested, and refined for real-world impact.",
    icon: <ScienceIcon />,
    color: "#06b6d4",
    gradient: "from-cyan-400 to-blue-500",
    overview: "OMYLABS is our playground for the future. We don't just follow trends; we create them. Our lab is dedicated to exploring the boundaries of what's possible with connected devices, decentralized systems, and hardware-software integration.",
    pillars: [
      {
        title: "Hardware Integration",
        desc: "Seamlessly connecting physical devices with digital ecosystems.",
        icon: <LayersIcon />
      },
      {
        title: "Decentralized Systems",
        desc: "Building secure, transparent blockchain-based solutions.",
        icon: <LightbulbIcon />
      },
      {
        title: "Future-Proofing",
        desc: "Evaluating and testing tech stacks that will dominate tomorrow.",
        icon: <LaunchIcon />
      }
    ],
    features: [
      "IoT Ecosystem Development",
      "Smart Contract Engineering",
      "Embedded Systems Programming",
      "Rapid Prototype Fabrication",
      "Technology Feasibility Studies",
      "Custom Hardware Design"
    ]
  },
  gen: {
    name: "OMYGEN",
    tagline: "Next-Gen AI Solutions",
    description: "Dedicated to Artificial Intelligence and Machine Learning. OMYGEN focuses on building intelligent systems that automate complex tasks, provide data-driven insights, and augment human capabilities.",
    icon: <AiIcon />,
    color: "#3b82f6",
    gradient: "from-blue-500 to-indigo-600",
    overview: "OMYGEN represents the intelligence layer of OMYTECH. We leverage the power of Large Language Models (LLMs), neural networks, and advanced data analytics to solve complex business challenges that were previously insurmountable.",
    pillars: [
      {
        title: "Intelligent Automation",
        desc: "Reducing manual toil through self-learning algorithms.",
        icon: <CodeIcon />
      },
      {
        title: "Predictive Power",
        desc: "Anticipating market shifts and user needs before they happen.",
        icon: <LightbulbIcon />
      },
      {
        title: "Semantic Analysis",
        desc: "Understanding context and nuance in vast amounts of data.",
        icon: <LaunchIcon />
      }
    ],
    features: [
      "Custom LLM Fine-tuning",
      "Natural Language Processing",
      "Computer Vision Systems",
      "Automated Decision Engines",
      "Data Pipeline Optimization",
      "AI Safety & Ethics Auditing"
    ]
  }
};

export default function WingDetailPage() {
  const params = useParams();
  const router = useRouter();
  const id = params.id;
  const wing = wingsData[id];

  if (!wing) {
    return (
      <div className="min-h-screen bg-[#0A0A0A] flex flex-col items-center justify-center p-6 text-center">
        <h1 className="text-4xl font-bold text-white mb-4">Wing Not Found</h1>
        <p className="text-gray-400 mb-8">The specialization you're looking for doesn't exist.</p>
        <Link href="/wings" className="px-6 py-3 bg-white text-black font-semibold rounded-full">
          Back to Wings
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white overflow-hidden">
      {/* Background Decor */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] blur-[150px] rounded-full opacity-20" style={{ backgroundColor: wing.color }} />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] blur-[150px] rounded-full opacity-10" style={{ backgroundColor: wing.color }} />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="relative z-10">
        {/* Navigation */}
        <div className="max-w-7xl mx-auto px-6 pt-28 md:pt-32 pb-8">
          <Link 
            href="/wings"
            className="group inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
          >
            <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center transition-all group-hover:bg-white/10 group-hover:-translate-x-1">
              <BackIcon sx={{ fontSize: 18 }} />
            </div>
            <span className="text-sm font-medium">Back to Wings</span>
          </Link>
        </div>

        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-6 pt-12 pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div 
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-8"
                style={{ 
                  backgroundColor: `${wing.color}10`,
                  borderColor: `${wing.color}30`,
                  color: wing.color
                }}
              >
                <div className="animate-pulse w-2 h-2 rounded-full" style={{ backgroundColor: wing.color }} />
                <span className="text-xs font-bold uppercase tracking-widest">Active Division</span>
              </div>
              
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                {wing.name.split(' ').map((word, i) => (
                  <span key={i} className={i === 1 ? `bg-gradient-to-r ${wing.gradient} bg-clip-text text-transparent` : ""}>
                    {word}{" "}
                  </span>
                ))}
              </h1>
              
              <p className="text-base md:text-lg lg:text-xl font-light text-gray-300 mb-8 leading-relaxed">
                {wing.tagline}
              </p>
              
              <p className="text-sm md:text-base lg:text-lg text-gray-400 mb-10 leading-relaxed max-w-xl">
                {wing.description}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 md:px-8 md:py-4 bg-white text-black text-sm md:text-base font-bold rounded-full hover:scale-105 transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)] w-full sm:w-auto"
                >
                  Start a Project
                </Link>
                <Link
                  href="#overview"
                  className="inline-flex items-center justify-center px-6 py-3 md:px-8 md:py-4 border border-white/10 text-white text-sm md:text-base font-bold rounded-full hover:bg-white/5 transition-all w-full sm:w-auto"
                >
                  Learn More
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative aspect-square lg:aspect-auto lg:h-[500px] flex items-center justify-center"
            >
              {/* Animated Icon Container */}
              <div className="relative w-64 h-64 md:w-80 md:h-80">
                <div 
                  className="absolute inset-0 rounded-[40px] blur-[60px] opacity-20 animate-pulse"
                  style={{ backgroundColor: wing.color }}
                />
                <div className="absolute inset-0 bg-[#111111] border border-white/10 rounded-[40px] flex items-center justify-center overflow-hidden group">
                   <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
                   <div className="relative transform scale-[3] opacity-[0.15]" style={{ color: wing.color }}>
                      {wing.icon}
                   </div>
                   <div className="relative z-10" style={{ color: wing.color }}>
                      {React.cloneElement(wing.icon, { sx: { fontSize: 120 } })}
                   </div>
                </div>
                
                {/* Orbital elements */}
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute -inset-10 border border-white/5 rounded-full border-dashed"
                />
                <motion.div 
                  animate={{ rotate: -360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  className="absolute -inset-20 border border-white/5 rounded-full"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Overview Section */}
        <section id="overview" className="max-w-7xl mx-auto px-6 py-24 border-t border-white/5">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="md:col-span-1">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Strategic Overview</h2>
              <div className="w-20 h-1 rounded-full mb-8" style={{ backgroundColor: wing.color }} />
              <p className="text-gray-400 leading-relaxed text-sm md:text-base lg:text-lg">
                {wing.overview}
              </p>
            </div>
            
            <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {wing.pillars.map((pillar, i) => (
                <div key={i} className="p-8 bg-white/[0.02] border border-white/10 rounded-3xl hover:bg-white/[0.05] transition-all group">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110" style={{ backgroundColor: `${wing.color}20`, color: wing.color }}>
                    {pillar.icon}
                  </div>
                  <h3 className="text-lg md:text-xl font-bold mb-4">{pillar.title}</h3>
                  <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features & Capabilities */}
        <section className="bg-white/[0.02] py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Core Capabilities</h2>
              <p className="text-gray-400 text-sm md:text-base lg:text-lg max-w-2xl mx-auto">
                Specialized tools and methodologies that define the {wing.name} approach to excellence.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {wing.features.map((feature, i) => (
                <div key={i} className="flex items-center gap-4 p-6 bg-[#0D0D0D] border border-white/5 rounded-2xl hover:border-white/20 transition-all">
                  <CheckIcon sx={{ fontSize: 20 }} style={{ color: wing.color }} />
                  <span className="text-gray-300 text-sm md:text-base font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 px-6 text-center">
          <div className="max-w-4xl mx-auto bg-gradient-to-b from-white/[0.05] to-transparent p-8 md:p-16 rounded-[30px] md:rounded-[40px] border border-white/10">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8">Ready to Leverage {wing.name}?</h2>
            <p className="text-gray-400 text-sm md:text-base lg:text-lg mb-10 max-w-2xl mx-auto">
              Whether you have a specific project in mind or just want to explore the possibilities, our experts are ready to collaborate.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 md:px-10 md:py-4 bg-white text-black text-sm md:text-base font-bold rounded-full hover:scale-105 transition-all w-full sm:w-auto"
              >
                Get in Touch
              </Link>
              <Link
                href="/wings"
                className="inline-flex items-center justify-center px-8 py-3 md:px-10 md:py-4 border border-white/20 text-white text-sm md:text-base font-bold rounded-full hover:bg-white/5 transition-all w-full sm:w-auto"
              >
                View Other Wings
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
