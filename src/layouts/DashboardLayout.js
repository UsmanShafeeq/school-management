import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/common/Navbar";
import Sidebar from "../components/common/Sidebar";
import Footer from "../components/common/Footer";

import "../styles/layout.css";

export default function DashboardLayout() {
  return (
    <div className="dashboard-layout">
      {/* Navbar */}
      <Navbar />

      {/* Sidebar + Content */}
      <div className="layout-container">
        <Sidebar />
        <main className="layout-content">
          <Outlet /> {/* This is where nested routes render */}
        </main>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
