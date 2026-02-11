"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  BiCoffee, BiMenu, BiX, BiChevronDown, BiSearch, 
  BiCodeAlt, BiMobileAlt, BiBarChartAlt2, BiRocket,
  BiLineChart, BiServer, BiLayer,
  BiEnvelope, BiPhone
} from "react-icons/bi";
import {
  FaXTwitter,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";
import { 
  AppBar, 
  Box, 
  Toolbar, 
  Typography, 
  Button, 
  Container, 
  IconButton, 
  Stack, 
  useTheme, 
  useMediaQuery,
  styled,
  Paper
} from "@mui/material";

const TopBar = styled(Box)(({ theme }) => ({
  backgroundColor: "rgba(15, 23, 42, 0.9)", // Dark navy with slight transparency
  backdropFilter: "blur(10px)",
  color: "white",
  padding: "8px 0",
  fontSize: "0.85rem",
  fontWeight: 500,
  borderBottom: "1px solid rgba(255, 255, 255, 0.05)",
  [theme.breakpoints.down("md")]: {
    display: "block" // Show on mobile as part of sticky header
  }
}));

const StickyContainer = styled(Box, {
  shouldForwardProp: (prop) => prop !== "scrolled"
})(({ theme, scrolled }) => ({
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  zIndex: 1100,
  transition: "transform 0.3s ease-in-out",
  backgroundColor: scrolled ? "rgba(15, 23, 42, 0.95)" : "transparent",
}));

const MainHeader = styled(AppBar, {
  shouldForwardProp: (prop) => prop !== "scrolled"
})(({ theme, scrolled }) => ({
  backgroundColor: "rgba(15, 23, 42, 0.8)", // Match the contact page terminal theme
  backdropFilter: "blur(20px)",
  color: "#ffffff",
  boxShadow: scrolled ? "0 10px 30px rgba(0,0,0,0.3)" : "none",
  transition: "all 0.3s ease-in-out",
  position: "relative",
  top: 0,
  zIndex: 1100,
  borderBottom: "1px solid rgba(255, 255, 255, 0.08)"
}));

const CategoryBar = styled(Box)(({ theme }) => ({
  backgroundColor: "rgba(15, 23, 42, 0.9)", 
  backdropFilter: "blur(10px)",
  borderBottom: "1px solid rgba(255, 255, 255, 0.05)",
  padding: "10px 0",
  [theme.breakpoints.down("md")]: {
    display: "none"
  }
}));

const CategoryLink = styled(Link)({
  fontSize: "0.75rem",
  fontWeight: 800,
  color: "rgba(255, 255, 255, 0.6)",
  textDecoration: "none",
  textTransform: "uppercase",
  letterSpacing: "0.5px",
  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  position: "relative",
  padding: "4px 0",
  "&::after": {
    content: '""',
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "0%",
    height: "2px",
    backgroundColor: "#0072ce",
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    borderRadius: "2px"
  },
  "&:hover": {
    color: "#ffffff",
    "&::after": {
      width: "100%"
    }
  }
});

const NavButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== "active"
})(({ theme, active }) => ({
  color: active ? "#0072ce" : "rgba(255, 255, 255, 0.8)",
  fontWeight: 800,
  textTransform: "none",
  fontSize: "0.95rem",
  padding: "10px 20px",
  borderRadius: "14px",
  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  "&:hover": {
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    color: "#ffffff",
    transform: "translateY(-1px)"
  },
  "&:active": {
    transform: "translateY(0)"
  }
}));

const DropdownPaper = styled(Paper)({
  position: "absolute",
  top: "100%",
  left: "50%",
  transform: "translateX(-50%)",
  marginTop: "12px",
  width: "500px",
  padding: "16px",
  borderRadius: "28px",
  boxShadow: "0 30px 90px rgba(15, 23, 42, 0.2)",
  border: "1px solid rgba(241, 245, 249, 0.8)",
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "4px",
  zIndex: 1200,
  maxHeight: "80vh",
  overflowY: "auto",
  "::-webkit-scrollbar": { width: "4px" },
  "::-webkit-scrollbar-track": { bgcolor: "transparent" },
  "::-webkit-scrollbar-thumb": { 
    bgcolor: "rgba(255,255,255,0.1)", 
    borderRadius: "10px",
    "&:hover": { bgcolor: "rgba(255,255,255,0.2)" }
  }
});

const MotionBox = motion.create(Box);
const MotionLink = motion.create(Link);
const MotionPaper = motion.create(DropdownPaper);

const SubItemBox = styled(Box)(({ theme }) => ({
  padding: "16px",
  borderRadius: "20px",
  display: "flex",
  gap: "16px",
  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  cursor: "pointer",
  "&:hover": {
    backgroundColor: "#f8fafc",
    transform: "translateY(-2px)",
    "& .icon-box": {
      backgroundColor: "#0072ce",
      color: "white",
      transform: "scale(1.1) rotate(5deg)"
    },
    "& .item-title": {
      color: "#0072ce"
    }
  }
}));

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileSubmenu, setMobileSubmenu] = useState(null);
  const [mounted, setMounted] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setMobileSubmenu(null);
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { 
      name: "Services", 
      href: "/services",
      subItems: [
        { name: "Software Engineering", href: "/services/software-engineering", icon: <BiCodeAlt />, desc: "Web, Mobile & Custom Solutions." },
        { name: "Cloud & Infrastructure", href: "/services/cloud-infrastructure", icon: <BiServer />, desc: "Scalable Infrastructure & Cloud." },
        { name: "UI/UX Design", href: "/services/ui-ux-design", icon: <BiLayer />, desc: "User-centric Digital Experiences." },
        { name: "Cybersecurity", href: "/services/cybersecurity", icon: <BiRocket />, desc: "Secure & Hardened Systems." },
        { name: "AI & Data Science", href: "/services/ai-data-science", icon: <BiBarChartAlt2 />, desc: "Intelligent AI & Data Solutions." },
        { name: "Digital Strategy", href: "/services/digital-strategy", icon: <BiLineChart />, desc: "Strategic Digital Growth." },
      ]
    },
    { 
      name: "Products", 
      href: "/products",
      subItems: [
        { name: ".keja", href: "/products", icon: <BiServer />, desc: "Rental Management System." },
        { name: ".soko", href: "/products", icon: <BiLayer />, desc: "Multivendor E-commerce Platform." },
      ]
    },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Buy Us Coffee", href: "https://buymeacoffee.com/omytech_kenya", isExternal: true, icon: <BiCoffee /> },
  ];

  if (!mounted) {
    return null;
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <StickyContainer scrolled={scrolled}>
        {/* 1st Navbar: Utility Top Bar */}
        <TopBar>
          <Container maxWidth="xl">
            <Stack direction="row" justifyContent="space-between" alignItems="center">
              <Stack direction="row" spacing={4} alignItems="center">
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <BiEnvelope size={16} className="text-primary" />
                  <Typography variant="caption" sx={{ fontWeight: 600 }}>info@omytech.co.ke</Typography>
                </Box>
                <Box sx={{ display: { xs: "none", sm: "flex" }, alignItems: "center", gap: 1 }}>
                  <BiPhone size={16} className="text-primary" />
                  <Typography variant="caption" sx={{ fontWeight: 600 }}>+254 715 367 859</Typography>
                </Box>
              </Stack>
              
              <Stack direction="row" spacing={2} alignItems="center">
                <Typography variant="caption" sx={{ fontWeight: 600, mr: 1, color: "rgba(255,255,255,0.5)", display: { xs: "none", sm: "block" } }}>Follow Us:</Typography>
                {[
                  { icon: <FaFacebook size={14} />, href: "https://facebook.com/omytech_kenya", label: "Facebook" },
                  { icon: <FaXTwitter size={14} />, href: "https://x.com/omytech_kenya", label: "X" },
                  { icon: <FaInstagram size={14} />, href: "https://instagram.com/omytech_kenya", label: "Instagram" },
                  { icon: <FaLinkedin size={14} />, href: "https://linkedin.com/company/omytech-kenya", label: "LinkedIn" },
                  { icon: <FaGithub size={14} />, href: "https://github.com/omytech-kenya", label: "GitHub" }
                ].map((social, i) => (
                  <IconButton 
                    key={i} 
                    size="small" 
                    component="a"
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    sx={{ 
                      color: "white", 
                      p: 0.5,
                      "&:hover": { color: "#0072ce", bgcolor: "rgba(255,255,255,0.1)" } 
                    }}
                  >
                    {social.icon}
                  </IconButton>
                ))}
              </Stack>
            </Stack>
          </Container>
        </TopBar>

        {/* 2nd Navbar: Main Header */}
        <MainHeader elevation={0} scrolled={scrolled}>
          <Container maxWidth="xl">
            <Toolbar disableGutters sx={{ height: scrolled ? 70 : 90, transition: "height 0.3s ease" }}>
              {/* Logo Section */}
              <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "12px" }}>
                <Box sx={{ 
                  bgcolor: "rgba(255, 255, 255, 0.05)", 
                  p: 1, 
                  borderRadius: "12px",
                  display: "flex",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)"
                }}>
                  <Image src="/omytechlogo.png" alt="OMYTECH" width={32} height={32} />
                </Box>
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: 900, color: "#ffffff", lineHeight: 1, letterSpacing: -0.5, fontFamily: "'Fira Code', monospace" }}>
                    OMYTECH
                  </Typography>
                  <Typography variant="caption" sx={{ fontWeight: 800, color: "#0072ce", letterSpacing: 2, display: "block", fontSize: "0.65rem", textTransform: "uppercase", fontFamily: "'Fira Code', monospace" }}>
                    Kenya
                  </Typography>
                </Box>
              </Link>

              {/* Desktop Navigation Links */}
              <Box sx={{ flexGrow: 1, display: { xs: "none", lg: "flex" }, justifyContent: "center", gap: 1 }} ref={dropdownRef}>
                {navLinks.map((link) => (
                  <Box key={link.name} sx={{ position: "relative" }}>
                    {link.subItems ? (
                      <NavButton
                        active={activeDropdown === link.name}
                        onMouseEnter={() => setActiveDropdown(link.name)}
                        endIcon={<BiChevronDown style={{ 
                          transition: "transform 0.3s",
                          color: activeDropdown === link.name ? "#0072ce" : "rgba(255, 255, 255, 0.6)",
                          transform: activeDropdown === link.name ? "rotate(180deg)" : "none"
                        }} />}
                      >
                        {link.name}
                      </NavButton>
                    ) : (
                      <NavButton component={Link} href={link.href}>{link.name}</NavButton>
                    )}

                    {/* Enhanced Dropdown */}
                    <AnimatePresence>
                      {activeDropdown === link.name && link.subItems && (
                        <MotionBox
                          initial={{ opacity: 0, y: 20, scale: 0.95, filter: "blur(10px)" }}
                          animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                          exit={{ opacity: 0, y: 15, scale: 0.95, filter: "blur(10px)" }}
                          transition={{ 
                            type: "spring",
                            damping: 25,
                            stiffness: 200,
                            mass: 0.8
                          }}
                          onMouseLeave={() => setActiveDropdown(null)}
                          style={{ 
                            position: "absolute", 
                            left: "50%", 
                            transform: "translateX(-50%)", 
                            top: "100%", 
                            paddingTop: "15px",
                            zIndex: 1200
                          }}
                        >
                          <MotionPaper elevation={0} sx={{ 
                            bgcolor: "rgba(15, 23, 42, 0.95)", 
                            backdropFilter: "blur(20px)",
                            border: "1px solid rgba(255, 255, 255, 0.1)",
                            boxShadow: "0 30px 90px rgba(0, 0, 0, 0.4)"
                          }}>
                            {link.subItems.map((sub, i) => (
                              <MotionLink 
                                key={sub.name} 
                                href={sub.href} 
                                style={{ textDecoration: "none" }}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.05 + 0.1 }}
                              >
                                <SubItemBox sx={{ 
                                  "&:hover": { 
                                    bgcolor: "rgba(255, 255, 255, 0.05)",
                                    "& .item-title": { color: "#0072ce" }
                                  }
                                }}>
                                  <Box className="icon-box" sx={{ 
                                    width: 48, 
                                    height: 48, 
                                    borderRadius: "14px", 
                                    bgcolor: "rgba(0, 114, 206, 0.1)",
                                    display: "flex", 
                                    alignItems: "center", 
                                    justifyContent: "center", 
                                    color: "#0072ce",
                                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
                                  }}>
                                    {sub.icon}
                                  </Box>
                                  <Box>
                                    <Typography 
                                      variant="subtitle2" 
                                      className="item-title"
                                      sx={{ 
                                        fontWeight: 800, 
                                        color: "#ffffff",
                                        transition: "color 0.3s ease"
                                      }}
                                    >
                                      {sub.name}
                                    </Typography>
                                    <Typography 
                                      variant="caption" 
                                      sx={{ 
                                        color: "rgba(255, 255, 255, 0.5)", 
                                        lineHeight: 1.3,
                                        display: "block",
                                        mt: 0.5,
                                        fontWeight: 500
                                      }}
                                    >
                                      {sub.desc}
                                    </Typography>
                                  </Box>
                                </SubItemBox>
                              </MotionLink>
                            ))}
                            
                            <MotionBox 
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.3 }}
                              sx={{ 
                                gridColumn: "span 2", 
                                mt: 1, 
                                p: 2, 
                                bgcolor: "rgba(255, 255, 255, 0.03)", 
                                borderRadius: "20px",
                                display: "flex", 
                                justifyContent: "center", 
                                alignItems: "center",
                                border: "1px solid rgba(255, 255, 255, 0.05)"
                              }}
                            >
                              <Stack direction="row" spacing={1} alignItems="center">
                                <Box sx={{ width: 8, height: 8, borderRadius: "50%", bgcolor: "#10b981" }} />
                                <Typography variant="caption" sx={{ fontWeight: 700, color: "rgba(255, 255, 255, 0.6)" }}>
                                  System Status: <Box component="span" sx={{ color: "#10b981" }}>Operational</Box>
                                </Typography>
                              </Stack>
                            </MotionBox>
                          </MotionPaper>
                        </MotionBox>
                      )}
                    </AnimatePresence>
                  </Box>
                ))}
              </Box>

              {/* Action Buttons */}
              <Stack direction="row" spacing={2} alignItems="center" sx={{ display: { xs: "none", lg: "flex" } }}>
                <IconButton sx={{ color: "#ffffff", "&:hover": { bgcolor: "rgba(255, 255, 255, 0.05)" } }}>
                  <BiSearch size={22} />
                </IconButton>
                <Button
                  variant="outlined"
                  component="a"
                  href="https://buymeacoffee.com/omytech_kenya"
                  target="_blank"
                  startIcon={<BiCoffee />}
                  sx={{ 
                    color: "#facc15", 
                    borderColor: "rgba(250, 204, 21, 0.3)",
                    fontWeight: 800,
                    borderRadius: "12px",
                    px: 2,
                    py: 1,
                    textTransform: "none",
                    "&:hover": { 
                      borderColor: "#facc15",
                      bgcolor: "rgba(250, 204, 21, 0.05)"
                    }
                  }}
                >
                  Buy Us Coffee
                </Button>
                <Button
                  variant="contained"
                  disableElevation
                  component={Link}
                  href="/contact"
                  sx={{ 
                    bgcolor: "#0072ce", 
                    color: "white", 
                    fontWeight: 800,
                    borderRadius: "12px",
                    px: 3,
                    py: 1,
                    textTransform: "none",
                    "&:hover": { bgcolor: "#005ea8" }
                  }}
                >
                  Contact Us
                </Button>
              </Stack>

              {/* Mobile Toggle */}
              <IconButton 
                onClick={toggleMenu}
                sx={{ display: { lg: "none" }, ml: "auto", color: "#ffffff", bgcolor: "rgba(255, 255, 255, 0.05)", borderRadius: "12px" }}
              >
                {isOpen ? <BiX size={24} /> : <BiMenu size={24} />}
              </IconButton>
            </Toolbar>
          </Container>
        </MainHeader>
      </StickyContainer>

      {/* Spacer to prevent content jump since header is fixed */}
      <Box sx={{ height: { xs: "140px", md: scrolled ? "110px" : "140px" }, transition: "height 0.3s ease", mb: "-8px" }} />

      {/* 3rd Navbar: Category Bar */}
      <CategoryBar>
        <Container maxWidth="xl">
          <Stack direction="row" spacing={4} alignItems="center">
            <Typography variant="caption" sx={{ fontWeight: 800, color: "rgba(255,255,255,0.5)", textTransform: "uppercase", letterSpacing: 1 }}>
              Trending:
            </Typography>
            {[
              { name: "Cloud Solutions", href: "/services" },
              { name: "AI Integration", href: "/services" },
              { name: "E-Commerce", href: "/services" },
              { name: "Cyber Security", href: "/services" },
              { name: "UI/UX Design", href: "/services" }
            ].map((cat) => (
              <CategoryLink key={cat.name} href={cat.href}>
                {cat.name}
              </CategoryLink>
            ))}
            <Box sx={{ ml: "auto" }}>
              <Link href="/blog" style={{ textDecoration: "none" }}>
                <Typography variant="caption" sx={{ fontWeight: 800, color: "#0072ce", display: "flex", alignItems: "center", gap: 0.5 }}>
                  Latest Updates <BiRocket />
                </Typography>
              </Link>
            </Box>
          </Stack>
        </Container>
      </CategoryBar>

      {/* Mobile Navigation Modal */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleMenu}
              style={{
                position: "fixed",
                inset: 0,
                backgroundColor: "rgba(15, 23, 42, 0.8)",
                backdropFilter: "blur(10px)",
                zIndex: 1999,
              }}
            />
            
            {/* Mobile Menu Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              style={{
                position: "fixed",
                top: "80px",
                left: "20px",
                right: "20px",
                margin: "0 auto",
                maxWidth: "400px",
                backgroundColor: "rgba(15, 23, 42, 0.98)",
                backdropFilter: "blur(20px)",
                zIndex: 2000,
                padding: "20px",
                boxShadow: "0 20px 60px rgba(0,0,0,0.6)",
                display: "flex",
                flexDirection: "column",
                borderRadius: "24px",
                border: "1px solid rgba(255, 255, 255, 0.12)",
                maxHeight: "calc(100vh - 120px)"
              }}
            >
              <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 3 }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <Box sx={{ bgcolor: "rgba(255,255,255,0.05)", p: 0.8, borderRadius: "8px", border: "1px solid rgba(255,255,255,0.1)" }}>
                    <Image src="/omytechlogo.png" alt="OMYTECH" width={24} height={24} />
                  </Box>
                  <Typography variant="subtitle1" sx={{ fontWeight: 900, color: "white", fontFamily: "'Fira Code', monospace" }}>OMYTECH</Typography>
                </Box>
                <IconButton onClick={toggleMenu} sx={{ color: "white", bgcolor: "rgba(255,255,255,0.05)", p: 0.5 }}>
                  <BiX size={20} />
                </IconButton>
              </Box>

              <Box sx={{ 
                flexGrow: 1, 
                overflowY: "auto", 
                pr: 0.5,
                "::-webkit-scrollbar": { width: "3px" },
                "::-webkit-scrollbar-track": { bgcolor: "transparent" },
                "::-webkit-scrollbar-thumb": { 
                  bgcolor: "rgba(255,255,255,0.1)", 
                  borderRadius: "10px"
                }
              }}>
                <Stack spacing={0.5}>
                  {navLinks.map((link) => (
                    <Box key={link.name}>
                      <Box 
                        onClick={() => link.subItems ? setMobileSubmenu(mobileSubmenu === link.name ? null : link.name) : null}
                        sx={{ 
                          display: "flex", 
                          alignItems: "center", 
                          justifyContent: "space-between",
                          p: 1.5,
                          borderRadius: "12px",
                          bgcolor: mobileSubmenu === link.name ? "rgba(255,255,255,0.05)" : "transparent",
                          cursor: "pointer",
                          transition: "all 0.2s",
                          "&:hover": { bgcolor: "rgba(255,255,255,0.05)" }
                        }}
                      >
                        {link.subItems ? (
                          <Typography sx={{ fontWeight: 800, color: "white", fontSize: "0.9rem" }}>{link.name}</Typography>
                        ) : link.isExternal ? (
                          <Box 
                            component="a" 
                            href={link.href} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            sx={{ 
                              textDecoration: "none", 
                              width: "100%", 
                              display: "flex", 
                              alignItems: "center", 
                              gap: 1.5,
                              color: link.name === "Buy Us Coffee" ? "#facc15" : "white"
                            }}
                          >
                            {link.icon && <Box sx={{ display: "flex", fontSize: "1.1rem" }}>{link.icon}</Box>}
                            <Typography sx={{ fontWeight: 800, color: "inherit", fontSize: "0.9rem" }}>{link.name}</Typography>
                          </Box>
                        ) : (
                          <Link href={link.href} onClick={toggleMenu} style={{ textDecoration: "none", width: "100%" }}>
                            <Typography sx={{ fontWeight: 800, color: "white", fontSize: "0.9rem" }}>{link.name}</Typography>
                          </Link>
                        )}
                        {link.subItems && (
                          <BiChevronDown style={{ 
                            color: "white",
                            fontSize: "1rem",
                            transform: mobileSubmenu === link.name ? "rotate(180deg)" : "none",
                            transition: "transform 0.3s"
                          }} />
                        )}
                      </Box>

                      <AnimatePresence>
                        {mobileSubmenu === link.name && link.subItems && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            style={{ overflow: "hidden" }}
                          >
                            <Stack spacing={0.5} sx={{ mt: 0.5, ml: 1.5, borderLeft: "1px solid rgba(255,255,255,0.1)", pl: 1.5 }}>
                              {link.subItems.map((sub) => (
                                <Link 
                                  key={sub.name} 
                                  href={sub.href} 
                                  onClick={toggleMenu}
                                  style={{ textDecoration: "none" }}
                                >
                                  <Box sx={{ p: 1, borderRadius: "10px", "&:hover": { bgcolor: "rgba(255,255,255,0.03)" } }}>
                                    <Typography sx={{ fontWeight: 700, color: "rgba(255,255,255,0.7)", fontSize: "0.85rem" }}>
                                      {sub.name}
                                    </Typography>
                                  </Box>
                                </Link>
                              ))}
                            </Stack>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </Box>
                  ))}
                </Stack>
              </Box>

              <Box sx={{ mt: 2, pt: 2, borderTop: "1px solid rgba(255,255,255,0.08)" }}>
                <Button
                  fullWidth
                  variant="contained"
                  size="medium"
                  component={Link}
                  href="/contact"
                  onClick={toggleMenu}
                  sx={{ 
                    bgcolor: "#0072ce", 
                    color: "white", 
                    fontWeight: 800, 
                    borderRadius: "12px",
                    py: 1.5,
                    fontSize: "0.9rem",
                    textTransform: "none",
                    boxShadow: "0 10px 20px rgba(0, 114, 206, 0.2)"
                  }}
                >
                  Contact Us
                </Button>
              </Box>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </Box>
  );
}


