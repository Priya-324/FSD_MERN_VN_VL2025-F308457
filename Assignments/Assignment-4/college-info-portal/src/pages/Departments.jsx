import Section from '../components/Section.jsx';
import DepartmentCard from '../components/DepartmentCard.jsx';
import departments from '../data/departments.json';

export default function Departments() {
  return (
    <Section
      title="Departments"
      subtitle="Explore all programs and find the right fit for you"
    >
      <div className="grid cols-3">
        {departments.map(dept => (
          <DepartmentCard key={dept.slug} dept={dept} />
        ))}
      </div>
    </Section>
  );
}
