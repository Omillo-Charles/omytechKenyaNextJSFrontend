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

const getDynamicDate = (daysAgo) => {
  const date = new Date();
  date.setDate(date.getDate() - daysAgo);
  return date.toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' });
};

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
    date: getDynamicDate(0), // Today
    category: "Artificial Intelligence",
    readTime: "8 min read",
    tags: ["AI", "LLM", "Coding"],
    icon: <CodeIcon fontSize="small" />
  },
  {
    id: 2,
    title: "Edge Computing: The Future of Distributed Systems",
    content: `
      <p>As the demand for real-time processing grows, traditional cloud architectures are reaching their limits. Edge computing is emerging as the solution for low-latency, high-bandwidth applications.</p>
      
      <h3>Why Edge Matters</h3>
      <p>By moving computation closer to the data source—be it an IoT device, a smartphone, or a local server—we reduce the distance data must travel. This is critical for autonomous vehicles, industrial automation, and immersive gaming.</p>
      
      <h3>The Hybrid Approach</h3>
      <p>The future isn't "Edge vs. Cloud," but rather a seamless continuum. Critical real-time decisions happen at the edge, while heavy processing and long-term storage remain in the centralized cloud.</p>
    `,
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
    content: `
      <p>Security is not a feature; it's a foundation. With Next.js 14, developers have more power than ever, but also new responsibilities to keep user data safe.</p>
      
      <h3>Server Components and Data Safety</h3>
      <p>React Server Components (RSC) change how we handle sensitive data. Learn how to use 'server-only' packages and secure data fetching patterns to prevent accidental leaks to the client.</p>
      
      <h3>Modern Authentication</h3>
      <p>Implementing robust authentication using NextAuth.js (Auth.js) and integrating with modern providers. We explore session management, JWT security, and multi-factor authentication strategies.</p>
    `,
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
    content: `
      <p>Generative AI is not just changing how we build; it's changing what we build. Interfaces are becoming more fluid, personalized, and proactive.</p>
      
      <h3>Generative Interfaces</h3>
      <p>Imagine a UI that morphs based on the user's intent. Instead of static dashboards, we are building dynamic experiences that present the right information at the right time using AI-driven insights.</p>
      
      <h3>Accessibility First</h3>
      <p>AI is making the web more accessible than ever. From automated alt-text to real-time voice-to-interface interactions, we are breaking down barriers for all users.</p>
    `,
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
    content: `
      <p>The debate between Rust and Go continues. Both are excellent languages, but they serve different purposes in the modern stack.</p>
      
      <h3>Rust: The Power of Safety</h3>
      <p>Rust offers memory safety without a garbage collector. It's the go-to for performance-critical systems, browser engines, and anywhere you need absolute control over resources.</p>
      
      <h3>Go: The Power of Simplicity</h3>
      <p>Go's philosophy of simplicity and built-in concurrency (goroutines) makes it the king of cloud-native development and microservices. It's built for developer productivity and massive scale.</p>
    `,
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
    content: `
      <p>Kubernetes has become the operating system of the cloud. But scaling microservices effectively requires more than just deploying a cluster.</p>
      
      <h3>Resource Optimization</h3>
      <p>Understanding requests and limits, Horizontal Pod Autoscaling (HPA), and how to optimize your resource usage to save costs while maintaining performance.</p>
      
      <h3>Observability</h3>
      <p>You can't manage what you can't measure. Integrating Prometheus, Grafana, and Jaeger for full-stack visibility into your distributed systems.</p>
    `,
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
    content: `
      <p>Web3 promises a decentralized internet where users own their data. But how does this translate to actual privacy and security?</p>
      
      <h3>Self-Sovereign Identity</h3>
      <p>Moving away from centralized logins. Using wallets and decentralized identifiers (DIDs) to give users full control over their digital persona.</p>
      
      <h3>Zero-Knowledge Proofs</h3>
      <p>The magic of ZK-proofs: proving something is true without revealing the data itself. This is the future of private transactions and identity verification.</p>
    `,
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
    content: `
      <p>Performance is a competitive advantage. Users expect instant interactions, and search engines reward speed.</p>
      
      <h3>Beyond Core Web Vitals</h3>
      <p>While LCP and FID are important, we dive into Interaction to Next Paint (INP) and how to optimize for the next generation of performance metrics.</p>
      
      <h3>Streaming and Partial Hydration</h3>
      <p>Leveraging Next.js streaming and selective hydration to get content to users faster than ever before. Every millisecond counts.</p>
    `,
    author: "Frontend Lead",
    date: getDynamicDate(25), // 25 days ago
    category: "Frontend",
    readTime: "8 min read",
    tags: ["Performance", "Web", "Optimization"],
    icon: <TrendIcon fontSize="small" />
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
