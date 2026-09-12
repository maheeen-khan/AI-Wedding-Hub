import React from "react";
import "./Navbar.css";

export default function Navbar({ onMenuClick }) {
  return (
    <header className="navbar">
      <div className="navbar-inner">
        <button
          className="menu-toggle"
          aria-label="Toggle sidebar"
          onClick={onMenuClick}
        >
          ☰
        </button>
        <h2 className="page-title">Vendor Dashboard</h2>
        <div className="navbar-right">
          <button className="icon-btn" aria-label="Search">🔍</button>
          <button className="icon-btn" aria-label="Notifications">🔔</button>
          <div className="nav-avatar">RC</div>
        </div>
      </div>
    </header>
  );
}