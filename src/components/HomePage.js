// src/components/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import TopBar from './TopBar';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-container">
      <TopBar />
      <div className="image-section">
        <img src="/bruh2.jpg" alt="Dog running on beach" className="header-image" />
        <div className="welcome-text">
          <h1>Welcome!</h1>
          <p>Bruin Engineers Pet Feeder</p>
        </div>
      </div>
      <div className="content-section">
        <div className="food-section">
          <img src="/food-image.png" alt="Food" className="icon" />
          <h2>Food</h2>
          <Link to="/food">
            <button className="control-button">Food Control Page</button>
          </Link>
        </div>
        <div className="water-section">
          <img src="/water-image.png" alt="Water" className="icon" />
          <h2>Water</h2>
          <Link to="/water">
            <button className="control-button">Water Control Page</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
