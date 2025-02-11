import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  // Handle the AddInternship form
  const AddInternship = (e) => {
    e.preventDefault();
    navigate("/addinternship"); // After clicking the "AddInternship" button, navigate to the AddInternship form
  };

  // Handle the AddJob form
  const AddJob = (e) => {
    e.preventDefault();
    navigate("/addjob"); // After clicking the "AddJob" button, navigate to the AddJob form
  };

  const styles = {
    body: {
      fontFamily: "Arial, sans-serif",
      backgroundColor: "#f5f5f5",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      margin: 0,
      gap: "20px",
      flexWrap: "wrap",
    },
    card: {
      width: "300px",
      backgroundColor: "#fff",
      padding: "1rem",
      borderRadius: "10px",
      border: "1px solid rgba(255, 153, 0, 0.69)",
      overflow: "hidden",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
      position: "relative",
      cursor: "pointer",
    },
    cardHover: {
      transform: "translateY(-10px)",
      boxShadow: "0 15px 30px rgba(255, 94, 0, 0.3)",
    },
    img: {
      width: "100%",
      height: "auto",
    },
    cardContent: {
      padding: "20px",
    },
    title: {
      margin: "0 0 10px",
      fontSize: "18px",
      color: "#333",
    },
    text: {
      fontSize: "14px",
      color: "#777",
      marginBottom: "20px",
    },
    button: {
      display: "inline-block",
      padding: "10px 20px",
      backgroundColor: "#ff5e00",
      color: "#fff",
      textDecoration: "none",
      borderRadius: "20px",
      transition: "background-color 0.3s ease",
      cursor: "pointer",
    },
    buttonHover: {
      backgroundColor: "#e04e00",
    },
  };

  const [hoverIndex, setHoverIndex] = useState(null);

  const cards = [
    {
      img: "/addjob.jpg",
      title: "Add Jobs at KaVaavi",
      text: "In the modern business landscape, data is one of the most valuable assets...",
      buttonText: "Add",
      onClick: AddJob, // Added the onClick handler for the Add Job button
    },
    {
      img: "/addinternship.jpg",
      title: "Add Internship at KaVaavi",
      text: "In today’s fast-paced digital world, businesses need more than just a presence online...",
      buttonText: "Add",
      onClick: AddInternship, // Added the onClick handler for the Add Internship button
    },
    {
      img: "/Manage.jpg",
      title: "Manage Application",
      text: "Cloud computing provides scalable resources that drive innovation...",
      buttonText: "Manage",
      // You can add an onClick handler for this card if needed
    },
  ];

  return (
    <div style={styles.body}>
      {cards.map((card, index) => (
        <div
          key={index}
          style={{
            ...styles.card,
            ...(hoverIndex === index ? styles.cardHover : {}),
          }}
          onMouseEnter={() => setHoverIndex(index)}
          onMouseLeave={() => setHoverIndex(null)}
        >
          <img src={card.img} alt={card.title} style={styles.img} />
          <div style={styles.cardContent}>
            <h3 style={styles.title}>{card.title}</h3>
            <p style={styles.text}>{card.text}</p>
            <button
              style={styles.button}
              onClick={card.onClick} // This calls the appropriate handler
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = styles.buttonHover.backgroundColor)}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = styles.button.backgroundColor)}
            >
              {card.buttonText}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
