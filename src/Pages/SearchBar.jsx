import React, { useState } from "react";
import backimg from "../Pages/backimg.jpg";
import { FaSearch } from "react-icons/fa"; 

const SearchBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    console.log("Searching for:", searchQuery);
    onSearch(searchQuery.trim());
  };

  const styles = {
    searchPage: {
      textAlign: "center",
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      background: `url(${backimg}) no-repeat center center/cover`,
      backgroundposition: "center",
      backgroundrepeat: "no-repeat",
      backgroundsize:" cover",
      backgroundColor:"balck"
      
    },
    heading: {
      fontSize: "4rem",
      marginBottom: "15px",
      color: "#ffff",
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
  return (
    <>
      <div style={styles.searchPage}>
        <h1 style={styles.heading}>Find Jobs</h1>
        <div  style={styles.searchContainer}>
          <input
            type="text"
            placeholder="Search for Jobs or Internships"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={styles.input}
          />
          <button onClick={handleSearch} style={styles.button}>
            <FaSearch style={styles.icon} />Search
          </button>
        </div>
      </div>
    </>

    
  );
};

export default SearchBar;
