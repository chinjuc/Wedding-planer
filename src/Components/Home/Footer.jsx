import React, { useState } from 'react';
import './Footer.css';

const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Message sent:', formData);
    alert('Thank you! We will get back to you.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <footer className="footer-container">
      <div className="footer-top">
        <div className="footer-info">
          <h2>DreamDay Planners</h2>
          <p>Planning your dream events with perfection. Contact us anytime!</p>
        </div>

        <div className="footer-contact">
          <h3>Contact Us</h3>
          <form onSubmit={handleSubmit} className="footer-form">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            />
            <button type="submit">Send</button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 DreamDay Planners. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
