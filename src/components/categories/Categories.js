import { Box, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  image: {
    width: "100%",
    height: 150,
    cursor: "pointer",
    background: "black",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    objectFit: "cover",
    [theme.breakpoints.down("md")]: {
      width: "80%",
      height: "80%",
    },
  },
  title: {
    fontSize: 12,
    textAlign: "center",
    margin: "20px 0",
    maxHeight: 45,
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    "-webkit-line-clamp": 1,
    "-webkit-box-orient": "vertical",
    [theme.breakpoints.down("sm")]: {
      margin: "10px 0",
      fontSize: 11,
      width: "90%",
      "-webkit-line-clamp": 2,
    },
  },
}));

const Categories = (props) => {
  const classes = useStyles();
  const match = useRouteMatch({ path: "/:language/:city" });
  return (
    <Link to={`${match.url}/Products/${props.title}/page=1`}>
      <Box
        display="flex"
        justifyContent="center"
        flexDirection="column"
        alignItems="center"
      >
        <img
          className={classes.image}
          src={`https://nandwsouk.com/${props.image}`}
          alt={props.title}
        />
        <Typography className={classes.title}>{props.title}</Typography>
      </Box>
    </Link>
  );
};

export default Categories;
