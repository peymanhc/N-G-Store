import React from "react";
import {
  Box,
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
    textAlign: "center",
  }, 
  media: {
    height: 490,
    backgroundSize: "cover",
    [theme.breakpoints.down("md")]: {
      height: 200,
    },
  },
  lastprice: {
    fontSize: 25,
    fontWeight: 700,
    [theme.breakpoints.down("md")]: {
      fontSize: 20,
      color: "red",
    },
  },
  price: {
    fontSize: 17,
    margin: "0 10px",
    color: "rgba(0,0,0,0.5)",
    fontWeight: 700,
    textDecoration: "line-through",
    [theme.breakpoints.down("md")]: {
      fontSize: 15,
    },
  },
  title: {
    fontSize: 20,
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    "-webkit-line-clamp": 3,
    "-webkit-box-orient": "vertical",
    [theme.breakpoints.down("md")]: {
      fontSize: 15,
      fontWeight: 700,
    },
  },
  rate: {
    fontSize: 20,
    [theme.breakpoints.down("md")]: {
      fontSize: 13,
    },
  },
  ratednumber: {
    fontSize: 18,
    color: "rgba(0,0,0,0.6)",
    margin: "0 10px",
    [theme.breakpoints.down("md")]: {
      fontSize: 13,
    },
  },
  recommend: {
    marginTop: 10,
    fontSize: 12,
    color: "green",
  },
  offprice: {
    color: "white",
    backgroundColor: "red",
    borderRadius: 5,
    fontWeight: 700,
    padding: "2px 5px",
  },
}));
const BigCard = (props) => {
  const classes = useStyles();
  const match = useRouteMatch({ path: "/:language/:city" });
  const currency = useSelector((state) => state.currency);
  
  const Reducecurrent = 100 * parseFloat(currency.current.value);
  const cardPrice = parseFloat(props.price);
  const cardLastPrice = parseFloat(props.lastprice);
  const FirstPrice = (Reducecurrent * cardPrice) / 100;
  const DiscountPrice = (Reducecurrent * cardLastPrice) / 100;
  var Ratedvalue = parseInt(props.ratednumber);
  return (
    <Link
      style={{ textDecoration: "none", color: "black", margin: 10 }}
      to={`${match.url}/Product/${props.translateslug}/${props.id}`}
    >
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={`https://nandwsouk.com/${props.image}`}
          />
          <CardContent>
            <Box display="flex" justifyContent="center" alignItems="center">
              <Typography
                className={classes.lastprice}
                gutterBottom
                variant="h5"
                component="h2"
              >
                {currency?.current?.symbol}{DiscountPrice}
              </Typography>
              <Typography
                className={classes.price}
                gutterBottom
                variant="h5"
                component="h2"
              >
                {currency?.current?.symbol}{FirstPrice}
              </Typography>
              <Typography
                className={classes.offprice}
                variant="body2"
                component="p"
              >
                {props.recommend}%
              </Typography>
            </Box>
            <Box display="flex" alignItems="center" justifyContent="center">
              <Rating
                className={classes.rate}
                name="read-only"
                value={props.Ratedvalue}
                readOnly
              />
              <Typography className={classes.ratednumber} variant="subtitle2">
                {props.ratednumber} reviews
              </Typography>
            </Box>
            <Typography className={classes.title} variant="body2" component="p">
              {props.title}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
};

export default BigCard;
