import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Box, IconButton, Typography } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { useHistory } from "react-router-dom";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
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
    fontSize: 16,
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    "-webkit-line-clamp": 1,
    "-webkit-box-orient": "vertical",
    textAlign: "center",
  },
  Subtitle: {
    color: "rgba(0,0,0,0.5)",
    fontWeight: 700,
    fontSize: 11,
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    "-webkit-line-clamp": 1,
    "-webkit-box-orient": "vertical",
    textAlign: "center",
  },
}));

function PaymentTitle({ title, Level, setlevel }) {
  const classes = useStyles();
  const history = useHistory();
  const GoBack = () => {
    history.goBack();
  };
  return (
    <AppBar className={classes.root} position="fixed">
      <Toolbar className={classes.wrapper}>
        <IconButton onClick={() => setlevel(1)}>
          <KeyboardBackspaceIcon style={{ color: "black" }} />
        </IconButton>
        <Box>
          <Typography className={classes.title}>{title}</Typography>
          <Typography className={classes.Subtitle}>{Level} / 4</Typography>
        </Box>
        <IconButton onClick={GoBack}>
          <CloseIcon style={{ color: "black" }} />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
export default PaymentTitle;
