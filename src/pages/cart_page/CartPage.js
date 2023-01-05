import {
  Box,
  Button,
  Divider,
  Grid,
  InputBase,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import CardCart from "../../components/CardCart/CardCart";
import { useDispatch, useSelector } from "react-redux";
import { Link, useRouteMatch } from "react-router-dom";
import { AddCoupon, getCarts } from "store/cart/cart.action";
import { setIngredients } from "store/carts/carts.action";
import { FormattedMessage } from "react-intl";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "50px 0",
  },
  rootbox: {
    marginTop: 20,
  },
  title: {
    fontSize: 25,
    fontWeight: 800,
  },
  cartRoot: {
    border: "1px solid rgba(0,0,0,0.1)",
    padding: 20,
    borderRadius: 4,
    margin: 10,
  },
  root2: {
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
  productname: {
    fontSize: 14,
    fontWeight: 700,
    width: 200,
    height: 20,
    textTransform: "uppercase",
    color: "rgba(0,0,0,0.9)",
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    "-webkit-line-clamp": 1,
    "-webkit-box-orient": "vertical",
  },
  taxestxt: {
    fontSize: 12,
    fontWeight: 700,
    marginTop: "5px",
    textAlign: "end",
  },
}));

const CartPage = () => {
  const classes = useStyles();
  const cartData = JSON.parse(localStorage.getItem("cart"));
  const dispatch = useDispatch();
  const match = useRouteMatch({ path: "/:language/:city" });
  const profile = useSelector((state) => state.profile);
  const currency = useSelector((state) => state.currency);
  const cart = useSelector((state) => state.cart);
  const Totalprice = [];
  const priceof = cart.allcarts.reduce(
    (acc, cur) => ({ ...acc, [cur.product.name]: cur.price }),
    {}
  );
  const [ordersummary, setordersummary] = useState("");
  useEffect(() => {
    dispatch(setIngredients(priceof));
    dispatch(
      getCarts(profile?.detail?.data[0].id, match.params.language, "cart")
    );
  }, [profile?.detail?.data[0].id]);
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
  const Reducecurrent = 100 * parseFloat(currency.current.value);
  return (
    <Box className={classes.root}>
      <Typography className={classes.title} variant="h4">
        <FormattedMessage
          id="cart.Your_Cart"
          defaultMessage="This is Your Cart"
        />{" "}
        (
        <FormattedMessage id="cart.Your_Cart_items" defaultMessage="items" />)
      </Typography>

      <Grid className={classes.rootbox} container>
        <Grid item xs={12} md={8}>
          <Box className={classes.cartRoot}>
            {profile?.detail === null
              ? cartData?.map((item) => {
                  Totalprice.push(
                    parseFloat(item?.properties?.priceTaxIncl) * item?.cnt
                  );
                  return (
                    <CardCart
                      id={item.pid}
                      image={
                        item?.properties?.images !== undefined
                          ? item.properties.images[0].url
                          : null
                      }
                      brand={item?.properties?.brand.title}
                      title={item?.properties?.name}
                      text={""}
                      price={item?.properties?.priceTaxIncl}
                      count={item?.cnt}
                      wishes={false}
                    />
                  );
                })
              : cart.allcarts.map((item, i) => {
                  Totalprice.push(parseFloat(item?.price) * item?.count);
                  return (
                    <CardCart
                      key={i}
                      property={item}
                      id={item?.pid}
                      image={item?.product?.images[0].url}
                      title={item?.product?.name}
                      text={""}
                      price={item?.price}
                      count={item?.count}
                      wishes={false}
                    />
                  );
                })}
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box className={classes.cartRoot}>
            <Box className={classes.root2}>
              <Box
                margin="10px 0"
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
              >
                <Typography className={classes.totalprice}>
                  <FormattedMessage
                    id="cart.Order_Summary"
                    defaultMessage="Order Summary"
                  />
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
              <Box>
                <Box display="flex" justifyContent="space-between">
                  <Typography className={classes.productname}>
                    Subtotal
                  </Typography>
                  <Typography
                    style={{ width: "auto" }}
                    className={classes.productname}
                  >
                    {currency?.current?.symbol}{" "}
                    {(Reducecurrent * Totalprice.reduce((a, b) => a + b, 0)) /
                      100}
                  </Typography>
                </Box>
                <Box display="flex" justifyContent="space-between">
                  <Typography className={classes.productname}>
                    shipping
                  </Typography>
                  <Typography
                    style={{ width: "auto" }}
                    className={classes.productname}
                  >
                    Free
                  </Typography>
                </Box>
                <Divider style={{ marginTop: "10px" }} />
              </Box>
              <Box
                marginTop="10px"
                display="flex"
                justifyContent="space-between"
              >
                <Typography className={classes.totalprice}>
                  Total price
                </Typography>
                <Typography className={classes.totalprice}>
                  {currency?.current?.symbol}{" "}
                  {(Reducecurrent * Totalprice.reduce((a, b) => a + b, 0)) /
                    100}
                </Typography>
              </Box>
              <Divider style={{ marginTop: "10px" }} />
              <Typography className={classes.taxestxt}>
                <FormattedMessage
                  id="cart.Your_Cart"
                  defaultMessage="Including all taxes/duties"
                />
              </Typography>
              <Box
                marginTop="20px"
                display="flex"
                justifyContent="space-between"
              >
                <Link style={{ width: "100%" }} to={`${match.url}/Payment/`}>
                  <Button className={classes.purchase}>Check out</Button>
                </Link>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CartPage;
