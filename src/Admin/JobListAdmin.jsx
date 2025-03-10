import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const JobListAdmin = () => {
  const [jobList, setJobList] = useState([]);

  // Fetch data from the backend when the component mounts
  useEffect(() => {
    axios.get(`http://localhost:8082/api/getJobfield`)
      .then(response => {
        setJobList(response.data); // Store fetched job data
      })
      .catch(error => {
        console.error("Error fetching jobs:", error);
      });
  }, []);

  // Function to delete a job
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this job?")) {
      axios
        .delete(`http://localhost:8082/api/delete-job/${id}`)
        .then((response) => {
          alert(response.data); // Show success message
          setJobList(jobList.filter(job => job[0] !== id)); // Remove the deleted job from the list
        })
        .catch((error) => {
          console.error("Error deleting job:", error);
          alert("Error deleting job. Please try again.");
        });
    }
  };

  return (
    <div className="job-list-container">
      <h1>List of Jobs</h1>
      <table className="job-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Application Deadline</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {jobList.length === 0 ? (
            <tr>
              <td colSpan="4" className="no-jobs-message">No jobs available</td>
            </tr>
          ) : (
            jobList.map((job, index) => (
              <tr key={index}>
                <td>{job[0]}</td>
                <td>{job[1]}</td>
                <td>{job[2]}</td>
                <td>
                  <div className="action-buttons">
                    <Link to={`/jobDetailsAdmin/${job[0]}`}>
                      <button className="view-button">View</button>
                    </Link>
                    <button className="delete-button" onClick={() => handleDelete(job[0])}>Delete</button>
                  </div>
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
          background-color: #ff4d4d;
        }

        .view-button:hover {
          background-color: #e67800;
        }

        .delete-button:hover {
          background-color: #e60000;
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

export default JobListAdmin;
