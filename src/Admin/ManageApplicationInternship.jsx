import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const ManageApplicationInternship = () => {
  const [selectedApplication, setSelectedApplication] = useState(null);
  const navigate = useNavigate(); // Initialize navigation function

  const applications = [
    { id: 1, name: "John Doe", email: "john@example.com", role: "Web Developer" },
  ];

  const internships = [
    { id: 1, name: "Jane Smith", email: "jane@example.com", role: "Software Intern" },
  ];

  const viewDetails = (app) => {
    setSelectedApplication(app);
  };

  const closeDetails = () => {
    setSelectedApplication(null);
  };

  // Navigate to ManageCard page
  const handleManageClick = () => {
    navigate("/managecard"); 
  };

  const styles = {
    container: { fontFamily: "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif", textAlign: "center", margin: "20px" },
    table: { width: "80%", margin: "20px auto", borderCollapse: "collapse", background: "white", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", borderRadius: "10px", overflow: "hidden" },
    th: { background: "orange", color: "white", padding: "12px", border: "1px solid #ddd" },
    td: { padding: "12px", border: "1px solid #ddd", textAlign: "center" },
    button: { padding: "8px 12px", border: "none", cursor: "pointer", color: "white", borderRadius: "4px", margin: "5px" },
    viewBtn: { backgroundColor: "#28a745" },
    deleteBtn: { backgroundColor: "#dc3545" },
    manageBtn: { backgroundColor: "#007bff" },
    details: { display: selectedApplication ? "block" : "none", margin: "20px auto", padding: "20px", width: "50%", background: "white", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", borderRadius: "10px", textAlign: "center" },
    closeBtn: { backgroundColor: "#dc3545" },
  };

  return (
    <div style={styles.container}>
      <h2>Job Applications</h2>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>ID</th>
            <th style={styles.th}>Name</th>
            <th style={styles.th}>Email</th>
            <th style={styles.th}>Position</th>
            <th style={styles.th}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {applications.map((app) => (
            <tr key={app.id}>
              <td style={styles.td}>{app.id}</td>
              <td style={styles.td}>{app.name}</td>
              <td style={styles.td}>{app.email}</td>
              <td style={styles.td}>{app.role}</td>
              <td style={styles.td}>
                <button style={{ ...styles.button, ...styles.viewBtn }} onClick={() => viewDetails(app)}>
                  View
                </button>
                <button style={{ ...styles.button, ...styles.deleteBtn }}>Delete</button>
                <button style={{ ...styles.button, ...styles.manageBtn }} onClick={handleManageClick}>
                  Manage
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Internship Applications</h2>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>ID</th>
            <th style={styles.th}>Name</th>
            <th style={styles.th}>Email</th>
            <th style={styles.th}>Internship Role</th>
            <th style={styles.th}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {internships.map((app) => (
            <tr key={app.id}>
              <td style={styles.td}>{app.id}</td>
              <td style={styles.td}>{app.name}</td>
              <td style={styles.td}>{app.email}</td>
              <td style={styles.td}>{app.role}</td>
              <td style={styles.td}>
                <button style={{ ...styles.button, ...styles.viewBtn }} onClick={() => viewDetails(app)}>
                  View
                </button>
                <button style={{ ...styles.button, ...styles.deleteBtn }}>Delete</button>
                <button style={{ ...styles.button, ...styles.manageBtn }} onClick={handleManageClick}>
                  Manage
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedApplication && (
        <div style={styles.details}>
          <h2>Application Details</h2>
          <p>
            <strong>Name:</strong> {selectedApplication.name}
            <br />
            <strong>Email:</strong> {selectedApplication.email}
            <br />
            <strong>Role:</strong> {selectedApplication.role}
          </p>
          <button style={{ ...styles.button, ...styles.closeBtn }} onClick={closeDetails}>
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default ManageApplicationInternship;
