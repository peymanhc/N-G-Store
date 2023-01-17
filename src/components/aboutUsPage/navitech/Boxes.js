import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "./Box";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 1000,
    margin: "auto",
    position: "relative",
  },
  boxes: {
    width: "100%",
    position: "relative",
    top: -50,
  },
}));
const Boxes = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={`flex flex-wrap justify-center ${classes.boxes}`}>
          <Box/>
          <Box/>
          <Box/>
      </div>
    </div>
  );
};

export default Boxes;
