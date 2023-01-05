import {
  Box,
  Button,
  CircularProgress,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React, { useEffect } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import Favoritesimage from "images/favorites.svg";
import { useDispatch, useSelector } from "react-redux";
import CardCart from "components/CardCart/CardCart";
import { getCarts } from "store/cart/cart.action";
const useStyles = makeStyles((theme) => ({
  root: {
    margin: "80px 0",
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
  },
  signSubtext: {
    margin: "20px 0",
    color: "rgba(0,0,0,0.7)",
    fontSize: 14,
  },
}));

const Wishlist = () => {
  const classes = useStyles();
  const locale = useSelector((state) => state.locale);
  const cities = useSelector((state) => state.city);
  const profile = useSelector((state) => state.profile);
  const favorite = useSelector((state) => state.favorite);
  const dispatch = useDispatch();
  const match = useRouteMatch({ path: "/:language/:city" });
  useEffect(() => {
    dispatch(
      getCarts(profile?.detail?.data[0].id, match.params.language, "fav")
    );
  }, []);
  const cartData = JSON.parse(localStorage.getItem("wishlist"));
  return (
    <Box className={classes.root}>
      <Typography className={classes.title} variant="h4">
        Your Favorates List
      </Typography>
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
              {favorite?.allcarts?.map((item) => {
                return (
                  <CardCart
                    id={item?.pid}
                    image={item?.product?.images[0]?.url}
                    title={`You Like  ${item?.product?.name}`}
                    text={item?.properties?.properties?.categories[0]}
                    price={item?.price}
                    count={item.cnt}
                    wish={true}
                  />
                );
              })}
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

export default Wishlist;
