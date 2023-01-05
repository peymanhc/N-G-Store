import React, { useEffect } from "react";
import CartTable from "components/mobile/cartTable/CartTable";
import {
  Box,
  Button,
  Divider,
  InputBase,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { AddCoupon, getCarts } from "store/cart/cart.action";
import { Link, useRouteMatch } from "react-router-dom";
import { setIngredients } from "store/carts/carts.action";
import { useState } from "react";
const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: 20,
    fontWeight: 900,
    margin: "20px 15px",
  },
  totalprice: {
    fontSize: 12,
    fontWeight: 500,
  },
  lastprice: {
    fontSize: 17,
    fontWeight: 700,
  },
  purchase: {
    background: "#ffd426",
    color: "black",
    fontSize: 12,
    width: "100%",
    padding: "15px 20px",
    "&:hover": {
      background: "#ffc826",
    },
  },
  name: {
    fontSize: 11,
    fontWeight: 600,
    maxWidth: "50%",
  },
  price: {
    fontSize: 12,
    fontWeight: 900,
    maxWidth: "50%",
  },
  empty: {
    fontSize: 18,
    textAlign: "center",
    marginTop: 120,
    fontWeight: 600,
  },
  totalpriceBox: {
    position: "fixed",
    bottom: "57px",
    left: 0,
    right: 0,
    padding: "10px",
    width: "100%",
    backgroundColor: "white",
    zIndex: 10,
    borderTop: "1px solid rgba(0,0,0,0.1)",
    boxShadow: "0px 0px 18px -2px rgba(0,0,0,0.2)",
  },
  ordersummary: {
    width: "100%",
    border: "1px solid rgba(0,0,0,0.1)",
    borderRadius: 4,
    display: "flex",
    justifyContent: "space-between",
    marginTop: 10,
  },
  ordersummaryremove: {
    backgroundColor: "red",
    color: "white",
    borderRadius: 0,
    width: 120,
    "&:hover": {
      backgroundColor: "red",
    },
  },
  ordersummaryadd: {
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
  TaxDiscount: {
    fontSize: 11,
    margin: "10px 0",
    fontWeight: 800,
  },
}));
const MobileCart = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const match = useRouteMatch({ path: "/:language/:city" });
  const cartData = JSON.parse(localStorage.getItem("cart"));
  const currency = useSelector((state) => state.currency);
  const cart = useSelector((state) => state.cart);
  const profile = useSelector((state) => state.profile);
  const priceof = cart.allcarts.reduce(
    (acc, cur) => ({ ...acc, [cur.product.name]: cur.price }),
    {}
  );
  useEffect(() => {
    dispatch(
      getCarts(profile?.detail?.data[0].id, match.params.language, "cart")
    );
    dispatch(setIngredients(priceof));
  }, []);
  const Totalprice = [];
  const Reducecurrent = 100 * parseFloat(currency.current.value);
  const [ordersummary, setordersummary] = useState("");
  const AddCouponTax = (e) => {
    setordersummary(e.target.value);
    dispatch(
      AddCoupon(
        profile?.detail?.data[0].id,
        match.params.language,
        e.target.value
      )
    );
  };
  return (
    <Box margin="60px 0" marginBottom="140px" padding="0 15px">
      {cart.allcarts.length === 0 && cartData.length === 0 ? (
        <Typography className={classes.empty}>Cart is empty</Typography>
      ) : (
        <Typography>
          <Typography className={classes.title}>
            {cart.allcarts.length} Product
          </Typography>
          <Box display="flex" flexDirection="column" margin={"20px 0"}>
            {profile?.detail === null
              ? cartData?.map((item) => {
                  return (
                    <CartTable
                      id={item.pid}
                      image={
                        item?.properties?.images !== undefined
                          ? item.properties.images[0].url
                          : null
                      }
                      title={item?.properties?.name}
                      text={""}
                      price={item?.properties?.priceTaxIncl}
                      count={item?.cnt}
                    />
                  );
                })
              : cart.allcarts.map((item, i) => {
                  Totalprice.push(parseFloat(item?.price) * item?.count);
                  return (
                    <CartTable
                      id={item?.pid}
                      image={item?.product?.images[0].url}
                      title={item?.product?.name}
                      property={item}
                      text={""}
                      price={item?.price}
                      count={item?.count}
                    />
                  );
                })}
          </Box>
          <Box>
            <Box
              margin="10px 0"
              display="flex"
              flexDirection="column"
              justifyContent="space-between"
            >
              <Typography className={classes.totalprice}>
                Order Summary
              </Typography>
              <Box className={classes.ordersummary}>
                <InputBase
                  className={classes.ordersummaryinput}
                  placeholder="123456"
                  onChange={(e) => AddCouponTax(e)}
                  value={ordersummary}
                />
                {ordersummary === "" ? (
                  <Button className={classes.ordersummaryadd}>Add</Button>
                ) : (
                  <Button
                    onClick={() => setordersummary("")}
                    className={classes.ordersummaryremove}
                  >
                    Remove
                  </Button>
                )}
              </Box>
            </Box>
            {ordersummary === "" ? null : (
              <>
                <Typography className={classes.TaxDiscount}>
                  discount : test
                </Typography>
                <Typography
                  style={{
                    color: cart?.coupon?.msgFlag === "1" ? "red" : "green",
                  }}
                  className={classes.TaxDiscount}
                >
                  {cart?.coupon?.msgText}
                </Typography>
                <Divider />
              </>
            )}
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              marginTop="20px"
              className={classes.totalpriceBox}
            >
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
              >
                <Typography className={classes.totalprice}>
                  Total price
                </Typography>
                <Typography className={classes.lastprice}>
                  {currency?.current?.symbol}
                  {(
                    (Reducecurrent * Totalprice.reduce((a, b) => a + b, 0)) /
                    100
                  ).toFixed(2)}
                  {}
                </Typography>
              </Box>
              <Box>
                <Link to={`${match.url}/Payment`}>
                  <Button className={classes.purchase}>Continue and pay</Button>
                </Link>
              </Box>
            </Box>
          </Box>
        </Typography>
      )}
    </Box>
  );
};
export default MobileCart;
