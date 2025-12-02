// Q17EditUser.js
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Q17EditUser() {
  const [user, setUser] = useState({ name: "", email: "" });

  useEffect(() => {
    axios.get("https://dummyjson.com/users/1").then(res => {
      setUser({ name: res.data.firstName, email: res.data.email });
    });
  }, []);

  const updateUser = async () => {
    try {
      await axios.put("https://dummyjson.com/users/1", user);
      alert("User updated!");
    } catch {
      alert("Error updating user");
    }
  };

  return (
    <div>
      <h2>Edit User</h2>
      <input
        value={user.name}
        onChange={(e) => setUser({ ...user, name: e.target.value })}
      />
      <input
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
      />
      <button onClick={updateUser}>Update</button>
    </div>
  );
}
