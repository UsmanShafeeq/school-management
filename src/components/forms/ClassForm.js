import React, { useState } from "react";
import "../../styles/Form.css"; // Optional: shared form styles


function ClassForm({ onSubmit, initialData = {} }) {
  const [formData, setFormData] = useState({
    name: initialData.name || "",
    section: initialData.section || "",
    totalStudents: initialData.totalStudents || "",
  });

  // Update form state on input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({ name: "", section: "", totalStudents: "" }); // optional reset
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h2>Class Form</h2>

      <div className="form-group">
        <label htmlFor="name">Class Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter class name (e.g., Class 10)"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="section">Section:</label>
        <input
          type="text"
          id="section"
          name="section"
          value={formData.section}
          onChange={handleChange}
          placeholder="Enter section (e.g., A, B, C)"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="totalStudents">Total Students:</label>
        <input
          type="number"
          id="totalStudents"
          name="totalStudents"
          value={formData.totalStudents}
          onChange={handleChange}
          placeholder="Enter total number of students"
          min="0"
          required
        />
      </div>

      <button type="submit" className="form-button">
        Submit
      </button>
    </form>
  );
}

export default ClassForm;
