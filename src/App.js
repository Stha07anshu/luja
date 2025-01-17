import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Hero from './components/Hero';
import './index.css'; // or wherever your global CSS file is located
import ProductDetail from './components/ProjectDetail';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="main-wrapper">
          <Header />

          {/* Define the Routes for Home and Projects */}
          <Routes>
            {/* Home Page Route */}
            <Route path="/" element={<About />} />
            
            {/* Projects Page Route */}
            <Route path="/projects" element={<Projects />} />
            <Route path="/product/:id" element={<ProductDetail />} /> {/* Dynamic route for product detail */}
            </Routes>

          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
