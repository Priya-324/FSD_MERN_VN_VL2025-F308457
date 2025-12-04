import { useState } from 'react';
import Section from '../components/Section.jsx';
import departments from '../data/departments.json';

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    department: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(null);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(form);
  }

  return (
    <>
      <Section
        title="Contact us"
        subtitle="Have questions? Reach out and we’ll get back shortly."
      >
        <form className="form" onSubmit={handleSubmit}>
          <div className="row">
            <div>
              <label htmlFor="name">Name</label>
              <input
                id="name" name="name" type="text" placeholder="Your name"
                value={form.name} onChange={handleChange} required
              />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                id="email" name="email" type="email" placeholder="you@example.com"
                value={form.email} onChange={handleChange} required
              />
            </div>
          </div>

          <div className="row" style={{ gridTemplateColumns: '1fr' }}>
            <div>
              <label htmlFor="department">Department</label>
              <select
                id="department" name="department"
                value={form.department} onChange={handleChange} required
              >
                <option value="">Select department</option>
                {departments.map(d => (
                  <option key={d.slug} value={d.slug}>{d.name}</option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="message">Message</label>
            <textarea
              id="message" name="message" rows="5" placeholder="Write your message..."
              value={form.message} onChange={handleChange} required
            />
          </div>

          <button className="btn" type="submit">Submit</button>
        </form>

        {submitted && (
          <div className="card" style={{ marginTop: 16 }}>
            <h3>Submitted details</h3>
            <p><strong>Name:</strong> {submitted.name}</p>
            <p><strong>Email:</strong> {submitted.email}</p>
            <p><strong>Department:</strong> {
              departments.find(d => d.slug === submitted.department)?.name || submitted.department
            }</p>
            <p><strong>Message:</strong> {submitted.message}</p>
          </div>
        )}
      </Section>
    </>
  );
}
