import React from 'react'
import Navbar from './clientComponents/Navbar'
import Services1 from './clientComponents/Services1'
import PopularDeals1 from './clientComponents/PopularDeals1'
import "./styleSheet.css"
const LandingPage = () => {

  const stats = [
    { value: "200+", label: "Verified Vendors" },
    { value: "500+", label: "Weddings Planned" },
    { value: "Karachi's #1", label: "Platform" },
    { value: "4.8", label: "Rated by Couples" },
  ];

  const steps = [
    {
      num: 1,
      title: "Create Profile",
      desc: "Tell us about your shadi date, guest count, and budget.",
    },
    {
      num: 2,
      title: "Browse Vendors",
      desc: "Shortlist from 200+ verified venues and professionals in Karachi.",
    },
    {
      num: 3,
      title: "Manage Guests",
      desc: "Send digital invites and track RSVPs in real-time.",
    },
  ];

  const reviews = [
    {
      id: 1,
      text: "WeddingWala saved us so much time! The AI Planner predicted our budget perfectly and found us the best venue in Clifton within 24 hours.",
      name: "Sana & Ahmad",
      date: "Married Oct 2023",
      initials: "S&A",
    },
    {
      id: 2,
      text: "Managing RSVPs from 400 guests was a nightmare before we found this app. The digital invitation system is a game changer for Karachi weddings!",
      name: "Zainab & Hamza",
      date: "Married Dec 2023",
      initials: "Z&H",
    },
    {
      id: 3,
      text: "As someone living abroad and planning a wedding in Karachi, WeddingWala was my eyes and ears. Highly professional vendors and support.",
      name: "Mariam & Fahad",
      date: "Married Jan 2024",
      initials: "M&F",
    },
  ];

  return (
    <>
      <Navbar />

      <div className='landing-page d-flex flex-column align-items-center justify-content-center text-center text-white pt-5' style={{ height: '100vh' }}>
        <h1 style={{ fontFamily: 'serif' }} className='fw-bold'>Your Dream Shadi,  <br /> <span style={{ color: '#FFE088' }}>Planned Intelligently.</span></h1>
        <h5 className='fst-italic fw-normal'>From venue to valima — plan everything in one place.</h5>

        <div className="d-flex gap-3 mt-3">
          <button className='btn px-lg-5 py-3 start-planning-btn' style={{ backgroundColor: '#D4AF37', color: '#610000' }}>Start Planning</button>
          <button className='btn btn-outline-light px-lg-5 py-3'>View Demo</button>
        </div>
      </div>

      {/* 2nd Section - Stats */}
      <div className="p-4">
        <div className="stats-bar">
          {stats.map((s, i) => (
            <React.Fragment key={i}>
              <div className="stat-item">
                <span className="stat-value">{s.value}</span>
                <span className="stat-label">{s.label}</span>
              </div>
              {i < stats.length - 1 && <div className="stat-divider" />}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* 3rd section  */}

      <Services1 />

      {/* 4th section */}

      <section className="how-section py-5">
        <h5 className="how-eyebrow my-5">How it Works</h5>
        <div className="how-steps">
          {steps.map((step) => (
            <div key={step.num} className="how-step">
              <div className="how-circle">{step.num}</div>
              {step.num < 3 && <div className="how-line" />}
              <h3 className="how-title">{step.title}</h3>
              <p className="how-desc">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5th section */}

      <PopularDeals1 />


      {/* 6th section */}

      <section className="testimonials-section">
        <p className="testimonials-eyebrow">Happy Couples</p>
        <div className="testimonials-grid">
          {reviews.map((r) => (
            <div key={r.id} className="testimonial-card">
              <span className="quote-mark fw-bold">"</span>
              <p className="testimonial-text">{r.text}</p>
              <div className="testimonial-author">
                <div className="author-avatar">{r.initials}</div>
                <div className="d-flex flex-column justify-content-center">
                  <p className="author-name">{r.name}</p>
                  <p className="author-date">{r.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7th section */}

      <section className="cta-section mt-3 mt-lg-0 mt-md-0">
        <p className="cta-eyebrow">Ready to start your journey?</p>
        <p className="cta-subtext">Join 1000+ couples planning their dream wedding with ease.</p>
        <button className="cta-btn">Get Started Free</button>
      </section>

      {/* 8th section */}

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




    </>
  )
}

export default LandingPage