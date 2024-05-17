// src/components/MainPage.js
import React from 'react';
import './MainPage.css';
import food25 from '../assets/food25.PNG'; // Adjust the path as needed
import water25 from '../assets/water25.PNG'; // Adjust the path as needed


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
          <img src={food25} alt="Food Bowl" />
          <button onClick={handleDispenseFood}>Dispense Food</button>
        </div>
        <div className="item">
          <img src={water25} alt="Water Bowl" />
          <button onClick={handleDispenseWater}>Dispense Water</button>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
