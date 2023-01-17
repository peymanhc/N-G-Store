import {
  Box,
  Button,
  Divider,
  InputBase,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
const useStyles = makeStyles((theme) => ({
  root: {
    padding: 20,
    border: "1px solid rgba(0,0,0,0.1)",
  },
  off: {
    color: "red",
    fontWeight: 900,
  },
  totalprice: {
    fontSize: 18,
    fontWeight: 900,
  },
  purchase: {
    background: "#ffd426",
    color: "black",
    width: "100%",
    padding: "15px 20px",
    "&:hover": {
      background: "#ffc826",
    },
  },
  ordersummary: {
    width: "100%",
    border: "1px solid rgba(0,0,0,0.1)",
    borderRadius: 4,
    display: "flex",
    justifyContent: "space-between",
    marginTop: 10,
  },
  ordersummarybtn: {
    backgroundColor: "#ffd426",
    color: "black",
    borderRadius: 0,
    width: 120,
    "&:hover": {
      backgroundColor: "#ffd426",
    },
  },
  ordersummaryinput: {
    width: "100%",
    padding: "2px 10px",
  },
  name: {
    fontSize: 12,
    width: 150,
    height: 20,
    color: "rgba(0,0,0,0.7)",
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    "-webkit-line-clamp": 1,
    "-webkit-box-orient": "vertical",
  },
}));
const CartPrice = (props) => {
  const classes = useStyles();
  const carts = useSelector((state) => state.carts);
  const cartData = JSON.parse(localStorage.getItem("cart"));
  const profile = useSelector((state) => state.profile);
  const obj = carts?.ingredients;
  var cartingredient = Object.keys(obj).map((key) => [Number(key), obj[key]]);
  let allPrices = [];
  return (
    <Box className={classes.root}>
      <Box
        margin="10px 0"
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
      >
        <Typography className={classes.totalprice}>Order Summary</Typography>
        <Box className={classes.ordersummary}>
          <InputBase
            className={classes.ordersummaryinput}
            placeholder="123456"
          />
          <Button className={classes.ordersummarybtn}>Remove</Button>
        </Box>
      </Box>
      <>
        {profile?.detail === null
          ? cartData?.map((item, i) => (
              <Box key={i} display="flex" justifyContent="space-between">
                <Typography className={classes.name}>
                  {item?.properties?.properties?.name}
                </Typography>
                <Typography style={{ fontSize: 10 }}>
                  * {cartingredient[1]}
                </Typography>
                <Typography>
                  ${item?.properties?.properties?.priceTaxIncl}
                </Typography>
              </Box>
            ))
          : Object.entries(carts.ingredients).map(([key, value = 0], i) => {
              allPrices.push(
                props?.price === undefined ? null : props?.price[i] * value
              );
              return (
                <Box
                  key={i}
                  display={value === 0 ? "none" : "flex"}
                  justifyContent="space-between"
                >
                  <Typography className={classes.name}>{key}</Typography>
                  <Typography style={{ fontSize: 10 }}>{value}</Typography>
                  <Typography>
                    $
                    {props?.price === undefined
                      ? null
                      : props?.price[i] * value}
                  </Typography>
                </Box>
              );
            })}
      </>
      <Divider />
      <Box marginTop="20px" display="flex" justifyContent="space-between">
        <Typography className={classes.totalprice}>Total price</Typography>
        <Typography className={classes.totalprice}>
          $ {allPrices.reduce((a, b) => a + b, 0)}
        </Typography>
      </Box>
      <Box marginTop="20px" display="flex" justifyContent="space-between">
        <Button className={classes.purchase}>Check out</Button>
      </Box>
    </Box>
  );
};

export default CartPrice;
