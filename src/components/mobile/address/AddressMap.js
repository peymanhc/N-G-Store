import React, { useState } from "react";
import { Dialog, IconButton, Icon } from "@material-ui/core";
import { FormattedMessage } from "react-intl";
import { makeStyles } from '@material-ui/core/styles';

import GoogleMap from "components/location/GoogleMap";

const useStyles = makeStyles(() => ({
  closeButton: {
    width: "40px",
    height: "40px",
    position: "fixed",
    boxShadow: "0 4px 12px 0 rgba(0, 0, 0, 0.07)",
    backgroundColor: "white",
    padding: "5px",
    margin: "20px",
    zIndex: 30,
    right: 0,
  },
  overlay: {
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
    display: "flex",
    zIndex: "1",
    position: "absolute",
    flexDirection: "column",
    pointerEvents: "none",
    justifyContent: "center",
  },
  topModal: {
    flex: "1",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
  },
  addressTitle: {
    width: "100%",
    fontSize: "30px",
    marginTop: "20px",
    textAlign: "center",
    paddingLeft: "16px",
    paddingRight: "16px",
  },
  changeAddressBtn: {
    flex: "0 0 auto",
    height: "24px",
    cursor: "pointer",
    fontSize: "14px",
    marginTop: "20px",
    boxShadow: "0 2px 4px 0 rgba(96, 96, 96, 0.15)",
    paddingLeft: "14px",
    borderWidth: "0",
    paddingRight: "14px",
    borderRadius: "14px",
    pointerEvents: "auto",
    backgroundColor: "rgba(255, 255, 255, 0.8)",
  },
  centerModal: {
    display: "flex",
    position: "relative",
    minHeight: "143px",
    justifyContent: "center",
  },
  mapPin: {
    width: "50px",
    height: "50px",
    transform: "translateY(-20px)",
    alignSelf: "center",
  },
  bottomModal: {
    flex: "1",
    position: "relative",
  },
  myLocationBtn: {
    left: "20px",
    width: "calc(100% - 40px)",
    right: "20px",
    bottom: "20px",
    zIndex: "1",
    position: "absolute",
    pointerEvents: "auto",
    color: "#000",
    height: "52px",
    border: "0",
    display: "inline-block",
    padding: "0 20px",
    overflow: "hidden",
    fontSize: "16px",
    transition: "background 200ms",
    fontWeight: "400",
    userSelect: "none",
    borderRadius: "8px",
    backgroundColor: "rgb(255, 224, 51)",
  },
}));

const AddressMap = ({ open, closeDialog, address, selectAddress }) => {
  const classes = useStyles();

  const [location, setLocation] = useState("address");

  const addressHandler = (item) => {
    setLocation(item);
  };

  const addressClick = () => {
    selectAddress(location);
  };

  return (
    <Dialog
      onClose={closeDialog}
      aria-labelledby="customized-dialog-title"
      fullScreen
      open={open}
      classes={{ paper: classes.paperWidth }}
    >
      <IconButton
        aria-label="close"
        className={classes.closeButton}
        onClick={closeDialog}
      >
        <Icon className="text-lg text-black">close</Icon>
      </IconButton>
      <div className={classes.overlay}>
        <div className={classes.topModal}>
          <div className={classes.addressTitle}>{location.description}</div>
          <button className={classes.changeAddressBtn}>
            <FormattedMessage
              id="home.addressMap.ChangeAddress"
              defaultMessage="Change Shipping Address"
            />
          </button>
        </div>
        <div className={classes.bottomModal}>
          <button className={classes.myLocationBtn} onClick={addressClick}>
            <FormattedMessage
              id="home.addressMap.ImHere"
              defaultMessage="I'm here"
            />
          </button>
        </div>
      </div>
      <div className="h-full w-full opacity-75">
        <GoogleMap
          locationChange={addressHandler}
          lat={location.lat}
          lng={location.lng}
        />
      </div>
    </Dialog>
  );
};

export default AddressMap;
