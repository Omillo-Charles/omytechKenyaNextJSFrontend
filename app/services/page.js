"use client";

import React from "react";
import { 
  Box, 
  Typography, 
  Stack, 
  Grid, 
  Paper,
  Button,
  styled
} from "@mui/material";
import { motion } from "framer-motion";
import { 
  Code as CodeIcon, 
  Storage as StorageIcon, 
  Brush as DesignIcon, 
  Security as SecurityIcon, 
  AutoGraph as AiIcon, 
  Lightbulb as StrategyIcon,
  ArrowForward as ArrowForwardIcon
} from "@mui/icons-material";
import Link from "next/link";

const MotionBox = motion.create(Box);
const MotionTypography = motion.create(Typography);

const TerminalContainer = styled(MotionBox)(({ theme }) => ({
  width: "100%",
  backgroundColor: "rgba(15, 23, 42, 0.8)",
  borderRadius: "20px",
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

const services = [
  {
    id: "software-engineering",
    title: "Software Engineering",
    description: "High-performance web and mobile applications built with modern frameworks for scale and speed.",
    icon: <CodeIcon />,
    color: "#3b82f6",
    terminalLines: [
      { text: "omytech deploy --web --mobile", type: "command" },
      { text: "Compiling high-performance assets...", type: "response", color: "#64748b" },
      { text: "Optimizing React & Next.js components...", type: "response", color: "#3b82f6" },
      { text: "Integrating Flutter for cross-platform...", type: "response", color: "#10b981" },
      { text: "Status: Deployment Ready [100%]", type: "response", color: "#ffffff" },
    ]
  },
  {
    id: "cloud-infrastructure",
    title: "Cloud & Infrastructure",
    description: "Scalable, secure, and reliable cloud solutions to power your digital ecosystem with 99.9% uptime.",
    icon: <StorageIcon />,
    color: "#8b5cf6",
    terminalLines: [
      { text: "omytech cloud --init --region-ke", type: "command" },
      { text: "Provisioning AWS/Azure edge nodes...", type: "response", color: "#64748b" },
      { text: "Configuring Kubernetes clusters...", type: "response", color: "#8b5cf6" },
      { text: "Establishing secure VPN tunnels...", type: "response", color: "#10b981" },
      { text: "Status: Infrastructure Scaled", type: "response", color: "#ffffff" },
    ]
  },
  {
    id: "ui-ux-design",
    title: "UI/UX Design",
    description: "User-centric interfaces that blend aesthetic beauty with seamless functionality for maximum engagement.",
    icon: <DesignIcon />,
    color: "#f59e0b",
    terminalLines: [
      { text: "omytech design --render --prototype", type: "command" },
      { text: "Analyzing user behavior patterns...", type: "response", color: "#64748b" },
      { text: "Generating high-fidelity mockups...", type: "response", color: "#f59e0b" },
      { text: "Executing interactive prototypes...", type: "response", color: "#10b981" },
      { text: "Status: UX Optimized", type: "response", color: "#ffffff" },
    ]
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity",
    description: "Enterprise-grade security audits and system hardening to protect your data and digital assets.",
    icon: <SecurityIcon />,
    color: "#ef4444",
    terminalLines: [
      { text: "omytech scan --security --audit", type: "command" },
      { text: "Scanning for vulnerabilities...", type: "response", color: "#64748b" },
      { text: "Encrypting database protocols...", type: "response", color: "#ef4444" },
      { text: "Implementing zero-trust auth...", type: "response", color: "#10b981" },
      { text: "Status: System Hardened", type: "response", color: "#ffffff" },
    ]
  },
  {
    id: "ai-data-science",
    title: "AI & Data Science",
    description: "Custom AI models and data analytics that turn raw information into actionable business intelligence.",
    icon: <AiIcon />,
    color: "#10b981",
    terminalLines: [
      { text: "omytech ai --train --predict", type: "command" },
      { text: "Processing large-scale datasets...", type: "response", color: "#64748b" },
      { text: "Training neural networks...", type: "response", color: "#10b981" },
      { text: "Generating predictive insights...", type: "response", color: "#3b82f6" },
      { text: "Status: Model Converged", type: "response", color: "#ffffff" },
    ]
  },
  {
    id: "digital-strategy",
    title: "Digital Strategy",
    description: "Comprehensive roadmaps for digital growth, focusing on market penetration and user acquisition.",
    icon: <StrategyIcon />,
    color: "#06b6d4",
    terminalLines: [
      { text: "omytech strategy --analyze --growth", type: "command" },
      { text: "Mapping market trends...", type: "response", color: "#64748b" },
      { text: "Optimizing SEO performance...", type: "performance", color: "#06b6d4" },
      { text: "Generating conversion reports...", type: "response", color: "#10b981" },
      { text: "Status: Strategy Active", type: "response", color: "#ffffff" },
    ]
  }
];

export default function ServicesPage() {
  return (
    <Box 
      component="section" 
      sx={{ 
        minHeight: "100vh",
        bgcolor: "#080c14",
        pt: { xs: 2, md: 3 },
        pb: 12,
        position: "relative",
        overflow: "hidden"
      }}
    >
      {/* Background Elements */}
      <Box 
        sx={{ 
          position: "absolute",
          inset: 0,
          backgroundImage: "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.03) 1px, transparent 0)",
          backgroundSize: "30px 30px",
          zIndex: 0
        }} 
      />
      
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
          {services.map((service, index) => (
            <Grid 
              item 
              xs={12} 
              md={6} 
              key={index} 
              sx={{ 
                display: "flex",
                width: "100%",
                px: { xs: 0, md: 2 }
              }}
            >
              <TerminalContainer
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                sx={{ 
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                  borderRadius: { xs: "16px", sm: "24px" },
                  border: "1px solid rgba(255, 255, 255, 0.08)"
                }}
              >
                {/* Terminal Header */}
                <Box sx={{ 
                  bgcolor: "rgba(255,255,255,0.03)", 
                  px: { xs: 2, sm: 2.5 }, 
                  py: { xs: 1, sm: 1.5 }, 
                  borderBottom: "1px solid rgba(255, 255, 255, 0.05)", 
                  display: "flex", 
                  justifyContent: "space-between", 
                  alignItems: "center" 
                }}>
                  <Stack direction="row" spacing={1}>
                    <Box sx={{ width: 8, height: 8, borderRadius: "50%", bgcolor: "#ef4444", opacity: 0.8 }} />
                    <Box sx={{ width: 8, height: 8, borderRadius: "50%", bgcolor: "#f59e0b", opacity: 0.8 }} />
                    <Box sx={{ width: 8, height: 8, borderRadius: "50%", bgcolor: "#10b981", opacity: 0.8 }} />
                  </Stack>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <Box sx={{ color: service.color, display: "flex", fontSize: { xs: "0.9rem", sm: "1.1rem" } }}>{service.icon}</Box>
                    <Typography variant="caption" sx={{ color: "rgba(255,255,255,0.3)", fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", fontSize: { xs: "0.6rem", sm: "0.75rem" } }}>
                      {service.title}
                    </Typography>
                  </Stack>
                </Box>

                {/* Terminal Body */}
                <Box sx={{ p: { xs: 2, sm: 3 }, flexGrow: 1, bgcolor: "rgba(15, 23, 42, 0.4)", display: "flex", flexDirection: "column" }}>
                  <Stack spacing={2} sx={{ flexGrow: 1 }}>
                    {/* Human Readable Description */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 + (index * 0.1) }}
                    >
                      <Box sx={{ mb: { xs: 2, sm: 3 } }}>
                        <Typography 
                          sx={{ 
                            color: service.color, 
                            fontSize: "0.65rem", 
                            fontWeight: 800, 
                            letterSpacing: 2, 
                            mb: 1,
                            opacity: 0.8,
                            textTransform: "uppercase"
                          }}
                        >
                          [ SERVICE_OVERVIEW ]
                        </Typography>
                        <Typography 
                          sx={{ 
                            color: "rgba(255,255,255,0.8)", 
                            fontSize: { xs: "0.85rem", sm: "0.9rem" },
                            lineHeight: 1.6,
                            fontWeight: 400,
                            fontFamily: "inherit"
                          }}
                        >
                          {service.description}
                        </Typography>
                      </Box>
                    </motion.div>

                    {/* Terminal Commands */}
                    <Stack spacing={1}>
                      {service.terminalLines.map((line, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.5 + (i * 0.1) }}
                        >
                          <Typography 
                            sx={{ 
                              fontFamily: "'Fira Code', monospace",
                              fontSize: { xs: "0.7rem", sm: "0.75rem" },
                              color: line.color || (line.type === "command" ? "#3b82f6" : "rgba(255,255,255,0.6)"),
                              display: "flex",
                              gap: 1
                            }}
                          >
                            <Box component="span" sx={{ opacity: 0.5 }}>{line.type === "command" ? "➜" : "↳"}</Box>
                            {line.text}
                          </Typography>
                        </motion.div>
                      ))}
                    </Stack>
                  </Stack>

                  {/* CTA Button */}
                  <Box sx={{ mt: 4 }}>
                    <Button
                      variant="text"
                      component={Link}
                      href={`/services/${service.id}`}
                      endIcon={<ArrowForwardIcon />}
                      sx={{ 
                        color: service.color,
                        textTransform: "none",
                        fontFamily: "'Fira Code', monospace",
                        fontSize: "0.8rem",
                        fontWeight: 700,
                        px: 0,
                        "&:hover": {
                          bgcolor: "transparent",
                          opacity: 0.8,
                          transform: "translateX(5px)",
                          transition: "all 0.3s ease"
                        }
                      }}
                    >
                      {`view_${service.id.replace(/-/g, '_')}_protocol`}
                    </Button>
                  </Box>
                </Box>
              </TerminalContainer>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
