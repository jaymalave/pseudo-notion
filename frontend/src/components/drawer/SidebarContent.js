import React, { useEffect } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { Toolbar, Divider, Button } from "@mui/material";
import Logout from "../auth/Logout";
import AddIcon from "@mui/icons-material/Add";
import { getAllPages } from "../../api/getAllPages";

const SidebarContent = () => {
  useEffect(() => {
    async function getData() {
      const data = await getAllPages();
      console.log("daf", data);
    }
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

          {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
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
