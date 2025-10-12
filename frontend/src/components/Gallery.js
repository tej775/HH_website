// src/ImageGallery.js

import React, { useState } from 'react';

// Array of image sources (use public folder for images)
const IMAGES = [
  '/images/hq720.jpg',
  '/images/charity.jpg',
  '/images/image3.jpg',
  '/images/image4.jpg',
  '/images/image5.jpg',
];

/* Gallery.css styles */
const galleryCss = `
.gallery-container {
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  background: #fff;
  border-radius: 0;
  box-shadow: none;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.gallery-heading {
  font-size: 2.5rem;
  margin-bottom: 24px;
  color: #333;
  letter-spacing: 1px;
}
.main-gallery {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0;
  flex: 1;
}
.image-wrapper {
  position: relative;
  flex: 1;
  max-width: 90vw;
  max-height: 80vh;
  aspect-ratio: 16/9;
  overflow: hidden;
  border-radius: 16px;
  box-shadow: 0 1px 16px rgba(0,0,0,0.10);
  background: #f8f8f8;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: box-shadow 0.2s;
}
.gallery-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.3s;
  cursor: pointer;
}
.image-wrapper:hover .gallery-image,
.image-wrapper:active .gallery-image {
  transform: scale(1.04) rotate(-1deg);
  box-shadow: 0 8px 32px rgba(25,118,210,0.13);
}
.slide-nav-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(167, 13, 33, 0.93);
  color: #fff;
  border: none;
  border-radius: 50%;
  width: 38px;
  height: 38px;
  font-size: 1.5rem;
  cursor: pointer;
  transition: background 0.2s, transform 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  opacity: 0.85;
}
.slide-nav-button:hover {
  background: #eb3c53ff;
  transform: translateY(-50%) scale(1.08);
}
.slide-nav-button.left {
  left: 16px;
}
.slide-nav-button.right {
  right: 16px;
}
.image-info {
  position: absolute;
  left: 0;
  right: 0;
  bottom: -60px;
  background: rgba(243, 108, 115, 0.92);
  color: #fff;
  font-size: 1.6rem;
  padding: 18px 0 12px 0;
  border-radius: 0 0 16px 16px;
  text-align: center;
  opacity: 0;
  pointer-events: none;
  transition: bottom 0.35s cubic-bezier(.4,2,.6,1), opacity 0.25s;
}
.image-wrapper.show-info .image-info {
  bottom: 0;
  opacity: 1;
  pointer-events: auto;
}
`;

// Inject the CSS into the document head (for demo purposes)
if (typeof document !== 'undefined' && !document.getElementById('gallery-css')) {
  const style = document.createElement('style');
  style.id = 'gallery-css';
  style.innerHTML = galleryCss;
  document.head.appendChild(style);
}

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showInfo, setShowInfo] = useState(false);

  // Show next image, wrapping around
  const showNextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % IMAGES.length);
    setShowInfo(false);
  };

  // Show previous image, wrapping around
  const showPrevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + IMAGES.length) % IMAGES.length);
    setShowInfo(false);
  };

  // Example info text for each image (customize as needed)
  const imageInfos = [
    "This is the first image description.",
    "EYE CAMP-2023.",
    "Third gallery image details.",
    "Fourth image from the event.",
    "Fifth image in the gallery."
  ];

  // For touch devices, toggle info on tap
  const handleImageClick = () => setShowInfo((v) => !v);

  return (
    <div className="gallery-container">
      <h1 className="gallery-heading">Latest Images</h1>
      <div className="main-gallery">
        <div
          className={`image-wrapper${showInfo ? ' show-info' : ''}`}
          onClick={handleImageClick}
          onMouseLeave={() => setShowInfo(false)}
        >
          <button
            onClick={(e) => { e.stopPropagation(); showPrevImage(); }}
            className="slide-nav-button left"
            aria-label="Previous Image"
          >
            &lt;
          </button>
          <img
            src={IMAGES[currentIndex]}
            alt={`Gallery Image ${currentIndex + 1}`}
            className="gallery-image"
            draggable={false}
          />
          <button
            onClick={(e) => { e.stopPropagation(); showNextImage(); }}
            className="slide-nav-button right"
            aria-label="Next Image"
          >
            &gt;
          </button>
          <div className="image-info">
            {imageInfos[currentIndex]}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;