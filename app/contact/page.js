"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Mail as MailIcon, 
  Phone as PhoneIcon, 
  Place as MapPinIcon,
  Send as SendIcon,
  CheckCircle as CheckIcon
} from "@mui/icons-material";
import {
  FaXTwitter,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa6";

const contactMethods = [
  { 
    icon: <MailIcon />, 
    label: "Email", 
    value: "info@omytech.co.ke", 
    link: "mailto:info@omytech.co.ke",
    color: "#3b82f6"
  },
  { 
    icon: <PhoneIcon />, 
    label: "Phone", 
    value: "+254 715 367 859", 
    link: "tel:+254715367859",
    color: "#10b981"
  },
  { 
    icon: <MapPinIcon />, 
    label: "Location", 
    value: "Nairobi, Kenya", 
    link: "https://maps.app.goo.gl/9HdWNNGa33NXyEkb9",
    color: "#f59e0b"
  },
];

const socialLinks = [
  { icon: <FaFacebook size={20} />, label: "Facebook", link: "https://facebook.com/omytech_kenya" },
  { icon: <FaXTwitter size={20} />, label: "X", link: "https://x.com/omytech_kenya" },
  { icon: <FaInstagram size={20} />, label: "Instagram", link: "https://instagram.com/omytech_kenya" },
  { icon: <FaLinkedin size={20} />, label: "LinkedIn", link: "https://linkedin.com/company/omytech-kenya" },
  { icon: <FaGithub size={20} />, label: "GitHub", link: "https://github.com/omytech-kenya" },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const whatsappMessage = `Hello OMYTECH Kenya,\n\nName: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject}\n\nMessage: ${formData.message}`;
    const whatsappUrl = `https://wa.me/254715367859?text=${encodeURIComponent(whatsappMessage)}`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px]" />

        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] md:text-sm font-semibold mb-6"
          >
            Get in Touch
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
          >
            <span className="block bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent pb-2">
              Let's Build Something
            </span>
            <span className="block bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent pb-2">
              Amazing Together
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xs md:text-base lg:text-lg text-gray-400 max-w-3xl mx-auto font-light"
            style={{ lineHeight: '2', overflow: 'visible' }}
          >
            Have a project in mind? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </motion.p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Info Cards */}
            <div className="lg:col-span-1 space-y-6">
              {contactMethods.map((method, index) => (
                <motion.a
                  key={index}
                  href={method.link}
                  target={method.label === "Location" ? "_blank" : undefined}
                  rel={method.label === "Location" ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="block bg-white/[0.02] border border-white/10 rounded-3xl p-6 backdrop-blur-sm hover:bg-white/[0.05] hover:border-white/20 transition-all duration-300 group"
                >
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
                    style={{ 
                      backgroundColor: `${method.color}15`,
                      color: method.color
                    }}
                  >
                    {React.cloneElement(method.icon, { className: "w-6 h-6" })}
                  </div>
                  <h3 className="text-xs md:text-base text-white font-semibold mb-2">{method.label}</h3>
                  <p className="text-gray-400 text-[10px] md:text-sm" style={{ lineHeight: '1.6', overflow: 'visible' }}>
                    {method.value}
                  </p>
                </motion.a>
              ))}

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-white/[0.02] border border-white/10 rounded-3xl p-6 backdrop-blur-sm"
              >
                <h3 className="text-xs md:text-base text-white font-semibold mb-4">Follow Us</h3>
                <div className="flex gap-3">
                  {socialLinks.map((social, i) => (
                    <a
                      key={i}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                      aria-label={social.label}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-2 bg-white/[0.02] border border-white/10 rounded-3xl p-8 backdrop-blur-sm"
            >
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center h-full py-12">
                  <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mb-4">
                    <CheckIcon className="w-8 h-8 text-green-500" />
                  </div>
                  <h3 className="text-base md:text-xl font-bold text-white mb-2">Message Sent!</h3>
                  <p className="text-gray-400 text-xs md:text-base text-center" style={{ lineHeight: '1.6', overflow: 'visible' }}>
                    Thank you for reaching out. We'll get back to you soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-[10px] md:text-sm font-medium text-gray-300 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white text-xs md:text-base placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:bg-white/10 transition-all"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-[10px] md:text-sm font-medium text-gray-300 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white text-xs md:text-base placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:bg-white/10 transition-all"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-[10px] md:text-sm font-medium text-gray-300 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white text-xs md:text-base placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:bg-white/10 transition-all"
                      placeholder="How can we help?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-[10px] md:text-sm font-medium text-gray-300 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white text-xs md:text-base placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:bg-white/10 transition-all resize-none"
                      placeholder="Tell us about your project..."
                      style={{ lineHeight: '1.6' }}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-6 py-3 md:px-8 md:py-4 bg-white text-black text-xs md:text-base font-semibold rounded-full hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-black/20 border-t-black rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <SendIcon className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section (Optional) */}
      <section className="relative px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/[0.02] border border-white/10 rounded-3xl overflow-hidden backdrop-blur-sm"
          >
            <div className="aspect-video bg-gradient-to-br from-blue-500/10 to-cyan-500/10 flex items-center justify-center">
              <div className="text-center">
                <MapPinIcon className="w-16 h-16 text-blue-400 mx-auto mb-4" />
                <h3 className="text-lg md:text-2xl font-bold text-white mb-2">Visit Us</h3>
                <p className="text-gray-400 text-xs md:text-base mb-4" style={{ lineHeight: '1.6', overflow: 'visible' }}>
                  Nairobi, Kenya
                </p>
                <a
                  href="https://maps.app.goo.gl/9HdWNNGa33NXyEkb9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-5 py-2.5 md:px-6 md:py-3 bg-white text-black text-xs md:text-base font-semibold rounded-full hover:scale-105 transition-all duration-300"
                >
                  Open in Maps
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
