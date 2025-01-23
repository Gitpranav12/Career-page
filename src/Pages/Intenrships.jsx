import React from "react";

const Intenrships = () => {
  const navbarStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "",
    padding: "10px 20px",
    backgroundColor: "#fff",
    borderBottom: "1px solid #eaeaea",
    fontFamily: "Arial, sans-serif",
  };

  const logoStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    color: "#ff7600",
    fontWeight: "bold",
  };

  const navLinksStyle = {
    display: "flex",
    listStyle: "none",
    gap: "20px",
  };

  const navLinkStyle = {
    textDecoration: "none",
    color: "#000",
    fontSize: "16px",
    fontWeight: "500",
  };

  const buttonStyle = {
    padding: "8px 16px",
    border: "2px solid #ff7600",
    borderRadius: "20px",
    backgroundColor: "transparent",
    color: "#ff7600",
    cursor: "pointer",
    fontSize: "16px",
  };

  return (
    <div style={navbarStyle}>
      <div style={logoStyle}>
        <div style={{ fontSize: "24px" }}>K</div>
        <div style={{ fontSize: "14px" }}>KaVaaVi</div>
      </div>
      <ul style={navLinksStyle}>
        <li>
          <a href="#home" style={navLinkStyle}>
            Home
          </a>
        </li>
        <li>
          <a href="#about" style={navLinkStyle}>
            About
          </a>
        </li>
        <li>
          <a href="#services" style={navLinkStyle}>
            Services
          </a>
        </li>
        <li>
          <a href="#blog" style={navLinkStyle}>
            Blog
          </a>
        </li>
        <li>
          <a href="#contact" style={navLinkStyle}>
            Contact
          </a>
        </li>
      </ul>
      <button style={buttonStyle}>Logout</button>
    </div>
  );
};

export default Intenrships;
