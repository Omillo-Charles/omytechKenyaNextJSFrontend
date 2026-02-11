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

  const footerLinks = [
    { name: "About", href: "/about" },
    { name: "Wings", href: "/wings" },
    { name: "Contact", href: "/contact" },
  ];

  const socialLinks = [
    { icon: FaFacebook, href: "https://facebook.com/omytech_kenya", label: "Facebook" },
    { icon: FaXTwitter, href: "https://x.com/omytech_kenya", label: "X" },
    { icon: FaInstagram, href: "https://instagram.com/omytech_kenya", label: "Instagram" },
    { icon: FaLinkedin, href: "https://linkedin.com/company/omytech-kenya", label: "LinkedIn" },
    { icon: FaGithub, href: "https://github.com/omytech-kenya", label: "GitHub" },
  ];

  return (
    <footer className="footer-simple">
      <div className="footer-container">
        <div className="footer-main">
          <Link href="/" className="footer-brand-simple">
            <div className="footer-logo-box">
              <Image
                src="/omytechlogo.png"
                alt="OMYTECH Logo"
                width={32}
                height={32}
                priority
              />
            </div>
            <span className="footer-brand-name">OMYTECH <span className="text-primary">Kenya</span></span>
          </Link>

          <nav className="footer-nav">
            {footerLinks.map((link, index) => (
              <Link key={index} href={link.href} className="footer-nav-link">
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="footer-social-simple">
            {socialLinks.map((social, index) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  className="footer-social-icon"
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconComponent size={18} />
                </a>
              );
            })}
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom-simple">
          <p className="footer-copyright">
            © {currentYear} OMYTECH. All rights reserved.
          </p>
          <div className="footer-legal-simple">
            <Link href="/privacy" className="footer-legal-link">Privacy</Link>
            <Link href="/terms" className="footer-legal-link">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
