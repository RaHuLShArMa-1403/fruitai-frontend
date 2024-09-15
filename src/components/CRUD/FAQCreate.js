import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const FAQCreate = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newFAQ = {
      id: Date.now(), // Generate a unique id for the new FAQ
      question,
      answer,
    };

    fetch("https://fruitai-backend.onrender.com/faqs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newFAQ),
    })
      .then((response) => {
        if (!response.ok) {
          return response.json().then((data) => {
            throw new Error(data.detail || "Unknown error occurred");
          });
        }
        return response.json();
      })
      .then(() => {
        navigate("/faqs");
      })
      .catch((error) => console.error("Error creating FAQ:", error));
  };

  return (
    <div className="create-faq-container">
      <h2>Create New FAQ</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label>Question</label>
          <input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label>Answer</label>
          <input
            type="text"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            required
          />
        </div>
        <button type="submit">Create FAQ</button>
      </form>
    </div>
  );
};

export default FAQCreate;
