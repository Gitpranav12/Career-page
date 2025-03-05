import React, { useState } from "react";
// import Navbar from "../Components/navbar"; //
import { useNavigate } from "react-router-dom";
import AdminNavbar from "../Components/AdminNavbar"; 

const Dashboard = () => {
  const navigate = useNavigate();
  const [hoverIndex, setHoverIndex] = useState(null);

  // Handle the Add Internship button click
  const handleAddInternship = (e) => {
    e.preventDefault();
    navigate("/addinternship");
  };

  // Handle the Add Job button click
  const handleAddJob = (e) => {
    e.preventDefault();
    navigate("/addjob");
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
      border: "none",
    },
    buttonHover: {
      backgroundColor: "#e04e00",
    },
  };

  const cards = [
    {
      img: "/addjob.jpg",
      title: "Add Jobs at KaVaavi",
      text: "",
      buttonText: "Add",
      onClick: handleAddJob,
    },
    {
      img: "/addinternship.jpg",
      title: "Add Internship at KaVaavi",
      text: "",
      buttonText: "Add",
      onClick: handleAddInternship,
    },
    {
      img: "/Manage.jpg",
      title: "Manage Applications",
      text: "",
      buttonText: "Manage",
      onClick: () => navigate("/managecard"),
    },
  ];

  return (
    <>
      {/* Navbar is now inside the return statement */}
      <AdminNavbar />
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
                onClick={card.onClick}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = styles.buttonHover.backgroundColor)}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = styles.button.backgroundColor)}
              >
                {card.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Dashboard;
