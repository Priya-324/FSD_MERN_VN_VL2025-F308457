import React from "react";

function ProfileCard({ name, role, image }) {
  return (
    <div style={{ border: "1px solid gray", margin: "10px", padding: "10px" }}>
      <img src={image} alt={name} width="100" />
      <h3>{name}</h3>
      <p>{role}</p>
    </div>
  );
}

export default function Q3ProfileCard() {
  return (
    <div>
      <ProfileCard name="Ajith" role="Developer" image="https://via.placeholder.com/100" />
      <ProfileCard name="Arun" role="Designer" image="https://via.placeholder.com/100" />
      <ProfileCard name="Mathi" role="Tester" image="https://via.placeholder.com/100" />
    </div>
  );
}
