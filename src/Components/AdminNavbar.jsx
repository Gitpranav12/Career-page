import React from "react";
import { Link } from "react-router-dom";
import logo from "./logooo.png";

const AdminNavbar = () => {
  const navbarStyle = {
    backgroundColor: "white", 
    color: "black",
    padding: "5px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };

  const logoStyle = {
    width: "auto", 
    height: "70px", // Adjust height to maintain proportions
    objectFit: "contain", 
  };

  const headlineStyle = {
    fontSize: "3.5rem", 
    fontWeight: "800",
    fontFamily: "'Times New Roman', Times, serif",
    fontStyle: "italic",
    color: "#d97706",  
    margin: "0", 
    padding: "0", 
};


  const logoutButtonStyle = {
    backgroundColor: "#ff5800", // Tailwind  orange
    padding: "8px 16px",
    borderRadius: "6px",
    textDecoration: "none",
    color: "white",
    transition: "background-color 0.3s ease-in-out",
  };

  const logoutButtonHoverStyle = {
    backgroundColor: "#b91c1c", // Tailwind's red-700
  };

  return (
    <nav style={navbarStyle}>
      {/* Logo */}
      <div>
        <img src={logo} alt="Logo" style={logoStyle} />
      </div>

      {/* Headline */}
      <h1 style={headlineStyle}>Welcome Admin</h1>

      {/* Logout Button */}
      <Link
        to="/"
        style={logoutButtonStyle}
        onMouseEnter={(e) => (e.target.style.backgroundColor = logoutButtonHoverStyle.backgroundColor)}
        onMouseLeave={(e) => (e.target.style.backgroundColor = logoutButtonStyle.backgroundColor)}
      >
        Logout
      </Link>
    </nav>
  );
};

export default AdminNavbar;
