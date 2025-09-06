import React from "react";
import "../../styles/Table.css"; // 👈 shared styles

function Exams() {
  const sampleExams = [
    { id: 1, subject: "Mathematics", date: "2025-09-15", totalMarks: 100 },
    { id: 2, subject: "Science", date: "2025-09-18", totalMarks: 100 },
    { id: 3, subject: "English", date: "2025-09-20", totalMarks: 100 },
    { id: 4, subject: "Urdu", date: "2025-09-22", totalMarks: 75 },
    { id: 5, subject: "Computer Science", date: "2025-09-25", totalMarks: 100 },
  ];

  return (
    <div className="table-container">
      <h1>Upcoming Exams</h1>
      <table className="shared-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Subject</th>
            <th>Date</th>
            <th>Total Marks</th>
          </tr>
        </thead>
        <tbody>
          {sampleExams.map((exam) => (
            <tr key={exam.id}>
              <td>{exam.id}</td>
              <td>{exam.subject}</td>
              <td>{exam.date}</td>
              <td>{exam.totalMarks}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Exams;
