// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import FoodPage from './components/FoodPage';
import WaterPage from './components/WaterPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/food" element={<FoodPage />} />
        <Route path="/water" element={<WaterPage />} />
      </Routes>
    </Router>
  );
};

export default App;
