"use client";

import React from "react";
import { 
  Box, 
  Typography, 
  Stack, 
  styled,
  useTheme,
  useMediaQuery
} from "@mui/material";
import { motion } from "framer-motion";
import { 
  Gavel as GavelIcon,
  Description as DescIcon,
  Assignment as AssignIcon,
  Security as SecurityIcon,
  Payment as PaymentIcon,
  Handshake as HandshakeIcon,
  Block as BlockIcon,
  Info as InfoIcon
} from "@mui/icons-material";

const MotionBox = motion.create(Box);

const TerminalContainer = styled(MotionBox)(({ theme }) => ({
  width: "100%",
  backgroundColor: "rgba(15, 23, 42, 0.8)",
  borderRadius: "24px",
  overflow: "hidden",
  border: "1px solid rgba(255, 255, 255, 0.08)",
  backdropFilter: "blur(20px)",
  boxShadow: "0 20px 50px rgba(0,0,0,0.4)",
  fontFamily: "'Fira Code', monospace",
  position: "relative",
  marginBottom: "2rem"
}));

const TerminalHeader = ({ title, icon }) => (
  <Box sx={{ 
    bgcolor: "#1e293b", 
    px: 2, 
    py: 1.5, 
    borderBottom: "1px solid rgba(255, 255, 255, 0.05)", 
    display: "flex", 
    justifyContent: "space-between", 
    alignItems: "center" 
  }}>
    <Stack direction="row" spacing={1.5}>
      <Box sx={{ width: 12, height: 12, borderRadius: "50%", bgcolor: "#ff5f56" }} />
      <Box sx={{ width: 12, height: 12, borderRadius: "50%", bgcolor: "#ffbd2e" }} />
      <Box sx={{ width: 12, height: 12, borderRadius: "50%", bgcolor: "#27c93f" }} />
    </Stack>
    <Stack direction="row" spacing={1} alignItems="center">
      <Box sx={{ color: "rgba(255,255,255,0.4)", display: "flex", fontSize: "0.9rem" }}>{icon}</Box>
      <Typography variant="caption" sx={{ color: "rgba(255,255,255,0.4)", fontWeight: 700, fontFamily: "'Fira Code', monospace", fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: 1 }}>
        {title}
      </Typography>
    </Stack>
  </Box>
);

export default function TermsPage() {
  const sections = [
    {
      title: "1. Acceptance of Terms",
      icon: <HandshakeIcon />,
      content: [
        "By accessing and using OMYTECH's website and services, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.",
        "We reserve the right to modify these terms at any time. Your continued use of our services after changes are posted constitutes acceptance of the modified terms."
      ]
    },
    {
      title: "2. Description of Services",
      icon: <DescIcon />,
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
      title: "3. Intellectual Property Rights",
      icon: <SecurityIcon />,
      content: [
        "All content, features, and functionality on our website and services are owned by OMYTECH and are protected by international copyright, trademark, and other intellectual property laws.",
        "You may not reproduce, distribute, modify, create derivative works, publicly display, or exploit any of our content without our express written permission."
      ]
    },
    {
      title: "4. User Conduct",
      icon: <BlockIcon />,
      content: [
        "You agree not to:",
        "• Use our services for any illegal or unauthorized purpose",
        "• Violate any laws in your jurisdiction",
        "• Infringe upon the rights of others",
        "• Transmit any harmful code, viruses, or malicious software",
        "• Attempt to gain unauthorized access to our systems"
      ]
    },
    {
      title: "5. Payment Terms",
      icon: <PaymentIcon />,
      content: [
        "For paid services:",
        "• Payment terms will be specified in individual project agreements",
        "• All fees are non-refundable unless otherwise stated",
        "• Late payments may result in service suspension",
        "• We reserve the right to change our pricing with notice"
      ]
    },
    {
      title: "6. Limitation of Liability",
      icon: <GavelIcon />,
      content: [
        "To the maximum extent permitted by law, OMYTECH shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or business opportunities.",
        "Our total liability for any claims arising from our services shall not exceed the amount paid by you for the specific service giving rise to the claim."
      ]
    }
  ];

  return (
    <Box 
      component="section" 
      sx={{ 
        minHeight: "100vh",
        bgcolor: "#020617",
        pt: { xs: 4, md: 8 },
        pb: 12,
        position: "relative",
        overflow: "hidden"
      }}
    >
      {/* Dynamic Background Elements */}
      <Box 
        sx={{ 
          position: "absolute",
          inset: 0,
          backgroundImage: "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.03) 1px, transparent 0)",
          backgroundSize: "30px 30px",
          zIndex: 0
        }} 
      />
      <Box 
        sx={{ 
          position: "absolute",
          top: "20%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "80%",
          height: "60%",
          background: "radial-gradient(circle, rgba(59, 130, 246, 0.08) 0%, transparent 70%)",
          filter: "blur(120px)",
          zIndex: 0
        }} 
      />

      {/* Scanline Effect */}
      <Box sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06))",
        zIndex: 10,
        backgroundSize: "100% 2px, 3px 100%",
        pointerEvents: "none"
      }} />

      <Box sx={{ position: "relative", zIndex: 1, width: "100%", px: { xs: 2, sm: 3, md: 6 } }}>
        <Stack spacing={6} sx={{ maxWidth: "900px", mx: "auto" }}>
          {/* Header Section */}
          <Box sx={{ textAlign: "center", mb: 4 }}>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Typography 
                variant="h2" 
                sx={{ 
                  color: "white", 
                  fontWeight: 900, 
                  mb: 2, 
                  fontFamily: "'Fira Code', monospace",
                  fontSize: { xs: "2.5rem", md: "4rem" }
                }}
              >
                TERMS_OF_SERVICE
              </Typography>
              <Typography 
                variant="body1" 
                sx={{ 
                  color: "rgba(255,255,255,0.6)", 
                  fontSize: { xs: "1rem", md: "1.2rem" }
                }}
              >
                Last Updated: January 2025
              </Typography>
            </motion.div>
          </Box>

          <TerminalContainer
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <TerminalHeader title="legal::intro" icon={<AssignIcon />} />
            <Box sx={{ p: 4 }}>
              <Typography sx={{ color: "rgba(255,255,255,0.8)", fontSize: "1.1rem", lineHeight: 1.8, mb: 0 }}>
                Welcome to OMYTECH. These Terms of Service govern your use of our website and services. 
                Please read these terms carefully before using our services. By accessing or using our services, 
                you agree to be bound by these terms and our Privacy Policy.
              </Typography>
            </Box>
          </TerminalContainer>

          <Box>
            {sections.map((section, index) => (
              <TerminalContainer
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
              >
                <TerminalHeader title={`legal::term_${index + 1}`} icon={section.icon} />
                <Box sx={{ p: 4 }}>
                  <Typography variant="h5" sx={{ color: "white", fontWeight: 800, mb: 3, fontFamily: "'Fira Code', monospace" }}>
                    {section.title}
                  </Typography>
                  <Stack spacing={2}>
                    {section.content.map((paragraph, pIndex) => (
                      <Typography key={pIndex} sx={{ color: "rgba(255,255,255,0.6)", fontSize: "1rem", lineHeight: 1.8 }}>
                        {paragraph}
                      </Typography>
                    ))}
                  </Stack>
                </Box>
              </TerminalContainer>
            ))}
          </Box>

          <TerminalContainer
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <TerminalHeader title="legal::contact" icon={<InfoIcon />} />
            <Box sx={{ p: 4 }}>
              <Typography variant="h5" sx={{ color: "white", fontWeight: 800, mb: 2 }}>
                Questions?
              </Typography>
              <Typography sx={{ color: "rgba(255,255,255,0.6)", mb: 3 }}>
                If you have any questions about these Terms of Service, please contact our legal team:
              </Typography>
              <Box sx={{ 
                bgcolor: "rgba(255,255,255,0.03)", 
                p: 3, 
                borderRadius: "16px",
                border: "1px solid rgba(255,255,255,0.05)"
              }}>
                <Stack spacing={1}>
                  <Typography sx={{ color: "white" }}>
                    <Box component="span" sx={{ color: "rgba(255,255,255,0.4)", mr: 1 }}>EMAIL:</Box> 
                    <Box component="a" href="mailto:info@omytech.co.ke" sx={{ color: "#3b82f6", textDecoration: "none", "&:hover": { textDecoration: "underline" } }}>info@omytech.co.ke</Box>
                  </Typography>
                  <Typography sx={{ color: "white" }}>
                    <Box component="span" sx={{ color: "rgba(255,255,255,0.4)", mr: 1 }}>PHONE:</Box> 
                    <Box component="a" href="tel:+254715367859" sx={{ color: "#3b82f6", textDecoration: "none", "&:hover": { textDecoration: "underline" } }}>+254 715 367 859</Box>
                  </Typography>
                  <Typography sx={{ color: "white" }}>
                    <Box component="span" sx={{ color: "rgba(255,255,255,0.4)", mr: 1 }}>ADDRS:</Box> 
                    Nairobi, Kenya
                  </Typography>
                </Stack>
              </Box>
            </Box>
          </TerminalContainer>
        </Stack>
      </Box>
    </Box>
  );
}
