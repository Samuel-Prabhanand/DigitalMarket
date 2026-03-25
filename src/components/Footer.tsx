import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer: React.FC = () => (
  <footer className="footer">
    <div className="container footer-inner">
      <div className="footer-brand">
        <div className="footer-logo"><span className="logo-dot">●</span> NovaSpark</div>
        <p>We grow brands with data-driven digital marketing strategies that deliver real, measurable results.</p>
        <div className="socials">
          {['LinkedIn', 'Twitter', 'Instagram', 'YouTube'].map(s => (
            <a key={s} href="#!" className="social-link">{s[0]}</a>
          ))}
        </div>
      </div>
      <div className="footer-col">
        <h4>Pages</h4>
        {[['/', 'Home'], ['/about', 'About Us'], ['/services', 'Services'], ['/portfolio', 'Portfolio'], ['/contact', 'Contact']].map(([to, label]) => (
          <Link key={to} to={to}>{label}</Link>
        ))}
      </div>
      <div className="footer-col">
        <h4>Services</h4>
        {['SEO Optimization', 'PPC Advertising', 'Social Media', 'Content Marketing', 'Email Campaigns', 'Analytics'].map(s => (
          <a key={s} href="#!">{s}</a>
        ))}
      </div>
      <div className="footer-col">
        <h4>Contact</h4>
        <a href="mailto:hello@novaspark.io">hello@novaspark.io</a>
        <a href="tel:+91-98765-43210">+91 98765 43210</a>
        <p style={{marginTop: 8, fontSize: 13, color: 'var(--muted)'}}>Bengaluru, India</p>
      </div>
    </div>
    <div className="footer-bottom">
      <div className="container">
        <p>© {new Date().getFullYear()} NovaSpark Digital. All rights reserved.</p>
        <div className="footer-bottom-links">
          <a href="#!">Privacy Policy</a>
          <a href="#!">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
