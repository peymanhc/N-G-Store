import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Icon from "@material-ui/core/Icon";
import classNames from "classnames";
import { FormattedMessage } from "react-intl";

import { openMenu } from "store/menu";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import TimeList from "../widgets/TimeList";

import styles from "./CartStyles";

const useStyles = makeStyles(() => styles);

const Symbol = "€";
const min = (
  <FormattedMessage id="restaurant.cart.Minute" defaultMessage="Min" />
);
const Cart = ({ openMenu, selectedItem }) => {
  const classes = useStyles();

  const [show, setShow] = useState(false);

  const timeClick = (event) => {
    openMenu(event.currentTarget, {
      children: <TimeList />,
      classes: { paper: "w-64 h-auto" },
    });
  };
  return (
    <>
      <div className={classes.appCartRoot}>
        <div className={classes.appCartContent}>
          {show === false ? (
            <>
              <div className={classes.appCartTopLine}>
                <div className="font-bold">
                  <FormattedMessage
                    id="restaurant.cart.MyOrder"
                    defaultMessage="My order"
                  />
                </div>
              </div>
              <div className={classes.appCartEmptyCart}>
                <FormattedMessage
                  id="restaurant.cart.ChooseFood"
                  defaultMessage="Select dishes and add them to the order"
                />
              </div>
            </>
          ) : (
            <>
              <div className={classes.appCartTopLine}>
                <div className="text-lg font-bold mr-auto">
                  <FormattedMessage
                    id="restaurant.cart.MyOrder"
                    defaultMessage="My order"
                  />
                </div>
                <Icon fontSize="large" className="cursor-pointer">
                  delete_forever
                </Icon>
              </div>
              <div>
                <div className={classes.appCartItem}>
                  <div className="flex">
                    <div className={classes.appCartItemInfo}>
                      <span className={classes.appCartItemName}>
                        Пицца Цыпленок Барбекю
                      </span>
                      <span className={classes.appCartItemWeight}>350 г</span>
                    </div>
                    <div className={classes.appCartItemQuantityContainer}>
                      <div className={classes.appCartItemIncrement}>+</div>
                      <div className={classes.appCartItemQuantity}>2</div>
                      <div
                        className={classNames(
                          classes.appCartItemRemove,
                          classes.appCartItemDecrement
                        )}
                      >
                        ×
                      </div>
                    </div>
                    <div className={classes.appCartItemPrice}>
                      <span>229 {Symbol}</span>
                    </div>
                  </div>
                  <div className={classes.appCartItemOptions}>
                    <div>
                      <span>Убрать: сыр моцарелла</span>
                    </div>
                    <div>
                      <span>Ароматная свинина</span>
                    </div>
                    <div>
                      <span>Ветчина</span>
                    </div>
                  </div>
                </div>
                <div className={classes.appCartItem}>
                  <div className="flex">
                    <div className={classes.appCartItemInfo}>
                      <span className={classes.appCartItemName}>Пепперони</span>
                      <span className={classes.appCartItemWeight}>350 г</span>
                    </div>
                    <div className={classes.appCartItemQuantityContainer}>
                      <div className={classes.appCartItemIncrement}>+</div>
                      <div className={classes.appCartItemQuantity}>2</div>
                      <div
                        className={classNames(
                          classes.appCartItemRemove,
                          classes.appCartItemDecrement
                        )}
                      >
                        ×
                      </div>
                    </div>
                    <div className={classes.appCartItemPrice}>
                      <span>229 {Symbol}</span>
                    </div>
                  </div>
                  <div className={classes.appCartItemOptions}>
                    <div>
                      <span>Убрать: сыр моцарелла</span>
                    </div>
                    <div>
                      <span>Ароматная свинина</span>
                    </div>
                    <div>
                      <span>Ветчина</span>
                    </div>
                  </div>
                </div>
                <div className={classes.appCartItem}>
                  <div className="flex">
                    <div className={classes.appCartPromoItemName}>
                      <FormattedMessage
                        id="restaurant.cart.Discount"
                        defaultMessage="Discount"
                      />
                      30%
                    </div>
                    <div className={classes.appCartPromoItemAmount}>
                      -144 {Symbol}
                    </div>
                  </div>
                </div>
                <div className={classes.appCartDivider}></div>
                <div className={classes.appCartDeliveryFee}>
                  <div className={classes.appCartDeliveryFeeName}>
                    <FormattedMessage
                      id="home.catalog.Delivery"
                      defaultMessage="Delivery"
                    />
                  </div>
                  <div className={classes.appCartDeliveryFeeValue}>
                    <span>0 {Symbol}</span>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
        <div className={classes.appCartMeta}>
          <div className={classes.appCartDeliveryTime}>
            <div className={classes.appCartDeliveryTimeTitle}>
              <FormattedMessage
                id="restaurant.cart.DeliveryTime"
                defaultMessage="Time of delivery"
              />
            </div>
            <div
              className={classNames(
                classes.appCartDeliveryTimeValue,
                "cursor-pointer"
              )}
              onClick={timeClick}
            >
              <span>{selectedItem === null ? "~ 80" &&  min : selectedItem}</span>
              <span className={classes.appCartPencil}></span>
            </div>
          </div>
          <div className={classes.appCartTotalPrice}>
            <div className={classes.appCartDeliveryTimeTitle}>
              <FormattedMessage
                id="restaurant.cart.Total"
                defaultMessage="Total"
              />
            </div>
            <div className={classes.appCartDeliveryTimeValue}> 0 {Symbol}</div>
          </div>
        </div>
      </div>
      <div className={classes.appCartButton}>
        <div
          className={classNames(classes.cartButton, classes.yellowColor)}
          onClick={() => setShow(!show)}
        >
          <span>
            <FormattedMessage
              id="restaurant.cart.Checkout"
              defaultMessage="Checkout"
            />
          </span>
        </div>
      </div>
    </>
  );
};

function mapStateToProps(state) {
  return {
    selectedItem: state.menu.selectedItem,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      openMenu,
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
