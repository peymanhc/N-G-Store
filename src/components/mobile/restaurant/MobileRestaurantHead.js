import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import classNames from "classnames";

import { connect } from "react-redux";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({}));

const MobileRestaurantHead = ({ className }) => {
  // eslint-disable-next-line
  const classes = useStyles();

  return (
    <div className={classNames("head", className)}>
      <div className="topbar">
        <Link to="/" className="backIcon baseIcon" />
        <div className="headTitle"></div>
        <Link to="/restaurant/search" className="searchIcon baseIcon" />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps)(MobileRestaurantHead);
