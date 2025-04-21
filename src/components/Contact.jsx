"use client"

import { useState, useEffect } from "react"
import { useInView } from "react-intersection-observer"

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState({
    submitted: false,
    success: false,
    error: null,
  })

  const WEB3FORMS_ACCESS_KEY = "1cc490aa-e408-4922-85aa-f85e85a1b883";

  const { ref: sectionRef, inView: sectionInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const { ref: formRef, inView: formInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
    delay: 200,
  })

  const { ref: infoRef, inView: infoInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
    delay: 400,
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ submitted: false, success: false, error: null })

    const dataToSend = {
      ...formData,
      access_key: WEB3FORMS_ACCESS_KEY,
      subject: formData.subject || `New Contact from ${formData.name}`,
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(dataToSend),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus({ submitted: true, success: true, error: null });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        console.error("Form submission error:", result);
        setSubmitStatus({
          submitted: true,
          success: false,
          error: result.message || "An error occurred. Please try again.",
        });
      }
    } catch (error) {
      console.error("Network or fetch error:", error);
      setSubmitStatus({
        submitted: true,
        success: false,
        error: "Could not send message. Check your network connection.",
      });
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-5 section-bg">
      <div className="container py-5">
        <div className="text-center mb-5">
          <h2 className="display-5 mb-4">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-muted mx-auto" style={{ maxWidth: "800px", fontSize: "1.2rem" }}>
            Have a project in mind or want to discuss potential opportunities? Feel free to reach out. I'm always open
            to new ideas and collaborations.
          </p>
        </div>

        <div className="row g-4 justify-content-center">
          <div className="col-lg-6 col-md-12 mb-4 mb-lg-0">
            <div 
              ref={formRef} 
              className={`card custom-card shadow-sm ${formInView ? 'animate-slide-up' : 'opacity-0'}`}
            >
              <div className="card-header bg-transparent border-0 pt-4 px-4">
                <h3 className="fs-4 mb-1">Send Me a Message</h3>
                <p className="text-muted mb-0">Fill out the form below and I'll get back to you shortly.</p>
              </div>
              <div className="card-body p-4">
                <form onSubmit={handleSubmit} className="needs-validation">
                  <input type="checkbox" name="botcheck" id="botcheck" style={{display: "none"}} />
                  
                  <div className="row g-3 mb-3">
                    <div className="col-md-6">
                      <label htmlFor="name" className="form-label text-muted">
                        Your Name
                      </label>
                      <input
                        type="text"
                        className="form-control form-control-lg bg-light"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="email" className="form-label text-muted">
                        Your Email
                      </label>
                      <input
                        type="email"
                        className="form-control form-control-lg bg-light"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="subject" className="form-label text-muted">
                      Subject
                    </label>
                    <input
                      type="text"
                      className="form-control form-control-lg bg-light"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Project Inquiry"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="message" className="form-label text-muted">
                      Message
                    </label>
                    <textarea
                      className="form-control form-control-lg bg-light"
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project or inquiry..."
                      rows="5"
                      required
                      disabled={isSubmitting}
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className={`btn btn-primary btn-lg rounded-pill px-4 py-2 w-100 ${isSubmitting ? 'disabled' : ''}`}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                        Sending...
                      </>
                    ) : (
                      <>
                        <i className="bi bi-envelope me-2"></i> Send Message
                      </>
                    )}
                  </button>

                  {submitStatus.submitted && submitStatus.success && (
                    <div className="alert alert-success mt-4 animate-fade-in" role="alert">
                      Thank you! Your message has been sent successfully. I'll get back to you soon.
                    </div>
                  )}
                  {submitStatus.submitted && !submitStatus.success && submitStatus.error && (
                    <div className="alert alert-danger mt-4 animate-fade-in" role="alert">
                      <strong>Oops!</strong> {submitStatus.error}
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-12">
            <div 
              ref={infoRef} 
              className={`card custom-card shadow-sm h-100 ${infoInView ? 'animate-slide-up' : 'opacity-0'}`}
              style={{ animationDelay: '200ms' }}
            >
              <div className="card-header bg-transparent border-0 pt-4 px-4">
                <h3 className="fs-4 mb-1">Contact Information</h3>
                <p className="text-muted mb-0">Feel free to reach out through any of these channels.</p>
              </div>
              <div className="card-body p-4">
                <div className="d-flex align-items-center mb-4 contact-item">
                  <div className="icon-circle bg-primary bg-opacity-10 text-primary rounded-circle p-3 me-3">
                    <i className="bi bi-geo-alt fs-4"></i>
                  </div>
                  <div>
                    <h4 className="fs-5 fw-medium mb-1">Location</h4>
                    <p className="text-muted mb-0">Morbi, Gujarat, India</p>
                  </div>
                </div>
                <div className="d-flex align-items-center mb-4 contact-item">
                  <div className="icon-circle bg-primary bg-opacity-10 text-primary rounded-circle p-3 me-3">
                    <i className="bi bi-envelope fs-4"></i>
                  </div>
                  <div>
                    <h4 className="fs-5 fw-medium mb-1">Email</h4>
                    <a href="mailto:deepgadhiya20@gmail.com" className="text-muted text-decoration-none" style={{ textDecoration: 'none !important' }}>
                      deepgadhiya20@gmail.com
                    </a>
                  </div>
                </div>
                <div className="d-flex align-items-center mb-4 contact-item">
                  <div className="icon-circle bg-primary bg-opacity-10 text-primary rounded-circle p-3 me-3">
                    <i className="bi bi-telephone fs-4"></i>
                  </div>
                  <div>
                    <h4 className="fs-5 fw-medium mb-1">Phone</h4>
                    <a href="tel:+916353935950" className="text-muted text-decoration-none hover-primary">
                      +91 6353935950
                    </a>
                  </div>
                </div>

                <div className="mt-4">
                  <h3 className="fs-4 mb-3">Availability</h3>
                  <p className="text-muted mb-4">
                    I'm currently available for freelance work and open to discussing new opportunities. My typical
                    response time is within 24 hours.
                  </p>
                  <div className="bg-primary bg-opacity-10 p-4 rounded-3">
                    <h4 className="fs-5 fw-medium text-primary mb-2">
                      <i className="bi bi-clock me-2"></i>
                      Working Hours
                    </h4>
                    <p className="text-muted mb-0">Monday - Friday: 9:00 AM - 6:00 PM PST</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Background Elements */}
      <div className="position-absolute top-0 start-0 w-100 h-100" style={{ zIndex: -1, overflow: 'hidden', pointerEvents: 'none' }}>
        <div
          className="position-absolute bg-primary bg-opacity-10 rounded-circle"
          style={{
            width: '300px',
            height: '300px',
            filter: 'blur(60px)',
            top: '10%',
            left: '5%',
            animation: 'float 6s ease-in-out infinite',
          }}
        ></div>
        <div
          className="position-absolute bg-primary bg-opacity-10 rounded-circle"
          style={{
            width: '400px',
            height: '400px',
            filter: 'blur(70px)',
            bottom: '10%',
            right: '5%',
            animation: 'float 8s ease-in-out infinite',
          }}
        ></div>
      </div>

      <style jsx>{`
        .section-bg {
          background: linear-gradient(180deg, rgba(var(--bs-primary-rgb), 0.05) 0%, rgba(var(--bs-primary-rgb), 0) 100%);
        }

        .display-5 {
          font-weight: 600;
          margin-bottom: 1.5rem;
        }

        .hover-primary:hover {
          color: var(--bs-primary) !important;
          text-decoration: none !important;
        }

        a {
          text-decoration: none !important;
        }

        a:hover {
          text-decoration: none !important;
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

        .animate-slide-up {
          animation: slideUp 0.6s ease forwards;
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .alert {
          animation: fadeIn 0.5s ease;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .spinner-border-sm {
          width: 1rem;
          height: 1rem;
          border-width: .2em;
        }
      `}</style>
    </section>
  )
}

export default Contact
