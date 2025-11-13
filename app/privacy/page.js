"use client";

import { motion } from "framer-motion";

export default function PrivacyPage() {
  const sections = [
    {
      title: "1. Information We Collect",
      content: [
        "We collect information that you provide directly to us, including:",
        "• Personal information such as name, email address, phone number, and company details",
        "• Account credentials and profile information",
        "• Payment and billing information",
        "• Communications and correspondence with us",
        "• Information about your use of our services and website"
      ]
    },
    {
      title: "2. How We Use Your Information",
      content: [
        "We use the information we collect to:",
        "• Provide, maintain, and improve our services",
        "• Process transactions and send related information",
        "• Send technical notices, updates, and support messages",
        "• Respond to your comments, questions, and customer service requests",
        "• Communicate with you about products, services, and events",
        "• Monitor and analyze trends, usage, and activities"
      ]
    },
    {
      title: "3. Information Sharing and Disclosure",
      content: [
        "We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:",
        "• With your consent or at your direction",
        "• With service providers who perform services on our behalf",
        "• To comply with legal obligations or protect our rights",
        "• In connection with a merger, sale, or acquisition of our business"
      ]
    },
    {
      title: "4. Data Security",
      content: [
        "We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security."
      ]
    },
    {
      title: "5. Your Rights and Choices",
      content: [
        "You have the right to:",
        "• Access, update, or delete your personal information",
        "• Opt-out of marketing communications",
        "• Request a copy of your data",
        "• Object to processing of your personal information",
        "• Lodge a complaint with a supervisory authority"
      ]
    },
    {
      title: "6. Cookies and Tracking Technologies",
      content: [
        "We use cookies and similar tracking technologies to collect information about your browsing activities. You can control cookies through your browser settings and other tools. However, disabling cookies may affect your ability to use certain features of our website."
      ]
    },
    {
      title: "7. Third-Party Links",
      content: [
        "Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit."
      ]
    },
    {
      title: "8. Children's Privacy",
      content: [
        "Our services are not directed to children under the age of 13. We do not knowingly collect personal information from children under 13. If you become aware that a child has provided us with personal information, please contact us."
      ]
    },
    {
      title: "9. International Data Transfers",
      content: [
        "Your information may be transferred to and processed in countries other than your country of residence. We ensure appropriate safeguards are in place to protect your information in accordance with this Privacy Policy."
      ]
    },
    {
      title: "10. Changes to This Privacy Policy",
      content: [
        "We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the 'Last Updated' date. Your continued use of our services after any changes constitutes acceptance of the updated policy."
      ]
    }
  ];

  return (
    <div className="legal-page">
      <section className="legal-hero">
        <div className="legal-hero-container">
          <motion.h1
            className="legal-hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Privacy Policy
          </motion.h1>
          <motion.p
            className="legal-hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Last Updated: January 2025
          </motion.p>
        </div>
      </section>

      <section className="legal-content">
        <div className="legal-container">
          <motion.div
            className="legal-intro"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <p>
              At OMYTECH, we are committed to protecting your privacy and ensuring the security of your personal information. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our 
              website or use our services.
            </p>
          </motion.div>

          <div className="legal-sections">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                className="legal-section"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              >
                <h2 className="legal-section-title">{section.title}</h2>
                <div className="legal-section-content">
                  {section.content.map((paragraph, pIndex) => (
                    <p key={pIndex}>{paragraph}</p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="legal-contact"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <h2 className="legal-contact-title">Contact Us</h2>
            <p>
              If you have any questions or concerns about this Privacy Policy or our data practices, 
              please contact us at:
            </p>
            <p className="legal-contact-info">
              <strong>Email:</strong> <a href="mailto:info@omytech.co.ke">info@omytech.co.ke</a><br />
              <strong>Phone:</strong> <a href="tel:+254715367859">+254 715 367 859</a><br />
              <strong>Address:</strong> Nairobi, Kenya
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
