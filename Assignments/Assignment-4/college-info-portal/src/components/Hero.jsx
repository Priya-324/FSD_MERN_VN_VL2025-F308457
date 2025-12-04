import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="hero">
      <h1>Empowering futures through excellence</h1>
      <p>Join a community where curiosity meets opportunity — learn, build, and lead.</p>
      <div className="actions">
        <Link className="btn primary" to="/departments">Explore Departments</Link>
        <Link className="btn outline" to="/about">Why This College?</Link>
      </div>
    </section>
  );
}
