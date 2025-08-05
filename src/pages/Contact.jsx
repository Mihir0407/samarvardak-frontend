import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const res = await fetch('https://samarvardak-backend.onrender.com/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await res.json();
      if (data.success) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('Something went wrong. Try again.');
      }
    } catch (err) {
      console.error(err);
      setStatus('Server error. Please try later.');
    }
  };

  return (
    <section className="contact scroll-fade-in" id="contact">
      <div className="contact-header">
        <h2 className="section-title">Contact Us</h2>
        <p className="section-subtitle">We’d love to hear from you. Reach out with your queries or just say hello!</p>
      </div>

      <div className="contact-content">
        {/* Contact Info Section */}
        <div className="contact-info">
          <div className="info-item">
            <span className="info-icon">📧</span>
            <p>Email: <a href="mailto:samarvardak@gmail.com">samarvardak@gmail.com</a></p>
          </div>
          <div className="info-item">
            <span className="info-icon">📞</span>
            <p>Phone: <a href="tel:+918401447054">+91 840 144 7054</a></p>
          </div>
          <div className="info-item">
            <span className="info-icon">📍</span>
            <p>Location: Ahmedabad, Gandhinagar, India</p>
          </div>
        </div>

        {/* Contact Form */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
            value={formData.email}
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
            value={formData.message}
            onChange={handleChange}
          />
          <button type="submit">Send Message</button>
          {status && <p className="form-status">{status}</p>}
        </form>
      </div>
    </section>
  );
};

export default Contact;
