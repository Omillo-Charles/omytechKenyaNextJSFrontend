"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Smartphone, Palette, ShoppingCart, TrendingUp, Settings } from "lucide-react";

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Custom, scalable web applications built with modern technologies."
    },
    {
      icon: Smartphone,
      title: "Mobile App Design",
      description: "Native and cross-platform mobile solutions for iOS and Android."
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "User-centered design that creates engaging digital experiences."
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Solutions",
      description: "Complete online stores with secure payment and inventory systems."
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing",
      description: "Strategic campaigns that drive growth and brand visibility."
    },
    {
      icon: Settings,
      title: "Consulting & Automation",
      description: "Expert guidance and workflow automation to optimize your business."
    }
  ];

  return (
    <section id="services" className="services-section" ref={ref}>
      <div className="services-container">
        <motion.div
          className="services-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="services-title">Our Digital Services</h2>
          <p className="services-tagline">Innovating the Future, Empowering Africa</p>
        </motion.div>

        <div className="services-grid">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={index}
                className="service-card"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <div className="service-icon-wrapper">
                  <IconComponent className="service-icon" size={40} strokeWidth={1.5} />
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <div className="service-buttons">
                  <button className="service-btn-primary">Place Order</button>
                  <button className="service-btn-secondary">Request Quote</button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
