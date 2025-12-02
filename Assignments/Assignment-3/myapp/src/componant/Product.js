// components/Products.js
import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Products() {
  return (
    <div>
      <h2>Products Page</h2>
      <nav>
        <Link to="electronics">Electronics</Link> |{" "}
        <Link to="fashion">Fashion</Link>
      </nav>
      <Outlet /> {/* Nested route content appears here */}
    </div>
  );
}
