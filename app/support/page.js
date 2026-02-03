"use client";

import React from "react";
import { 
  Box, 
  Typography, 
  Stack, 
  Grid, 
  styled,
  Button,
  useTheme,
  useMediaQuery,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  TextField,
  InputAdornment
} from "@mui/material";
import { motion } from "framer-motion";
import { 
  SupportAgent as SupportIcon,
  HelpOutline as FaqIcon,
  Description as DocsIcon,
  Forum as CommunityIcon,
  ExpandMore as ExpandMoreIcon,
  Search as SearchIcon,
  Send as SendIcon,
  MailOutline as MailIcon,
  History as HistoryIcon,
  LiveHelp as LiveHelpIcon
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
  height: "100%",
  display: "flex",
  flexDirection: "column"
}));

const TerminalHeader = ({ title, icon, color }) => (
  <Box sx={{ 
    bgcolor: "#1e293b", 
    px: { xs: 2, sm: 2.5 }, 
    py: { xs: 1, sm: 1.5 }, 
    borderBottom: "1px solid rgba(255, 255, 255, 0.05)", 
    display: "flex", 
    justifyContent: "space-between", 
    alignItems: "center" 
  }}>
    <Stack direction="row" spacing={1}>
      <Box sx={{ width: 10, height: 10, borderRadius: "50%", bgcolor: "#ff5f56" }} />
      <Box sx={{ width: 10, height: 10, borderRadius: "50%", bgcolor: "#ffbd2e" }} />
      <Box sx={{ width: 10, height: 10, borderRadius: "50%", bgcolor: "#27c93f" }} />
    </Stack>
    <Stack direction="row" spacing={1} alignItems="center">
      <Box sx={{ color: color || "rgba(255,255,255,0.4)", display: "flex", fontSize: "1rem" }}>{icon}</Box>
      <Typography variant="caption" sx={{ color: "rgba(255,255,255,0.4)", fontWeight: 700, fontFamily: "'Fira Code', monospace", fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: 1 }}>
        {title}
      </Typography>
    </Stack>
  </Box>
);

const supportCategories = [
  {
    title: "Documentation",
    description: "API references, integration guides, and system manuals.",
    icon: <DocsIcon />,
    color: "#10b981",
    action: "Read Docs"
  },
  {
    title: "Community Forum",
    description: "Connect with other users and share knowledge.",
    icon: <CommunityIcon />,
    color: "#f59e0b",
    action: "Visit Forum"
  }
];

const faqs = [
  {
    question: "How do I reset my API credentials?",
    answer: "Navigate to your developer dashboard, select 'Security Settings', and click on 'Rotate API Keys'. Ensure you update your environment variables immediately."
  },
  {
    question: "What is the typical response time for support tickets?",
    answer: "Our standard response time is under 2 hours for critical issues and 24 hours for general inquiries during business days."
  },
  {
    question: "Can I integrate OMYTECH products with third-party tools?",
    answer: "Yes, all our products come with comprehensive REST APIs and webhooks for seamless integration with your existing tech stack."
  },
  {
    question: "Do you offer custom enterprise training?",
    answer: "Absolutely. Our OMYLABS division provides tailored workshops and technical training for enterprise teams."
  }
];

export default function SupportPage() {
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
        <Stack spacing={8}>
          {/* Header Section */}
          <Box sx={{ textAlign: "center", mb: 4 }}>
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
              SUPPORT_CENTER
            </Typography>
            <Typography 
              variant="body1" 
              sx={{ 
                color: "rgba(255,255,255,0.6)", 
                maxWidth: "800px", 
                mx: "auto",
                fontSize: { xs: "1rem", md: "1.2rem" }
              }}
            >
              Need assistance? Our technical team is standing by to help you 
              navigate, optimize, and scale your solutions.
            </Typography>
          </Box>

          {/* Quick Support Cards */}
          <Grid container spacing={4} justifyContent="center">
            {supportCategories.map((cat, index) => (
              <Grid item xs={12} md={5} key={index}>
                <TerminalContainer
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <TerminalHeader title={`support::${cat.title.toLowerCase().replace(' ', '_')}`} icon={cat.icon} color={cat.color} />
                  <Box sx={{ p: 4, textAlign: "center", flexGrow: 1 }}>
                    <Typography variant="h5" sx={{ color: "white", fontWeight: 800, mb: 2 }}>
                      {cat.title}
                    </Typography>
                    <Typography sx={{ color: "rgba(255,255,255,0.6)", mb: 4, fontSize: "0.95rem", lineHeight: 1.6 }}>
                      {cat.description}
                    </Typography>
                    <Button 
                      variant="outlined" 
                      fullWidth
                      sx={{ 
                        color: cat.color, 
                        borderColor: `${cat.color}44`,
                        borderRadius: "12px",
                        py: 1.5,
                        textTransform: "none",
                        fontWeight: 700,
                        "&:hover": { borderColor: cat.color, bgcolor: `${cat.color}11` }
                      }}
                    >
                      {cat.action}
                    </Button>
                  </Box>
                </TerminalContainer>
              </Grid>
            ))}
          </Grid>

          {/* FAQ & Support Tools Section */}
          <Grid container spacing={4} justifyContent="center">
            {/* FAQ - Full Width */}
            <Grid item xs={12} md={10}>
              <TerminalContainer>
                <TerminalHeader title="knowledge_base::faq" icon={<FaqIcon />} />
                <Box sx={{ p: { xs: 3, md: 5 }, textAlign: "center" }}>
                  <Typography variant="h4" sx={{ color: "white", fontWeight: 900, mb: 4, fontFamily: "'Fira Code', monospace" }}>
                    FREQUENTLY_ASKED_QUESTIONS
                  </Typography>
                  <Stack spacing={2} sx={{ alignItems: "stretch", textAlign: "left" }}>
                    {faqs.map((faq, i) => (
                      <Accordion 
                        key={i}
                        sx={{ 
                          bgcolor: "rgba(255,255,255,0.03)", 
                          color: "white",
                          borderRadius: "12px !important",
                          border: "1px solid rgba(255,255,255,0.05)",
                          "&:before": { display: "none" }
                        }}
                      >
                        <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: "rgba(255,255,255,0.4)" }} />}>
                          <Typography sx={{ fontWeight: 700, fontSize: "1rem" }}>{faq.question}</Typography>
                        </AccordionSummary>
                        <AccordionDetails sx={{ borderTop: "1px solid rgba(255,255,255,0.05)", pt: 2 }}>
                          <Typography sx={{ color: "rgba(255,255,255,0.6)", lineHeight: 1.7 }}>
                            {faq.answer}
                          </Typography>
                        </AccordionDetails>
                      </Accordion>
                    ))}
                  </Stack>
                </Box>
              </TerminalContainer>
            </Grid>

            {/* Support Tools - Row 2 */}
            <Grid item xs={12} md={10}>
              <Grid container spacing={4} justifyContent="center">
                {/* Search Terminal */}
                <Grid item xs={12} sm={6} md={4}>
                  <TerminalContainer sx={{ height: "100%" }}>
                    <TerminalHeader title="sys::search" icon={<SearchIcon />} />
                    <Box sx={{ p: 4, flexGrow: 1, display: "flex", flexDirection: "column", justifyContent: "center", textAlign: "center" }}>
                      <Typography sx={{ color: "rgba(255,255,255,0.4)", fontSize: "0.75rem", fontWeight: 800, letterSpacing: 1, mb: 2, textTransform: "uppercase" }}>
                        [ QUICK_SEARCH ]
                      </Typography>
                      <TextField 
                        fullWidth
                        placeholder="Search for solutions..."
                        variant="standard"
                        InputProps={{
                          disableUnderline: true,
                          startAdornment: (
                            <InputAdornment position="start">
                              <SearchIcon sx={{ color: "rgba(255,255,255,0.3)" }} />
                            </InputAdornment>
                          ),
                          sx: {
                            color: "white",
                            bgcolor: "rgba(0,0,0,0.2)",
                            p: 2,
                            borderRadius: "12px",
                            fontFamily: "'Fira Code', monospace",
                            fontSize: "0.9rem"
                          }
                        }}
                      />
                    </Box>
                  </TerminalContainer>
                </Grid>

                {/* Status Terminal */}
                <Grid item xs={12} sm={6} md={4}>
                  <TerminalContainer sx={{ height: "100%" }}>
                    <TerminalHeader title="sys::status" icon={<HistoryIcon />} />
                    <Box sx={{ p: 4, flexGrow: 1, display: "flex", flexDirection: "column", justifyContent: "center", textAlign: "center" }}>
                      <Stack spacing={2}>
                        <Stack direction="row" justifyContent="space-between" alignItems="center">
                          <Typography sx={{ color: "white", fontSize: "0.9rem" }}>Core Systems</Typography>
                          <Typography sx={{ color: "#10b981", fontSize: "0.8rem", fontWeight: 700 }}>OPERATIONAL</Typography>
                        </Stack>
                        <Stack direction="row" justifyContent="space-between" alignItems="center">
                          <Typography sx={{ color: "white", fontSize: "0.9rem" }}>API Gateway</Typography>
                          <Typography sx={{ color: "#10b981", fontSize: "0.8rem", fontWeight: 700 }}>OPERATIONAL</Typography>
                        </Stack>
                        <Stack direction="row" justifyContent="space-between" alignItems="center">
                          <Typography sx={{ color: "white", fontSize: "0.9rem" }}>Support Queue</Typography>
                          <Typography sx={{ color: "#3b82f6", fontSize: "0.8rem", fontWeight: 700 }}>LOW_LATENCY</Typography>
                        </Stack>
                      </Stack>
                    </Box>
                  </TerminalContainer>
                </Grid>

                {/* Direct Contact */}
                <Grid item xs={12} sm={12} md={4}>
                  <TerminalContainer sx={{ height: "100%" }}>
                    <TerminalHeader title="sys::direct_contact" icon={<MailIcon />} />
                    <Box sx={{ p: 4, flexGrow: 1, display: "flex", flexDirection: "column", justifyContent: "center", textAlign: "center" }}>
                      <Typography sx={{ color: "rgba(255,255,255,0.6)", fontSize: "0.9rem", mb: 3 }}>
                        Can't find what you're looking for? 
                      </Typography>
                      <Button 
                        variant="contained" 
                        fullWidth
                        endIcon={<SendIcon />}
                        sx={{ 
                          bgcolor: "#0072ce", 
                          color: "white",
                          borderRadius: "12px",
                          py: 1.5,
                          textTransform: "none",
                          fontWeight: 700,
                          "&:hover": { bgcolor: "#005bb7" }
                        }}
                      >
                        Contact Engineering
                      </Button>
                    </Box>
                  </TerminalContainer>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Stack>
      </Box>
    </Box>
  );
}
