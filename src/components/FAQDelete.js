import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../components/CRUD/FAQ.css";

const FAQDelete = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleDelete = () => {
    fetch(`https://fruitai-backend.onrender.com/faqs/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          navigate("/faqs");
        } else {
          console.error("Error deleting FAQ:", response.statusText);
        }
      })
      .catch((error) => console.error("Error deleting FAQ:", error));
  };

  const handleCancel = () => {
    navigate("/faqs");
  };

  return (
    <div className="delete-confirmation-container">
      <h2>Are you sure you want to delete this FAQ?</h2>
      <button onClick={handleDelete} className="delete-button">
        Delete
      </button>
      <button onClick={handleCancel} className="cancel-button">
        Cancel
      </button>
    </div>
  );
};

export default FAQDelete;
