import React, { useState } from "react";

export default function Q9SearchStudents() {
  const students = ["Priya", "Arun", "Meena", "Kiran"];
  const [search, setSearch] = useState("");

  const filtered = students.filter(s => s.toLowerCase().includes(search.toLowerCase()));

  return (
    <div>
      <h2>Search Students</h2>
      <input
        type="text"
        placeholder="Search name..."
        onChange={(e) => setSearch(e.target.value)}
      />
      <ul>
        {filtered.map((s, i) => <li key={i}>{s}</li>)}
      </ul>
    </div>
  );
}
