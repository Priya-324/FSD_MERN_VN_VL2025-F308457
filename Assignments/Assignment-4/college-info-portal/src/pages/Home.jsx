import Hero from '../components/Hero.jsx';
import Section from '../components/Section.jsx';
import DepartmentCard from '../components/DepartmentCard.jsx';
import departments from '../data/departments.json';
import { Link } from 'react-router-dom';

export default function Home() {
  const topDepts = departments.filter(d => d.top);

  return (
    <>
      <Hero />

      <Section
        title="Why this college?"
        subtitle="Modern curriculum, industry partnerships, and a campus designed for hands-on learning."
      >
        <div className="grid cols-3">
          <div className="card">
            <h3>Industry-ready learning</h3>
            <p>Capstone projects, internships, and labs aligned with real-world needs.</p>
          </div>
          <div className="card">
            <h3>Research & innovation</h3>
            <p>Centers of excellence and faculty-led research initiatives.</p>
          </div>
          <div className="card">
            <h3>Student support</h3>
            <p>Mentorship, clubs, and career guidance every step of the way.</p>
          </div>
        </div>
      </Section>

      <Section
        title="Top departments"
        subtitle="Explore our most sought-after programs"
      >
        <div className="grid cols-3">
          {topDepts.map(dept => (
            <DepartmentCard key={dept.slug} dept={dept} />
          ))}
        </div>
        <div style={{ marginTop: 12 }}>
          <Link className="btn" to="/departments">View all departments</Link>
          <Link className="btn" style={{ marginLeft: 8 }} to="/contact">Contact us</Link>
        </div>
      </Section>
    </>
  );
}
