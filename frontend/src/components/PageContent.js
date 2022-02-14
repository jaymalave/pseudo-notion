import React, { useState, useEffect } from "react";
import { TextField, Box } from "@mui/material";
import { useLocation } from "react-router-dom";

const PageContent = () => {
  const location = useLocation();

  useEffect(() => {
    console.log(location.hash);
  }, [location]);

  return (
    <div>
      <TextField
        defaultValue="Untitled Page"
        variant="standard"
        fullWidth={true}
        inputProps={{ style: { fontSize: 40 } }}
      />
      <Box sx={{ mt: 5 }}>
        <TextField multiline maxRows={Infinity} fullWidth={true} />
      </Box>
    </div>
  );
};

export default PageContent;
