import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SE_CompList.css';
import image from './image.jpeg'; // Adjust the path as necessary

const SE_CompList = () => {
  const navigate = useNavigate(); // Hook to navigate programmatically

  // Array of card data
  const cardsData = [
    {
      id: 1,
      title: "Discrete Mathematics",
      type: "Residential rental",
      description: "Soon you can invest in Sid Harman's new attractive property, set in the heart of Athens.",
    },
    {
      id: 2,
      title: "Fundamentals of Data Structures",
      type: "Type of property",
      description: "Description of the second property.",
    },
    {
      id: 3,
      title: "Object Oriented Programming",
      type: "Type of property",
      description: "Description of the third property.",
    },
    {
      id: 4,
      title: "Computer Graphics",
      type: "Type of property",
      description: "Description of the fourth property.",
    },
    {
      id: 5,
      title: "Digital Electronics & Design",
      type: "Type of property",
      description: "Description of the fifth property.",
    },
    {
      id: 6,
      title: "Engineering Mathematics 3",
      type: "Type of property",
      description: "Description of the fifth property.",
    },
    {
      id: 7,
      title: "Data Structures & Algorithms",
      type: "Type of property",
      description: "Description of the fifth property.",
    },
    {
      id: 8,
      title: "Software Engineering",
      type: "Type of property",
      description: "Description of the fifth property.",
    },
    {
      id: 9,
      title: "MicroProcessor",
      type: "Type of property",
      description: "Description of the fifth property.",
    },
    {
      id: 10,
      title: "Principal of Programming Language",
      type: "Type of property",
      description: "Description of the fifth property.",
    },
  ];

  // Function to navigate to PPL component
  const handleShowPPL = (title) => {
    navigate(`/questions/${title.replace(/\s+/g, '-').toLowerCase()}`); // Navigate to the Questions component with the subject name
  };

  return (
    <div className="card-container">
      {cardsData.map(card => (
        <div className="card" key={card.id}>
          <img src={image} alt="Property" />
          <div>
            <h2>{card.title}</h2>
            <h3>Type: {card.type}</h3>
            <p>{card.description}</p>
            <button onClick={() => handleShowPPL(card.title)}>Know More</button> {/* Add onClick event to trigger handleShowPPL */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SE_CompList;
