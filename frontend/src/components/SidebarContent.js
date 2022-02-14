import React, { useEffect, useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { Toolbar, Divider, Button, CircularProgress, Box } from "@mui/material";
import Logout from "./auth/Logout";
import AddIcon from "@mui/icons-material/Add";
import { getAllPages } from "../api/getAllPages";
import Center from "./utils/Center";

const SidebarContent = () => {
  const [pagesData, setPagesData] = useState();

  async function getData() {
    const data = await getAllPages();
    setPagesData(data);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div
      style={{
        height: "100%",
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
      }}
    >
      <div>
        <Toolbar />
        <Divider />
        <List>
          <ListItem>
            <Button
              color="success"
              endIcon={<AddIcon />}
              fullWidth={true}
              variant={"outlined"}
              onClick={() => {}}
            >
              Add
            </Button>
          </ListItem>

          {pagesData ? (
            pagesData.map((data, index) => (
              <ListItem button key={data._id} selected={index === 1}>
                <ListItemText primary={data.title} />
              </ListItem>
            ))
          ) : (
            <Center height={20}>
              <CircularProgress />
            </Center>
          )}
        </List>
      </div>
      <List style={{ bottom: 0 }}>
        <ListItem>
          <Logout />
        </ListItem>
      </List>
    </div>
  );
};

export default SidebarContent;
