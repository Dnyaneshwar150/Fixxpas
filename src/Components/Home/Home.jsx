// src/home.js

import React from 'react';
import './Home.css'; // Import the CSS file

const Home = () => {
  const handleClick = () => {
    alert('Button Clicked!');
  };

  return (
    <div className="container">
      <h1 className="header">Welcome to My Home Page</h1>
      <p className="paragraph">This is a simple React component.</p>
      <button className="button" onClick={handleClick}>
        Click Me
      </button>
    </div>
  );
};

export default Home;
