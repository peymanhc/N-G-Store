import { Box, makeStyles, Typography } from "@material-ui/core";
import NumberInput from "components/NumberInput/NumberInput";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouteMatch } from "react-router";
import { saveCart, saveCartOnline } from "store/cart/cart.action";
import * as actions from "../../store/carts/carts.action";
const useStyles = makeStyles((theme) => ({
  header: {
    width: "100%",
    height: 0,
    left: 0,
    right: 0,
    transition: "0.4s",
    position: "fixed",
    top: 0,
    backgroundColor: "white",
    boxShadow: "0 2px 16px rgba(0,0,0,.3)",
    zIndex: 999,
    [theme.breakpoints.down(1200)]: {
      display: "none",
    },
  },
  wrapper: {
    maxWidth: 1400,
    margin: "auto",
    display: "none",
    alignItems: "center",
    height: "100%",
  },
  addbtn: {
    margin: "10px 0",
    backgroundColor: "#fc0",
    color: "black",
    width: "100%",
    padding: 18,
  },
  price: {
    fontSize: 30,
    fontWeight: 800,
  },
  img: {
    width: 70,
    height: 70,
    objectFit: "cover",
    borderRadius: "50%",
    margin: "0 30px",
  },
  name: {
    fontSize: 17,
    fontWeight: 700,
  },
  brand: {
    fontSize: 12,
    color: "rgba(0,0,0,0.5)",
  },
  brandname: {
    color: "blue",
    fontSize: 12,
    margin: "0 10px",
    cursor: "pointer",
  },
}));
const Navigation = (props) => {
  const classes = useStyles();
  useEffect(() => {
    window.addEventListener("scroll", headerHeight);
    return function clean() {
      window.removeEventListener("scroll", headerHeight);
    };
    // eslint-disable-next-line
  }, []);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart?.allcarts);
  const profile = useSelector((state) => state.profile);
  const detailinfo = props?.detail;
  const match = useRouteMatch({ path: "/:language/:city/Product/:slug?/:id" });

  const cardCount = cart.find((x) => x.pid === match.params.id);
  const item = cardCount?.count === undefined ? 0 : cardCount?.count;

  const onIngredientAdded = (ingName) => {
    dispatch(actions.addIngredient(ingName));

    profile?.detail?.data
      ? dispatch(
          saveCartOnline(
            profile?.detail?.data[0].id,
            match.params.language,
            item + 1,
            detailinfo,
            "cart",
            match.params.id,
            "cart"
          )
        )
      : saveCart(
          "user-id",
          match.params.language,
          item + 1,
          detailinfo,
          "cart",
          match.params.id,
          "cart"
        );
  };
  const onIngredientRemoved = (ingName) => {
    dispatch(actions.removeIngredient(ingName));
    profile?.detail?.data
      ? dispatch(
          saveCartOnline(
            profile?.detail?.data[0].id,
            match.params.language,
            item - 1,
            [],
            "cart",
            match.params.id,
            "cart"
          )
        )
      : saveCart(
          match.params.id,
          detailinfo,
          item,
          match.params.language,
          "date",
          "cart"
        );
  };
  const headerHeight = () => {
    if (window.pageYOffset < 600) {
      document.getElementById("header").style.height = "0";
      document.getElementById("wrapper").style.display = "none";
    } else {
      document.getElementById("header").style.height = "100px";
      document.getElementById("wrapper").style.display = "flex";
    }
  }; 
  return (
    <div id="header" className={classes.header}>
      <Box id="wrapper" className={classes.wrapper}>
        <Box display="flex" width="100%">
          <img
            className={classes.img}
            alt={"product"}
            src={`https://nandwsouk.com/${
              props?.detail?.images === undefined
                ? null
                : props?.detail?.images[0]?.url
            }`}
          />
          <Box display="flex" justifyContent="center" flexDirection="column">
            <Typography className={classes.name}>
              {props?.detail?.name}
            </Typography>
            <Box display="flex" alignItems="center" className={classes.brand}>
              {props?.detail?.slug}
              <Box display="flex" alignItems="center">
                <Typography className={classes.brandname}>
                  Brand Test
                </Typography>
                <svg fill="#16c67a" width="16" height="16" viewBox="0 0 16 16">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M6.137 1.28a1.2 1.2 0 011.812 0L8.96 2.446a.2.2 0 00.182.066l1.525-.242a1.2 1.2 0 011.388 1.165l.027 1.543a.2.2 0 00.097.168l1.323.795a1.2 1.2 0 01.315 1.784l-.972 1.2a.2.2 0 00-.034.19l.503 1.46a1.2 1.2 0 01-.906 1.57l-1.515.293a.2.2 0 00-.149.125l-.553 1.442a1.2 1.2 0 01-1.702.62l-1.35-.75a.2.2 0 00-.194 0l-1.35.75a1.2 1.2 0 01-1.703-.62l-.553-1.442a.2.2 0 00-.148-.125l-1.516-.294a1.2 1.2 0 01-.906-1.569l.503-1.46a.2.2 0 00-.033-.19l-.972-1.2a1.2 1.2 0 01.314-1.784l1.324-.795a.2.2 0 00.097-.168l.026-1.543A1.2 1.2 0 013.417 2.27l1.525.242a.2.2 0 00.182-.066L6.137 1.28zm1.057.656a.2.2 0 00-.302 0L5.879 3.101a1.2 1.2 0 01-1.094.399l-1.524-.242a.2.2 0 00-.232.194l-.026 1.543a1.2 1.2 0 01-.582 1.008l-1.324.795a.2.2 0 00-.052.298l.972 1.2a1.2 1.2 0 01.202 1.146l-.503 1.46a.2.2 0 00.15.26l1.516.295a1.2 1.2 0 01.892.748l.553 1.441a.2.2 0 00.284.104L6.46 13a1.2 1.2 0 011.164 0l1.35.749a.2.2 0 00.284-.104l.553-1.44a1.2 1.2 0 01.891-.75l1.516-.293a.2.2 0 00.15-.262l-.502-1.46a1.2 1.2 0 01.202-1.146l.972-1.2a.2.2 0 00-.053-.297l-1.323-.795a1.2 1.2 0 01-.582-1.008l-.027-1.543a.2.2 0 00-.231-.194L9.3 3.5a1.2 1.2 0 01-1.094-.4L7.194 1.936z"
                  ></path>
                  <path d="M6.247 8.728L8.975 6l.707.707-3.435 3.436-2.204-2.204.707-.707 1.497 1.496z"></path>
                </svg>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box width="25%">
          <Typography className={classes.price}>
            $ {props?.detail?.priceTaxIncl}
          </Typography>
        </Box>
        <Box width="25%">
          <NumberInput
            increase={() => onIngredientAdded(props?.detail?.name)}
            decrease={() => onIngredientRemoved(props?.detail?.name)}
            val={item}
            min={0}
            max={5}
          />
        </Box>
      </Box>
    </div>
  );
};

export default Navigation;
