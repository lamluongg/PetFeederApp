import React from 'react';
import { useNavigate } from 'react-router-dom';

const ConnectionPage = () => {
  const navigate = useNavigate();

  const handleConnect = () => {

    navigate('/home');
  };

  return (
    <div>
      <h1>Thomas is sexy</h1>
      <button onClick={handleConnect}>Home Page</button>
    </div>
  );
};

export default ConnectionPage;
