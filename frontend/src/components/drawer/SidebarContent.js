import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { Toolbar, Divider, ListItemButton } from "@mui/material";
import Logout from "../auth/Logout";

const SidebarContent = () => {
  return (
    <div>
      <Toolbar />
      <Divider />
      <List>
        <ListItem alignItems="flex-start">
          <ListItemButton>Add</ListItemButton>
        </ListItem>
        <ListItem alignItems="flex-start">
          <Logout />
        </ListItem>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default SidebarContent;
