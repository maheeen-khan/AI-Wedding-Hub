import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup_Page.css";

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

const CoupleIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
  </svg>
);

const VendorIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
    <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
    <line x1="12" y1="12" x2="12" y2="16"/>
    <line x1="10" y1="14" x2="14" y2="14"/>
  </svg>
);

const SunIcon = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="18" cy="18" r="6" fill="#C1453A" opacity="0.5"/>
    {[0,45,90,135,180,225,270,315].map((deg, i) => (
      <line
        key={i}
        x1="18" y1="4"
        x2="18" y2="8"
        stroke="#C1453A"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.45"
        transform={`rotate(${deg} 18 18)`}
      />
    ))}
  </svg>
);

export default function Signup_Page() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [activeTab, setActiveTab] = useState("register");
  const [userType, setUserType] = useState("couple");
  const [form, setForm] = useState({ name: "", email: "", password: "", confirm: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <div className="wwr-root">
      <div className="wwr-page">

        {/* LEFT PANEL */}
        <div className="wwr-left">
          <div className="wwr-left-overlay" />

          <div className="wwr-brand-row">
            <Logo />
            <span className="wwr-brand-name">WeddingWala</span>
          </div>

          <h1 className="wwr-tagline">Your Journey Begins Here</h1>

          <div className="wwr-divider" />

          <p className="wwr-trust">"TRUSTED BY 500+ COUPLES IN KARACHI."</p>

          <div className="wwr-sun">
            <SunIcon />
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="wwr-right">

          <nav className="wwr-nav">
            <button
              className={`wwr-nav-btn ${activeTab === "login" ? "active" : ""}`}
              onClick={() => navigate("/login")}
            >
              Login
            </button>
            <button
              className={`wwr-nav-btn ${activeTab === "register" ? "active" : ""}`}
              onClick={() => navigate("/sign-up")}
            >
              Register
            </button>
          </nav>

          <div className="wwr-scroll">
            <div className="wwr-card">
              <h2 className="wwr-card-title">Create Your Account</h2>
              <p className="wwr-card-subtitle">Join the community and start planning your dream wedding.</p>

              {/* User Type Toggle */}
              <div className="wwr-type-toggle">
                <button
                  className={`wwr-type-btn ${userType === "couple" ? "active" : ""}`}
                  onClick={() => setUserType("couple")}
                  type="button"
                >
                  <CoupleIcon />
                  I am a Couple
                </button>
                <button
                  className={`wwr-type-btn ${userType === "vendor" ? "active" : ""}`}
                  onClick={() => setUserType("vendor")}
                  type="button"
                >
                  <VendorIcon />
                  I am a Vendor
                </button>
              </div>

              {/* Full Name */}
              <div className="wwr-field-group">
                <label className="wwr-label">Full Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your full name"
                  value={form.name}
                  onChange={handleChange}
                  className="wwr-input"
                />
              </div>

              {/* Email */}
              <div className="wwr-field-group">
                <label className="wwr-label">Email Address</label>
                <input
                  type="email"
                  name="email"
                  placeholder="email@example.com"
                  value={form.email}
                  onChange={handleChange}
                  className="wwr-input"
                />
              </div>

              {/* Password */}
              <div className="wwr-field-group">
                <label className="wwr-label">Password</label>
                <div className="wwr-input-wrapper">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="••••••••"
                    value={form.password}
                    onChange={handleChange}
                    className="wwr-input no-border"
                  />
                  <button
                    className="wwr-eye-btn"
                    onClick={() => setShowPassword(v => !v)}
                    type="button"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    <EyeIcon open={showPassword} />
                  </button>
                </div>
              </div>

              {/* Confirm Password */}
              <div className="wwr-field-group">
                <label className="wwr-label">Confirm Password</label>
                <div className="wwr-input-wrapper">
                  <input
                    type={showConfirm ? "text" : "password"}
                    name="confirm"
                    placeholder="••••••••"
                    value={form.confirm}
                    onChange={handleChange}
                    className="wwr-input no-border"
                  />
                  <button
                    className="wwr-eye-btn"
                    onClick={() => setShowConfirm(v => !v)}
                    type="button"
                    aria-label={showConfirm ? "Hide password" : "Show password"}
                  >
                    <EyeIcon open={showConfirm} />
                  </button>
                </div>
              </div>

              <button className="wwr-create-btn" type="button" onClick={() => navigate("/landingpage")} >Create Account</button>

              <div className="wwr-or-row">
                <div className="wwr-or-line" />
                <span className="wwr-or-text">OR</span>
                <div className="wwr-or-line" />
              </div>

              <button className="wwr-google-btn" type="button">
                <GoogleIcon />
                Continue with Google
              </button>

              <div className="wwr-login-row">
                Already have an account?
                <a href="#" className="wwr-login-link" onClick={e => { e.preventDefault(); navigate("/login"); }}>
                  Login
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}