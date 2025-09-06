import React from "react";
import "../../styles/Table.css"; // shared styles

function Classes() {
  const sampleClasses = [
    { id: 1, name: "Class 10 - A", section: "A", totalStudents: 30 },
    { id: 2, name: "Class 10 - B", section: "B", totalStudents: 28 },
    { id: 3, name: "Class 9 - A", section: "A", totalStudents: 32 },
    { id: 4, name: "Class 9 - B", section: "B", totalStudents: 29 },
    { id: 5, name: "Class 9 - C", section: "C", totalStudents: 31 },
    { id: 6, name: "Class 8 - A", section: "A", totalStudents: 26 },
    { id: 7, name: "Class 8 - B", section: "B", totalStudents: 30 },
    { id: 8, name: "Class 8 - C", section: "C", totalStudents: 27 },
    { id: 9, name: "Class 7 - A", section: "A", totalStudents: 25 },
    { id: 10, name: "Class 7 - B", section: "B", totalStudents: 28 },
    { id: 11, name: "Class 7 - C", section: "C", totalStudents: 24 },
    { id: 12, name: "Class 6 - A", section: "A", totalStudents: 29 },
    { id: 13, name: "Class 6 - B", section: "B", totalStudents: 27 },
    { id: 14, name: "Class 6 - C", section: "C", totalStudents: 26 },
    { id: 15, name: "Class 5 - A", section: "A", totalStudents: 30 },
  ];

  return (
    <div className="table-container">
      <h1>Classes</h1>
      <table className="shared-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Class Name</th>
            <th>Section</th>
            <th>Total Students</th>
          </tr>
        </thead>
        <tbody>
          {sampleClasses.map((cls) => (
            <tr key={cls.id}>
              <td>{cls.id}</td>
              <td>{cls.name}</td>
              <td>{cls.section}</td>
              <td>{cls.totalStudents}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Classes;
