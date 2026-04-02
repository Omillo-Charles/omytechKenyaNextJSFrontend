"use client";

import React from "react";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import { 
  Code as CodeIcon, 
  Storage as StorageIcon, 
  Brush as DesignIcon, 
  Security as SecurityIcon, 
  AutoGraph as AiIcon, 
  Lightbulb as StrategyIcon,
  ArrowBack as ArrowBackIcon,
  CheckCircle as CheckIcon,
  ArrowForward as ArrowIcon
} from "@mui/icons-material";

const serviceProtocols = {
  "software-engineering": {
    title: "Software Engineering",
    tagline: "Build High-Performance Applications",
    icon: <CodeIcon />,
    color: "#3b82f6",
    overview: "Our engineering protocol focuses on delivering high-performance, scalable, and maintainable software solutions using cutting-edge technology stacks.",
    features: [
      {
        name: "Architecture Design",
        description: "Defining microservices architecture, database schemas, and system integration points using modern design patterns."
      },
      {
        name: "Agile Development",
        description: "Iterative development cycles with continuous integration and delivery (CI/CD) pipelines for rapid deployment."
      },
      {
        name: "Quality Assurance",
        description: "Automated testing and performance benchmarking to maintain zero-defect standards."
      }
    ],
    techStack: ["Next.js", "React Native", "Node.js", "Go", "PostgreSQL", "Redis"],
    benefits: [
      "Scalable architecture",
      "Fast time-to-market",
      "Maintainable codebase",
      "Cross-platform support"
    ]
  },
  "cloud-infrastructure": {
    title: "Cloud & Infrastructure",
    tagline: "Scale Your Digital Ecosystem",
    icon: <StorageIcon />,
    color: "#06b6d4",
    overview: "We architect resilient cloud environments that scale dynamically with your business needs while ensuring maximum security and uptime.",
    features: [
      {
        name: "Infrastructure as Code",
        description: "Automated provisioning of cloud resources using Terraform and CloudFormation for consistency and speed."
      },
      {
        name: "Container Orchestration",
        description: "Deploying and managing containerized applications with Kubernetes for optimal resource utilization."
      },
      {
        name: "Observability",
        description: "Real-time monitoring and logging to ensure system health and performance."
      }
    ],
    techStack: ["AWS", "Azure", "Docker", "Kubernetes", "Terraform", "Nginx"],
    benefits: [
      "99.9% uptime guarantee",
      "Auto-scaling capabilities",
      "Cost optimization",
      "24/7 monitoring"
    ]
  },
  "ui-ux-design": {
    title: "UI/UX Design",
    tagline: "Create Delightful User Experiences",
    icon: <DesignIcon />,
    color: "#f59e0b",
    overview: "A data-driven design protocol that transforms user behavior insights into intuitive and aesthetically pleasing digital experiences.",
    features: [
      {
        name: "User Discovery",
        description: "In-depth user research, persona creation, and user journey mapping to identify core needs and pain points."
      },
      {
        name: "Interactive Prototyping",
        description: "Creating high-fidelity wireframes and interactive prototypes for early feedback and validation."
      },
      {
        name: "Usability Testing",
        description: "Iterative testing with real users to refine navigation, accessibility, and overall satisfaction."
      }
    ],
    techStack: ["Figma", "Adobe XD", "Framer", "Storybook", "Tailwind CSS"],
    benefits: [
      "User-centered design",
      "Increased engagement",
      "Better conversion rates",
      "Accessible interfaces"
    ]
  },
  "cybersecurity": {
    title: "Cybersecurity",
    tagline: "Protect Your Digital Assets",
    icon: <SecurityIcon />,
    color: "#ef4444",
    overview: "Our security protocol implements a multi-layered defense strategy to protect digital assets from evolving cyber threats.",
    features: [
      {
        name: "Vulnerability Assessment",
        description: "Comprehensive system audits and penetration testing to identify and remediate security weaknesses."
      },
      {
        name: "Data Protection",
        description: "Implementing advanced encryption standards (AES-256) and zero-trust authentication frameworks."
      },
      {
        name: "Compliance Alignment",
        description: "Ensuring systems meet international security standards including GDPR, HIPAA, and ISO 27001."
      }
    ],
    techStack: ["Kali Linux", "Wireshark", "OpenSSL", "Vault", "Auth0"],
    benefits: [
      "Enterprise-grade security",
      "Compliance ready",
      "Threat prevention",
      "Regular audits"
    ]
  },
  "ai-data-science": {
    title: "AI & Data Science",
    tagline: "Turn Data Into Intelligence",
    icon: <AiIcon />,
    color: "#10b981",
    overview: "Leveraging machine learning and advanced analytics to extract actionable intelligence from complex datasets.",
    features: [
      {
        name: "Data Engineering",
        description: "Building robust data pipelines and cleaning massive datasets for high-quality model training."
      },
      {
        name: "Model Development",
        description: "Developing custom neural networks and predictive models tailored to specific business objectives."
      },
      {
        name: "Insight Integration",
        description: "Deploying AI models into production environments and creating real-time intelligence dashboards."
      }
    ],
    techStack: ["Python", "PyTorch", "TensorFlow", "Pandas", "Apache Spark"],
    benefits: [
      "Predictive analytics",
      "Automated insights",
      "Custom AI models",
      "Real-time processing"
    ]
  },
  "digital-strategy": {
    title: "Digital Strategy",
    tagline: "Drive Strategic Growth",
    icon: <StrategyIcon />,
    color: "#06b6d4",
    overview: "A comprehensive roadmap for digital transformation and market dominance through data-backed strategies.",
    features: [
      {
        name: "Market Analysis",
        description: "Competitive benchmarking and trend analysis to identify high-impact growth opportunities."
      },
      {
        name: "Roadmap Planning",
        description: "Defining clear KPIs, milestones, and technology choices to achieve long-term business goals."
      },
      {
        name: "Performance Tracking",
        description: "Continuous monitoring of strategy execution and iterative adjustments based on real-world data."
      }
    ],
    techStack: ["Google Analytics", "Mixpanel", "Semrush", "Jira", "Tableau"],
    benefits: [
      "Data-driven decisions",
      "Market insights",
      "Growth optimization",
      "ROI tracking"
    ]
  }
};

export default function ServiceDetailPage() {
  const params = useParams();
  const id = params.id;
  const service = serviceProtocols[id];

  if (!service) {
    return (
      <div className="min-h-screen bg-[#0A0A0A] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Service Not Found</h1>
          <Link href="/services" className="text-blue-400 hover:text-blue-300">
            Back to Services
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
        <div 
          className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full blur-[120px]"
          style={{ backgroundColor: `${service.color}20` }}
        />

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Back Button */}
          <Link 
            href="/services"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors"
          >
            <ArrowBackIcon className="w-5 h-5" />
            Back to Services
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Icon */}
              <div 
                className="w-20 h-20 rounded-2xl flex items-center justify-center mb-6"
                style={{ 
                  backgroundColor: `${service.color}15`,
                  color: service.color
                }}
              >
                {React.cloneElement(service.icon, { className: "w-10 h-10" })}
              </div>

              <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
                {service.title}
              </h1>
              
              <p 
                className="text-2xl font-semibold mb-6"
                style={{ color: service.color, lineHeight: '1.4', overflow: 'visible' }}
              >
                {service.tagline}
              </p>

              <p className="text-lg text-gray-400 mb-8 leading-relaxed" style={{ lineHeight: '1.8', overflow: 'visible' }}>
                {service.overview}
              </p>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-semibold rounded-full hover:scale-105 transition-all duration-300"
              >
                Get Started
                <ArrowIcon className="w-5 h-5" />
              </Link>
            </motion.div>

            {/* Right Column - Benefits */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white/[0.02] border border-white/10 rounded-3xl p-8 backdrop-blur-sm"
            >
              <h3 className="text-2xl font-bold text-white mb-6">Key Benefits</h3>
              <div className="space-y-4">
                {service.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckIcon 
                      className="w-6 h-6 flex-shrink-0 mt-0.5" 
                      style={{ color: service.color }}
                    />
                    <span className="text-gray-300 text-lg" style={{ lineHeight: '1.6', overflow: 'visible' }}>
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-12 text-center"
          >
            How We Work
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {service.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/[0.02] border border-white/10 rounded-3xl p-8 backdrop-blur-sm hover:bg-white/[0.05] hover:border-white/20 transition-all duration-300"
              >
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 text-2xl font-bold"
                  style={{ 
                    backgroundColor: `${service.color}15`,
                    color: service.color
                  }}
                >
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.name}</h3>
                <p className="text-gray-400 leading-relaxed" style={{ lineHeight: '1.8', overflow: 'visible' }}>
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="relative px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Technology Stack
            </h2>
            <p className="text-gray-400 text-lg" style={{ lineHeight: '1.8', overflow: 'visible' }}>
              We use industry-leading tools and technologies
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4"
          >
            {service.techStack.map((tech, index) => (
              <div
                key={index}
                className="px-6 py-3 bg-white/[0.05] border border-white/10 rounded-full text-gray-300 font-medium hover:bg-white/[0.1] hover:border-white/20 transition-all duration-300"
              >
                {tech}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative px-6 pb-20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-3xl p-12 text-center backdrop-blur-sm overflow-hidden"
            style={{ 
              background: `linear-gradient(135deg, ${service.color}15, ${service.color}05)`,
              border: `1px solid ${service.color}30`
            }}
          >
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px]" />
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-gray-400 mb-8 text-lg" style={{ lineHeight: '1.8', overflow: 'visible' }}>
                Let's discuss how we can help you achieve your goals with {service.title.toLowerCase()}
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-semibold rounded-full hover:scale-105 transition-all duration-300"
              >
                Contact Us
                <ArrowIcon className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
