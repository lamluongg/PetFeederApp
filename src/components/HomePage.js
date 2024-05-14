import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <Link to="/food">Go to Food Page</Link>
      <br />
      <Link to="/water">Go to Water Page</Link>
    </div>
  );
};

export default HomePage;
