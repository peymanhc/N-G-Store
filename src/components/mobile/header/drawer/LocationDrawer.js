import React from "react";
import { makeStyles, withStyles } from '@material-ui/core/styles';

import {
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  Icon,
} from "@material-ui/core";
import classNames from "classnames";
import { FormattedMessage } from "react-intl";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { closeDialog } from "store/dialog";
import { locationChange } from "store/location";

const YellowRadio = withStyles({
  root: {
    color: "#dcdbdb",
    "&$checked": {
      color: "rgb(255, 224, 51)",
    },
  },
  checked: {},
})((props) => (
  <Radio
    color="default"
    disableRipple
    checkedIcon={
      <Icon style={{ color: "#ffe033", fontSize: "1.5em" }}>
        radio_button_checked
      </Icon>
    }
    icon={<Icon style={{ fontSize: "1.5em" }}>radio_button_unchecked</Icon>}
    {...props}
  />
));

const useStyles = makeStyles({
  closeButton: {
    right: 0,
    width: "40px",
    height: "40px",
    position: "fixed",
    boxShadow: "0 4px 12px 0 rgba(0, 0, 0, 0.07)",
    backgroundColor: "white",
    padding: "5px",
    margin: "10px",
    zIndex: 30,
  },
  drawerPaper: {
    maxHeight: "95%",
    borderRadius: "15px 15px 0 0",
  },
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
  image: {
    minHeight: "15rem ",
  },
  gray: {
    color: "#b0b0b0",
  },
  bgGray: {
    background: "#fafafa",
  },
  counter: {
    border: " solid 1px #e0e0e0",
    padding: "13px 20px",
    borderRadius: "4px",
  },
  counterButton: {
    width: "24px",
    height: "24px",
    fontSize: "22px",
    lineHeight: "24px",
    userSelect: "none",
  },
  submitBtn: {
    background: "transparent",
    boxShadow: "inset 0 0 0 1px rgba(0, 0, 0, .1)",
    color: "#000",
    height: "52px",
    border: "0",
    display: "inline-block",
    padding: "0 20px",
    position: "relative",
    overflow: "hidden",
    fontSize: "16px",
    transition: "background 200ms",
    fontWeight: "400",
    userSelect: "none",
    borderRadius: "8px",
  },
  addressContent: {
    flex: "1 0 0",
    height: "56px",
    display: "flex",
    overflow: "hidden",
    borderBottom: "1px solid rgba(0,0,0,.05)",
    alignItems: "flex-start",
    marginLeft: "12px",
    whiteSpace: "nowrap",
    flexDirection: "column",
    justifyContent: "center",
  },
  description: {
    borderBottom: "1px solid #f3f1f1",
  },
  radio: {
    width: "100%",
  },
});

const LocationDrawer = ({
  closeDialog,
  addressList,
  mapDialogOnChange,
  locationChange,
  location,
}) => {
  const classes = useStyles();

  const selectAddress = (address) => {
    locationChange(address);
    closeDialog();
  };

  return (
    <div
      anchor="bottom"
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <div className="w-full p-5 mb-24">
        <div className="w-full">
          <FormControl component="fieldset" className={classes.radio}>
            <RadioGroup
              value={location ? location.description : null}
              aria-label="gender"
              name="gender"
              className={classes.radio}
            >
              {addressList.map((item, index) => {
                const radioboxLabel = (
                  <div className={classNames(classes.root, " flex flex-row")}>
                    <div
                      className={classNames(
                        classes.description,
                        " py-3 px-1 w-full text-lg"
                      )}
                    >
                      <span>{item.description} </span>
                    </div>
                  </div>
                );
                return (
                  <FormControlLabel
                    key={index}
                    onClick={() => selectAddress(item)}
                    value={item.description}
                    control={<YellowRadio />}
                    label={radioboxLabel}
                    className={classNames("w-full md:w-1/2 mx-0")}
                  />
                );
              })}
            </RadioGroup>
          </FormControl>
        </div>
      </div>
      <div className={classNames("w-full p-5 fixed left-0 bottom-0 bg-white")}>
        <div className="flex flex-row justify-between mt-3">
          <button
            onClick={mapDialogOnChange}
            className={classNames(
              classes.submitBtn,
              "text-center w-full ml-3 my-2 px-8 text-lg"
            )}
          >
            <FormattedMessage
              id="home.locationDrawer.AddNewAddress"
              defaultMessage="Add new address"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    addressList: state.user.addressList,
    location: state.location.current,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      closeDialog,
      locationChange,
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(LocationDrawer);
