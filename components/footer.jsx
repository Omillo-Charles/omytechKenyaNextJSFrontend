"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import {
  FaXTwitter,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa6";

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  const quickLinks = [
    { name: "Services", href: "/services" },
    { name: "Products", href: "/products" },
    { name: "About Us", href: "/about" },
    { name: "Wings", href: "/wings" },
  ];

  const services = [
    { name: "Software Engineering", href: "/services/software-engineering" },
    { name: "Cloud Infrastructure", href: "/services/cloud-infrastructure" },
    { name: "UI/UX Design", href: "/services/ui-ux-design" },
    { name: "AI & Data Science", href: "/services/ai-data-science" },
  ];

  const socialLinks = [
    { icon: FaFacebook, href: "https://facebook.com/omytech_kenya", label: "Facebook" },
    { icon: FaXTwitter, href: "https://x.com/omytech_kenya", label: "X" },
    { icon: FaInstagram, href: "https://instagram.com/omytech_kenya", label: "Instagram" },
    { icon: FaLinkedin, href: "https://linkedin.com/company/omytech-kenya", label: "LinkedIn" },
    { icon: FaGithub, href: "https://github.com/omytech-kenya", label: "GitHub" },
  ];

  return (
    <footer className="relative bg-[#0A0A0A] border-t border-white/5">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] opacity-50" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-3 mb-6 group">
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center transition-all group-hover:bg-white/10">
                <Image
                  src="/omytechlogo.png"
                  alt="OMYTECH Logo"
                  width={24}
                  height={24}
                  priority
                />
              </div>
              <div>
                <div className="text-white font-bold text-lg leading-none">OMYTECH</div>
                <div className="text-blue-400 text-[10px] font-bold uppercase tracking-wider">Kenya</div>
              </div>
            </Link>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed" style={{ lineHeight: '1.6', overflow: 'visible' }}>
              Innovating the future, empowering Africa with cutting-edge technology solutions.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                    aria-label={social.label}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IconComponent size={16} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-4 h-4 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link
                    href={service.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-4 h-4 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Get in Touch</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:info@omytech.co.ke"
                  className="text-gray-400 hover:text-white transition-colors text-sm flex items-start gap-3 group"
                >
                  <Mail className="w-4 h-4 mt-0.5 flex-shrink-0 text-blue-400" />
                  <span style={{ lineHeight: '1.4', overflow: 'visible' }}>info@omytech.co.ke</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+254715367859"
                  className="text-gray-400 hover:text-white transition-colors text-sm flex items-start gap-3 group"
                >
                  <Phone className="w-4 h-4 mt-0.5 flex-shrink-0 text-blue-400" />
                  <span style={{ lineHeight: '1.4', overflow: 'visible' }}>+254 715 367 859</span>
                </a>
              </li>
              <li>
                <a
                  href="https://maps.app.goo.gl/9HdWNNGa33NXyEkb9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors text-sm flex items-start gap-3 group"
                >
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-blue-400" />
                  <span style={{ lineHeight: '1.4', overflow: 'visible' }}>Nairobi, Kenya</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {currentYear} OMYTECH. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link
                href="/privacy"
                className="text-gray-500 hover:text-white transition-colors text-sm"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-gray-500 hover:text-white transition-colors text-sm"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
