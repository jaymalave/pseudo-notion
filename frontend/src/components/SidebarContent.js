import React, { useEffect, useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { Toolbar, Divider, Button, CircularProgress } from "@mui/material";
import Logout from "./auth/Logout";
import AddIcon from "@mui/icons-material/Add";
import { getAllPages } from "../api/getAllPages";
import Center from "./utils/Center";
import { newPage } from "../api/newPage";

const SidebarContent = () => {
  const [pagesData, setPagesData] = useState();
  const [selectedPageId, setSelectedPageId] = useState();

  async function getData() {
    const data = await getAllPages();
    console.log(data);
    setPagesData(data);
  }

  useEffect(() => {
    getData();
  }, []);

  const selectPage = (pageId) => {
    console.log(pageId);
    setSelectedPageId(pageId);
  };

  const onPressAdd = async () => {
    const newPageData = await newPage();
    console.log(newPageData);
    setPagesData((prev) => [
      ...prev,
      {
        createdAt: "2022-02-15T05:52:39.535Z",
        title: "Page" + prev.length,
        updatedAt: "2022-02-15T05:52:39.535Z",
        _id: "61f3702a0d43f904cd9c" + Math.random(),
      },
    ]);
  };

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
              onClick={onPressAdd}
            >
              Add
            </Button>
          </ListItem>

          {pagesData ? (
            pagesData.map((data, index) => (
              <ListItem
                button
                key={data._id}
                selected={data._id === selectedPageId}
                onClick={() => selectPage(data._id)}
              >
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
