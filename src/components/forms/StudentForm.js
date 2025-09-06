import React, { useState } from "react";
import "../../styles/Form.css"; // Shared form styles

function StudentForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    name: "",
    grade: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);               // Call parent submit handler
    setFormData({ name: "", grade: "" }); // Reset form after submit
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h2>Add New Student</h2>

      <div className="form-group">
        <label>Name</label>
        <input
          type="text"
          name="name"
          placeholder="Enter student name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label>Grade</label>
        <input
          type="text"
          name="grade"
          placeholder="Enter grade (e.g., 10th)"
          value={formData.grade}
          onChange={handleChange}
          required
        />
      </div>

      <button type="submit" className="submit-btn">
        Submit
      </button>
    </form>
  );
}

export default StudentForm;
