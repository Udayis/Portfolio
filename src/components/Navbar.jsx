"use client"

import { useState, useEffect } from "react"

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
]

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id
          setActiveSection(sectionId)
        }
      })
    }

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.2,
      rootMargin: "-20% 0px -20% 0px"
    })

    navLinks.forEach(({ href }) => {
      const sectionId = href.replace('#', '')
      const section = document.getElementById(sectionId)
      if (section) {
        observer.observe(section)
      }
    })

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
      observer.disconnect()
    }
  }, [])

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  const scrollToSection = (href) => {
    closeMenu()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const navbarClasses = `fixed-top ${scrolled ? "bg-light shadow-sm py-2" : "bg-transparent py-3"}`

  return (
    <header className={`${navbarClasses} navbar-light transition`}>
      <div className="container">
        <nav className="navbar navbar-expand-lg">
          <a
            href="#home"
            className="navbar-brand fw-bold text-primary"
            onClick={(e) => {
              e.preventDefault()
              scrollToSection("#home")
            }}
          >
            Portfolio
          </a>

          <button 
            className={`navbar-toggler ${isOpen ? 'active' : ''}`} 
            type="button" 
            onClick={toggleMenu} 
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              {navLinks.map((link) => {
                const sectionId = link.href.replace('#', '')
                return (
                  <li className="nav-item" key={link.name}>
                    <a
                      className={`nav-link px-3 ${activeSection === sectionId ? 'active' : ''}`}
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault()
                        scrollToSection(link.href)
                      }}
                    >
                      {link.name}
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>
        </nav>
      </div>

      {/* Mobile Navigation Menu Overlay */}
      {isOpen && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-75 d-lg-none"
          style={{ zIndex: -1 }}
          onClick={closeMenu}
        ></div>
      )}

      <style jsx>{`
        .navbar-toggler {
          border: none;
          padding: 0.5rem;
          transition: all 0.3s ease;
        }

        .navbar-toggler:focus {
          box-shadow: none;
        }

        .navbar-toggler.active .navbar-toggler-icon {
          transform: rotate(90deg);
        }

        .nav-link {
          position: relative;
          transition: all 0.3s ease;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          width: 0;
          height: 2px;
          background: var(--bs-primary);
          transition: all 0.3s ease;
          transform: translateX(-50%);
        }

        .nav-link:hover::after,
        .nav-link.active::after {
          width: 100%;
        }

        .nav-link.active {
          color: var(--bs-primary) !important;
          font-weight: 600;
        }

        @media (max-width: 991.98px) {
          .navbar-collapse {
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(10px);
            border-radius: 1rem;
            padding: 1rem;
            margin-top: 1rem;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          }

          .nav-link {
            padding: 0.75rem 1rem;
            border-radius: 0.5rem;
            margin: 0.25rem 0;
          }

          .nav-link:hover {
            background: rgba(var(--bs-primary-rgb), 0.1);
          }

          .nav-link.active {
            background: rgba(var(--bs-primary-rgb), 0.1);
          }

          .nav-link::after {
            display: none;
          }
        }
      `}</style>
    </header>
  )
}

export default Navbar
