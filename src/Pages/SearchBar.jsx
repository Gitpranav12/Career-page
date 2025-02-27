import React, { useState } from "react";
import backimage from '../Pages/backimage.jpg';

const SearchBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    console.log("Searching for:", searchQuery); 
    onSearch(searchQuery.trim()); 
  };

  return (
    <>
      <style>{`  
        .Main {
            font-family: Arial, sans-serif;  
            background-size: cover;
            height: 80vh;
            text-align: center;
            width: 100%;
            background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  object-fit:fit;
        }

        h1 {
            font-size: 44px;
            margin-bottom: 15px;
            color: #333;
            font-weight: 600;
            text-align: center;
        }

        .search-container {
            display: flex;
            align-content: center;
            background: white;
            border-radius: 50px;
            padding: 8px;
            width: 50%;
            box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
        }

        .search-container input {
            border: none;
            outline: none;
            padding: 10px;
            font-size: 16px;
            border-radius: 50px;
            flex: 1;
            width: 50%;
            margin: auto auto;
        }

        .search-container button {
            background-color: #ff9900;
            border: none;
            color: white;
            padding: 10px 18px;
            font-size: 16px;
            border-radius: 50px;
            cursor: pointer;
            display: flex;
            align-items: center;
            gap: 5px;
            width: 30%;
        }

        .search-container button i {
            font-size: 14px;
        }

        .search-container button:hover {
            background-color: #e68900;
        }
      `}</style>

      <div className="Main" style={{ backgroundImage: `url(${backimage})` }}>
        <h1>Find Jobs</h1>
        <div className="search-container">
          <input
            type="text"
            placeholder="Search for Jobs or Internships"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button onClick={handleSearch}>
            <i className="fas fa-search"></i> Search
          </button>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
