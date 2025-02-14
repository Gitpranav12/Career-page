import React, { useState } from 'react'; 
import AdminNavbar from '../Components/AdminNavbar';

const AddJob = () => {
  const [formData, setFormData] = useState({
    Job_id: '',
    Title: '',
    Description: '',
    Requirement: '',
    Location: '',
    Job_type: '',
    Package: '',
    Posted_Date: '',
    Application_Deadline: '',
  });

  const [showPopup, setShowPopup] = useState(false);
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log("Form submitted:", formData);
      setShowPopup(true);
    };
  
    const closePopup = () => {
      setShowPopup(false);
    };
  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      background: 'linear-gradient(to bottom right, #f2d8d8, #cce7eb)',
      padding: '10px',
      fontFamily: 'Cambria, Cochin, Georgia, Times, "Times New Roman", serif',
    },
    formContainer: {
      background: '#fff',
      borderRadius: '10px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      padding: '20px',
      maxWidth: '500px',
      width: '100%',
    },
    title: {
      textAlign: 'center',
      marginBottom: '20px',
      color: '#333',
      fontSize: '1.5rem',
    },
    formGroup: {
      marginBottom: '15px',
    },
    label: {
      display: 'block',
      fontWeight: 'bold',
      marginBottom: '5px',
      fontSize: '0.9rem',
    },
    input: {
      width: '96%',
      padding: '10px',
      border: '1px solid #ccc',
      borderRadius: '5px',
      fontSize: '0.9rem',
    },
    textarea: {
      width: '96%',
      padding: '10px',
      border: '1px solid #ccc',
      borderRadius: '5px',
      fontSize: '0.9rem',
      resize: 'none',
    },
    select: {
      width: '96%',
      padding: '10px',
      border: '1px solid #ccc',
      borderRadius: '5px',
      fontSize: '0.9rem',
    },
    button: {
      background: '#f97902',
      color: '#fff',
      border: 'none',
      padding: '12px 20px',
      borderRadius: '5px',
      fontSize: '1rem',
      cursor: 'pointer',
      width: '100%',
    },
    buttonHover: {
      background: '#cc6b11',
    },
    popup: {
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        background: "#fff",
        color: "#000",
        padding: "20px 30px",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        fontSize: "1.2rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "300px",
      },
     
      okButton: {
        marginTop: "10px",
        background: "#f97902",
        color: "#fff",
        border: "none",
        padding: "8px 16px",
        borderRadius: "5px",
        cursor: "pointer",
        fontSize: "1rem",
      },
  };

  return (
    <div><AdminNavbar /> 
    <div style={styles.container}>
      <div style={styles.formContainer}>
        <h2 style={styles.title}>Job Registration Form</h2>
        <form onSubmit={handleSubmit}>
          <div style={styles.formGroup}>
            <label htmlFor="Job_id" style={styles.label}>
              Job ID
            </label>
            <input
              type="text"
              id="Job_id"
              name="Job_id"
              style={styles.input}
              placeholder="Enter Job ID"
              value={formData.Job_id}
              onChange={handleChange}
              required
            />
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="Title" style={styles.label}>
              Job Title
            </label>
            <input
              type="text"
              id="Title"
              name="Title"
              style={styles.input}
              placeholder="Enter Job Title"
              value={formData.Title}
              onChange={handleChange}
              required
            />
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="Description" style={styles.label}>
              Job Description
            </label>
            <textarea
              id="Description"
              name="Description"
              style={styles.textarea}
              rows="3"
              placeholder="Enter Job Description"
              value={formData.Description}
              onChange={handleChange}
              required
            />
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="Requirement" style={styles.label}>
              Requirements
            </label>
            <textarea
              id="Requirement"
              name="Requirement"
              style={styles.textarea}
              rows="3"
              placeholder="List the requirements"
              value={formData.Requirement}
              onChange={handleChange}
              required
            />
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="Location" style={styles.label}>
              Location
            </label>
            <input
              type="text"
              id="Location"
              name="Location"
              style={styles.input}
              placeholder="e.g., Remote, City Name"
              value={formData.Location}
              onChange={handleChange}
              required
            />
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="Job_type" style={styles.label}>
              Job Type
            </label>
            <select
              id="Job_type"
              name="Job_type"
              style={styles.select}
              value={formData.Job_type}
              onChange={handleChange}
              required
            >
              <option value="">Select Job Type</option>
              <option value="full-time">Full-Time</option>
              <option value="part-time">Part-Time</option>
              <option value="contract">Contract</option>
              <option value="internship">Internship</option>
            </select>
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="Package" style={styles.label}>
              Package
            </label>
            <input
              type="text"
              id="Package"
              name="Package"
              style={styles.input}
              placeholder="Expected CTC"
              value={formData.Package}
              onChange={handleChange}
              required
            />
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="Posted_Date" style={styles.label}>
              Posted Date
            </label>
            <input
              type="date"
              id="Posted_Date"
              name="Posted_Date"
              style={styles.input}
              value={formData.Posted_Date}
              onChange={handleChange}
              required
            />
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="Application_Deadline" style={styles.label}>
              Application Deadline
            </label>
            <input
              type="date"
              id="Application_Deadline"
              name="Application_Deadline"
              style={styles.input}
              value={formData.Application_Deadline}
              onChange={handleChange}
              required
            />
          </div>
          <div style={styles.formGroup}>
              <button type="submit" style={styles.button}>
                Submit Application
              </button>
            </div>
          </form>
        </div>
      </div>
      {showPopup && (
        <div style={styles.popup}>  
          <p>registration successful!</p>
          <button onClick={closePopup} style={styles.okButton}>OK</button>
        </div>
          )}
          </div>
        );
};

export default AddJob;
