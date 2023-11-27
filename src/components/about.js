// AboutUs.js

import React from 'react';
import './about.css'; // Create this CSS file for styling

const AboutUs = () => {
  return (
    <div className="about-container">
      <div className="about-section">
        <h2>Welcome to Our Sports Emporium</h2>
        <p className="intro-text">Discover a world of sports excellence...</p>
        <p>At our emporium, we aim to provide the best...</p>
        <p>Founded in [year], our passion for sports has...</p>
      </div>
      <hr className="divider" />
      <div className="quote-section">
        <p>“Sports can change lives. We believe in the power...</p>
        <p>“Our commitment to excellence drives us to...</p>
      </div>
      <hr className="divider" />
      <div className="explore-section">
        <h3>Explore Our Collection</h3>
        <p>Discover a wide range of sports equipment...</p>
        <p>Explore our collection and find the perfect...</p>
      </div>
    </div>
  );
};

export default AboutUs;
