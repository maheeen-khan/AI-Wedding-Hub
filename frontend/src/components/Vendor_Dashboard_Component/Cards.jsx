import React, { useEffect, useState } from "react";
import "./Cards.css";

const STAT_CONFIG = [
  { key: "totalBookings",   label: "Total Bookings",   icon: "📅", color: "red",   format: (v) => v },
  { key: "pendingRequests", label: "Pending Requests", icon: "⏳", color: "gold",  format: (v) => v },
  { key: "confirmedEvents", label: "Confirmed Events", icon: "✅", color: "green", format: (v) => v },
  { key: "totalEarnings",   label: "Total Earnings",   icon: "💰", color: "brown", format: (v) => `PKR ${(v / 1_000_000).toFixed(1)}M` },
];

export default function Cards() {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/api/vendors/dashboard/stats", {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    })
      .then((res) => res.json())
      .then(setStats)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading stats...</p>;
  if (!stats) return null;

  return (
    <>
      {STAT_CONFIG.map((cfg) => (
        <div className="stat-card" key={cfg.key}>
          <div className={`stat-icon ${cfg.color}`}>{cfg.icon}</div>
          <div className="stat-body">
            <p className="stat-label">{cfg.label}</p>
            <h3 className="stat-value">{cfg.format(stats[cfg.key])}</h3>
          </div>
        </div>
      ))}
    </>
  );
}