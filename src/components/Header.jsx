import React from 'react';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo">
          <span className="logo-text">Luja Maharjan</span>
        </div>
        <div className="title">
          <span className="logo-text-center">Architect + Design</span>
        </div>
        <ul className="nav-list">
          <li><a href="/about">About</a></li>
          {/* <li><a href="#education">Education</a></li>
          <li><a href="#skills">Skills</a></li> */}
          <li><a href="/">Works</a></li>
          <li><a href="#awards">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
