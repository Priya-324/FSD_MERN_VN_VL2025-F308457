
import React, { useState } from "react";

export default function Q4LiveUsername() {
  const [username, setUsername] = useState("");

  return (
    <div>
      <input
        type="text"
        placeholder="Username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <p>Entered: {username}</p>
    </div>
  );
}
