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
  HomeWork as HomeIcon,
  Storefront as StoreIcon,
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

const products = [
  {
    id: "keja",
    name: ".keja",
    tagline: "Rental Management System",
    description: "A comprehensive solution for property owners and managers to automate rent collection, tenant management, and maintenance requests.",
    icon: <HomeIcon />,
    color: "#10b981", // Emerald
    githubUrl: "https://github.com/Omillo-Charles/.keja",
    features: [
      "Automated Rent Invoicing",
      "Tenant Portal & Communication",
      "Maintenance Tracking",
      "Financial Reporting",
      "Property Analytics"
    ],
    terminalLines: [
      { text: "omytech init --product keja", type: "command" },
      { text: "Connecting to property database...", type: "response", color: "#64748b" },
      { text: "Syncing tenant ledger [v2.4.0]...", type: "response", color: "#10b981" },
      { text: "Optimizing collection protocols...", type: "response", color: "#3b82f6" },
      { text: "Status: Management Suite Active", type: "response", color: "#ffffff" },
    ]
  },
  {
    id: "soko",
    name: ".soko",
    tagline: "Multivendor E-commerce Platform",
    description: "A scalable marketplace engine that empowers multiple vendors to sell their products while providing a seamless shopping experience for customers.",
    icon: <StoreIcon />,
    color: "#3b82f6", // Blue
    githubUrl: "https://github.com/Omillo-Charles/.soko",
    features: [
      "Vendor Dashboard & Management",
      "Secure Payment Integration",
      "Inventory & Order Tracking",
      "Customer Reviews & Ratings",
      "Advanced Search & Filters"
    ],
    terminalLines: [
      { text: "omytech init --product soko", type: "command" },
      { text: "Booting multivendor engine...", type: "response", color: "#64748b" },
      { text: "Initializing merchant gateways...", type: "response", color: "#3b82f6" },
      { text: "Caching product catalog...", type: "response", color: "#8b5cf6" },
      { text: "Status: Marketplace Engine Online", type: "response", color: "#ffffff" },
    ]
  }
];

export default function ProductsPage() {
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
              OUR_PRODUCTS
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
              Enterprise-grade solutions built to solve real-world challenges. 
              Our products combine technical excellence with intuitive user experiences.
            </Typography>
          </Box>

          {/* Products Grid */}
          <Grid 
            container 
            spacing={{ xs: 3, md: 4 }} 
            sx={{ 
              alignItems: "stretch",
              width: "100%",
              margin: 0
            }}
          >
            {products.map((product, index) => (
              <Grid item xs={12} md={6} key={product.id} sx={{ width: "100%", px: { xs: 0, md: 2 }, mb: { xs: 2, md: 0 } }}>
                <TerminalContainer
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <TerminalHeader title={`product::${product.id}`} icon={product.icon} color={product.color} />
                  
                  <Box sx={{ p: { xs: 3, md: 5 }, flexGrow: 1 }}>
                    <Stack spacing={4}>
                      <Box>
                        <Typography 
                          variant="h3" 
                          sx={{ 
                            color: product.color, 
                            fontWeight: 900, 
                            fontFamily: "'Fira Code', monospace",
                            fontSize: { xs: "2.5rem", md: "3.5rem" },
                            mb: 1
                          }}
                        >
                          {product.name}
                        </Typography>
                        <Typography 
                          variant="h6" 
                          sx={{ 
                            color: "white", 
                            fontWeight: 700, 
                            opacity: 0.9,
                            mb: 2
                          }}
                        >
                          {product.tagline}
                        </Typography>
                        <Typography 
                          variant="body1" 
                          sx={{ 
                            color: "rgba(255,255,255,0.7)", 
                            lineHeight: 1.7,
                            fontSize: "1rem"
                          }}
                        >
                          {product.description}
                        </Typography>
                      </Box>

                      {/* Features List */}
                      <Box>
                        <Typography 
                          sx={{ 
                            color: "rgba(255,255,255,0.3)", 
                            fontSize: "0.75rem", 
                            fontWeight: 800, 
                            letterSpacing: 2, 
                            mb: 2,
                            textTransform: "uppercase"
                          }}
                        >
                          [ KEY_FEATURES ]
                        </Typography>
                        <Grid container spacing={2}>
                          {product.features.map((feature, i) => (
                            <Grid item xs={12} sm={6} key={i}>
                              <Stack direction="row" spacing={1.5} alignItems="center">
                                <CheckIcon sx={{ color: product.color, fontSize: "1.1rem" }} />
                                <Typography sx={{ color: "rgba(255,255,255,0.8)", fontSize: "0.9rem" }}>
                                  {feature}
                                </Typography>
                              </Stack>
                            </Grid>
                          ))}
                        </Grid>
                      </Box>

                      {/* Terminal Simulation */}
                      <Box 
                        sx={{ 
                          bgcolor: "rgba(0,0,0,0.3)", 
                          p: 2, 
                          borderRadius: "12px", 
                          border: "1px solid rgba(255,255,255,0.05)",
                          fontFamily: "'Fira Code', monospace"
                        }}
                      >
                        <Stack spacing={1}>
                          {product.terminalLines.map((line, i) => (
                            <Typography 
                              key={i} 
                              sx={{ 
                                color: line.color || "white", 
                                fontSize: "0.8rem",
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
                        component="a"
                        href={product.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        endIcon={<ArrowForwardIcon />}
                        sx={{ 
                          color: product.color, 
                          borderColor: `${product.color}44`,
                          borderRadius: "12px",
                          py: 1.5,
                          textTransform: "none",
                          fontWeight: 700,
                          fontSize: "1rem",
                          "&:hover": {
                            borderColor: product.color,
                            bgcolor: `${product.color}11`,
                            transform: "translateX(5px)"
                          },
                          transition: "all 0.2s"
                        }}
                      >
                        View Product Repository
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