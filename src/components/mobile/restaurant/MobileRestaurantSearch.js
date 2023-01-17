import React, { useState } from "react";
import { InputBase, Hidden } from "@material-ui/core";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import { injectIntl } from "react-intl";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    "& .inputBox": {
      position: "sticky",
      top: "0px",
      borderBottom: "1px solid rgba(0,0,0,.05)",
      backgroundColor: "#ffffff",
      display: "flex",
      alignItems: "center",
    },
    "& .input": {
      flex: "1",
      border: "none",
      padding: "0",
      minWidth: "0",
      fontSize: "14px",
      paddingTop: "14px",
      lineHeight: "1.7142857142857142",
      paddingLeft: "22px",
      paddingRight: "0",
      paddingBottom: "14px",
    },
    "& .divider": {
      width: "1px",
      height: "24px",
      backgroundColor: "rgba(0,0,0,.05)",
    },
    "& .cancelButton": {
      width: "105px",
      height: "100%",
      border: "none",
      fontSize: "14px",
      paddingTop: "18px",
      paddingLeft: "19px",
      paddingRight: "20px",
      paddingBottom: "18px",
      backgroundColor: "#ffffff",
    },
    "& .clearButton": {
      width: "36px",
      marginRight: "8px",
      backgroundSize: "24px",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundImage: "url(/static/images/restaurants/clear.svg)",
      height: "24px",
    },
    "& .searchContent": {
      width: "100%",
      minHeight: "100vh",
      backgroundColor: "#fafafa",
    },
  },
}));

const MobileRestaurantSearch = ({ intl }) => {
  const classes = useStyles();
  const search = {
    placeholder: intl.formatMessage({
      id: "home.hero.ShippingAddress",
      defaultMessage: "Enter shipping address ...",
    }),
  };
  const [searchText, setSearchText] = useState("");

  const inputChange = (event) => setSearchText(event.target.value);

  const clearInput = () => setSearchText("");

  return (
    <Hidden mdUp>
      <div className={classes.root}>
        <div className="inputBox">
          <InputBase
            className="input"
            placeholder={search.placeholder}
            value={searchText}
            onChange={inputChange}
          />
          {searchText && <div className="clearButton" onClick={clearInput} />}
          <div className="divider" />
          <Link to="/restaurant" className="cancelButton">
            <FormattedMessage
              id="home.mobileSearchInput.Cancel"
              defaultMessage="Cancel"
            />
          </Link>
        </div>
        <div className="searchContent"></div>
      </div>
    </Hidden>
  );
};

export default injectIntl(MobileRestaurantSearch);
