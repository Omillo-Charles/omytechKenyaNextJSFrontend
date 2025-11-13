"use client";

import { motion } from "framer-motion";

export default function TermsPage() {
  const sections = [
    {
      title: "1. Acceptance of Terms",
      content: [
        "By accessing and using OMYTECH's website and services, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.",
        "We reserve the right to modify these terms at any time. Your continued use of our services after changes are posted constitutes acceptance of the modified terms."
      ]
    },
    {
      title: "2. Description of Services",
      content: [
        "OMYTECH provides digital services including but not limited to:",
        "• Web development and design",
        "• Mobile application development",
        "• UI/UX design services",
        "• E-commerce solutions",
        "• Digital marketing services",
        "• Consulting and automation services",
        "We reserve the right to modify, suspend, or discontinue any aspect of our services at any time without prior notice."
      ]
    },
    {
      title: "3. User Accounts",
      content: [
        "To access certain features of our services, you may be required to create an account. You agree to:",
        "• Provide accurate, current, and complete information",
        "• Maintain the security of your account credentials",
        "• Notify us immediately of any unauthorized access",
        "• Accept responsibility for all activities under your account",
        "We reserve the right to suspend or terminate accounts that violate these terms."
      ]
    },
    {
      title: "4. Intellectual Property Rights",
      content: [
        "All content, features, and functionality on our website and services are owned by OMYTECH and are protected by international copyright, trademark, and other intellectual property laws.",
        "You may not reproduce, distribute, modify, create derivative works, publicly display, or exploit any of our content without our express written permission.",
        "Client work and deliverables remain the property of OMYTECH until full payment is received, after which ownership transfers to the client as specified in the project agreement."
      ]
    },
    {
      title: "5. User Conduct",
      content: [
        "You agree not to:",
        "• Use our services for any illegal or unauthorized purpose",
        "• Violate any laws in your jurisdiction",
        "• Infringe upon the rights of others",
        "• Transmit any harmful code, viruses, or malicious software",
        "• Attempt to gain unauthorized access to our systems",
        "• Interfere with or disrupt our services or servers",
        "• Engage in any activity that could harm OMYTECH or its users"
      ]
    },
    {
      title: "6. Payment Terms",
      content: [
        "For paid services:",
        "• Payment terms will be specified in individual project agreements",
        "• All fees are non-refundable unless otherwise stated",
        "• Late payments may result in service suspension",
        "• We reserve the right to change our pricing with notice",
        "• You are responsible for all applicable taxes"
      ]
    },
    {
      title: "7. Project Deliverables and Timelines",
      content: [
        "Project timelines and deliverables will be outlined in individual project agreements. While we strive to meet all deadlines, timelines are estimates and may be subject to change based on project complexity and client responsiveness.",
        "Client delays in providing necessary materials or feedback may result in timeline adjustments.",
        "Final deliverables will be provided upon completion of payment obligations."
      ]
    },
    {
      title: "8. Warranties and Disclaimers",
      content: [
        "Our services are provided 'as is' without warranties of any kind, either express or implied. We do not guarantee that:",
        "• Our services will be uninterrupted or error-free",
        "• Defects will be corrected",
        "• Our services are free of viruses or harmful components",
        "We disclaim all warranties, including merchantability, fitness for a particular purpose, and non-infringement."
      ]
    },
    {
      title: "9. Limitation of Liability",
      content: [
        "To the maximum extent permitted by law, OMYTECH shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or business opportunities.",
        "Our total liability for any claims arising from our services shall not exceed the amount paid by you for the specific service giving rise to the claim."
      ]
    },
    {
      title: "10. Indemnification",
      content: [
        "You agree to indemnify and hold harmless OMYTECH, its officers, directors, employees, and agents from any claims, damages, losses, liabilities, and expenses arising from:",
        "• Your use of our services",
        "• Your violation of these terms",
        "• Your violation of any rights of another party",
        "• Any content you provide to us"
      ]
    },
    {
      title: "11. Confidentiality",
      content: [
        "Both parties agree to maintain the confidentiality of any proprietary or confidential information shared during the course of our business relationship.",
        "This obligation survives the termination of our services and continues for a period of three (3) years."
      ]
    },
    {
      title: "12. Termination",
      content: [
        "Either party may terminate services with written notice as specified in the project agreement.",
        "We reserve the right to terminate or suspend access to our services immediately, without notice, for conduct that we believe violates these terms or is harmful to other users, us, or third parties.",
        "Upon termination, your right to use our services will immediately cease."
      ]
    },
    {
      title: "13. Governing Law",
      content: [
        "These terms shall be governed by and construed in accordance with the laws of Kenya, without regard to its conflict of law provisions.",
        "Any disputes arising from these terms or our services shall be subject to the exclusive jurisdiction of the courts of Kenya."
      ]
    },
    {
      title: "14. Dispute Resolution",
      content: [
        "In the event of any dispute, both parties agree to first attempt to resolve the matter through good faith negotiations.",
        "If negotiations fail, disputes may be resolved through mediation or arbitration before resorting to litigation."
      ]
    },
    {
      title: "15. Severability",
      content: [
        "If any provision of these terms is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary, and the remaining provisions shall remain in full force and effect."
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
            Terms of Service
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
              Welcome to OMYTECH. These Terms of Service govern your use of our website and services. 
              Please read these terms carefully before using our services. By accessing or using our services, 
              you agree to be bound by these terms and our Privacy Policy.
            </p>
          </motion.div>

          <div className="legal-sections">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                className="legal-section"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.05 }}
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
              If you have any questions about these Terms of Service, please contact us at:
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
