// src/components/MainPage.js
import React from 'react';
import './MainPage.css';
import emptyBowl from '../assets/25.PNG'; // Adjust the path as needed

const MainPage = () => {
  const handleDispenseFood = () => {
    alert('Dispensing food...');
  };

  const handleDispenseWater = () => {
    alert('Dispensing water...');
  };

  return (
    <div className="main-page">
      <div className="container">
        <div className="item">
          <img src={emptyBowl} alt="Food Bowl" />
          <button onClick={handleDispenseFood}>Dispense Food</button>
        </div>
        <div className="item">
          <img src={emptyBowl} alt="Water Bowl" />
          <button onClick={handleDispenseWater}>Dispense Water</button>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
