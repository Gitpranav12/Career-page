import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const JobDetails = () => {
  const { id } = useParams(); // Get job ID from URL
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

 
  useEffect(() => {
    axios.get(`http://localhost:8082/api/getjob/${id}`)
      .then(response => {
        setJob(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching job details:", error);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Loading job details...</p>;
  if (!job) return <p>No job details found.</p>;

  return (
    <div className="job-details-container">
      <h1>Job Description</h1>
      <div className="job-card">
        <div className="job-info"><strong>Job ID:</strong> {job.job_id}</div>
        <div className="job-info"><strong>Title:</strong> {job.title}</div>
        <div className="job-info"><strong>Requirement:</strong> {job.requirement}</div>
        <div className="job-info"><strong>Description:</strong> {job.description}</div>
        <div className="job-info"><strong>Location:</strong> {job.location}</div>
        <div className="job-info"><strong>Job Type:</strong> {job.job_Type}</div>
        <div className="job-info"><strong>Package:</strong> {job.package}</div>
        <div className="job-info"><strong>Posted Date:</strong> {job.posted_Date}</div>
        <div className="job-info"><strong>Application Deadline:</strong> {job.application_Deadline}</div>
        
        {/* Centered Button */}
        <div className="button-container">
        <button className="apply-button" onClick={() => navigate(`/JobApplicationForm/${job.job_id}`)}> 
  Apply Now
</button>

</div>

      </div>

      <style>{`
        .job-details-container {
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

        .job-card {
          background: #fff;
          padding: 20px;
          border-radius: 10px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        .job-info {
          font-size: 18px;
          color: #444;
          margin-bottom: 10px;
        }

        .job-info strong {
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

export default JobDetails;
