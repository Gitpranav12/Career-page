import React, { useState } from 'react';

const AddJob = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    requirement: '',
    location: '',
    job_Type: '',
    package: '',
    posted_Date: '',
    application_Deadline: '',
  });

  const [message, setMessage] = useState(""); // Success/Error message
  const [loading, setLoading] = useState(false); // Loading state

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    // Convert Date Format (YYYY-MM-DD)
    const formattedData = {
      ...formData,
      posted_Date: formData.posted_Date ? new Date(formData.posted_Date).toISOString().split("T")[0] : "",
      application_Deadline: formData.application_Deadline ? new Date(formData.application_Deadline).toISOString().split("T")[0] : "",
    };

    try {
      const response = await fetch("http://localhost:8080/api/Job-Enter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formattedData),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Server Error: ${errorText}`);
      }

      const result = await response.json();
      console.log("Success:", result);
      //setMessage("✅ Job registered successfully!");

      // Reset form after successful submission
      setFormData({
        title: '',
        description: '',
        requirement: '',
        location: '',
        job_Type: '',
        package: '',
        posted_Date: '',
        application_Deadline: '',
      });

    } catch (error) {
      console.error("Error:", error);
      //setMessage(`❌ Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
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
      background: loading ? '#aaa' : '#f97902',
      color: '#fff',
      border: 'none',
      padding: '12px 20px',
      borderRadius: '5px',
      fontSize: '1rem',
      cursor: loading ? 'not-allowed' : 'pointer',
      width: '100%',
    },
    message: {
      textAlign: 'center',
      fontSize: '1rem',
      color: message.includes("Error") ? 'red' : 'green',
      marginTop: '10px',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.formContainer}>
        <h2 style={styles.title}>Job Registration Form</h2>
        {message && <p style={styles.message}>{message}</p>}
        <form onSubmit={handleSubmit}>
          <div style={styles.formGroup}>
            <label htmlFor="title" style={styles.label}>Job Title</label>
            <input type="text" id="title" name="title" style={styles.input} placeholder="Enter Job Title" value={formData.title} onChange={handleChange} required />
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="description" style={styles.label}>Job Description</label>
            <textarea id="description" name="description" style={styles.textarea} rows="3" placeholder="Enter Job Description" value={formData.description} onChange={handleChange} required />
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="requirement" style={styles.label}>Requirements</label>
            <textarea id="requirement" name="requirement" style={styles.textarea} rows="3" placeholder="List the requirements" value={formData.requirement} onChange={handleChange} required />
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="location" style={styles.label}>Location</label>
            <input type="text" id="location" name="location" style={styles.input} placeholder="e.g., Remote, City Name" value={formData.location} onChange={handleChange} required />
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="job_Type" style={styles.label}>Job Type</label>
            <select id="job_Type" name="job_Type" style={styles.select} value={formData.job_Type} onChange={handleChange} required>
              <option value="">Select Job Type</option>
              <option value="full-time">Full-Time</option>
              <option value="part-time">Part-Time</option>
            </select>
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="package" style={styles.label}>Package</label>
            <input type="text" id="package" name="package" style={styles.input} placeholder="Expected CTC" value={formData.package} onChange={handleChange} required />
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="posted_Date" style={styles.label}>Posted Date</label>
            <input type="date" id="posted_Date" name="posted_Date" style={styles.input} value={formData.posted_Date} onChange={handleChange} required />
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="application_Deadline" style={styles.label}>Application Deadline</label>
            <input type="date" id="application_Deadline" name="application_Deadline" style={styles.input} value={formData.application_Deadline} onChange={handleChange} required />
          </div>
          <button type="submit" style={styles.button} disabled={loading}>Register Job</button>
        </form>
      </div>
    </div>
  );
};

export default AddJob;
