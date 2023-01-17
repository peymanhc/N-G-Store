import React, { useEffect } from "react";
import {
  Box,
  Button,
  CircularProgress,
  Divider,
  IconButton,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/";
import { useState } from "react";
import NumberInput from "components/NumberInput/NumberInput";
import * as actions from "store/carts/carts.action";
import { useDispatch, useSelector } from "react-redux";
import { getCarts, saveCart, saveCartOnline } from "store/cart/cart.action";
import { useRouteMatch } from "react-router-dom";
import SimpleModal from "components/modal/SimpleModal";
import Modalcart from "./Modalcart";
import AlertError from "components/alert/AlertError";
import { confirmAlert } from "react-confirm-alert";
const useStyles = makeStyles((theme) => ({
  changeColorroot: {
    display: "flex",
  },
  changecolorBox: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "10px",
    fontSize: 12,
    padding: 10,
    margin: 5,
    borderRadius: 4,
    border: "3px solid rgba(0,0,0,0.2)",
    cursor: "pointer",
    "&:hover": {
      border: "3px solid rgba(0,0,0,0.5)",
    },
  },
  activecolorBox: {
    display: "flex",
    cursor: "pointer",
    fontSize: 12,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "10px",
    padding: 10,
    margin: 5,
    borderRadius: 4,
    border: "3px solid #fc0",
  },
  detailpro: {
    margin: 5,
    backgroundColor: "white",
    padding: 20,
    boxShadow:
      "0 9px 46px 0 rgba(34,34,34,.06),0 1px 11px 0 rgba(34,34,34,.06)",
  },
  price: {
    fontSize: 20,
    fontWeight: 700,
  },
  detailprotxt: {
    marginTop: 5,
    fontSize: 14,
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    "-webkit-line-clamp": 1,
    "-webkit-box-orient": "vertical",
  },
  addbtn: {
    margin: "10px 0",
    backgroundColor: "#fc0",
    color: "black",
    width: "100%",
    padding: 18,
    "&:hover": {
      backgroundColor: "#fc0",
    },
  },
  addbtndisabled: {
    margin: "10px 0",
    backgroundColor: "rgba(0,0,0,0.2)",
    color: "black",
    width: "100%",
    padding: 18,
    "&:hover": {
      backgroundColor: "rgba(0,0,0,0.5)",
    },
  },
  brand: {
    color: "blue",
    fontSize: 17,
    margin: "0 10px",
  },
  aboutproduct: {
    color: "blue",
    fontSize: 15,
    fontWeight: 700,
  },
  ul: {
    listStyle: "none",
    position: "relative",
    marginTop: 20,
    marginLeft: 0,
    paddingLeft: 0,
  },
  li: {
    paddingLeft: "1em",
    textIndent: "-1em",
    margin: 5,
    "&::before": {
      color: "red",
      top: 7,
      position: "relative",
      content: "'•'",
      fontSize: 30,
      paddingRight: 5,
    },
  },
  showmore: {
    backgroundColor: "#ececec",
    color: "black",
    padding: "3px 7px",
    display: "table",
    position: "absolute",
    right: 0,
    cursor: "pointer",
  },
  features: {
    color: "blue",
    fontSize: 14,
    margin: "20px 10px",
    cursor: "pointer",
  },
  name: {
    textTransform: "uppercase",
  },
  offprice: {
    fontSize: 12,
    color: "rgba(0,0,0,0.5)",
    textDecoration: "line-through",
  },
  off: {
    fontSize: 12,
    color: "#fc0",
    textDecoration: "none",
    margin: "0 5px",
  },
  buttonsIngredient: {
    width: 100,
    height: 50,
    backgroundColor: "#fc0",
    fontSize: 20,
    "&:hover": {
      backgroundColor: "#fa0",
    },
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
const Modifications = (props) => {
  const classes = useStyles();
  var colorArr = [];
  var SizeArr = [];
  const [active, setactive] = useState(colorArr[0]);
  const [SIZE_ID, setSIZE_ID] = useState();
  const [showMore, setShowMore] = useState(3);
  const [activesize, setactivesize] = useState(0);
  const [displayBtn, setdisplayBtn] = useState(false);
  const [loading, setloading] = useState(false);
  const [Modal, setModal] = useState(false);
  const dispatch = useDispatch();
  const carts = useSelector((state) => state.carts);
  const cart = useSelector((state) => state.cart?.allcarts);
  const profile = useSelector((state) => state.profile);
  const betterforu = useSelector((state) => state.betterforu);
  const currency = useSelector((state) => state.currency);
  const detailinfo = props?.detail;
  const match = useRouteMatch({ path: "/:language/:city/Product/:slug?/:id" });

  const cardCount = cart.find((x) => x.pid === match.params.id);
  const item = cardCount?.count === undefined ? 0 : cardCount?.count;
  const Reducecurrent = 100 * parseFloat(currency.current.value);
  const cardPrice = parseFloat(detailinfo?.priceTaxExcl);
  const cardLastPrice = parseFloat(detailinfo?.priceTaxIncl);
  const FirstPrice = (Reducecurrent * cardPrice) / 100;
  const DiscountPrice = (Reducecurrent * cardLastPrice) / 100;

  let SizePrice = parseInt(activesize);
  let LastPrice = 100 + SizePrice;
  let Price = (LastPrice * DiscountPrice) / 100;
  const Property =
    props?.detail?.properties === undefined ? [] : props?.detail?.properties[0];

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
    dispatch(
      getCarts(profile?.detail?.data[0].id, match.params.language, "cart")
    );
  }, [JSON.parse(localStorage.getItem("cart"))]);

  const handleChangeActive = (index) => {
    setactive(index.id);
  };
  const handleChangeSize = (index) => {
    setactivesize(index.percent);
    setSIZE_ID(index.id);
  };
  const Showmore = (index) => {
    setShowMore(index);
  };
  const onIngredientAdded = (ingName) => {
    setloading(true);
    setTimeout(() => {
      setloading(false);
    }, 1500);
    dispatch(actions.addIngredient(ingName));
    profile?.detail?.data
      ? setTimeout(() => {
          setModal(true);
        }, 1500) &&
        dispatch(
          saveCartOnline(
            profile?.detail?.data[0].id,
            match.params.language,
            item + 1,
            { SIZE_ID, active },
            "cart",
            match.params.id,
            "cart"
          )
        )
      : displayBtn
      ? confirmAlert({
          customUI: ({ onClose }) => {
            return (
              <div style={{ margin: "-70px" }}>
                <AlertError close={onClose} message={"First Login"} />
              </div>
            );
          },
        })
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
    setloading(true);
    setTimeout(() => {
      setloading(false);
    }, 1500);
    dispatch(actions.removeIngredient(ingName));
    profile?.detail?.data
      ? dispatch(
          saveCartOnline(
            profile?.detail?.data[0].id,
            match.params.language,
            item - 1,
            { SIZE_ID, active },
            "cart",
            match.params.id,
            "cart"
          )
        )
      : saveCart(
          "user-id",
          match.params.language,
          item - 1,
          detailinfo,
          "cart",
          match.params.id,
          "cart"
        );
  };
  return (
    <Box>
      {detailinfo?.properties?.map((item, i) => {
        return (
          <Box display="none">
            {item.PropertyLabelName === "color"
              ? colorArr.push({ name: item.PropertyName, id: item.id })
              : SizeArr.push({
                  size: item.PropertyName,
                  percent: item.PropertyPercent,
                  id: item.id,
                })}
          </Box>
        );
      })}
      <Box className={classes.detailpro}>
        <Typography className={classes.name}>{detailinfo?.name}</Typography>
        <Box display="flex" alignItems="center">
          <Typography className={classes.offprice}>
            {currency?.current?.symbol} {FirstPrice}
          </Typography>
          <span className={classes.off}>{detailinfo?.discount}% off</span>
        </Box>
        <Typography className={classes.price}>
          {currency?.current?.symbol} {Price}
        </Typography>
        <Box display="flex" margin="0 -5px">
          {colorArr.map((item, i) => (
            <Box
              onClick={() => handleChangeActive(item)}
              style={{
                backgroundColor: item.name,
              }}
              className={
                active === item.id
                  ? classes.activecolorBox
                  : classes.changecolorBox
              }
            ></Box>
          ))}
        </Box>
        <Divider style={{ margin: "10px 0" }} />
        <Typography className="my-2">Select Size</Typography>
        <Box display="flex" margin="0 -5px">
          {SizeArr.map((item, i) => (
            <Box
              onClick={() => handleChangeSize(item)}
              className={
                SIZE_ID === item.id
                  ? classes.activecolorBox
                  : classes.changecolorBox
              }
            >
              {item.size}
            </Box>
          ))}
        </Box>
        <Box margin="10px 0">
          {loading ? (
            <Box display="flex" justifyContent="center" width="100%">
              <CircularProgress style={{ color: "#fc0" }} />
            </Box>
          ) : (
            <NumberInput
              increase={() => onIngredientAdded(props?.detail?.name)}
              decrease={() => onIngredientRemoved(props?.detail?.name)}
              val={profile?.detail?.data ? item : displayBtn ? 1 : 0}
              min={0}
              max={5}
              className={classes.buttonsIngredient}
            />
          )}
        </Box>
        <Box display="flex" alignItems="center">
          <Typography className={classes.brand}>Brand</Typography>
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
      <Box margin="20px 10px">
        <Typography className={classes.aboutproduct} variant="h4">
          Briefly about the product
        </Typography>
        <ul className={classes.ul}>
          {Object.entries(Property === undefined ? [] : Property)
            ?.slice(0, showMore)
            ?.map(([key, value]) => {
              return (
                <li className={classes.li}>
                  {key} : {value}
                </li>
              );
            })}
          <Box
            onClick={() => Showmore(10)}
            className={showMore === 3 ? classes.showmore : "hidden"}
          >
            • • •
          </Box>
        </ul>
        <Typography className={classes.features}>All the features</Typography>
      </Box>
      <SimpleModal
        className={classes.modalbody}
        handleClose={() => setModal(false)}
        open={Modal}
        body={
          <Modalcart
            add={() => onIngredientAdded(props?.detail?.name)}
            remove={() => onIngredientRemoved(props?.detail?.name)}
            data={betterforu}
            match={match}
            item={item}
            loading={loading}
            productname={props?.detail?.name}
            productPrice={props?.detail?.priceTaxIncl}
            productImage={
              props?.detail?.images !== undefined &&
              props?.detail?.images[0]?.url
            }
            close={() => setModal(false)}
          />
        }
      />
    </Box>
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
export default Modifications;
