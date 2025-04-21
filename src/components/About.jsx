import { useInView } from "react-intersection-observer"
import aboutusImage from "../assets/images/uday rathod.jpg"

function About() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <section id="about" className="py-5 section-bg">
      <div className="container py-5">
        <div className="text-center mb-5">
          <h2 className="display-5 mb-4">
            About <span className="text-primary">Me</span>
          </h2>
          <p className="text-muted mx-auto" style={{ maxWidth: "800px", fontSize: "1.2rem" }}>
            Passionate full stack developer with a keen eye for creating engaging user experiences and modern web applications.
          </p>
        </div>

        <div ref={ref} className={`row align-items-center g-5 ${inView ? "animate-fade-in" : "opacity-0"}`}>
          <div className="col-lg-5 position-relative">
            <div className="position-relative z-1 rounded-4 overflow-hidden shadow-lg image-wrapper">
              <img src={aboutusImage} alt="About Me" className="img-fluid hover-scale" />
              <div className="image-overlay"></div>
            </div>
            <div
              className="position-absolute bottom-0 end-0 translate-middle-x rounded-4 w-100 h-100"
              style={{ zIndex: -1, transform: "translate(20px, 20px)" }}
            ></div>
          </div>

          <div className="col-lg-7">
            <div className="content-wrapper">
              <h3 className="fs-2 fw-bold mb-4 animate-up">Full Stack Developer</h3>
              <p className="text-muted mb-4 animate-up delay-1">
                Dynamic full stack developer with expertise in MERN stack development. Skilled in creating efficient and scalable web applications with modern technologies.
              </p>
              <p className="text-muted mb-4 animate-up delay-2">
                Passionate about developing innovative solutions and continuously learning new technologies. Committed to writing clean, maintainable code and creating exceptional user experiences.
              </p>

              <div className="row info-grid">
                <div className="col-md-6 mb-3">
                  <div className="info-card animate-up delay-4">
                    <i className="bi bi-person text-primary"></i>
                    <div>
                      <p className="fw-medium mb-1">Name:</p>
                      <p className="text-muted mb-0">Deep Gadhiya</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <div className="info-card animate-up delay-4">
                    <i className="bi bi-envelope text-primary"></i>
                    <div>
                      <p className="fw-medium mb-1">Email:</p>
                      <p className="text-muted mb-0">deepgadhiya20@gmail.com</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <div className="info-card animate-up delay-5">
                    <i className="bi bi-geo-alt text-primary"></i>
                    <div>
                      <p className="fw-medium mb-1">Location:</p>
                      <p className="text-muted mb-0">Morbi, Gujarat, India</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <div className="info-card animate-up delay-5">
                    <i className="bi bi-briefcase text-primary"></i>
                    <div>
                      <p className="fw-medium mb-1">Experience:</p>
                      <p className="text-muted mb-0">2+ Years</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .display-5 {
          font-weight: 600;
          margin-bottom: 1.5rem;
        }

        .image-wrapper {
          position: relative;
          transition: transform 0.3s ease;
        }

        .image-wrapper:hover {
          transform: translateY(-5px);
        }

        .hover-scale {
          transition: transform 0.5s ease;
        }

        .image-wrapper:hover .hover-scale {
          transform: scale(1.05);
        }

        .image-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(var(--bs-primary-rgb), 0.1) 100%);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .image-wrapper:hover .image-overlay {
          opacity: 1;
        }

        .content-wrapper {
          padding: 1rem;
        }

        .info-card {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem;
          background: var(--bs-light);
          border-radius: 12px;
          transition: all 0.3s ease;
        }

        .info-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .info-card i {
          font-size: 1.5rem;
        }

        .animate-up {
          opacity: 0;
          transform: translateY(20px);
          animation: fadeUp 0.5s ease forwards;
        }

        .delay-1 { animation-delay: 0.2s; }
        .delay-2 { animation-delay: 0.4s; }
        .delay-3 { animation-delay: 0.6s; }
        .delay-4 { animation-delay: 0.8s; }
        .delay-5 { animation-delay: 1s; }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fadeIn 1s ease;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </section>
  )
}

export default About
