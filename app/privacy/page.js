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
  Security as PrivacyIcon,
  Update as UpdateIcon,
  Shield as ShieldIcon,
  Fingerprint as DataIcon,
  Gavel as LegalIcon,
  Policy as PolicyIcon
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

export default function PrivacyPage() {
  const sections = [
    {
      title: "1. Information We Collect",
      icon: <DataIcon />,
      content: [
        "We collect information that you provide directly to us, including:",
        "• Personal information such as name, email address, phone number, and company details",
        "• Account credentials and profile information",
        "• Payment and billing information",
        "• Communications and correspondence with us",
        "• Information about your use of our services and website"
      ]
    },
    {
      title: "2. How We Use Your Information",
      icon: <UpdateIcon />,
      content: [
        "We use the information we collect to:",
        "• Provide, maintain, and improve our services",
        "• Process transactions and send related information",
        "• Send technical notices, updates, and support messages",
        "• Respond to your comments, questions, and customer service requests",
        "• Communicate with you about products, services, and events",
        "• Monitor and analyze trends, usage, and activities"
      ]
    },
    {
      title: "3. Information Sharing and Disclosure",
      icon: <ShieldIcon />,
      content: [
        "We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:",
        "• With your consent or at your direction",
        "• With service providers who perform services on our behalf",
        "• To comply with legal obligations or protect our rights",
        "• In connection with a merger, sale, or acquisition of our business"
      ]
    },
    {
      title: "4. Data Security",
      icon: <PrivacyIcon />,
      content: [
        "We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security."
      ]
    },
    {
      title: "5. Your Rights and Choices",
      icon: <LegalIcon />,
      content: [
        "You have the right to:",
        "• Access, update, or delete your personal information",
        "• Opt-out of marketing communications",
        "• Request a copy of your data",
        "• Object to processing of your personal information",
        "• Lodge a complaint with a supervisory authority"
      ]
    },
    {
      title: "6. Cookies and Tracking Technologies",
      icon: <PolicyIcon />,
      content: [
        "We use cookies and similar tracking technologies to collect information about your browsing activities. You can control cookies through your browser settings and other tools. However, disabling cookies may affect your ability to use certain features of our website."
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
                PRIVACY_POLICY
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
            <TerminalHeader title="legal::intro" icon={<PrivacyIcon />} />
            <Box sx={{ p: 4 }}>
              <Typography sx={{ color: "rgba(255,255,255,0.8)", fontSize: "1.1rem", lineHeight: 1.8, mb: 0 }}>
                At OMYTECH, we are committed to protecting your privacy and ensuring the security of your personal information. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our 
                website or use our services.
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
                <TerminalHeader title={`legal::section_${index + 1}`} icon={section.icon} />
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
            <TerminalHeader title="legal::contact" icon={<PolicyIcon />} />
            <Box sx={{ p: 4 }}>
              <Typography variant="h5" sx={{ color: "white", fontWeight: 800, mb: 2 }}>
                Contact Us
              </Typography>
              <Typography sx={{ color: "rgba(255,255,255,0.6)", mb: 3 }}>
                If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:
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
