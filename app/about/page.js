"use client";

import React from "react";
import { 
  Box, 
  Typography, 
  Stack, 
  Grid, 
  styled,
  useTheme,
  useMediaQuery,
  Avatar
} from "@mui/material";
import { motion } from "framer-motion";
import { 
  Terminal as TerminalIcon,
  Code as CodeIcon,
  Groups as GroupsIcon,
  RocketLaunch as RocketIcon,
  Hub as HubIcon,
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

export default function AboutPage() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const coreValues = [
    {
      icon: <CodeIcon sx={{ color: "#3b82f6" }} />,
      title: "Technical Excellence",
      desc: "We build with precision, leveraging modern stacks and clean architecture to deliver robust solutions.",
      cmd: "git log --oneline -n 1"
    },
    {
      icon: <HubIcon sx={{ color: "#10b981" }} />,
      title: "Collaborative Innovation",
      desc: "Working as partners with our clients, we bridge the gap between complex problems and digital success.",
      cmd: "npm run collaborate"
    },
    {
      icon: <SecurityIcon sx={{ color: "#facc15" }} />,
      title: "Security First",
      desc: "Every line of code is written with security in mind, ensuring your data and users remain protected.",
      cmd: "shodan scan --deep"
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
          {/* Mission Statement */}
          <Grid item xs={12} sx={{ width: "100%", px: { xs: 0, md: 2 }, mb: { xs: 2, md: 0 } }}>
            <TerminalContainer
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              sx={{ borderRadius: "24px", width: "100%" }}
            >
              <TerminalHeader title="mission_control" icon={<RocketIcon fontSize="small" />} />
              <Box sx={{ p: { xs: 3, md: 6 } }}>
                <Typography 
                  variant="h4" 
                  sx={{ 
                    color: "white", 
                    fontWeight: 900, 
                    mb: 3, 
                    fontFamily: "'Fira Code', monospace",
                    fontSize: { xs: "1.75rem", md: "2.5rem" }
                  }}
                >
                  WHO_WE_ARE
                </Typography>
                <Typography 
                  variant="body1" 
                  sx={{ 
                    color: "rgba(255,255,255,0.7)", 
                    lineHeight: 1.8, 
                    mb: 4,
                    fontSize: { xs: "1rem", md: "1.1rem" }
                  }}
                >
                  At <Box component="span" sx={{ color: "#3b82f6", fontWeight: 700 }}>OMYTECH KENYA</Box>, we are more than just a software agency. 
                  We are a collective of engineers, designers, and strategists dedicated to 
                  transforming ambitious ideas into powerful digital realities.
                </Typography>
                <Box 
                  sx={{ 
                    p: 2, 
                    bgcolor: "rgba(16, 185, 129, 0.05)", 
                    borderRadius: "12px", 
                    border: "1px solid rgba(16, 185, 129, 0.2)" 
                  }}
                >
                  <Typography sx={{ color: "#10b981", fontFamily: "'Fira Code', monospace", fontSize: "0.85rem" }}>
                    ➜ root@omytech:~# cat vision.txt<br/>
                    "To empower Kenyan and global businesses through innovative, secure, and scalable technology solutions."
                  </Typography>
                </Box>
              </Box>
            </TerminalContainer>
          </Grid>

          {/* Core Values Grid */}
          {coreValues.map((value, i) => (
            <Grid item xs={12} md={4} key={i} sx={{ width: "100%", px: { xs: 0, md: 2 }, mb: { xs: 2, md: 0 } }}>
              <TerminalContainer
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + (i * 0.1) }}
                sx={{ height: "100%", borderRadius: "20px", width: "100%" }}
              >
                <TerminalHeader title="core_value" icon={value.icon} />
                <Box sx={{ p: 3 }}>
                  <Typography variant="subtitle2" sx={{ color: "rgba(255,255,255,0.3)", mb: 1, fontSize: "0.6rem" }}>
                    ➜ {value.cmd}
                  </Typography>
                  <Typography variant="h6" sx={{ color: "white", fontWeight: 800, mb: 2, fontSize: "1.1rem" }}>
                    {value.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.6)", lineHeight: 1.6 }}>
                    {value.desc}
                  </Typography>
                </Box>
              </TerminalContainer>
            </Grid>
          ))}

          {/* Stats Card */}
          <Grid item xs={12} md={6} sx={{ width: "100%", px: { xs: 0, md: 2 }, mb: { xs: 2, md: 0 } }}>
            <TerminalContainer
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              sx={{ borderRadius: "24px", height: "100%", width: "100%" }}
            >
              <TerminalHeader title="system_stats" icon={<TerminalIcon fontSize="small" />} />
              <Box sx={{ p: 4 }}>
                <Grid container spacing={3}>
                  {[
                    { label: "UPTIME", value: "99.9%", color: "#10b981" },
                    { label: "PROJECTS", value: "50+", color: "#3b82f6" },
                    { label: "ENGINEERS", value: "12", color: "#facc15" },
                    { label: "CLIENT_SAT", value: "100%", color: "#ec4899" }
                  ].map((stat, i) => (
                    <Grid item xs={6} key={i}>
                      <Typography sx={{ color: "rgba(255,255,255,0.4)", fontSize: "0.7rem", fontWeight: 800, mb: 0.5 }}>
                        {stat.label}
                      </Typography>
                      <Typography sx={{ color: stat.color, fontSize: { xs: "1.2rem", md: "1.5rem" }, fontWeight: 900, fontFamily: "'Fira Code', monospace" }}>
                        {stat.value}
                      </Typography>
                    </Grid>
                  ))}
                </Grid>
              </Box>
              <Box sx={{ bgcolor: "rgba(255,255,255,0.02)", p: 2, borderTop: "1px solid rgba(255,255,255,0.05)" }}>
                <Typography variant="caption" sx={{ color: "rgba(255,255,255,0.2)", fontSize: "0.6rem" }}>
                  LOAD_AVERAGE: 0.42 0.38 0.35
                </Typography>
              </Box>
            </TerminalContainer>
          </Grid>

          {/* Community Card */}
          <Grid item xs={12} md={6} sx={{ width: "100%", px: { xs: 0, md: 2 }, mb: { xs: 2, md: 0 }, pb: { xs: 3, md: 0 } }}>
            <TerminalContainer
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              sx={{ borderRadius: "24px", height: "100%", width: "100%" }}
            >
              <TerminalHeader title="community_outreach" icon={<GroupsIcon fontSize="small" />} />
              <Box sx={{ p: 4 }}>
                <Typography sx={{ color: "white", fontWeight: 800, mb: 2 }}>Join Our Journey</Typography>
                <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.6)", mb: 3 }}>
                  We're always looking for talented individuals and ambitious partners. Let's build the future together.
                </Typography>
                <Box 
                  component="a" 
                  href="/contact"
                  sx={{ 
                    display: "block",
                    p: 2, 
                    textAlign: "center",
                    bgcolor: "rgba(59, 130, 246, 0.1)", 
                    color: "#3b82f6",
                    borderRadius: "12px",
                    border: "1px solid rgba(59, 130, 246, 0.3)",
                    textDecoration: "none",
                    fontWeight: 700,
                    transition: "all 0.2s",
                    "&:hover": { bgcolor: "rgba(59, 130, 246, 0.2)", transform: "translateY(-2px)" }
                  }}
                >
                  CONNECT_NOW
                </Box>
              </Box>
            </TerminalContainer>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}