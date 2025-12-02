// Q14FruitsDelete.js
import React, { useState } from "react";

export default function Q14FruitsDelete() {
  const [fruits, setFruits] = useState(["Apple", "Banana", "Mango"]);

  const deleteFruit = (index) => {
    setFruits(fruits.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h2>Delete Fruits</h2>
      <ul>
        {fruits.map((f, i) => (
          <li key={i}>
            {f} <button onClick={() => deleteFruit(i)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
