import React from "react";
import "../../styles/Table.css"; // 👈 shared styles

function Teachers() {
  const sampleTeachers = [
    { id: 1, name: "Mr. Ahmed", subject: "Mathematics" },
    { id: 2, name: "Ms. Fatima", subject: "Science" },
    { id: 3, name: "Mr. John", subject: "English" },
    { id: 4, name: "Mrs. Ayesha", subject: "Computer Science" },
    { id: 5, name: "Mr. Bilal", subject: "Physics" },
    { id: 6, name: "Ms. Sara", subject: "Chemistry" },
    { id: 7, name: "Mr. Imran", subject: "Biology" },
    { id: 8, name: "Mrs. Kiran", subject: "History" },
    { id: 9, name: "Mr. Usman", subject: "Geography" },
    { id: 10, name: "Ms. Hira", subject: "Urdu" },
    { id: 11, name: "Mr. Ali", subject: "Islamic Studies" },
    { id: 12, name: "Ms. Maryam", subject: "Social Studies" },
    { id: 13, name: "Mr. Omar", subject: "Economics" },
    { id: 14, name: "Mrs. Nadia", subject: "Political Science" },
    { id: 15, name: "Mr. Salman", subject: "Art & Design" },
  ];

  return (
    <div className="table-container">
      <h1>Teachers</h1>
      <table className="shared-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Subject</th>
          </tr>
        </thead>
        <tbody>
          {sampleTeachers.map((teacher) => (
            <tr key={teacher.id}>
              <td>{teacher.id}</td>
              <td>{teacher.name}</td>
              <td>{teacher.subject}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Teachers;
