import { Box, makeStyles, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: 150,
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
    fontWeight: 500,
    color: "black",
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
  discountBox: {
    backgroundColor: "#27357b",
    margin: "0 20px",
    padding: "15px 20px",
    maxWidth: "220px",
    textAlign: "center",
  },
}));
const OffStreetbanner = ({
  bgColor,
  color,
  text1,
  text2,
  textSize,
  discount1,
  discount2,
}) => {
  const classes = useStyles();
  return (
    <Box style={{ backgroundColor: bgColor }} className={classes.root}>
      <Box style={{ color: color }} className={classes.wrapper}>
        <Box width="60%" className={classes.discountBox}>
          {discount1}
        </Box>
        <Box margin="0 20px" width="100%">
          <Typography
            style={{ fontSize: textSize }}
            className={classes.bannerTitle}
          >
            {text1}
          </Typography>
        </Box>
        <Box width="60%" className={classes.discountBox}>
          {discount2}
        </Box>
        <Box margin="0 20px" width="100%">
          <Typography
            style={{ fontSize: textSize }}
            className={classes.bannerTitle}
          >
            {text2}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default OffStreetbanner;
