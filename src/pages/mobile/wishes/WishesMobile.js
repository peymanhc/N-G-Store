import {
  Box,
  Button,
  CircularProgress,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React, { useEffect } from "react";
import Favoritesimage from "images/favorites.svg";
import { Link, useRouteMatch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import CardCart from "components/CardCart/CardCart";
import { getCarts } from "store/favorite/favorite.action";
const useStyles = makeStyles((theme) => ({
  root: {
    margin: "80px 15px",
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
    fontSize: 13,
  },
  signSubtext: {
    margin: "20px 0",
    color: "rgba(0,0,0,0.7)",
    fontSize: 11,
    textAlign: "center",
  },
}));

const WishesMobile = () => {
  const classes = useStyles();
  const match = useRouteMatch({ path: "/:language/:city" });
  const locale = useSelector((state) => state.locale);
  const cities = useSelector((state) => state.city);
  const profile = useSelector((state) => state.profile);
  const cartData = JSON.parse(localStorage.getItem("wishlist"));
  const favorite = useSelector((state) => state.favorite);
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(
      getCarts(profile?.detail?.data[0].id, match.params.language, "fav")
    );
  }, []);
  return (
    <Box margin={"60px 0"}>
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
              <img
                style={{ marginTop: "50px" }}
                width="170px"
                alt="favorate"
                src={Favoritesimage}
              />
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

export default WishesMobile;
