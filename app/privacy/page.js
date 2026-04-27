"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { 
  Security as PrivacyIcon,
  Shield as ShieldIcon,
  Fingerprint as DataIcon,
  Gavel as LegalIcon,
  Policy as PolicyIcon,
  Mail as MailIcon
} from "@mui/icons-material";

const sections = [
  {
    title: "Information We Collect",
    icon: <DataIcon />,
    content: [
      "We collect information that you provide directly to us, including personal information such as name, email address, phone number, and company details. We also collect account credentials, payment information, communications with us, and information about your use of our services and website."
    ]
  },
  {
    title: "How We Use Your Information",
    icon: <PolicyIcon />,
    content: [
      "We use the information we collect to provide, maintain, and improve our services, process transactions, send technical notices and support messages, respond to your inquiries, communicate about our products and services, and monitor usage trends and activities."
    ]
  },
  {
    title: "Information Sharing",
    icon: <ShieldIcon />,
    content: [
      "We do not sell, trade, or rent your personal information to third parties. We may share your information only with your consent, with service providers who perform services on our behalf, to comply with legal obligations, or in connection with a business transaction."
    ]
  },
  {
    title: "Data Security",
    icon: <PrivacyIcon />,
    content: [
      "We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure."
    ]
  },
  {
    title: "Your Rights",
    icon: <LegalIcon />,
    content: [
      "You have the right to access, update, or delete your personal information, opt-out of marketing communications, request a copy of your data, object to processing, and lodge a complaint with a supervisory authority."
    ]
  }
];

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px]" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-semibold mb-6"
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
              Privacy Policy
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
              At OMYTECH, we are committed to protecting your privacy and ensuring the security of your personal information. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our 
              website or use our services.
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
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 flex-shrink-0">
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
              <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400 flex-shrink-0">
                <MailIcon className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-white mb-4">
                  Contact Us
                </h2>
                <p className="text-gray-300 mb-4" style={{ lineHeight: '1.8', overflow: 'visible' }}>
                  If you have any questions or concerns about this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="space-y-2">
                  <p className="text-gray-400">
                    <span className="text-gray-500">Email:</span>{" "}
                    <a href="mailto:info@omytech.co.ke" className="text-blue-400 hover:text-blue-300 transition-colors">
                      info@omytech.co.ke
                    </a>
                  </p>
                  <p className="text-gray-400">
                    <span className="text-gray-500">Phone:</span>{" "}
                    <a href="tel:+254715367859" className="text-blue-400 hover:text-blue-300 transition-colors">
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
            <Link href="/terms" className="text-blue-400 hover:text-blue-300 transition-colors font-medium">
              View Terms of Service →
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
