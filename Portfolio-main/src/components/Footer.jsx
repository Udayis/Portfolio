function Footer() {
    const currentYear = new Date().getFullYear()

    return (
      <footer className="footer-enhanced text-white pt-5 pb-3">
        <div className="container">
          <div className="row align-items-center gy-4">
            <div className="col-12 col-md-6 text-center text-md-start mb-3 mb-md-0">
              <h2 className="footer-brand mb-2">Uday's <span className="footer-highlight">Portfolio</span></h2>
              <div className="footer-divider mx-auto mx-md-0 mb-3"></div>
              <p className="footer-desc mb-0">
                Creating engaging digital experiences with modern web technologies.<br />Let's build something amazing together.
              </p>
            </div>
            <div className="col-12 col-md-6 text-center text-md-end">
              <div className="d-flex justify-content-center justify-content-md-end gap-3 mb-3">
                <a
                  href="https://www.linkedin.com/in/uday-rathod-818293300?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon linkedin"
                  aria-label="LinkedIn"
                >
                  <i className="bi bi-linkedin"></i>
                </a>
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
                  href="tel:+919313353147"
                  className="social-icon phone"
                  aria-label="Phone"
                >
                  <i className="bi bi-telephone-fill"></i>
                </a>
                <a
                  href="mailto:udayrathod060@gmail.com"
                  className="social-icon email"
                  aria-label="Email"
                >
                  <i className="bi bi-envelope-fill"></i>
                </a>
              </div>
              <div className="footer-copyright text-white-50 mt-2">
                &copy; {currentYear} Uday's Portfolio. All rights reserved.
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          .footer-enhanced {
            background: linear-gradient(90deg, #0f2027 0%, #2c5364 100%);
            border-top-left-radius: 32px;
            border-top-right-radius: 32px;
            box-shadow: 0 -2px 24px rgba(44, 83, 100, 0.12);
          }
          .footer-brand {
            font-family: 'Poppins', 'Segoe UI', Arial, sans-serif;
            font-size: 2rem;
            font-weight: 700;
            letter-spacing: 1px;
            color: #fff;
            margin-bottom: 0.25rem;
          }
          .footer-highlight {
            color: #4A90E2;
            font-weight: 800;
            letter-spacing: 2px;
          }
          .footer-divider {
            width: 60px;
            height: 3px;
            background: linear-gradient(90deg, #4A90E2 0%, #50C878 100%);
            border-radius: 2px;
            margin-bottom: 0.5rem;
          }
          .footer-desc {
            font-size: 1.1rem;
            color: #e0e0e0;
            font-family: 'Inter', 'Segoe UI', Arial, sans-serif;
            line-height: 1.6;
          }
          .social-icon {
            width: 44px;
            height: 44px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 12px;
            font-size: 1.35rem;
            transition: all 0.3s ease;
            background: rgba(255, 255, 255, 0.08);
            color: #fff;
            border: 1.5px solid rgba(74, 144, 226, 0.15);
          }
          .social-icon:hover {
            transform: translateY(-6px) scale(1.08);
            box-shadow: 0 6px 18px rgba(74, 144, 226, 0.18);
          }
          .social-icon.github:hover {
            background: #333;
            color: #fff;
            box-shadow: 0 5px 15px rgba(51, 51, 51, 0.4);
          }
          .social-icon.linkedin:hover {
            background: #0077B5;
            color: #fff;
            box-shadow: 0 5px 15px rgba(0, 119, 181, 0.4);
          }
          .social-icon.phone:hover {
            background: #198754;
            color: #fff;
            box-shadow: 0 5px 15px rgba(25, 135, 84, 0.4);
          }
          .social-icon.email:hover {
            background: #EA4335;
            color: #fff;
            box-shadow: 0 5px 15px rgba(234, 67, 53, 0.4);
          }
          .footer-copyright {
            font-size: 0.95rem;
            color: #b0b8c1;
            letter-spacing: 0.5px;
          }
          @media (max-width: 767.98px) {
            .footer-brand {
              font-size: 1.5rem;
            }
            .footer-divider {
              width: 40px;
              height: 2px;
            }
            .footer-desc {
              font-size: 1rem;
            }
            .social-icon {
              width: 40px;
              height: 40px;
              font-size: 1.1rem;
            }
          }
        `}</style>
      </footer>
    )
  }

  export default Footer
