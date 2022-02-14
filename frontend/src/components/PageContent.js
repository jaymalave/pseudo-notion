import React, { useState, useEffect } from "react";
import { TextField, Box, CircularProgress } from "@mui/material";
import { useLocation } from "react-router-dom";
import Center from "../components/utils/Center";
import { getPage } from "../api/getPage";

const PageContent = () => {
  const [pageData, setPageData] = useState();
  const location = useLocation();

  const getPageData = async () => {
    const data = await getPage(location.hash.substring(1));
    setPageData(data);
  };

  useEffect(() => {
    getPageData();
  }, [location]);

  return (
    <div>
      {pageData ? (
        <div>
          <TextField
            value={pageData.title}
            variant="standard"
            fullWidth={true}
            inputProps={{ style: { fontSize: 40 } }}
          />
          <Box sx={{ mt: 5 }}>
            <TextField
              value={pageData.content}
              multiline
              maxRows={Infinity}
              fullWidth={true}
            />
          </Box>
        </div>
      ) : (
        <Center height={50}>
          <CircularProgress />
        </Center>
      )}
    </div>
  );
};

export default PageContent;
