import React from 'react';
import { useNavigate } from 'react-router-dom';
import './TE_CompList.css';
import image from './image1.jpeg'; // Adjust the path as necessary

const TE_CompList = () => {
  const navigate = useNavigate(); // Hook to navigate programmatically

  // Array of card data
  const cardsData = [
    {
      id: 1,
      title: "Database Management Systems ",
      type: "Residential rental",
      description: "Soon you can invest in Sid Harman's new attractive property, set in the heart of Athens.",
    },
    {
      id: 2,
      title: "Theory of Computation",
      type: "Type of property",
      description: "Description of the second property.",
    },
    {
      id: 3,
      title: "Systems Programming and Operating System",
      type: "Type of property",
      description: "Description of the third property.",
    },
    {
      id: 4,
      title: "Computer Networks and Security ",
      type: "Type of property",
      description: "Description of the fourth property.",
    },
    {
      id: 5,
      title: " Internet of Things and Embedded Systems",
      type: "Type of property",
      description: "Description of the fifth property.",
    },
    {
      id: 6,
      title: "Data Science and Big Data Analytics",
      type: "Type of property",
      description: "Description of the fifth property.",
    },
    {
      id: 7,
      title: "Web Technology",
      type: "Type of property",
      description: "Description of the fifth property.",
    },
    {
      id: 8,
      title: "Artificial Intelligence",
      type: "Type of property",
      description: "Description of the fifth property.",
    },
    {
      id: 9,
      title: "Information Security",
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

export default TE_CompList;
