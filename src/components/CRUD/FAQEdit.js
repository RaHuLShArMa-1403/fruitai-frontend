import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./FAQ.css"; // Add your CSS file for styling

const FAQEdit = () => {
  const { id } = useParams(); // Get the FAQ ID from the URL
  const navigate = useNavigate();

  const [faq, setFaq] = useState({ question: "", answer: "" });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch the FAQ data
    axios
      .get(`https://fruitai-backend.onrender.com/faqs/${id}`)
      .then((response) => {
        setFaq(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("There was an error fetching the FAQ!", error);
      });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFaq({ ...faq, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`https://fruitai-backend.onrender.com/faqs/${id}`, faq)
      .then((response) => {
        navigate("/faqs");
      })
      .catch((error) => {
        console.error("There was an error updating the FAQ!", error);
      });
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="faq-edit-container">
      <h2>Edit FAQ</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label>Question</label>
          <input
            type="text"
            name="question"
            value={faq.question}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-group">
          <label>Answer</label>
          <textarea
            name="answer"
            value={faq.answer}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="save-button">
          Save
        </button>
      </form>
    </div>
  );
};

export default FAQEdit;
