import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { shallowEqual, useSelector } from "react-redux";

import Cart from "./Cart";
import Location from "./CartLocation";

const useStyles = makeStyles((theme) => ({
  sidebarWrapper: {
    paddingBottom: "0px",
    transform: "translateZ(0px)",
    height: "calc(100vh - 120px)",
    display: "flex",
    flexDirection: "column",
    position: "sticky",
    top: "99px",
    zIndex: "2",
    width: "250px",
    marginRight: "8px",
    marginLeft: "8px",
  },
  appCartWithButtonRoot: {
    flex: "1 1 auto",
    display: "flex",
    flexDirection: "column",
  },
}));

const CartWrapper = () => {
  const classes = useStyles();
  const { location } = useSelector(
    (state) => ({ location: state.location.current }),
    shallowEqual
  );

  return (
    <div className={classes.sidebarWrapper} id="Sidebar">
      <div className={classes.appCartWithButtonRoot}>
         {location === null ? <Location /> : <Cart />}
      </div>
    </div>
  );
};

export default CartWrapper;
