"use client"

import { useState } from "react"
import { useInView } from "react-intersection-observer"
import ecommerceImage from "../assets/images/E-commerce Website.png"
import portfolioImage from "../assets/images/portfoliowebsite.png"
import corporateImage from "../assets/images/corporatewebsite.png"
import travelImage from "../assets/images/travelbookingwebsite.png"
const categories = ["All", "Web App", "Landing Page", "E-commerce", "UI/UX"]

const projects = [
  {
    id: 1,
    title: "La Cosmex",
    company: "Associated with Code Tech Solutions",
    period: "2025 - Present",
    description: `A full-featured e-commerce website with the following features:
• User authentication and authorization
• Product catalog with categories and search
• Shopping cart functionality
• Secure payment integration
• Order management system
• Admin dashboard for product and order management`,
    technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
    color: "#4A90E2"
  },
  {
    id: 2,
    title: "Portfolio Website",
    company: "Associated with Code Tech Solutions",
    period: "2025 - Present",
    description: `A personal portfolio website showcasing my work and skills:
• Responsive and modern design
• Interactive UI components
• Project showcase section
• Contact form integration
• Social media links
• SEO optimization`,
    technologies: ["React.js", "Bootstrap", "CSS3", "JavaScript", "HTML5"],
    color: "#50C878"
  },
  {
    id: 3,
    title: "Chat Application",
    company: "Associated with Code Tech Solutions",
    period: "2025 - Present",
    description: `A real-time chat application with the following features:
• Real-time messaging using WebSocket
• User authentication and profiles
• Group chat functionality
• Message history and search
• File sharing capabilities
• Online/offline status indicators`,
    technologies: ["HTML5", "CSS3", "JavaScript", "Socket.io", "Express.js"],
    color: "#FF6B6B"
  }
]

function Projects() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <section id="projects" className="py-5 section-bg">
      <div className="container py-5">
        <div className="text-center mb-5">
          <h2 className="display-5 mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-muted mx-auto" style={{ maxWidth: "800px", fontSize: "1.2rem" }}>
            A showcase of my key projects, demonstrating my expertise in Android development and technical leadership.
          </p>
        </div>

        <div ref={ref} className="row g-4">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className="col-lg-6"
            >
              <div 
                className={`card custom-card h-100 ${inView ? 'animate-fade-in' : 'opacity-0'}`}
                style={{ 
                  animationDelay: `${index * 200}ms`,
                  '--accent-color': project.color 
                }}
              >
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-start mb-3">
                    <div>
                      <h3 className="project-title">{project.title}</h3>
                      <p className="company-name text-muted mb-2">{project.company}</p>
                      <div className="period-badge">
                        <i className="bi bi-calendar me-2"></i>
                        {project.period}
                      </div>
                    </div>
                  </div>

                  <div className="project-description text-muted mb-4">
                    {project.description.split('\n').map((line, i) => (
                      <p key={i} className="mb-1">{line}</p>
                    ))}
                  </div>

                  <div className="technologies">
                    <h5 className="tech-title">
                      <i className="bi bi-code-slash me-2"></i>
                      Technologies Used
                    </h5>
                    <div className="tech-stack">
                      {project.technologies.map((tech, i) => (
                        <span 
                          key={i} 
                          className="tech-badge"
                          style={{ animationDelay: `${(index * 200) + (i * 100)}ms` }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .section-bg {
          background: linear-gradient(180deg, rgba(var(--bs-primary-rgb), 0.05) 0%, rgba(var(--bs-primary-rgb), 0) 100%);
        }

        .custom-card {
          border: none;
          border-radius: 12px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          overflow: hidden;
        }

        .custom-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 15px rgba(0, 0, 0, 0.15);
        }

        .project-title {
          font-size: 1.5rem;
          font-weight: 600;
          color: var(--accent-color, var(--bs-primary));
          margin-bottom: 0.5rem;
        }

        .company-name {
          font-size: 1rem;
          font-weight: 500;
        }

        .period-badge {
          display: inline-flex;
          align-items: center;
          padding: 6px 12px;
          background: rgba(var(--bs-primary-rgb), 0.1);
          border-radius: 20px;
          font-size: 0.9rem;
          color: #2c3e50;
        }

        .project-description {
          font-size: 1rem;
          line-height: 1.6;
          white-space: pre-line;
        }

        .tech-title {
          font-size: 1.1rem;
          font-weight: 600;
          color: #2c3e50;
          margin-bottom: 1rem;
        }

        .tech-stack {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .tech-badge {
          padding: 6px 12px;
          background: rgba(var(--bs-primary-rgb), 0.1);
          color: var(--accent-color, var(--bs-primary));
          border-radius: 20px;
          font-size: 0.85rem;
          font-weight: 500;
          transition: all 0.3s ease;
        }

        .tech-badge:hover {
          background: var(--accent-color, var(--bs-primary));
          color: white;
        }

        .animate-fade-in {
          animation: fadeIn 0.5s ease forwards;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  )
}

export default Projects
