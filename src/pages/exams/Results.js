import React from "react";
import "../../styles/Table.css"; // 👈 shared styles

function Results() {
  const sampleResults = [
    { id: 1, student: "Ali Khan", subject: "Mathematics", marks: 85 },
    { id: 2, student: "Sara Ahmed", subject: "Science", marks: 92 },
    { id: 3, student: "John Doe", subject: "English", marks: 74 },
    { id: 4, student: "Ayesha Malik", subject: "Urdu", marks: 68 },
    { id: 5, student: "Bilal Hassan", subject: "Computer Science", marks: 95 },
  ];

  return (
    <div className="table-container">
      <h1>Student Results</h1>
      <table className="shared-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Student</th>
            <th>Subject</th>
            <th>Marks</th>
          </tr>
        </thead>
        <tbody>
          {sampleResults.map((result) => (
            <tr key={result.id}>
              <td>{result.id}</td>
              <td>{result.student}</td>
              <td>{result.subject}</td>
              <td>{result.marks}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Results;
