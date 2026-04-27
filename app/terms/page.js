"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { 
  Gavel as GavelIcon,
  Description as DescIcon,
  Security as SecurityIcon,
  Payment as PaymentIcon,
  Handshake as HandshakeIcon,
  Block as BlockIcon,
  Mail as MailIcon
} from "@mui/icons-material";

const sections = [
  {
    title: "Acceptance of Terms",
    icon: <HandshakeIcon />,
    content: [
      "By accessing and using OMYTECH's website and services, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.",
      "We reserve the right to modify these terms at any time. Your continued use of our services after changes are posted constitutes acceptance of the modified terms."
    ]
  },
  {
    title: "Description of Services",
    icon: <DescIcon />,
    content: [
      "OMYTECH provides digital services including web development and design, mobile application development, UI/UX design services, e-commerce solutions, digital marketing services, and consulting and automation services.",
      "We reserve the right to modify, suspend, or discontinue any aspect of our services at any time without prior notice."
    ]
  },
  {
    title: "Intellectual Property Rights",
    icon: <SecurityIcon />,
    content: [
      "All content, features, and functionality on our website and services are owned by OMYTECH and are protected by international copyright, trademark, and other intellectual property laws.",
      "You may not reproduce, distribute, modify, create derivative works, publicly display, or exploit any of our content without our express written permission."
    ]
  },
  {
    title: "User Conduct",
    icon: <BlockIcon />,
    content: [
      "You agree not to use our services for any illegal or unauthorized purpose, violate any laws in your jurisdiction, infringe upon the rights of others, transmit any harmful code or viruses, or attempt to gain unauthorized access to our systems."
    ]
  },
  {
    title: "Payment Terms",
    icon: <PaymentIcon />,
    content: [
      "For paid services, payment terms will be specified in individual project agreements. All fees are non-refundable unless otherwise stated. Late payments may result in service suspension. We reserve the right to change our pricing with notice."
    ]
  },
  {
    title: "Limitation of Liability",
    icon: <GavelIcon />,
    content: [
      "To the maximum extent permitted by law, OMYTECH shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or business opportunities.",
      "Our total liability for any claims arising from our services shall not exceed the amount paid by you for the specific service giving rise to the claim."
    ]
  }
];

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[120px]" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-semibold mb-6"
          >
            Legal
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
          >
            <span className="block bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent pb-2">
              Terms of Service
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base text-gray-400 font-light"
            style={{ lineHeight: '2', overflow: 'visible' }}
          >
            Last Updated: January 2025
          </motion.p>
        </div>
      </section>

      {/* Content Section */}
      <section className="relative px-6 pb-20">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white/[0.02] border border-white/10 rounded-3xl p-8 backdrop-blur-sm"
          >
            <p className="text-gray-300 text-base leading-relaxed" style={{ lineHeight: '1.8', overflow: 'visible' }}>
              Welcome to OMYTECH. These Terms of Service govern your use of our website and services. 
              Please read these terms carefully before using our services. By accessing or using our services, 
              you agree to be bound by these terms and our Privacy Policy.
            </p>
          </motion.div>

          {/* Sections */}
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/[0.02] border border-white/10 rounded-3xl p-8 backdrop-blur-sm"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 flex-shrink-0">
                  {React.cloneElement(section.icon, { className: "w-6 h-6" })}
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white mb-4">
                    {section.title}
                  </h2>
                  {section.content.map((paragraph, i) => (
                    <p key={i} className="text-gray-400 leading-relaxed mb-4 last:mb-0" style={{ lineHeight: '1.8', overflow: 'visible' }}>
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-white/10 rounded-3xl p-8 backdrop-blur-sm"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center text-cyan-400 flex-shrink-0">
                <MailIcon className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-white mb-4">
                  Questions?
                </h2>
                <p className="text-gray-300 mb-4" style={{ lineHeight: '1.8', overflow: 'visible' }}>
                  If you have any questions about these Terms of Service, please contact our legal team:
                </p>
                <div className="space-y-2">
                  <p className="text-gray-400">
                    <span className="text-gray-500">Email:</span>{" "}
                    <a href="mailto:info@omytech.co.ke" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                      info@omytech.co.ke
                    </a>
                  </p>
                  <p className="text-gray-400">
                    <span className="text-gray-500">Phone:</span>{" "}
                    <a href="tel:+254715367859" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                      +254 715 367 859
                    </a>
                  </p>
                  <p className="text-gray-400">
                    <span className="text-gray-500">Location:</span> Nairobi, Kenya
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Footer Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center pt-8"
          >
            <Link href="/privacy" className="text-cyan-400 hover:text-cyan-300 transition-colors font-medium">
              View Privacy Policy →
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
