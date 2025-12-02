// Q16PostForm.js
import React, { useState } from "react";
import axios from "axios";

export default function Q16PostForm() {
  const [form, setForm] = useState({ title: "", body: "" });
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://dummyjson.com/posts/add", form);
      setMessage("Post Added!");
    } catch {
      setMessage("Error adding post");
    }
  };

  return (
    <div>
      <h2>Add Post</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          onChange={(e) => setForm({ ...form, title: e.target.value })}
        />
        <textarea
          placeholder="Body"
          onChange={(e) => setForm({ ...form, body: e.target.value })}
        />
        <button type="submit">Submit</button>
      </form>
      <p>{message}</p>
    </div>
  );
}
