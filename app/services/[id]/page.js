"use client";

import React from "react";
import { useParams, useRouter } from "next/navigation";
import { 
  Box, 
  Typography, 
  Stack, 
  Container, 
  Button,
  styled,
  Grid,
  Paper
} from "@mui/material";
import { motion } from "framer-motion";
import { 
  Code as CodeIcon, 
  Storage as StorageIcon, 
  Brush as DesignIcon, 
  Security as SecurityIcon, 
  AutoGraph as AiIcon, 
  Lightbulb as StrategyIcon,
  ArrowBack as ArrowBackIcon,
  Terminal as TerminalIcon,
  CheckCircle as CheckCircleIcon,
  Bolt as BoltIcon,
  CloudQueue as CloudIcon,
  Shield as ShieldIcon,
  Psychology as PsychologyIcon,
  AdsClick as StrategyDetailIcon
} from "@mui/icons-material";
import Link from "next/link";

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
  marginBottom: "2rem"
}));

const TerminalHeader = ({ title, icon, color }) => (
  <Box sx={{ 
    bgcolor: "#1e293b", 
    px: 3, 
    py: 2, 
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
    <Stack direction="row" spacing={1.5} alignItems="center">
      <Box sx={{ color: color, display: "flex", fontSize: "1.2rem" }}>{icon}</Box>
      <Typography variant="caption" sx={{ color: "rgba(255,255,255,0.4)", fontWeight: 700, fontFamily: "'Fira Code', monospace", fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: 1.5 }}>
        {title}
      </Typography>
    </Stack>
  </Box>
);

const serviceProtocols = {
  "software-engineering": {
    title: "Software Engineering Protocol",
    icon: <CodeIcon />,
    color: "#3b82f6",
    overview: "Our engineering protocol focuses on delivering high-performance, scalable, and maintainable software solutions using cutting-edge technology stacks.",
    stages: [
      {
        id: "ARCH_01",
        name: "Architecture Design",
        details: "Defining microservices architecture, database schemas, and system integration points using UML and modern design patterns.",
        icon: <BoltIcon />
      },
      {
        id: "DEV_02",
        name: "Agile Development",
        details: "Iterative development cycles with continuous integration and delivery (CI/CD) pipelines to ensure rapid and reliable feature deployment.",
        icon: <CodeIcon />
      },
      {
        id: "QA_03",
        name: "Quality Assurance",
        details: "Automated unit testing, integration testing, and performance benchmarking to maintain zero-defect standards.",
        icon: <CheckCircleIcon />
      }
    ],
    techStack: ["Next.js", "React Native", "Node.js", "Go", "PostgreSQL", "Redis"]
  },
  "cloud-infrastructure": {
    title: "Cloud Infrastructure Protocol",
    icon: <StorageIcon />,
    color: "#8b5cf6",
    overview: "We architect resilient cloud environments that scale dynamically with your business needs while ensuring maximum security and uptime.",
    stages: [
      {
        id: "INFRA_01",
        name: "Infrastructure as Code",
        details: "Automated provisioning of cloud resources using Terraform and CloudFormation for consistency and speed.",
        icon: <CloudIcon />
      },
      {
        id: "ORCH_02",
        name: "Container Orchestration",
        details: "Deploying and managing containerized applications with Kubernetes (K8s) for optimal resource utilization.",
        icon: <StorageIcon />
      },
      {
        id: "MON_03",
        name: "Observability",
        details: "Real-time monitoring and logging using Prometheus and Grafana to ensure system health and performance.",
        icon: <BoltIcon />
      }
    ],
    techStack: ["AWS", "Azure", "Docker", "Kubernetes", "Terraform", "Nginx"]
  },
  "ui-ux-design": {
    title: "Experience Design Protocol",
    icon: <DesignIcon />,
    color: "#f59e0b",
    overview: "A data-driven design protocol that transforms user behavior insights into intuitive and aesthetically pleasing digital experiences.",
    stages: [
      {
        id: "DISC_01",
        name: "User Discovery",
        details: "In-depth user research, persona creation, and user journey mapping to identify core needs and pain points.",
        icon: <PsychologyIcon />
      },
      {
        id: "PROTO_02",
        name: "Interactive Prototyping",
        details: "Creating low and high-fidelity wireframes and interactive prototypes for early feedback and validation.",
        icon: <DesignIcon />
      },
      {
        id: "TEST_03",
        name: "Usability Testing",
        details: "Iterative testing with real users to refine navigation, accessibility, and overall user satisfaction.",
        icon: <CheckCircleIcon />
      }
    ],
    techStack: ["Figma", "Adobe XD", "Framer", "Storybook", "Tailwind CSS"]
  },
  "cybersecurity": {
    title: "Security Hardening Protocol",
    icon: <SecurityIcon />,
    color: "#ef4444",
    overview: "Our security protocol implements a multi-layered defense strategy to protect digital assets from evolving cyber threats.",
    stages: [
      {
        id: "AUDIT_01",
        name: "Vulnerability Assessment",
        details: "Comprehensive system audits and penetration testing to identify and remediate security weaknesses.",
        icon: <ShieldIcon />
      },
      {
        id: "ENCR_02",
        name: "Data Protection",
        details: "Implementing advanced encryption standards (AES-256) and zero-trust authentication frameworks.",
        icon: <SecurityIcon />
      },
      {
        id: "COMP_03",
        name: "Compliance Alignment",
        details: "Ensuring systems meet international security standards including GDPR, HIPAA, and ISO 27001.",
        icon: <CheckCircleIcon />
      }
    ],
    techStack: ["Kali Linux", "Wireshark", "OpenSSL", "Vault", "Auth0"]
  },
  "ai-data-science": {
    title: "Intelligence Protocol",
    icon: <AiIcon />,
    color: "#10b981",
    overview: "Leveraging machine learning and advanced analytics to extract actionable intelligence from complex datasets.",
    stages: [
      {
        id: "DATA_01",
        name: "Data Engineering",
        details: "Building robust data pipelines and cleaning massive datasets for high-quality model training.",
        icon: <BoltIcon />
      },
      {
        id: "ML_02",
        name: "Model Development",
        details: "Developing custom neural networks and predictive models tailored to specific business objectives.",
        icon: <AiIcon />
      },
      {
        id: "INS_03",
        name: "Insight Integration",
        details: "Deploying AI models into production environments and creating real-time intelligence dashboards.",
        icon: <CheckCircleIcon />
      }
    ],
    techStack: ["Python", "PyTorch", "TensorFlow", "Pandas", "Apache Spark"]
  },
  "digital-strategy": {
    title: "Strategic Growth Protocol",
    icon: <StrategyIcon />,
    color: "#06b6d4",
    overview: "A comprehensive roadmap for digital transformation and market dominance through data-backed strategies.",
    stages: [
      {
        id: "ANAL_01",
        name: "Market Analysis",
        details: "Competitive benchmarking and trend analysis to identify high-impact growth opportunities.",
        icon: <StrategyDetailIcon />
      },
      {
        id: "PLAN_02",
        name: "Roadmap Planning",
        details: "Defining clear KPIs, milestones, and technology choices to achieve long-term business goals.",
        icon: <StrategyIcon />
      },
      {
        id: "EXEC_03",
        name: "Performance Tracking",
        details: "Continuous monitoring of strategy execution and iterative adjustments based on real-world data.",
        icon: <BoltIcon />
      }
    ],
    techStack: ["Google Analytics", "Mixpanel", "Semrush", "Jira", "Tableau"]
  }
};

export default function ServiceDetailPage() {
  const params = useParams();
  const router = useRouter();
  const id = params.id;
  
  const protocol = serviceProtocols[id];

  if (!protocol) {
    return (
      <Box sx={{ minHeight: "100vh", bgcolor: "#080c14", display: "flex", alignItems: "center", justifyContent: "center", color: "white" }}>
        <Stack spacing={3} alignItems="center">
          <Typography variant="h4" sx={{ fontFamily: "'Fira Code', monospace" }}>Protocol Not Found</Typography>
          <Button variant="outlined" component={Link} href="/services" startIcon={<ArrowBackIcon />}>Back to Services</Button>
        </Stack>
      </Box>
    );
  }

  return (
    <Box 
      component="section" 
      sx={{ 
        minHeight: "100vh",
        bgcolor: "#080c14",
        pt: { xs: 1, md: 2 },
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

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Button 
          component={Link} 
          href="/services" 
          startIcon={<ArrowBackIcon />}
          sx={{ 
            color: "rgba(255,255,255,0.5)", 
            mb: 2, 
            textTransform: "none", 
            "&:hover": { color: protocol.color } 
          }}
        >
          Return to Hub
        </Button>

        <TerminalContainer
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <TerminalHeader title={`SYSTEM::PROTOCOL::${id.toUpperCase()}`} icon={protocol.icon} color={protocol.color} />
          <Box sx={{ p: { xs: 3, md: 6 } }}>
            <Grid container spacing={6}>
              <Grid item xs={12} md={7}>
                <Typography variant="h2" sx={{ color: "white", fontWeight: 900, mb: 3, fontSize: { xs: "2.5rem", md: "4rem" }, lineHeight: 1.1 }}>
                  {protocol.title}
                </Typography>
                <Typography sx={{ color: "rgba(255,255,255,0.7)", fontSize: "1.1rem", lineHeight: 1.8, mb: 4 }}>
                  {protocol.overview}
                </Typography>
                
                <Stack spacing={3}>
                  {protocol.stages.map((stage, idx) => (
                    <Box 
                      key={stage.id}
                      sx={{ 
                        p: 3, 
                        bgcolor: "rgba(255,255,255,0.02)", 
                        borderRadius: "16px",
                        border: "1px solid rgba(255,255,255,0.05)",
                        transition: "all 0.3s",
                        "&:hover": { bgcolor: "rgba(255,255,255,0.04)", borderColor: protocol.color }
                      }}
                    >
                      <Stack direction="row" spacing={3} alignItems="flex-start">
                        <Box sx={{ 
                          color: protocol.color, 
                          bgcolor: "rgba(0,0,0,0.3)", 
                          p: 1.5, 
                          borderRadius: "12px",
                          display: "flex"
                        }}>
                          {stage.icon}
                        </Box>
                        <Box>
                          <Typography variant="caption" sx={{ color: protocol.color, fontWeight: 800, letterSpacing: 1 }}>
                            {stage.id}
                          </Typography>
                          <Typography variant="h6" sx={{ color: "white", fontWeight: 700, mb: 1 }}>
                            {stage.name}
                          </Typography>
                          <Typography sx={{ color: "rgba(255,255,255,0.5)", fontSize: "0.95rem" }}>
                            {stage.details}
                          </Typography>
                        </Box>
                      </Stack>
                    </Box>
                  ))}
                </Stack>
              </Grid>

              <Grid item xs={12} md={5}>
                <Box sx={{ position: "sticky", top: 100 }}>
                  <Typography variant="h6" sx={{ color: "white", fontWeight: 800, mb: 3, display: "flex", alignItems: "center", gap: 1.5 }}>
                    <TerminalIcon sx={{ color: protocol.color }} /> Tech Stack
                  </Typography>
                  <Grid container spacing={2}>
                    {protocol.techStack.map((tech) => (
                      <Grid item xs={6} key={tech}>
                        <Box sx={{ 
                          p: 2, 
                          bgcolor: "rgba(0,0,0,0.2)", 
                          borderRadius: "12px", 
                          border: "1px solid rgba(255,255,255,0.05)",
                          textAlign: "center",
                          color: "rgba(255,255,255,0.6)",
                          fontSize: "0.85rem",
                          fontWeight: 600,
                          fontFamily: "'Fira Code', monospace"
                        }}>
                          {tech}
                        </Box>
                      </Grid>
                    ))}
                  </Grid>

                  <Box sx={{ mt: 6, p: 4, bgcolor: `${protocol.color}15`, borderRadius: "24px", border: `1px solid ${protocol.color}30` }}>
                    <Typography variant="h6" sx={{ color: protocol.color, fontWeight: 800, mb: 2 }}>
                      Ready to Implement?
                    </Typography>
                    <Typography sx={{ color: "rgba(255,255,255,0.7)", mb: 3, fontSize: "0.9rem" }}>
                      Our team is ready to deploy this protocol for your business. Let's discuss your requirements.
                    </Typography>
                    <Button 
                      fullWidth 
                      variant="contained" 
                      component={Link}
                      href="/contact"
                      sx={{ 
                        bgcolor: protocol.color, 
                        color: "white", 
                        fontWeight: 800, 
                        borderRadius: "12px",
                        py: 1.5,
                        "&:hover": { bgcolor: protocol.color, filter: "brightness(1.1)" }
                      }}
                    >
                      Request Implementation
                    </Button>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </TerminalContainer>
      </Container>
    </Box>
  );
}
