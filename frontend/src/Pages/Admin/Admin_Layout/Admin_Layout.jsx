// components/Admin_Component/Layout/Layout.jsx
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Sidebar from "../../../components/Admin_Component/Sidebar/Sidebar";
import Navbar from "../../../components/Admin_Component/Navbar/Navbar";
import "./Admin_Layout.css";

// Map routes to page titles
const PAGE_TITLES = {
  "/admin": "Admin Dashboard Overview",
  "/admin/dashboard": "Admin Dashboard Overview",
  "/admin/vendors": "Manage Vendors",
  "/admin/users": "Manage Users",
};

// Map routes to sidebar active nav labels
const ROUTE_TO_NAV = {
  "/admin": "Dashboard",
  "/admin/dashboard": "Dashboard",
  "/admin/vendors": "Manage Vendors",
  "/admin/users": "Manage Users",
};

export default function Layout() {
  const location = useLocation();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Get current page title based on route
  const pageTitle = PAGE_TITLES[location.pathname] || "Admin Dashboard Overview";

  // Get current active nav based on route
  const activeNav = ROUTE_TO_NAV[location.pathname] || "Dashboard";

  // Close sidebar on route change (mobile)
  useEffect(() => {
    setSidebarOpen(false);
  }, [location.pathname]);

  const handleNavClick = (label) => {
    const routeMap = {
      "Dashboard": "/admin/dashboard",
      "Manage Vendors": "/admin/vendors",
      "Manage Users": "/admin/users",
    };
    navigate(routeMap[label] || "/admin/dashboard");
  };

  return (
    <div className="admin-layout">
      <Sidebar
        activeNav={activeNav}
        setActiveNav={handleNavClick}
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />
      <div className="admin-layout__body">
        <Navbar
          title={pageTitle}
          onMenuClick={() => setSidebarOpen(true)}
        />
        <main className="admin-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
}