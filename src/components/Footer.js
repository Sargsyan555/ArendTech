import React from 'react';
import './styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-columns">
        {/* First Column: Logo and Phone */}
        <div className="footer-column">
          <h2 className="footer-logo">ArendaTech</h2>
          <a href="tel:+1234567890" className="footer-link">📞 +1 234 567 890</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
