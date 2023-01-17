import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import classNames from "classnames";
import { FormattedMessage } from "react-intl";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { locationChange } from "store/location";
import { openDialog } from "store/dialog";
import { closeDialog } from "store/dialog";

import AddressMap from "components/mobile/address/AddressMap";
import LocationDrawer from "components/mobile/header/drawer/LocationDrawer";

const useStyles = makeStyles((theme) => ({
  root: {
    zIndex: "6",
    top: "40px",
    position: "sticky",
    marginLeft: "auto",
    marginRight: "auto",
    width: "50%",
  },
  btn: {
    border: "none",
    height: "40px",
    display: "flex",
    position: "relative",
    overflow: "hidden",
    fontSize: "14px",
    textAlign: "center",
    background: "rgb(255, 224, 51)",
    boxShadow:
      "0 4px 12px 0 rgba(255, 231, 95, 0.3), 0 2px 4px 0 rgba(255, 224, 51, 0.3)",
    transition: "background 200ms",
    paddingTop: "0",
    alignItems: "center",
    lineHeight: "40px",
    fontWeight: "500",
    userSelect: "none",
    paddingLeft: "20px",
    paddingRight: "20px",
    borderRadius: "100px",
    paddingBottom: "0",
    justifyContent: "center",
    "&:before": {
      top: "0",
      left: "0",
      width: "60px",
      bottom: "0",
      content: '""',
      zIndex: "1",
      position: "absolute",
      background:
        "linear-gradient(to right, rgb(255, 224, 51) 0, rgb(255, 224, 51) 20px, rgba(255, 224, 51, 0))",
      transition: "inherit",
    },
  },
  buttonContent: {
    textAlign: "center",
    whiteSpace: "nowrap",
    width: "410px",
    overflow: "hidden",
    textOverflow: "clip",
  },
  icon: {
    backgroundImage: "url(/static/images/icons/map-location.svg)",
    backgroundSize: "24px 24px",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    verticalAlign: "middle",
  },
  paper: {
    left: "0",
    right: "0",
    bottom: "0",
    position: "fixed",
    borderRadius: " 12px 12px 0 0",
    margin: 0,
  },
  addressText: {
    opacity: "1",
    width: " 237px",
    direction: "rtl",
  },
}));

const MobileLocation = ({
  openDialog,
  locationChange,
  location,
  closeDialog,
}) => {
  const classes = useStyles();
  const defaultLocation = {
    lat: 34.33781482366286,
    lng: 47.088752098083496,
    description: "",
  };

  const [mapOpen, setMapOpen] = useState(false);
  const address = location || defaultLocation;

  const mapDialogOnChange = () => {
    closeDialog();
    setMapOpen(!mapOpen);
  };

  const selectAddress = (item) => {
    locationChange(item);
    mapDialogOnChange();
  };

  return (
    <div className={classes.root}>
      <button
        className={classNames(classes.btn, "w-full h-10")}
        onClick={() =>
          openDialog({
            children: <LocationDrawer mapDialogOnChange={mapDialogOnChange} />,
            fullWidth: false,
            fullScreen: false,
            scroll: "paper",
            classes: { paper: classes.paper },
          })
        }
      >
        <div
          className={classNames(
            classes.buttonContent,
            "flex justify-center leading-none"
          )}
        >
          <div
            className={classNames(
              classes.icon,
              { hidden: address.description },
              "inline-block w-10 h-54"
            )}
          ></div>
          <span
            className={classNames(
              address.description.length >= 35 ? classes.addressText : null
            )}
          >
            {address.description || (
              <FormattedMessage
                id="home.mobileLocation.EnterAddress"
                defaultMessage="Enter address"
              />
            )}
          </span>
        </div>
      </button>
      <AddressMap
        open={mapOpen}
        closeDialog={mapDialogOnChange}
        address={address}
        selectAddress={selectAddress}
      />
    </div>
  );
};

function mapStateToProps(state) {
  return { location: state.location.current };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      locationChange,
      openDialog,
      closeDialog,
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(MobileLocation);
