// Q15ProfileEdit.js
import React, { useState } from "react";

export default function Q15ProfileEdit() {
  const [profile, setProfile] = useState({
    name: "Priya",
    email: "priya@example.com",
    phone: "1234567890",
  });

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h2>Edit Profile</h2>
      <input name="name" value={profile.name} onChange={handleChange} />
      <input name="email" value={profile.email} onChange={handleChange} />
      <input name="phone" value={profile.phone} onChange={handleChange} />
      <h3>Updated Profile:</h3>
      <p>{profile.name} | {profile.email} | {profile.phone}</p>
    </div>
  );
}
