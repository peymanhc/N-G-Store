import {
  Box,
  Button,
  Grid,
  IconButton,
  InputBase,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import PayForm from "components/PaymentPage/PayForm";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import Carousel from "react-multi-carousel";
import { useDispatch, useSelector } from "react-redux";
import { getAddresses, RemoveAddress } from "store/cart/cart.action";
import { getGateways } from "store/cart/cart.action";
import { useRouteMatch } from "react-router-dom";
import EditIcon from "@material-ui/icons/Edit";
import SimpleModal from "components/modal/SimpleModal";
import { useForm } from "react-hook-form";
import { addAddress } from "store/cart/cart.action";
import AddIcon from "@material-ui/icons/Add";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import { editAddress } from "store/cart/cart.action";
import MyMap from "components/mobile/payment_Page/map/MyMap";
import Geocode from "react-geocode";
const useStyles = makeStyles((theme) => ({
  "@global": {
    ".MuiFormControlLabel-root": {
      margin: "0px !important",
      borderBottom: "1px solid rgba(0,0,0,0.1)",
      padding: "10px 0",
    },
    ".map-container": {
      height: "100%",
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
  root: {
    padding: "20px",
    width: "100%",
  },
  title: {
    fontSize: 18,
    fontWeight: 700,
    textTransform: "capitalize",
  },
  addressTitle: {
    fontSize: 15,
    color: "rgba(0,0,0,0.8)",
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    "-webkit-line-clamp": 2,
    "-webkit-box-orient": "vertical",
  },
  inputclass: {
    width: "100%",
    borderRadius: 5,
    padding: "3px 15px",
    border: "1px solid rgba(0,0,0,0.2)",
    boxShadow: "0px 0px 0px 1px rgba(0,0,0,0.0.5)",
  },
  inputBox: {
    padding: "5px",
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
    width: "150px",
    padding: "12px 20px",
    "&:hover": {
      background: "#ffc826",
    },
  },
  slideItems: {
    width: "95%",
    height: 120,
    border: "1px solid rgba(0,0,0,0.1)",
    boxShadow: "0px 0px 0px 1px rgba(0,0,0,0.0.5)",
    borderRadius: 5,
    padding: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    cursor: "pointer",
    position: "relative",
  },
  buttonGp: {
    height: 0,
    width: 80,
    backgroundColor: "white",
    right: 30,
  },
  arrowBtn: {
    marginTop: "-15px",
    width: 30,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 30,
    position: "absolute",
    border: "none",
    backgroundColor: "#e8e8e8",
    borderRadius: "50%",
    cursor: "pointer",
  },
  arrow: {
    width: 10,
    border: "none",
    height: "60%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "black",
    margin: "auto",
  },
  leftarrow: {
    transform: "rotateY(180deg)",
  },
  newaddressbtn: {
    display: "flex",
    padding: "2px",
    border: "1px solid rgba(0,0,0,0.1)",
    margin: "0 15px",
  },
  editaddress: {
    position: "absolute",
    left: 0,
    bottom: 0,
    width: 40,
    height: 40,
  },
  modalbody: {
    top: "20%",
    position: "relative",
    margin: "auto",
    borderRadius: 4,
    backgroundColor: "white",
    overFlow: "hidden",
    width: "100%",
    maxWidth: 600,
    maxHeight: 500,
    height: "100%",
  },
  modalWrapper: {
    flexDirection: "column",
    padding: 15,
    display: "flex",
    width: "100%",
    height: "100%",
    borderRadius: 4,
    border: "1px solid gray",
    position: "relative",
  },
  labelerr: {
    fontSize: 9,
    color: "red",
    display: "flex",
    justifyContent: "end",
    margin: "10px 0",
  },
}));

const ButtonGroup = ({ next, previous }) => {
  const classes = useStyles();
  return (
    <div className={classes.buttonGp}>
      <button
        style={{ left: 0 }}
        className={classes.arrowBtn}
        onClick={() => previous()}
      >
        <span className={classes.arrow}>
          <ArrowBackIcon style={{ fontSize: 13 }} />
        </span>
      </button>
      <button
        style={{ right: 0 }}
        className={classes.arrowBtn}
        onClick={() => next()}
      >
        <span
          style={{ transform: "rotateY(180deg)" }}
          className={classes.arrow}
        >
          <ArrowBackIcon style={{ fontSize: 13 }} />
        </span>
      </button>
    </div>
  );
};

const PaymentPage = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const match = useRouteMatch({ path: "/:language/:city" });
  const profile = useSelector((state) => state.profile);
  const { register, handleSubmit } = useForm();
  useEffect(() => {
    dispatch(getAddresses(profile?.detail?.data[0].id, match.params.language));
    dispatch(getGateways());
  }, []);
  const [getway, setGetway] = useState(0);
  const [address, setaddress] = useState(0);
  const [location, setLocation] = useState({ lat: 48.8584, long: 2.2945 });
  const [open, setOpen] = useState(false);
  const [Mapaddress, setMapaddress] = useState("");
  const [EditModal, setEditModal] = useState(false);
  const [ID, setID] = useState(0);
  const [bound, setBound] = useState({});
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = (index) => {
    setOpen(true);
  };
  const handleCloseEdit = () => {
    setEditModal(false);
  };
  const handleOpenEdit = (index) => {
    setEditModal(true);
    setID(index);
  };
  const AddAddressSubmit = (data) => {
    setOpen(false);
    dispatch(
      addAddress(
        profile?.detail?.data[0].id,
        match.params.language,
        Mapaddress,
        data.address,
        data.tel,
        bound?.Va?.i,
        bound?.Qa?.i,
        data.description
      )
    );
  };
  const EditAddressSubmit = (data) => {
    setEditModal(false);
    dispatch(
      editAddress(
        profile?.detail?.data[0].id,
        ID,
        data.title,
        data.address,
        data.tel,
        bound?.Va?.i,
        bound?.Qa?.i,
        Mapaddress
      )
    );
  };
  const RemoveAddressSubmit = (data) => {
    dispatch(RemoveAddress(profile?.detail?.data[0].id, ID));
    setEditModal(false);
  };
  const SetAddress = (data) => {
    setLocation(data);
    setaddress(data.id);
  };
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
  return (
    <Box className={classes.root}>
      <Grid container>
        <Grid item xs={12} md={6}>
          <Box>
            <Typography className={classes.title}>
              Select Payment Type :
            </Typography>
            <Box margin="20px 0">
              <Carousel
                additionalTransfrom={0}
                arrows={false}
                draggable
                customButtonGroup={
                  <ButtonGroup next={props.next} previous={props.previous} />
                }
                autoPlay={true}
                autoPlaySpeed={10000}
                focusOnSelect={false}
                keyBoardControl
                minimumTouchDrag={80}
                infinite={false}
                showDots={false}
                responsive={{
                  desktop: {
                    breakpoint: {
                      max: 3000,
                      min: 0,
                    },
                    items: 5,
                    partialVisibilityGutter: 40,
                  },
                }}
                slidesToSlide={2}
                swipeable
              >
                {cart.getwayes.map((item, i) => {
                  return (
                    <Box
                      style={{
                        border:
                          getway === item.id
                            ? "2px solid #fc0"
                            : "1px solid rgba(0,0,0,0.1)",
                      }}
                      onClick={() => setGetway(item.id)}
                      className={classes.slideItems}
                      key={i}
                    >
                      <img width="50px" height="50px" src={item.imgSrc} />
                      <Typography> {item.title}</Typography>
                    </Box>
                  );
                })}
              </Carousel>
            </Box>
          </Box>
          <Box>
            <Box display="flex" alignItems="center">
              <Typography className={classes.title}>
                Select Shiping Address :
              </Typography>
              <Button className={classes.newaddressbtn} onClick={handleOpen}>
                <AddIcon />
              </Button>
            </Box>
            <Box margin="20px 0">
              <Carousel
                additionalTransfrom={0}
                arrows={false}
                draggable
                customButtonGroup={
                  <ButtonGroup next={props.next} previous={props.previous} />
                }
                autoPlay={true}
                autoPlaySpeed={10000}
                focusOnSelect={false}
                keyBoardControl
                minimumTouchDrag={80}
                infinite={false}
                showDots={false}
                responsive={{
                  desktop: {
                    breakpoint: {
                      max: 3000,
                      min: 0,
                    },
                    items: 4,
                    partialVisibilityGutter: 40,
                  },
                }}
                slidesToSlide={2}
                swipeable
              >
                {cart.getaddress.map((item, i) => {
                  return (
                    <Box
                      style={{
                        border:
                          address === item.id
                            ? "2px solid #fc0"
                            : "1px solid rgba(0,0,0,0.1)",
                      }}
                      onClick={() => SetAddress(item)}
                      className={classes.slideItems}
                      key={i}
                    >
                      <Typography className={classes.addressTitle}>
                        {item.title}
                      </Typography>
                      <IconButton
                        className={classes.editaddress}
                        onClick={() => handleOpenEdit(item.id)}
                      >
                        <EditIcon style={{ fontSize: "15px" }} />
                      </IconButton>
                    </Box>
                  );
                })}
              </Carousel>
            </Box>
          </Box>
          <PayForm
            register={register}
            handleSubmit={handleSubmit}
            detail={location}
            address={address}
            getway={getway}
            MapAddress={
              location.description === ""
                ? location.address
                : location.description
            }
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Box style={{ width: "100%", height: "90%", padding: 20 }}>
            <MyMap
              zoom={15}
              center={{
                lat: location.lat,
                lng: location.long,
              }}
              events={{ onBoundsChangerd: (arg) => setBound(arg) }}
            ></MyMap>
          </Box>
        </Grid>
      </Grid>
      <SimpleModal
        className={classes.modalbody}
        handleClose={handleClose}
        open={open}
        body={
          <form
            onSubmit={handleSubmit(AddAddressSubmit)}
            noValidate
            className={classes.modalWrapper}
          >
            {console.log(bound)}
            <Box height="300px">
              <MyMap
                zoom={15}
                center={{
                  lat: location.lat,
                  lng: location.long,
                }}
                events={{ onBoundsChangerd: (arg) => setBound(arg) }}
              ></MyMap>
            </Box>
            <Typography style={{ margin: "5px" }} className={classes.title}>
              Add a New Address :
            </Typography>
            <Box className={classes.inputBox}>
              <InputBase
                className={classes.inputclass}
                placeholder="title"
                value={Mapaddress}
                name="title"
                inputRef={register}
                id="title"
              />
            </Box>
            <Box className={classes.inputBox}>
              <InputBase
                className={classes.inputclass}
                placeholder="address"
                name="address"
                inputRef={register}
                id="address"
              />
            </Box>
            <Box className={classes.inputBox}>
              <InputBase
                className={classes.inputclass}
                placeholder="Phone Number"
                name="tel"
                inputRef={register}
                id="tel"
              />
            </Box>
            <Box marginBottom="50px" className={classes.inputBox}>
              <InputBase
                className={classes.inputclass}
                placeholder="description"
                name="description"
                inputRef={register}
                id="description"
              />
            </Box>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              position="absolute"
              bottom="0"
              left="0"
              right="0"
              padding="15px 20px"
              width="100%"
            >
              <Button
                onClick={() => setOpen(false)}
                className={classes.prevbtn}
              >
                <ArrowBackIcon />
                <Typography>previous</Typography>
              </Button>
              <Button type="submit" className={classes.submit}>
                Submit
              </Button>
            </Box>
          </form>
        }
      />
      <SimpleModal
        className={classes.modalbody}
        handleClose={handleCloseEdit}
        open={EditModal}
        body={
          <form
            onSubmit={handleSubmit(EditAddressSubmit)}
            noValidate
            className={classes.modalWrapper}
          >
            <Box height="300px">
              {}
              <MyMap
                zoom={15}
                center={{
                  lat: location.lat,
                  lng: location.long,
                }}
                events={{ onBoundsChangerd: (arg) => setBound(arg) }}
              ></MyMap>
            </Box>
            <Typography style={{ margin: "5px" }} className={classes.title}>
              EditAddress :
            </Typography>
            <Box className={classes.inputBox}>
              <InputBase
                className={classes.inputclass}
                placeholder="title"
                name="title"
                value={Mapaddress}
                inputRef={register}
                id="title"
                address
              />
            </Box>
            <Box className={classes.inputBox}>
              <InputBase
                className={classes.inputclass}
                placeholder="address"
                name="address"
                defaultValue={location.address}
                inputRef={register}
                id="address"
              />
            </Box>
            <Box className={classes.inputBox}>
              <InputBase
                className={classes.inputclass}
                placeholder="Phone Number"
                name="tel"
                defaultValue={location.tel}
                inputRef={register}
                id="tel"
              />
            </Box>
            <Box marginBottom="50px" className={classes.inputBox}>
              <InputBase
                className={classes.inputclass}
                placeholder="description"
                name="description"
                inputRef={register}
                id="description"
              />
            </Box>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              position="absolute"
              bottom="0"
              left="0"
              right="0"
              padding="15px 20px"
              width="100%"
            >
              <IconButton onClick={RemoveAddressSubmit}>
                <DeleteOutlineIcon />
              </IconButton>
              <Button type="submit" className={classes.submit}>
                Submit
              </Button>
            </Box>
          </form>
        }
      />
    </Box>
  );
};

export default PaymentPage;
