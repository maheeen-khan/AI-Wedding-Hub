import "./Sidebar.css";

const navItems = [
  { label: "Dashboard",      icon: "⊞" },
  { label: "Manage Vendors", icon: "🏪" },
  { label: "Manage Users",   icon: "👤" },
];

/**
 * Sidebar
 *
 * Props:
 *   activeNav    {string}   current active nav label
 *   setActiveNav {function} change active nav
 *   isOpen       {boolean}  mobile drawer open state (controlled by parent)
 *   onClose      {function} close mobile drawer
 */
export default function Sidebar({ activeNav, setActiveNav, isOpen, onClose }) {
  const handleNavClick = (label) => {
    setActiveNav(label);
    if (onClose) onClose();
  };

  return (
    <>
      {/* Dark overlay behind the drawer (mobile only) */}
      {isOpen && (
        <div className="sidebar__overlay" onClick={onClose} aria-hidden="true" />
      )}

      <aside className={`sidebar${isOpen ? " sidebar--open" : ""}`}>
        {/* ✕ close button — only shown when drawer is open on mobile */}
        <button
          className="sidebar__close"
          onClick={onClose}
          aria-label="Close menu"
        >
          ✕
        </button>

        {/* Brand */}
        <div className="sidebar__brand">
          <span className="sidebar__brand-icon">💍</span>
          <div className="sidebar__brand-text">
            <div className="sidebar__brand-name">WeddingWala</div>
            <div className="sidebar__brand-sub">ADMIN PANEL</div>
          </div>
        </div>

        {/* Nav */}
        <nav className="sidebar__nav">
          {navItems.map((item) => (
            <button
              key={item.label}
              className={`sidebar__nav-item${
                activeNav === item.label ? " sidebar__nav-item--active" : ""
              }`}
              onClick={() => handleNavClick(item.label)}
              title={item.label}
            >
              <span className="sidebar__nav-icon">{item.icon}</span>
              <span className="sidebar__nav-label">{item.label}</span>
            </button>
          ))}
        </nav>

        {/* Footer */}
        <div className="sidebar__footer">
          <button className="sidebar__nav-item" title="Settings">
            <span className="sidebar__nav-icon">⚙️</span>
            <span className="sidebar__nav-label">Settings</span>
          </button>
          <button className="sidebar__nav-item" title="Support">
            <span className="sidebar__nav-icon">❓</span>
            <span className="sidebar__nav-label">Support</span>
          </button>
          <button className="sidebar__logout" title="Logout">
            <span className="sidebar__nav-icon">↪</span>
            <span className="sidebar__nav-label">Logout</span>
          </button>
        </div>
      </aside>
    </>
  );
}
