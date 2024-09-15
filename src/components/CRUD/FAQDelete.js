import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./FAQ.css";

const FAQDelete = ({ id, onClose }) => {
  const navigate = useNavigate();

  const handleDelete = () => {
    axios
      .delete(`https://fruitai-backend.onrender.com/faqs/${id}`)
      .then((response) => {
        navigate("/faqs");
      })
      .catch((error) => {
        console.error("There was an error deleting the FAQ!", error);
      });
  };

  return (
    <div className="faq-delete-container">
      <h2>Confirm Delete</h2>
      <p>Are you sure you want to delete this FAQ?</p>
      <button onClick={handleDelete} className="delete-button">
        Delete
      </button>
      <button onClick={onClose} className="cancel-button">
        Cancel
      </button>
    </div>
  );
};

export default FAQDelete;
