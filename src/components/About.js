import React from "react";
import "../styles/About.css";
import BackButton from "./BackButton";
const About = () => {
  return (
    <div className="about-container">
      <div className="background-gradient"></div>
      <div className="content">
        <h1>Fruit.Ai</h1>
        <p>
          Whether you’re looking to discover new fruits, understand their
          nutritional values, or find the perfect fruit for your diet, our
          AI-driven chatbot is here to assist. We provide personalized fruit
          recommendations tailored to your health needs, making it easier for
          you to integrate the best fruits into your daily routine.
        </p>
        <BackButton className="about-button">ABOUT</BackButton>
      </div>
    </div>
  );
};

export default About;
