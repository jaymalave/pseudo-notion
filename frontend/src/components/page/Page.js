import React from "react";
import { TextField, Box } from "@mui/material";

const Page = () => {
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

export default Page;
