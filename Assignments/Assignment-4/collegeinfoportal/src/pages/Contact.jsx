import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(null);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault(); // prevent page refresh
    setSubmitted(form);
    setForm({ name: '', email: '', message: '' });
  }

  return (
    <section>
      <h1>Contact</h1>
      <p>Send us a message. Your submitted data will appear below.</p>

      <form className="card" onSubmit={handleSubmit}>
        <div style={{ display: 'grid', gap: 12 }}>
          <label>
            <span>Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
              required
              style={{ width: '100%', padding: 10, marginTop: 6 }}
            />
          </label>
          <label>
            <span>Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
              required
              style={{ width: '100%', padding: 10, marginTop: 6 }}
            />
          </label>
          <label>
            <span>Message</span>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Write your message..."
              rows={4}
              required
              style={{ width: '100%', padding: 10, marginTop: 6 }}
            />
          </label>
          <button className="button" type="submit">Submit</button>
        </div>
      </form>

      {submitted && (
        <div className="card" style={{ marginTop: 16 }}>
          <h3>Submitted data</h3>
          <p><strong>Name:</strong> {submitted.name}</p>
          <p><strong>Email:</strong> {submitted.email}</p>
          <p><strong>Message:</strong> {submitted.message}</p>
        </div>
      )}
    </section>
  );
}
