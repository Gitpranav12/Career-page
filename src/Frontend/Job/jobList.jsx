import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const JobList = () => {
  const [jobList, setJobList] = useState([]);

  // Fetch data from the backend when the component mounts
  useEffect(() => {
    axios.get('http://localhost:8080/api/getJobfield')
      .then(response => {
        setJobList(response.data); // Store fetched job data
      })
      .catch(error => {
        console.error("Error fetching jobs:", error);
      });
  }, []);


  //const handleViewClick = (job) => {
    //setSelectedJob(job); // Set selected job details when clicking View
  //};
  return (
    <div className="job-list-container">
      <h1>Job Listings</h1>
      <table className="job-table">
        <thead>
          <tr>
            <th>Job_id</th>
            <th>Title</th>
            <th>AllicationDeadline</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {jobList.length === 0 ? (
            <tr>
              <td colSpan="3" className="no-jobs-message">No jobs available</td>
            </tr>
          ) : (
            jobList.map((job, index) => (
                <tr key={index}>
                  <td>{job[0]}</td>
                  <td>{job[1]}</td>
                  <td>{job[2]}</td>
                  <td>
                    <Link to={`/jobDetails/${job[0]}`}> {/* Ensure `id` is correctly passed */}
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

export default JobList;