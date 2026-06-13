import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login_Page.css";

const Logo = () => (
  <svg width="48" height="60" viewBox="0 0 48 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="24" cy="16" rx="10" ry="14" fill="white" opacity="0.95" />
    <ellipse cx="24" cy="44" rx="10" ry="14" fill="#C1453A" opacity="0.85" />
    <ellipse cx="24" cy="30" rx="5" ry="5" fill="white" opacity="0.6" />
  </svg>
);

const GoogleIcon = () => (
  <svg width="20" height="20" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
    <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
    <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
    <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
    <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.35-8.16 2.35-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
  </svg>
);

const EyeIcon = ({ open }) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    {open ? (
      <>
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
        <circle cx="12" cy="12" r="3"/>
      </>
    ) : (
      <>
        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/>
        <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/>
        <line x1="1" y1="1" x2="23" y2="23"/>
      </>
    )}
  </svg>
);

const MailIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
);

const LockIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
    <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
  </svg>
);

const FlowerIcon = () => (
  <svg width="36" height="36" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    {[0, 60, 120, 180, 240, 300].map((deg, i) => (
      <ellipse key={i} cx="16" cy="9" rx="4" ry="8"
        transform={`rotate(${deg} 16 16)`}
        fill="#C1453A" opacity="0.5" />
    ))}
    <circle cx="16" cy="16" r="4" fill="#C1453A" opacity="0.6" />
  </svg>
);

export default function Login_Page() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [activeTab, setActiveTab] = useState("login");

  return (
    <div className="ww-root">
      <div className="ww-page">

        {/* LEFT PANEL */}
        <div className="ww-left">
          <div className="ww-left-overlay" />

          <div className="ww-brand-row">
            <Logo />
            <span className="ww-brand-name">WeddingWala</span>
          </div>

          <h1 className="ww-tagline">Your Journey Begins Here</h1>

          <div className="ww-divider" />

          <p className="ww-trust">"Trusted by 500+ couples in Karachi."</p>

          <div className="ww-flower">
            <FlowerIcon />
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="ww-right">

          <nav className="ww-nav">
            <button
              className={`ww-nav-btn ${activeTab === "login" ? "active" : ""}`}
              onClick={() => navigate("/login")}
            >
              Login
            </button>
            <button
              className={`ww-nav-btn ${activeTab === "register" ? "active" : ""}`}
              onClick={() => navigate("/sign-up")}
            >
              Register
            </button>
          </nav>

          <div className="ww-card">
            <h2 className="ww-card-title">Welcome Back</h2>
            <p className="ww-card-subtitle">Login to continue planning your perfect day.</p>

            {/* Email */}
            <div className="ww-field-group">
              <label className="ww-label">Email Address</label>
              <div className="ww-input-wrapper">
                <span className="ww-input-icon"><MailIcon /></span>
                <input
                  type="email"
                  placeholder="amina@example.com"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  className="ww-input"
                />
              </div>
            </div>

            {/* Password */}
            <div className="ww-field-group">
              <div className="ww-label-row">
                <label className="ww-label">Password</label>
                <a href="#" className="ww-forgot">Forgot Password?</a>
              </div>
              <div className="ww-input-wrapper">
                <span className="ww-input-icon"><LockIcon /></span>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  className="ww-input"
                />
                <button
                  className="ww-eye-btn"
                  onClick={() => setShowPassword(v => !v)}
                  type="button"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  <EyeIcon open={showPassword} />
                </button>
              </div>
            </div>

            <button className="ww-login-btn" type="button" onClick={() => navigate("/landingpage")}>Login</button>

            <div className="ww-or-row">
              <div className="ww-or-line" />
              <span className="ww-or-text">OR</span>
              <div className="ww-or-line" />
            </div>

            <button className="ww-google-btn" type="button">
              <GoogleIcon />
              Continue with Google
            </button>

            <div className="ww-signup-row">
              Don't have an account?
                
               <div href="#"
                className="ww-signup-link"
                onClick={e => { e.preventDefault(); navigate("/sign-up"); }}>
              <a>
                Sign Up
              </a>
              </div> 
            </div>
          </div>

          <footer className="ww-footer">
            © 2024 WeddingWala. Crafted with love.
          </footer>
        </div>
      </div>
    </div>
  );
}