import {
  Box,
  Button,
  Divider,
  FormControl,
  FormControlLabel,
  Grid,
  IconButton,
  InputBase,
  makeStyles,
  Radio,
  RadioGroup,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import PaymentTitle from "components/mobile/payment_Page/PaymentTitle";
import Geocode from "react-geocode";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import BorderTopIcon from "@material-ui/icons/BorderTop";
import AddIcon from "@material-ui/icons/Add";
import { useDispatch, useSelector } from "react-redux";
import {
  getGateways,
  getAddresses,
  addAddress,
  ConnectToPort,
} from "store/cart/cart.action";
import { useRouteMatch } from "react-router";
import MyMap from "../../../components/mobile/payment_Page/map/MyMap";
import getPlaces from "../../../components/mobile/payment_Page/map/getPlaces";
import { useForm } from "react-hook-form";
const useStyles = makeStyles((theme) => ({
  root: {
    margin: "52px 0px",
    height: "100%",
    minHeight: "82vh",
    backgroundColor: "#f7f7f7",
  },
  UserBox: {
    position: "relative",
    backgroundColor: "white",
    margin: "15px auto",
    width: "100%",
    padding: "5px 15px",
    borderBottom: "1px solid rgba(0,0,0,0.1)",
  },
  userDescriptions: {
    fontSize: 20,
    fontWeight: 700,
    textTransform: "capitalize",
    color: "black",
  },
  username: {
    fontSize: 18,
    color: "black",
  },
  useremail: {
    fontSize: 14,
    color: "rgba(0,0,0,0.6)",
  },
  nextButton: {
    backgroundColor: "#fc0",
    margin: "10px 0",
    color: "black",
    width: "90%",
    padding: "10px 20px",
    "&:hover": {
      backgroundColor: "#fc0",
    },
  },
  itemTitles: {
    fontSize: 15,
    textShadow: "1px 1px 1px rgba(0,0,0,0.5)",
    margin: "10px",
  },
  formControl: {
    marginTop: 30,
    width: "100%",
  },
  present: {
    color: "#cd5f76",
    fontSize: 25,
    fontWeight: 700,
  },
  presentText: {
    color: "black",
    fontSize: 13,
    margin: "0 20px",
  },
  addnewaddress: {
    backgroundColor: "white",
    margin: "10px 0",
    color: "black",
    width: "100%",
    padding: "10px 20px",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "white",
    },
  },
  "@global": {
    ".MuiFormControlLabel-root": {
      margin: "0px !important",
      borderBottom: "1px solid rgba(0,0,0,0.1)",
      padding: "10px 0",
    },
    ".map-container": {
      height: "400px",
      width: "100%",
    },

    ".map-ref": {
      height: "100%",
      "&::after": {
        color: "red",
        position: "absolute",
        content: "''",
        fontSize: 30,
        left: "50%",
        right: "50%",
        top: "50%",
        bottom: "50%",
        backgroundImage: "url(/static/images/icons/black_pin.svg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        width: 30,
        height: 30,
      },
    },
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
}));
const PaymentMobile = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [level, setlevel] = useState(1);
  const [getway, setgetway] = useState(null);
  const [address, setaddress] = useState(null);
  const [Mapaddress, setMapaddress] = useState("");
  const match = useRouteMatch({ path: "/:language/:city" });
  const cart = useSelector((state) => state.cart);
  const profile = useSelector((state) => state.profile);
  const currency = useSelector((state) => state.currency);
  const { register, handleSubmit } = useForm();
  const places = getPlaces();
  const [placeIndex, setPlaceIndex] = useState(0);
  const [bound, setBound] = useState({});
  useEffect(() => {
    dispatch(getAddresses(profile?.detail?.data[0].id, match.params.language));
    dispatch(getGateways());
  }, []);
  const handlegetwayChange = (event) => {
    setgetway(event.target.value);
  };
  const handleAddressChange = (event) => {
    setaddress(event.target.value);
  };
  const Totalprice = [];
  cart.allcarts.map((item, i) => {
    Totalprice.push(parseFloat(item?.price) * item?.count);
  });
  const Reducecurrent = 100 * parseFloat(currency.current.value);
  Geocode.setApiKey("AIzaSyAAoHnj5BKKPkfyy7TbkQkl-DqWd_i00RI");
  Geocode.fromLatLng(`${bound?.Va?.i}`, `${bound?.Qa?.i}`).then(
    (response) => {
      const address = response.results[0].formatted_address;
      setMapaddress(address);
    },
    (error) => {
      console.error(error);
    }
  );
  const SubmitConnectToPort = (data) => {
    dispatch(
      ConnectToPort(
        profile?.detail?.data[0].id,
        match.params.language,
        address,
        getway,
        "description",
        false,
        "tel",
        bound?.Va?.i,
        bound?.Qa?.i
      )
    );
  };
  const AddAddressSubmit = (data) => {
    setlevel(3);
    dispatch(
      addAddress(
        profile?.detail?.data[0].id,
        match.params.language,
        Mapaddress,
        "description",
        data.tel,
        bound?.Va?.i,
        bound?.Qa?.i,
        Mapaddress
      )
    );
  };
  return (
    <div className={classes.root}>
      <PaymentTitle title={"Payment"} Level={level} setlevel={setlevel} />
      {level === 1 && (
        <>
          <Box className={classes.UserBox}>
            <Typography className={classes.userDescriptions}>
              Your Personal Informations
            </Typography>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              marginTop="20px"
            >
              <Box display="flex">
                <PersonOutlineIcon />
                <Box display="flex" flexDirection="column" margin="0 20px">
                  <Typography className={classes.username}>
                    {profile?.detail?.data[0].data.displayName}
                  </Typography>
                  <Typography className={classes.useremail}>
                    {profile?.detail?.data[0].data.email}
                  </Typography>
                </Box>
              </Box>
              <IconButton>
                <ChevronRightIcon />
              </IconButton>
            </Box>
          </Box>
          <Box className={classes.UserBox}>
            <Typography className={classes.userDescriptions}>
              Your Orders
            </Typography>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              marginTop="20px"
            >
              <Box display="flex">
                <BorderTopIcon />
                <Box display="flex" flexDirection="column" margin="0 20px">
                  <Typography className={classes.username}>
                    My Last Orders
                  </Typography>
                </Box>
              </Box>
              <IconButton>
                <ChevronRightIcon />
              </IconButton>
            </Box>
          </Box>
          <Box className={classes.UserBox}>
            <Typography className={classes.userDescriptions}>
              Total Price
            </Typography>
            <Box marginTop="30px">
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography className={classes.itemTitles}>
                  Products({cart.allcarts.length})
                </Typography>
                <Typography style={{ fontSize: "14px", margin: "10px" }}>
                  {currency?.current?.symbol}
                  {(Reducecurrent * Totalprice.reduce((a, b) => a + b, 0)) /
                    100}
                </Typography>
              </Box>
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography className={classes.itemTitles}>discount</Typography>
                <Typography
                  style={{
                    fontSize: "14px",
                    color: "red",
                    fontWeight: 700,
                    margin: "10px",
                  }}
                >
                  - {currency?.current?.symbol} 14
                </Typography>
              </Box>
              <Divider />
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography className={classes.itemTitles}>
                  Last Price
                </Typography>
                <Typography
                  style={{ fontSize: 15, fontWeight: 700, margin: "10px" }}
                >
                  {currency?.current?.symbol}
                  {(Reducecurrent * Totalprice.reduce((a, b) => a + b, 0)) /
                    100}
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box padding="20px" display="flex" justifyContent="center">
            <Button onClick={() => setlevel(2)} className={classes.nextButton}>
              Next
            </Button>
          </Box>
        </>
      )}
      {level === 2 && (
        <>
          <Box className={classes.UserBox}>
            <Typography className={classes.userDescriptions}>
              Select payment gateway
            </Typography>
            <FormControl component="fieldset" className={classes.formControl}>
              <RadioGroup
                aria-label="cash"
                name="cash"
                value={getway}
                onChange={handlegetwayChange}
              >
                {cart.getwayes.map((item, i) => {
                  return (
                    <FormControlLabel
                      value={item.id}
                      control={<Radio />}
                      label={item.title}
                    />
                  );
                })}
              </RadioGroup>
            </FormControl>
            <Box display="flex" marginTop="30px" alignItems="center">
              <Typography className={classes.present}>100%</Typography>
              <Typography className={classes.presentText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget. Lorem ipsum
              </Typography>
            </Box>
            <Box padding="20px" display="flex" justifyContent="center">
              <Button
                disabled={(getway === null) & true}
                onClick={() => setlevel(3)}
                className={classes.nextButton}
              >
                Next
              </Button>
            </Box>
          </Box>
        </>
      )}
      {level === 3 && (
        <>
          <Box className={classes.UserBox}>
            <Typography className={classes.userDescriptions}>
              Select Shiping Address :
            </Typography>
            <FormControl component="fieldset" className={classes.formControl}>
              <RadioGroup
                aria-label="address"
                name="address"
                value={address}
                onChange={handleAddressChange}
              >
                {cart.getaddress.map((item, i) => {
                  return (
                    <FormControlLabel
                      value={item.id}
                      control={<Radio />}
                      label={item.title}
                    />
                  );
                })}
              </RadioGroup>
            </FormControl>
            <Box onClick={() => setlevel(4)} className={classes.addnewaddress}>
              <AddIcon /> Add New address
            </Box>
            <Box padding="20px" display="flex" justifyContent="center">
              <Button
                disabled={(address === null) & true}
                onClick={handleSubmit(SubmitConnectToPort)}
                className={classes.nextButton}
              >
                Proceed to Secure Checkout
              </Button>
            </Box>
          </Box>
        </>
      )}
      {level === 4 && (
        <>
          <MyMap
            zoom={15}
            center={{
              lat: places[placeIndex].lat,
              lng: places[placeIndex].lng,
            }}
            events={{ onBoundsChangerd: (arg) => setBound(arg) }}
          ></MyMap>
          <Grid container>
            <Grid item xs={12}>
              <Box className={classes.inputBox}>
                <InputBase
                  value={Mapaddress}
                  className={classes.inputclass}
                  placeholder="Address"
                  name="address"
                  inputRef={register}
                />
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box className={classes.inputBox}>
                <InputBase
                  className={classes.inputclass}
                  placeholder="Phone Number"
                  name="tel"
                  inputRef={register}
                />
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box className={classes.inputBox}>
                <InputBase
                  className={classes.inputclass}
                  placeholder="Name"
                  name="name"
                  inputRef={register}
                />
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box display="flex" className={classes.inputBox}>
                <Button
                  onClick={handleSubmit(AddAddressSubmit)}
                  style={{ margin: "auto" }}
                  className={classes.nextButton}
                >
                  Add
                </Button>
              </Box>
            </Grid>
          </Grid>
        </>
      )}
    </div>
  );
};

export default PaymentMobile;
