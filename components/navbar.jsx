"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { BiCoffee } from "react-icons/bi";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link href="/" className="nav-logo">
          <div className="logo-box">
            <Image
              src="/newOmytechLogo.png"
              alt="OMYTECH Logo"
              width={50}
              height={50}
              priority
            />
          </div>
          <div className="logo-text">
            <span className="brand-name">OMYTECH</span>
            <span className="brand-location">Kenya</span>
          </div>
        </Link>

        {/* Desktop nav-links for larger screens */}
        <ul className="nav-links desktop-nav">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/#about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          <li>
            <Link href="/#services">Services</Link>
          </li>
          <li>
            <Link href="/#testimonials">Testimonials</Link>
          </li>
          <li>
            <Link href="/#wings">Wings</Link>
          </li>
        </ul>

        <div className={`nav-auth ${isOpen ? "active" : ""}`}>
          <a
            href="https://buymeacoffee.com/omytech_kenya"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-cta"
          >
            <BiCoffee className="coffee-icon" /> Buy Us Coffee
          </a>
        </div>

        <button
          className="hamburger"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className={isOpen ? "open" : ""}></span>
          <span className={isOpen ? "open" : ""}></span>
          <span className={isOpen ? "open" : ""}></span>
        </button>
      </div>

      {/* Mobile nav-links positioned below header */}
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            className="nav-links mobile-nav"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              duration: 0.3,
              ease: "easeInOut"
            }}
          >
            <motion.li
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
            </motion.li>
            <motion.li
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.15 }}
            >
              <Link href="/#about" onClick={() => setIsOpen(false)}>About</Link>
            </motion.li>
            <motion.li
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Link href="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
            </motion.li>
            <motion.li
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.25 }}
            >
              <Link href="/#services" onClick={() => setIsOpen(false)}>Services</Link>
            </motion.li>
            <motion.li
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <Link href="/#testimonials" onClick={() => setIsOpen(false)}>Testimonials</Link>
            </motion.li>
            <motion.li
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.35 }}
            >
              <Link href="/#wings" onClick={() => setIsOpen(false)}>Wings</Link>
            </motion.li>
            <motion.li
              className="mobile-auth-item"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <a
                href="https://buymeacoffee.com/omytech_kenya"
                target="_blank"
                rel="noopener noreferrer"
                className="mobile-auth-link coffee"
                onClick={() => setIsOpen(false)}
              >
                <BiCoffee className="coffee-icon" /> Buy Us Coffee
              </a>
            </motion.li>
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
}
