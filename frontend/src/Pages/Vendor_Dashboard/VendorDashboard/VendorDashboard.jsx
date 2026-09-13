import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../../components/Vendor_Dashboard_Component/Sidebar";
import Navbar from "../../../components/Vendor_Dashboard_Component/Navbar";
import Cards from "../../../components/Vendor_Dashboard_Component/Cards";
import Table from "../../../components/Vendor_Dashboard_Component/Table";
import ProfilePreview from "../../../components/Vendor_Dashboard_Component/ProfilePreview";
import "./VendorDashboard.css";

const AVATAR_COLORS = ["aa", "hs", "mb", "uf"];
const initials = (name) =>
  name.split(" ").map((w) => w[0]).join("").toUpperCase().slice(0, 2);

export default function VendorDashboard() {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [requests, setRequests] = useState([]);
  const [confirmed, setConfirmed] = useState([]);
  const [loading, setLoading] = useState(true);

  const token = localStorage.getItem("token");
  const headers = { Authorization: `Bearer ${token}` };

  const fetchData = useCallback(async () => {
  try {
    const [reqRes, confRes] = await Promise.all([
      fetch("http://localhost:5000/api/vendors/dashboard/requests", { headers }),
      fetch("http://localhost:5000/api/vendors/dashboard/confirmed", { headers }),
    ]);

    setRequests(reqRes.ok ? await reqRes.json() : []);
    setConfirmed(confRes.ok ? await confRes.json() : []);
  } catch (err) {
    console.error(err);
    setRequests([]);
    setConfirmed([]);
  } finally {
    setLoading(false);
  }
}, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleStatusChange = async (bookingId, status) => {
    try {
      await fetch(`http://localhost:5000/api/vendors/dashboard/bookings/${bookingId}/status`, {
        method: "PATCH",
        headers: { ...headers, "Content-Type": "application/json" },
        body: JSON.stringify({ status }),
      });
      fetchData(); // refresh both tables + you may also want to refresh Cards stats
    } catch (err) {
      console.error(err);
    }
  };

  const requestColumns = [
    {
      key: "couple", header: "Couple Name",
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
    { key: "note", header: "Note", render: (r) => <span className="note-badge">{r.note}</span> },
    {
      key: "actions", header: "Actions",
      render: (r) => (
        <span className="actions">
          <button className="action-btn accept" title="Accept" onClick={() => handleStatusChange(r.id, "confirmed")}>✓</button>
          <button className="action-btn decline" title="Decline" onClick={() => handleStatusChange(r.id, "declined")}>✕</button>
        </span>
      ),
    },
  ];

  const confirmedColumns = [
    {
      key: "couple", header: "Couple Name",
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
    { key: "status", header: "Status", render: (r) => <span className={`status-badge ${r.status}`}>{r.status.toUpperCase()}</span> },
    { key: "actions", header: "Actions", render: () => <button className="action-btn view" title="View">👁</button> },
  ];

  return (
    <div className="app">
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <main className="main">
        <Navbar onMenuClick={() => setSidebarOpen((v) => !v)} />
        <div className="content">
          <section className="welcome-banner">
            <div>
              <h1>Welcome back!</h1>
              <p>You have {requests.length} new booking requests waiting for your approval today.</p>
              <button className="btn-gold" onClick={() => navigate("/vendor-requests")}> View Requests</button>
            </div>
            <div className="rating-badge">
              <span className="rating-score">4.5</span>
              <span className="rating-label">Vendor Rating</span>
            </div>
          </section>

          <section className="cards-grid">
            <Cards />
          </section>

          {!loading && (
            <>
              <Table 
                  title={`New Booking Requests (${requests.length})`}
                  viewAll onViewAll={() => navigate("/vendor-requests")}
                  columns={requestColumns}
                  rows={requests}
                  />
              <Table title="Confirmed Bookings" search columns={confirmedColumns} rows={confirmed} />
            </>
          )}

          <ProfilePreview />
        </div>

        <footer className="footer">
          WeddingWiz — © 2024 WeddingWiz · Privacy Policy · Terms of Service · Support
        </footer>
      </main>
    </div>
  );
}