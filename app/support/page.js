"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Mail, Phone, MessageCircle, FileText, Clock } from "lucide-react";

export default function SupportPage() {
  const supportOptions = [
    {
      icon: Mail,
      title: "Email Support",
      description: "Send us an email and we'll respond within 24 hours",
      action: "info@omytech.co.ke",
      link: "mailto:info@omytech.co.ke",
      color: "#1e4e9a"
    },
    {
      icon: Phone,
      title: "Phone Support",
      description: "Call us during business hours for immediate assistance",
      action: "+254 715 367 859",
      link: "tel:+254715367859",
      color: "#4ba3ff"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp Chat",
      description: "Chat with our support team on WhatsApp",
      action: "Start Chat",
      link: "https://wa.me/254715367859",
      color: "#25D366"
    }
  ];

  const faqs = [
    {
      question: "What services does OMYTECH offer?",
      answer: "We offer web development, mobile app design, UI/UX design, e-commerce solutions, digital marketing, and consulting & automation services."
    },
    {
      question: "How long does a typical project take?",
      answer: "Project timelines vary based on complexity and scope. A simple website may take 2-4 weeks, while complex applications can take 2-6 months. We'll provide a detailed timeline during consultation."
    },
    {
      question: "What are your payment terms?",
      answer: "We typically require a 50% deposit to start the project, with the remaining 50% due upon completion. Custom payment plans can be arranged for larger projects."
    },
    {
      question: "Do you provide ongoing support after project completion?",
      answer: "Yes! We offer maintenance and support packages to ensure your digital solutions continue to perform optimally. Contact us for details."
    },
    {
      question: "Can you work with clients outside Kenya?",
      answer: "Absolutely! We work with clients across Africa and globally. We use modern collaboration tools to ensure seamless communication regardless of location."
    },
    {
      question: "How do I get started with a project?",
      answer: "Simply contact us through our contact form, email, or phone. We'll schedule a consultation to discuss your needs and provide a detailed proposal."
    }
  ];

  return (
    <div className="support-page">
      <section className="support-hero">
        <div className="support-hero-container">
          <motion.h1
            className="support-hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            How Can We Help?
          </motion.h1>
          <motion.p
            className="support-hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Get the support you need from our dedicated team
          </motion.p>
        </div>
      </section>

      <section className="support-content">
        <div className="support-container">
          <motion.div
            className="support-options-section"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="support-section-title">Contact Support</h2>
            <div className="support-options-grid">
              {supportOptions.map((option, index) => {
                const IconComponent = option.icon;
                return (
                  <motion.a
                    key={index}
                    href={option.link}
                    className="support-option-card"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    whileHover={{ y: -8 }}
                  >
                    <div className="support-option-icon" style={{ background: option.color }}>
                      <IconComponent size={32} />
                    </div>
                    <h3 className="support-option-title">{option.title}</h3>
                    <p className="support-option-description">{option.description}</p>
                    <span className="support-option-action">{option.action}</span>
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            className="support-hours-section"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <div className="support-hours-card">
              <Clock size={32} />
              <div>
                <h3 className="support-hours-title">Business Hours</h3>
                <p className="support-hours-text">We're available 24/7 to support you</p>
                <p className="support-hours-text">Open every day, all day</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="support-faq-section"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <h2 className="support-section-title">Frequently Asked Questions</h2>
            <div className="support-faq-grid">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  className="support-faq-card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.9 + index * 0.05 }}
                >
                  <h3 className="support-faq-question">{faq.question}</h3>
                  <p className="support-faq-answer">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="support-cta-section"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <FileText size={48} />
            <h2 className="support-cta-title">Still Need Help?</h2>
            <p className="support-cta-text">
              Can't find what you're looking for? Our team is here to help you with any questions or concerns.
            </p>
            <Link href="/contact" className="support-cta-button">
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
