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
    ],
    pricing: [
      {
        category: "Web Development",
        plan: "Starter Website",
        price: "25,000",
        description: "Perfect for portfolios, blogs, and simple business landing pages.",
        features: ["Responsive design", "5 content pages", "Contact form", "Basic SEO setup", "1 month support"]
      },
      {
        category: "Web Development",
        plan: "Business Website",
        price: "55,000",
        description: "Comprehensive websites for growing businesses with CMS integration.",
        features: ["CMS Integration", "Service listings", "Blog platform", "Enhanced SEO", "3 months support"]
      },
      {
        category: "Web Development",
        plan: "Enterprise Systems",
        price: "120,000",
        description: "Complex web applications with tailored functionality and integrations.",
        features: ["Tailored dashboards", "API Integrations", "Advanced Security", "High Performance", "6 months support"]
      },
      {
        category: "App Development",
        plan: "MVP Mobile App",
        price: "150,000",
        description: "Functional cross-platform mobile app to test your core concept.",
        features: ["Core functionality", "Basic Auth", "Push notifications", "App Store prep", "3 months support"]
      },
      {
        category: "App Development",
        plan: "Advanced Android App",
        price: "250,000",
        description: "Feature-rich Android-specific application with native performance.",
        features: ["Native Android features", "Complex databases", "Payment systems", "Admin panel", "6 months support"]
      },
      {
        category: "App Development",
        plan: "Full Ecosystem (iOS & Android)",
        price: "450,000",
        description: "Complete mobile ecosystem for high-scale businesses.",
        features: ["iOS & Android apps", "Real-time sync", "Analytics dashboard", "Scalable backend", "1 year support"]
      }
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
    ],
    pricing: [
      {
        plan: "Cloud Setup & Migration",
        price: "30,000",
        description: "Initial server setup and migration of existing assets.",
        features: ["AWS/Azure setup", "Data migration", "SSL configuration", "Basic monitoring"]
      },
      {
        plan: "Infrastructure Management",
        price: "75,000",
        description: "Monthly management of your cloud ecosystem.",
        features: ["Auto-scaling setup", "Performance tuning", "Weekly backups", "Security updates"]
      },
      {
        plan: "DevOps Automation",
        price: "150,000",
        description: "Full CI/CD pipeline and infrastructure as code.",
        features: ["Terraform scripts", "Kubernetes setup", "CI/CD pipelines", "24/7 SRE support"]
      }
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
    ],
    pricing: [
      {
        plan: "Landing Page Design",
        price: "15,000",
        description: "High-converting visual design for a single page.",
        features: ["UI mockups", "Conversion focus", "Responsive design", "Style assets"]
      },
      {
        plan: "Full Product UX/UI",
        price: "50,000",
        description: "Comprehensive design protocol for a complete product.",
        features: ["User research", "Wireframing", "Interactive prototype", "Testing"]
      },
      {
        plan: "Design System",
        price: "100,000",
        description: "Complete design language for enterprise applications.",
        features: ["Component library", "Design tokens", "Usage guidelines", "Documentation"]
      }
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
    ],
    pricing: [
      {
        plan: "Security Audit",
        price: "25,000",
        description: "Comprehensive vulnerability scan and risk report.",
        features: ["Vulnerability scan", "Risk assessment", "Security roadmap"]
      },
      {
        plan: "Penetration Testing",
        price: "65,000",
        description: "Active simulation of cyber attacks to find gaps.",
        features: ["Exploit testing", "Data breach simulation", "Remediation guide"]
      },
      {
        plan: "Enterprise Security",
        price: "150,000",
        description: "Full-scale implementation of security protocols.",
        features: ["WAF setup", "SIEM integration", "Zero-trust architecture"]
      }
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
    ],
    pricing: [
      {
        plan: "Data Analysis",
        price: "40,000",
        description: "Visualize and interpret your business data.",
        features: ["Data cleaning", "Insight dashboards", "Trend reporting"]
      },
      {
        plan: "AI Chatbot Integration",
        price: "85,000",
        description: "Smart AI assistants integrated into your platform.",
        features: ["LLM setup", "Custom knowledge base", "API integration"]
      },
      {
        plan: "Custom ML Models",
        price: "250,000",
        description: "Predictive models built specifically for your needs.",
        features: ["Custom training", "Data engineering", "Scalable deployment"]
      }
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
    ],
    pricing: [
      {
        plan: "Strategic Audit",
        price: "20,000",
        description: "Assessment of your current digital presence.",
        features: ["Competitive audit", "Gap analysis", "Priority roadmap"]
      },
      {
        plan: "Growth Protocol",
        price: "55,000",
        description: "Ongoing strategy for market expansion.",
        features: ["Market analysis", "Monthly reporting", "Optimization plan"]
      },
      {
        plan: "Digital Transformation",
        price: "120,000",
        description: "Complete tech and process overhaul.",
        features: ["Process automation", "Tech stack migration", "Staff training"]
      }
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
          <h1 className="text-2xl md:text-4xl font-bold text-white mb-4">Service Not Found</h1>
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
            className="inline-flex items-center gap-2 text-xs md:text-base text-gray-400 hover:text-white mb-8 transition-colors"
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

              <h1 className="text-2xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
                {service.title}
              </h1>

              <p
                className="text-lg md:text-2xl font-semibold mb-6"
                style={{ color: service.color, lineHeight: '1.4', overflow: 'visible' }}
              >
                {service.tagline}
              </p>

              <p className="text-[13px] md:text-base lg:text-lg text-gray-400 mb-8 leading-relaxed" style={{ lineHeight: '1.8', overflow: 'visible' }}>
                {service.overview}
              </p>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 md:px-8 md:py-4 bg-white text-black text-xs md:text-base font-semibold rounded-full hover:scale-105 transition-all duration-300"
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
              <h3 className="text-lg md:text-2xl font-bold text-white mb-6">Key Benefits</h3>
              <div className="space-y-4">
                {service.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckIcon
                      className="w-6 h-6 flex-shrink-0 mt-0.5"
                      style={{ color: service.color }}
                    />
                    <span className="text-gray-300 text-[13px] md:text-base lg:text-lg" style={{ lineHeight: '1.6', overflow: 'visible' }}>
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
            className="text-2xl md:text-5xl font-bold text-white mb-12 text-center"
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
                <h3 className="text-base md:text-xl font-bold text-white mb-3">{feature.name}</h3>
                <p className="text-xs md:text-base text-gray-400 leading-relaxed" style={{ lineHeight: '1.8', overflow: 'visible' }}>
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="relative px-6 py-20 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl md:text-5xl font-bold text-white mb-4">
              Investment Plans
            </h2>
            <p className="text-gray-400 text-xs md:text-base lg:text-lg max-w-2xl mx-auto" style={{ lineHeight: '1.8', overflow: 'visible' }}>
              Choose the right protocol for your business growth. We offer transparent, 
              value-driven pricing for every stage of your journey.
            </p>
          </motion.div>

          {/* Grouped Plans for Software Engineering */}
          {service.title === "Software Engineering" ? (
            <div className="space-y-20">
              {["Web Development", "App Development"].map((cat) => (
                <div key={cat} className="space-y-10">
                  <div className="flex items-center gap-4">
                    <div className="h-px flex-grow bg-white/10" />
                    <h3 className="text-lg md:text-2xl font-bold text-white uppercase tracking-widest bg-white/5 px-6 py-2 rounded-full border border-white/10">
                      {cat}
                    </h3>
                    <div className="h-px flex-grow bg-white/10" />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {service.pricing
                      .filter((tier) => tier.category === cat)
                      .map((tier, index) => (
                        <PricingCard key={index} tier={tier} index={index} service={service} />
                      ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {service.pricing.map((tier, index) => (
                <PricingCard key={index} tier={tier} index={index} service={service} />
              ))}
            </div>
          )}
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
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Technology Stack
            </h2>
            <p className="text-gray-400 text-sm md:text-base lg:text-lg" style={{ lineHeight: '1.8', overflow: 'visible' }}>
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
                className="px-4 py-2 md:px-6 md:py-3 bg-white/[0.05] border border-white/10 rounded-full text-gray-300 text-[10px] md:text-sm font-medium hover:bg-white/[0.1] hover:border-white/20 transition-all duration-300"
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
              <h2 className="text-xl md:text-4xl font-bold text-white mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-gray-400 mb-8 text-xs md:text-base lg:text-lg" style={{ lineHeight: '1.8', overflow: 'visible' }}>
                Let's discuss how we can help you achieve your goals with {service.title.toLowerCase()}
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 md:px-8 md:py-4 bg-white text-black text-xs md:text-base font-semibold rounded-full hover:scale-105 transition-all duration-300"
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

// Helper Component for Pricing Card
function PricingCard({ tier, index, service }) {
  const isFeatured = index === 1;
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="relative flex flex-col p-8 rounded-3xl border backdrop-blur-sm transition-all duration-300 hover:-translate-y-2"
      style={{ 
        backgroundColor: isFeatured ? `${service.color}05` : 'rgba(255, 255, 255, 0.02)',
        borderColor: isFeatured ? `${service.color}40` : 'rgba(255, 255, 255, 0.1)'
      }}
    >
      {isFeatured && (
        <div 
          className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 text-white text-xs font-bold rounded-full uppercase tracking-wider"
          style={{ backgroundColor: service.color }}
        >
          Most Popular
        </div>
      )}
      
      <h3 className="text-xl font-bold text-white mb-2">{tier.plan}</h3>
      <div className="flex items-baseline gap-1 mb-4">
        <span className="text-gray-400 text-sm">KES</span>
        <span className="text-2xl md:text-4xl font-bold text-white">{tier.price}</span>
        {!tier.plan.includes("Full") && !tier.plan.includes("Enterprise") && (
          <span className="text-gray-500 text-sm">/start</span>
        )}
      </div>
      
      <p className="text-gray-400 text-sm mb-8" style={{ lineHeight: '1.6', overflow: 'visible' }}>
        {tier.description}
      </p>

      <div className="space-y-4 mb-8 flex-grow">
        {tier.features.map((feature, i) => (
          <div key={i} className="flex items-start gap-3">
            <CheckIcon 
              className="w-5 h-5 flex-shrink-0 mt-0.5" 
              style={{ color: service.color }}
            />
            <span className="text-gray-300 text-sm">{feature}</span>
          </div>
        ))}
      </div>

      <a
        href={`https://wa.me/254715367859?text=${encodeURIComponent(`Hello OMYTECH Kenya, I'm interested in the ${tier.plan} plan for ${service.title} priced at KES ${tier.price}.`)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full py-3 rounded-full text-center font-semibold transition-all duration-300"
        style={{ 
          backgroundColor: isFeatured ? service.color : 'transparent',
          color: isFeatured ? '#000' : '#fff',
          border: isFeatured ? 'none' : '1px solid rgba(255, 255, 255, 0.2)'
        }}
      >
        Choose {tier.plan}
      </a>
    </motion.div>
  );
}
