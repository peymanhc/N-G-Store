import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Icon from "@material-ui/core/Icon";
import { FormattedMessage } from "react-intl";
import { openDialog } from "store/dialog";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import LocationModal from "../location/LocationModal";

const useStyles = makeStyles((theme) => ({
  appCartRoot: {
    flex: "1 1 auto",
    height: "0",
    border: "solid 1px #eeeeee",
    display: "flex",
    borderRadius: "4px",
    flexDirection: "column",
    backgroundColor: "#f2f2f2",
    position: "relative",
  },
  appCartButton: {
    marginTop: "10px",
    cursor: "pointer",
  },
  cartButton: {
    width: "100%",
    height: "100%",
    border: "none",
    overflow: "hidden",
    fontSize: "16px",
    minHeight: "41px",
    userSelect: "none",
    borderRadius: "4px",
    transitionDuration: "200ms",
    transitionProperty: "background-color, color",
    background: "rgb(255, 224, 51)",
    fontWeight: "600",
    color: "black",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  locationImage: {
    width: "100%",
    height: "100%",
    zIndex: "1",
    position: "absolute",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  locationIcon: {
    zIndex: "1",
    top: "50%",
    position: "absolute",
    left: "50%",
  },
}));

const CartLocation = ({ openDialog }) => {
  const classes = useStyles();

  const image = "url(/static/images/restaurants/location.png)";

  return (
    <>
      <div className={classes.appCartRoot}>
        <div
          style={{ backgroundImage: image }}
          className={classes.locationImage}
        ></div>
        <Icon fontSize="large" className={classes.locationIcon}>
          location_on
        </Icon>
      </div>
      <div
        className={classes.appCartButton}
        onClick={() =>
          openDialog({
            children: <LocationModal />,
            maxWidth: "md",
            fullWidth: true,
            fullScreen: false,
            scroll: "body",
            classes: { paper: "m-0" },
          })
        }
      >
        <div className={classes.cartButton}>
          <Icon className="mr-2">near_me</Icon>
          <span>
            <FormattedMessage
              id="home.mobileLocation.EnterAddress"
              defaultMessage="Enter address"
            />
          </span>
        </div>
      </div>
    </>
  );
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      openDialog,
    },
    dispatch
  );
}

export default connect(null, mapDispatchToProps)(CartLocation);
