// Home.js
import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css"; // Import the CSS file for styling

const Home = () => {
  return (
    <div className="home-container">
      <h1>Fruit.Ai</h1>
      <h2>“Be Healthy!”</h2>
      <div className="button-container">
        <Link to="/chat">
          <button className="home-button chat">Chat</button>
        </Link>
        <Link to="/faqs">
          <button className="home-button faqs">FAQs</button>
        </Link>
        <Link to="/about">
          <button className="home-button about">About</button>
        </Link>
        <Link to="/translator">
          <button className="home-button translator">Translator</button>
        </Link>
        <Link to="/">
          <button className="home-button logout">Logout</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
