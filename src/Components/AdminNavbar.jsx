import React from "react";
import { Link } from "react-router-dom";
import logo from "./logooo.png";

const AdminNavbar = () => {
  const styles = `
   @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@600&family=Playfair+Display:wght@700&display=swap');

.navbar {
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  flex-wrap: wrap; /* Ensure elements wrap on smaller screens */
}

.logo {
  height: 70px;
  object-fit: contain;
}

.headline {
  font-size: 3.5rem;
  font-weight: 800;
  color: #d97706;
  margin: 0;
  padding: 0;
  font-family: 'Playfair Display', serif;
  flex-grow: 1; /* Allows the headline to take up available space */
  text-align: center; /* Center the headline */
}

.admin-text {
  font-family: 'Poppins', sans-serif;
}

.logout-btn {
  background-color: #ff5800;
  color: white;
  padding: 8px 16px;
  border-radius: 6px;
  text-decoration: none;
  transition: background-color 0.3s ease-in-out;
}

.logout-btn:hover {
  background-color: #b91c1c;
}

/* Media Queries */
@media (max-width: 768px) {
  .navbar {
    flex-direction: column;
    align-items: center; /* Align items to the left on small screens */
    padding: 15px 20px;
  }

  .headline {
    font-size: 2rem; /* Smaller font size for smaller screens */
    text-align: center;
    margin-top: 10px;
  }

  .logo {
    height: 60px; /* Make the logo smaller on mobile */
  }

  .logout-btn {
    width: 80%; /* Make the logout button span the full width */
    margin-top: 10px;
    text-align: center;
  }
}

@media (max-width: 480px) {
  .headline {
    font-size: 2rem; /* Even smaller font size for very small screens */
  }

  .logo {
    height: 40px; /* Even smaller logo */
  }

  .logout-btn {
    padding: 10px 20px;
  }
}
  `;

  return (
    <>
      <style>{styles}</style>
      <nav className="navbar">
        {/* Logo */}
        <img src={logo} alt="Logo" className="logo" />

        {/* Headline */}
        <h1 className="headline">
          Welcome<span className="admin-text">Admin</span>
        </h1>

        {/* Logout Button */}
        <Link to="/" className="logout-btn">
          Logout
        </Link>
      </nav>
    </>
  );
};

export default AdminNavbar;
