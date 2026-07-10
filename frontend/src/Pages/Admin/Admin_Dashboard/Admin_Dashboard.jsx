import { useState } from "react";
import {
  LineChart, Line, XAxis, YAxis,
  Tooltip, ResponsiveContainer, Legend,
} from "recharts";

import Sidebar from "../../../components/Admin_Component/Sidebar/Sidebar";
import Navbar from "../../../components/Admin_Component/Navbar/Navbar";
import Cards from "../../../components/Admin_Component/Cards/Cards";
import PendingVendorApprovalsTable from "../../../components/Admin_Component/Table/Pending_Vendor_Approvals_Table/Pending_Approvals_Table"
import RecentlyRegisteredUsersTable from "../../../components/Admin_Component/Table/Recently_Registered_Users_Table/Recently_Registered_Users_Table"
import "./Admin_Dashboard.css";

/* ── Static sample data (replace with API calls) ── */
const activityData = [
  { day: "Mon", bookings: 120, vendors: 60 },
  { day: "Tue", bookings: 200, vendors: 80 },
  { day: "Wed", bookings: 160, vendors: 100 },
  { day: "Thu", bookings: 250, vendors: 130 },
  { day: "Fri", bookings: 210, vendors: 90 },
  { day: "Sat", bookings: 300, vendors: 160 },
  { day: "Sun", bookings: 340, vendors: 200 },
];

const PENDING_VENDORS = [
  { id: 1, icon: "🌸", name: "Petals & Prosecco", category: "Decor & Floral", location: "Mumbai, MH", date: "Oct 24, 2023" },
  { id: 2, icon: "📷", name: "Lens Legacy Studios", category: "Photography", location: "Delhi, NCR", date: "Oct 25, 2023" },
  { id: 3, icon: "🍽️", name: "Royal Rasoi Catering", category: "Catering", location: "Jaipur, RJ", date: "Oct 25, 2023" },
];

const RECENT_USERS = [
  { initials: "AM", name: "Ananya Mishra", email: "ananya.m@example.com", role: "COUPLE", registered: "Today, 10:41 AM", status: "Active" },
  { initials: "VK", name: "Vikram Khanna", email: "v.khanna@vendor.ee", role: "VENDOR", registered: "Today, 09:12 AM", status: "Active" },
  { initials: "RS", name: "Rohan Sharma", email: "rohan.sharma@example.com", role: "COUPLE", registered: "Yesterday", status: "Active" },
];

/* ── Dashboard stat card definitions ── */
const STAT_CARDS = [
  { icon: "👥", label: "Total Users", value: "1,240", sub: "↑ +12% from last month", subType: "positive" },
  { icon: "🏪", label: "Total Vendors", value: "200", sub: "↑ +8% vs last week", subType: "positive" },
  { icon: "📋", label: "Pending Approvals", value: "8", sub: "⚠ Action Required", subType: "alert", urgent: true },
  { icon: "📅", label: "Active Bookings", value: "156", sub: "Currently in progress", subType: "neutral" },
];

/* ── Component ── */
export default function Admin_Dashboard() {
  const [activeNav, setActiveNav] = useState("Dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="admin-layout">
      {/* ── Sidebar ── */}
      <Sidebar
        activeNav={activeNav}
        setActiveNav={setActiveNav}
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      {/* ── Main column ── */}
      <div className="admin-layout__body">
        {/* ── Navbar ── */}
        <Navbar
          title="Admin Dashboard Overview"
          onMenuClick={() => setSidebarOpen(true)}
        />

        {/* ── Page content ── */}
        <div className="admin-content">

          {/* Cards — pass any value/sub/icon you want */}
          <section className="stats-grid">
            {STAT_CARDS.map((card) => (
              <Cards
                key={card.label}
                icon={card.icon}
                label={card.label}
                value={card.value}
                sub={card.sub}
                subType={card.subType}
                urgent={card.urgent}
              />
            ))}
          </section>

          {/* Chart + Urgent Tasks */}
          <section className="mid-row">
            <div className="card chart-card">
              <h2 className="card__title">Platform Activity</h2>
              <ResponsiveContainer width="100%" height={200}>
                <LineChart data={activityData}>
                  <XAxis dataKey="day" tick={{ fontSize: 11, fill: "#888" }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fontSize: 11, fill: "#888" }} axisLine={false} tickLine={false} />
                  <Tooltip contentStyle={{ borderRadius: 8, border: "1px solid #eee", fontSize: 12 }} />
                  <Legend iconType="circle" iconSize={8} wrapperStyle={{ fontSize: 12, paddingTop: 8 }} />
                  <Line type="monotone" dataKey="bookings" stroke="#7b1c2e" strokeWidth={2.5} dot={false} name="App bookings" />
                  <Line type="monotone" dataKey="vendors" stroke="#d4a017" strokeWidth={2.5} dot={false} name="New vendors" />
                </LineChart>
              </ResponsiveContainer>
            </div>

            <div className="card urgent-card">
              <h2 className="card__title urgent-card__title">Urgent Tasks</h2>
              <div className="urgent-item">
                <span className="urgent-item__dot urgent-item__dot--red" />
                <div>
                  <p className="urgent-item__heading">8 Vendors Awaiting Review</p>
                  <p className="urgent-item__desc">Pending for more than 48 hours</p>
                </div>
              </div>
              <div className="urgent-item">
                <span className="urgent-item__dot urgent-item__dot--yellow" />
                <div>
                  <p className="urgent-item__heading">Low Stock Alert</p>
                  <p className="urgent-item__desc">Items need to be updated</p>
                </div>
              </div>
              <button className="urgent-card__btn">Launch Review Wizard</button>
            </div>
          </section>

          {/* Pending Vendor Approvals Table */}
          <PendingVendorApprovalsTable
            vendors={PENDING_VENDORS}
            onApprove={(id) => console.log("Approve vendor", id)}
            onReject={(id) => console.log("Reject vendor", id)}
            onViewAll={() => setActiveNav("Manage Vendors")}
          />

          {/* Recently Registered Users Table */}
          <RecentlyRegisteredUsersTable users={RECENT_USERS} />

        </div>
      </div>
    </div>
  );
}
