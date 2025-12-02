// Q11FetchProducts.js
import React, { useEffect, useState } from "react";

export default function Q11FetchProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then(res => res.json())
      .then(data => {
        setProducts(data.products);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading…</p>;
  if (error) return <p>Error loading data</p>;

  return (
    <div>
      <h2>Fetched Products</h2>
      {products.map((p) => (
        <div key={p.id} style={{ border: "1px solid gray", margin: "5px", padding: "10px" }}>
          <h3>{p.title}</h3>
          <p>Price: {p.price}</p>
          <p>Brand: {p.brand}</p>
        </div>
      ))}
    </div>
  );
}
