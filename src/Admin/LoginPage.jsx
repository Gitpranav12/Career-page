import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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
      localStorage.setItem("isAdmin", "true");
      navigate("/dashboard");
    } else {
      alert("Invalid credentials! Try again.");
    }
  };

  return (
    <div>
      <style>
        {`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }

          .container {
            display: flex;
            height: 100vh;
            flex-direction: column;
          }

          .branding {
            flex: 1;
            background-color: #2d2d2d;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .brand-text {
            padding: 0.75rem;
            font-weight: 800;
            font-size: 60px;
            outline: 3px solid #ff5800;
            color: #ff5800;
            text-align: center;
          }

          .login-container {
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 20px;
          }

          .login-form {
            width: 90%;
            max-width: 400px;
          }

          .input-field {
            display: block;
            width: 100%;
            margin-bottom: 1rem;
            padding: 1.2rem;
            background-color: #fff;
            border: 1px solid #ff5800;
            border-radius: 1rem;
            color: rgb(78, 78, 78);
            font-weight: 600;
          }

          .submit-button {
            display: block;
            width: 100%;
            margin: 1.5rem 0;
            padding: 1rem;
            background: #ff5800;
            border: none;
            border-radius: 1rem;
            color: white;
            text-transform: uppercase;
            font-weight: 600;
            cursor: pointer;
          }

          .submit-button:hover {
            background: #e04e00;
          }

          /* Responsive Design */
          @media (min-width: 768px) {
            .container {
              flex-direction: row;
            }

            .brand-text {
              font-size: 80px;
            }
          }

          @media (max-width: 480px) {
            .brand-text {
              font-size: 40px;
              outline: none;
            }
          }
        `}
      </style>

      <div className="container">
        {/* Left Branding Section */}
        <div className="branding">
          <h3 className="brand-text">Ka Vaa Vi</h3>
        </div>

        {/* Right Login Form Section */}
        <div className="login-container">
          <form className="login-form" onSubmit={handleLogin}>
            <h3 style={{ textAlign: "center",marginBottom: "1.5rem" }}>Admin Login</h3>
            <input
              type="email"
              name="email"
              placeholder="Username"
              className="input-field"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="input-field"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit" className="submit-button">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
