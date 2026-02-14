"use client";

import React from "react";
import { 
  Box, 
  Container, 
  Typography, 
  Button, 
  Stack, 
  Grid, 
  useTheme, 
  useMediaQuery,
  Paper,
  styled
} from "@mui/material";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { 
  PlayArrow as PlayIcon, 
  ArrowForward as ArrowIcon,
  RocketLaunch as RocketIcon,
  Layers as LayersIcon,
  TrendingUp as TrendingIcon,
  Code as CodeIcon,
  Storage as StorageIcon,
  Dashboard as DashboardIcon,
  BarChart as ChartIcon,
  Speed as SpeedIcon,
  Public as GlobalIcon,
  CheckCircle as CheckIcon,
  MoreHoriz as MoreIcon
} from "@mui/icons-material";

// Wrap MUI components with framer-motion
const MotionBox = motion.create(Box);
const MotionTypography = motion.create(Typography);
const MotionStack = motion.create(Stack);
const MotionPaper = motion.create(Paper);

const DashboardCard = styled(MotionPaper)(({ theme, color }) => ({
  padding: "24px",
  borderRadius: "32px",
  backgroundColor: "#0f172a", // Deep Navy
  border: "1px solid rgba(255, 255, 255, 0.05)",
  boxShadow: "0 20px 50px rgba(0, 0, 0, 0.3)",
  position: "relative",
  overflow: "hidden",
  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: "2px",
    background: `linear-gradient(90deg, transparent, ${color || "#0072ce"}, transparent)`,
    opacity: 0,
    transition: "opacity 0.4s ease",
  },
  "&:hover": {
    transform: "translateY(-10px) scale(1.02)",
    boxShadow: `0 30px 60px rgba(0, 0, 0, 0.4), 0 0 20px ${color || "#0072ce"}33`,
    borderColor: "rgba(255, 255, 255, 0.1)",
    "&::before": {
      opacity: 1,
    },
    "& .icon-box": {
      backgroundColor: color || "#0072ce",
      color: "white",
      transform: "scale(1.1) rotate(8deg)",
      boxShadow: `0 0 20px ${color || "#0072ce"}66`,
    },
    "& .project-line": {
      width: "100%",
      opacity: 0.6
    }
  }
}));

const IconBox = styled(Box)(({ theme, color }) => ({
  width: "52px",
  height: "52px",
  borderRadius: "16px",
  backgroundColor: "rgba(255, 255, 255, 0.03)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: color || "#3b82f6",
  transition: "all 0.4s ease",
  marginBottom: "20px",
  border: "1px solid rgba(255, 255, 255, 0.05)"
}));

const ProjectBadge = styled(Box)(({ color }) => ({
  display: "inline-flex",
  alignItems: "center",
  padding: "4px 12px",
  borderRadius: "100px",
  backgroundColor: `${color || "#10b981"}15`,
  color: color || "#10b981",
  fontSize: "0.65rem",
  fontWeight: 900,
  textTransform: "uppercase",
  letterSpacing: "1px",
  border: `1px solid ${color || "#10b981"}33`
}));

const AnimatedLine = styled(Box)(({ color }) => ({
  height: "2px",
  width: "0%",
  backgroundColor: color || "#0072ce",
  opacity: 0,
  transition: "all 0.6s ease",
  position: "absolute",
  bottom: 0,
  left: 0
}));

export default function Hero() {
  const theme = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const projects = [
    { name: "Kijiji Cloud", category: "Infrastructure", status: "Active", icon: <StorageIcon />, color: "#3b82f6", latency: "12ms", uptime: "99.9%" },
    { name: "Soko Hub", category: "Marketplace", status: "Live", icon: <GlobalIcon />, color: "#10b981", latency: "18ms", uptime: "100%" },
    { name: "PayGate KE", category: "Fintech", status: "Secured", icon: <ChartIcon />, color: "#8b5cf6", latency: "24ms", uptime: "99.8%" },
    { name: "Nexus CRM", category: "Analytics", status: "Beta", icon: <DashboardIcon />, color: "#f59e0b", latency: "42ms", uptime: "98.5%" }
  ];

  const terminalLines = [
    { text: "ssh visitor@omytech.co.ke", type: "command" },
    { text: "Access granted! Welcome to the future of African Tech.", type: "response", color: "#10b981" },
    { text: "cat greetings.txt", type: "command" },
    { text: "Jambo! We're thrilled to have you here at OMYTECH Kenya.", type: "response", color: "#3b82f6" },
    { text: "Your journey to digital excellence starts right here.", type: "response", color: "#ffffff" },
    { text: "omytech init --welcome-user", type: "command" },
    { text: "Loading innovation workspace... [100%]", type: "response", color: "#f59e0b" },
    { text: "System Ready. How can we build together today?", type: "response", color: "#3b82f6" },
  ];

  if (!mounted) {
    return (
      <Box 
        sx={{ 
          minHeight: "100vh",
          backgroundColor: "#080c14",
        }}
      />
    );
  }

  return (
    <Box 
      component="section" 
      sx={{ 
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        pt: { xs: 2, md: 4 },
        pb: { xs: 8, md: 12 },
        overflow: "hidden",
        backgroundColor: "#080c14",
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
      
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <MotionStack 
          spacing={6}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          sx={{ alignItems: "center", textAlign: "center" }}
        >
          {/* Terminal Component */}
          <MotionBox
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            sx={{ 
              width: "100%",
              maxWidth: "900px",
              bgcolor: "rgba(15, 23, 42, 0.8)",
              borderRadius: "24px",
              overflow: "hidden",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              backdropFilter: "blur(20px)",
              boxShadow: "0 40px 100px rgba(0,0,0,0.6)",
              fontFamily: "'Fira Code', monospace",
              position: "relative"
            }}
          >
            {/* Terminal Header */}
            <Box sx={{ bgcolor: "rgba(255,255,255,0.03)", px: 3, py: 1.5, borderBottom: "1px solid rgba(255, 255, 255, 0.05)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <Stack direction="row" spacing={1.5}>
                <Box sx={{ width: 12, height: 12, borderRadius: "50%", bgcolor: "#ef4444", opacity: 0.8 }} />
                <Box sx={{ width: 12, height: 12, borderRadius: "50%", bgcolor: "#f59e0b", opacity: 0.8 }} />
                <Box sx={{ width: 12, height: 12, borderRadius: "50%", bgcolor: "#10b981", opacity: 0.8 }} />
              </Stack>
              <Typography variant="caption" sx={{ color: "rgba(255,255,255,0.3)", fontWeight: 700, letterSpacing: 1 }}>
                omytech — bash — 980×540
              </Typography>
            </Box>

            {/* Terminal Body */}
            <Box sx={{ p: 4, minHeight: "320px", textAlign: "left" }}>
              <Stack spacing={1.5}>
                {terminalLines.map((line, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + (i * 0.2) }}
                  >
                    <Typography 
                      component="div"
                      sx={{ 
                        color: line.type === "command" ? "#ffffff" : (line.color || "#64748b"), 
                        fontWeight: line.type === "command" ? 700 : 500, 
                        fontSize: "0.95rem",
                        letterSpacing: 0.5,
                        display: "flex",
                        alignItems: "center",
                        gap: 1.5
                      }}
                    >
                      {line.type === "command" && (
                        <Box component="span" sx={{ color: "#3b82f6" }}>➜</Box>
                      )}
                      {line.type === "command" && (
                        <Box component="span" sx={{ color: "#10b981" }}>~</Box>
                      )}
                      {line.text}
                    </Typography>
                  </motion.div>
                ))}
                <motion.div
                  animate={{ opacity: [1, 0] }}
                  transition={{ repeat: Infinity, duration: 0.8 }}
                >
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                    <Box component="span" sx={{ color: "#3b82f6", fontWeight: 700 }}>➜</Box>
                    <Box component="span" sx={{ color: "#10b981", fontWeight: 700 }}>~</Box>
                    <Box sx={{ width: 10, height: 20, bgcolor: "#3b82f6", mt: 0.5 }} />
                  </Box>
                </motion.div>
              </Stack>
            </Box>
          </MotionBox>

          {/* Action Buttons */}
          <MotionStack 
            direction={{ xs: "column", sm: "row" }} 
            spacing={3}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.5, duration: 0.8 }}
            sx={{ width: { xs: "90%", sm: "auto" } }}
          >
            <Button
              component={Link}
              href="/contact"
              variant="contained"
              size="large"
              sx={{ 
                bgcolor: "rgba(59, 130, 246, 0.1)",
                color: "#3b82f6",
                px: 6,
                py: 2,
                borderRadius: "12px",
                fontWeight: 900,
                textTransform: "uppercase",
                fontSize: "0.95rem",
                letterSpacing: "2px",
                border: "1px solid #3b82f6",
                boxShadow: "0 0 20px rgba(59, 130, 246, 0.2)",
                width: { xs: "100%", sm: "auto" },
                position: "relative",
                overflow: "hidden",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: "-100%",
                  width: "100%",
                  height: "100%",
                  background: "linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.2), transparent)",
                  transition: "0.5s",
                },
                "&:hover": {
                  bgcolor: "rgba(59, 130, 246, 0.2)",
                  transform: "translateY(-3px)",
                  boxShadow: "0 0 30px rgba(59, 130, 246, 0.4)",
                  "&::before": {
                    left: "100%",
                  }
                },
                transition: "all 0.3s"
              }}
            >
              Initialize Project
            </Button>
            
            <Button
              component={Link}
              href="/services"
              variant="outlined"
              size="large"
              sx={{ 
                color: "rgba(255,255,255,0.7)",
                borderColor: "rgba(255,255,255,0.1)",
                px: 6,
                py: 2,
                borderRadius: "12px",
                fontWeight: 800,
                textTransform: "uppercase",
                fontSize: "0.95rem",
                letterSpacing: "2px",
                backdropFilter: "blur(10px)",
                width: { xs: "100%", sm: "auto" },
                "&:hover": {
                  borderColor: "white",
                  color: "white",
                  bgcolor: "rgba(255, 255, 255, 0.05)",
                  transform: "translateY(-3px)",
                  boxShadow: "0 0 20px rgba(255,255,255,0.1)",
                }
              }}
            >
              System Solutions
            </Button>
          </MotionStack>
        </MotionStack>
      </Container>
    </Box>
  );
}
