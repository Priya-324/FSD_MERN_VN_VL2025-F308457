import React, { useState } from "react";

export default function Q5FormDisplay() {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [submitted, setSubmitted] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(formData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <button type="submit">Submit</button>
      </form>

      {submitted && (
        <div>
          <p>Name: {submitted.name}</p>
          <p>Email: {submitted.email}</p>
        </div>
      )}
    </div>
  );
}
