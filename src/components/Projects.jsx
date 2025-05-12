"use client"

import { useState, useEffect } from "react"
import { useInView } from "react-intersection-observer"
import elvisImage from "../assets/images/corporatewebsite.png"
import lacosmexImage from "../assets/images/E-commerce Website.png"
import parmarcImage from "../assets/images/parmarc.png"

const categories = ["All", "Web App", "Corporate", "E-commerce"]

const projects = [
  {
    id: 1,
    title: "Elvis Software Website",
    company: "Elvis Software Private Limited",
    period: "2025 - Present",
    description: `Redesigned and developed the company website with modern features:
• Responsive and professional design
• Company services showcase
• Team member profiles
• Contact information
• Interactive UI components
• SEO optimization`,
    technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
    color: "#4A90E2",
    link: "https://www.elvissoftware.com/",
    image: elvisImage
  },
  {
    id: 2,
    title: "La Cosmex E-commerce",
    company: "Elvis Software Private Limited",
    period: "2025 - Present",
    description: `Developed a full-featured e-commerce platform:
• User authentication system
• Product catalog with categories
• Shopping cart functionality
• Secure payment integration
• Order management system
• Admin dashboard`,
    technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
    color: "#E24796",
    link: "https://www.lacosmexstore.com/",
    image: lacosmexImage
  },
  {
    id: 3,
    title: "Parmar CNC Machines",
    company: "Elvis Software Private Limited",
    period: "2025 - Present",
    description: `Created a professional website for industrial machinery:
• Company profile and services
• Product catalog
• Contact information
• Inquiry form
• Responsive design
• SEO optimization`,
    technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "React js"],
    color: "#ACC75B",
    link: "https://www.parmarcncmachines.com/",
    image: parmarcImage
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
            A showcase of my key projects at Elvis Software Private Limited, demonstrating my expertise in web development and UI/UX design.
          </p>
        </div>

        <div ref={ref} className="row g-4 justify-content-center">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className="col-12 col-md-6 col-lg-4"
            >
              <div 
                className={`card custom-card h-100 ${inView ? 'animate-fade-in' : 'opacity-0'}`}
                style={{ 
                  animationDelay: `${index * 200}ms`,
                  '--accent-color': project.color 
                }}
              >
                <img
                  src={project.image}
                  alt="Project visual preview"
                  className="project-preview-img-top"
                />
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-start mb-3">
                    <div style={{width: '100%'}}>
                      <h3 className="project-title">{project.title}</h3>
                      <p className="company-name text-muted mb-2">{project.company}</p>
                      <div className="period-badge">
                        <i className="bi bi-calendar me-2"></i>
                        {project.period}
                      </div>
                    </div>
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

                  <div className="mt-4">
                    <a 
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                    >
                      View Project
                    </a>
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

        .project-preview-img-top {
          width: 100%;
          max-width: 100%;
          height: auto;
          display: block;
          object-fit: contain;
          background: #f8f9fa;
          border-top-left-radius: 12px;
          border-top-right-radius: 12px;
          margin: 0;
          padding: 0;
        }

        .project-preview-img {
          display: none;
        }
      `}</style>
    </section>
  )
}

export default Projects
