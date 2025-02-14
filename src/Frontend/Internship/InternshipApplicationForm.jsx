import React, { useState } from 'react';

const InternshipApplicationForm = ({ internshipId }) => {
  const [formData, setFormData] = useState({
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
    data.append('internshipId', internshipId);
    data.append('name', formData.name);
    data.append('email', formData.email);
    data.append('mobile_mo', formData.mobile_no);
    data.append('designation', formData.designation);
    data.append('branch', formData.branch);
    data.append('passingYr', formData.passingYr);
    data.append('domain', formData.domain);
    data.append('experience', formData.experience);
    data.append('resume', formData.resume);

    try {
      const response = await fetch('http://localhost:8080/api/apply_internship', {
        method: 'POST',
        body: data,
      });

      if (response.ok) {
        setMessage('Application submitted successfully!');
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
          <input type="file" id="resume" name="resume" accept=".pdf,.doc,.docx" onChange={handleChange} required />
        </div>

        <div className="form-group">
          <button type="submit">Submit Application</button>
        </div>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
};

export default InternshipApplicationForm;
