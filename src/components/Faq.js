import React, { useEffect, useState } from "react";
import "../styles/Faq.css";

const Faq = () => {
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        const response = await fetch(
          "https://fruitai-backend.onrender.com/faqs"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch FAQs");
        }
        const data = await response.json();
        setFaqs(data); // Directly set the array
      } catch (error) {
        console.error("Error fetching FAQs:", error);
        setFaqs([]); // Ensure faqs is always an array
      }
    };

    fetchFaqs();
  }, []);

  return (
    <div className="faq-container">
      <h2>FAQ Section</h2>
      {faqs.length > 0 ? (
        faqs.map((faq) => (
          <div key={faq.id} className="faq-item">
            <h3>{faq.question}</h3>
            <p>{faq.answer}</p>
          </div>
        ))
      ) : (
        <p>No FAQs available</p>
      )}
    </div>
  );
};

export default Faq;
