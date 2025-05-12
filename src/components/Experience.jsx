import { useInView } from "react-intersection-observer"

const experiences = [
  {
    id: 1,
    role: "Front End Developer",
    company: "Elvis Software Private Limited",
    location: "Rajkot, Gujarat, India",
    period: "2025 - Present",
    projectName: "La Cosmex",
    websiteLink: "https://www.lacosmexstore.com/",
    description: "E-commerce platform for beauty and cosmetic products, featuring a modern and user-friendly interface with secure payment integration.",
    responsibilities: [
      "Developed responsive e-commerce website with product catalog and shopping cart functionality",
      "Implemented WhatsApp integration for order placement and customer communication",
      "Created user authentication system with profile management features",
      "Optimized website performance and implemented SEO best practices",
      "Integrated product search and filtering functionality"
    ],
    skills: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
    color: "#4A90E2"
  },
  {
    id: 2,
    role: "Front End Developer",
    company: "Elvis Software Private Limited",
    location: "Rajkot, Gujarat, India",
    period: "2025 - Present",
    projectName: "Parmar CNC Machines",
    websiteLink: "https://www.parmarcncmachines.com/",
    description: "Industrial machinery company website showcasing CNC machines, services, and technical specifications with interactive product demonstrations.",
    responsibilities: [
      "Designed and developed responsive website for industrial machinery company",
      "Created interactive product catalog with detailed specifications",
      "Implemented contact forms and inquiry management system",
      "Integrated image galleries and video demonstrations",
      "Optimized website for industrial clients and technical users"
    ],
    skills: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "React js"],
    color: "#50C878"
  },
  {
    id: 3,
    role: "Front End Developer",
    company: "Elvis Software Private Limited",
    location: "Rajkot, Gujarat, India",
    period: "2025 - Present",
    projectName: "Elvis Software",
    websiteLink: "https://www.elvissoftware.com/",
    description: "Corporate website for software development company featuring services, portfolio, and client testimonials with modern design elements.",
    responsibilities: [
      "Developed corporate website with service portfolio and company information",
      "Created dynamic content management system for easy updates",
      "Implemented responsive design for all device types",
      "Integrated contact forms and client inquiry system",
      "Added portfolio showcase with project case studies"
    ],
    skills: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
    color: "#50C878"
  }
]

function Experience() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <section id="experience" className="py-5 section-bg">
      <div className="container py-5">
        <div className="text-center mb-5">
          <h2 className="display-5 mb-4">
            Work <span className="text-primary">Experience</span>
          </h2>
          <p className="text-muted mx-auto" style={{ maxWidth: "800px", fontSize: "1.2rem" }}>
            My professional journey in the tech industry, showcasing my growth and the valuable experience I've gained
            along the way.
          </p>
        </div>

        <div ref={ref} className="timeline">
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className={`timeline-item ${inView ? "animate-slide-in" : ""}`}
              style={{ 
                animationDelay: `${index * 400}ms`,
                '--accent-color': exp.color 
              }}
            >
              <div className="timeline-dot"></div>
              <div className="timeline-connector"></div>
              <div className="card custom-card">
                <div className="card-body">
                  <div className="row mb-4">
                    <div className="col-md-8">
                      <div className="role-badge mb-2">
                        <i className="bi bi-code-square me-2"></i>
                        {exp.role}
                      </div>
                      <h4 className="company-name">{exp.company}</h4>
                      <div className="mt-3 project-info">
                        <h5 className="project-name">
                          <i className="bi bi-folder2-open me-2"></i>
                          {exp.projectName}
                        </h5>
                        <a 
                          href={exp.websiteLink} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="website-link"
                        >
                          <i className="bi bi-link-45deg me-1"></i>
                          Visit Website
                        </a>
                      </div>
                    </div>
                    <div className="col-md-4 text-md-end">
                      <div className="info-badge period">
                        <i className="bi bi-calendar me-2"></i>
                        {exp.period}
                      </div>
                      <div className="info-badge location mt-2">
                        <i className="bi bi-geo-alt me-2"></i>
                        {exp.location}
                      </div>
                    </div>
                  </div>

                  <p className="text-muted mb-4 description">{exp.description}</p>

                  <div className="responsibilities-section">
                    <h5 className="section-title">
                      <i className="bi bi-check2-circle me-2"></i>
                      Key Responsibilities
                    </h5>
                    <ul className="responsibilities-list">
                      {exp.responsibilities.map((resp, i) => (
                        <li 
                          key={i}
                          className={`responsibility-item ${inView ? 'animate-fade-in' : ''}`}
                          style={{ animationDelay: `${(index * 400) + (i * 100)}ms` }}
                        >
                          {resp}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="skills-section mt-4">
                    <h5 className="section-title">
                      <i className="bi bi-tools me-2"></i>
                      Technologies Used
                    </h5>
                    <div className="skills-list">
                      {exp.skills.map((skill, i) => (
                        <span 
                          key={i} 
                          className={`skill-badge ${inView ? 'animate-fade-in' : ''}`}
                          style={{ animationDelay: `${(index * 400) + (i * 100)}ms` }}
                        >
                          {skill}
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

        .section-title {
          margin-bottom: 3rem;
        }

        .section-title h2 {
          font-weight: 600;
        }

        .section-title p {
          font-size: 1.1rem;
          line-height: 1.6;
        }

        .timeline {
          position: relative;
          padding: 2rem 0;
        }

        .timeline-item {
          position: relative;
          padding-left: 3rem;
          margin-bottom: 3rem;
          opacity: 0;
          transform: translateX(-30px);
        }

        .timeline-dot {
          position: absolute;
          left: 0;
          top: 0;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: var(--accent-color, var(--bs-primary));
          border: 3px solid white;
          box-shadow: 0 0 0 3px var(--accent-color, var(--bs-primary));
        }

        .timeline-connector {
          position: absolute;
          left: 7px;
          top: 16px;
          bottom: -3rem;
          width: 2px;
          background: var(--accent-color, var(--bs-primary));
          opacity: 0.3;
        }

        .timeline-item:last-child .timeline-connector {
          display: none;
        }

        .custom-card {
          border: none;
          border-radius: 12px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .custom-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 12px rgba(0, 0, 0, 0.15);
        }

        .role-badge {
          display: inline-block;
          padding: 6px 12px;
          background: var(--accent-color, var(--bs-primary));
          color: white;
          border-radius: 20px;
          font-size: 0.9rem;
          font-weight: 500;
        }

        .company-name {
          font-size: 1.4rem;
          font-weight: 600;
          color: #2c3e50;
          margin: 0.5rem 0;
        }

        .project-info {
          padding: 10px 15px;
          background: rgba(var(--bs-primary-rgb), 0.05);
          border-radius: 8px;
        }

        .project-name {
          font-size: 1rem;
          font-weight: 500;
          color: #2c3e50;
          margin: 0;
        }

        .website-link {
          display: inline-flex;
          align-items: center;
          color: var(--accent-color, var(--bs-primary));
          text-decoration: none !important;
          font-weight: 500;
          margin-top: 0.5rem;
          transition: color 0.3s ease;
        }

        .website-link:hover {
          color: var(--bs-primary);
          text-decoration: none !important;
        }

        .info-badge {
          display: inline-flex;
          align-items: center;
          padding: 6px 12px;
          background: rgba(var(--bs-primary-rgb), 0.1);
          border-radius: 20px;
          font-size: 0.9rem;
          color: #2c3e50;
        }

        .responsibilities-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .responsibility-item {
          position: relative;
          padding: 8px 0 8px 24px;
          color: #666;
          opacity: 0;
        }

        .responsibility-item::before {
          content: "→";
          position: absolute;
          left: 0;
          color: var(--accent-color, var(--bs-primary));
        }

        .skills-list {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .skill-badge {
          padding: 6px 12px;
          background: white;
          border: 1px solid var(--accent-color, var(--bs-primary));
          color: var(--accent-color, var(--bs-primary));
          border-radius: 20px;
          font-size: 0.85rem;
          opacity: 0;
        }

        .animate-slide-in {
          animation: slideIn 0.6s ease forwards;
        }

        .animate-fade-in {
          animation: fadeIn 0.5s ease forwards;
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 768px) {
          .timeline-item {
            padding-left: 2rem;
          }
          
          .info-badge {
            margin-top: 1rem;
          }
        }

        .display-5 {
          font-weight: 600;
          margin-bottom: 1.5rem;
        }
      `}</style>
    </section>
  )
}

export default Experience
