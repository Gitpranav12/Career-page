import React, { useState } from "react";
import { FaSearch } from "react-icons/fa"; 

const SearchBarintern = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    if (searchTerm.trim() !== "") {
      onSearch(searchTerm); 
    }
  };

  return (
    <div style={styles.searchPage}>
      <h1 style={styles.heading}>Find Internship</h1>
      <div style={styles.searchContainer}>
        <input
          type="text"
          placeholder="Search for Internships by Skills"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={styles.input}
        />
        <button onClick={handleSearch} style={styles.button}>
          <FaSearch style={styles.icon} /> Search
        </button>
      </div>
    </div>
  );
};

// Inline CSS Styles
const styles = {
  searchPage: {
    textAlign: "center",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background: "url('back.jpg') no-repeat center center/cover",
  },
  heading: {
    fontSize: "44px",
    marginBottom: "15px",
    color: "#333",
    fontWeight: "600",
  },
  searchContainer: {
    display: "flex",
    alignItems: "center",
    background: "white",
    borderRadius: "50px",
    padding: "8px",
    boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)",
  },
  input: {
    border: "none",
    outline: "none",
    padding: "10px",
    fontSize: "16px",
    borderRadius: "50px",
    flex: 1,
    minWidth: "250px",
  },
  button: {
    backgroundColor: "#ff9900",
    border: "none",
    color: "white",
    padding: "10px 18px",
    fontSize: "16px",
    borderRadius: "50px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    gap: "5px",
  },
  icon: {
    fontSize: "14px",
  },
};

export default SearchBarintern;
