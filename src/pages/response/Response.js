import { Box, Button, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import SuccessImg from "images/successfulpayment.png";
const useStyles = makeStyles((theme) => ({
  root: {
    margin: "80px 0",
    minHeight: "60vh",
    [theme.breakpoints.down("md")]: {
      minHeight: "40vh",
    },
  },
  title: {
    fontSize: 25,
    fontWeight: 700,
    [theme.breakpoints.down("md")]: {
      fontSize: 20,
      fontWeight: 500,
    },
  },
  favoratewrapper: {
    margin: "80px auto",
    [theme.breakpoints.down("md")]: {
      padding: "50px",
    },
  },
  loginbtn: {
    width: 100,
    padding: 10,
    backgroundColor: "#ffd426",
    "&:hover": {
      backgroundColor: "#ffc426",
    },
  },
  signText: {
    marginTop: 20,
    fontWeight: 700,
    [theme.breakpoints.down("md")]: {
      fontSize: 18,
      fontWeight: 500,
    },
  },
  signSubtext: {
    textAlign: "center",
    margin: "20px 0",
    color: "rgba(0,0,0,0.7)",
    fontSize: 14,
  },
  image: {
    width: 400,
    [theme.breakpoints.down("md")]: {
      width: 200,
    },
  },
}));
const Response = () => {
  const classes = useStyles();
  const match = useRouteMatch({ path: "/:language/:city" });
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      className={classes.favoratewrapper}
    >
      <img className={classes.image} alt="favorate" src={SuccessImg} />
      <Typography className={classes.signText} variant="h5">
        Success
      </Typography>
      <Typography className={classes.signSubtext} variant="subtitle2">
        This way you can see your saved items on any device. It's comfortable!
      </Typography>
    </Box>
  );
};

export default Response;
