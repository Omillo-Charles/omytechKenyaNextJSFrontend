"use client";

import React from "react";
import { 
  Box, 
  Typography, 
  Stack, 
  Container, 
  Button, 
  styled,
  Avatar,
  Chip,
  Breadcrumbs
} from "@mui/material";
import { motion } from "framer-motion";
import { 
  ArrowBack as BackIcon,
  CalendarMonth as CalendarIcon,
  Person as PersonIcon,
  Schedule as TimeIcon,
  Terminal as TerminalIcon,
  Code as CodeIcon,
  Computer as ComputerIcon,
  AutoGraph as TrendIcon
} from "@mui/icons-material";
import Link from "next/link";
import { useParams } from "next/navigation";

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
      <Box sx={{ color: "rgba(255,255,255,0.4)", display: "flex" }}>{icon}</Box>
      <Typography variant="caption" sx={{ color: "rgba(255,255,255,0.4)", fontWeight: 700, fontFamily: "'Fira Code', monospace" }}>
        {title}
      </Typography>
    </Stack>
  </Box>
);

const blogPosts = [
  {
    id: 1,
    title: "The Rise of AI in Modern Software Development",
    content: `
      <p>The landscape of software development is undergoing a seismic shift. The integration of Artificial Intelligence (AI) and Large Language Models (LLMs) into the developer workflow is no longer a futuristic concept—it's the present reality.</p>
      
      <h3>1. The Era of AI-Assisted Coding</h3>
      <p>From GitHub Copilot to advanced agents, AI is helping developers write boilerplate code, debug complex issues, and even architect entire systems. This doesn't replace the developer but rather elevates their role from a "writer of code" to a "reviewer and architect."</p>
      
      <h3>2. Automating the Mundane</h3>
      <p>Repetitive tasks like unit testing, documentation, and pull request reviews are being revolutionized. AI can now generate comprehensive test suites and explain complex codebases in natural language, saving thousands of engineering hours.</p>
      
      <h3>3. The Future: Autonomous Agents</h3>
      <p>We are moving toward a future where autonomous AI agents can handle end-to-end feature development under human supervision. This allows engineering teams to focus on innovation and solving complex business problems rather than implementation details.</p>
    `,
    author: "Charles Omillo",
    date: "Feb 14, 2024",
    category: "Artificial Intelligence",
    readTime: "8 min read",
    tags: ["AI", "LLM", "Coding"],
    icon: <CodeIcon fontSize="small" />
  },
  {
    id: 2,
    title: "Edge Computing: The Future of Distributed Systems",
    content: `
      <p>As the number of IoT devices and high-speed applications grows, traditional cloud architectures are facing challenges with latency and bandwidth. Edge computing is emerging as the critical solution.</p>
      
      <h3>1. Bringing Compute Closer to Data</h3>
      <p>By processing data at the "edge" of the network—closer to where it's generated—we can achieve near-instantaneous response times. This is vital for applications like autonomous vehicles and industrial automation.</p>
      
      <h3>2. Reducing Bandwidth Costs</h3>
      <p>Instead of sending massive amounts of raw data to a central cloud, edge devices can filter and process data locally, only sending the necessary insights to the core. This significantly reduces network congestion and storage costs.</p>
      
      <h3>3. Enhanced Privacy and Security</h3>
      <p>Processing sensitive data locally rather than transmitting it across the internet improves privacy and reduces the attack surface for potential breaches.</p>
    `,
    author: "Tech Team",
    date: "Feb 12, 2024",
    category: "Cloud Architecture",
    readTime: "6 min read",
    tags: ["Edge", "IoT", "Cloud"],
    icon: <ComputerIcon fontSize="small" />
  },
  {
    id: 3,
    title: "Securing Your Next.js Applications",
    content: `
      <p>Security should never be an afterthought. With Next.js 14, we have more tools than ever to build robust, secure web applications from the ground up.</p>
      
      <h3>1. Leveraging Server Actions Safely</h3>
      <p>Server Actions provide a powerful way to handle data mutations, but they must be implemented with proper authorization and input validation to prevent common vulnerabilities.</p>
      
      <h3>2. Implementing Content Security Policy (CSP)</h3>
      <p>A strong CSP is one of the most effective defenses against Cross-Site Scripting (XSS). We'll explore how to configure CSP headers in Next.js middleware and layouts.</p>
      
      <h3>3. Robust Authentication Patterns</h3>
      <p>From Auth.js to custom JWT solutions, choosing the right authentication pattern and ensuring secure session management is critical for protecting user data.</p>
    `,
    author: "Security Expert",
    date: "Feb 09, 2024",
    category: "Cybersecurity",
    readTime: "10 min read",
    tags: ["Next.js", "Security", "WebDev"],
    icon: <TerminalIcon fontSize="small" />
  },
  {
    id: 4,
    title: "The Evolution of UI/UX in the AI Era",
    content: `
      <p>Artificial Intelligence is not just changing how we build software, but how users interact with it. We are entering a new era of personalized, generative user interfaces.</p>
      
      <h3>1. Beyond Static Layouts</h3>
      <p>The future of UI is dynamic. Interfaces will adapt in real-time to user behavior, intent, and context, providing a truly bespoke experience for every individual.</p>
      
      <h3>2. Conversational Interfaces</h3>
      <p>Natural language is becoming a primary mode of interaction. Designing intuitive, helpful, and accessible conversational flows is now a core competency for modern UI/UX designers.</p>
      
      <h3>3. AI-Driven Personalization</h3>
      <p>From predictive navigation to content recommendation, AI allows us to anticipate user needs and surface the right information at the right time, reducing cognitive load.</p>
    `,
    author: "Design Lead",
    date: "Feb 07, 2024",
    category: "Design",
    readTime: "7 min read",
    tags: ["UI/UX", "Design", "AI"],
    icon: <TrendIcon fontSize="small" />
  },
  {
    id: 5,
    title: "Rust vs Go: Choosing the Right Tool for Systems",
    content: `
      <p>The debate between Rust and Go is perennial in the systems programming world. Both languages offer unique strengths, and the choice often depends on the specific project requirements.</p>
      
      <h3>1. Performance and Safety with Rust</h3>
      <p>Rust's ownership model provides memory safety without a garbage collector, making it ideal for performance-critical systems where safety is paramount.</p>
      
      <h3>2. Productivity and Simplicity with Go</h3>
      <p>Go's simplicity, built-in concurrency primitives (goroutines), and fast compilation times make it a favorite for building scalable backend services and microservices quickly.</p>
      
      <h3>3. Making the Decision</h3>
      <p>We compare the two languages across several dimensions: ecosystem, learning curve, community support, and performance benchmarks to help you make an informed choice.</p>
    `,
    author: "Backend Specialist",
    date: "Feb 04, 2024",
    category: "Backend Development",
    readTime: "12 min read",
    tags: ["Rust", "Go", "Backend"],
    icon: <CodeIcon fontSize="small" />
  },
  {
    id: 6,
    title: "Scaling Microservices with Kubernetes",
    content: `
      <p>Kubernetes has become the de facto standard for container orchestration. But scaling microservices effectively in a K8s environment requires careful planning and optimization.</p>
      
      <h3>1. Horizontal Pod Autoscaling (HPA)</h3>
      <p>Learn how to configure HPA to automatically scale your pods based on CPU utilization, memory, or custom metrics to handle fluctuating traffic loads.</p>
      
      <h3>2. Resource Management and Quotas</h3>
      <p>Setting proper resource requests and limits is crucial for ensuring cluster stability and preventing noisy neighbors from impacting your services.</p>
      
      <h3>3. Service Mesh for Observability</h3>
      <p>Implementing a service mesh like Istio or Linkerd can provide deep visibility into your microservices communications, making it easier to debug and optimize performance at scale.</p>
    `,
    author: "DevOps Team",
    date: "Jan 31, 2024",
    category: "DevOps",
    readTime: "9 min read",
    tags: ["K8s", "Scale", "Microservices"],
    icon: <ComputerIcon fontSize="small" />
  }
];

export default function BlogPost() {
  const { id } = useParams();
  const post = blogPosts.find(p => p.id === parseInt(id));

  if (!post) {
    return (
      <Box sx={{ minHeight: "100vh", bgcolor: "#020617", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Typography sx={{ color: "white", fontFamily: "'Fira Code', monospace" }}>
          ERROR: POST_NOT_FOUND (404)
        </Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "#020617", pt: { xs: 4, md: 6 }, pb: 12 }}>
      <Container maxWidth="md">
        <Breadcrumbs 
          sx={{ 
            mb: 4, 
            color: "rgba(255,255,255,0.4)",
            "& .MuiBreadcrumbs-separator": { color: "rgba(255,255,255,0.2)" }
          }}
        >
          <Link href="/blog" style={{ color: "inherit", textDecoration: "none" }}>BLOG</Link>
          <Typography sx={{ color: "#3b82f6", fontWeight: 700, fontSize: "0.85rem" }}>{`POST_${post.id}`}</Typography>
        </Breadcrumbs>

        <TerminalContainer
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <TerminalHeader title={`view_source::${post.title.toLowerCase().replace(/ /g, '_')}.md`} icon={post.icon} />
          
          <Box sx={{ p: { xs: 3, md: 6 } }}>
            <Stack direction="row" spacing={2} sx={{ mb: 4 }} flexWrap="wrap" gap={1}>
              <Chip 
                label={post.category} 
                sx={{ 
                  bgcolor: "rgba(59, 130, 246, 0.1)", 
                  color: "#3b82f6",
                  fontWeight: 700,
                  fontFamily: "'Fira Code', monospace",
                  border: "1px solid rgba(59, 130, 246, 0.2)"
                }}
              />
              <Stack direction="row" spacing={1} alignItems="center" sx={{ color: "rgba(255,255,255,0.5)" }}>
                <CalendarIcon sx={{ fontSize: "1rem" }} />
                <Typography variant="caption">{post.date}</Typography>
              </Stack>
              <Stack direction="row" spacing={1} alignItems="center" sx={{ color: "rgba(255,255,255,0.5)" }}>
                <TimeIcon sx={{ fontSize: "1rem" }} />
                <Typography variant="caption">{post.readTime}</Typography>
              </Stack>
            </Stack>

            <Typography variant="h3" sx={{ 
              color: "#ffffff", 
              fontWeight: 900, 
              mb: 4, 
              lineHeight: 1.2,
              fontSize: { xs: "2rem", md: "3rem" }
            }}>
              {post.title}
            </Typography>

            <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 6, pb: 4, borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
              <Avatar sx={{ width: 48, height: 48, bgcolor: "#3b82f6", fontWeight: 800 }}>
                {post.author[0]}
              </Avatar>
              <Box>
                <Typography sx={{ color: "#ffffff", fontWeight: 700 }}>{post.author}</Typography>
                <Typography variant="caption" sx={{ color: "rgba(255,255,255,0.4)" }}>Technical Engineering Team</Typography>
              </Box>
            </Stack>

            <Box 
              sx={{ 
                color: "rgba(255,255,255,0.8)",
                lineHeight: 1.8,
                fontSize: "1.1rem",
                "& h3": { color: "#ffffff", mt: 4, mb: 2, fontWeight: 800 },
                "& p": { mb: 3 },
                "& .highlight": { color: "#3b82f6", fontWeight: 700 }
              }}
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            <Box sx={{ mt: 8, pt: 4, borderTop: "1px solid rgba(255,255,255,0.05)" }}>
              <Typography sx={{ color: "rgba(255,255,255,0.4)", mb: 2, fontWeight: 700, fontSize: "0.8rem" }}>TAGS_INDEX</Typography>
              <Stack direction="row" spacing={1}>
                {post.tags.map(tag => (
                  <Chip 
                    key={tag} 
                    label={`#${tag}`} 
                    variant="outlined"
                    sx={{ 
                      color: "rgba(255,255,255,0.6)", 
                      borderColor: "rgba(255,255,255,0.1)",
                      fontSize: "0.75rem",
                      "&:hover": { bgcolor: "rgba(255,255,255,0.05)" }
                    }}
                  />
                ))}
              </Stack>
            </Box>

            <Box sx={{ mt: 8, textAlign: "center" }}>
              <Link href="/blog" style={{ textDecoration: "none" }}>
                <Button 
                  startIcon={<BackIcon />}
                  sx={{ 
                    color: "rgba(255,255,255,0.4)", 
                    textTransform: "none",
                    fontWeight: 800,
                    fontFamily: "'Fira Code', monospace",
                    "&:hover": { color: "#3b82f6", bgcolor: "transparent" }
                  }}
                >
                  RETURN_TO_LOGS
                </Button>
              </Link>
            </Box>
          </Box>
        </TerminalContainer>
      </Container>
    </Box>
  );
}
