import {
  Box,
  Button,
  makeStyles,
  Typography,
  IconButton,
  CircularProgress,
} from "@material-ui/core";
import NumberInput from "components/NumberInput/NumberInput";
import CloseIcon from "@material-ui/icons/Close";
import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  modalBox: {
    position: "relative",
    height: "100%",
    width: "100%",
  },
  itemadded: {
    color: "#3f9986",
    fontSize: 15,
    fontWeight: 700,
    display: "flex",
    alignItems: "end",
    justifyContent: "space-between",
    width: 140,
    padding: "0 6px",
  },
  modify: {
    margin: "20px 0",
    minHeight: 50,
    width: "100%",
    padding: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  imagemodal: {
    width: 65,
    height: 65,
    objectFit: "cover",
    border: "1px solid rgba(0,0,0,0.1)",
  },
  modaltitle: {
    fontSize: 12,
    fontWeight: 700,
    margin: "0 12px",
  },
  buttonsIngredientModal: {
    width: 70,
    height: 25,
    fontSize: 20,
  },
  checkoutBox: {
    margin: "10px 0",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  checkoutmodal: {
    backgroundColor: "#ffcc00",
    color: "black",
    width: "130px",
    margin: "0 10px",
    padding: "11px",
    fontSize: 12,
    "&:hover": {
      backgroundColor: "#ffcc00",
    },
  },
  pricemodal: {
    fontSize: 15,
    fontWeight: 600,
    color: "rgba(0,0,0,0.5)",
  },
  modalSlider: {
    backgroundColor: "#fafafa",
    padding: "5px",
  },
  addmodaltitle: {
    fontSize: 17,
    fontWeight: 700,
    margin: "0 15px",
  },
}));
const ModalBox = ({
  add,
  remove,
  item,
  match,
  close,
  loading,
  productname,
  productPrice,
  productImage,
}) => {
  const classes = useStyles();
  const currency = useSelector((state) => state.currency);
  const Reducecurrent = 100 * parseFloat(currency.current.value);
  const cardPrice = parseFloat(productPrice);
  const DiscountPrice = (Reducecurrent * cardPrice) / 100;
  return (
    <Box className={classes.modalBox}>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        width="100%"
      >
        <IconButton onClick={close} style={{ padding: "0" }}>
          <CloseIcon />
        </IconButton>
      </Box>
      <Typography className={classes.addmodaltitle}>
        Add this product to your cart
      </Typography>
      <Box className={classes.modify}>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          width="100%"
        >
          <Box display="flex">
            <img
              className={classes.imagemodal}
              alt=""
              src={`https://nandwsouk.com/${productImage}`}
            />
            <Typography className={classes.modaltitle}>
              {productname}
            </Typography>
          </Box>
          <Typography className={classes.modaltitle}>
            {currency?.current?.symbol}
            {DiscountPrice}
          </Typography>
        </Box>
      </Box>
      <Box className={classes.checkoutBox}>
        <Box
          display="flex"
          justifyContent="center"
          flexDirection="column"
          margin="0 10px"
        >
          {loading ? (
            <Box display="flex" justifyContent="center" width="100%">
              <CircularProgress
                style={{
                  color: "#fc0",
                  width: "30px",
                  height: "30px",
                  margin: "0 30px",
                }}
              />
            </Box>
          ) : (
            <NumberInput
              increase={add}
              decrease={remove}
              val={item}
              min={0}
              max={5}
              className={classes.buttonsIngredientModal}
            />
          )}
        </Box>
        <Link to={`/${match.params.language}/${match.params.city}/Cart/`}>
          <Button className={classes.checkoutmodal}>Check Out</Button>
        </Link>
      </Box>
    </Box>
  );
};

export default ModalBox;
