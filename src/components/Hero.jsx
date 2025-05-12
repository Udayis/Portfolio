"use client"

import { useEffect, useRef, useState } from "react"
import profileImage from "../assets/images/uday rathod.jpeg"
function Hero() {
  const heroRef = useRef(null)
  const imageRef = useRef(null)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [loopNum, setLoopNum] = useState(0)
  const [typingSpeed, setTypingSpeed] = useState(150)

  const toRotate = [
    "Web Developer",
    "Frontend Developer",
    "React Developer",
    "UI Developer"
  ]
  const period = 1500

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, typingSpeed);

    return () => clearInterval(ticker);
  }, [displayText, isDeleting, loopNum]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting 
      ? fullText.substring(0, displayText.length - 1)
      : fullText.substring(0, displayText.length + 1);

    setDisplayText(updatedText);

    if (isDeleting) {
      setTypingSpeed(50);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setTypingSpeed(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setTypingSpeed(100);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in")
            if (entry.target === imageRef.current) {
              entry.target.classList.add("animate-float")
            }
          }
        })
      },
      { threshold: 0.1, rootMargin: "50px" }
    )

    const heroElement = heroRef.current
    const imageElement = imageRef.current

    if (heroElement) observer.observe(heroElement)
    if (imageElement) observer.observe(imageElement)

    return () => {
      if (heroElement) observer.unobserve(heroElement)
      if (imageElement) observer.unobserve(imageElement)
    }
  }, [])

  const scrollToAbout = () => {
    const aboutSection = document.querySelector("#about")
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="home"
      className="d-flex align-items-center position-relative overflow-hidden"
      style={{ 
        minHeight: "100vh"
      }}
    >
      <div className="container">
        <div className="row align-items-center">
          {/* Image Column */}
          <div className="col-lg-6 col-md-12 mb-4 mb-lg-0">
            <div
              ref={imageRef}
              className="position-relative image-container"
              style={{ 
                perspective: "1000px",
                transformStyle: "preserve-3d"
              }}
            >
              <div
                className="rounded-circle overflow-hidden border border-4 border-primary shadow-lg profile-image"
                style={{
                  width: "280px",
                  height: "280px",
                  margin: "0 auto",
                  transform: "rotateY(0deg)",
                  transition: "all 0.5s ease",
                  position: "relative",
                  zIndex: "1"
                }}
              >
                <img
                  src={profileImage}
                  alt="Profile"
                  className="w-100 h-100 object-fit-cover"
                  style={{ transform: "scale(1.05)" }}
                />
              </div>

              {/* Animated background elements */}
              <div className="animated-bg">
                <div className="circle circle-1"></div>
                <div className="circle circle-2"></div>
                <div className="circle circle-3"></div>
              </div>

              {/* Floating particles */}
              <div className="particles">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className={`particle particle-${i + 1}`}></div>
                ))}
              </div>
            </div>
          </div>

          {/* Content Column */}
          <div className="col-lg-6 col-md-12">
            <div ref={heroRef}>
              <h1 className="display-3 fw-bold mb-3">
                <span className="text-primary">Hello, I'm </span>
                <span className="text-gradient">UDAY RATHOD</span>
              </h1>
              <div className="fs-2 fw-medium mb-4">
                <div className="typing-container" style={{ borderRight: 'none' }}>
                  <span className="typing-text">{displayText}</span>
                  <div className="typing-cursor"></div>
                </div>
              </div>
              <p className="fs-5 text-muted mb-4" style={{ maxWidth: "600px" }}>
                I create beatiful and functional web applications with mordern technologies. Passionate about clean code and user-centered design.
              </p>
              <div className="d-flex flex-wrap gap-3 mb-4">
                <button
                  className="btn btn-primary btn-lg rounded-pill px-4"
                  onClick={scrollToAbout}
                >
                  View My Work
                </button>
                
                <button
                  className="btn btn-outline-primary btn-lg rounded-pill px-4"
                  onClick={() => {
                    const contactSection = document.querySelector("#contact")
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: "smooth" })
                    }
                  }}
                >
                  Contact Me
                </button>
              </div>
              {/* Social Links */}
              <div className="d-flex gap-3">
                <a
                  href="https://github.com/Udayis"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon github"
                  aria-label="GitHub"
                >
                  <i className="bi bi-github"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/uday-rathod-818293300?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app


"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon linkedin"
                  aria-label="LinkedIn"
                >
                  <i className="bi bi-linkedin"></i>
                </a>
                <a
                  href="mailto:udayrathod060@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon email"
                  aria-label="Email"
                >
                  <i className="bi bi-envelope"></i>
                </a>
                <a
                  href="tel:+919313353147"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon phone"
                  aria-label="Phone"
                >
                  <i className="bi bi-telephone"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background elements */}
      <div className="position-absolute top-0 start-0 w-100 h-100" style={{ zIndex: -1 }}>
        <div
          className="position-absolute top-25 start-25 bg-primary bg-opacity-10 rounded-circle"
          style={{ width: "250px", height: "250px", filter: "blur(60px)" }}
        ></div>
        <div
          className="position-absolute bottom-25 end-25 bg-primary bg-opacity-10 rounded-circle"
          style={{ width: "350px", height: "350px", filter: "blur(70px)" }}
        ></div>
      </div>

      <style jsx>{`
        .image-container {
          animation: float 4s ease-in-out infinite;
          padding: 1rem;
          will-change: transform;
        }

        .profile-image {
          position: relative;
          cursor: pointer;
          will-change: transform;
        }

        .profile-image:hover {
          transform: translateY(-10px) rotateY(10deg) !important;
          box-shadow: 0 25px 50px -12px rgba(var(--bs-primary-rgb), 0.25);
        }

        .animated-bg {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 100%;
          height: 100%;
          z-index: -1;
        }

        .circle {
          position: absolute;
          border-radius: 50%;
          opacity: 0.15;
          transform: translate(-50%, -50%);
        }

        .circle-1 {
          width: 300px;
          height: 300px;
          background: var(--bs-primary);
          animation: pulse 4s ease-in-out infinite;
        }

        .circle-2 {
          width: 260px;
          height: 260px;
          background: var(--bs-info);
          animation: pulse 4s ease-in-out infinite 1s;
        }

        .circle-3 {
          width: 240px;
          height: 240px;
          background: var(--bs-warning);
          animation: pulse 4s ease-in-out infinite 2s;
        }

        .particles {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          overflow: hidden;
          z-index: 2;
          pointer-events: none;
        }

        .particle {
          position: absolute;
          width: 6px;
          height: 6px;
          background: var(--bs-primary);
          border-radius: 50%;
          opacity: 0.3;
          will-change: transform;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1) translate(-50%, -50%); opacity: 0.1; }
          50% { transform: scale(1.1) translate(-45%, -45%); opacity: 0.2; }
        }

        .particle-1 { animation: moveParticle1 6s infinite; top: 20%; left: 10%; }
        .particle-2 { animation: moveParticle2 8s infinite; top: 60%; right: 10%; }
        .particle-3 { animation: moveParticle3 7s infinite; bottom: 20%; left: 15%; }

        .social-icon {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 10px;
          font-size: 1.25rem;
          transition: all 0.3s ease;
          background: var(--bs-light);
        }

        .social-icon:hover {
          transform: translateY(-5px);
        }

        .social-icon.github {
          color: #333;
        }
        .social-icon.github:hover {
          background: #333;
          color: white;
          box-shadow: 0 5px 15px rgba(51, 51, 51, 0.4);
        }

        .social-icon.linkedin {
          color: #0077B5;
        }
        .social-icon.linkedin:hover {
          background: #0077B5;
          color: white;
          box-shadow: 0 5px 15px rgba(0, 119, 181, 0.4);
        }

        .social-icon.twitter {
          color: #1DA1F2;
        }
        .social-icon.twitter:hover {
          background: #1DA1F2;
          color: white;
          box-shadow: 0 5px 15px rgba(29, 161, 242, 0.4);
        }

        .social-icon.email {
          color: #EA4335;
        }
        .social-icon.email:hover {
          background: #EA4335;
          color: white;
          box-shadow: 0 5px 15px rgba(234, 67, 53, 0.4);
        }

        .social-icon.phone {
          background: rgba(255,255,255,0.08);
          color: #111;
          border: 1.5px solid rgba(74,144,226,0.1);
        }
        .social-icon.phone:hover {
          background: #111;
          color: #fff;
          box-shadow: 0 5px 15px rgba(0,0,0,0.18);
          border: 1.5px solid #111;
        }

        @media (max-width: 991.98px) {
          .profile-image {
            width: 240px !important;
            height: 240px !important;
          }
          
          .circle-1 { width: 260px; height: 260px; }
          .circle-2 { width: 220px; height: 220px; }
          .circle-3 { width: 200px; height: 200px; }
        }

        @media (max-width: 767.98px) {
          .profile-image {
            width: 200px !important;
            height: 200px !important;
          }
          
          .circle-1 { width: 220px; height: 220px; }
          .circle-2 { width: 180px; height: 180px; }
          .circle-3 { width: 160px; height: 160px; }
          
          .display-3 {
            font-size: 2.25rem !important;
          }
        }
      `}</style>
    </section>
  )
}

export default Hero
