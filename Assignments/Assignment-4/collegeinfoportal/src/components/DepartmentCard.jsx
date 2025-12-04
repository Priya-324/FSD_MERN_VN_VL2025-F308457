import { Link } from 'react-router-dom';
import styles from './DepartmentCard.module.css';

export default function DepartmentCard({ dept, onSelect }) {
  return (
    <div className={`card ${styles.card}`}>
      <h3 className={styles.title}>{dept.name}</h3>
      <p className={styles.desc}>{dept.description}</p>
      <div className={styles.meta}>
        <span className={styles.tag}>Courses: {dept.courses.length}</span>
        <span className={styles.tag}>Faculty: {dept.faculty.length}</span>
      </div>

      <div className={styles.actions}>
        <button
          className="button"
          onClick={() => onSelect(dept.id)}
          aria-label={`Select ${dept.name}`}
        >
          Select
        </button>
        <Link className="button" to={`/departments/${dept.id}`}>
          View details
        </Link>
      </div>
    </div>
  );
}
