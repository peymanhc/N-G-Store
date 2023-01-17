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
import StarIcon from "@material-ui/icons/Star";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  card: {
    boxShadow: "none",
  },
  media: {
    height: 140,
    backgroundSize: "cover",
  },
  ratednumber: {
    fontSize: 11,
    display: "block ruby",
    color: "rgba(0,0,0,0.6)",
    fontWeight: 500,
  },
  lastprice: {
    fontSize: 20,
    fontWeight: 700,
    [theme.breakpoints.down("xs")]: {
      fontSize: 15,
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
    fontSize: 11,
    color: "rgba(0,0,0,0.7)",
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    "-webkit-line-clamp": 1,
    "-webkit-box-orient": "vertical",
  },
  lastpricemobile: {
    justifyContent: "space-between",
  },
  link: {
    textDecoration: "none",
    color: "black",
    margin: 10,
    display: "flex",
    height: 275,
    flexDirection: "column",
    border: "1px solid rgba(0,0,0,0.1)",
    boxShadow: "0px 2px 3px 0px rgba(0,0,0,0.1)",
  },
  staricon: {
    fontSize: 14,
    color: "#e0505d",
  },
  startxt: {
    fontSize: 13,
    margin: "0 3px",
    color: "rgba(0,0,0,0.6)",
  },
  company: {
    fontSize: 10,
    color: "rgba(0,0,0,0.6)",
  },
}));
const CardView1 = (props) => {
  const classes = useStyles();
  const match = useRouteMatch({ path: "/:language/:city" });
  const currency = useSelector((state) => state.currency);
  const Reducecurrent = 100 * parseFloat(currency.current.value);
  const cardLastPrice = parseFloat(props.price);
  const DiscountPrice = (Reducecurrent * cardLastPrice) / 100;
  return (
    <Link
      className={classes.link}
      style={{
        display: props.display,
      }}
      to={`${match.url}/Product/${props.slug}/${props.id}`}
    >
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={`https://nandwsouk.com/${props.image}`}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography className={classes.title} variant="body2" component="p">
              {props.title}
            </Typography>
            <Box
              className={classes.lastpricemobile}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Typography
                className={classes.lastprice}
                variant="h5"
                component="h2"
              >
                {currency?.current?.symbol}
                {DiscountPrice}
              </Typography>
              <Typography
                className={classes.offprice}
                variant="body2"
                component="p"
              >
                {props.recommend}%
              </Typography>
            </Box>
            <Typography className={classes.ratednumber} variant="subtitle2">
              12 reviews
            </Typography>
            <Box display="flex" alignItems="center">
              <StarIcon className={classes.staricon} />
              <Typography className={classes.startxt}>{props.rate}</Typography>
            </Box>
            <Typography className={classes.company}>Nike Company</Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
};

export default CardView1;
