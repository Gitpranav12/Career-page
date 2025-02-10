import React from "react";
import { useNavigate } from "react-router-dom"; // For navigation

const Home = () => {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <div style={styles.overlay}>
        <h1 style={styles.heading}>Welcome to Kavaavi Careers</h1>
        <p style={styles.text}>
          Explore exciting career opportunities and internships with us.
        </p>
        <button style={styles.button} onClick={() => navigate("/careers")}>
          Explore Careers
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    backgroundImage: 'url("https://source.unsplash.com/1600x900/?corporate,office")',
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    padding: "30px",
    borderRadius: "10px",
    textAlign: "center",
    color: "white",
    width: "80%",
    maxWidth: "600px",
  },
  heading: {
    fontSize: "36px",
    marginBottom: "15px",
  },
  text: {
    fontSize: "18px",
    marginBottom: "20px",
  },
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    color: "#fff",
    backgroundColor: "#007bff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default Home;
