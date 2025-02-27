//import React, { useState } from 'react';
import { useParams } from "react-router-dom";
import React, { useState, useEffect, useRef} from "react"; 
//import React, { useState } from 'react';

// In the InternshipApplicationForm
//import { useLocation } from 'react-router-dom';

const InternshipApplicationForm = () => {

  const { id } = useParams(); 
  const fileInputRef = useRef(null);

  console.log("Internship ID from URL:", id); 
  const [formData, setFormData] = useState({
    internshipId:  id || "",
    name: '',
    email: '',
    mobile_no: '',
    designation: '',
    branch: '',
    passingYr: '',
    domain: '',
    experience: '',
    resume: null,
  });
  useEffect(() => {
    if (id) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        internshipId: id, 
      }));
    }
  }, [id]);

  const [message, setMessage] = useState('');
  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'file' ? files[0] : value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const data = new FormData();
    data.append('internshipId', formData.internshipId);
    data.append('name', formData.name);
    data.append('email', formData.email);
    data.append('mobile_no', formData.mobile_no);
    data.append('designation', formData.designation);
    data.append('branch', formData.branch);
    data.append('passingYr', formData.passingYr);
    data.append('domain', formData.domain);
    data.append('experience', formData.experience);
    data.append('resume', formData.resume);

    try {
        const response = await fetch('http://localhost:8082/api/apply_internship', {
            method: 'POST',
            body: data,
        });

        if (response.ok) {
            setMessage('Application submitted successfully!');

            // Reset form fields after submission
            setFormData({
                internshipId: id || "", // Keep internship ID from URL
                name: '',
                email: '',
                mobile_no: '',
                designation: '',
                branch: '',
                passingYr: '',
                domain: '',
                experience: '',
                resume: null, 
            });

        
            if (fileInputRef.current) {
                fileInputRef.current.value = "";
            }

        } else {
            const errorText = await response.text();
            setMessage(`Error: ${errorText}`);
        }
    } catch (error) {
        setMessage('Error submitting the form');
        console.error(error);
    }
};

  return (
    <div className="form-container">
      <h2>Internship Application Form</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
      <div className="form-group">
          <label htmlFor="internshipId">internship Id</label>
          <input type="text" id="internshipId" name="internshipId" value={formData.internshipId} onChange={handleChange} required />
        </div>

        <div className="form-group">

          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Id</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label htmlFor="mobile_no">Phone Number</label>
          <input type="tel" id="mobile_no" name="mobile_no" value={formData.mobile_no} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label htmlFor="designation">Designation</label>
          <input type="text" id="designation" name="designation" value={formData.designation} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label htmlFor="branch">Branch</label>
          <input type="text" id="branch" name="branch" value={formData.branch} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label htmlFor="passingYr">Passing Year</label>
          <input type="number" id="passingYr" name="passingYr" value={formData.passingYr} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label htmlFor="domain">Domain</label>
          <select id="domain" name="domain" value={formData.domain} onChange={handleChange} required>
            <option value="">Select your domain</option>
            <option value="Full Stack Developer">Full Stack Developer</option>
            <option value="Web Development">Web Development</option>
            <option value="Data Analytics">Data Analytics</option>
            <option value="Business Analytics">Business Analytics</option>
            <option value="Java Developer">Java Developer</option>
            <option value="Python Developer">Python Developer</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="experience">Experience (in years)</label>
          <input type="number" id="experience" name="experience" value={formData.experience} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label htmlFor="resume">Upload Resume</label>
          <input type="file" id="resume" name="resume" accept=".pdf,.doc,.docx"   ref={fileInputRef} onChange={handleChange} required />
        </div>

        <div className="form-group">
          
          <button type="submit">Submit Application</button>
        </div>
      </form>


      {/* Internal CSS */}
      <style jsx>{`
        .form-container {
          font-family: 'Arial', sans-serif;
          background-color: #fff;
          padding: 20px;
          max-width: 600px;
          margin: 0 auto;
          border-radius: 10px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        h2 {
          text-align: center;
          color: #333;
          font-size: 1.8rem;
        }

        .form-group {
          margin-bottom: 15px;
        }

        label {
          display: block;
          font-weight: bold;
          margin-bottom: 5px;
          font-size: 1rem;
          color: #333;
        }

        input, select, textarea {
          width: 100%;
          padding: 10px;
          border: 1px solid #ccc;
          border-radius: 5px;
          font-size: 1rem;
          margin-bottom: 10px;
          box-sizing: border-box;
        }

        textarea {
          resize: vertical;
        }

        button {
          background-color: #f97902;
          color: #fff;
          border: none;
          padding: 10px 20px;
          border-radius: 5px;
          font-size: 1rem;
          cursor: pointer;
          width: 100%;
        }

        button:hover {
          background-color: #e87001;
        }
      `}</style>
    
    </div>
  );
};



export default InternshipApplicationForm;