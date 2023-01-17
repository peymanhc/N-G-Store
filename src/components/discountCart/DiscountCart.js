import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import AddIcon from "@material-ui/icons/Add";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import StarIcon from "@material-ui/icons/Star";
import { Box, CircularProgress } from "@material-ui/core";
import { saveCart, saveCartOnline } from "store/cart/cart.action";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "store/carts/carts.action";
import { useRouteMatch } from "react-router";
import SimpleModal from "components/modal/SimpleModal";
import Modalcart from "components/productPage/Modalcart";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 10,
    margin: 10,
  },
  media: {
    height: 0,
    paddingTop: "56.25%",
    borderRadius: 10,
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
  slug: {
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    "-webkit-line-clamp": 1,
    "-webkit-box-orient": "vertical",
    margin: "5px 0",
  },
  title: {
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    "-webkit-line-clamp": 1,
    "-webkit-box-orient": "vertical",
  },
  rate: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: 37,
    fontWeight: 700,
    fontSize: 13,
  },
  present: {
    backgroundColor: "#fbf4f7",
    padding: "3px 7px",
    color: "#d83756",
    borderRadius: 17,
    fontWeight: 700,
    fontSize: 12,
  },
  addbutton: {
    backgroundColor: "#d83756",
    color: "white",
    width: 37,
    height: 37,
    "&:hover": {
      backgroundColor: "#d83756",
    },
  },
  price: {
    color: "rgba(0,0,0,0.5)",
    margin: "0 10px",
    fontSize: "10px",
    fontWeight: 700,
    textDecoration: "line-through",
  },
  lastprice: {
    margin: "0 10px",
    fontSize: 12,
    fontWeight: 800,
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

function DiscountCart(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.profile);
  const currency = useSelector((state) => state.currency);
  const cart = useSelector((state) => state.cart?.allcarts);
  const betterforu = useSelector((state) => state.betterforu);
  const match = useRouteMatch({ path: "/:language/:city" });

  const cardCount = cart.find((x) => x.pid === props.id);
  const item = cardCount?.count === undefined ? 0 : cardCount?.count;

  const [loading, setloading] = useState(false);
  const [Modal, setModal] = useState(false);
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
  const Reducecurrent = 100 * parseFloat(currency.current.value);
  const cardPrice = parseFloat(props.price);
  const cardLastPrice = parseFloat(props.lastprice);
  const FirstPrice = (Reducecurrent * cardPrice) / 100;
  const DiscountPrice = (Reducecurrent * cardLastPrice) / 100;

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
            remove={() => onIngredientRemoved(props?.detail?.name)}
            data={betterforu}
            Loading={loading}
            match={match}
            item={item}
            close={() => setModal(false)}
            productname={props.title}
            productPrice={cardPrice}
            productImage={props.image}
          />
        }
      />
      <Card key={props.key} className={classes.root}>
        <Link to={`${match.url}/Product/${props.slug}/${props.id}`}>
          <CardMedia
            className={classes.media}
            image={`https://nandwsouk.com/${props.image}`}
          />
          <CardContent>
            <Typography className={classes.title} variant="body2" component="p">
              {props.title}
            </Typography>
            <Typography
              className={classes.slug}
              variant="body2"
              color="textSecondary"
              component="p"
            >
              {props.slug}
            </Typography>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Typography className={classes.rate}>
                <StarIcon style={{ padding: 3, color: "#d83756" }} />
                {props.rate}
              </Typography>
              <Typography className={classes.present}>
                {props.recommend}%
              </Typography>
            </Box>
          </CardContent>
        </Link>
        <CardActions style={{ justifyContent: "space-between" }} disableSpacing>
          {loading ? (
            <Box display="flex" justifyContent="center" alignItems="center">
              <CircularProgress style={{ color: "red" }} />
            </Box>
          ) : (
            <IconButton
              onClick={() =>
                onIngredientAdded(props?.detail?.name, (item + 1) * FirstPrice)
              }
              className={classes.addbutton}
              disabled={item >= 5 && true}
              aria-label="add to favorites"
            >
              <AddIcon />
            </IconButton>
          )}
          <Box display="flex" alignItems="center">
            <Typography className={classes.lastprice}>
              {currency?.current?.symbol} {DiscountPrice}
            </Typography>
            <Typography className={classes.price}>
              {currency?.current?.symbol} {FirstPrice}
            </Typography>
          </Box>
        </CardActions>
      </Card>
    </>
  );
}
export default DiscountCart;
