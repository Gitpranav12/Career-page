import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'; // Add this import

const InternshipCard = () => {
  const [activeModal, setActiveModal] = useState(null);
  const navigate = useNavigate(); 

  const openModal = (id) => {
    setActiveModal(id);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  const handleApplyClick = () => {
    navigate("/apply"); // Navigate to the application form
  };

  const cardData = [
    {
      id: "modal1",
      title: "Web Development",
      company: "Cluster Computing Company",
      details: "\ud83d\udccd Remote | \u23f3 6 Months | \ud83d\udcb0 \u20b910,000/month",
      responsibilities:
        "Build and maintain websites, optimize web performance, and collaborate with design and backend teams.",
      skills: "HTML, CSS, JavaScript, React.js",
      openings: 3,
    },
    {
      id: "modal2",
      title: "UI/UX Design",
      company: "Creative Studio",
      details: "\ud83d\udccd Bangalore | \u23f3 3 Months | \ud83d\udcb0 \u20b98,000/month",
      responsibilities:
        "Design user interfaces, conduct user research, and create wireframes and prototypes.",
      skills: "Figma, Adobe XD, User Research",
      openings: 2,
    },
    // Add more card data here...
  ];

  return (
    <div
      style={{
        fontFamily: "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif",
        margin: 0,
        padding: 0,
        minHeight: "100vh",
        background: "linear-gradient(to bottom right, #f2d8d8, #cce7eb)",
      }}
    >
      <h1 style={{ textAlign: "center", margin: "60px auto" }}>Internship Opportunity</h1>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px",
          padding: "20px",
        }}
      >
        {cardData.map((card) => (
          <div
            key={card.id}
            style={{
              backgroundColor: "#f8f9fa",
              border: "1px solid #ddd",
              borderRadius: "8px",
              padding: "20px",
              textAlign: "center",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              width: "30%",
              cursor: "pointer",
              transition: "transform 0.2s",
            }}
            onClick={() => openModal(card.id)}
          >
            <h3 style={{ margin: 0, color: "#333" }}>{card.title}</h3>
            <p style={{ color: "#555", fontSize: "0.9em", margin: "5px 0" }}>{card.company}</p>
            <p style={{ color: "#555", fontSize: "0.9em", margin: "5px 0" }}>{card.details}</p>
          </div>
        ))}
      </div>

      {cardData.map((modal) => (
        <div
          key={modal.id}
          style={{
            display: activeModal === modal.id ? "flex" : "none",
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
        >
          <div
            style={{
              backgroundColor: "#fff",
              padding: "30px",
              borderRadius: "8px",
              textAlign: "left",
              width: "50%",
              maxWidth: "800px",
              position: "relative",
            }}
          >
            <h1>{modal.title}</h1>
            <h2>Key Responsibilities</h2>
            <p>{modal.responsibilities}</p>
            <h2>Skills</h2>
            <p>{modal.skills}</p>
            <h2>Number of Openings</h2>
            <p>{modal.openings}</p>


            <button
              onClick={handleApplyClick} // Navigate to the application form
              style={{
                backgroundColor: "#ff7f00",
                color: "#fff",
                border: "none",
                padding: "10px 20px",
                borderRadius: "5px",
                marginRight: "10px",
                cursor: "pointer",
              }}
            >
              Apply
            </button>

            <button
              onClick={closeModal}
              style={{
                backgroundColor: "#ff7f00",
                color: "#fff",
                border: "none",
                padding: "10px 20px",
                borderRadius: "5px",
               
                cursor: "pointer",
              }}
            >
              Close
            </button>





          </div>
        </div>
      ))}
    </div>
  );
};

export default InternshipCard;