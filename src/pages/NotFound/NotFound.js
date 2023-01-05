import { Box, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    fontSize: 24,
    fontWeight: 700,
    textShadow: "0px 0px 7px 0px rgba(0,0,0,0.5)",
  },
  redirect: {
    marginTop: 50,
    fontSize: 18,
    color: "#ffd426",
    fontWeight: 900,
  },
  page: {
    marginTop: 50,
    fontSize: 18,
    color: "red",
    fontWeight: 900,
  },
}));
const NotFound = () => {
  const classes = useStyles();
  const locale = useSelector((state) => state.locale);
  const cities = useSelector((state) => state.city);
  const history = useHistory();
  return (
    <Box
      height="70vh"
      textAlign="center"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <Typography className={classes.root}>
        Page <hr />
        <span className={classes.page}>{history.location.pathname}</span>
        <hr /> NotFound
      </Typography>
      <Link
        to={`/${
          locale.current.locale === undefined ? "en" : locale.current.locale
        }/${cities.current.title}/shop`}
        className={classes.redirect}
      >
        Redirect Home
      </Link>
    </Box>
  );
};

export default NotFound;
