// src/components/TopBar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './TopBar.css';

const TopBar = () => {
  return (
    <div className="top-bar">
      <Link to="/">Home</Link>
      <Link to="/food">Food Control Page</Link>
      <Link to="/water">Water Control Page</Link>
    </div>
  );
};

export default TopBar;
