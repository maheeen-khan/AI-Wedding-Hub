import { useNavigate } from "react-router-dom";
import { ArrowLeft, Search, Heart } from "lucide-react";
import "./Navbar.css";

/**
 * Shared Navbar across all 6 vendor profile pages.
 * breadcrumbLabel changes per vendor type (e.g. "Wedding Venues",
 * "Catering", "Photography"...) so this one component serves all of them.
 */
export default function Navbar({ breadcrumbLabel, breadcrumbHref = "/" }) {
  const navigate = useNavigate();

  return (
    <header className="vp-navbar">
      <div className="vp-navbar__inner">
        <div className="vp-navbar__left">
          <button
            onClick={() => navigate(-1)}
            aria-label="Go back"
            className="vp-navbar__icon-btn"
          >
            <ArrowLeft size={20} />
          </button>

          <span className="vp-navbar__divider" />

          <button
            onClick={() => navigate(breadcrumbHref)}
            className="vp-navbar__breadcrumb"
          >
            {breadcrumbLabel}
          </button>
        </div>

        <button onClick={() => navigate("/")} className="vp-navbar__brand">
          Wedding<span>Wala</span>
        </button>

        <div className="vp-navbar__right">
          <button aria-label="Search" className="vp-navbar__icon-btn">
            <Search size={18} />
          </button>
          <button aria-label="Saved vendors" className="vp-navbar__icon-btn">
            <Heart size={18} />
          </button>
          <button aria-label="Profile" className="vp-navbar__avatar">
            A
          </button>
        </div>
      </div>
    </header>
  );
}
