// Header.js
import React from 'react';
import { FaPhone, FaViber, FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="contact-info">
          <a href="https://viber.com/" className="icon viber-icon">
            <FaViber />
          </a>
          <a href="https://wa.me/+37477391291" className="icon whatsapp-icon">
            <FaWhatsapp />
          </a>
          <a href="tel:+1234567890" className="icon phone-icon">
            <FaPhone />+1234567890
          </a>
        </div>
        <div className="header-logo">
          <Link to="/"><h1>Arenda Tech </h1></Link>
        </div>
        <nav className="header-nav">
          <ul>
            <li><Link to="/contact-us">Contact Us</Link></li>
            <li><Link to="/about-me">About Me</Link></li>
            <li><Link to="/">Categories</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
