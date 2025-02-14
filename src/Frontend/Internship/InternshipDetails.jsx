import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const InternshipDetails = () => {
  const { id } = useParams(); 
  const [internship, setInternship] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`http://localhost:8080/api/getInternship/${id}`)
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
     <p><strong>Internship ID:</strong> {internship.internship_id}</p>
     <p><strong>Title:</strong> {internship.title}</p>
     <p><strong>Requirement:</strong> {internship.requirement}</p>
     <p><strong>Description:</strong> {internship.description}</p>
     <p><strong>Location:</strong> {internship.location}</p>
     <p><strong>Duration:</strong> {internship.duration}</p>
     <p><strong>Stipend:</strong> {internship.stipend}</p>
     <p><strong>Posted Date:</strong> {internship.posted_Date}</p>
    <p><strong>Application Deadline:</strong> {internship.application_Deadline}</p>  
    </div>
  );
};

export default InternshipDetails;
