"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const testimonials = [
    {
      name: "Sarah Njoroge",
      role: "Founder, Lintons Hotel",
      text: "Working with OMYTECH completely transformed our online presence. The website they built for us is sleek, professional, and perfectly matches our brand. Their support team is always there when we need them.",
      image: "/heroImages/hero1.jpg"
    },
    {
      name: "Brian Otieno",
      role: "CEO, Nexus Academy",
      text: "OMYTECH helped us move our entire course system online. Their understanding of education technology is outstanding, and their creativity sets them apart. Highly recommend!",
      image: "/heroImages/hero1.jpg"
    },
    {
      name: "Alianda Rollins",
      role: "Registered Nurse",
      text: "I wanted a personal portfolio that reflects both my career and personality — OMYTECH delivered beyond expectations. It's beautiful, responsive, and easy to update.",
      image: "/heroImages/hero1.jpg"
    }
  ];

  return (
    <section id="testimonials" className="testimonials-section" ref={ref}>
      <div className="testimonials-container">
        <motion.div
          className="testimonials-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="testimonials-title">What Our Clients Say</h2>
          <p className="testimonials-subtitle">
            We're proud to empower businesses and ideas through digital innovation.
          </p>
        </motion.div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="testimonial-card"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <div className="testimonial-content">
                <p className="testimonial-text">"{testimonial.text}"</p>
              </div>
              <div className="testimonial-author">
                <div className="author-image">
                  <img src={testimonial.image} alt={testimonial.name} />
                </div>
                <div className="author-info">
                  <h4 className="author-name">{testimonial.name}</h4>
                  <p className="author-role">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="testimonials-cta"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p className="cta-text">Join hundreds of satisfied clients.</p>
          <Link href="/contact" className="cta-button">
            Start Your Project
            <ArrowRight size={20} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
