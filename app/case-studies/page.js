"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, TrendingUp, Users, Clock } from "lucide-react";

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      title: "Lintons Hotel - Digital Transformation",
      client: "Lintons Hotel",
      category: "Web Development & Branding",
      description: "Complete website redesign and digital presence overhaul for a leading hospitality brand in Kenya.",
      image: "/heroImages/hero1.jpg",
      results: [
        { label: "Increase in Bookings", value: "150%" },
        { label: "Page Load Speed", value: "2.5s" },
        { label: "User Engagement", value: "+85%" }
      ],
      tags: ["Web Design", "SEO", "Branding"]
    },
    {
      title: "Nexus Academy - E-Learning Platform",
      client: "Nexus Academy",
      category: "Web Application Development",
      description: "Custom learning management system with course management, student tracking, and payment integration.",
      image: "/heroImages/hero1.jpg",
      results: [
        { label: "Active Students", value: "5,000+" },
        { label: "Course Completion", value: "92%" },
        { label: "Platform Uptime", value: "99.9%" }
      ],
      tags: ["LMS", "Education", "Full Stack"]
    },
    {
      title: "Portfolio Website - Personal Branding",
      client: "Healthcare Professional",
      category: "UI/UX Design & Development",
      description: "Modern, responsive portfolio website showcasing professional achievements and services.",
      image: "/heroImages/hero1.jpg",
      results: [
        { label: "Mobile Traffic", value: "70%" },
        { label: "Contact Rate", value: "+200%" },
        { label: "Load Time", value: "1.8s" }
      ],
      tags: ["Portfolio", "Responsive", "Modern Design"]
    }
  ];

  return (
    <div className="case-studies-page">
      <section className="case-studies-hero">
        <div className="case-studies-hero-container">
          <motion.h1
            className="case-studies-hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Case Studies
          </motion.h1>
          <motion.p
            className="case-studies-hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Real projects, real results. See how we've helped businesses transform digitally.
          </motion.p>
        </div>
      </section>

      <section className="case-studies-content">
        <div className="case-studies-container">
          <div className="case-studies-grid">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                className="case-study-card"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.15 }}
              >
                <div className="case-study-image">
                  <Image
                    src={study.image}
                    alt={study.title}
                    width={600}
                    height={400}
                    className="case-study-img"
                  />
                  <div className="case-study-overlay">
                    <span className="case-study-category">{study.category}</span>
                  </div>
                </div>

                <div className="case-study-content">
                  <h3 className="case-study-title">{study.title}</h3>
                  <p className="case-study-client">
                    <Users size={16} />
                    {study.client}
                  </p>
                  <p className="case-study-description">{study.description}</p>

                  <div className="case-study-results">
                    {study.results.map((result, rIndex) => (
                      <div key={rIndex} className="case-study-result">
                        <TrendingUp size={20} />
                        <div>
                          <p className="result-value">{result.value}</p>
                          <p className="result-label">{result.label}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="case-study-tags">
                    {study.tags.map((tag, tIndex) => (
                      <span key={tIndex} className="case-study-tag">{tag}</span>
                    ))}
                  </div>

                  <Link href="#" className="case-study-link">
                    View Full Case Study
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="case-studies-cta"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <h2 className="case-studies-cta-title">Ready to Start Your Project?</h2>
            <p className="case-studies-cta-text">
              Let's create a success story together. Contact us to discuss your project.
            </p>
            <Link href="/contact" className="case-studies-cta-button">
              Get Started
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
