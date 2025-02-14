import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const JobList = () => {
  const [jobList, setJobList] = useState([]);

  // Fetch data from the backend when the component mounts
  useEffect(() => {
    axios.get('http://localhost:8080/api/getInternshipfield')
      .then(response => {
        setJobList(response.data); // Store fetched job data
      })
      .catch(error => {
        console.error("Error fetching internship:", error);
      });
  }, []);

  //const handleViewClick = (internship) => {
    //setSelectedinternship(internship); // Set selected internship details when clicking View
  //};
  return (
    <div className="internship-list-container">
      <h1>internship Listings</h1>
      <table className="internship-table">
        <thead>
          <tr>
            <th>internship_id</th>
            <th>Title</th>
            <th>AllicationDeadline</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {internshipList.length === 0 ? (
            <tr>
              <td colSpan="3" className="no-internship-message"> No internship available</td>
            </tr>
          ) : (
            internshipList.map((internship, index) => (
                <tr key={index}>
                  <td>{internship[0]}</td>
                  <td>{internship[1]}</td>
                  <td>{internship[2]}</td>
                  <td>
                    <Link to={`/internshipDetails/${internship[0]}`}> {/* Ensure `id` is correctly passed */}
                      <button className="view-button">View</button>
                    </Link>
                  </td>
                </tr>
              ))
            )}
        </tbody>
      </table>
      {/* Internal CSS */}
      <style>{`
        .job-list-container {
          width: 80%;
          margin: 0 auto;
          text-align: center;
        }

        .job-table {
          width: 100%;
          border-collapse: collapse;
          margin-top: 20px;
        }

        .job-table th, .job-table td {
          padding: 12px;
          border: 1px solid #ddd;
          text-align: left;
        }

        .job-table th {
          background-color: #f2f2f2;
          font-weight: bold;
        }

        .job-table tr:nth-child(even) {
          background-color: #f9f9f9;
        }

        .view-button {
          background-color: #ff7f00;
          color: white;
          padding: 8px 16px;
          border: none;
          cursor: pointer;
          border-radius: 4px;
          transition: background-color 0.3s;
        }

        .view-button:hover {
          background-color: #ff7f00;
        }

        .no-jobs-message {
          text-align: center;
          font-size: 18px;
          color: #888;
        }
      `}</style>
    </div>
  );
};

export default InternshipList;