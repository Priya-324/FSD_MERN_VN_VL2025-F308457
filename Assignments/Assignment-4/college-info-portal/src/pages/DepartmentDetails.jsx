import { useParams, Link } from 'react-router-dom';
import departments from '../data/departments.json';
import Section from '../components/Section.jsx';

export default function DepartmentDetails() {
  const { slug } = useParams();
  const dept = departments.find(d => d.slug === slug);

  if (!dept) {
    return (
      <Section title="Department not found">
        <p>The department you’re looking for doesn’t exist.</p>
        <Link className="btn" to="/departments">Back to Departments</Link>
      </Section>
    );
  }

  return (
    <>
      <Section
        title={dept.name}
        subtitle={dept.description}
      >
        <div className="grid cols-3">
          <div className="card">
            <h3>Courses offered</h3>
            <ul className="list">
              {dept.courses.map((c, idx) => <li key={idx}>{c}</li>)}
            </ul>
          </div>
          <div className="card">
            <h3>Faculty</h3>
            <ul className="list">
              {dept.faculty.map((f, idx) => <li key={idx}>{f}</li>)}
            </ul>
          </div>
          <div className="card">
            <h3>Labs & facilities</h3>
            <ul className="list">
              {dept.labs.map((l, idx) => <li key={idx}>{l}</li>)}
            </ul>
          </div>
        </div>
        <div style={{ marginTop: 12 }}>
          <Link className="btn" to="/departments">Back to Departments</Link>
          <Link className="btn" style={{ marginLeft: 8 }} to="/contact">Contact department</Link>
        </div>
      </Section>
    </>
  );
}
