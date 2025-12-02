
import React from "react";

export default function Q1Students() {
  const students = [
    { name: "Ajith", dept: "CSE", year: 3 },
    { name: "Arun", dept: "ECE", year: 2 },
    { name: "Mahti", dept: "IT", year: 1 },
  ];

  return (
    <div>
      <h2>Students</h2>
      {students.map((s, i) => (
        <div key={i} style={{ border: "1px solid black", margin: "5px", padding: "10px" }}>
          <h3>{s.name}</h3>
          <p>{s.dept} - Year {s.year}</p>
        </div>
      ))}
    </div>
  );
}
