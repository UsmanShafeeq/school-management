import React from "react";
import "../../styles/Table.css"; // 👈 shared styles

function Grades() {
  const gradeSystem = [
    { grade: "A+", range: "90-100" },
    { grade: "A", range: "80-89" },
    { grade: "B", range: "70-79" },
    { grade: "C", range: "60-69" },
    { grade: "D", range: "50-59" },
    { grade: "F", range: "Below 50" },
  ];

  return (
    <div className="table-container">
      <h1>Grading System</h1>
      <table className="shared-table">
        <thead>
          <tr>
            <th>Grade</th>
            <th>Marks Range</th>
          </tr>
        </thead>
        <tbody>
          {gradeSystem.map((g, index) => (
            <tr key={index}>
              <td>{g.grade}</td>
              <td>{g.range}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Grades;
