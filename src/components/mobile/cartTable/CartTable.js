import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Typography from "@material-ui/core/Typography";
import { Box, Button, CircularProgress, IconButton } from "@material-ui/core";
import * as actions from "store/carts/carts.action";
import NumberInput from "components/NumberInput/NumberInput";
import { useDispatch, useSelector } from "react-redux";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import { useRouteMatch } from "react-router-dom";
import { saveCartOnline } from "store/cart/cart.action";
import AlertError from "components/alert/AlertError";
import { confirmAlert } from "react-confirm-alert";
import PlaylistAddIcon from "@material-ui/icons/PlaylistAdd";
import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  image: {
    height: 100,
    width: 100,
    margin: "auto 15px",
  },
  price: {
    fontSize: 20,
    color: "black",
    fontWeight: 700,
  },
  text: {
    fontSize: 13,
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    "-webkit-line-clamp": 2,
    "-webkit-box-orient": "vertical",
  },
  redtxt: {
    fontSize: 12,
    color: "red",
    fontWeight: 600,
  },
  txtgray: {
    fontSize: 12,
    color: "rgba(0,0,0,0.4)",
  },
  divider: {
    margin: 0,
  },
  deleteicon: {
    position: "absolute",
    bottom: 0,
  },
  name: {
    fontSize: 12,
    fontWeight: 700,
  },
  purchases: {
    fontSize: 11,
  },
  addtobasket: {
    backgroundColor: "#fc0",
    fontSize: 11,
    padding: "10px",
    textTransform: "capitalize",
    color: "black",
    "&:hover": {
      backgroundColor: "#fc0",
    },
  },
}));

function CartTable(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [loading, setloading] = useState(false);
  const [SIZE_ID, setSIZE_ID] = useState("");
  const match = useRouteMatch({ path: "/:language/:city" });
  const profile = useSelector((state) => state.profile);
  const cartLocalData = JSON.parse(localStorage.getItem("cart"));
  const item = props.count;
  const currency = useSelector((state) => state.currency);
  const Reducecurrent = 100 * parseFloat(currency.current.value);
  const cardPrice = parseFloat(props.price);
  const FirstPrice = (Reducecurrent * cardPrice) / 100;

  useEffect(() => {
    setSIZE_ID(props?.property?.properties?.map((item, i) => item?.id));
  }, []);

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
            { SIZE_ID: SIZE_ID[0], active: SIZE_ID[1] },
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
  return (
    <Box position="relative">
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        margin="0 15px"
        marginTop="15px"
      >
        <Typography variant="h6" className={classes.name}>
          {props.title}
        </Typography>
      </Box>
      <ListItem alignItems="flex-start">
        <Link to={`${match.url}/Product/${props.slug}/${props.id}`}>
          <ListItemAvatar>
            <img
              className={classes.image}
              src={`https://nandwsouk.com/${props.image}`}
            />
          </ListItemAvatar>
        </Link>
        <Box display="flex" flexDirection="column" flex={1}>
          <Typography
            component="span"
            variant="body2"
            className={classes.price}
            color="textPrimary"
          >
            {currency?.current?.symbol}
            {FirstPrice}
          </Typography>
          <Typography className={classes.text}>{props.text}</Typography>
          <Typography className={classes.redtxt}>
            ipsum dolor sit amet
          </Typography>
          <Typography className={classes.txtgray}>
            ipsum dolor sit amet
          </Typography>
          {loading ? (
            <CircularProgress
              style={{
                margin: "9px 20px",
                width: "25px",
                height: "25px",
                color: "#fc0",
              }}
            />
          ) : (
            <>
              {props.search === true ? (
                <Box width="150px" margin="10px 0">
                  <Link
                    to={`${match.url}/Product/${props.slug}/${props.id}`}
                    className={classes.addtobasket}
                  >
                    Add to Basket
                  </Link>
                </Box>
              ) : (
                <Box
                  style={{ borderRadius: 5, border: "1px solid red" }}
                  width="80px"
                  margin="10px 0"
                >
                  <NumberInput
                    increase={() =>
                      onIngredientAdded(props.title, (item + 1) * FirstPrice)
                    }
                    decrease={() =>
                      onIngredientRemoved(props.title, item * FirstPrice)
                    }
                    val={item}
                    min={0}
                    max={5}
                  />
                </Box>
              )}
            </>
          )}
        </Box>
        <Box display="flex" flexDirection="column" alignItems="space-between">
          <IconButton style={{ position: "absolute", right: 0, top: 0 }}>
            <FavoriteBorderIcon />
          </IconButton>
          {props.search === true ? (
            <IconButton
              style={{ position: "absolute", right: 0 }}
              className={classes.deleteicon}
            >
              <PlaylistAddIcon />
            </IconButton>
          ) : (
            <IconButton
              style={{ position: "absolute", right: 0 }}
              onClick={() => RemovecardHandler(props.title, 0)}
              className={classes.deleteicon}
            >
              <DeleteOutlineIcon />
            </IconButton>
          )}
        </Box>
      </ListItem>
      <Divider className={classes.divider} variant="inset" />
    </Box>
  );
}
export default CartTable;
