import React, { useState } from 'react';

// In the InternshipApplicationForm
//import { useLocation } from 'react-router-dom';

const InternshipApplicationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobileNo: '',
    designation: '',
    branch: '',
    passingYear: '',
    domain: '',
    experience: '',
    resume: null,
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'file' ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic, e.g., sending the form data to an API or backend
    console.log('Form Data:', formData);
  };

  return (
    <div className="form-container">
      <h2>Internship Application Form</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your Name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email Id</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter Email Id"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="mobileNo">Phone Number</label>
          <input
            type="tel"
            id="mobileNo"
            name="mobileNo"
            value={formData.mobileNo}
            onChange={handleChange}
            placeholder="Enter Phone number"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="designation">Designation</label>
          <textarea
            id="designation"
            name="designation"
            rows="2"
            value={formData.designation}
            onChange={handleChange}
            placeholder="Enter Designation"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="branch">Branch</label>
          <input
            type="text"
            id="branch"
            name="branch"
            value={formData.branch}
            onChange={handleChange}
            placeholder="Enter Branch"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="passingYear">Passing Year</label>
          <input
            type="number"
            id="passingYear"
            name="passingYear"
            value={formData.passingYear}
            onChange={handleChange}
            placeholder="Enter Passing Year"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="domain">In which domain you want to do internship?</label>
          <select
            id="domain"
            name="domain"
            value={formData.domain}
            onChange={handleChange}
            required
          >
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
          <input
            type="number"
            id="experience"
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            step="0.1"
          />
        </div>

        <div className="form-group">
          <label htmlFor="resume">Upload Resume</label>
          <input
            type="file"
            id="resume"
            name="resume"
            accept=".pdf,.doc,.docx"
            onChange={handleChange}
            required
          />
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
