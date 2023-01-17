import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { IconButton, Typography } from "@material-ui/core";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import { useHistory } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: "white",
    minHeight: 50,
  },
  wrapper: {
    minHeight: 40,
    color: "black",
    padding: "0 5px",
    display: "flex",
    alignItems: "center",
  },
  title: {
    color: "black",
    fontWeight: 700,
  },
}));

function Topbar({ title }) {
  const classes = useStyles();
  const history = useHistory();
  const GoBack = () => {
    history.goBack();
  };
  return (
    <AppBar className={classes.root} position="fixed">
      <Toolbar className={classes.wrapper}>
        <IconButton onClick={GoBack}>
          <KeyboardBackspaceIcon style={{ color: "black" }} />
        </IconButton>
        <Typography className={classes.title}>{title}</Typography>
      </Toolbar>
    </AppBar>
  );
}
export default Topbar;
