import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const JobDetails = () => {
  const { id } = useParams(); // Get job ID from URL
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`http://localhost:8080/api/getjob/${id}`)
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
     <p><strong>Job ID:</strong> {job.job_id}</p>
     <p><strong>Title:</strong> {job.title}</p>
     <p><strong>Requirement:</strong> {job.requirement}</p>
     <p><strong>Description:</strong> {job.description}</p>
     <p><strong>Location:</strong> {job.location}</p>
     <p><strong>Job Type:</strong> {job.job_Type}</p>
     <p><strong>Package:</strong> {job.package}</p>
     <p><strong>Posted Date:</strong> {job.posted_Date}</p>
    <p><strong>Application Deadline:</strong> {job.application_Deadline}</p>  
    </div>
  );
};

export default JobDetails;
