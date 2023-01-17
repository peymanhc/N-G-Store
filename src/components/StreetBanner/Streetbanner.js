import { Box, makeStyles, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: 250,
    margin: "50px auto",
  },
  wrapper: {
    padding: 20,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
  },
  bannerTitle: {
    fontSize: 30,
    letterSpacing: "3px",
    marginBottom: 20,
    fontWeight: 500,
    textTransform: "uppercase",
  },
  bannerSubtitle: {
    fontSize: 26,
    fontWeight: 800,
    cursor: "pointer",
    textDecoration: "underline",
  },
  img: {
    width: 240,
    height: "100%",
    objectFit: "contain",
  },
}));
const Streetbanner = ({
  bgColor,
  ProductName,
  buyBtn,
  color,
  textSize,
  imgRight,
  imgLeft,
}) => {
  const classes = useStyles();
  return (
    <Box style={{ backgroundColor: bgColor }} className={classes.root}>
      <Box style={{ color: color }} className={classes.wrapper}>
        <img className={classes.img} src={imgLeft} />
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
        >
          <Typography
            style={{ fontSize: textSize }}
            className={classes.bannerTitle}
          >
            {ProductName}
          </Typography>
          <Typography className={classes.bannerSubtitle}>{buyBtn}</Typography>
        </Box>
        <img className={classes.img} src={imgRight} />
      </Box>
    </Box>
  );
};

export default Streetbanner;
