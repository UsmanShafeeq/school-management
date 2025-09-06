import React from "react";
import "./../../styles/layout.css";

export default function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} School Management System. All rights reserved.</p>
    </footer>
  );
}
src/components/common/Footer.js