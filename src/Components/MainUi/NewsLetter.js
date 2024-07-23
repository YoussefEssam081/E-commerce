import React, { useState } from 'react';
import './Newsletter.css';
import '../../App.css';

export const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add your email subscription logic (e.g., API call to backend)
    setMessage(`Thank you for subscribing with ${email}`);
    setEmail('');
  };


  return (
    <div className="newsletter">
      <h2 className="newsletter-heading">Subscribe to Our Newsletter</h2>
      <p className="newsletter-text">Get exclusive offers and updates right in your inbox.</p>
      <form className="newsletter-form" onSubmit={handleSubmit}>
        <input
          type="email"
          className="newsletter-input"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit" className="custom-btn btn-3 newsletter-btn">
          <span>Subscribe</span>
        </button>
      </form>
      {message && <p className="newsletter-message">{message}</p>}
    </div>
  );
};
