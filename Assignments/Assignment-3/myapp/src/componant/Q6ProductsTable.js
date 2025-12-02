import React from "react";

export default function Q6ProductsTable() {
  const products = [
    { id: 1, name: "Laptop", price: 50000 },
    { id: 2, name: "Phone", price: 20000 },
    { id: 3, name: "Headphones", price: 3000 },
  ];

  return (
    <table border="1" cellPadding="5">
      <thead>
        <tr>
          <th>ID</th><th>Name</th><th>Price</th>
        </tr>
      </thead>
      <tbody>
        {products.map((p) => (
          <tr key={p.id}>
            <td>{p.id}</td>
            <td>{p.name}</td>
            <td>{p.price}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
