import { useInView } from "react-intersection-observer"

const education = [
  {
    id: 1,
    degree: "Bachelor of Engineering",
    field: "Information Technology",
    school: "VVP Engineering College",
    location: "Rajkot, Gujarat, India",
    period: "2021 - 2025",
    description: "Completed Bachelor's degree in Information Technology with focus on software development and computer systems.",
    achievements: [
      "Studied core subjects including Data Structures, Algorithms, and Database Management",
      "Completed projects in web development and software engineering",
      "Participated in technical workshops and coding competitions"
    ],
    skills: ["Software Development", "Web Technologies", "Database Management", "System Design"],
    color: "#4A90E2"
  },
  {
    id: 2,
    degree: "Higher Secondary Certificate (HSC)",
    field: "Science",
    school: "Mahatma Gandhi Science School",
    location: "Rajkot, Gujarat, India",
    period: "2020 - 2021",
    description: "Completed higher secondary education with focus on science and mathematics.",
    achievements: [
      "Studied Physics, Chemistry, and Mathematics as main subjects",
      "Participated in science exhibitions and competitions",
      "Developed strong foundation in analytical and problem-solving skills"
    ],
    skills: ["Mathematics", "Physics", "Chemistry", "Problem Solving"],
    color: "#50C878"
  }
]

const certifications = [
  {
    id: 1,
    name: "Web Design & Development",
    issuer: "Arena Animation",
    date: "July 2024 - Present",
    icon: "building",
    color: "#FF6B6B"
  },
  {
    id: 2,
    name: "Web Design",
    issuer: "freeCodeCamp",
    date: "2024",
    icon: "palette",
    color: "#45B7D1"
  },
  {
    id: 3,
    name: "Node.js & Express",
    issuer: "Udemy",
    date: "2024",
    icon: "nodejs",
    color: "#68A063"
  },
]

function Education() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <section id="education" className="py-5 section-bg">
      <div className="container py-5">
        <div className="text-center mb-5">
          <h2 className="display-5 mb-4">
            Education & <span className="text-primary">Certifications</span>
          </h2>
          <p className="text-muted mx-auto" style={{ maxWidth: "800px", fontSize: "1.2rem" }}>
            My academic background and professional certifications that have shaped my knowledge and expertise in the
            field.
          </p>
        </div>

        <div ref={ref} className="row g-4">
          <div className="col-lg-8">
            <div className="section-header mb-4">
              <h3 className="section-subtitle mb-0">
                <i className="bi bi-mortarboard-fill me-2"></i>
                Education Timeline
              </h3>
              <p className="text-muted mt-2">
                My academic journey and educational milestones that have shaped my career path.
              </p>
            </div>

            <div className="education-timeline">
              {education.map((edu, index) => (
                <div 
                  key={edu.id} 
                  className={`timeline-item ${inView ? "animate-slide-in" : ""}`}
                  style={{ 
                    animationDelay: `${index * 400}ms`,
                    '--accent-color': edu.color 
                  }}
                >
                  <div className="timeline-dot">
                    <i className={`bi bi-${edu.icon}`}></i>
                  </div>
                  <div className="timeline-connector"></div>
                  <div className="card custom-card">
                    <div className="card-body">
                      <div className="row mb-4">
                        <div className="col-md-8">
                          <div className="degree-badge mb-2">
                            <i className="bi bi-mortarboard me-2"></i>
                            {edu.degree}
                          </div>
                          <h4 className="institution-name">
                            {edu.school}
                          </h4>
                          <div className="location-badge">
                            <i className="bi bi-geo-alt me-2"></i>
                            {edu.location}
                          </div>
                        </div>
                        <div className="col-md-4 text-md-end">
                          <div className="period-badge">
                            <i className="bi bi-calendar me-2"></i>
                            {edu.period}
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-muted mb-4">{edu.description}</p>
                      
                      <div className="achievements-section">
                        <div className="section-header achievements-header mb-3">
                          <h5 className="section-title mb-0">
                            <i className="bi bi-trophy me-2"></i>
                            Key Achievements
                          </h5>
                        </div>
                        <ul className="achievements-list">
                          {edu.achievements.map((achievement, i) => (
                            <li 
                              key={i}
                              className={`achievement-item ${inView ? 'animate-fade-in' : ''}`}
                              style={{ animationDelay: `${(index * 400) + (i * 100)}ms` }}
                            >
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="col-lg-4">
            <div className="section-header mb-4">
              <h3 className="section-subtitle mb-0">
                <i className="bi bi-award-fill me-2"></i>
                Certifications
              </h3>
              <p className="text-muted mt-2">
                Professional certifications and courses that validate my expertise.
              </p>
            </div>

            <div className="certifications-grid">
              {certifications.map((cert, index) => (
                <div 
                  key={cert.id}
                  className={`certification-card ${inView ? 'animate-fade-in' : ''}`}
                  style={{ 
                    animationDelay: `${index * 200}ms`,
                    '--cert-color': cert.color
                  }}
                >
                  <div className="cert-icon">
                    {cert.name.toLowerCase().includes('node') ? (
                      <svg viewBox="0 0 448 512" className="nodejs-icon">
                        <path fill="currentColor" d="M224 508c-6.7 0-13.5-1.8-19.4-5.2l-61.7-36.5c-9.2-5.2-4.7-7-1.7-8 12.3-4.3 14.8-5.2 27.9-12.7 1.4-.8 3.2-.5 4.6.4l47.4 28.1c1.7 1 4.1 1 5.7 0l184.7-106.6c1.7-1 2.8-3 2.8-5V149.3c0-2.1-1.1-4-2.9-5.1L226.8 37.7c-1.7-1-4-1-5.7 0L36.6 144.3c-1.8 1-2.9 3-2.9 5.1v213.1c0 2 1.1 4 2.9 4.9l50.6 29.2c27.5 13.7 44.3-2.4 44.3-18.7V167.5c0-3 2.4-5.3 5.4-5.3h23.4c2.9 0 5.4 2.3 5.4 5.3V378c0 36.6-20 57.6-54.7 57.6-10.7 0-19.1 0-42.5-11.6l-48.4-27.9C8.1 389.2.7 376.3.7 362.4V149.3c0-13.8 7.4-26.8 19.4-33.7L204.6 9c11.7-6.6 27.2-6.6 38.8 0l184.7 106.7c12 6.9 19.4 19.8 19.4 33.7v213.1c0 13.8-7.4 26.7-19.4 33.7L243.4 502.8c-5.9 3.4-12.6 5.2-19.4 5.2zm149.1-210.1c0-39.9-27-50.5-83.7-58-57.4-7.6-63.2-11.5-63.2-24.9 0-11.1 4.9-25.9 47.4-25.9 37.9 0 51.9 8.2 57.7 33.8.5 2.4 2.7 4.2 5.2 4.2h24c1.5 0 2.9-.6 3.9-1.7s1.5-2.6 1.4-4.1c-3.7-44.1-33-64.6-92.2-64.6-52.7 0-84.1 22.2-84.1 59.5 0 40.4 31.3 51.6 81.8 56.6 60.5 5.9 65.2 14.8 65.2 26.7 0 20.6-16.6 29.4-55.5 29.4-48.9 0-59.6-12.3-63.2-36.6-.4-2.6-2.6-4.5-5.3-4.5h-23.9c-3 0-5.3 2.4-5.3 5.3 0 31.1 16.9 68.2 97.8 68.2 58.4-.1 92-23.2 92-63.4z"/>
                      </svg>
                    ) : (
                      <i className={`bi bi-${cert.icon}`}></i>
                    )}
                  </div>
                  <div className="cert-content">
                    <h4>{cert.name}</h4>
                    <p>{cert.issuer}</p>
                    <span className="cert-date">{cert.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .section-bg {
          background: linear-gradient(180deg, rgba(var(--bs-primary-rgb), 0.05) 0%, rgba(var(--bs-primary-rgb), 0) 100%);
        }

        .section-header {
          position: relative;
          padding-bottom: 1rem;
        }

        .achievements-header {
          position: relative;
          padding-bottom: 1rem;
        }

        .section-subtitle {
          font-size: 1.5rem;
          font-weight: 600;
          color: #2c3e50;
          margin-bottom: 0;
          display: flex;
          align-items: center;
        }

        .section-subtitle i {
          color: var(--bs-primary);
          font-size: 1.75rem;
        }

        .education-timeline {
          position: relative;
          padding: 1rem 0;
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
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: var(--accent-color);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          box-shadow: 0 0 0 5px rgba(var(--bs-primary-rgb), 0.1);
        }

        .timeline-connector {
          position: absolute;
          left: 19px;
          top: 40px;
          bottom: -3rem;
          width: 2px;
          background: var(--accent-color);
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
          box-shadow: 0 8px 15px rgba(0, 0, 0, 0.15);
        }

        .degree-badge {
          display: inline-block;
          padding: 8px 16px;
          background: var(--accent-color);
          color: white;
          border-radius: 20px;
          font-size: 0.9rem;
          font-weight: 500;
          line-height: 1.2;
        }

        .institution-name {
          font-size: 1.2rem;
          font-weight: 600;
          color: #2c3e50;
          margin: 0.5rem 0;
        }

        .location-badge, .period-badge {
          display: inline-flex;
          align-items: center;
          padding: 6px 12px;
          background: rgba(var(--bs-primary-rgb), 0.1);
          border-radius: 20px;
          font-size: 0.9rem;
          color: #2c3e50;
        }

        .section-title {
          font-size: 1.1rem;
          font-weight: 600;
          color: #2c3e50;
          margin-bottom: 1rem;
          display: flex;
          align-items: center;
        }

        .achievements-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .achievement-item {
          position: relative;
          padding: 8px 0 8px 24px;
          color: #666;
          opacity: 0;
        }

        .achievement-item::before {
          content: "";
          position: absolute;
          left: 0;
          top: 50%;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background-color: var(--accent-color);
          transform: translateY(-50%);
        }

        .certifications-grid {
          display: grid;
          gap: 1rem;
        }

        .certification-card {
          background: white;
          border-radius: 12px;
          padding: 1.5rem;
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          opacity: 0;
          transform: translateY(20px);
        }

        .certification-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 15px rgba(0, 0, 0, 0.15);
        }

        .cert-icon {
          width: 45px;
          height: 45px;
          background: var(--cert-color);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 1.25rem;
          flex-shrink: 0;
        }

        .cert-content {
          flex: 1;
        }

        .cert-content h4 {
          font-size: 1rem;
          font-weight: 600;
          color: #2c3e50;
          margin: 0 0 0.25rem;
        }

        .cert-content p {
          font-size: 0.9rem;
          color: #666;
          margin: 0;
        }

        .cert-date {
          display: inline-block;
          margin-top: 0.5rem;
          font-size: 0.85rem;
          color: var(--cert-color);
          font-weight: 500;
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
            transform: translateY(20px);
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
          
          .timeline-dot {
            width: 32px;
            height: 32px;
            font-size: 0.9rem;
          }

          .timeline-connector {
            left: 15px;
          }

          .degree-badge {
            font-size: 0.85rem;
            padding: 6px 12px;
          }

          .period-badge {
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

export default Education
