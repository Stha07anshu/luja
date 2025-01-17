import React from 'react';
import '../styles/Services.css';

const Services = () => {
  return (
    <section id="services" className="services">
      <h2>Services</h2>
      <div className="services-container">
        <div className="service">
          <h3>Web Design</h3>
          <p>Crafting beautiful, user-friendly websites for clients.</p>
        </div>
        <div className="service">
          <h3>Web Development</h3>
          <p>Developing scalable and functional web applications.</p>
        </div>
        <div className="service">
          <h3>Architecture Design</h3>
          <p>Designing architectural solutions with sustainability in mind.</p>
        </div>
      </div>
    </section>
  );
};

export default Services;
