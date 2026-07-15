// pages/Admin/Manage_Users/Manage_Users.jsx
import { useState } from "react";
import DirectoryTable from "../../../components/Admin_Component/Table/Directory_Table/Directory_Table";
import Cards from "../../../components/Admin_Component/Cards/Cards";
import "./Manage_Users.css";

const STAT_CARDS = [
  { icon: "👥", label: "Total Registered", value: "1,240", sub: "↑ +12% from last month", subType: "positive" },
  { icon: "💑", label: "Active Couples", value: "1,040", sub: "84 weddings this month", subType: "positive" },
  { icon: "🏪", label: "Partner Vendors", value: "200", sub: "⚠ 15 pending verification", subType: "alert", urgent: true },
];

const USERS_DATA = [
  { id: 1, initials: "ZA", name: "Zoya Ahmed", email: "zoya.ahmed@email.com", role: "COUPLE", area: "Karachi", registered: "Oct 12, 2023", status: "Active" },
  { id: 2, initials: "HK", name: "Hamza Khan", email: "hk.productions@wedding.com", role: "VENDOR", area: "Karachi", registered: "Nov 05, 2023", status: "Suspended" },
  { id: 3, initials: "MS", name: "Marium Siddiqui", email: "marium.s@outlook.com", role: "COUPLE", area: "Karachi", registered: "Dec 01, 2023", status: "Active" },
];

const userColumns = [
  {
    key: "name",
    label: "Name & Contact",
    render: (u) => (
      <div className="dt-user">
        <span className="dt-user__avatar">{u.initials}</span>
        <div className="dt-user__info">
          <span className="dt-user__name">{u.name}</span>
          <span className="dt-user__email">{u.email}</span>
        </div>
      </div>
    ),
  },
  {
    key: "role",
    label: "Role",
    render: (u) => (
      <span className={`dt-badge dt-badge--${u.role?.toLowerCase()}`}>
        {u.role}
      </span>
    ),
  },
  { key: "area", label: "Area" },
  { key: "registered", label: "Registered" },
  {
    key: "status",
    label: "Status",
    render: (u) => (
      <span className={`dt-status dt-status--${u.status?.toLowerCase()}`}>
        {u.status}
      </span>
    ),
  },
];

export default function ManageUsers() {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <>
      {/* Stats Cards */}
      <section className="stats-grid mu-stats">
        {STAT_CARDS.map((card) => (
          <Cards key={card.label} {...card} />
        ))}
      </section>

      {/* Directory Table */}
      <DirectoryTable
        title="User Directory"
        searchPlaceholder="Search by name or email..."
        columns={userColumns}
        data={USERS_DATA}
        onView={(id) => console.log("View user", id)}
        onSearch={setSearch}
        searchValue={search}
        emptyMessage="No users found"
      />
    </>
  );
}