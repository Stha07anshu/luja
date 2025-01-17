import React from 'react';
import { FaUserAlt, FaLinkedin, FaAutoprefixer, FaPencilRuler, FaDesktop, FaFileCode, FaPaintBrush, FaClipboard, FaUsers } from 'react-icons/fa';
import Header from './Header';
import '../styles/About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <Header />
      <div className="about-container">
        {/* Left Section: About Details */}
        <div className="about-left">
          <div className="about-details">
            <h4 className="name">
              <FaUserAlt className="icon" />
              I am Luja Maharjan,
            </h4>
            <p className="bio-text">
              A creative and passionate architecture student with a profound interest in art and design. With over a year of professional experience, I have independently worked on and managed numerous architecture projects of varying scales, consistently delivering high-quality results that meet client specifications. I am currently pursuing my Master of Architecture from the University of Idaho.
            </p>
            <div className="social-links">
              <a href="https://www.linkedin.com/in/luja-maharjan-997882233/" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FaLinkedin size={35} />
              </a>
            </div>
          </div>
        </div>

        {/* Right Section: Profile Image */}
        <div className="about-right">
          {/* <div className="about-image-container">
            <img src={lujaImage} alt="Luja Maharjan" className="about-image" />
          </div> */}
        </div>
      </div>

      <hr className="section-divider" />

      {/* Education Section */}
      <div id="education" className="education">
        <h5 className="edu-heading">Education</h5>
        <div className="edu-item">
          <h5>Master in Architecture</h5>
          <p>2023 - Present | University of Idaho, Moscow, Idaho | GPA: 4.00</p>
        </div>
        <div className="edu-item">
          <h5>Bachelor’s in Architecture</h5>
          <p>2015 - 2021 | Pokhara University, Nepal Engineering College, Bhaktapur, Nepal | GPA: 3.78</p>
        </div>
        <div className="edu-item">
          <h5>High School</h5>
          <p>2013 - 2015 | G.E.M.S Institute of Higher Education, Nepal</p>
        </div>
      </div>

      <hr className="section-divider" />

      {/* Skills and Awards Section */}
      <div className="about-right">
        <div id="skills" className="skills">
          <h5 className="skills-heading">Skills</h5>
          <div className="skills-columns">
            <div className="skills-column">
              <ul>
                <li><FaAutoprefixer /> AutoCAD</li>
                <li><FaPencilRuler /> SketchUp</li>
                <li><FaDesktop /> Rhino</li>
                <li><FaFileCode /> Revit</li>
                <li><FaPaintBrush /> Lumion</li>
                <li><FaClipboard /> Enscape</li>
                <li><FaDesktop /> Vray</li>
              </ul>
            </div>

            <div className="skills-column">
              <ul>
                <li><FaPaintBrush /> Adobe Photoshop</li>
                <li><FaClipboard /> Adobe InDesign</li>
                <li><FaDesktop /> Adobe Illustrator</li>
                <li><FaClipboard /> MS Office</li>
                <li><FaUsers /> HEED Analysis</li>
                <li><FaClipboard /> Cove Analysis</li>
                <li><FaUsers /> Teamwork & Communication</li>
              </ul>
            </div>
          </div>
        </div>

        <hr className="section-divider" />

        {/* Awards Section */}
        <div id="awards" className="awards">
          <h5 className="awards-heading">Awards</h5>
          <ul>
            <li>Dean’s list recognition for outstanding undergraduate meritorious achievement | Pokhara University</li>
            <li>1st Runner in Asian Paints national design competition</li>
            <li>Honorable Mention in Asian Paints national design competition</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
