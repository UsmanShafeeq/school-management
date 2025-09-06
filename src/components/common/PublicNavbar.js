import React from "react";
import { Link } from "react-router-dom";
import "../../styles/layout.css"; // reuse styles

export default function PublicNavbar() {
  return (
    <nav className="navbar">
      <h2 className="navbar-title">School Management</h2>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/features">Features</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/dashboard">Dashboard</Link> 
        <Link to="/login" className="btn-login">Login</Link>
      </div>
    </nav>
  );
}
