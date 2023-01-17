import {
  Box,
  Button,
  Divider,
  Grid,
  InputBase,
  makeStyles,
  Switch,
  Typography,
} from "@material-ui/core";
import React from "react";
import GiftPng from "images/gift.webp";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { ConnectToPort } from "store/cart/cart.action";
import { useDispatch, useSelector } from "react-redux";
import { useRouteMatch } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: 18,
    fontWeight: 700,
    textTransform: "capitalize",
  },
  inputclass: {
    width: "100%",
    borderRadius: 5,
    padding: "4px 15px",
    border: "1px solid rgba(0,0,0,0.2)",
    boxShadow: "0px 0px 0px 1px rgba(0,0,0,0.0.5)",
  },
  inputBox: {
    padding: "5px",
  },
  Gift: {
    backgroundColor: "rgba(0,0,0,0.05)",
    width: "100%",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    borderRadius: 5,
    marginBottom: 20,
  },
  prevbtn: {
    color: "#115293",
    justifyContent: "space-between",
    display: "flex",
    width: "110px",
    textTransform: "capitalize",
    backgroundColor: "transparent",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  submit: {
    background: "#ffd426",
    color: "black",
    padding: "12px 20px",
    "&:hover": {
      background: "#ffc826",
    },
  },
  labelerr: {
    color: "red",
    fontSize: "12px",
    textAlign: "end",
    margin: "10px 30px",
    textTransform: "lower-case",
  },
}));
const PayForm = ({
  MapAddress,
  handleSubmit,
  register,
  detail,
  address,
  getway,
}) => {
  const classes = useStyles();
  const [IsGift, setIsGift] = React.useState(false);
  const match = useRouteMatch({ path: "/:language/:city" });
  const profile = useSelector((state) => state.profile);
  const handleChange = (event) => {
    setIsGift(event.target.checked);
  };
  const dispatch = useDispatch();
  const SubmitConnectToPort = (data) => {
    dispatch(
      ConnectToPort(
        profile?.detail?.data[0].id,
        match.params.language,
        address,
        getway,
        data.description,
        false,
        detail.tel,
        detail.lat,
        detail.long
      )
    );
  };
  return (
    <form>
      <Grid container>
        <Grid item xs={12}>
          <Box className={classes.inputBox}>
            <InputBase
              value={detail.title}
              className={classes.inputclass}
              placeholder="Address"
              name="address"
              inputRef={register}
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box className={classes.inputBox}>
            <InputBase
              className={classes.inputclass}
              name="name"
              value={MapAddress}
              placeholder="Name"
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box className={classes.inputBox}>
            <InputBase
              className={classes.inputclass}
              name="tel"
              value={detail.tel}
              placeholder="Phone Number"
            />
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box className={classes.inputBox}>
            <InputBase
              multiline
              rows={4}
              className={classes.inputclass}
              placeholder="Description"
              name="description"
              inputRef={register}
            />
          </Box>
        </Grid>
      </Grid>
      <Divider style={{ margin: "20px 0" }} />
      <Box className={classes.Gift}>
        <img width="30px" height="30px" src={GiftPng} />
        <Typography>Send my order as a gift</Typography>
        <Switch
          checked={IsGift}
          onChange={handleChange}
          name="gift"
          size="small"
          inputProps={{ "aria-label": "secondary checkbox" }}
        />
      </Box>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Button className={classes.prevbtn}>
          <ArrowBackIcon />
          <Typography>previous</Typography>
        </Button>
        <Button
          disabled={address === 0 || getway === 0 ? true : false}
          onClick={handleSubmit(SubmitConnectToPort)}
          className={classes.submit}
        >
          Proceed to Secure Checkout
        </Button>
      </Box>
      {address === 0 || getway === 0 ? (
        <Typography className={classes.labelerr}>
          Please Choose getWay and Address
        </Typography>
      ) : null}
    </form>
  );
};

export default PayForm;
