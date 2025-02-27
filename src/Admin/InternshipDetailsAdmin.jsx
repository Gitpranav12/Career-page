import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const InternshipDetailsAdmin = () => {
  const { id } = useParams(); 
  const [internship, setInternship] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:8082/api/getInternship/${id}`)
      .then(response => {
        setInternship(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching internship details:", error);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Loading internship details...</p>;
  if (!internship) return <p>No internship details found.</p>;

  return (
    <div className="internship-details-container">
      <h1>Internship Description</h1>
      <div className="internship-card">
      <div className="internship-info"><strong>Internship ID:</strong> {internship.internship_id}</div>
      <div className="internship-info"><strong>Title:</strong> {internship.title}</div>
      <div className="internship-info"><strong>Requirement:</strong> {internship.requirement}</div>
      <div className="internship-info"><strong>Description:</strong> {internship.description}</div>
      <div className="internship-info"><strong>Location:</strong> {internship.location}</div>
      <div className="internship-info"><strong>Duration:</strong> {internship.duration}</div>
      <div className="internship-info"><strong>Stipend:</strong> {internship.stipend}</div>
      <div className="internship-info"><strong>Posted Date:</strong> {internship.posted_Date}</div>
      <div className="internship-info"><strong>Application Deadline:</strong> {internship.application_Deadline}</div>
      <div className="button-container">
      <button className="apply-button" onClick={() => navigate("/intershiplistadmin")}> 
        Close
    </button>

</div>

      </div>

     
      <style>{`
        .internship-details-container {
          max-width: 600px;
          margin: 30px auto;
          padding: 20px;
          font-family: Arial, sans-serif;
        }

        h1 {
          text-align: center;
          font-size: 28px;
          color: #333;
          font-weight: bold;
        }

        .internship-card {
          background: #fff;
          padding: 20px;
          border-radius: 10px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        .internship-info {
          font-size: 18px;
          color: #444;
          margin-bottom: 10px;
        }

        .internship-info strong {
          color: #000;
          font-weight: bold;
        }

        /* Center the button */
        .button-container {
          display: flex;
          justify-content: center;
          margin-top: 15px;
        }

        /* Button styling */
        .apply-button {
          padding: 12px 24px;
          background-color: orange;
          color: white;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          font-size: 18px;
          font-weight: bold;
          text-align: center;
          transition: background-color 0.3s ease;
        }

        .apply-button:hover {
          background-color: darkorange;
        }
      `}</style>
    </div>
  );
};


export default InternshipDetailsAdmin;
