import React, { useState, useEffect } from 'react';
import './MainPage.css';
import food25 from '../assets/food25.PNG'; // Adjust the path as needed
import water0 from '../assets/water0.PNG'; // Path to the 0% water level image
import water25 from '../assets/water25.PNG'; // Path to the 25% water level image
import water50 from '../assets/water50.PNG'; // Path to the 50% water level image
import water100 from '../assets/water100.PNG'; // Path to the 100% water level image

const MainPage = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [waterLevel, setWaterLevel] = useState(0);

  const toggleDropdown = () => setShowDropdown(!showDropdown);

  const fetchWaterLevel = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/water-level');
      const result = await response.json();
      setWaterLevel(result.waterLevel);
    } catch (error) {
      console.error('Error fetching water level:', error);
      alert('Failed to fetch water level');
    }
  };

  useEffect(() => {
    fetchWaterLevel();
  }, []);

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
      fetchWaterLevel(); // Refresh water level after dispensing water
    } catch (error) {
      console.error('Error dispensing water:', error);
      alert('Failed to dispense water');
    }
  };

  const getWaterImage = () => {
    if (waterLevel >= 3) return water100;
    if (waterLevel === 2) return water50;
    if (waterLevel === 1) return water25;
    return water0;
  };

  return (
    <div className="main-page">
      <button className="help-button" onClick={toggleDropdown}>
        ?
      </button>
      <div className={showDropdown ? "dropdown-menu active" : "dropdown-menu"}>
        <h4>Water Level Indicators</h4>
        <div className="grid-container">
          <div className="grid-item">
            <img src={water0} alt="0% Full" />
            <div className="grid-text">0% Full</div>
          </div>
          <div className="grid-item">
            <img src={water25} alt="25% Full" />
            <div className="grid-text">25% Full</div>
          </div>
          <div className="grid-item">
            <img src={water50} alt="50% Full" />
            <div className="grid-text">50% Full</div>
          </div>
          <div className="grid-item">
            <img src={water100} alt="100% Full" />
            <div className="grid-text">100% Full</div>
          </div>
        </div>
        <h4>Click on Bowl to Dispense! Yay!</h4>
      </div>
      <div className="container">
        <div className="item">
          <img src={food25} alt="Food Bowl" onClick={handleDispenseFood} className="hoverable" />
        </div>
        <div className="item">
          <img src={getWaterImage()} alt="Water Bowl" onClick={handleDispenseWater} onMouseEnter={fetchWaterLevel} className="hoverable" />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
