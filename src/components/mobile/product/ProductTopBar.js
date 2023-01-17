import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { IconButton, Typography } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ShareIcon from "@material-ui/icons/Share";
import { useHistory } from "react-router-dom";
import PlaylistAddIcon from "@material-ui/icons/PlaylistAdd";
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
    justifyContent: "space-between",
  },
  title: {
    color: "black",
    fontWeight: 700,
    fontSize: 12,
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    "-webkit-line-clamp": 1,
    "-webkit-box-orient": "vertical",
  },
}));

function ProductTopBar({ title, addtofav }) {
  const classes = useStyles();
  const history = useHistory();

  const GoBack = () => {
    history.goBack();
  };
  const sharelink = () => {
    navigator.clipboard
      .writeText(`https://nandwsouk.com${history.location.pathname}`)
      .then(() => {
        alert("url Copied to clipBoard");
      });
  };
  return (
    <AppBar className={classes.root} position="fixed">
      <Toolbar className={classes.wrapper}>
        <IconButton onClick={GoBack}>
          <CloseIcon style={{ color: "black" }} />
        </IconButton>
        <Typography className={classes.title}>{title}</Typography>
        <IconButton onClick={sharelink}>
          <ShareIcon style={{ color: "black" }} />
        </IconButton>
        <IconButton>
          <PlaylistAddIcon style={{ color: "black" }} />
        </IconButton>
        <IconButton onClick={addtofav}>
          <FavoriteBorderIcon style={{ color: "black" }} />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
export default ProductTopBar;
