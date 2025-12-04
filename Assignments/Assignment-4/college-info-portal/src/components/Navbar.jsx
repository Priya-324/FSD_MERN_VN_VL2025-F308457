import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="inner">
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <span className="badge">College Info</span>
          <strong>Shri Nattam Institute</strong>
        </div>
        <div className="navlinks">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/departments">Departments</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>
      </div>
    </nav>
  );
}
