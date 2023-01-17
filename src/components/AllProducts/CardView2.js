import {
  Box,
  Button,
  CircularProgress,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import { useDispatch, useSelector } from "react-redux";
import { Link, useRouteMatch } from "react-router-dom";
import SimpleModal from "components/modal/SimpleModal";
import Modalcart from "components/productPage/Modalcart";
import * as actions from "store/carts/carts.action";
import { saveCart, saveCartOnline } from "store/cart/cart.action";
import { getBetterForU } from "store/betterforu/betterforu.action";
const useStyles = makeStyles((theme) => ({
  image: {
    width: 170,
    height: 180,
    objectFit: "cover",
  },
  title: {
    fontSize: 18,
    fontWeight: 700,
    color: "#4b65ce",
    margin: "0 0.5rem",
  },
  bestvaltxt: {
    color: "#359e00",
    fontSize: 13,
    fontWeight: 700,
  },
  description: {
    fontSize: 14,
    lineHeight: 1.3,
    margin: "0.5rem",
    color: "rgba(0,0,0,0.7)",
  },
  price: {
    fontSize: 18,
    fontWeight: 900,
    color: "black",
  },
  purchases: {
    margin: "40px 0",
    color: "rgba(0,0,0,0.7)",
    backgroundColor: "#ffd426",
    width: "90%",
    height: 35,
    "&:hover": {
      backgroundColor: "#ffd426",
    },
  },
  sales: {
    fontSize: 11,
    fontWeight: 700,
    color: "#4b65ce",
    position: "absolute",
    bottom: 0,
  },
  rate: {
    color: "white",
    backgroundColor: "#359e00",
    padding: "5px 10px",
    width: "min-content",
    margin: "0.5rem",
    fontSize: 11,
  },
  reviews: {
    fontSize: 13,
    fontWeight: 900,
    color: "rgba(0,0,0,0.6)",
  },
  modalbody: {
    top: "10%",
    position: "relative",
    margin: "auto",
    borderRadius: 4,
    padding: "15px",
    backgroundColor: "white",
    overFlow: "hidden",
    width: "100%",
    maxWidth: 600,
    maxHeight: 600,
    height: "100%",
  },
}));
const CardView2 = (props) => {
  const classes = useStyles();
  const [Modal, setModal] = useState(false);
  const [loading, setloading] = useState(false);
  const dispatch = useDispatch();
  const currency = useSelector((state) => state.currency);
  const carts = useSelector((state) => state.carts);
  const profile = useSelector((state) => state.profile);
  const Reducecurrent = 100 * parseFloat(currency.current.value);
  const cardLastPrice = parseFloat(props.price);
  const DiscountPrice = (Reducecurrent * cardLastPrice) / 100;
  const betterforu = useSelector((state) => state.betterforu);
  const match = useRouteMatch({ path: "/:language/:city" });
  useEffect(() => {
    dispatch(
      getBetterForU(match.params.city, match.params.language, "better_for_you")
    );
  }, []);
  const item =
    carts?.ingredients[props?.title] === undefined
      ? 0
      : carts?.ingredients[props?.title];

  const onIngredientAdded = (ingName) => {
    setloading(true);
    setTimeout(() => {
      setloading(false);
      setModal(true);
    }, 1500);
    dispatch(actions.addIngredient(ingName));
    profile?.detail?.data
      ? dispatch(
          saveCartOnline(
            profile?.detail?.data[0].id,
            match.params.language,
            item + 1,
            "",
            "cart",
            props.id,
            "cart"
          )
        )
      : setTimeout(() => {
          window.location.replace(`/${match.params.language}/all-city/Login`);
        }, 1300);
  };
  const onIngredientRemoved = (ingName) => {
    setloading(true);
    setTimeout(() => {
      setloading(false);
      setModal(true);
    }, 1500);
    dispatch(actions.addIngredient(ingName));
    profile?.detail?.data
      ? dispatch(
          saveCartOnline(
            profile?.detail?.data[0].id,
            match.params.language,
            item - 1,
            "",
            "cart",
            props.id,
            "cart"
          )
        )
      : saveCart(
          "user-id",
          match.params.language,
          item - 1,
          props,
          "cart",
          props.id,
          "cart"
        );
  };

  return (
    <>
      <Box
        key={props.i}
        display="flex"
        padding="15px"
        justifyContent="space-between"
        position="relative"
      >
        <Box width="25%">
          <Link to={`${match.url}/Product/${props.slug}/${props.id}`}>
            <img
              className={classes.image}
              alt={props.id}
              src={`https://nandwsouk.com/${props.image}`}
            />
          </Link>
        </Box>
        <Box width="45%">
          <Typography className={classes.title}>{props.title}</Typography>
          <Box display="flex" alignItems="center">
            <Box className={classes.rate}>{props.rate}</Box>
            <Typography className={classes.reviews}>
              {props.ratednumber} reviews
            </Typography>
          </Box>
          <Box display="flex" alignItems="center">
            <ThumbUpAltIcon className={`mx-2 ${classes.bestvaltxt}`} />
            <Typography className={classes.bestvaltxt}>{props.slug}</Typography>
          </Box>
          <Typography className={classes.description}>{props.info}</Typography>
        </Box>
        <Box
          width="20%"
          display="flex"
          alignItems="center"
          flexDirection="column"
        >
          <Typography className={classes.price}>
            {currency?.current?.symbol}
            {DiscountPrice}
          </Typography>
          <Button
            onClick={() => onIngredientAdded(props?.title)}
            className={classes.purchases}
          >
            {loading ? (
              <CircularProgress
                style={{ color: "red", width: 25, height: 25 }}
              />
            ) : (
              "Purchases"
            )}
          </Button>
          <Typography className={classes.sales}>
            Number of sales this year
          </Typography>
        </Box>
      </Box>
      <SimpleModal
        className={classes.modalbody}
        handleClose={() => setModal(false)}
        open={Modal}
        body={
          <Modalcart
            add={() => onIngredientAdded(props?.title)}
            remove={() => onIngredientRemoved(props?.title)}
            data={betterforu}
            match={match}
            item={item}
            close={() => setModal(false)}
            productname={props.title}
            productPrice={DiscountPrice}
            productImage={props.image}
          />
        }
      />
    </>
  );
};

export default CardView2;
