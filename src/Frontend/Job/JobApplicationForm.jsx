//import React, { useState } from 'react';
import { useParams } from "react-router-dom";
import React, { useState, useEffect, useRef} from "react"; 
// In the InternshipApplicationForm
//import { useLocation } from 'react-router-dom';

const JobApplicationForm = () => {
  const { id } = useParams();
  const fileInputRef = useRef(null);
  const [formData, setFormData] = useState({
    jobId: "",
    name: "",
    email: "",
    mobile_no: "",
    designation: "",
    branch: "",
    passingYr: "",
    experience: "",
    domain: "",
    resume: null,
  });

  useEffect(() => {
    if (id) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        jobId: id,
      }));
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === "file" ? files[0] : value,
    });
  };

  const handleRemoveResume = () => {
    setFormData({ ...formData, resume: null });
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Form Data Before Submit:", formData);

    const formDataToSend = new FormData();
    formDataToSend.append("jobId", formData.jobId);
    formDataToSend.append("name", formData.name.trim());
    formDataToSend.append("email", formData.email.trim());
    formDataToSend.append("mobile_no", formData.mobile_no.trim());
    formDataToSend.append("designation", formData.designation.trim());
    formDataToSend.append("branch", formData.branch.trim());
    formDataToSend.append("passingYr", formData.passingYr.trim());
    formDataToSend.append("experience", formData.experience.trim());
    formDataToSend.append("domain", formData.domain);

    if (formData.resume) {
      formDataToSend.append("resume", formData.resume);
    } else {
      alert("Please upload a resume before submitting.");
      return;
    }

    try {
      const response = await fetch("http://localhost:8082/api/apply", {
        method: "POST",
        body: formDataToSend,
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Error: ${errorText}`);
      }

      alert("Application submitted successfully!");
      setFormData({
        jobId: id || "",
        name: "",
        email: "",
        mobile_no: "",
        designation: "",
        branch: "",
        passingYr: "",
        experience: "",
        domain: "",
        resume: null,
      });

      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    } catch (error) {
      console.error("Error submitting application:", error);
    }
  };

  return (
    <div className="form-container">
      <h2>Job Application Form</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="form-group">
          <label htmlFor="jobId">Job_ID</label>
          <input type="number" id="jobId" name="jobId" value={formData.jobId} readOnly required />
        </div>

        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your Name" required />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email Id</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter Email Id" required />
        </div>

        <div className="form-group">
          <label htmlFor="mobile_no">Phone Number</label>
          <input type="text" id="mobile_no" name="mobile_no" value={formData.mobile_no} onChange={handleChange} placeholder="Enter Phone number" required />
        </div>

        <div className="form-group">
          <label htmlFor="designation">Designation</label>
          <textarea id="designation" name="designation" rows="2" value={formData.designation} onChange={handleChange} placeholder="Enter Designation" required />
        </div>

        <div className="form-group">
          <label htmlFor="branch">Branch</label>
          <input type="text" id="branch" name="branch" value={formData.branch} onChange={handleChange} placeholder="Enter Branch" required />
        </div>

        <div className="form-group">
          <label htmlFor="passingYr">Passing Year</label>
          <input type="number" id="passingYr" name="passingYr" value={formData.passingYr} onChange={handleChange} placeholder="Enter Passing Year" required />
        </div>

        <div className="form-group">
          <label htmlFor="experience">Experience (in years)</label>
          <input type="number" id="experience" name="experience" value={formData.experience} onChange={handleChange} step="0.1" />
        </div>

        <div className="form-group">
          <label htmlFor="domain">In which domain you want to do job?</label>
          <select id="domain" name="domain" value={formData.domain} onChange={handleChange} required>
            <option value="">Select your domain</option>
            <option value="Full Stack Developer">Full Stack Developer</option>
            <option value="Web Development">Web Development</option>
            <option value="Data Analytics">Data Analytics</option>
            <option value="Business Analytics">Business Analytics</option>
            <option value="Java Developer">Java Developer</option>
            <option value="Frontend Developer">Frontend Developer</option>
            <option value="Data Science">Data Science</option>
            <option value="Backend Developer">Backend Developer</option>
            <option value="Python Developer">Python Developer</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="resume">Upload Resume</label>
          <input type="file" id="resume" name="resume" accept=".pdf,.doc,.docx" ref={fileInputRef} onChange={handleChange} required />
          {formData.resume && (
            <div className="resume-preview">
              <span>{formData.resume.name}</span>
              <button type="button" className="delete-btn" onClick={handleRemoveResume}>
                ❌
              </button>
            </div>
          )}
        </div>

        <button type="submit">Submit Application</button>
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


        .resume-preview {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 1rem;
          color: #333;
          margin-top: 10px;
        }

        .delete-btn {
          background: none;
          border: none;
          color: red;
          font-size: 1.2rem;
          cursor: pointer;
          padding: 0;
        }

        .delete-btn:hover {
          color: darkred;
        }
          
      `}</style>
    
    </div>
  );
};

export default JobApplicationForm;