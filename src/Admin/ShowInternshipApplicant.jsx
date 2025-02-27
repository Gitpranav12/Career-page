import React, { useState, useEffect } from "react";

const ShowInternshipApplicant = () => {
  const [applications, setApplications] = useState([]); 
  const [loading, setLoading] = useState(true); 

  // Fetch internship applications from API
  useEffect(() => {
    fetch("http://localhost:8082/api/internship_applications")
      .then((response) => response.json())
      .then((data) => {
        console.log("API response:", data); 
        setApplications(Array.isArray(data) ? data : []); // Ensure it's always an array
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setApplications([]); 
      })
      .finally(() => setLoading(false)); // Set loading to false after fetch
  }, []);

  const viewResume = (appId) => {
    fetch(`http://localhost:8082/api/internship_applications/${appId}/resume`, {
      method: "GET",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Resume not found or failed to fetch.");
        }
        return response.blob();
      })
      .then((blob) => {
        const fileURL = URL.createObjectURL(blob);
        window.open(fileURL, "_blank"); // Open resume in a new tab
      })
      .catch((error) => {
        console.error("Error fetching resume:", error);
        alert("Resume not available for this candidate.");
      });
  };

  const styles = {
    container: { fontFamily: "Arial, sans-serif", textAlign: "center", margin: "20px" },
    table: { width: "80%", margin: "20px auto", borderCollapse: "collapse", background: "white", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", borderRadius: "10px", overflow: "hidden" },
    th: { background: "orange", color: "white", padding: "12px", border: "1px solid #ddd" },
    td: { padding: "12px", border: "1px solid #ddd", textAlign: "center" },
    button: { padding: "8px 12px", border: "none", cursor: "pointer", color: "white", borderRadius: "4px", backgroundColor: "#007bff" },
  };

  return (
    <div style={styles.container}>
      <h2>Internship Applications</h2>

      {loading ? (
        <p>Loading applications...</p> // Show loading message while fetching data
      ) : applications.length === 0 ? (
        <p>No internship applications found.</p> // Show this if API returns empty array
      ) : (
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Intern_ID</th>
              <th style={styles.th}>Internship_ID</th>
              <th style={styles.th}>Name</th>
              <th style={styles.th}>Email</th>
              <th style={styles.th}>Mobile No</th>
              <th style={styles.th}>Designation</th>
              <th style={styles.th}>Branch</th>
              <th style={styles.th}>Passing Year</th>
              <th style={styles.th}>Experience</th>
              <th style={styles.th}>Domain</th>
              <th style={styles.th}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {applications?.map((app) => (
              <tr key={app.id}>
                <td style={styles.td}>{app.id}</td>
                <td style={styles.td}>{app.internshipId}</td>
                <td style={styles.td}>{app.name}</td>
                <td style={styles.td}>{app.email}</td>
                <td style={styles.td}>{app.mobile_no}</td>
                <td style={styles.td}>{app.designation}</td>
                <td style={styles.td}>{app.branch}</td>
                <td style={styles.td}>{app.passingYr}</td>
                <td style={styles.td}>{app.experience} years</td>
                <td style={styles.td}>{app.domain}</td>
                <td style={styles.td}>
                  <button style={styles.button} onClick={() => viewResume(app.id)}>
                    View Resume
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ShowInternshipApplicant;
