import React, { useState } from 'react';
import './SE_CompList.css';
import image from './image.jpeg'; // Adjust the path as necessary
import PPL from '../SE/PPL/PPL'; // Import the PPL component

const SE_CompList = () => {
  const [showPPL, setShowPPL] = useState(false); // State to manage whether to show PPL component

  const handleShowPPL = () => {
    setShowPPL(true); // Set showPPL state to true when the button is clicked
  };

  return (
    <div className="card-container">
      {showPPL ? (
        <PPL />
      ) : (
        <div className="card">
          <img src={image} alt="Property" />
          <div>
            <h2>Invest in Valby's sparkling new construction</h2>
            <h3>Type: Residential rental</h3>
            <p>
              Soon you can invest in Sid Harman's new attractive property, set in
              the heart of Athens.
            </p>
            <button onClick={handleShowPPL}>PPL</button> {/* Add onClick event to trigger handleShowPPL */}
          </div>
        </div>
      )}
    </div>
  );
};

export default SE_CompList;
