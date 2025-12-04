import Section from '../components/Section.jsx';

export default function About() {
  return (
    <>
      <Section
        title="College history"
        subtitle="Founded in 1998, Shri Nattam Institute has grown into a multidisciplinary hub for engineering and management."
      >
        <p>
          From a modest beginning, we expanded with modern labs, strong faculty, and vibrant student communities.
          Our alumni contribute across tech, manufacturing, infrastructure, and entrepreneurship.
        </p>
      </Section>

      <Section title="Mission & vision" subtitle="Purpose that guides our progress">
        <div className="grid cols-3">
          <div className="card">
            <h3>Mission</h3>
            <p>Deliver quality education that blends theory with practice and nurtures ethical leadership.</p>
          </div>
          <div className="card">
            <h3>Vision</h3>
            <p>Be a center of excellence recognized for innovation, inclusivity, and impact.</p>
          </div>
          <div className="card">
            <h3>Values</h3>
            <p>Curiosity, integrity, collaboration, and lifelong learning.</p>
          </div>
        </div>
      </Section>

      <Section title="Achievements" subtitle="Milestones over the years">
        <div className="grid cols-3">
          <div className="card">
            <h3>NAAC Accredited</h3>
            <p>Consistent academic quality and student outcomes.</p>
          </div>
          <div className="card">
            <h3>Innovation Grants</h3>
            <p>Funding awarded for research in AI, sustainability, and IoT.</p>
          </div>
          <div className="card">
            <h3>Top Placements</h3>
            <p>Strong industry ties with leading tech and core companies.</p>
          </div>
        </div>
      </Section>
    </>
  );
}
