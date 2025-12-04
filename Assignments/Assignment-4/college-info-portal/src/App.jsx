import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Home from './Pages/Home.jsx';
import About from './Pages/About.jsx';
import Departments from './Pages/Departments.jsx';
import DepartmentDetails from './Pages/DepartmentDetails.jsx';
import Contact from './Pages/Contact.jsx';
import DepartmentCard from "../components/DepartmentCard.jsx";
import departments from "../data/departments.json";


export default function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/departments" element={<Departments />} />
          <Route path="/departments/:slug" element={<DepartmentDetails />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<h2>404 — Page Not Found</h2>} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
