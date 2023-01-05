import React, { useEffect, useState } from "react";
import {
  Box,
  CircularProgress,
  Divider,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { getDetail } from "store/productDetail/productDetail.action";
import { useRouteMatch } from "react-router-dom";
import { getBetterForU } from "store/betterforu/betterforu.action";
import Slider from "components/mobile/product/Slider";
import NameDetails from "components/mobile/product/NameDetails";
import Purchase from "components/mobile/product/Purchase";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ProductTopBar from "components/mobile/product/ProductTopBar";
import PostSlider from "components/mobile/postSlider/PostSlider";
import CardPost from "components/cardPost/CardPost";
import ReactHtmlParser from "react-html-parser";
import Comment from "components/mobile/product/Comment";
import {
  saveFavoriteOnline,
} from "store/favorite/favorite.action";
const useStyles = makeStyles((theme) => ({
  root: {
    margin: "80px 15px",
  },
  title: {
    fontSize: 16,
    fontWeight: 700,
    color: "black",
    textTransform: "capitalize",
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
  decriptions: {
    borderBottom: "1px dotted black",
  },
  itemtxt: {
    fontSize: 12,
    padding: "5px 0",
  },
  detailparser: {
    fontSize: 12,
  },
  ratedvalue: {
    fontSize: 18,
    fontWeight: 900,
    margin: "0 10px",
  },
  Peoplereated: {
    fontSize: 12,
    color: "rgba(0,0,0,0.5)",
  },
}));
const ProductMobile = () => {
  const classes = useStyles();
  const productDetail = useSelector((state) => state.productDetail);
  const profile = useSelector((state) => state.profile);
  const dispatch = useDispatch();
  const match = useRouteMatch({ path: "/:language/:city/Product/:slug?/:id" });
  const betterforu = useSelector((state) => state.betterforu);
  const [Loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);

    dispatch(
      getDetail(match.params.language, match.params.city, match.params.id)
    );
    dispatch(
      getBetterForU(match.params.city, match.params.language, "better_for_you")
    );
    window.scroll(0, 0);
  }, []);
  const getProductDetail = productDetail?.data?.data;
  const HandleAddToFavorite = () => {
    profile?.detail?.data
      ? dispatch(
          saveFavoriteOnline(
            profile?.detail?.data[0].data.displayName,
            match.params.language,
            "date",
            "count",
            getProductDetail,
            match.params.id,
            "fav"
          )
        )
      : setTimeout(() => {
          window.location.replace(`/${match.params.language}/all-city/Login`);
        }, 1300);
  };
  return (
    <>
      <ProductTopBar
        addtofav={HandleAddToFavorite}
        title={getProductDetail?.name}
      />
      {productDetail.loading ? (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          marginTop="180px"
        >
          <CircularProgress style={{ color: "red", marginBottom: 50 }} />
        </Box>
      ) : (
        <Box className={classes.root}>
          <Slider detail={getProductDetail} />
          <NameDetails detail={getProductDetail} />
          <Purchase detail={getProductDetail} />
          <Typography className={classes.title}>Category</Typography>
          {getProductDetail?.categories?.map((item, i) => (
            <>
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                padding="5px 0"
                margin="5px 0"
                className="cursor-pointer"
              >
                <Typography variant="inherit" className="text-xs">
                  {item}
                </Typography>
                <ChevronRightIcon />
              </Box>
              <Divider />
            </>
          ))}
          <Typography
            style={{ textAlign: "center", margin: "30px 0" }}
            className={classes.title}
          >
            Smilar Products
          </Typography>
          <PostSlider itemslide={1} center={true}>
            {betterforu?.data?.data?.products?.map((item, i) => (
              <CardPost
                addbtn={true}
                key={i}
                id={item.productDetails.id}
                slug={
                  match.params.language === "en"
                    ? item.translate.en
                    : match.params.language === "ar"
                    ? item.translate.ar
                    : match.params.language === "fr"
                    ? item.translate.fr
                    : "not-valid"
                } 
                image={item.images[0]?.src ? item.images[0]?.src : null}
                price={item.priceTaxIncl}
                ratednumber={item.like}
                rate={item.taxRate}
                title={item.name}
                recommend={item.taxRate}
              />
            ))}
          </PostSlider>
          <Typography
            style={{ textAlign: "center", margin: "30px 0" }}
            className={classes.title}
          >
            Characteristics and description
          </Typography>
          <Typography className={classes.detailparser}>
            {ReactHtmlParser(getProductDetail?.description)}
          </Typography>
          {Object.entries(proDetail)
            .slice(0, 6)
            .map(([key, value]) => {
              return (
                <Box
                  justifyContent="space-between"
                  display="flex"
                  className={classes.decriptions}
                >
                  <Typography variant="subtitle2" className={classes.itemtxt}>
                    {key}
                  </Typography>
                  <Typography variant="subtitle2" className={classes.itemtxt}>
                    {value}
                  </Typography>
                </Box>
              );
            })}
          <Comment />
        </Box>
      )}
    </>
  );
};
const proDetail = {
  size: 20,
  Flowerloads: "the black",
  BrandName: "Nike",
  type: "belt",
  weight: "200 g",
  width: "5 cm",
  HardwareMaterial: "plastic",
};
export default ProductMobile;
