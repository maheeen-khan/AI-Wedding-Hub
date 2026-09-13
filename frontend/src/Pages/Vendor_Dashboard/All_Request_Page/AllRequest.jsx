import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../../components/Vendor_Dashboard_Component/Sidebar";
import Navbar from "../../../components/Vendor_Dashboard_Component/Navbar";
import Table from "../../../components/Vendor_Dashboard_Component/Table";
import "../VendorDashboard/VendorDashboard.css"; 

const AVATAR_COLORS = ["aa", "hs", "mb", "uf"];
const initials = (name = "") =>
  name.split(" ").filter(Boolean).map((w) => w[0]).join("").toUpperCase().slice(0, 2);

export default function AllRequests() {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const token = localStorage.getItem("token");
  const headers = { Authorization: `Bearer ${token}` };

  const fetchRequests = useCallback(async () => {
    try {
      const res = await fetch("http://localhost:5000/api/vendors/dashboard/requests", {
        headers,
      });

      if (res.status === 404) {
        setRequests([]);
        return;
      }
      if (!res.ok) throw new Error("Failed to load requests");

      const data = await res.json();
      setRequests(data);
    } catch (err) {
      console.error(err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchRequests();
  }, [fetchRequests]);

  const handleStatusChange = async (bookingId, status) => {
    try {
      await fetch(`http://localhost:5000/api/vendors/dashboard/bookings/${bookingId}/status`, {
        method: "PATCH",
        headers: { ...headers, "Content-Type": "application/json" },
        body: JSON.stringify({ status }),
      });
      fetchRequests(); // refresh the list after accept/decline
    } catch (err) {
      console.error(err);
    }
  };

  const requestColumns = [
    {
      key: "couple",
      header: "Couple Name",
      render: (r) => (
        <>
          <span className={`couple-avatar ${AVATAR_COLORS[r.id % AVATAR_COLORS.length]}`}>
            {initials(r.couple_name)}
          </span>
          {r.couple_name}
        </>
      ),
    },
    { key: "event_type", header: "Event Type" },
    { key: "event_date", header: "Date" },
    { key: "guests", header: "Guests" },
    {
      key: "note",
      header: "Note",
      render: (r) => <span className="note-badge">{r.note}</span>,
    },
    {
      key: "actions",
      header: "Actions",
      render: (r) => (
        <span className="actions">
          <button
            className="action-btn accept"
            title="Accept"
            onClick={() => handleStatusChange(r.id, "confirmed")}
          >
            ✓
          </button>
          <button
            className="action-btn decline"
            title="Decline"
            onClick={() => handleStatusChange(r.id, "declined")}
          >
            ✕
          </button>
        </span>
      ),
    },
  ];

  return (
    <div className="app">
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <main className="main">
        <Navbar onMenuClick={() => setSidebarOpen((v) => !v)} />

        <div className="content">
          <section className="welcome-banner">
            <div>
              <h1>All Booking Requests</h1>
              <p>Review and respond to every pending request from couples.</p>
              <button className="btn-gold" onClick={() => navigate("/vendor_dashboard")}>
                Back to Dashboard
              </button>
            </div>
          </section>

          {error && <p style={{ color: "#9c2b2b" }}>Error: {error}</p>}

          {!loading && (
            <Table
              title={`New Booking Requests (${requests.length})`}
              columns={requestColumns}
              rows={requests}
            />
          )}
        </div>

        <footer className="footer">
          WeddingWiz — © 2024 WeddingWiz · Privacy Policy · Terms of Service · Support
        </footer>
      </main>
    </div>
  );
}