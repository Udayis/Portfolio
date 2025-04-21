"use client"

import { useInView } from "react-intersection-observer"

function ContinuousLearning() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const technologies = [
    { name: "Next.js", color: "#0070f3" },
    { name: "GraphQL", color: "#e535ab" },
    { name: "React Native", color: "#61dafb" },
    { name: "Web3", color: "#ff4a8d" },
    { name: "AWS", color: "#ff9900" }
  ]

  return (
    <section className="learning-section py-5 position-relative overflow-hidden bg-light" id="learning">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10 col-sm-12 text-center mb-5">
            <h2 className="display-6 fw-bold mb-4">
              Continuous Learning
            </h2>
            <p className="text-muted fs-5">
              Beyond formal education, I'm passionate about staying at the forefront of technology.
              Currently exploring and mastering these cutting-edge technologies:
            </p>
          </div>
        </div>

        <div 
          ref={ref}
          className={`row justify-content-center ${inView ? 'animate-fade-in' : 'opacity-0'}`}
        >
          <div className="col-lg-10">
            <div className="card custom-card shadow-sm border-0">
              <div className="card-body p-4 p-md-5">
                <div className="d-flex flex-wrap gap-3 mb-5">
                  {technologies.map((tech, index) => (
                    <div
                      key={tech.name}
                      className="tech-badge"
                      style={{
                        animationDelay: `${index * 100}ms`,
                        backgroundColor: `${tech.color}15`,
                        color: tech.color,
                      }}
                    >
                      {tech.name}
                    </div>
                  ))}
                </div>

                <div className="learning-progress">
                  <div className="progress-item mb-4">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <span className="text-muted fw-medium">Next.js Development</span>
                      <span className="badge bg-primary rounded-pill">Advanced</span>
                    </div>
                    <div className="progress rounded-pill">
                      <div 
                        className="progress-bar rounded-pill" 
                        role="progressbar" 
                        style={{ width: '85%' }} 
                        aria-valuenow="85" 
                        aria-valuemin="0" 
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>

                  <div className="progress-item mb-4">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <span className="text-muted fw-medium">GraphQL & API Design</span>
                      <span className="badge bg-primary rounded-pill">Intermediate</span>
                    </div>
                    <div className="progress rounded-pill">
                      <div 
                        className="progress-bar rounded-pill" 
                        role="progressbar" 
                        style={{ width: '75%' }} 
                        aria-valuenow="75" 
                        aria-valuemin="0" 
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>

                  <div className="progress-item">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <span className="text-muted fw-medium">Web3 Development</span>
                      <span className="badge bg-primary rounded-pill">Learning</span>
                    </div>
                    <div className="progress rounded-pill">
                      <div 
                        className="progress-bar rounded-pill" 
                        role="progressbar" 
                        style={{ width: '60%' }} 
                        aria-valuenow="60" 
                        aria-valuemin="0" 
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="position-absolute top-0 start-0 w-100 h-100" style={{ zIndex: -1, overflow: 'hidden', pointerEvents: 'none' }}>
        <div
          className="position-absolute bg-primary bg-opacity-10 rounded-circle"
          style={{
            width: '400px',
            height: '400px',
            filter: 'blur(80px)',
            top: '10%',
            left: '-10%',
            animation: 'float 8s ease-in-out infinite',
          }}
        ></div>
        <div
          className="position-absolute bg-primary bg-opacity-10 rounded-circle"
          style={{
            width: '500px',
            height: '500px',
            filter: 'blur(90px)',
            bottom: '-20%',
            right: '-10%',
            animation: 'float 10s ease-in-out infinite',
          }}
        ></div>
      </div>
    </section>
  )
}

export default ContinuousLearning 