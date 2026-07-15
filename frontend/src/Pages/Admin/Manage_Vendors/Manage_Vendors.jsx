// pages/Admin/Manage_Vendors/Manage_Vendors.jsx
import { useState } from "react";
import DirectoryTable from "../../../components/Admin_Component/Table/Directory_Table/Directory_Table";
import Cards from "../../../components/Admin_Component/Cards/Cards";
import "./Manage_Vendors.css";

const STAT_CARDS = [
  { icon: "🏪", label: "Total Vendors", value: "200", sub: "All registered vendors", subType: "neutral" },
  { icon: "✅", label: "Approved", value: "192", sub: "Active on platform", subType: "positive" },
  { icon: "⏳", label: "Pending Review", value: "8", sub: "Awaiting approval", subType: "alert", urgent: true },
];

const VENDORS_DATA = [
  { id: 1, image: null, name: "Serenity Venues", category: "Venue", area: "Karachi Central", registeredDate: "12 Oct 2023", totalBookings: 48, status: "Approved" },
  { id: 2, image: null, name: "Royal Decorators", category: "Decor", area: "DHA Karachi", registeredDate: "28 Feb 2024", totalBookings: 0, status: "Pending" },
  { id: 3, image: null, name: "Classic Catering", category: "Catering", area: "Clifton", registeredDate: "15 Jan 2024", totalBookings: 12, status: "Rejected" },
  { id: 4, image: null, name: "Lens & Love", category: "Photography", area: "Gulshan-e-Iqbal", registeredDate: "05 Nov 2023", totalBookings: 82, status: "Approved" },
];

const vendorColumns = [
  {
    key: "name",
    label: "Vendor Name",
    render: (v) => (
      <div className="dt-name">
        <div className="dt-name__thumb">
          {v.image ? (
            <img src={v.image} alt={v.name} className="dt-name__img" />
          ) : (
            <span className="dt-name__fallback">{v.name?.[0]}</span>
          )}
        </div>
        <span className="dt-name__text">{v.name}</span>
      </div>
    ),
  },
  {
    key: "category",
    label: "Category",
    render: (v) => (
      <span className={`dt-badge dt-badge--${v.category?.toLowerCase().replace(/\s+/g, "-")}`}>
        {v.category}
      </span>
    ),
  },
  { key: "area", label: "Area" },
  { key: "registeredDate", label: "Registered Date" },
  { key: "totalBookings", label: "Total Bookings" },
  {
    key: "status",
    label: "Status",
    render: (v) => (
      <span className={`dt-status dt-status--${v.status?.toLowerCase()}`}>
        {v.status}
      </span>
    ),
  },
];

export default function ManageVendors() {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <>
      {/* Stats Cards */}
      <section className="stats-grid mv-stats">
        {STAT_CARDS.map((card) => (
          <Cards key={card.label} {...card} />
        ))}
      </section>

      {/* Directory Table */}
      <DirectoryTable
        title="Vendor Directory"
        searchPlaceholder="Search vendors..."
        columns={vendorColumns}
        data={VENDORS_DATA}
        onView={(id) => console.log("View vendor", id)}
        onSearch={setSearch}
        searchValue={search}
        emptyMessage="No vendors found"
      />
    </>
  );
}