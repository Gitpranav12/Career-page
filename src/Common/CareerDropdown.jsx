import React, { useState } from 'react';

const CareerDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="career-menu">
      <button className="career-btn" onClick={toggleDropdown}>
        Career
      </button>
      {isOpen && (
        <div className="dropdown-content">
          <a href="/internship">Internship</a>
          <a href="/jobs">Jobs</a>
        </div>
      )}
      <style jsx>{`
        .career-menu {
          position: relative;
          display: inline-block;
        }

        .career-btn {
          background-color: #FFA500; /* Light orange color */
          color: white;
          padding: 10px 20px;
          font-size: 16px;
          border: none;
          cursor: pointer;
        }

        .career-btn:hover {
          background-color: #FF8C00; /* Darker orange for hover */
        }

        .dropdown-content {
          position: absolute;
          background-color: #f9f9f9;
          min-width: 160px;
          box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
          z-index: 1;
        }

        .dropdown-content a {
          color: black;
          padding: 12px 16px;
          text-decoration: none;
          display: block;
        }

        .dropdown-content a:hover {
          background-color: #ddd;
        }
      `}</style>
    </div>
  );
};

export default CareerDropdown;
