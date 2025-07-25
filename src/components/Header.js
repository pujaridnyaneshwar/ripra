import React from 'react';
import { FaPhone } from 'react-icons/fa';
import { FiInstagram, FiFacebook, FiYoutube } from 'react-icons/fi';
import styles from '../styles/Header.module.css';

const Header = () => {
  // const { theme, toggleTheme } = useTheme();
  const [isMobile, setIsMobile] = React.useState(window.innerWidth < 768);

  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.topBar}>
        <div className={styles.right}>
          <a href="tel:+1234567890" className={styles.contactItem}>
            {isMobile ? <FaPhone /> : <><FaPhone /> +1 234 567 890</>}
          </a>

          {/* <button
            className={styles.themeToggle}
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'light' ? <FaMoon /> : <FaSun />}
          </button> */}

          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles.icon}>
            <FiInstagram />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={styles.icon}>
            <FiFacebook />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className={styles.icon}>
            <FiYoutube />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
