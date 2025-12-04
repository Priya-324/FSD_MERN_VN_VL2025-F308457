import { useEffect, useState } from 'react';
import DepartmentCard from '../components/DepartmentCard.jsx';

export default function Departments() {
  const [departments, setDepartments] = useState([]);
  const [selectedDeptId, setSelectedDeptId] = useState(null);

  useEffect(() => {
    // Load local JSON data
    async function load() {
      const data = await import('../data/departments.json');
      setDepartments(data.default);
    }
    load();
  }, []);

  return (
    <section>
      <h1>Departments</h1>
      <p>
        Browse all departments and click “View details” to see full information. You can also select a department.
      </p>

      {selectedDeptId && (
        <div className="card" style={{ marginBottom: 12 }}>
          <strong>Selected department:</strong> {selectedDeptId}
        </div>
      )}

      <div className="grid">
        {departments.map((dept) => (
          <DepartmentCard
            key={dept.id}
            dept={dept}
            onSelect={(id) => setSelectedDeptId(id)}
          />
        ))}
      </div>
    </section>
  );
}
