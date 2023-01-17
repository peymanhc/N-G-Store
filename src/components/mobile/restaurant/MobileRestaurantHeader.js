import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import classNames from "classnames";
import { FormattedMessage } from "react-intl";

import { connect } from "react-redux";

const useStyles = makeStyles((theme) => ({}));

const min = (
  <FormattedMessage id="restaurant.cart.Minute" defaultMessage="Min" />
);

const MobileRestaurantHeader = ({ className }) => {
  // eslint-disable-next-line
  const classes = useStyles();

  return (
    <div className={classNames("header", className)}>
      <div className="headerName">
        <span className="mr-2">Midas</span>
        <span className="infoBadge">
          <div className="infoIcon baseIcon"></div>
        </span>
      </div>
      <div className="headerBadges">
        <div className="headerBadge">
          <div className="headerBadgeIcon starIcon baseIcon"></div>
          <FormattedMessage id="leftOver.card.New" defaultMessage="New" />
        </div>
        <div className="headerBadge relative overflow-hidden">
          <div>~80 {min}</div>
        </div>
        <div className="headerBadge">
          <span>
            <FormattedMessage
              id="home.catalog.Delivery"
              defaultMessage="Delivery"
            />
            0–300 P
          </span>
        </div>
        <div className="headerBadge">
          <div className="headerBadgeIcon deliverIcon baseIcon"></div>
          <FormattedMessage
            id="restaurant.mobileRestaurantHeader.DeliverCourier"
            defaultMessage="Deliver a restaurant courier"
          />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps)(MobileRestaurantHeader);
