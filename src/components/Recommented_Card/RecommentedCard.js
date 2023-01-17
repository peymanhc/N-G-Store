import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  CircularProgress,
  IconButton,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { Link, useRouteMatch } from "react-router-dom";
import Rating from "@material-ui/lab/Rating";
import { Favorite, FavoriteBorder } from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import SimpleModal from "components/modal/SimpleModal";
import Modalcart from "components/productPage/Modalcart";
import { saveCart, saveCartOnline } from "store/cart/cart.action";
import * as actions from "store/carts/carts.action";

const useStyles = makeStyles((theme) => ({
  card: {
    boxShadow: "none",
    border: "1px solid rgba(0,0,0,0.1)",
    margin: "10px",
    minHeight: 300,
    position: "relative",
    [theme.breakpoints.down("sm")]: {
      textAlign: "left",
    },
  },
  ratebox: {
    [theme.breakpoints.down("sm")]: {
      justifyContent: "start",
    },
  },
  media: {
    height: 150,
    backgroundSize: "cover",
  },
  rate: {
    fontSize: 14,
  },
  ratednumber: {
    fontSize: 11,
    display: "block ruby",
    color: "rgba(0,0,0,0.6)",
    fontWeight: 500,
    margin: "0 10px",
  },
  recommend: {
    marginTop: 10,
    fontSize: 12,
    color: "green",
  },
  lastprice: {
    fontSize: 18,
    fontWeight: 700,
    [theme.breakpoints.down("xs")]: {
      fontSize: 15,
    },
  },
  price: {
    fontSize: 11,
    margin: "0 10px",
    color: "rgba(0,0,0,0.5)",
    fontWeight: 700,
    textDecoration: "line-through",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  offprice: {
    color: "white",
    fontSize: 10,
    backgroundColor: "red",
    borderRadius: 5,
    fontWeight: 700,
    padding: "2px 5px",
  },
  title: {
    marginTop: 10,
    fontSize: 13,
    fontWeight: 700,
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    "-webkit-line-clamp": 1,
    "-webkit-box-orient": "vertical",
  },
  lastpricemobile: {
    justifyContent: "space-between",
  },
  addbtn: {
    backgroundColor: "#ffd426",
    color: "black",
    padding: "10px 15px",
    fontSize: 10,
    marginTop: 15,
    "&:hover": {
      backgroundColor: "#ffb426",
    },
  },
  link: {
    textDecoration: "none",
    color: "black",
    display: "flex",
    flexDirection: "column",
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
const RecommentedCard = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const match = useRouteMatch({ path: "/:language/:city" });
  const profile = useSelector((state) => state.profile);
  const currency = useSelector((state) => state.currency);
  const cart = useSelector((state) => state.cart?.allcarts);
  const betterforu = useSelector((state) => state.betterforu);
  const [loading, setloading] = useState(false);
  const [Modal, setModal] = useState(false);
  const Reducecurrent = 100 * parseFloat(currency.current.value);
  const cardPrice = parseFloat(props.price);
  const cardLastPrice = parseFloat(props.lastprice);
  const FirstPrice = (Reducecurrent * cardPrice) / 100;
  const DiscountPrice = (Reducecurrent * cardLastPrice) / 100;

  const cardCount = cart.find((x) => x.pid === props.id);
  const item = cardCount?.count === undefined ? 0 : cardCount?.count;

  const onIngredientAdded = (ingName, totalprice) => {
    setloading(true);
    setTimeout(() => {
      setloading(false);
      setModal(true);
    }, 1500);
    dispatch(actions.addIngredient(ingName, totalprice));
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
      <SimpleModal
        className={classes.modalbody}
        handleClose={() => setModal(false)}
        open={Modal}
        body={
          <Modalcart
            add={() =>
              onIngredientAdded(props?.detail?.name, (item + 1) * FirstPrice)
            }
            Loading={loading}
            remove={() => onIngredientRemoved(props?.detail?.name)}
            data={betterforu}
            match={match}
            item={item}
            close={() => setModal(false)}
            productname={props.title}
            productPrice={cardPrice}
            productImage={props.image}
          />
        }
      />
      <Card key={props.key} className={classes.card}>
        <IconButton style={{ position: "absolute" }}>
          <FavoriteBorder />
        </IconButton>
        <Box>
          <Link
            className={classes.link}
            style={{
              display: props.display,
            }}
            to={`${match.url}/Product/${props.slug}/${props.id}`}
          >
            <CardMedia
              className={classes.media}
              image={`https://nandwsouk.com/${props.image}`}
              title="Contemplative Reptile"
            />
          </Link>
          <CardContent className="p-4">
            <Box
              className={classes.lastpricemobile}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Box width="100%" display="flex" alignItems="center">
                <Typography
                  className={classes.lastprice}
                  variant="h5"
                  component="h2"
                >
                  {currency?.current?.symbol}
                  {DiscountPrice.toLocaleString(undefined, {
                    minimumFractionDigits: 1,
                    maximumFractionDigits: 3,
                  })}
                </Typography>
                {props.recommend === "0" || props.recommend === 0 ? null : (
                  <Typography
                    className={classes.price}
                    variant="h5"
                    component="h2"
                  >
                    {currency?.current?.symbol} {FirstPrice}
                  </Typography>
                )}
              </Box>
              {props.recommend === "0" || props.recommend === 0 ? null : (
                <Typography
                  className={classes.offprice}
                  variant="body2"
                  component="p"
                >
                  {props.recommend}%
                </Typography>
              )}
            </Box>

            <Box display="flex" alignItems="center" className={classes.ratebox}>
              <Rating
                className={classes.rate}
                name="read-only"
                value={props.taxRate}
                readOnly
              />
              <Typography className={classes.ratednumber} variant="subtitle2">
                {props.ratednumber} reviews
              </Typography>
            </Box>
            <Typography className={classes.title} variant="body2" component="p">
              {props.title}
            </Typography>
            <Typography
              className={classes.recommend}
              variant="body2"
              component="p"
            >
              %{props.recommend} recommend
            </Typography>
            {loading ? (
              <Box display="flex" justifyContent="center" alignItems="center">
                <CircularProgress style={{ color: "#fc0" }} />
              </Box>
            ) : (
              <Button
                onClick={() => onIngredientAdded(props?.detail?.name)}
                className={classes.addbtn}
              >
                Add to basket
              </Button>
            )}
          </CardContent>
        </Box>
      </Card>
    </>
  );
};

export default RecommentedCard;
