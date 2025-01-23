import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import { Box } from "@mui/material";

const RoundedSearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = (event) => {
    setQuery(event.target.value);
    if (onSearch) {
      onSearch(event.target.value);
    }
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
    >
      <TextField
        label="Search"
        variant="outlined"
        value={query}
        onChange={handleSearch}
        size="small" // Small size
        sx={{
          width: "300px", // Compact width
          backgroundColor: "#FFE5D4", // Light orange background
          borderRadius: "25px", // Rounded shape
          "& .MuiOutlinedInput-root": {
            borderRadius: "25px", // Rounded shape for input field
            "& fieldset": {
              borderColor: "#FFB799", // Light orange border
            },
            "&:hover fieldset": {
              borderColor: "#FFA482", // Slightly darker orange on hover
            },
            "&.Mui-focused fieldset": {
              borderColor: "#FF8A50", // Darker orange on focus
            },
          },
          "& .MuiInputLabel-root": {
            color: "#FF7043", // Light orange label text
          },
          "& .MuiOutlinedInput-input": {
            color: "#FF7043", // Light orange input text
          },
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon sx={{ color: "#FF7043" }} /> {/* Light orange icon */}
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
};

export default RoundedSearchBar;
