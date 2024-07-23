import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h3>Company</h3>
          <Link to="/about" className="footer-link">About Us</Link>
          <Link to="/team" className="footer-link">Our Team</Link>
          <Link to="/careers" className="footer-link">Careers</Link>
          <Link to="/contact" className="footer-link">Contact</Link>
        </div>
        <div className="footer-column">
          <h3>Support</h3>
          <Link to="/faq" className="footer-link">FAQ</Link>
          <Link to="/support" className="footer-link">Support Center</Link>
          <Link to="/terms" className="footer-link">Terms of Service</Link>
          <Link to="/privacy" className="footer-link">Privacy Policy</Link>
        </div>
        <div className="footer-column">
          <h3>Services</h3>
          <Link to="/services" className="footer-link">Our Services</Link>
          <Link to="/pricing" className="footer-link">Pricing</Link>
          <Link to="/testimonials" className="footer-link">Testimonials</Link>
          <Link to="/blog" className="footer-link">Blog</Link>
        </div>
        <div className="footer-column">
          <h3>Follow Us</h3>
          <Link to="/facebook" className="footer-link">Facebook</Link>
          <Link to="/twitter" className="footer-link">Twitter</Link>
          <Link to="/instagram" className="footer-link">Instagram</Link>
          <Link to="/linkedin" className="footer-link">LinkedIn</Link>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Your Company Name. All rights reserved.
      </div>
    </footer>
  );
};
