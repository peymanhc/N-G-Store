import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import classNames from "classnames";
import { FormattedMessage } from "react-intl";

const useStyles = makeStyles((theme) => ({
  menuIcon: {
    width: "24px",
    height: " 24px",
    display: "inline-block",
    backgroundSize: "24px 24px",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
}));

const restaurantIcon = {
  src: "/static/images/header/restaurant.svg",
  alt: "restaurant",
};
const RestaurantItem = () => {
  const classes = useStyles();

  return (
    <div className={classNames("text-black flex items-center p-5 text-md")}>
      <div className={classes.menuIcon}>
        <img alt={restaurantIcon.alt} src={restaurantIcon.src} />
      </div>
      <div className="rtl:mr-2 ltr:ml-2">
        <FormattedMessage
          id="home.restaurantItem.Restaurants"
          defaultMessage="Restaurants"
        />
      </div>
    </div>
  );
};

export default RestaurantItem;
