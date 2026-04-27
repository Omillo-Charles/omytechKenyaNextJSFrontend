"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { 
  HomeWork as HomeIcon,
  Storefront as StoreIcon,
  ArrowForward as ArrowIcon,
  CheckCircle as CheckIcon,
  GitHub as GitHubIcon
} from "@mui/icons-material";

const products = [
  {
    id: "keja",
    name: ".keja",
    tagline: "Rental Management System",
    description: "A comprehensive solution for property owners and managers to automate rent collection, tenant management, and maintenance requests. Built for the African market.",
    icon: <HomeIcon />,
    color: "#10b981",
    githubUrl: "https://github.com/Omillo-Charles/.keja",
    status: "Active Development",
    features: [
      "Automated Rent Invoicing",
      "Tenant Portal & Communication",
      "Maintenance Tracking",
      "Financial Reporting",
      "Property Analytics",
      "Mobile-First Design"
    ],
    highlights: [
      { label: "Properties", value: "500+" },
      { label: "Active Users", value: "2K+" },
      { label: "Uptime", value: "99.9%" }
    ]
  },
  {
    id: "soko",
    name: ".soko",
    tagline: "Multivendor E-commerce Platform",
    description: "A scalable marketplace engine that empowers multiple vendors to sell their products while providing a seamless shopping experience for customers across Africa.",
    icon: <StoreIcon />,
    color: "#3b82f6",
    githubUrl: "https://github.com/Omillo-Charles/.soko",
    status: "Beta Release",
    features: [
      "Vendor Dashboard & Management",
      "Secure Payment Integration",
      "Inventory & Order Tracking",
      "Customer Reviews & Ratings",
      "Advanced Search & Filters",
      "Multi-Currency Support"
    ],
    highlights: [
      { label: "Vendors", value: "150+" },
      { label: "Products", value: "5K+" },
      { label: "Transactions", value: "10K+" }
    ]
  }
];

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[120px]" />

        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs md:text-sm font-semibold mb-6"
          >
            Our Products
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
          >
            <span className="block bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent pb-2">
              Built for Africa,
            </span>
            <span className="block bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent pb-2">
              Powered by Innovation
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-sm md:text-base lg:text-lg text-gray-400 max-w-3xl mx-auto font-light"
            style={{ lineHeight: '2', overflow: 'visible' }}
          >
            Enterprise-grade solutions designed to solve real-world challenges in property management and e-commerce
          </motion.p>
        </div>
      </section>

      {/* Products Section */}
      <section className="relative px-6 pb-20">
        <div className="max-w-7xl mx-auto space-y-12">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                {/* Left Column - Info */}
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-400 text-xs font-semibold mb-4">
                    {product.status}
                  </div>

                  <div 
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                    style={{ 
                      backgroundColor: `${product.color}15`,
                      color: product.color
                    }}
                  >
                    {React.cloneElement(product.icon, { className: "w-8 h-8" })}
                  </div>

                  <h2 
                    className="text-3xl md:text-5xl font-bold mb-3"
                    style={{ color: product.color }}
                  >
                    {product.name}
                  </h2>

                  <h3 className="text-lg md:text-xl font-semibold text-white mb-4" style={{ lineHeight: '1.4', overflow: 'visible' }}>
                    {product.tagline}
                  </h3>

                  <p className="text-gray-400 text-sm md:text-base mb-8 leading-relaxed" style={{ lineHeight: '1.8', overflow: 'visible' }}>
                    {product.description}
                  </p>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    {product.highlights.map((stat, i) => (
                      <div key={i} className="text-center">
                        <div 
                          className="text-xl md:text-2xl font-bold mb-1"
                          style={{ color: product.color }}
                        >
                          {stat.value}
                        </div>
                        <div className="text-xs text-gray-500">{stat.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-wrap gap-4">
                    <a
                      href={product.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 md:px-6 md:py-3 bg-white text-black text-sm md:text-base font-semibold rounded-full hover:scale-105 transition-all duration-300"
                    >
                      <GitHubIcon className="w-5 h-5" />
                      View on GitHub
                    </a>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 px-5 py-2.5 md:px-6 md:py-3 border border-white/20 text-white text-sm md:text-base font-semibold rounded-full hover:bg-white/10 transition-all duration-300"
                    >
                      Request Demo
                      <ArrowIcon className="w-5 h-5" />
                    </Link>
                  </div>
                </div>

                {/* Right Column - Features */}
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
                    <h4 className="text-lg md:text-xl font-bold text-white mb-6">Key Features</h4>
                    <div className="space-y-4">
                      {product.features.map((feature, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <CheckIcon 
                            className="w-5 h-5 flex-shrink-0 mt-0.5" 
                            style={{ color: product.color }}
                          />
                          <span className="text-gray-300 text-sm md:text-base" style={{ lineHeight: '1.6', overflow: 'visible' }}>
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative px-6 pb-20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-white/10 rounded-3xl p-12 text-center backdrop-blur-sm overflow-hidden"
          >
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px]" />
            
            <div className="relative z-10">
              <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
                Need a Custom Solution?
              </h2>
              <p className="text-gray-400 mb-8 text-sm md:text-base lg:text-lg" style={{ lineHeight: '1.8', overflow: 'visible' }}>
                We can build tailored products specifically for your business needs
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-semibold rounded-full hover:scale-105 transition-all duration-300"
              >
                Let's Talk
                <ArrowIcon className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
