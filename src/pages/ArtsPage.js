import React, { useState } from 'react';
import styles from '../styles/Work.module.css';
import { motion } from 'framer-motion';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

// Import only Arts images
import art1 from '../assets/slide1.jpg';
import art2 from '../assets/slide2.jpg';
import art3 from '../assets/slide3.jpg';
import art4 from '../assets/slide4.jpg';
import sketch1 from '../assets/gallery5.jpg';
import sketch2 from '../assets/gallery6.jpg';

const ArtsPage = () => {
  const artImages = [art1, art2, art3, art4, sketch1, sketch2];

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className={styles.workContainer}>
      <h1 className={styles.mainTitle}>🎨 Ripra Arts Collection</h1>

      <motion.div
        className={styles.galleryGrid}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {artImages.map((image, index) => (
          <motion.div
            key={index}
            className={styles.galleryItem}
            whileHover={{ scale: 1.05 }}
            onClick={() => openLightbox(index)}
          >
            <img src={image} alt={`Art ${index + 1}`} className={styles.galleryImage} />
            <div className={styles.overlay}>
              <span className={styles.overlayText}>View</span>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {lightboxOpen && (
        <Lightbox
          mainSrc={artImages[currentIndex]}
          nextSrc={artImages[(currentIndex + 1) % artImages.length]}
          prevSrc={artImages[(currentIndex + artImages.length - 1) % artImages.length]}
          onCloseRequest={() => setLightboxOpen(false)}
          onMovePrevRequest={() =>
            setCurrentIndex((currentIndex + artImages.length - 1) % artImages.length)
          }
          onMoveNextRequest={() =>
            setCurrentIndex((currentIndex + 1) % artImages.length)
          }
        />
      )}

      {/* Decorative Artistic Wave */}
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

export default ArtsPage;
