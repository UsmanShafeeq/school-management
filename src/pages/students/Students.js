import React from "react";
import "../../styles/Table.css"; // 👈 shared styles

function Students() {
  const sampleStudents = [
    { id: 1, name: "Ali Khan", grade: "10th" },
    { id: 2, name: "Sara Ahmed", grade: "9th" },
    { id: 3, name: "John Doe", grade: "8th" },
    { id: 4, name: "Ayesha Malik", grade: "7th" },
    { id: 5, name: "Bilal Hassan", grade: "6th" },
    { id: 6, name: "Fatima Noor", grade: "10th" },
    { id: 7, name: "Usman Tariq", grade: "9th" },
    { id: 8, name: "Zara Ali", grade: "8th" },
    { id: 9, name: "Omar Siddiqui", grade: "7th" },
    { id: 10, name: "Maryam Javed", grade: "6th" },
    { id: 11, name: "Hamza Iqbal", grade: "10th" },
    { id: 12, name: "Kiran Shah", grade: "9th" },
    { id: 13, name: "Ahmad Raza", grade: "8th" },
    { id: 14, name: "Hira Yousaf", grade: "7th" },
    { id: 15, name: "Imran Zafar", grade: "6th" },
  ];

  return (
    <div className="table-container">
      <h1>Students</h1>
      <table className="shared-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          {sampleStudents.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.grade}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Students;
