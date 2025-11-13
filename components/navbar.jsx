"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { BiCoffee } from "react-icons/bi";

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
            <a 
              href="https://buymeacoffee.com/omytech_kenya" 
              target="_blank" 
              rel="noopener noreferrer"
              className="mobile-auth-link coffee"
              onClick={() => setIsOpen(false)}
            >
              <BiCoffee className="coffee-icon" /> Buy Us Coffee
            </a>
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
    </nav>
  );
}
