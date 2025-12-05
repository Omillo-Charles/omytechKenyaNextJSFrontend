"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const values = [
    {
      title: "Innovation",
      description: "We create what tomorrow needs, today.",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    },
    {
      title: "Excellence",
      description: "Every project reflects our passion for quality.",
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    },
    {
      title: "Impact",
      description: "Empowering Africa through digital transformation.",
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
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
            Transforming Ideas Into Digital Reality
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
              return (
                <motion.div
                  key={index}
                  className="about-value-card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                >
                  <div
                    className="value-gradient-top"
                    style={{ background: value.gradient }}
                  ></div>
                  <div className="value-content">
                    <h4 className="value-title">{value.title}</h4>
                    <p className="value-description">{value.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
