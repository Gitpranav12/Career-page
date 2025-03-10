import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const InternshipListAdmin = () => {
  const [internshipList, setInternshipList] = useState([]);

  // Fetch all internships when the component mounts
  useEffect(() => {
    fetchAllInternships();
  }, []);

  // Function to fetch all internships initially
  const fetchAllInternships = () => {
    axios
      .get("http://localhost:8082/api/getInternshipfield")
      .then((response) => {
        setInternshipList(response.data);
      })
      .catch((error) => {
        console.error("Error fetching internships:", error);
      });
  };

  // Function to delete an internship
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this internship?")) {
      axios
        .delete(`http://localhost:8082/api/delete-internship/${id}`)
        .then((response) => {
          alert(response.data); // Show success message
          setInternshipList(internshipList.filter(internship => internship[0] !== id)); // Remove from list
        })
        .catch((error) => {
          console.error("Error deleting internship:", error);
          alert("Error deleting internship. Please try again.");
        });
    }
  };

  return (
    <div className="internship-list-container">
      <h1>List of Internships</h1>
      <table className="internship-table">
        <thead>
          <tr>
            <th>Internship ID</th>
            <th>Title</th>
            <th>Application Deadline</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {internshipList.length === 0 ? (
            <tr>
              <td colSpan="4" className="no-internship-message">
                No internships available
              </td>
            </tr>
          ) : (
            internshipList.map((internship, index) => (
              <tr key={index}>
                <td>{internship[0]}</td>
                <td>{internship[1]}</td>
                <td>{internship[2]}</td>
                <td className="action-buttons">
                  <Link to={`/internshipDetailsAdmin/${internship[0]}`}>
                    <button className="view-button">View</button>
                  </Link>
                  <button
                    className="delete-button"
                    onClick={() => handleDelete(internship[0])}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      {/* Internal CSS */}
      <style>{`
        .internship-list-container {
          width: 80%;
          margin: 0 auto;
          text-align: center;
        }

        h1 {
          text-align: center;
          font-size: 24px;
          margin-bottom: 20px;
        }

        .internship-table {
          width: 100%;
          border-collapse: collapse;
          margin-top: 20px;
        }

        .internship-table th, .internship-table td {
          padding: 12px;
          border: 1px solid #ddd;
          text-align: left;
        }

        .internship-table th {
          background-color: #f2f2f2;
          font-weight: bold;
        }

        .internship-table tr:nth-child(even) {
          background-color: #f9f9f9;
        }

        .action-buttons {
          display: flex;
          gap: 10px;
        }

        .view-button, .delete-button {
          background-color: #ff7f00;
          color: white;
          padding: 8px 16px;
          border: none;
          cursor: pointer;
          border-radius: 4px;
          transition: background-color 0.3s;
        }

        .delete-button {
          background-color: #d9534f;
        }

        .view-button:hover {
          background-color: #e67800;
        }

        .delete-button:hover {
          background-color: #c9302c;
        }

        .no-internship-message {
          text-align: center;
          font-size: 18px;
          color: #888;
        }
      `}</style>
    </div>
  );
};

export default InternshipListAdmin;
