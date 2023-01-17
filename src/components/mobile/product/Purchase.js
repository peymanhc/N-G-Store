import { Box, Button, makeStyles, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import { saveCart, saveCartOnline } from "store/cart/cart.action";
import { useDispatch, useSelector } from "react-redux";
import { useRouteMatch } from "react-router-dom";
import * as actions from "store/carts/carts.action";
import SimpleModal from "components/modal/SimpleModal";
import ModalBox from "./ModalBox";
const useStyles = makeStyles((theme) => ({
  root: {
    margin: "20px 0",
    backgroundColor: "white",
    padding: 20,
    boxShadow:
      "0 9px 46px 0 rgba(34,34,34,.06),0 1px 11px 0 rgba(34,34,34,.06)",
  },
  text: {
    fontSize: 14,
    fontWeight: 400,
  },
  add: {
    backgroundColor: "#fc0",
    margin: "10px 0",
    color: "black",
    width: "100%",
    padding: "10px 20px",
    "&:hover": {
      backgroundColor: "#fc0",
    },
  },
  addbtndisabled: {
    backgroundColor: "rgba(0,0,0,0.2)",
    margin: "10px 0",
    color: "black",
    width: "100%",
    padding: "10px 20px",
    "&:hover": {
      backgroundColor: "rgba(0,0,0,0.2)",
    },
  },
  brand: {
    color: "blue",
    fontSize: 14,
  },
  price: {
    fontSize: 25,
    fontWeight: 700,
  },
  textinfo: {
    fontSize: 14,
    fontWeight: 400,
    color: "rgba(0,0,0,0.4)",
  },
  modalbody: {
    top: "20%",
    position: "relative",
    margin: "auto",
    borderRadius: 4,
    padding: "15px",
    backgroundColor: "white",
    overFlow: "hidden",
    width: "90%",
    maxWidth: 600,
  },
}));
const Purchase = ({ detail }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const match = useRouteMatch({ path: "/:language/:city/Product/:slug?/:id" });
  const [displayBtn, setdisplayBtn] = useState(false);
  const [loading, setloading] = useState(0);
  const [Modal, setModal] = useState(false);
  const currency = useSelector((state) => state.currency);
  const profile = useSelector((state) => state.profile);
  const carts = useSelector((state) => state.carts);
  const item =
    carts?.ingredients[detail?.name] === undefined
      ? 0
      : carts?.ingredients[detail?.name];
  useEffect(() => {
    const CartsData = JSON.parse(localStorage.getItem("cart")) || {};
    let __FOUND = -1;
    for (let i = 0; i < CartsData.length; i++) {
      if (CartsData[i].pid === match.params.id) {
        __FOUND = i;
        break;
      }
    }
    __FOUND === -1 ? setdisplayBtn(false) : setdisplayBtn(true);
  }, []);
  const HandleAddToCart = () => {
    setModal(true);
  };
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
            detail,
            "cart",
            match.params.id,
            "cart"
          )
        )
      : saveCart(
          "user-id",
          match.params.language,
          item + 1,
          detail,
          "cart",
          match.params.id,
          "cart"
        );
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
            detail,
            "cart",
            match.params.id,
            "cart"
          )
        )
      : saveCart(
          "user-id",
          match.params.language,
          item - 1,
          detail,
          "cart",
          match.params.id,
          "cart"
        );
  };
  const Reducecurrent = 100 * parseFloat(currency.current.value);
  const cardPrice = parseFloat(detail?.priceTaxIncl);
  const DiscountPrice = (Reducecurrent * cardPrice) / 100;
  return (
    <>
      <Box className={classes.root}>
        <Typography className={classes.price}>
          {currency?.current?.symbol}
          {DiscountPrice}
        </Typography>
        <Typography className={classes.text}>{detail?.slug}</Typography>
        <Typography className={classes.textinfo}>
          <HelpOutlineIcon style={{ width: 15 }} /> {detail?.info}
        </Typography>
        <Button
          onClick={() => HandleAddToCart()}
          disabled={displayBtn}
          className={displayBtn ? classes.addbtndisabled : classes.add}
        >
          {displayBtn ? "Item in your basket " : "Add to Basket"}
        </Button>
        <Typography className={classes.brand}>Xiaomi</Typography>
      </Box>
      <SimpleModal
        className={classes.modalbody}
        handleClose={() => setModal(false)}
        open={Modal}
        body={
          <ModalBox
            add={() => onIngredientAdded(detail?.name)}
            remove={() => onIngredientRemoved(detail?.name)}
            match={match}
            item={item}
            loading={loading}
            productname={detail?.name}
            productPrice={detail?.priceTaxIncl}
            productImage={
              detail?.images === undefined ? "" : detail?.images[0]?.url
            }
            close={() => setModal(false)}
          />
        }
      />
    </>
  );
};

export default Purchase;
