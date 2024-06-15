import React from 'react';
import './ComputerGraphics.css';

const ComputerGraphics = () => {
  return (
    <div className="container">
      <h1>Computer Graphics Questions</h1>
      <div className="question">
        <h2>1. What are the types of projection and write in brief about each type?</h2>
        <div className="answer">
          <h3>Answer:</h3>
          <ol>
            <li>
              <strong>Orthographic Projection</strong>
              <ul>
                <li>This projection method involves projecting 3D objects onto a 2D plane along parallel lines. It maintains the relative proportions of the objects.</li>
              </ul>
            </li>
            <li>
              <strong>Perspective Projection</strong>
              <ul>
                <li>This method projects 3D objects onto a 2D plane along lines that converge at a point (the perspective point), simulating how objects appear smaller as they get further away.</li>
              </ul>
            </li>
            <li>
              <strong>Oblique Projection</strong>
              <ul>
                <li>Oblique projection involves projecting images where the projectors are not perpendicular to the projection plane. It provides a clearer view of one face of the object.</li>
              </ul>
            </li>
            <li>
              <strong>Axonometric Projection</strong>
              <ul>
                <li>This method includes isometric, dimetric, and trimetric projections, where the object's axes are scaled unequally but still maintain the relations of the angles.</li>
              </ul>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default ComputerGraphics;
