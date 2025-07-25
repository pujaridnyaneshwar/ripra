import React from 'react';
import styles from '../styles/Footer.module.css';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        
        {/* About Section */}
        <div className={styles.footerSection}>
          <h3 className={styles.footerHeading}>About Us</h3>
          <p className={styles.footerText}>
            Ripra is an artistic studio where ideas meet creativity. We design powerful visuals through murals,
            branding, packaging, and digital artwork that inspire and connect.
          </p>
        </div>

        {/* Quick Links */}
        <div className={styles.footerSection}>
          <h3 className={styles.footerHeading}>Quick Links</h3>
          <ul className={styles.footerLinks}>
            <li><a href="/" className={styles.footerLink}>Home</a></li>
            <li><a href="/about" className={styles.footerLink}>About</a></li>
            <li><a href="/work" className={styles.footerLink}>Our Work</a></li>
            <li><a href="/contact" className={styles.footerLink}>Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className={styles.footerSection}>
          <h3 className={styles.footerHeading}>Contact Us</h3>
          <p className={styles.footerText}>
            123 Art Street<br />
            Pune, Maharashtra 411001<br />
            Phone: +91 98765 43210<br />
            Email: hello@riprastudio.com
          </p>
        </div>

        {/* Social Media */}
        <div className={styles.footerSection}>
          <h3 className={styles.footerHeading}>Follow Us</h3>
          <div className={styles.socialIcons}>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="Instagram"><FaInstagram /></a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="Facebook"><FaFacebook /></a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="YouTube"><FaYoutube /></a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className={styles.footerBottom}>
        <p>&copy; {new Date().getFullYear()} Ripra Studio. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
