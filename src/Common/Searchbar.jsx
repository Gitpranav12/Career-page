import React, { useState, useEffect } from 'react';
import { TextField, Autocomplete } from '@mui/material'; // Import from @mui/material

const Searchbar = () => {
  const [myOptions, setMyOptions] = useState([]);
  const [query, setQuery] = useState('');

  // Fetch data from API and update options
  useEffect(() => {
    if (query.length > 2) { // Only fetch if query has more than 2 characters
      const fetchData = async () => {
        console.log("Options Fetched from API");
        const response = await fetch('');
        const data = await response.json();
        if (data && data.data) {
          const employeeNames = data.data.map(employee => employee.employee_name);
          setMyOptions(employeeNames);
        }
      };
      fetchData();
    }
  }, [query]); // This effect runs when `query` changes

  return (
    <div style={{ marginLeft: '40%', marginTop: '60px' }}>
      <Autocomplete
        style={{ width: 500 }}
        freeSolo
        autoComplete
        autoHighlight
        options={myOptions}
        renderInput={(params) => (
          <TextField
            {...params}
            onChange={(e) => setQuery(e.target.value)} // Update query state when input changes
            variant="outlined"
            label="Search Box"
          />
        )}
      />
    </div>
  );
};

export default Searchbar;
