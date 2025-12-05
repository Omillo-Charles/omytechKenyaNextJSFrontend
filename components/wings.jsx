"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Wings() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const wings = [
    {
      title: "OMYTECH STUDIO",
      subtitle: "Creative & Development Wing",
      description:
        "OMYTECH Studio handles web and app development, UI/UX design, and branding solutions. We bring ideas to life through design and technology that inspire.",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      accentColor: "#667eea",
    },
    {
      title: "OMYGEN",
      subtitle: "Innovation & Research Wing",
      description:
        "OMYGEN focuses on building next-generation products — from AI tools to automation systems. It's where ideas are tested, refined, and turned into real-world solutions.",
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      accentColor: "#f5576c",
    },
    {
      title: "OMYLABS",
      subtitle: "Experimentation & Product Wing",
      description:
        "OMYLABS is the experimental arm of OMYTECH. Here, we create prototypes, explore new business ideas, and collaborate on open-source projects for Africa's digital growth.",
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      accentColor: "#00f2fe",
    },
  ];

  return (
    <section id="wings" className="wings-section" ref={ref}>
      <div className="wings-background">
        <div className="wings-glow wings-glow-1"></div>
        <div className="wings-glow wings-glow-2"></div>
      </div>

      <div className="wings-container">
        <motion.div
          className="wings-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="wings-title">Our Wings</h2>
          <p className="wings-subtitle">
            Each wing of OMYTECH drives a unique part of our innovation journey.
          </p>
        </motion.div>

        <div className="wings-grid">
          {wings.map((wing, index) => {
            return (
              <motion.div
                key={index}
                className="wing-card"
                initial={{ opacity: 0, y: 40 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }
                }
                transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
              >
                <div className="wing-card-inner">
                  <div
                    className="wing-gradient-bar"
                    style={{ background: wing.gradient }}
                  ></div>
                  <div className="wing-content">
                    <h3 className="wing-title">{wing.title}</h3>
                    <p className="wing-subtitle">{wing.subtitle}</p>
                    <p className="wing-description">{wing.description}</p>
                  </div>
                  <div
                    className="wing-accent-line"
                    style={{ background: wing.accentColor }}
                  ></div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          className="wings-cta"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="wings-cta-text">
            Explore how our wings shape the future.
          </p>
          <Link href="/wings" className="wings-cta-button">
            Discover More
            <ArrowRight size={20} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
