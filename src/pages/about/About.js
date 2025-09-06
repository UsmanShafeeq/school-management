import React from "react";
import PublicNavbar from "../../components/common/PublicNavbar";
import "../../styles/about.css";

export default function About() {
  return (
    <div className="about">
      <PublicNavbar />
      <section className="about-section">
        <h1>About Us</h1>
        <p>
          Our School Management System is designed to simplify daily operations
          for schools, teachers, students, and parents. From admissions to exams,
          everything is managed in one place.
        </p>
        <p>
          With modern technology, we provide a secure, reliable, and scalable
          platform to enhance the educational experience.
        </p>
      </section>
    </div>
  );
}
