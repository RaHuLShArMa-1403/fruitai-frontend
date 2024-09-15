import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/BackButton.css"; // Optional, for custom styles

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button className="back-button" onClick={() => navigate("/home")}>
      Back to Home
    </button>
  );
};

export default BackButton;
