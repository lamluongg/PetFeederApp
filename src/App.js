import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ConnectionPage from './components/ConnectionPage';
import HomePage from './components/HomePage';
import FoodPage from './components/FoodPage';
import WaterPage from './components/WaterPage';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<ConnectionPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/food" element={<FoodPage />} />
          <Route path="/water" element={<WaterPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
