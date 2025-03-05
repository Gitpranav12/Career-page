import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // Dummy Admin Credentials (Replace with API authentication)
  const ADMIN_CREDENTIALS = {
    email: "admin@example.com",
    password: "admin123",
  };

  // Handle Login
  const handleLogin = (e) => {
    e.preventDefault();

    if (email === ADMIN_CREDENTIALS.email && password === ADMIN_CREDENTIALS.password) {
      localStorage.setItem("isAdmin", "true"); // Store authentication state
      navigate("/dashboard"); // Redirect to Dashboard
    } else {
      alert("Invalid credentials! Try again."); // Show error message
    }
  };

  return (
    <div>
      
     


      <div style={{ display: "flex", height: "100vh" }}>
        {/* Left Branding Section */}
        <div style={{ flex: 1, backgroundColor: "#2d2d2d", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <h3 style={{ padding: "0.75rem", fontWeight: "800", fontSize: "80px", outline: "3px solid #ff5800", color: "#ff5800" }}>
            Ka Vaa Vi
          </h3>
        </div>

        {/* Right Login Form Section */}
        <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <form style={{ width: "400px" }} onSubmit={handleLogin}>
            <h3 style={{ textAlign: "center" }}>Admin Login</h3>
            <input
              type="email"
              name="email"
              placeholder="Username"
              style={inputStyle}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              style={inputStyle}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit" style={submitButtonStyle}>
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

// Styles
const inputStyle = {
  display: "block",
  width: "100%",
  marginBottom: "1rem",
  padding: "1.8rem 1.6rem",
  backgroundColor: "#fff",
  border: "1px solid #ff5800",
  borderRadius: "1rem",
  color: "rgb(78, 78, 78)",
  fontWeight: "600",
};

const submitButtonStyle = {
  display: "block",
  width: "114%",
  margin: "1.5rem 0",
  padding: "1.2rem",
  background: "#ff5800",
  border: "1px solid rgb(212, 212, 212)",
  borderRadius: "1rem",
  color: "rgb(247, 247, 247)",
  textTransform: "uppercase",
  fontWeight: "600",
  cursor: "pointer",
};


export default LoginPage;
