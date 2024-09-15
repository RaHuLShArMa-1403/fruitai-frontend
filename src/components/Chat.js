// Chat.js
import React, { useState } from "react";
import "../styles/Chat.css";
import BackButton from "./BackButton";
const fruits = [
  { id: 1, name: "Orange", price: 2, description: "A sweet citrus fruit." },
  {
    id: 2,
    name: "Cucumber",
    price: 1,
    description: "A refreshing green vegetable.",
  },
  {
    id: 3,
    name: "Tangerine",
    price: 1.5,
    description: "A small citrus fruit.",
  },
];

const Chat = () => {
  const [selectedFruit, setSelectedFruit] = useState(null);

  const handleFruitClick = (fruit) => {
    setSelectedFruit(fruit);
  };

  const handleBack = () => {
    setSelectedFruit(null);
  };

  return (
    <div className="chat-container">
      <h2>Chat with FruitBot</h2>
      {selectedFruit ? (
        <div className="fruit-detail-card">
          <button className="back-button" onClick={handleBack}>
            &larr; Back
          </button>
          <h3>{selectedFruit.name}</h3>
          <p>{selectedFruit.description}</p>
          <p>Price: ${selectedFruit.price}</p>
        </div>
      ) : (
        <div className="fruit-list">
          {fruits.map((fruit) => (
            <div
              key={fruit.id}
              className="fruit-card"
              onClick={() => handleFruitClick(fruit)}
            >
              <h3>{fruit.name}</h3>
              <p>Price: ${fruit.price}</p>
            </div>
          ))}
        </div>
      )}
      <BackButton />
    </div>
  );
};

export default Chat;
