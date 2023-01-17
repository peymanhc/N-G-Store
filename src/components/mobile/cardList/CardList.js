import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Typography from "@material-ui/core/Typography";
import ReactHtmlParser from "react-html-parser";
import { Box } from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import { Link, useRouteMatch } from "react-router-dom";
import { useSelector } from "react-redux";
const useStyles = makeStyles((theme) => ({
  image: {
    height: 140,
    width: 140,
    objectFit: "cover",
    margin: "auto",
  },
  price: {
    fontSize: 12,
    color: "rgba(0,0,0,0.5)",
    fontWeight: 700,
    textDecoration: "line-through",
  },
  lastPrice: {
    fontSize: 13,
    color: "red",
    fontWeight: 900,
    display: "flex",
    alignItems: "center",
  },
  off: {
    fontSize: 10,
    margin: "0 5px",
    color: "white",
    fontWeight: 900,
    backgroundColor: "red",
    borderRadius: 6,
    padding: "4px",
  },
  rate: {
    fontSize: 14,
  },
  reviews: {
    fontSize: 12,
    color: "rgba(0,0,0,0.6)",
    margin: "0 5px",
  },
  text: {
    fontSize: 13,
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    "-webkit-line-clamp": 3,
    "-webkit-box-orient": "vertical",
    height: "52px !important",
  },
  recommend: {
    fontSize: 12,
    color: "green",
  },
  divider: {
    margin: 0,
  },
}));

function CardList(props) {
  const classes = useStyles();
  const present = 100 - props.recommend;
  const match = useRouteMatch({ path: "/:language/:city" });
  const currency = useSelector((state) => state.currency);
  const Reducecurrent = 100 * parseFloat(currency.current.value);
  const cardPrice = parseFloat(props.price);
  const cardLastPrice = parseFloat(props.lastprice);
  const FirstPrice = (Reducecurrent * cardPrice) / 100;
  const DiscountPrice = (Reducecurrent * cardLastPrice) / 100;

  return (
    <>
      <Divider className={classes.divider} variant="inset" component="li" />
      <Link
        style={{ textDecoration: "none", color: "black" }}
        to={`${match.url}/Product/${props.slug}/${props.id}`}
      >
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <img
              className={classes.image}
              src={`https://nandwsouk.com/${props.image}`}
            />
          </ListItemAvatar>
          <Box margin="8px 10px" display="flex" flexDirection="column">
            {props.recommend === 0 ? null : (
              <Typography
                component="span"
                variant="body2"
                className={classes.price}
                color="textPrimary"
              >
                {currency?.current?.symbol}
                {FirstPrice}
              </Typography>
            )}
            <Typography
              component="span"
              variant="body2"
              className={classes.lastPrice}
              style={{ color: props.recommend === 0 ? "black" : "red" }}
            >
              ${(present * DiscountPrice) / 100}
              {props.recommend === 0 ? null : (
                <span className={classes.off}>{props.recommend}%</span>
              )}
            </Typography>
            <Box display="flex" alignItems="center" margin="5px 0">
              <Rating
                className={classes.rate}
                value={props.ratednumber}
                readOnly
              />
              <Typography className={classes.reviews}>
                {props.ratednumber} reviews
              </Typography>
            </Box>
            <Typography className={classes.text}>{props.title}</Typography>
            <Typography className={classes.recommend}>
              {props.recommend}% Recommend{" "}
            </Typography>
          </Box>
        </ListItem>
      </Link>
    </>
  );
}
export default CardList;
