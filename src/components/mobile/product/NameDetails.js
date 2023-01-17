import React from "react";
import {
  Box,
  makeStyles,
  Typography,
} from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import { useDispatch, useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "30px 0",
    [theme.breakpoints.down("md")]: {
      margin: "30px 20px",
    },
  },
  title: {
    fontSize: 12,
    color: "gray",
  },
  Productname: {
    fontSize: 15,
    fontWeight: 700,
  },
  star: {
    fontSize: 12,
  },
  reviews: {
    fontSize: 12,
    color: "gray",
    margin: "0 10px",
  },
  purchases: {
    fontSize: 12,
    color: "#2aad2e",
  },
  brand: {
    color: "blue",
    fontSize: 12,
  },
}));
const NameDetails = ({detail}) => {
    const classes = useStyles();
    const productDetail = useSelector((state) => state.productDetail);
    const dispatch = useDispatch();
  return (
    <Box
      flexDirection="column"
      display="flex"
      justifyContent="center"
      marginTop="20px"
    >
      <Typography className={classes.brand}>Xiaomi</Typography>
      <Typography className={classes.Productname}>
        {detail?.name}
      </Typography>
      <Box display="flex" alignItems="center">
        <Rating
          className={classes.star}
          value={detail?.taxRate}
          readOnly
        />
        <Typography className={classes.reviews}>
          {detail?.like} reviews
        </Typography>
      </Box>
      <Typography className={classes.purchases}>
        {detail?.discount}% recommend
      </Typography>
    </Box>
  );
};

export default NameDetails;
