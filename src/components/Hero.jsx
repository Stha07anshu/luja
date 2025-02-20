// src/components/Hero.js
import React from 'react';
import '../styles/Hero.css';

// Import images
import projectImage1 from '../asset/images/hero1.png';
import projectImage2 from '../asset/images/hero2.png'; // Add your second image
import projectImage3 from '../asset/images/hero3.png'; // Add your third image

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        {/* Display three images in the container */}
        <img src={projectImage1} alt="Project Slide 1" className="hero-image" />
        <img src={projectImage2} alt="Project Slide 2" className="hero-image" />
        <img src={projectImage3} alt="Project Slide 3" className="hero-image" />
      </div>
    </section>
  );
};

export default Hero;
