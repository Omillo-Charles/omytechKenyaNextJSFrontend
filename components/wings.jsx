"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, Settings, Rocket, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Wings() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const wings = [
    {
      icon: Brain,
      title: "OMYTECH STUDIO",
      subtitle: "Creative & Development Wing",
      description:
        "OMYTECH Studio handles web and app development, UI/UX design, and branding solutions. We bring ideas to life through design and technology that inspire.",
      color: "#4ba3ff",
    },
    {
      icon: Settings,
      title: "OMYGEN",
      subtitle: "Innovation & Research Wing",
      description:
        "OMYGEN focuses on building next-generation products — from AI tools to automation systems. It's where ideas are tested, refined, and turned into real-world solutions.",
      color: "#00e0ff",
    },
    {
      icon: Rocket,
      title: "OMYLABS",
      subtitle: "Experimentation & Product Wing",
      description:
        "OMYLABS is the experimental arm of OMYTECH. Here, we create prototypes, explore new business ideas, and collaborate on open-source projects for Africa's digital growth.",
      color: "#7c3aed",
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
            const IconComponent = wing.icon;
            return (
              <motion.div
                key={index}
                className="wing-card"
                initial={{ opacity: 0, y: 40 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }
                }
                transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <div
                  className="wing-icon-wrapper"
                  style={{ background: wing.color }}
                >
                  <IconComponent
                    className="wing-icon"
                    size={48}
                    strokeWidth={1.5}
                  />
                </div>
                <h3 className="wing-title">{wing.title}</h3>
                <p className="wing-subtitle">{wing.subtitle}</p>
                <p className="wing-description">{wing.description}</p>
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
