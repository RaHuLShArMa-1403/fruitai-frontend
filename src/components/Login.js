// Login.js
import React, { useState } from "react";
import "../styles/Login.css"; // Import the CSS file for styling

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://fruitai-backend.onrender.com/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Login failed");
      }

      const data = await response.json();

      // Assuming the token is in data.token
      localStorage.setItem("authToken", data.access_token);

      // Redirect to home page or any other page
      window.location.href = "/home";
    } catch (error) {
      setError("Invalid email or password. Please try again.");
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label>Email Address</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {error && <p className="error">{error}</p>}
        <button type="submit" className="login-button">
          Login
        </button>
      </form>
      <div className="social-login">
        <p>or connect with</p>
        <div className="social-icons">
          <span>🔵</span> {/* Replace with actual icons */}
          <span>📷</span>
          <span>📌</span>
          <span>🔗</span>
        </div>
      </div>
      <p>
        By signing in you are agreeing to our{" "}
        <button>Terms and privacy policy</button>
      </p>
      <p>
        <a href="/">Register</a>
      </p>
    </div>
  );
};

export default Login;
