// Loader.js
import React from "react";
import { Box } from "@mui/material";

const Loader = () => {
  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      width: '100%',
    }}>
      <div className="spinner"></div>
      <style jsx>{`
        .spinner {
          border: 8px solid #f3f3f3; /* Light grey */
          border-top: 8px solid #9c27b0; /* Blue */
          border-radius: 50%;
          width: 60px;
          height: 60px;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </Box>
  );
};

export default Loader;
