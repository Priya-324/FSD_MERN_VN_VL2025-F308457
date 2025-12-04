import { Link } from 'react-router-dom';

export default function DepartmentCard({ dept }) {
  return (
    <div className="card">
      <h3>{dept.name}</h3>
      <p>{dept.shortDescription}</p>
      <Link className="btn" to={`/departments/${dept.slug}`}>View More</Link>
    </div>
  );
}
