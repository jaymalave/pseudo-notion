import React from "react";
import { Typography, TextField, Box } from "@mui/material";

const Page = () => {
  return (
    <div>
      <TextField
        defaultValue="Untitled Page"
        variant="standard"
        fullWidth={true}
      />
      <Box sx={{ mt: 5 }}>
        <TextField multiline maxRows={Infinity} fullWidth={true} />
      </Box>
    </div>
  );
};

export default Page;
