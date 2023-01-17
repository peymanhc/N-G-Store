import {
  Box,
  Button,
  CircularProgress,
  IconButton,
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import NumberInput from "components/NumberInput/NumberInput";
import { DeleteOutline } from "@material-ui/icons";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "store/carts/carts.action";
import { Link, useRouteMatch } from "react-router-dom";
import { saveCartOnline } from "store/cart/cart.action";
import AlertError from "components/alert/AlertError";
import { confirmAlert } from "react-confirm-alert";
import {
  AddToFavrite,
  saveFavoriteOnline,
} from "store/favorite/favorite.action";
import { Skeleton } from "@material-ui/lab";
const useStyles = makeStyles((theme) => ({
  subtitle: {
    fontSize: 16,
    color: "rgba(0,0,0,0.9)",
    [theme.breakpoints.down("md")]: {
      fontSize: 11,
    },
  },
  price: {
    fontSize: 20,
    fontWeight: 700,
    [theme.breakpoints.down("md")]: {
      fontSize: 12,
    },
  },
  like: {
    display: "flex",
    color: "gray",
    flexDirection: "column-reverse",
  },
  imgcart: {
    width: "100%",
    height: 120,
    objectFit: "cover",
    margin: "auto",
    [theme.breakpoints.down("md")]: {
      height: 90,
    },
  },
  lastprice: {
    fontSize: 14,
    fontWeight: 700,
    margin: "8px 0",
    textAlign: "center",
  },
  propertyType: {
    fontSize: 10,
    width: 50,
    height: 20,
    margin: "0 2px",
    border: "1px solid rgba(0,0,0,0.1)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textTransform: "capitalize",
  },
  addtocart: {
    background: "#ffd426",
    color: "black",
    padding: "10px 20px",
    fontSize: 12,
    "&:hover": {
      background: "#ffc826",
    },
  },
  "@global": {
    ".MuiTableCell-root": {
      border: "none",
      width: "25%",
    },
  },
}));
const CardCart = (props) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  useEffect(() => {
    setSIZE_ID(props?.property?.properties?.map((item, i) => item?.id));
  }, []);
  const [SIZE_ID, setSIZE_ID] = useState("");
  const cart = useSelector((state) => state.cart);
  const currency = useSelector((state) => state.currency);
  const profile = useSelector((state) => state.profile);
  const [loading, setloading] = useState(false);
  const match = useRouteMatch({ path: "/:language/:city" });
  const item = props.count;
  const cartLocalData = JSON.parse(localStorage.getItem("cart"));

  const onIngredientAdded = (ingName, totalprice) => {
    setloading(true);
    setTimeout(() => {
      setloading(false);
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
      : confirmAlert({
          customUI: ({ onClose }) => {
            return (
              <div style={{ margin: "-70px" }}>
                <AlertError close={onClose} message={"First Login"} />
              </div>
            );
          },
        });
  };
  const onIngredientRemoved = (ingName, totalprice) => {
    setloading(true);
    setTimeout(() => {
      setloading(false);
    }, 1500);
    dispatch(actions.removeIngredient(ingName, totalprice));
    profile?.detail?.data &&
      dispatch(
        saveCartOnline(
          profile?.detail?.data[0].id,
          match.params.language,
          item - 1,
          { SIZE_ID: SIZE_ID[0], active: SIZE_ID[1] },
          "cart",
          props.id,
          "cart"
        )
      );
    for (var i = 0; i < cartLocalData.length; i++) {
      if (cartLocalData[i].pid === props.id) {
        cartLocalData.splice(i, 1);
      }
      localStorage.setItem("cart", JSON.stringify(cartLocalData));
    }
  };
  const HandleAddToFavorite = () => {
    profile?.detail?.data
      ? dispatch(
          saveFavoriteOnline(
            profile?.detail?.data[0].id,
            match.params.language,
            item + 1,
            { SIZE_ID: SIZE_ID[0], active: SIZE_ID[1] },
            "fav",
            match.params.id,
            "fav"
          )
        )
      : dispatch(
          AddToFavrite(
            profile?.detail?.data[0].id,
            match.params.language,
            item + 1,
            { SIZE_ID: SIZE_ID[0], active: SIZE_ID[1] },
            "fav",
            match.params.id,
            "fav"
          )
        );
  };
  const RemovecardHandler = (ingName, totalprice) => {
    dispatch(actions.removeIngredient(ingName, totalprice));
    profile?.detail?.data &&
      dispatch(
        saveCartOnline(
          profile?.detail?.data[0].id,
          match.params.language,
          0,
          { SIZE_ID: SIZE_ID[0], active: SIZE_ID[1] },
          "cart",
          props.id,
          "cart"
        )
      );
    for (var i = 0; i < cartLocalData.length; i++) {
      if (cartLocalData[i].pid === props.id) {
        cartLocalData.splice(i, 1);
      }
      localStorage.setItem("cart", JSON.stringify(cartLocalData));
    }
  };
  const Reducecurrent = 100 * parseFloat(currency.current.value);
  const cardPrice = parseFloat(props.price);
  const FirstPrice = (Reducecurrent * cardPrice) / 100;

  return (
    <div>
      <Table>
        {cart.loading ? (
          <TableBody variant="h1">
            <TableRow>
              <TableCell align="center">
                <Skeleton height="100px" />
              </TableCell>
              <TableCell align="center">
                <Skeleton height="10px" />
                <Skeleton height="10px" />
                <Skeleton height="10px" />
              </TableCell>
              <TableCell align="center">
                <Skeleton height="100px" />
              </TableCell>
              <TableCell align="center">
                <Skeleton height="10px" />
                <Skeleton height="10px" />
                <Skeleton height="10px" />
              </TableCell>
              <TableCell align="center">
                <Skeleton height="100px" />
              </TableCell>
            </TableRow>
          </TableBody>
        ) : (
          <TableBody>
            <TableRow>
              <TableCell align="center">
                <Link to={`${match.url}/Product/${props.slug}/${props.id}`}>
                  <img
                    className={classes.imgcart}
                    alt="cart1"
                    src={`https://nandwsouk.com/${props?.image}`}
                  />
                </Link>
              </TableCell>
              <TableCell align="center">
                <Box
                  style={{ maxWidth: 250 }}
                  display="flex"
                  flexDirection="column"
                >
                  <Typography className={classes.title} align="left">
                    {props.brand}
                  </Typography>
                  <Typography className={classes.subtitle} align="left">
                    {props.title}
                  </Typography>
                  <Typography className={classes.subtitle} align="left">
                    {props.text}
                  </Typography>
                </Box>
              </TableCell>
              {props.wish === true ? null : (
                <TableCell align="center">
                  <Box marginX="auto" width="100px">
                    {loading ? (
                      <CircularProgress style={{ color: "#fc0" }} />
                    ) : (
                      <NumberInput
                        increase={() =>
                          onIngredientAdded(
                            props.title,
                            (item + 1) * FirstPrice
                          )
                        }
                        decrease={() =>
                          onIngredientRemoved(props.title, item * FirstPrice)
                        }
                        val={item}
                        min={0}
                        max={5}
                      />
                    )}
                    <Typography className={classes.lastprice}>
                      {currency?.current?.symbol} {item * FirstPrice}
                    </Typography>
                    <Box
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                    >
                      {props?.property?.properties?.map((item, i) => (
                        <Box
                          key={i}
                          style={{ color: `${item?.PropertyName}` }}
                          className={classes.propertyType}
                        >
                          {item?.PropertyName}
                        </Box>
                      ))}
                    </Box>
                  </Box>
                </TableCell>
              )}
              <TableCell align="center">
                <Typography className={classes.price}>
                  {currency?.current?.symbol} {FirstPrice}
                </Typography>
              </TableCell>
              <TableCell
                style={{ display: props.wish === true ? "table-cell" : "flex" }}
                className={classes.like}
                align="right"
              >
                <Box display="flex" flexDirection="column">
                  <IconButton
                    onClick={() => RemovecardHandler(props.title, 0)}
                    color="inherit"
                  >
                    <DeleteOutline />
                  </IconButton>
                  {props.wish === true ? (
                    <Button
                      onClick={() =>
                        onIngredientAdded(props.title, (item + 1) * FirstPrice)
                      }
                      className={classes.addtocart}
                    >
                      Add To basket
                    </Button>
                  ) : (
                    <IconButton onClick={HandleAddToFavorite} color="inherit">
                      <FavoriteBorderIcon />
                    </IconButton>
                  )}
                </Box>
              </TableCell>
            </TableRow>
          </TableBody>
        )}
      </Table>
    </div>
  );
};

export default CardCart;
