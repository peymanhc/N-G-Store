import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: "white",
    minHeight: 50,
  },
  title: {
    color: "black",
    fontWeight: 700,
  },
}));

function Category({ title }) {
  const classes = useStyles();

  return (
    <AppBar className={classes.root} position="fixed">
      <Toolbar style={{ minHeight: 50 }}>
        <Typography className={classes.title}>Categoty</Typography>
      </Toolbar>
    </AppBar>
  );
}
export default Category;
