import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import SearchBarintern from "../Pages/SearchBarintern";
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

  // Handle search using API call
  const handleSearch = (searchValue) => {
    axios
      .get("http://localhost:8082/api/search_internship", {
        params: { skills: searchValue }, // Sending skills as query param
      })
      .then((response) => {
        setInternshipList(response.data);
      })
      .catch((error) => {
        console.error("Error searching internships:", error);
      });
  };

  return (
    <>
      <SearchBarintern onSearch={handleSearch} />
      <div className="internship-list-container">
        <h1>Internship Listings</h1>
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
                  <td>
                   <Link to={`/InternshipDetailsAdmin/${internship[0]}`}>
                     <button className="view-button">View</button><br></br><br></br>
                   </Link>
                   <button className="view-button" >Delete</button>    
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
            background-color: #e67800;
          }

          .no-internship-message {
            text-align: center;
            font-size: 18px;
            color: #888;
          }
        `}</style>
      </div>
    </>
  );
};

export default InternshipListAdmin;
