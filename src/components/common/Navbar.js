import React from "react";
import { Link } from "react-router-dom";
import "./../../styles/layout.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="navbar-title">School Management</h2>
      <div className="navbar-links">
        <Link to="/profile">Profile</Link>
        <Link to="/settings">Settings</Link>
        <Link to="/logout">Logout</Link>
      </div>
    </nav>
  );
}
