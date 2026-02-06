"use client";

import React, { useState } from "react";
import { 
  Box, 
  Typography, 
  Stack, 
  Grid, 
  Button,
  IconButton,
  styled,
  useTheme,
  useMediaQuery
} from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Mail as MailIcon, 
  Phone as PhoneIcon, 
  Place as MapPinIcon,
  Send as SendIcon,
  Terminal as TerminalIcon,
  Code as CodeIcon,
} from "@mui/icons-material";
import {
  FaXTwitter,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa6";

const MotionBox = motion.create(Box);
const MotionTypography = motion.create(Typography);

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
}));

const TerminalHeader = ({ title, icon }) => (
  <Box sx={{ 
    bgcolor: "#1e293b", 
    px: 2, 
    py: 1, 
    borderBottom: "1px solid rgba(255, 255, 255, 0.05)", 
    display: "flex", 
    justifyContent: "space-between", 
    alignItems: "center" 
  }}>
    <Stack direction="row" spacing={1}>
      <Box sx={{ width: 12, height: 12, borderRadius: "50%", bgcolor: "#ff5f56" }} />
      <Box sx={{ width: 12, height: 12, borderRadius: "50%", bgcolor: "#ffbd2e" }} />
      <Box sx={{ width: 12, height: 12, borderRadius: "50%", bgcolor: "#27c93f" }} />
    </Stack>
    <Stack direction="row" spacing={1} alignItems="center">
      <Box sx={{ color: "rgba(255,255,255,0.4)", display: "flex", fontSize: "0.9rem" }}>{icon}</Box>
      <Typography variant="caption" sx={{ color: "rgba(255,255,255,0.4)", fontWeight: 700, fontFamily: "'Fira Code', monospace", fontSize: "0.7rem" }}>
        {title}
      </Typography>
    </Stack>
  </Box>
);

export default function ContactPage() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const contactInfo = [
    { icon: <MailIcon fontSize="small" />, label: "mail", value: "info@omytech.co.ke", link: "mailto:info@omytech.co.ke", cmd: "ping mail.omytech.co.ke" },
    { icon: <PhoneIcon fontSize="small" />, label: "comms", value: "+254 715 367 859", link: "tel:+254715367859", cmd: "call --secure-line" },
    { icon: <MapPinIcon fontSize="small" />, label: "geo", value: "Nairobi, Kenya", link: "https://maps.app.goo.gl/9HdWNNGa33NXyEkb9", cmd: "locate --current" },
  ];

  const socialLinks = [
    { icon: <FaFacebook size={20} />, label: "facebook", link: "https://facebook.com/omytech_kenya" },
    { icon: <FaXTwitter size={20} />, label: "twitter", link: "https://x.com/omytech_kenya" },
    { icon: <FaInstagram size={20} />, label: "instagram", link: "https://instagram.com/omytech_kenya" },
    { icon: <FaLinkedin size={20} />, label: "linkedin", link: "https://linkedin.com/company/omytech-kenya" },
    { icon: <FaGithub size={20} />, label: "github", link: "https://github.com/omytech-kenya" },
  ];

  if (!mounted) return null;

  return (
    <Box 
      component="section" 
      sx={{ 
        minHeight: "100vh",
        bgcolor: "#020617",
        pt: { xs: 4, md: 6 },
        pb: 12,
        position: "relative",
        overflow: "hidden"
      }}
    >
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
        <Grid 
          container 
          spacing={{ xs: 3, md: 4 }} 
          sx={{ 
            alignItems: "stretch",
            width: "100%",
            margin: 0
          }}
        >
          {/* Sidebar / Info */}
          <Grid item xs={12} md={4} sx={{ 
            width: "100%",
            px: { xs: 0, md: 2 },
            mb: { xs: 2, md: 0 }
          }}>
            <Stack spacing={3}>
              {/* Header Card */}
              <TerminalContainer
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                sx={{ 
                  borderRadius: { xs: "16px", sm: "24px" },
                  border: "1px solid rgba(255, 255, 255, 0.08)"
                }}
              >
                <TerminalHeader title="system_status" icon={<TerminalIcon fontSize="small" />} />
                <Box sx={{ p: { xs: 2, sm: 3 } }}>
                  <Typography 
                    variant="h5" 
                    sx={{ color: "white", fontWeight: 900, mb: 1, fontFamily: "'Fira Code', monospace", fontSize: { xs: "1.25rem", sm: "1.5rem" } }}
                  >
                    ESTABLISH_CONTACT
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#3b82f6", fontFamily: "'Fira Code', monospace", fontSize: { xs: "0.75rem", sm: "0.875rem" } }}>
                    Status: Listening on port 443...
                  </Typography>
                </Box>
              </TerminalContainer>

              {/* Individual Contact Cards */}
              {contactInfo.map((info, i) => (
                <TerminalContainer
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * (i + 1) }}
                  sx={{ 
                    borderRadius: { xs: "16px", sm: "24px" },
                    border: "1px solid rgba(255, 255, 255, 0.08)"
                  }}
                >
                  <TerminalHeader title={`protocol::${info.label}`} icon={info.icon} />
                  <Box sx={{ p: { xs: 2, sm: 3 } }}>
                    <Typography 
                      sx={{ 
                        color: "rgba(255,255,255,0.3)", 
                        fontSize: "0.6rem", 
                        fontWeight: 800, 
                        letterSpacing: 1.5, 
                        mb: 1,
                        textTransform: "uppercase"
                      }}
                    >
                      ➜ ~ {info.cmd}
                    </Typography>
                    <Typography 
                      component="a" 
                      href={info.link}
                      sx={{ 
                        color: "#10b981", 
                        textDecoration: "none", 
                        fontSize: { xs: "0.9rem", sm: "1rem" },
                        fontFamily: "'Fira Code', monospace",
                        display: "block",
                        wordBreak: "break-all",
                        "&:hover": { color: "#3b82f6" }
                      }}
                    >
                      {info.value}
                    </Typography>
                  </Box>
                </TerminalContainer>
              ))}

              {/* Social Matrix Card */}
              <TerminalContainer
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                sx={{ 
                  borderRadius: { xs: "16px", sm: "24px" },
                  border: "1px solid rgba(255, 255, 255, 0.08)"
                }}
              >
                <TerminalHeader title="social_matrix" icon={<CodeIcon fontSize="small" />} />
                <Box sx={{ p: { xs: 2, sm: 3 } }}>
                  <Stack direction="row" spacing={1} flexWrap="wrap" justifyContent={{ xs: "center", sm: "flex-start" }}>
                    {socialLinks.map((social, i) => (
                      <IconButton
                        key={i}
                        component="a"
                        href={social.link}
                        target="_blank"
                        size={isMobile ? "small" : "medium"}
                        sx={{ 
                          color: "rgba(255,255,255,0.4)",
                          border: "1px solid rgba(255,255,255,0.05)",
                          "&:hover": { color: "#3b82f6", bgcolor: "rgba(59, 130, 246, 0.1)", borderColor: "#3b82f6" }
                        }}
                      >
                        {social.icon}
                      </IconButton>
                    ))}
                  </Stack>
                </Box>
                <Box sx={{ bgcolor: "rgba(255,255,255,0.02)", px: 2, py: 1 }}>
                  <Typography variant="caption" sx={{ color: "rgba(255,255,255,0.15)", fontSize: "0.5rem" }}>
                    ENCRYPTION: AES-256-GCM
                  </Typography>
                </Box>
              </TerminalContainer>
            </Stack>
          </Grid>

          {/* Main Content Area */}
          <Grid item xs={12} md={8} sx={{ 
            display: "flex",
            width: "100%",
            px: { xs: 0, md: 2 }
          }}>
            <TerminalContainer
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              sx={{ 
                flex: 1,
                display: "flex",
                flexDirection: "column",
                width: "100%",
                borderRadius: { xs: "16px", sm: "24px" },
                border: "1px solid rgba(255, 255, 255, 0.08)"
              }}
            >
              <TerminalHeader title="omytech_comms_v1.0.4" icon={<CodeIcon fontSize="small" />} />
              <Box sx={{ p: { xs: 2, sm: 4, md: 6 }, flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
                <Typography variant="h4" sx={{ color: 'white', fontWeight: 900, mb: 2, fontFamily: "'Fira Code', monospace" }}>
                  COMMUNICATION_CHANNELS
                </Typography>
                <Typography sx={{ color: 'rgba(255,255,255,0.6)', mb: 4, maxWidth: '600px', fontFamily: "'Fira Code', monospace" }}>
                  Direct contact protocols are active. Please use the sidebar credentials to establish a secure link with our team via email or phone.
                </Typography>
                <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', justifyContent: 'center' }}>
                  {contactInfo.map((info, i) => (
                    <Button
                      key={i}
                      variant="outlined"
                      component="a"
                      href={info.link}
                      startIcon={info.icon}
                      sx={{
                        borderColor: 'rgba(59, 130, 246, 0.3)',
                        color: '#3b82f6',
                        borderRadius: '12px',
                        textTransform: 'none',
                        fontFamily: "'Fira Code', monospace",
                        "&:hover": { borderColor: '#3b82f6', bgcolor: 'rgba(59, 130, 246, 0.05)' }
                      }}
                    >
                      {info.label.toUpperCase()}
                    </Button>
                  ))}
                </Box>
              </Box>
              <Box sx={{ bgcolor: "rgba(255,255,255,0.02)", px: 2, py: 1 }}>
                <Typography variant="caption" sx={{ color: "rgba(255,255,255,0.2)", fontSize: "0.6rem" }}>
                  TERMINAL_READY
                </Typography>
              </Box>
            </TerminalContainer>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
