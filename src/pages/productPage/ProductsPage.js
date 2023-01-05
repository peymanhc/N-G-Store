import React, { useEffect, useState } from "react";
import {
  Box,
  CircularProgress,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import CardPost from "components/cardPost/CardPost";
import Posts from "components/posts/Posts";
import Modifications from "../../components/productPage/Modifications";
import ImageGallery from "../../components/productPage/ImageGallery";
import Navigation from "../../components/productPage/Navigation";
import SimpleTabs from "components/SimpleTabs/SimpleTabs";
import Additem from "../../components/productPage/Additem";
import Comments from "../../components/productPage/Comments";
import { useDispatch, useSelector } from "react-redux";
import { getDetail } from "store/productDetail/productDetail.action";
import { Link, useRouteMatch } from "react-router-dom";
import { getBetterForU } from "store/betterforu/betterforu.action";
import {
  AddToFavrite,
  saveFavoriteOnline,
} from "store/favorite/favorite.action";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "30px 20px",
  },
  title: {
    fontSize: 12,
    color: "gray",
  },
  Productname: {
    marginTop: 20,
    fontSize: 25,
    fontWeight: 700,
    [theme.breakpoints.down("md")]: {
      textAlign: "center",
    },
  },
  star: {
    fontSize: 12,
  },
  reviews: {
    fontSize: 14,
    color: "gray",
    margin: "0 10px",
  },
  addtofavorate: {
    fontSize: 12,
    color: "gray",
    "&:hover": {
      color: "#64e",
      cursor: "pointer",
    },
  },
  purchases: {
    fontSize: 12,
    margin: "0 10px",
    color: "#2aad2e",
  },
  itemslikethis: {
    margin: "50px 0px",
    fontSize: 28,
    fontWeight: 700,
    textAlign: "center",
  },
  footer: {
    margin: "100px 0",
    fontSize: 14,
    color: "rgba(0,0,0,0.6)",
  },
  detailproduct: {
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
  },
}));
const ProductsPage = () => {
  const classes = useStyles();
  const productDetail = useSelector((state) => state.productDetail);
  const dispatch = useDispatch();
  const match = useRouteMatch({ path: "/:language/:city/Product/:slug?/:id" });
  const profile = useSelector((state) => state.profile);
  const betterforu = useSelector((state) => state.betterforu);
  const [Loading, setLoading] = useState(true);
  const [SIZE_ID, setSIZE_ID] = useState("");
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      window.scroll(0, 0);
    }, 2000);
    dispatch(
      getDetail(match.params.language, match.params.city, match.params.id)
    );
    dispatch(
      getBetterForU(match.params.city, match.params.language, "better_for_you")
    );
    setSIZE_ID(
      productDetail?.data?.data?.properties?.map((item, i) => item?.id)
    );
    // eslint-disable-next-line
  }, []);
  const HandleAddToFavorite = () => {
    profile?.detail?.data
      ? dispatch(
          saveFavoriteOnline(
            profile?.detail?.data[0].id,
            match.params.language,
            1,
            "",
            "fav",
            match.params.id,
            "fav"
          )
        )
      : setTimeout(() => {
          window.location.replace(`/${match.params.language}/all-city/Login`);
        }, 1300);
  };
  const getProductDetail = productDetail?.data?.data;
  return (
    <Box className={classes.root}>
      {productDetail.loading === true ? (
        <Box
          height="60vh"
          display="flex"
          justifyContent="center"
          alignItems="center"
          marginTop="20px"
        >
          <CircularProgress style={{ color: "#fc0", width: 80, height: 80 }} />
        </Box>
      ) : (
        <>
          <Navigation detail={productDetail?.data?.data} />
          <Box display="flex" alignItems="center" className={classes.title}>
            Products .
            {getProductDetail?.categories?.map((item) => (
              <Typography style={{ margin: "0 10px", fontSize: 11 }}>
                {item}
              </Typography>
            ))}
          </Box>
          <Typography className={classes.Productname}>
            {getProductDetail?.name}
          </Typography>
          <Box
            className={classes.detailproduct}
            display="flex"
            alignItems="center"
          >
            <Rating
              className={classes.star}
              value={getProductDetail?.taxRate}
              readOnly
            />
            <Typography className={classes.reviews}>
              {getProductDetail?.like} reviews
            </Typography>
            <Box
              onClick={HandleAddToFavorite}
              className={classes.addtofavorate}
            >
              <Typography className={classes.addtofavorate}>
                <FavoriteBorderIcon style={{ margin: "5px", fontSize: 17 }} />
                Add To favorites
              </Typography>
            </Box>
            <Typography className={classes.purchases}>
              65 purchases in 2 months
            </Typography>
            <Typography className={classes.purchases}>
              {getProductDetail?.discount}% recommend
            </Typography>
          </Box>
          <Grid style={{ marginTop: 20 }} container>
            <Grid item xs={12} md={8}>
              <ImageGallery />
            </Grid>
            <Grid item xs={12} md={4}>
              <Modifications detail={productDetail?.data?.data} />
            </Grid>
          </Grid>
          <Grid style={{ marginTop: 20 }} container>
            <Grid item xs={12} md={4}>
              <Additem detail={productDetail?.data?.data} />
            </Grid>
            <Grid item xs={12} md={8}>
              <SimpleTabs detail={productDetail?.data?.data} />
              <Comments />
            </Grid>
          </Grid>
          <Typography className={classes.itemslikethis}>
            Looking with this item
          </Typography>
          {Loading ? (
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              marginTop="20px"
            >
              <CircularProgress style={{ color: "#fc0" }} />
            </Box>
          ) : (
            <Posts itemsDesktop={5}>
              {betterforu?.data?.data !== undefined &&
                betterforu?.data?.data[0]?.products?.map((item, i) => (
                  <button
                    onClick={() => {
                      window.location.reload();
                    }}
                  >
                    <CardPost
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
                  </button>
                ))}
            </Posts>
          )}
          <Typography className={classes.footer}>
            Information on technical characteristics, delivery set, country of
            manufacture and appearance of the product is for reference only.
          </Typography>
        </>
      )}
    </Box>
  );
};
export default ProductsPage;
