// Q13FruitsAdd.js
import React, { useState } from "react";

export default function Q13FruitsAdd() {
  const [fruits, setFruits] = useState(["Apple", "Banana"]);
  const [newFruit, setNewFruit] = useState("");

  const addFruit = (e) => {
    e.preventDefault();
    if (newFruit.trim()) {
      setFruits([...fruits, newFruit]);
      setNewFruit("");
    }
  };

  return (
    <div>
      <h2>Fruits List</h2>
      <ul>
        {fruits.map((f, i) => <li key={i}>{f}</li>)}
      </ul>
      <form onSubmit={addFruit}>
        <input
          type="text"
          value={newFruit}
          onChange={(e) => setNewFruit(e.target.value)}
          placeholder="Add fruit"
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
