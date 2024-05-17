// src/components/WaterPage.js
import React from 'react';
import TopBar from './TopBar';
import './WaterPage.css';

const FoodPage = () => {
  return (
    <div className="water-container">
      <TopBar />
      <div className="image-section">
        <img src="rabbitWater.jpg" alt="Water background" className="header-image" />
        <div className="water-text">
          <h1>Water Control</h1>
          <p>Manage your pet's water intake</p>
        </div>
      </div>
      <div className="content-section">
        <div className="dispense-section">
          <div className="dispense-item">
            <img src="clock.jpg" alt="Time of Dispensal" className="dispense-icon" />
            <div className="dispense-text">
              <h2>Time of Dispensal</h2>
              <input type="text" placeholder="Enter time..." className="dispense-input" />
            </div>
          </div>
          <div className="dispense-item">
            <img src="foodScale.jpg" alt="Amount of Dispensal" className="dispense-icon" />
            <div className="dispense-text">
              <h2>Amount of Dispensal</h2>
              <input type="number" placeholder="Enter amount..." className="dispense-input" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodPage;
