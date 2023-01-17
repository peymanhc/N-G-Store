import React from "react";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { Link, useRouteMatch } from "react-router-dom";
import Rating from "@material-ui/lab/Rating";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  card: {
    boxShadow: "none",
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
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    "-webkit-line-clamp": 2,
    "-webkit-box-orient": "vertical",
  },
  lastpricemobile: {
    justifyContent: "space-between",
  },
  addbtn: {
    backgroundColor: "#ffd426",
    color: "black",
    margin: "0 15px",
    padding: "10px 15px",
    fontSize: 10,
    bottom: 0,
    position: "absolute",
    "&:hover": {
      backgroundColor: "#ffb426",
    },
  },
  link: {
    textDecoration: "none",
    color: "black",
    margin: 10,
    display: "flex",
    height: 310,
    backgroundColor: "white",
    flexDirection: "column",
  },
}));
const CardPost = (props) => {
  const classes = useStyles();
  const match = useRouteMatch({ path: "/:language/:city" });
  const currency = useSelector((state) => state.currency);
  const Reducecurrent = 100 * parseFloat(currency.current.value);
  const cardPrice = parseFloat(props.price);
  const cardLastPrice = parseFloat(props.lastprice);
  const FirstPrice = (Reducecurrent * cardPrice) / 100;
  const DiscountPrice = (Reducecurrent * cardLastPrice) / 100;
  return (
    <Link
      className={classes.link}
      style={{
        display: props.display,
        border: props.border === true && "1px solid rgba(0,0,0,0.1)",
      }}
      to={`${match.url}/Product/${props.slug}/${props.id}`}
    >
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={`https://nandwsouk.com/${props.image}`}
          />
          <CardContent className="p-4">
            <Box
              className={classes.lastpricemobile}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Box display="flex" alignItems="center">
                <Typography
                  className={classes.lastprice}
                  variant="h5"
                  component="h2"
                >
                  {" "}
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
          </CardContent>
        </CardActionArea>
      </Card>
      <Button
        style={{ display: props.addbtn === undefined ? "none" : "block" }}
        className={classes.addbtn}
      >
        Add to basket
      </Button>
    </Link>
  );
};

export default CardPost;
