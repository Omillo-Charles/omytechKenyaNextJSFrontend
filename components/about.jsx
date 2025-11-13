"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { HiLightningBolt } from "react-icons/hi";
import { FaStar } from "react-icons/fa";
import { IoEarth } from "react-icons/io5";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const values = [
    {
      icon: HiLightningBolt,
      title: "Innovation",
      description: "We create what tomorrow needs, today.",
    },
    {
      icon: FaStar,
      title: "Excellence",
      description: "Every project reflects our passion for quality.",
    },
    {
      icon: IoEarth,
      title: "Impact",
      description: "Empowering Africa through digital transformation.",
    },
  ];

  return (
    <section id="about" className="about-section-futuristic" ref={ref}>
      <div className="about-bg-animated">
        <div className="about-blob about-blob-1"></div>
        <div className="about-blob about-blob-2"></div>
        <div className="about-blob about-blob-3"></div>
      </div>

      <div className="about-container-futuristic">
        <motion.div
          className="about-glass-card"
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={
            isInView
              ? { opacity: 1, y: 0, scale: 1 }
              : { opacity: 0, y: 50, scale: 0.95 }
          }
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h2
            className="about-heading-futuristic"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Building the Future, One Innovation at a Time.
          </motion.h2>

          <motion.p
            className="about-text-futuristic"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            OMYTECH is a forward-thinking digital agency redefining Africa's
            tech landscape through creativity, innovation, and purposeful
            design.
          </motion.p>

          <motion.p
            className="about-text-futuristic"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            From intelligent web applications to transformative brand
            experiences, we help businesses grow and connect with their
            audiences in meaningful ways.
          </motion.p>

          <motion.div
            className="about-values-grid"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <motion.div
                  key={index}
                  className="about-value-card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.05 }}
                >
                  <div className="value-icon">
                    <IconComponent color="#ffffff" size={48} />
                  </div>
                  <h4 className="value-title">{value.title}</h4>
                  <p className="value-description">{value.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
