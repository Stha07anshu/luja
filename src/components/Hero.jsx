// src/components/Hero.js
import React, { useState, useEffect } from 'react';
import '../styles/Hero.css';

// Import images
import projectImage1 from '../asset/images/2a.jpg';


const images = [
  projectImage1,
  
];

const Hero = () => {
  // State to hold the index of the current image
  const [currentIndex, setCurrentIndex] = useState(0);

  // Change the image every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // 3000ms = 3 seconds

    return () => clearInterval(interval); // Clear the interval when the component unmounts
  }, []);

  return (
    <section className="hero">
      <img
        src={images[currentIndex]}
        alt="Project Slide"
        className="hero-image"
      />
    </section>
  );
};

export default Hero;
