function Footer() {
    const currentYear = new Date().getFullYear()
  
    return (
      <footer className="py-5 bg-dark text-white">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 mb-4 mb-md-0">
              <h2 className="fs-3 fw-bold text-primary mb-3">Portfolio</h2>
              <p className="text-white-50 mb-0" style={{ maxWidth: "500px" }}>
                Creating engaging digital experiences with modern web technologies. Let's build something amazing
                together.
              </p>
            </div>
  
            <div className="col-md-6 text-md-end">
              <div className="d-flex justify-content-md-end justify-content-center gap-3 mb-3">
                
                <a
                  href="https://www.linkedin.com/in/deep-gadhiya-037039361?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon linkedin"
                  aria-label="LinkedIn"
                >
                  <i className="bi bi-linkedin"></i>
                </a>
                <a
                  href="https://x.com/deep_gadhiya_?t=gHfwzoOJC4M3hmVyX16XMQ&s=09"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon twitter"
                  aria-label="Twitter"
                >
                  <i className="bi bi-twitter-x"></i>
                </a>
                <a 
                  href="mailto:deepgadhiya20@gmail.com" 
                  className="social-icon email" 
                  aria-label="Email"
                >
                  <i className="bi bi-envelope-fill"></i>
                </a>
              </div>
              <p className="text-white-50 mb-0">© {currentYear} Deep Gadhiya. All rights reserved.</p>
            </div>
          </div>
        </div>

        <style jsx>{`
          .social-icon {
            width: 40px;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 10px;
            font-size: 1.25rem;
            transition: all 0.3s ease;
            background: rgba(255, 255, 255, 0.1);
            color: white;
          }

          .social-icon:hover {
            transform: translateY(-5px);
          }

          .social-icon.github:hover {
            background: #333;
            box-shadow: 0 5px 15px rgba(51, 51, 51, 0.4);
          }

          .social-icon.linkedin:hover {
            background: #0077B5;
            box-shadow: 0 5px 15px rgba(0, 119, 181, 0.4);
          }

          .social-icon.twitter:hover {
            background: #1DA1F2;
            box-shadow: 0 5px 15px rgba(29, 161, 242, 0.4);
          }

          .social-icon.email:hover {
            background: #EA4335;
            box-shadow: 0 5px 15px rgba(234, 67, 53, 0.4);
          }
        `}</style>
      </footer>
    )
  }
  
  export default Footer
  