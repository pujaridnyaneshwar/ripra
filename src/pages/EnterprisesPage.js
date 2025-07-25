import React, { useState } from 'react';
import styles from '../styles/Work.module.css';
import { motion } from 'framer-motion';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

// Import images
import fabric1 from '../assets/gallery21.jpg';
import fabric2 from '../assets/gallery22.jpg';
import book1 from '../assets/gallery7.jpg';
import book2 from '../assets/gallery8.jpg';
import book3 from '../assets/gallery9.jpg';
import book4 from '../assets/gallery10.jpg';
import book5 from '../assets/gallery11.jpg';
import book6 from '../assets/gallery12.jpg';
import book7 from '../assets/gallery13.jpg';
import book8 from '../assets/gallery14.jpg';
import book9 from '../assets/gallery15.jpg';
import book10 from '../assets/gallery16.jpg';

const EnterprisesPage = () => {
  const enterpriseImages = [
    fabric1, fabric2,
    book1, book2, book3, book4, book5, book6, book7, book8, book9, book10
  ];

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className={styles.workContainer}>
      <h1 className={styles.mainTitle}>🏢 Ripra Enterprises Showcase</h1>

      <motion.div
        className={styles.galleryGrid}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {enterpriseImages.map((image, index) => (
          <motion.div
            key={index}
            className={styles.galleryItem}
            whileHover={{ scale: 1.05 }}
            onClick={() => openLightbox(index)}
          >
            <img src={image} alt={`Enterprise Work ${index + 1}`} className={styles.galleryImage} />
            <div className={styles.overlay}>
              <span className={styles.overlayText}>View</span>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {lightboxOpen && (
        <Lightbox
          mainSrc={enterpriseImages[currentIndex]}
          nextSrc={enterpriseImages[(currentIndex + 1) % enterpriseImages.length]}
          prevSrc={enterpriseImages[(currentIndex + enterpriseImages.length - 1) % enterpriseImages.length]}
          onCloseRequest={() => setLightboxOpen(false)}
          onMovePrevRequest={() =>
            setCurrentIndex((currentIndex + enterpriseImages.length - 1) % enterpriseImages.length)
          }
          onMoveNextRequest={() =>
            setCurrentIndex((currentIndex + 1) % enterpriseImages.length)
          }
        />
      )}

      <div className={styles.artisticWave}>
        <svg viewBox="0 0 1200 200" preserveAspectRatio="none">
          <defs>
            <linearGradient id="ripraWaveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#f6c644" />
              <stop offset="25%" stopColor="#f4d94d" />
              <stop offset="50%" stopColor="#b1d477" />
              <stop offset="75%" stopColor="#7ec8d7" />
              <stop offset="100%" stopColor="#499cd2" />
            </linearGradient>
          </defs>
          <path d="M0,120 C150,180 300,80 450,120 C600,160 750,40 900,80 C1050,120 1200,60 1200,60 L1200,200 L0,200 Z"
            fill="url(#ripraWaveGradient)" opacity="0.15" />
          <path d="M0,150 C80,80 200,170 320,130 C440,90 520,180 640,150 C760,120 880,190 1000,150 C1120,110 1200,170 1200,170 L1200,200 L0,200 Z"
            fill="url(#ripraWaveGradient)" opacity="0.3" />
          <path d="M0,160 C40,120 120,190 200,150 C280,110 320,180 400,150 C480,120 560,190 640,160 C720,130 800,180 880,150 C960,120 1040,170 1120,140 C1160,125 1200,165 1200,165 L1200,200 L0,200 Z"
            fill="url(#ripraWaveGradient)" />
        </svg>
      </div>
    </div>
  );
};

export default EnterprisesPage;
