"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

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

        <ul className={`nav-links ${isOpen ? "active" : ""}`}>
          <li>
            <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
          </li>
          <li>
            <Link href="/#about" onClick={() => setIsOpen(false)}>About</Link>
          </li>
          <li>
            <Link href="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
          </li>
          <li>
            <Link href="/#services" onClick={() => setIsOpen(false)}>Services</Link>
          </li>
          <li>
            <Link href="/#testimonials" onClick={() => setIsOpen(false)}>Testimonials</Link>
          </li>
          <li>
            <Link href="/#wings" onClick={() => setIsOpen(false)}>Wings</Link>
          </li>
          <li>
            <Link href="/portfolio" onClick={() => setIsOpen(false)}>Portfolio</Link>
          </li>
          <li className="mobile-auth-item">
            <Link href="/register" onClick={() => setIsOpen(false)} className="mobile-auth-link register">Register</Link>
          </li>
          <li className="mobile-auth-item">
            <Link href="/login" onClick={() => setIsOpen(false)} className="mobile-auth-link login">Login</Link>
          </li>
        </ul>

        <div className={`nav-auth ${isOpen ? "active" : ""}`}>
          <Link href="/register" className="nav-register" onClick={() => setIsOpen(false)}>
            Register
          </Link>
          <Link href="/login" className="nav-cta" onClick={() => setIsOpen(false)}>
            Login
          </Link>
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
    </nav>
  );
}
