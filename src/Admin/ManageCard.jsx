import React from "react";
import { useNavigate } from "react-router-dom";
import AdminNavbar from "../Components/AdminNavbar";
import { FaBriefcase, FaGraduationCap, FaFileAlt, FaClipboardList } from "react-icons/fa"; // Icons

const ManageCard = () => {
  const navigate = useNavigate();

  const cards = [
    { title: "List Internship", path: "/internshipListAdmin", icon: <FaGraduationCap /> },
    { title: "List Job", path: "/JobListAdmin", icon: <FaBriefcase /> },
    { title: "Internship Applications", path: "/ShowInternshipApplicant", icon: <FaClipboardList /> },
    { title: "Job Applications", path: "/ShowJobApplicant", icon: <FaFileAlt /> }
  ];

  return (
    <>
      <style>{`
        body {
          background: #f4f4f9;
        }
        .card-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 25px;
          padding: 50px;
          min-height: 90vh;
          align-items: center;
          animation: fadeIn 1s ease-in-out;
        }
        /* Fade-in animation */
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .card {
          width: 320px; /* Increased size */
          height: 230px; /* Increased size */
          background: rgba(255, 88, 0, 0.2);
          border-radius: 20px;
          backdrop-filter: blur(10px);
          box-shadow: 0 5px 12px rgba(0, 0, 0, 0.15);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease-in-out;
          cursor: pointer;
          border: 1px solid rgba(255, 88, 0, 0.3);
          position: relative;
          animation: fadeIn 0.8s ease-in-out;
        }
        /* Bounce animation on hover */
        .card:hover {
          transform: scale(1.05) translateY(-5px);
          box-shadow: 0 10px 25px rgba(255, 88, 0, 0.6);
        }
        .card .icon {
          font-size: 50px; /* Bigger icon */
          color: #ff5800;
          margin-bottom: 10px;
        }
        .card .title {
          font-size: 20px;
          font-weight: bold;
          color: #1b233d;
          text-align: center;
        }
      `}</style>

      <AdminNavbar />
      <div className="card-container">
        {cards.map((card, index) => (
          <div key={index} className="card" onClick={() => navigate(card.path)}>
            <div className="icon">{card.icon}</div>
            <div className="title">{card.title}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ManageCard;
