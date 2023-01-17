import React from "react";
import { Box, makeStyles, Typography } from "@material-ui/core";
import { Link, useRouteMatch } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "auto",
    padding: "0 20px",
  },
  wrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: 120,
    [theme.breakpoints.down(900)]: {
      width: 90,
    },
  },
  img: {
    width: "100%",
    height: 120,
    borderRadius: "100%",
    border: "2px solid #f3e008",
    [theme.breakpoints.down(900)]: {
      height: 90,
    },
  },
  title: {
    marginTop: 5,
    fontSize: 12,
    fontWeight: 700,
    color: "#6d6a75",
    textAlign: "center",
  },
}));
const SubCategories = ({ image, title, key }) => {
  const classes = useStyles();
  const match = useRouteMatch({ path: "/:language/:city" });
  return (
    <Link
      to={`${match.url}/Products/${title}/page=1`}
      key={key}
      className={classes.root}
    >
      <Box className={classes.wrapper}>
        <img className={classes.img} src={`https://nandwsouk.com/${image}`} />
        <Typography className={classes.title}>{title}</Typography>
      </Box>
    </Link>
  );
};

export default SubCategories;
