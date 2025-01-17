import React from 'react';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';  // LinkedIn & Instagram Icons
import '../styles/Footer.css'; // Ensure you import the corresponding CSS

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Contact Information */}
        <div className="contact-info">
          <h3>Luja Maharjan</h3>
          <p>Kathmandu / NEPAL | +977 70 257 92 02 | luja.maharjan@gmail.com</p>
        </div>

        {/* Footer Links */}
        <div className="footer-links">
          <ul>
            <li><a href="/" className="footer-link">About</a></li>
            <li><a href="#education" className="footer-link">Education</a></li>
            <li><a href="#skills" className="footer-link">Skills</a></li>
            <li><a href="#awards" className="footer-link">Awards</a></li>
            <li><a href="/projects" className="footer-link">Works</a></li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div className="social-links">
          <a href="https://www.instagram.com/luja_maharjan?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={30} /> Instagram
          </a>
          <a href="https://www.linkedin.com/in/luja-maharjan-997882233/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={30} /> LinkedIn
          </a>
        </div>
      </div>

      {/* Copyright Notice */}
      <p className="footer-copy">© Luja Maharjan, 2024</p>
    </footer>
  );
};

export default Footer;
