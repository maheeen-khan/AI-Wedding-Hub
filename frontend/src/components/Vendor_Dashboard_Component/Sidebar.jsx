import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Sidebar.css";

const navItems = [
  { label: "Dashboard", icon: "▪", path: "/vendor_dashboard" },
  { label: "My Bookings", icon: "▪", path: "/vendor-requests" },
  { label: "Messages", icon: "▪", path: "/vendor-messages" },
  { label: "Payments", icon: "▪", path: "/vendor-payments" },
  { label: "Reviews", icon: "▪", path: "/vendor-reviews" },
];

const initials = (name = "") =>
  name
    .split(" ")
    .filter(Boolean)
    .map((w) => w[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

export default function Sidebar({ open, onClose }) {
  const navigate = useNavigate();
  const [vendor, setVendor] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVendor = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/vendors/profile", {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        });
        if (!res.ok) return; // no profile yet — sidebar just shows fallback
        const data = await res.json();
        setVendor(data);
      } catch (err) {
        console.error("Failed to load vendor info for sidebar:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchVendor();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    onClose?.();
    navigate("/login");
  };

  return (
    <>
      <div
        className={`sidebar-overlay ${open ? "visible" : ""}`}
        onClick={onClose}
        aria-hidden="true"
      />
      <aside className={`sidebar ${open ? "open" : ""}`}>
        <div className="logo">
          <span className="logo-icon">✦</span> WeddingWiz
        </div>

        <div className="vendor-card">
          <div className="vendor-avatar">
            {loading ? "…" : initials(vendor?.name) || "?"}
          </div>
          <div className="vendor-info">
            <h3>{loading ? "Loading..." : vendor?.name || "Register your business"}</h3>
            <p>{vendor?.city || ""}</p>
            {vendor?.category && (
              <span className="vendor-tag">{vendor.category.toUpperCase()}</span>
            )}
          </div>
        </div>

        <nav className="side-nav">
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.path}
              className={({ isActive }) => `nav-item ${isActive ? "active" : ""}`}
              onClick={onClose}
            >
              <span className="nav-icon">{item.icon}</span> {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="sidebar-footer">
          <button className="nav-item logout" onClick={handleLogout}>
            <span className="nav-icon">▪</span> Logout
          </button>
        </div>
      </aside>
    </>
  );
}