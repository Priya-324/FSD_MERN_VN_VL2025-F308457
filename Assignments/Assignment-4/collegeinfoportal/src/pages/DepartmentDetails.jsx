import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function DepartmentDetail() {
  const { id } = useParams();
  const [dept, setDept] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      const data = await import('../data/departments.json');
      const found = data.default.find((d) => d.id === id);
      setDept(found || null);
      setLoading(false);
    }
    load();
  }, [id]);

  if (loading) return <p>Loading department...</p>;
  if (!dept) return <p>Department not found.</p>;

  return (
    <section>
      <h1>{dept.name}</h1>
      <p>{dept.description}</p>

      <div className="grid" style={{ marginTop: 16 }}>
        <div className="card">
          <h3>Courses</h3>
          <ul>
            {dept.courses.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>
        <div className="card">
          <h3>Faculty</h3>
          <ul>
            {dept.faculty.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
        </div>
        <div className="card">
          <h3>Labs</h3>
          <ul>
            {dept.labs.map((l) => (
              <li key={l}>{l}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
