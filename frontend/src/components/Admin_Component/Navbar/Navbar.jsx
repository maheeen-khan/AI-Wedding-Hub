import "./Navbar.css";

/**
 * Navbar
 *
 * Props:
 *   title        {string}    page heading
 *   onMenuClick  {function}  opens the mobile sidebar drawer
 */
export default function Navbar({
  title = "Admin Dashboard Overview",
  onMenuClick,
}) {
  return (
    <header className="navbar">
      <div className="navbar__left">
        {/* Hamburger — visible on mobile (< 768px) */}
        <button
          className="navbar__menu-btn"
          onClick={onMenuClick}
          aria-label="Open menu"
        >
          ☰
        </button>
        <h1 className="navbar__title">{title}</h1>
      </div>

      <div className="navbar__right">
        <button className="navbar__bell" aria-label="Notifications">
          🔔
        </button>

        <div className="navbar__admin">
          <div className="navbar__admin-info">
            <span className="navbar__admin-name">Super Admin</span>
            <span className="navbar__admin-email">admin@weddingwala.pk</span>
          </div>
          <div className="navbar__avatar" aria-label="Admin avatar">
            SA
          </div>
        </div>
      </div>
    </header>
  );
}
