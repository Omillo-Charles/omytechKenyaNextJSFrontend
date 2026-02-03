"use client";

import React, { useState } from "react";
import { 
  Box, 
  Typography, 
  Stack, 
  Grid, 
  Button, 
  styled, 
  Container,
  Chip,
  Avatar,
  InputBase,
  IconButton
} from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Search as SearchIcon,
  CalendarMonth as CalendarIcon,
  Person as PersonIcon,
  LocalOffer as TagIcon,
  ArrowForward as ArrowIcon,
  Terminal as TerminalIcon,
  Code as CodeIcon,
  Computer as ComputerIcon,
  AutoGraph as TrendIcon
} from "@mui/icons-material";
import Link from "next/link";

const MotionBox = motion.create(Box);
const MotionTypography = motion.create(Typography);

const TerminalContainer = styled(MotionBox)(({ theme }) => ({
  width: "100%",
  height: "100%", // Ensure all cards fill the grid height
  display: "flex",
  flexDirection: "column",
  backgroundColor: "rgba(15, 23, 42, 0.8)",
  borderRadius: "24px",
  overflow: "hidden",
  border: "1px solid rgba(255, 255, 255, 0.08)",
  backdropFilter: "blur(20px)",
  boxShadow: "0 20px 50px rgba(0,0,0,0.4)",
  fontFamily: "'Fira Code', monospace",
  position: "relative",
  transition: "all 0.3s ease",
  "&:hover": {
    transform: "translateY(-5px)",
    borderColor: "rgba(59, 130, 246, 0.4)",
    boxShadow: "0 30px 60px rgba(0,0,0,0.6), 0 0 20px rgba(59, 130, 246, 0.2)",
  }
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
      <Box sx={{ width: 10, height: 10, borderRadius: "50%", bgcolor: "#ff5f56" }} />
      <Box sx={{ width: 10, height: 10, borderRadius: "50%", bgcolor: "#ffbd2e" }} />
      <Box sx={{ width: 10, height: 10, borderRadius: "50%", bgcolor: "#27c93f" }} />
    </Stack>
    <Stack direction="row" spacing={1} alignItems="center">
      <Box sx={{ color: "rgba(255,255,255,0.4)", display: "flex", fontSize: "0.8rem" }}>{icon}</Box>
      <Typography variant="caption" sx={{ color: "rgba(255,255,255,0.4)", fontWeight: 700, fontFamily: "'Fira Code', monospace", fontSize: "0.6rem" }}>
        {title}
      </Typography>
    </Stack>
  </Box>
);

const getDynamicDate = (daysAgo) => {
  const date = new Date();
  date.setDate(date.getDate() - daysAgo);
  return date.toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' });
};

const blogPosts = [
  {
    id: 1,
    title: "The Rise of AI in Modern Software Development",
    excerpt: "Exploring how Large Language Models are transforming the way developers write, test, and deploy code in 2024 and beyond.",
    author: "Charles Omillo",
    date: getDynamicDate(0), // Today
    category: "Artificial Intelligence",
    readTime: "8 min read",
    tags: ["AI", "LLM", "Coding"],
    icon: <CodeIcon fontSize="small" />
  },
  {
    id: 2,
    title: "Edge Computing: The Future of Distributed Systems",
    excerpt: "Why shifting processing power closer to the data source is becoming critical for low-latency applications and IoT ecosystems.",
    author: "Tech Team",
    date: getDynamicDate(2), // 2 days ago
    category: "Cloud Architecture",
    readTime: "6 min read",
    tags: ["Edge", "IoT", "Cloud"],
    icon: <ComputerIcon fontSize="small" />
  },
  {
    id: 3,
    title: "Securing Your Next.js Applications",
    excerpt: "A deep dive into security best practices for Next.js 14, including Server Actions, CSP headers, and robust authentication patterns.",
    author: "Security Expert",
    date: getDynamicDate(5), // 5 days ago
    category: "Cybersecurity",
    readTime: "10 min read",
    tags: ["Next.js", "Security", "WebDev"],
    icon: <TerminalIcon fontSize="small" />
  },
  {
    id: 4,
    title: "The Evolution of UI/UX in the AI Era",
    excerpt: "How generative interfaces and personalized user experiences are redefining the boundaries of digital product design.",
    author: "Design Lead",
    date: getDynamicDate(7), // 7 days ago
    category: "Design",
    readTime: "7 min read",
    tags: ["UI/UX", "Design", "AI"],
    icon: <TrendIcon fontSize="small" />
  },
  {
    id: 5,
    title: "Rust vs Go: Choosing the Right Tool for Systems",
    excerpt: "A comprehensive comparison of Rust and Go for backend services, focusing on performance, safety, and developer productivity.",
    author: "Backend Specialist",
    date: getDynamicDate(10), // 10 days ago
    category: "Backend Development",
    readTime: "12 min read",
    tags: ["Rust", "Go", "Backend"],
    icon: <CodeIcon fontSize="small" />
  },
  {
    id: 6,
    title: "Scaling Microservices with Kubernetes",
    excerpt: "Lessons learned from managing high-traffic microservices architectures and optimizing resource allocation in K8s clusters.",
    author: "DevOps Team",
    date: getDynamicDate(14), // 14 days ago
    category: "DevOps",
    readTime: "9 min read",
    tags: ["K8s", "Scale", "Microservices"],
    icon: <ComputerIcon fontSize="small" />
  },
  {
    id: 7,
    title: "The Impact of Web3 on Data Privacy",
    excerpt: "Understanding how decentralized protocols and blockchain technology are reshaping our understanding of digital ownership.",
    author: "Web3 Researcher",
    date: getDynamicDate(20), // 20 days ago
    category: "Web3",
    readTime: "11 min read",
    tags: ["Web3", "Privacy", "Blockchain"],
    icon: <TerminalIcon fontSize="small" />
  },
  {
    id: 8,
    title: "Optimizing Web Performance in 2024",
    excerpt: "Going beyond Core Web Vitals: Modern techniques for faster rendering, efficient asset loading, and improved interactivity.",
    author: "Frontend Lead",
    date: getDynamicDate(25), // 25 days ago
    category: "Frontend",
    readTime: "8 min read",
    tags: ["Performance", "Web", "Optimization"],
    icon: <TrendIcon fontSize="small" />
  }
];

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = blogPosts.filter(post => 
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "#020617", pt: { xs: 4, md: 6 }, pb: 12 }}>
      <Container maxWidth="xl">
        {/* Blog Grid */}
        <Grid container spacing={4} justifyContent="center">
          <AnimatePresence mode="popLayout">
            {filteredPosts.map((post, index) => (
              <Grid item xs={12} md={6} lg={4} key={post.id} sx={{ display: 'flex' }}>
                <TerminalContainer
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <TerminalHeader title={`post_id_${post.id}.md`} icon={post.icon} />
                  
                  <Box sx={{ p: 4, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                    <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
                      <Chip 
                        label={post.category} 
                        size="small"
                        sx={{ 
                          bgcolor: "rgba(59, 130, 246, 0.1)", 
                          color: "#3b82f6",
                          fontWeight: 700,
                          fontSize: "0.65rem",
                          fontFamily: "'Fira Code', monospace",
                          border: "1px solid rgba(59, 130, 246, 0.2)"
                        }}
                      />
                      <Typography variant="caption" sx={{ color: "rgba(255,255,255,0.4)", display: "flex", alignItems: "center", gap: 0.5 }}>
                        <CalendarIcon sx={{ fontSize: "0.8rem" }} /> {post.date}
                      </Typography>
                    </Stack>

                    <Typography variant="h5" sx={{ 
                      color: "#ffffff", 
                      fontWeight: 800, 
                      mb: 2, 
                      lineHeight: 1.3,
                      height: "3.4rem",
                      overflow: "hidden",
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical"
                    }}>
                      {post.title}
                    </Typography>

                    <Typography variant="body2" sx={{ 
                      color: "rgba(255,255,255,0.5)", 
                      mb: 3,
                      height: "4rem",
                      overflow: "hidden",
                      display: "-webkit-box",
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: "vertical",
                      flexGrow: 1 // Push the footer to the bottom
                    }}>
                      {post.excerpt}
                    </Typography>

                    <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ pt: 3, borderTop: "1px solid rgba(255,255,255,0.05)", mt: 'auto' }}>
                      <Stack direction="row" spacing={1} alignItems="center">
                        <Avatar sx={{ width: 24, height: 24, bgcolor: "#3b82f6", fontSize: "0.7rem", fontWeight: 800 }}>
                          {post.author[0]}
                        </Avatar>
                        <Typography variant="caption" sx={{ color: "rgba(255,255,255,0.7)", fontWeight: 600 }}>
                          {post.author}
                        </Typography>
                      </Stack>
                      <Link href={`/blog/${post.id}`} style={{ textDecoration: "none" }}>
                        <Button 
                          endIcon={<ArrowIcon sx={{ fontSize: "1rem" }} />}
                          sx={{ 
                            color: "#3b82f6", 
                            textTransform: "none",
                            fontWeight: 800,
                            fontFamily: "'Fira Code', monospace",
                            fontSize: "0.75rem",
                            "&:hover": { bgcolor: "transparent", color: "#60a5fa" }
                          }}
                        >
                          READ_MORE
                        </Button>
                      </Link>
                    </Stack>
                  </Box>
                </TerminalContainer>
              </Grid>
            ))}
          </AnimatePresence>
        </Grid>

        {/* Empty State */}
        {filteredPosts.length === 0 && (
          <Box sx={{ textAlign: "center", py: 12 }}>
            <Typography sx={{ color: "rgba(255,255,255,0.4)", fontFamily: "'Fira Code', monospace" }}>
              ERROR: NO_POSTS_FOUND_MATCHING_YOUR_QUERY
            </Typography>
          </Box>
        )}
      </Container>
    </Box>
  );
}
