// components/Admin_Component/Layout/Layout.jsx
import { Outlet } from "react-router-dom";
import Sidebar from "../../../components/Admin_Component/Sidebar/Sidebar";
import Navbar from "../../../components/Admin_Component/Navbar/Navbar";
import "./Admin_Layout.css";

export default function Layout() {
  return (
    <div className="admin-layout">
      <Sidebar />
      <div className="admin-layout__body">
        <Navbar />
        <main className="admin-content">
          <Outlet /> 
        </main>
      </div>
    </div>
  );
}