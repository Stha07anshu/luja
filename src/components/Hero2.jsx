import React from 'react';
import '../styles/Hero2.css';

// Import the image
import heroImage from '../asset/images/about.jpg'; // Replace with your image path

const Hero2 = () => {
  return (
    <section className="hero2">
      <div className="hero2-container">
        <img src={heroImage} alt="Single Hero" className="hero2-image" />
      </div>
    </section>
  );
};

export default Hero2;
