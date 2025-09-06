import React, { useState } from "react";
import "../../styles/Form.css"; // Optional: shared form styles


function TeacherForm({ onSubmit, initialData = {} }) {
  const [formData, setFormData] = useState({
    name: initialData.name || "",
    subject: initialData.subject || "",
  });

  // Update form state when user types
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({ name: "", subject: "" }); // optional: reset form
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h2>Teacher Form</h2>

      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter teacher name"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="subject">Subject:</label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="Enter subject"
          required
        />
      </div>

      <button type="submit" className="form-button">
        Submit
      </button>
    </form>
  );
}

export default TeacherForm;
