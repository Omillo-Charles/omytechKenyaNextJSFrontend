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
  Chip
} from "@mui/material";
import { motion } from "framer-motion";
import { 
  Terminal as TerminalIcon,
  Brush as BrushIcon,
  Science as ScienceIcon,
  AutoAwesome as AiIcon,
  ArrowForward as ArrowForwardIcon,
  CheckCircle as CheckIcon,
  Settings as SettingsIcon,
  Speed as SpeedIcon,
  Security as SecurityIcon
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

const wings = [
  {
    id: "studio",
    name: "OMYTECH STUDIO",
    tagline: "Creative & Digital Excellence",
    description: "Our creative powerhouse dedicated to high-end UI/UX design, branding, and digital storytelling. We blend aesthetics with functionality to create memorable digital experiences.",
    icon: <BrushIcon />,
    color: "#f43f5e", // Rose
    features: [
      "Brand Identity Design",
      "High-Fidelity UI/UX",
      "Motion Graphics",
      "Digital Storytelling",
      "Creative Strategy"
    ],
    terminalLines: [
      { text: "omytech wing --load studio", type: "command" },
      { text: "Initializing creative engine...", type: "response", color: "#64748b" },
      { text: "Loading design systems [v4.0]...", type: "response", color: "#f43f5e" },
      { text: "Optimizing visual assets...", type: "response", color: "#3b82f6" },
      { text: "Status: Studio Environment Ready", type: "response", color: "#ffffff" },
    ]
  },
  {
    id: "labs",
    name: "OMYLABS",
    tagline: "Innovation & R&D Hub",
    description: "The experimental arm of OMYTECH where we research and develop emerging technologies. From IoT to Blockchain, OMYLABS is where the future is engineered.",
    icon: <ScienceIcon />,
    color: "#8b5cf6", // Violet
    features: [
      "IoT Prototyping",
      "Blockchain Solutions",
      "R&D Experiments",
      "Emerging Tech Analysis",
      "Proof of Concepts"
    ],
    terminalLines: [
      { text: "omytech wing --load labs", type: "command" },
      { text: "Connecting to research core...", type: "response", color: "#64748b" },
      { text: "Calibrating experimental protocols...", type: "response", color: "#8b5cf6" },
      { text: "Compiling innovation modules...", type: "response", color: "#10b981" },
      { text: "Status: Labs Core Online", type: "response", color: "#ffffff" },
    ]
  },
  {
    id: "gen",
    name: "OMYGEN",
    tagline: "Next-Gen AI Solutions",
    description: "Dedicated to Artificial Intelligence and Machine Learning. OMYGEN focuses on building intelligent systems that automate complex tasks and provide data-driven insights.",
    icon: <AiIcon />,
    color: "#3b82f6", // Blue
    features: [
      "LLM Integration",
      "Predictive Analytics",
      "Neural Networks",
      "NLP Processing",
      "AI Automation"
    ],
    terminalLines: [
      { text: "omytech wing --load gen", type: "command" },
      { text: "Waking AI neural net...", type: "response", color: "#64748b" },
      { text: "Syncing knowledge models...", type: "response", color: "#3b82f6" },
      { text: "Analyzing dataset patterns...", type: "response", color: "#8b5cf6" },
      { text: "Status: AI Engine Active", type: "response", color: "#ffffff" },
    ]
  }
];

export default function WingsPage() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

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
        <Stack spacing={6}>
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
              OUR_WINGS
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
              The specialized divisions of OMYTECH, each focusing on a core pillar of 
              technological advancement and creative excellence.
            </Typography>
          </Box>

          {/* Wings Grid */}
          <Grid 
            container 
            spacing={{ xs: 3, md: 4 }} 
            sx={{ 
              alignItems: "stretch",
              width: "100%",
              margin: 0
            }}
          >
            {wings.map((wing, index) => (
              <Grid item xs={12} md={4} key={wing.id} sx={{ width: "100%", px: { xs: 0, md: 2 }, mb: { xs: 2, md: 0 } }}>
                <TerminalContainer
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <TerminalHeader title={`wing::${wing.id}`} icon={wing.icon} color={wing.color} />
                  
                  <Box sx={{ p: { xs: 3, md: 4 }, flexGrow: 1 }}>
                    <Stack spacing={4}>
                      <Box>
                        <Typography 
                          variant="h4" 
                          sx={{ 
                            color: wing.color, 
                            fontWeight: 900, 
                            fontFamily: "'Fira Code', monospace",
                            fontSize: { xs: "1.8rem", md: "2.2rem" },
                            mb: 1
                          }}
                        >
                          {wing.name}
                        </Typography>
                        <Typography 
                          variant="h6" 
                          sx={{ 
                            color: "white", 
                            fontWeight: 700, 
                            opacity: 0.9,
                            fontSize: "1rem",
                            mb: 2
                          }}
                        >
                          {wing.tagline}
                        </Typography>
                        <Typography 
                          variant="body1" 
                          sx={{ 
                            color: "rgba(255,255,255,0.7)", 
                            lineHeight: 1.6,
                            fontSize: "0.95rem"
                          }}
                        >
                          {wing.description}
                        </Typography>
                      </Box>

                      {/* Features List */}
                      <Box>
                        <Typography 
                          sx={{ 
                            color: "rgba(255,255,255,0.3)", 
                            fontSize: "0.7rem", 
                            fontWeight: 800, 
                            letterSpacing: 2, 
                            mb: 2,
                            textTransform: "uppercase"
                          }}
                        >
                          [ CORE_PILLARS ]
                        </Typography>
                        <Stack spacing={1.5}>
                          {wing.features.map((feature, i) => (
                            <Stack direction="row" spacing={1.5} alignItems="center" key={i}>
                              <CheckIcon sx={{ color: wing.color, fontSize: "1rem" }} />
                              <Typography sx={{ color: "rgba(255,255,255,0.8)", fontSize: "0.85rem" }}>
                                {feature}
                              </Typography>
                            </Stack>
                          ))}
                        </Stack>
                      </Box>

                      {/* Terminal Simulation */}
                      <Box 
                        sx={{ 
                          bgcolor: "rgba(0,0,0,0.3)", 
                          p: 2, 
                          borderRadius: "12px", 
                          border: "1px solid rgba(255,255,255,0.05)",
                          fontFamily: "'Fira Code', monospace",
                          mt: 'auto'
                        }}
                      >
                        <Stack spacing={1}>
                          {wing.terminalLines.map((line, i) => (
                            <Typography 
                              key={i} 
                              sx={{ 
                                color: line.color || "white", 
                                fontSize: "0.75rem",
                                opacity: line.type === "command" ? 1 : 0.8
                              }}
                            >
                              {line.type === "command" ? "➜ " : "  "}{line.text}
                            </Typography>
                          ))}
                        </Stack>
                      </Box>

                      <Button 
                        variant="outlined"
                        fullWidth
                        endIcon={<ArrowForwardIcon />}
                        sx={{ 
                          color: wing.color, 
                          borderColor: `${wing.color}44`,
                          borderRadius: "12px",
                          py: 1.2,
                          textTransform: "none",
                          fontWeight: 700,
                          fontSize: "0.9rem",
                          "&:hover": {
                            borderColor: wing.color,
                            bgcolor: `${wing.color}11`,
                            transform: "translateX(5px)"
                          },
                          transition: "all 0.2s"
                        }}
                      >
                        Explore {wing.id.toUpperCase()}
                      </Button>
                    </Stack>
                  </Box>
                </TerminalContainer>
              </Grid>
            ))}
          </Grid>
        </Stack>
      </Box>
    </Box>
  );
}
