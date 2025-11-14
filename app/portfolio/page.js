"use client";
import { FiFilter } from "react-icons/fi";

export default function PortfolioPage() {
  const projects = [
    {
      id: 1,
      title: "Ena Coach Website Revamp",
      description:
        "Complete website redesign and development for Ena Coach, featuring modern UI/UX, responsive design, and enhanced user experience.",
      category: "Web Development",
      image: "/portfolioImages/ena.png",
      link: "https://enacoach.vercel.app",
      tags: ["Next.js", "React", "UI/UX Design", "Responsive"],
    },
    {
      id: 2,
      title: "Ebenezer Academy Website Development",
      description:
        "Full-stack website development for Ebenezer Academy, featuring course management, student portal, and modern educational platform.",
      category: "Web Development",
      image: "/portfolioImages/ebenezer.png",
      link: "https://ebenezer-rosy.vercel.app",
      tags: ["Next.js", "React", "Education", "Full-Stack"],
    },
    {
      id: 3,
      title: "New Testament Church Of God Kenya Website",
      description:
        "Modern church website development with event management, sermon archives, online giving, and community engagement features.",
      category: "Web Development",
      image: "/portfolioImages/newTestament.png",
      link: "https://ntcogk.vercel.app",
      tags: ["Next.js", "React", "CMS", "Community"],
    },
  ];

  return (
    <div className="portfolio-page">
      {/* Hero Section */}
      <section className="portfolio-hero">
        <div className="container">
          <div className="portfolio-hero-content">
            <h1 className="portfolio-hero-title">Our Portfolio</h1>
            <p className="portfolio-hero-subtitle">
              Showcasing our best work in web development, mobile apps, design,
              and digital solutions
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="portfolio-projects">
        <div className="container">
          {projects.length > 0 ? (
            <div className="portfolio-projects-grid">
              {projects.map((project) => (
                <article key={project.id} className="portfolio-project-card">
                  <div className="portfolio-project-image">
                    <img src={project.image} alt={project.title} />
                    <div className="portfolio-project-overlay">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="portfolio-view-project"
                      >
                        View Project
                      </a>
                    </div>
                  </div>
                  <div className="portfolio-project-content">
                    <span className="portfolio-project-category">
                      {project.category}
                    </span>
                    <h3 className="portfolio-project-title">{project.title}</h3>
                    <p className="portfolio-project-description">
                      {project.description}
                    </p>
                    <div className="portfolio-project-tags">
                      {project.tags.map((tag, index) => (
                        <span key={index} className="portfolio-project-tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="portfolio-empty-state">
              <div className="portfolio-empty-icon">
                <FiFilter size={64} />
              </div>
              <h2 className="portfolio-empty-title">No Projects Yet</h2>
              <p className="portfolio-empty-description">
                We're currently building our portfolio showcase. Check back soon
                to see our amazing projects!
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="portfolio-cta">
        <div className="container">
          <div className="portfolio-cta-content">
            <h2>Ready to Start Your Project?</h2>
            <p>Let's create something amazing together</p>
            <div className="portfolio-cta-buttons">
              <a href="/contact" className="portfolio-cta-btn primary">
                Get Started
              </a>
              <a href="/#services" className="portfolio-cta-btn secondary">
                Our Services
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
