
import React from "react";

export default function Q2LoginMessage() {
  const isLoggedIn = true;
  return <h2>{isLoggedIn ? "Welcome back!" : "Please log in"}</h2>;
}
