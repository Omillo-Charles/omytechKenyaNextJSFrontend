"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Book, Code, Palette, Smartphone, ShoppingCart, TrendingUp, FileText, ExternalLink } from "lucide-react";

export default function DocsPage() {
  const docCategories = [
    {
      icon: Code,
      title: "Web Development",
      description: "Learn about our web development process, technologies, and best practices",
      topics: [
        "Project Setup & Requirements",
        "Development Workflow",
        "Testing & Quality Assurance",
        "Deployment & Hosting"
      ],
      color: "#1e4e9a"
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Documentation for mobile app development services",
      topics: [
        "iOS & Android Development",
        "Cross-Platform Solutions",
        "App Store Submission",
        "Mobile App Maintenance"
      ],
      color: "#4ba3ff"
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Design guidelines and processes we follow",
      topics: [
        "Design Thinking Process",
        "Wireframing & Prototyping",
        "User Research",
        "Design Systems"
      ],
      color: "#7c3aed"
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Solutions",
      description: "Building and managing online stores",
      topics: [
        "Platform Selection",
        "Payment Integration",
        "Inventory Management",
        "Security Best Practices"
      ],
      color: "#00e0ff"
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing",
      description: "Marketing strategies and campaign management",
      topics: [
        "SEO Optimization",
        "Social Media Marketing",
        "Content Strategy",
        "Analytics & Reporting"
      ],
      color: "#f59e0b"
    },
    {
      icon: FileText,
      title: "API Documentation",
      description: "Technical documentation for our APIs and integrations",
      topics: [
        "Authentication",
        "API Endpoints",
        "Rate Limiting",
        "Error Handling"
      ],
      color: "#10b981"
    }
  ];

  return (
    <div className="docs-page">
      <section className="docs-hero">
        <div className="docs-hero-container">
          <motion.h1
            className="docs-hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Documentation
          </motion.h1>
          <motion.p
            className="docs-hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Everything you need to know about working with OMYTECH
          </motion.p>
        </div>
      </section>

      <section className="docs-content">
        <div className="docs-container">
          <motion.div
            className="docs-intro"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Book size={32} />
            <div>
              <h2 className="docs-intro-title">Welcome to OMYTECH Documentation</h2>
              <p className="docs-intro-text">
                This documentation provides comprehensive guides, tutorials, and references for all our services. 
                Whether you're a new client or an existing partner, you'll find everything you need to successfully 
                work with OMYTECH.
              </p>
            </div>
          </motion.div>

          <div className="docs-grid">
            {docCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <motion.div
                  key={index}
                  className="docs-card"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  whileHover={{ y: -8 }}
                >
                  <div className="docs-card-header">
                    <div className="docs-card-icon" style={{ background: category.color }}>
                      <IconComponent size={28} />
                    </div>
                    <h3 className="docs-card-title">{category.title}</h3>
                  </div>
                  <p className="docs-card-description">{category.description}</p>
                  <ul className="docs-card-topics">
                    {category.topics.map((topic, tIndex) => (
                      <li key={tIndex}>
                        <ExternalLink size={16} />
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            className="docs-cta"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <h2 className="docs-cta-title">Need More Information?</h2>
            <p className="docs-cta-text">
              Can't find what you're looking for? Our support team is ready to help you with any questions.
            </p>
            <div className="docs-cta-buttons">
              <Link href="/support" className="docs-cta-button primary">
                Contact Support
              </Link>
              <Link href="/contact" className="docs-cta-button secondary">
                Get in Touch
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
