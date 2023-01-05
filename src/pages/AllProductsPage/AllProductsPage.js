import {
  AppBar,
  Box,
  CircularProgress,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import DiscountCart from "components/discountCart/DiscountCart";
import SimplePagination from "components/SimplePagination/SimplePagination";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams, useRouteMatch } from "react-router";
import { Link } from "react-router-dom";
import { getonlyTodayData } from "store/layout/layout.action";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    margin: "30px 0",
  },
  redirect: {
    marginTop: 50,
    fontSize: 18,
    color: "#ffd426",
    fontWeight: 900,
  },
  page: {
    marginTop: 50,
    fontSize: 18,
    color: "red",
    fontWeight: 900,
  },
  banner: {
    borderRadius: 10,
    backgroundColor: "#d90552",
    width: "100%",
    padding: "20px",
    minHeight: 200,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
  },
  bannerTitle: {
    fontSize: 26,
    fontWeight: 800,
    textTransform: "capitalize",
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 500,
    textTransform: "capitalize",
    margin: "0 15px",
  },
  textnotFound: {
    fontSize: 24,
    fontWeight: 700,
    textShadow: "0px 0px 7px 0px rgba(0,0,0,0.5)",
  },
  redirect: {
    marginTop: 50,
    fontSize: 18,
    color: "#ffd426",
    fontWeight: 900,
  },
}));
const AllProductsPage = () => {
  const classes = useStyles();
  const layout = useSelector((state) => state.Layout);
  const match = useRouteMatch({ path: "/:language/:city" });
  let { id } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  useEffect(() => {
    setTimeout(() => {
      window.scroll(0, 0);
    }, 1000);
    dispatch(
      getonlyTodayData(match.params.language, match.params.city, "only_today")
    );
  }, []);
  console.log(id);
  return (
    <div className={classes.root}>
      {layout?.loading ? (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="50vh"
        >
          <CircularProgress
            style={{ width: "100px", height: "100px", color: "#fc0" }}
          />
        </Box>
      ) : (
        <>
          {id === "better-for-you" ? (
            <BetterForU />
          ) : id === "DaylyOff" ? (
            <Dayly />
          ) : id === "recommented-for-you" ? (
            <Recommenteds />
          ) : id === "new-products" ? (
            <NewProducts />
          ) : (
            <Box
              height="70vh"
              textAlign="center"
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
            >
              <Typography className={classes.textnotFound}>
                Page <hr />
                <span className={classes.page}>
                  {history.location.pathname}
                </span>
                <hr /> NotFound
              </Typography>
              <Link to={`/en/all-city/shop`} className={classes.redirect}>
                Redirect Home
              </Link>
            </Box>
          )}
        </>
      )}
    </div>
  );
};

const Dayly = () => {
  const classes = useStyles();
  const layout = useSelector((state) => state.Layout);
  const match = useRouteMatch({ path: "/:language/:city" });
  return (
    <>
      <Box className={classes.banner}>
        <Typography className={classes.bannerTitle}>
          Exciting discounts + free delivery
        </Typography>
      </Box>
      <Box>
        <Grid container>
          {layout?.onlyToday?.data !== undefined &&
            layout?.onlyToday?.data[0]?.products?.map((item, i) => (
              <Grid item xs={6} sm={4} md={3} xs={2}>
                <DiscountCart
                  key={i}
                  id={item.productDetails.id}
                  slug={
                    match.params.language === "en"
                      ? item.productDetails.translate.en
                      : match.params.language === "ar"
                      ? item.productDetails.translate.ar
                      : match.params.language === "fr"
                      ? item.productDetails.translate.fr
                      : "not-valid"
                  }
                  image={
                    item?.productDetails?.images[0]?.url
                      ? item?.productDetails?.images[0]?.url
                      : ""
                  }
                  price={item?.product_price}
                  ratednumber={item.productDetails.like}
                  rate={item.productDetails.taxRate}
                  title={item.product_name}
                  recommend={item.product_discount}
                  lastprice={item.product_after_discount}
                  translateslug={item.productDetails.translate.en}
                />
              </Grid>
            ))}
        </Grid>
        <Box
          marginTop="50px"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          {/* <SimplePagination
            count={75}
            //   page={1}
            //   handleChange={"handleChange"}
          /> */}
        </Box>
      </Box>
    </>
  );
};
const BetterForU = () => {
  const classes = useStyles();
  const betterforu = useSelector((state) => state.betterforu);
  const match = useRouteMatch({ path: "/:language/:city" });
  return (
    <>
      <Box className={classes.banner}>
        <Typography className={classes.bannerTitle}>Better For You</Typography>
      </Box>
      <Box>
        <Grid container>
          {betterforu?.data?.data !== undefined &&
            betterforu?.data?.data[0]?.products?.map((item, i) => (
              <Grid item xs={6} sm={4} md={3} xs={2}>
                <DiscountCart
                  key={i}
                  id={item.productDetails.id}
                  slug={
                    match.params.language === "en"
                      ? item.productDetails.translate.en
                      : match.params.language === "ar"
                      ? item.productDetails.translate.ar
                      : match.params.language === "fr"
                      ? item.productDetails.translate.fr
                      : "not-valid"
                  }
                  image={
                    item?.productDetails?.images[0]?.url
                      ? item?.productDetails?.images[0]?.url
                      : ""
                  }
                  price={item?.product_price}
                  ratednumber={item.productDetails.like}
                  rate={item.productDetails.taxRate}
                  title={item.product_name}
                  recommend={item.product_discount}
                  lastprice={item.product_after_discount}
                  translateslug={item.productDetails.translate.en}
                />
              </Grid>
            ))}
        </Grid>
        <Box
          marginTop="50px"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          {/* <SimplePagination
            count={75}
            //   page={1}
            //   handleChange={"handleChange"}
          /> */}
        </Box>
      </Box>
    </>
  );
};
const NewProducts = () => {
  const classes = useStyles();
  const layout = useSelector((state) => state.Layout);
  const match = useRouteMatch({ path: "/:language/:city" });
  return (
    <>
      <Box className={classes.banner}>
        <Typography className={classes.bannerTitle}>New Products</Typography>
      </Box>
      <Box>
        <Grid container>
          {layout?.newItems?.data !== undefined &&
            layout?.newItems?.data[0]?.products?.map((item, i) => (
              <Grid item xs={6} sm={4} md={3} xs={2}>
                <DiscountCart
                  key={i}
                  id={item.productDetails.id}
                  slug={
                    match.params.language === "en"
                      ? item.productDetails.translate.en
                      : match.params.language === "ar"
                      ? item.productDetails.translate.ar
                      : match.params.language === "fr"
                      ? item.productDetails.translate.fr
                      : "not-valid"
                  }
                  image={
                    item?.productDetails?.images[0]?.url
                      ? item?.productDetails?.images[0]?.url
                      : ""
                  }
                  price={item?.product_price}
                  ratednumber={item.productDetails.like}
                  rate={item.productDetails.taxRate}
                  title={item.product_name}
                  recommend={item.product_discount}
                  lastprice={item.product_after_discount}
                  translateslug={item.productDetails.translate.en}
                />
              </Grid>
            ))}
        </Grid>
        <Box
          marginTop="50px"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          {/* <SimplePagination
            count={75}
            //   page={1}
            //   handleChange={"handleChange"}
          /> */}
        </Box>
      </Box>
    </>
  );
};
const Recommenteds = () => {
  const classes = useStyles();
  const layout = useSelector((state) => state.Layout);
  const match = useRouteMatch({ path: "/:language/:city" });
  return (
    <>
      <Box className={classes.banner}>
        <Typography className={classes.bannerTitle}>Recommenteds</Typography>
      </Box>
      <Box>
        <Grid container>
          {layout?.recommented?.data !== undefined &&
            layout?.recommented?.data[0]?.products?.map((item, i) => (
              <Grid item xs={6} sm={4} md={3} xs={2}>
                <DiscountCart
                  key={i}
                  id={item.productDetails.id}
                  slug={
                    match.params.language === "en"
                      ? item.productDetails.translate.en
                      : match.params.language === "ar"
                      ? item.productDetails.translate.ar
                      : match.params.language === "fr"
                      ? item.productDetails.translate.fr
                      : "not-valid"
                  }
                  image={
                    item?.productDetails?.images[0]?.url
                      ? item?.productDetails?.images[0]?.url
                      : ""
                  }
                  price={item?.product_price}
                  ratednumber={item.productDetails.like}
                  rate={item.productDetails.taxRate}
                  title={item.product_name}
                  recommend={item.product_discount}
                  lastprice={item.product_after_discount}
                  translateslug={item.productDetails.translate.en}
                />
              </Grid>
            ))}
        </Grid>
        <Box
          marginTop="50px"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          {/* <SimplePagination
            count={75}
            //   page={1}
            //   handleChange={"handleChange"}
          /> */}
        </Box>
      </Box>
    </>
  );
};

export default AllProductsPage;
