import React, { useState } from "react";

export default function Q8FilterProducts() {
  const products = [
    { name: "Laptop", category: "Electronics" },
    { name: "Shirt", category: "Clothes" },
    { name: "Phone", category: "Electronics" },
  ];

  const [filter, setFilter] = useState("All");

  const filtered = filter === "All" ? products : products.filter(p => p.category === filter);

  return (
    <div>
      <h2>Filter Products</h2>
      <button onClick={() => setFilter("All")}>All</button>
      <button onClick={() => setFilter("Electronics")}>Electronics</button>
      <button onClick={() => setFilter("Clothes")}>Clothes</button>

      <ul>
        {filtered.map((p, i) => (
          <li key={i}>{p.name} ({p.category})</li>
        ))}
      </ul>
    </div>
  );
}
