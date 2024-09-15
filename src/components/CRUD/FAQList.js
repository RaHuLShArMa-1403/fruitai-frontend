// src/components/FAQ/FAQList.js
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BackButton from "../BackButton";
import "./FAQ.css"; // Import the CSS file for styling
const FAQList = () => {
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    fetch("https://fruitai-backend.onrender.com/faqs")
      .then((response) => response.json())
      .then((data) => setFaqs(data))
      .catch((error) => console.error("Error fetching FAQs:", error));
  }, []);

  const handleDelete = (id) => {
    fetch(`https://fruitai-backend.onrender.com/faqs/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then(() => {
        setFaqs(faqs.filter((faq) => faq.id !== id));
      })
      .catch((error) => console.error("Error deleting FAQ:", error));
  };

  return (
    <div className="faq-list-container">
      <h2>FAQ List</h2>
      <Link to="/faqs/create" className="btn-create">
        Create New FAQ
      </Link>
      <ul className="faq-list">
        {faqs.map((faq) => (
          <li key={faq.id} className="faq-item">
            <h3>{faq.question}</h3>
            <p>{faq.answer}</p>
            <div className="faq-actions">
              <Link to={`/faqs/edit/${faq.id}`} className="btn-edit">
                Edit
              </Link>
              <button
                onClick={() => handleDelete(faq.id)}
                className="btn-delete"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
      <BackButton />
    </div>
  );
};

export default FAQList;
