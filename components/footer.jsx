"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";
import {
  FaXTwitter,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa6";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: "About Us", href: "/#about" },
      { name: "Our Wings", href: "/#wings" },
      { name: "Careers", href: "/careers" },
      { name: "Contact", href: "/contact" },
    ],
    services: [
      { name: "Web Development", href: "/services/web" },
      { name: "Mobile Apps", href: "/services/mobile" },
      { name: "UI/UX Design", href: "/services/design" },
      { name: "Digital Marketing", href: "/services/marketing" },
    ],
    resources: [
      { name: "Case Studies", href: "/case-studies" },
      { name: "Documentation", href: "/docs" },
      { name: "Support", href: "/support" },
    ],
  };

  const socialLinks = [
    {
      icon: FaFacebook,
      href: "https://facebook.com/omytech_kenya",
      label: "Facebook",
    },
    {
      icon: FaXTwitter,
      href: "https://x.com/omytech_kenya",
      label: "X (Twitter)",
    },
    {
      icon: FaInstagram,
      href: "https://instagram.com/omytech_kenya",
      label: "Instagram",
    },
    {
      icon: FaLinkedin,
      href: "https://linkedin.com/company/omytech-kenya",
      label: "LinkedIn",
    },
    {
      icon: FaGithub,
      href: "https://github.com/omytech-kenya",
      label: "GitHub",
    },
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <Link href="/" className="footer-logo">
              <div className="footer-logo-box">
                <Image
                  src="/newOmytechLogo.png"
                  alt="OMYTECH Logo"
                  width={40}
                  height={40}
                  priority
                />
              </div>
              <div className="footer-logo-text">
                <span className="footer-brand-name">OMYTECH</span>
                <span className="footer-brand-location">Kenya</span>
              </div>
            </Link>
            <p className="footer-description">
              Innovating the Future, Empowering Africa through technology,
              creativity, and strategic partnerships.
            </p>
            <div className="footer-social">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="footer-social-link"
                    aria-label={social.label}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IconComponent size={20} />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="footer-links-grid">
            <div className="footer-links-column">
              <h4 className="footer-links-title">Company</h4>
              <ul className="footer-links-list">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <Link href={link.href} className="footer-link">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-links-column">
              <h4 className="footer-links-title">Services</h4>
              <ul className="footer-links-list">
                {footerLinks.services.map((link, index) => (
                  <li key={index}>
                    <span className="footer-text">
                      {link.name}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-links-column">
              <h4 className="footer-links-title">Resources</h4>
              <ul className="footer-links-list">
                {footerLinks.resources.map((link, index) => (
                  <li key={index}>
                    <Link href={link.href} className="footer-link">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-links-column">
              <h4 className="footer-links-title">Contact</h4>
              <ul className="footer-contact-list">
                <li className="footer-contact-item">
                  <Mail size={18} />
                  <a href="mailto:info@omytech.co.ke" className="footer-link">
                    info@omytech.co.ke
                  </a>
                </li>
                <li className="footer-contact-item">
                  <Phone size={18} />
                  <a href="tel:+254715367859" className="footer-link">
                    +254 715 367 859
                  </a>
                </li>
                <li className="footer-contact-item">
                  <MapPin size={18} />
                  <a 
                    href="https://maps.app.goo.gl/9HdWNNGa33NXyEkb9" 
                    className="footer-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Nairobi, Kenya
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} OMYTECH. All rights reserved.
          </p>
          <div className="footer-legal">
            <Link href="/privacy" className="footer-legal-link">
              Privacy Policy
            </Link>
            <Link href="/terms" className="footer-legal-link">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
