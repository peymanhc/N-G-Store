import {
  Box,
  Button,
  CircularProgress,
  Divider,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React, { useEffect } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import Favoritesimage from "images/favorites.svg";
import { useDispatch, useSelector } from "react-redux";
import { getOrders } from "store/cart/cart.action";
import OrdersCard from "components/OrdersCard/OrdersCard";
import OrderCard from "components/mobile/ordersMobile/OrderCard";
const useStyles = makeStyles((theme) => ({
  root: {
    margin: "80px 0px",
    minHeight: "60vh",
  },
  title: {
    fontSize: 25,
    fontWeight: 700,
  },
  favoratewrapper: {
    marginTop: 80,
    margin: "auto",
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
    fontSize: 16,
  },
  signSubtext: {
    margin: "20px 0",
    color: "rgba(0,0,0,0.7)",
    textAlign: "center",
    fontSize: 12,
  },
  emptytxt: {
    textAlign: "center",
    fontSize: 25,
    fontWeight: 700,
    textShadow: "6px 7px 4px rgba(0,0,0,0.2)",
  },
  helpTitle: {
    fontSize: 18,
    fontWeight: 700,
    textAlign: "start",
  },
  helpSubtitle: {
    fontSize: 14,
    textAlign: "start",
    color: "#3b2eb3",
  },
  aboutusbtn: {
    marginTop: 50,
    padding: "10px 20px",
    backgroundColor: "#fc0",
    "&:hover": {
      backgroundColor: "#fc0",
    },
  },
}));

const OrdersMobile = () => {
  const locale = useSelector((state) => state.locale);
  const cities = useSelector((state) => state.city);
  const profile = useSelector((state) => state.profile);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const match = useRouteMatch({ path: "/:language/:city" });
  const classes = useStyles();

  useEffect(() => {
    dispatch(
      getOrders(
        profile?.detail?.data[0].id,
        match.params.language,
        0,
        10,
        "AZ",
        "yearly",
        0
      )
    );
  }, [profile?.detail?.data[0].id]);
  return (
    <Box className={classes.root}>
      {profile.loading === true ? (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          marginTop="20px"
        >
          <CircularProgress style={{ color: "red" }} />
        </Box>
      ) : (
        <>
          {profile?.detail?.data ? (
            <>
              {cart?.orders.data?.length === 0 ? (
                <Typography className={classes.emptytxt}>
                  Cart is Empty
                </Typography>
              ) : (
                <Box>
                  {cart?.orders.data?.map((item) => {
                    return (
                      <Box key={item.id} margin="15px auto">
                        <OrderCard id={item.id} detail={item} />
                      </Box>
                    );
                  })}
                </Box>
              )}
            </>
          ) : (
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              flexDirection="column"
              className={classes.favoratewrapper}
            >
              <img alt="favorate" src={Favoritesimage} />
              <Typography className={classes.signText} variant="h5">
                Sign in to your account
              </Typography>
              <Typography className={classes.signSubtext} variant="subtitle2">
                This way you can see your saved items on any device. It's
                comfortable!
              </Typography>
              <Link
                to={`/${
                  locale.current.locale === undefined
                    ? "en"
                    : locale.current.locale
                }/${cities.current.title}/Login`}
              >
                <Button className={classes.loginbtn}>Login</Button>
              </Link>
            </Box>
          )}
        </>
      )}
    </Box>
  );
};

export default OrdersMobile;
