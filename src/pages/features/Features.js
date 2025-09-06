import React from "react";
import PublicNavbar from "../../components/common/PublicNavbar";
import "../../styles/features.css";

export default function Features() {
  return (
    <div className="features-page">
      <PublicNavbar />
      <section className="features-list">
        <h1>Our Features</h1>
        <ul>
          <li>📚 Student and Teacher Management</li>
          <li>📝 Online Exams & Result Publishing</li>
          <li>💳 Fee and Payment Tracking</li>
          <li>📊 Performance Analytics</li>
          <li>📢 Notifications & Announcements</li>
          <li>🔐 Secure Login for all users</li>
        </ul>
      </section>
    </div>
  );
}
