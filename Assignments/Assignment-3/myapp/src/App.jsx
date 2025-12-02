// App.js
import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Q1Students from "./components/Q1Students";
import Q2LoginMessage from "./components/Q2LoginMessage";
import Q3ProfileCard from "./components/Q3ProfileCard";
import Q4LiveUsername from "./components/Q4LiveUsername";
import Q5FormDisplay from "./components/Q5FormDisplay";
import Q6ProductsTable from "./components/Q6ProductsTable";
import Q7ParentChildAlert from "./components/Q7ParentChildAlert";
import Q8FilterProducts from "./components/Q8FilterProducts";
import Q9SearchStudents from "./components/Q9SearchStudents";
import Q10LocalData from "./components/Q10LocalData";
import Q11FetchProducts from "./components/Q11FetchProducts";
import Q13FruitsAdd from "./components/Q13FruitsAdd";
import Q14FruitsDelete from "./components/Q14FruitsDelete";
import Q15ProfileEdit from "./components/Q15ProfileEdit";
import Q16PostForm from "./components/Q16PostForm";
import Q17EditUser from "./components/Q17EditUser";
import Q18PaginationUsers from "./components/Q18PaginationUsers";
import Home from "./components/Home";
import About from "./components/About";
import Products from "./components/Products";
import Electronics from "./components/Electronics";
import Fashion from "./components/Fashion";

export default function App() {
  return (
    <div>
      <nav style={{ marginBottom: "20px" }}>
        <Link to="/">Home</Link> |{" "}
        <Link to="/about">About</Link> |{" "}
        <Link to="/products">Products</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />}>
          <Route path="electronics" element={<Electronics />} />
          <Route path="fashion" element={<Fashion />} />
        </Route>

        {/* Questions */}
        <Route path="/q1" element={<Q1Students />} />
        <Route path="/q2" element={<Q2LoginMessage />} />
        <Route path="/q3" element={<Q3ProfileCard />} />
        <Route path="/q4" element={<Q4LiveUsername />} />
        <Route path="/q5" element={<Q5FormDisplay />} />
        <Route path="/q6" element={<Q6ProductsTable />} />
        <Route path="/q7" element={<Q7ParentChildAlert />} />
        <Route path="/q8" element={<Q8FilterProducts />} />
        <Route path="/q9" element={<Q9SearchStudents />} />
        <Route path="/q10" element={<Q10LocalData />} />
        <Route path="/q11" element={<Q11FetchProducts />} />
        <Route path="/q13" element={<Q13FruitsAdd />} />
        <Route path="/q14" element={<Q14FruitsDelete />} />
        <Route path="/q15" element={<Q15ProfileEdit />} />
        <Route path="/q16" element={<Q16PostForm />} />
        <Route path="/q17" element={<Q17EditUser />} />
        <Route path="/q18" element={<Q18PaginationUsers />} />
      </Routes>
    </div>
  );
}
