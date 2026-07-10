import React from 'react'

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer-top">
          {/* Brand */}
          <div className="footer-brand">
            <h2 className="footer-logo">WeddingHub</h2>
            <p className="footer-tagline">
              Elevating Traditions with Modern Elegance. Your ultimate partner for
              weddings in Karachi.
            </p>
          </div>

          {/* Platform */}
          <div className="footer-col">
            <h4 className="footer-col-title">Platform</h4>
            <ul className="footer-links">
              <li><a href="#">Vendors</a></li>
              <li><a href="#">AI Planner</a></li>
              <li><a href="#">Guest List</a></li>
              <li><a href="#">Budget Tracker</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="footer-col">
            <h4 className="footer-col-title">Resources</h4>
            <ul className="footer-links">
              <li><a href="#">Wedding Blogs</a></li>
              <li><a href="#">Planning Guides</a></li>
              <li><a href="#">E-Invites</a></li>
              <li><a href="#">Vendor FAQ</a></li>
            </ul>
          </div>

          {/* Company */}
          <div className="footer-col">
            <h4 className="footer-col-title">Company</h4>
            <ul className="footer-links">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p className="footer-copy">
            © 2024 WeddingWala. Elevating Traditions with Modern Elegance.
          </p>
          <div className="footer-socials">
            <a href="#" aria-label="Instagram" className="social-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
              </svg>
            </a>
            <a href="#" aria-label="Facebook" className="social-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </a>
            <a href="#" aria-label="Email" className="social-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </a>
          </div>
        </div>
      </footer>
  )
}

export default Footer