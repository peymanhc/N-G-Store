import {
  Box,
  Button,
  makeStyles,
  Typography,
  IconButton,
  CircularProgress,
} from "@material-ui/core";
import NumberInput from "components/NumberInput/NumberInput";
import CardPost from "components/cardPost/CardPost";
import Posts from "components/posts/Posts";
import CloseIcon from "@material-ui/icons/Close";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getBetterForU } from "store/betterforu/betterforu.action";

const useStyles = makeStyles((theme) => ({
  modalBox: {
    position: "relative",
    height: "100%",
    width: "100%",
  },
  itemadded: {
    color: "#3f9986",
    fontSize: 15,
    fontWeight: 700,
    display: "flex",
    alignItems: "end",
    justifyContent: "space-between",
    width: 140,
    padding: "0 6px",
  },
  modify: {
    border: "1px solid rgba(0,0,0,0.2)",
    borderRadius: 5,
    margin: "20px 0",
    minHeight: 50,
    width: "100%",
    padding: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  imagemodal: {
    width: 65,
    height: 65,
    objectFit: "cover",
    border: "1px solid rgba(0,0,0,0.1)",
  },
  modaltitle: {
    fontSize: 14,
    fontWeight: 700,
    color: "rgba(0,0,0,0.6)",
  },
  buttonsIngredientModal: {
    width: 40,
    height: 40,
    backgroundColor: "#fc0",
    fontSize: 20,
    "&:hover": {
      backgroundColor: "#fa0",
    },
  },
  checkoutBox: {
    margin: "10px 0",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  checkoutmodal: {
    backgroundColor: "#ffcc00",
    color: "black",
    width: "190px",
    padding: "11px",
    fontSize: 12,
    "&:hover": {
      backgroundColor: "#ffcc00",
    },
  },
  pricemodal: {
    fontSize: 15,
    fontWeight: 600,
    color: "rgba(0,0,0,0.5)",
  },
  modalSlider: {
    backgroundColor: "#fafafa",
    padding: "5px",
  },
}));
const Modalcart = ({
  add,
  remove,
  item,
  data,
  match,
  close,
  Loading,
  productname,
  productPrice,
  productImage,
}) => {
  const classes = useStyles();
  const currency = useSelector((state) => state.currency);
  const Reducecurrent = 100 * parseFloat(currency.current.value);
  const cardPrice = parseFloat(productPrice);
  const DiscountPrice = (Reducecurrent * cardPrice) / 100;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      getBetterForU(match.params.language, match.params.city, "better_for_you")
    );
  }, []);
  return (
    <Box className={classes.modalBox}>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        width="100%"
      >
        <IconButton onClick={close} style={{ padding: "0" }}>
          <CloseIcon />
        </IconButton>
        <Typography className={classes.itemadded}>
          <ShoppingBasketIcon />
          Added to cart
        </Typography>
      </Box>
      <Box className={classes.modify}>
        <Box display="flex" alignItems="center">
          <img
            className={classes.imagemodal}
            alt=""
            src={`https://nandwsouk.com/${productImage}`}
          />
          <Box margin="0 10px">
            <Typography className={classes.modaltitle}>
              {productname}
            </Typography>
            <Typography className={classes.modaltitle}>
              {currency?.current?.symbol}
              {DiscountPrice}
            </Typography>
          </Box>
        </Box>
        <Box width="200px">
          {Loading ? (
            <Box display="flex" width="100%" justifyContent="center" >
             <CircularProgress style={{ color: "#fc0" }} />
            </Box>
          ) : (
            <NumberInput
              increase={add}
              decrease={remove}
              val={item}
              min={0}
              max={5}
              className={classes.buttonsIngredientModal}
            />
          )}
        </Box>
      </Box>
      <Box className={classes.checkoutBox}>
        <Box display="flex" justifyContent="center" flexDirection="column">
          <Typography className={classes.pricemodal}>
            Number of products : {item}
          </Typography>
          <Typography className={classes.pricemodal}>
            Total Price : {currency?.current?.symbol}
            {item * DiscountPrice}
          </Typography>
        </Box>
        <Link to={`/${match.params.language}/${match.params.city}/Payment/`}>
          <Button className={classes.checkoutmodal}>Check Out</Button>
        </Link>
      </Box>
      <Box className={classes.modalSlider}>
        <Typography style={{ marginTop: "5px" }} className={classes.pricemodal}>
          Buyers have purchased these products :
        </Typography>
        <Posts itemsDesktop={2}>
          {data?.data?.data !== undefined &&
            data?.data?.data[0]?.products?.map((item, i) => (
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
      </Box>
    </Box>
  );
};

export default Modalcart;
