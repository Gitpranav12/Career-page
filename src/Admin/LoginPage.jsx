import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for programmatic navigation

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const navigate = useNavigate(); // useNavigate hook to navigate programmatically

  // Handle the login button click
  const handleLogin = (e) => {
    e.preventDefault(); // Prevent form submission (for now, you can add validation logic here)
    
    // After clicking the "Login" button, navigate to the Home page
    navigate("/dashboard");
  };

  const styles = {
    wrapper: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gridTemplateAreas: `
        "centerLeft centerRight"
      `,
      height: "100vh",
    },
    brand: {
      gridArea: "centerLeft",
      backgroundColor: "#2d2d2d",
      animation: "colorAnimate 30s infinite",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    brandingText: {
      padding: "0.75rem",
      fontWeight: "800",
      fontSize: "80px",
      outline: "3px solid #ff5800",
      color: "#ff5800",
    },
    login: {
      gridArea: "centerRight",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    form: {
      width: "400px",
      margin: "0 3rem",
    },
    heading: {
      textAlign: "center",
    },
    input: {
      display: "block",
      width: "100%",
      marginBottom: "1rem",
      padding: "1.8rem 1.6rem",
      backgroundColor: "#fff",
      border: "1px solid #ff5800",
      borderRadius: "1rem",
      color: "rgb(78, 78, 78)",
      fontWeight: "600",
    },
    checkboxContainer: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    checkboxLabel: {
      fontSize: "16px",
      paddingLeft: "30px",
      position: "relative",
      display: "inline-block",
      cursor: "pointer",
    },
    checkboxIndicator: {
      position: "absolute",
      top: "2px",
      left: "0",
      height: "20px",
      width: "20px",
      background: "#e6e6e6",
      borderRadius: "3px",
    },
    checkbox: {
      display: "none",
    },
    checkboxChecked: {
      background: "#2aa1c0",
    },
    forgot: {
      color: "rgb(22, 185, 185)",
    },
    submitButton: {
      display: "block",
      width: "100%",
      margin: "1.5rem 0",
      padding: "1.2rem",
      background: "#ff5800",
      border: "1px solid rgb(212, 212, 212)",
      borderRadius: "1rem",
      color: "rgb(247, 247, 247)",
      textTransform: "uppercase",
      fontWeight: "600",
    },
    socialLinks: {
      display: "flex",
      justifyContent: "center",
      gap: "1rem",
      fontSize: "2rem",
    },
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.brand}>
        <h3 style={styles.brandingText}>
          <div>
            <span title="Marathi meaning for Ka">Ka </span>
            <span>Vaa </span>
            <span>Vi</span>
          </div>
        </h3>
      </div>
      <div style={styles.login}>
        <form style={styles.form} onSubmit={handleLogin}> {/* Added onSubmit to handle login */}
          <h3 style={styles.heading}>Admin Login</h3>
          <input
            type="email"
            name="email"
            placeholder="Email"
            style={styles.input}
            value={email} // Bind value to state
            onChange={(e) => setEmail(e.target.value)} // Handle input change
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            style={styles.input}
            value={password} // Bind value to state
            onChange={(e) => setPassword(e.target.value)} // Handle input change
            required
          />
          <div style={styles.checkboxContainer}>
            <label style={styles.checkboxLabel}>
              Remember me
              <input type="checkbox" style={styles.checkbox} />
              <div style={styles.checkboxIndicator}></div>
            </label>
            <div style={styles.forgot}>
              <a href="/" style={{ color: styles.forgot.color }}>
                Forgot Password?
              </a>
            </div>
          </div>
          <button type="submit" style={styles.submitButton}>
            Login
          </button>
          <div style={styles.socialLinks}>
            <a href="/">
              <i className="fa fa-facebook-square" aria-hidden="true"></i>
            </a>
            <a href="/">
              <i className="fa fa-twitter-square" aria-hidden="true"></i>
            </a>
            <a href="/">
              <i className="fa fa-linkedin-square" aria-hidden="true"></i>
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
