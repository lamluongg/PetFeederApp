import React from 'react';
import './MainPage.css';
import food25 from '../assets/food25.PNG'; // Adjust the path as needed
import water25 from '../assets/water25.PNG'; // Adjust the path as needed

const MainPage = () => {
  const handleDispenseFood = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/dispense-food', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const result = await response.json();
      alert(result.message);
    } catch (error) {
      console.error('Error dispensing food:', error);
      alert('Failed to dispense food');
    }
  };

  const handleDispenseWater = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/dispense-water', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const result = await response.json();
      alert(result.message);
    } catch (error) {
      console.error('Error dispensing water:', error);
      alert('Failed to dispense water');
    }
  };

  return (
    <div className="main-page">
      <div className="container">
        <div className="item">
          <img src={food25} alt="Food Bowl" onClick={handleDispenseFood} className="hoverable" />
        </div>
        <div className="item">
          <img src={water25} alt="Water Bowl" onClick={handleDispenseWater} className="hoverable" />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
