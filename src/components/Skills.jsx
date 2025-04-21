import { useInView } from "react-intersection-observer"
import { useState } from "react"

const skills = [
  {
    category: "Frontend Development",
    icon: "code-slash",
    color: "#3DDC84",
    items: [
      { 
        name: "React.js", 
        level: 90, 
        icon: "react", 
        color: "#61DAFB",
        customIcon: (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="32" height="32">
            <g fill="none" stroke="#61DAFB" strokeWidth="3">
              <ellipse cx="24" cy="24" rx="11" ry="4.2"/>
              <ellipse cx="24" cy="24" rx="11" ry="4.2" transform="rotate(60 24 24)"/>
              <ellipse cx="24" cy="24" rx="11" ry="4.2" transform="rotate(-60 24 24)"/>
            </g>
          </svg>
        )
      },
      { name: "HTML5", level: 95, icon: "file-earmark-code", color: "#E34F26" },
      { name: "CSS3", level: 90, icon: "file-earmark-code", color: "#1572B6" },
      { name: "Bootstrap", level: 85, icon: "bootstrap", color: "#7952B3" },
      { name: "JavaScript", level: 90, icon: "file-earmark-code", color: "#F7DF1E" },
    ],
  },
  {
    category: "Backend Development",
    icon: "server",
    color: "#4285F4",
    items: [
      { name: "Node.js", level: 85, icon: "node", color: "#339933" },
      { name: "Express.js", level: 85, icon: "server", color: "#000000" },
      { name: "MongoDB", level: 80, icon: "database", color: "#47A248" },
      { name: "RESTful APIs", level: 85, icon: "box-arrow-in-down", color: "#00C7B7" },
    ],
  },
  {
    category: "Development Tools",
    icon: "tools",
    color: "#2a9d8f",
    items: [
      { name: "Git", level: 85, icon: "git", color: "#F05032" },
      { name: "GitHub", level: 85, icon: "github", color: "#181717" },
      { name: "npm", level: 80, icon: "box", color: "#CB3837" },
      { name: "VS Code", level: 90, icon: "code-square", color: "#007ACC" },
    ],
  },
  {
    category: "Soft Skills",
    icon: "people",
    color: "#e76f51",
    items: [
      { name: "Problem Solving", level: 90, icon: "lightbulb", color: "#4A90E2" },
      { name: "Team Collaboration", level: 85, icon: "people", color: "#50C878" },
      { name: "Communication", level: 85, icon: "chat", color: "#9B59B6" },
      { name: "Time Management", level: 80, icon: "clock", color: "#E67E22" },
    ],
  },
]

function Skills() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const [hoveredSkill, setHoveredSkill] = useState(null)

  return (
    <section id="skills" className="py-5 section-bg">
      <div className="container py-5">
        <div className="text-center mb-5">
          <h2 className="display-5 mb-4">
            My <span className="text-primary">Skills</span>
          </h2>
          <p className="text-muted mx-auto" style={{ maxWidth: "800px", fontSize: "1.2rem" }}>
            Here are the technologies and tools I work with to bring ideas to life. I'm constantly learning and
            expanding my skill set.
          </p>
        </div>

        <div ref={ref} className={`row g-4 ${inView ? "animate-fade-in" : "opacity-0"}`}>
          {skills.map((skillGroup, index) => (
            <div 
              key={index} 
              className="col-md-6"
              style={{ 
                animationDelay: `${index * 200}ms`,
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateY(0)' : 'translateY(20px)',
                transition: 'all 0.6s ease-out'
              }}
            >
              <div className="card custom-card h-100 skill-card">
                <div 
                  className="card-header bg-transparent border-0 d-flex align-items-center gap-3 py-4"
                  style={{
                    background: `linear-gradient(45deg, ${skillGroup.color}15, transparent)`
                  }}
                >
                  <div className="skill-icon-wrapper" style={{ backgroundColor: `${skillGroup.color}20` }}>
                    <i className={`bi bi-${skillGroup.icon} fs-4`} style={{ color: skillGroup.color }}></i>
                  </div>
                  <div>
                    <h3 className="card-title fs-4 mb-0">{skillGroup.category}</h3>
                    <p className="card-text text-muted small mb-0">{skillGroup.items.length} skills</p>
                  </div>
                </div>
                <div className="card-body">
                  <div className="skill-grid">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <div
                        key={skillIndex}
                        className="skill-item"
                        onMouseEnter={() => setHoveredSkill(skill.name)}
                        onMouseLeave={() => setHoveredSkill(null)}
                      >
                        <div className="skill-content">
                          <div 
                            className="skill-icon"
                            style={{
                              backgroundColor: `${skill.color}15`,
                              border: `1px solid ${skill.color}30`
                            }}
                          >
                            {skill.customIcon ? skill.customIcon : (
                              <i 
                                className={`bi bi-${skill.icon}`}
                                style={{ color: skill.color }}
                              ></i>
                            )}
                          </div>
                          <div className="skill-info">
                            <h4 className="skill-name">{skill.name}</h4>
                            <div className="skill-level-bar">
                              <div 
                                className="skill-level-fill"
                                style={{ 
                                  width: hoveredSkill === skill.name ? `${skill.level}%` : '0%',
                                  backgroundColor: skill.color
                                }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <style jsx>{`
          .display-5 {
            font-weight: 600;
            margin-bottom: 1.5rem;
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

          .skill-card {
            border: none;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }

          .skill-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 20px rgba(0,0,0,0.1);
          }

          .skill-icon-wrapper {
            width: 48px;
            height: 48px;
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: transform 0.3s ease;
          }

          .skill-card:hover .skill-icon-wrapper {
            transform: scale(1.1);
          }

          .skill-grid {
            display: grid;
            grid-template-columns: repeat(1, 1fr);
            gap: 1rem;
          }

          .skill-item {
            padding: 0.75rem;
            border-radius: 8px;
            transition: all 0.3s ease;
            cursor: pointer;
          }

          .skill-item:hover {
            background-color: var(--bs-light);
          }

          .skill-content {
            display: flex;
            align-items: center;
            gap: 1rem;
          }

          .skill-icon {
            width: 48px;
            height: 48px;
            border-radius: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.3s ease;
          }

          .skill-icon i {
            font-size: 1.5rem;
            transition: transform 0.3s ease;
          }

          .skill-item:hover .skill-icon i {
            transform: scale(1.2);
          }

          .skill-item:hover .skill-icon {
            transform: rotate(5deg);
          }

          .skill-info {
            flex: 1;
          }

          .skill-name {
            font-size: 0.9rem;
            margin-bottom: 0.5rem;
            font-weight: 500;
          }

          .skill-level-bar {
            height: 4px;
            background-color: var(--bs-light);
            border-radius: 2px;
            overflow: hidden;
          }

          .skill-level-fill {
            height: 100%;
            transition: width 0.6s ease-out;
          }

          @media (min-width: 768px) {
            .skill-grid {
              grid-template-columns: repeat(1, 1fr);
            }
          }

          .title-line {
            height: 2px;
            width: 60px;
            background: var(--bs-primary);
            opacity: 0.5;
          }
        `}</style>

        <style global jsx>{`
          /* Custom icons for specific technologies */
          .bi-node::before {
            content: "";
            display: inline-block;
            width: 1em;
            height: 1em;
            background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 448 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='%23339933' d='M224 508c-6.7 0-13.5-1.8-19.4-5.2l-61.7-36.5c-9.2-5.2-4.7-7-1.7-8 12.3-4.3 14.8-5.2 27.9-12.7 1.4-.8 3.2-.5 4.6.4l47.4 28.1c1.7 1 4.1 1 5.7 0l184.7-106.6c1.7-1 2.8-3 2.8-5V149.3c0-2.1-1.1-4-2.9-5.1L226.8 37.7c-1.7-1-4-1-5.7 0L36.6 144.3c-1.8 1-2.9 3-2.9 5.1v213.1c0 2 1.1 4 2.9 4.9l50.6 29.2c27.5 13.7 44.3-2.4 44.3-18.7V167.5c0-3 2.4-5.3 5.4-5.3h23.4c2.9 0 5.4 2.3 5.4 5.3V378c0 36.6-20 57.6-54.7 57.6-10.7 0-19.1 0-42.5-11.6l-48.4-27.9C8.1 389.2.7 376.3.7 362.4V149.3c0-13.8 7.4-26.8 19.4-33.7L204.6 9c11.7-6.6 27.2-6.6 38.8 0l184.7 106.7c12 6.9 19.4 19.8 19.4 33.7v213.1c0 13.8-7.4 26.7-19.4 33.7L243.4 502.8c-5.9 3.4-12.6 5.2-19.4 5.2zm149.1-210.1c0-39.9-27-50.5-83.7-58-57.4-7.6-63.2-11.5-63.2-24.9 0-11.1 4.9-25.9 47.4-25.9 37.9 0 51.9 8.2 57.7 33.8.5 2.4 2.7 4.2 5.2 4.2h24c1.5 0 2.9-.6 3.9-1.7s1.5-2.6 1.4-4.1c-3.7-44.1-33-64.6-92.2-64.6-52.7 0-84.1 22.2-84.1 59.5 0 40.4 31.3 51.6 81.8 56.6 60.5 5.9 65.2 14.8 65.2 26.7 0 20.6-16.6 29.4-55.5 29.4-48.9 0-59.6-12.3-63.2-36.6-.4-2.6-2.6-4.5-5.3-4.5h-23.9c-3 0-5.3 2.4-5.3 5.3 0 31.1 16.9 68.2 97.8 68.2 58.4-.1 92-23.2 92-63.4z'/%3E%3C/svg%3E");
            background-repeat: no-repeat;
            background-position: center;
            background-size: contain;
          }

          .bi-github::before {
            content: "";
            display: inline-block;
            width: 1em;
            height: 1em;
            background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 496 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='%23F05032' d='M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z'/%3E%3C/svg%3E");
            background-repeat: no-repeat;
            background-position: center;
            background-size: contain;
          }
        `}</style>
      </div>
    </section>
  )
}

export default Skills
