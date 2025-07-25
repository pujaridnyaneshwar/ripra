import React from 'react';
import styles from '../styles/Contact.module.css';
import { motion } from 'framer-motion';

const ContactPage = () => {
  return (
    <section className={styles.contactSection}>
      <motion.div
        className={styles.header}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2>📞 Get In Touch</h2>
        <p>Have a project in mind or just want to say hello? We’d love to hear from you!</p>
      </motion.div>

      <div className={styles.contactContent}>
        {/* Contact Form */}
        <motion.form
          className={styles.form}
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </motion.form>

        {/* Contact Info */}
        <motion.div
          className={styles.info}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3>📍 Studio Details</h3>
          <p><strong>Email:</strong> info@riprastudio.com</p>
          <p><strong>Phone:</strong> +91-12345-67890</p>
          <p><strong>Address:</strong> Ripra Studio, Pune, Maharashtra</p>

          <div className={styles.mapContainer}>
            <iframe
              title="Ripra Studio Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.291519291267!2d73.85674351489243!3d18.52043098739648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c08df7df4f5d%3A0xcdfbf8c8266d3349!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1603123456789!5m2!1sen!2sin"
              width="100%"
              height="200"
              frameBorder="0"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactPage;
