import React from "react";
import PublicNavbar from "../../components/common/PublicNavbar";
import "../../styles/contact.css";

export default function Contact() {
  return (
    <div className="contact-page">
      <PublicNavbar />
      <section className="contact-section">
        <h1>Contact Us</h1>
        <p>We’d love to hear from you! Reach us through the form below:</p>
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>
    </div>
  );
}
