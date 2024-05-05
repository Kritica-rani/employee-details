import React, { useContext } from "react";
import EmployeContext from "../context/EmployeeContext";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";

import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import FolderIcon from "@mui/icons-material/Folder";
import DeleteIcon from "@mui/icons-material/Delete";
import { styled } from "@mui/material/styles";

function Employess() {
  const { data, setCurrentEmployee, handleDeleteEmployee } =
    useContext(EmployeContext);
  const Demo = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
  }));
  const handleClicked = (item) => {
    setCurrentEmployee(item);
  };
  return (
    <div className="employee-list">
      <Grid item xs={12} md={6}>
        <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
          Avatar with text and icon
        </Typography>
        <Demo>
          {data &&
            data.length > 0 &&
            data.map((item, index) => {
              return (
                <List key={index}>
                  <ListItem
                    secondaryAction={
                      <IconButton
                        edge="end"
                        aria-label="delete"
                        onClick={() => handleDeleteEmployee(item.name)}
                      >
                        <DeleteIcon />
                      </IconButton>
                    }
                  >
                    <ListItemText
                      primary={item.name}
                      onClick={() => handleClicked(item)}
                    />
                  </ListItem>
                </List>
              );
            })}
        </Demo>
      </Grid>
    </div>
  );
}

export default Employess;
