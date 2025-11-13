"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Mail } from "lucide-react";

export default function CareersPage() {
  return (
    <div className="careers-page">
      <section className="careers-hero">
        <div className="careers-hero-container">
          <motion.h1
            className="careers-hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Careers at OMYTECH
          </motion.h1>
          <motion.p
            className="careers-hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Join our team and help shape Africa's digital future
          </motion.p>
        </div>
      </section>

      <section className="careers-content">
        <div className="careers-container">
          <motion.div
            className="careers-message-card"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="careers-message-title">No Open Positions</h2>
            <p className="careers-message-text">
              We currently don't have any open positions at OMYTECH. However, we're always 
              looking for talented individuals who are passionate about technology and innovation.
            </p>
            <p className="careers-message-text">
              If you'd like to be considered for future opportunities, please send your resume 
              and portfolio to our team. We'll keep your information on file and reach out when 
              a suitable position becomes available.
            </p>
            
            <div className="careers-contact-box">
              <Mail size={24} />
              <div>
                <p className="careers-contact-label">Send your application to:</p>
                <a href="mailto:info@omytech.co.ke" className="careers-contact-email">
                  info@omytech.co.ke
                </a>
              </div>
            </div>

            <div className="careers-cta">
              <Link href="/contact" className="careers-cta-button">
                Contact Us
              </Link>
              <Link href="/" className="careers-cta-button secondary">
                Back to Home
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
