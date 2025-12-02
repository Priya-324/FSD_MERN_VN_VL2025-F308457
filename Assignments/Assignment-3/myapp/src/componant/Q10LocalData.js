// Q10LocalData.js
import React from "react";
import data from "../data.json"; // make sure data.json exists in src/

export default function Q10LocalData() {
  return (
    <div>
      <h2>Local Data Products</h2>
      {data.map((p) => (
        <div key={p.id} style={{ border: "1px solid gray", margin: "5px", padding: "10px" }}>
          <h3>{p.name}</h3>
          <p>Price: {p.price}</p>
        </div>
      ))}
    </div>
  );
}
