import React, { useReducer, useEffect } from "react";
import { Icon, TextField, Radio } from "@material-ui/core";
import classNames from "classnames";
import { FormattedMessage } from "react-intl";
import { withStyles } from '@material-ui/core/styles';

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { openMenu } from "store/menu";
import { Link } from "react-router-dom";
import { getTimeList } from "store/time";

import FixedHeader from "../FixedHeader";
import TimeList from "../header/TimeList";

const InfoField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "#b0b0b0",
    },
    "& label.MuiFormLabel-root": {
      color: "#b0b0b0",
      fontSize: "14px",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#e0e0e0",
    },
    "& .MuiInput-underline:before": {
      borderBottomColor: "#e0e0e0",
    },

    "& .MuiInput-underline:hover ": {
      borderBottomColor: "#e0e0e0",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#e0e0e0",
      },
      "&:hover fieldset": {
        borderColor: "#e0e0e0",
      },
      "&.Mui-focused": {
        border: "1px solid #e0e0e0",
      },
    },
  },
})(TextField);

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
    checkedIcon={<Icon style={{ color: "#ffe033" }}>radio_button_checked</Icon>}
    icon={<Icon>radio_button_unchecked</Icon>}
    checked
  />
));

const styles = {
  header: {
    minHeight: "64px",
    boxShadow: "0px 0px 0px 1px rgba(0,0,0,.03)",
    zIndex: 30,
  },
  fullScreen: {
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
  },
  infoRoot: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#fafafa",
  },
  content: {
    flex: "1 1 auto",
    zIndex: "0",
    minHeight: "1px",
    position: "relative",
    display: "flex",
  },
  delivery: {
    borderTop: "1px solid #f5f5f5",
    padding: "20px 16px",
    position: "relative",
    backgroundColor: "white",
  },
  root: {
    display: "flex",
    flexWrap: "wrap",
    width: "100%",
    zIndex: 10,
  },
  itemsRoot: {
    marginTop: "10px",
    marginBottom: "0",
    paddingBottom: "10px",
    borderTop: "1px solid rgba(0,0,0,.05)",
    paddingTop: "27px",
    paddingLeft: "16px",
    borderBottom: "1px solid rgba(0,0,0,.05)",
    backgroundColor: "#ffffff",
  },
  items: {
    display: "flex",
    padding: "15px 16px 15px 0",
    fontSize: "14px",
    marginLeft: "16px",
    borderBottom: "1px solid #f5f5f5",
  },
  submitBtn: {
    padding: "16px",
    border: " 1px solid rgb(255, 224, 51)",
    background: "rgb(255, 224, 51)",
    borderRadius: "8px",
    boxShadow:
      "0 4px 12px 0 rgba(255, 231, 95, 0.3), 0 2px 4px 0 rgba(255, 224, 51, 0.3)",
  },
  btnContent: {
    flex: "0 0 auto",
    padding: "7px 10px",
    fontSize: "14px",
    borderRadius: "3px",
    backgroundColor: "rgba(0, 0, 0, 0.03)",
  },
  shortAddress: {
    position: "relative",
    borderBottom: "1px solid rgba(0,0,0,.05)",
    marginTop: "27px",
  },
  addressLabel: {
    color: "#b0b0b0",
    fontSize: "12px",
    paddingTop: "9px",
    paddingBottom: "4px",
  },
  addressValue: {
    color: "#b0b0b0",
    paddingRight: "44px",
    fontSize: "14px",
    lineHeight: "1.43",
  },
  baseIcon: {
    width: "24px",
    height: "24px",
    display: "inline-block",
    backgroundSize: "24px 24px",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
  addressLock: {
    right: "20px",
    bottom: "5px",
    backgroundImage: "url(/static/images/icons/lock.svg)",
  },
  mRight: {
    marginRight: "16px",
    width: "47%",
    marginTop: "10px",
  },
  mTop: {
    marginTop: "10px",
    width: "50%",
  },
  paymentMethod: {
    flex: "1",
    display: "flex",
    alignItems: "center",
  },
  cardIcon: {
    backgroundImage: "url(/static/images/icons/card.svg)",
  },
  paymentMethodContent: {
    flex: "1",
    height: "60px",
    display: "flex",
    marginLeft: "8px",
    paddingTop: "20px",
    alignItems: "center",
    borderBottom: "1px solid rgba(0,0,0,.05)",
    paddingBottom: "20px",
    justifyContent: "space-between",
  },
  paymentMethodText: {
    height: "20px",
    fontSize: "14px",
    paddingTop: "2px",
    lineHeight: "1.43",
  },
  cardHint: {
    color: "#b0b0b0",
    fontSize: "12px",
    marginTop: "6px",
    lineHeight: "1.5",
    marginRight: "20px",
    marginBottom: "5px",
  },
  advertisment: {
    position: "relative",
    borderBottom: "1px solid rgba(0,0,0,.05)",
    color: "#b0b0b0",
    padding: " 15px 0",
  },
  borderBottom: {
    position: "relative",
    borderBottom: "1px solid rgba(0,0,0,.05)",
    marginTop: "10px",
  },
  btnWrapper: {
    padding: " 20px 16px",
    backgroundColor: "#ffffff",
  },
};

const officeInput = {
  name: (
    <FormattedMessage
      id="home.userAddressInput.Office"
      defaultMessage="SQ / office"
    />
  ),
};
const intercomInput = {
  name: (
    <FormattedMessage
      id="home.userAddressInput.Intercom"
      defaultMessage="Intercom"
    />
  ),
};
const porchInput = {
  name: (
    <FormattedMessage id="home.userAddressInput.Porch" defaultMessage="Porch" />
  ),
};
const floorInput = {
  name: (
    <FormattedMessage id="home.userAddressInput.Floor" defaultMessage="Floor" />
  ),
};
const commentInput = {
  name: (
    <FormattedMessage
      id="home.userAddressInput.Comment"
      defaultMessage="Comment on the order"
    />
  ),
};

const initialState = {
  office: "",
  intercom: "",
  porch: "",
  floor: "",
  comment: "",
};
function reducer(state, { field, value }) {
  return {
    ...state,
    [field]: value,
  };
}
const MobileCheckout = ({
  classes,
  openMenu,
  selectedItem,
  time,
  getTimeList,
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const handleChange = (event) => {
    dispatch({ field: event.target.name, value: event.target.value });
  };
  const { office, intercom, porch, floor, comment } = state;

  const menu = (event) => {
    openMenu(event.currentTarget, {
      children: <TimeList />,
      classes: { paper: "w-48 h-auto" },
    });
  };
  useEffect(() => {
    getTimeList();
  }, [getTimeList]);

  return (
    <div className={classes.fullScreen}>
      <div className={classes.infoRoot}>
        <FixedHeader
          link="/cart"
          title={
            <FormattedMessage
              id="home.userAddressInput.DeliveryAddress"
              defaultMessage="Delivery address"
            />
          }
        />
        <div className={classes.content}>
          <div className="w-full z-10 overflow-auto">
            <div>
              <div className={classNames(classes.delivery, "mt-2 flex-row")}>
                <div className="font-bold text-xl w-full">
                  <FormattedMessage
                    id="home.userAddressInput.DeliveryAddress"
                    defaultMessage="Delivery address"
                  />
                </div>
                <div className={classes.shortAddress}>
                  <div className={classes.addressLabel}>
                    <FormattedMessage
                      id="home.userAddressInput.DeliveryAddress"
                      defaultMessage="Delivery address"
                    />
                  </div>
                  <div className="flex items-center justify-between pb-3">
                    <div className={classes.addressValue}>
                      Котельническая набережная, 1/15
                    </div>
                    <div
                      className={classNames(
                        classes.addressLock,
                        classes.baseIcon
                      )}
                    ></div>
                  </div>
                </div>
                <form className={classes.root} noValidate>
                  <div className="w-full flex flex-row flex-wrap">
                    <InfoField
                      name="office"
                      className={classNames(classes.mRight)}
                      value={office}
                      label={officeInput.name}
                      onChange={handleChange}
                    />
                    <InfoField
                      name="intercom"
                      className={classes.mTop}
                      value={intercom}
                      label={intercomInput.name}
                      onChange={handleChange}
                    />
                    <InfoField
                      name="porch"
                      className={classNames(classes.mRight)}
                      value={porch}
                      label={porchInput.name}
                      onChange={handleChange}
                    />
                    <InfoField
                      name="floor"
                      className={classes.mTop}
                      value={floor}
                      label={floorInput.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="w-full mt-3">
                    <InfoField
                      name="comment"
                      className="w-full"
                      value={comment}
                      label={commentInput.name}
                      onChange={handleChange}
                      multiline
                      rows={2}
                      rowsMax={4}
                    />
                  </div>
                </form>
                <div>
                  <div>
                    <div className={classes.borderBottom}>
                      <div className={classes.addressLabel}>
                        <FormattedMessage
                          id="mobileCheckout.YandexDelivery"
                          defaultMessage="Delivery of Yandex.Food"
                        />
                      </div>
                      <div
                        className="flex items-center justify-between pb-2 text-lg font-bold"
                        onClick={menu}
                      >
                        {selectedItem === null
                          ? time.tomorrowTimes[0]
                          : selectedItem}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={classes.itemsRoot}>
              <div>
                <div className="font-bold text-xl">
                  <FormattedMessage
                    id="mobileCheckout.PaymentMethod"
                    defaultMessage="Payment method"
                  />
                </div>
                <div className={classes.paymentMethod}>
                  <div
                    className={classNames(classes.cardIcon, classes.baseIcon)}
                  ></div>
                  <div className={classes.paymentMethodContent}>
                    <div>
                      <FormattedMessage
                        id="mobileCheckout.OnlineCard"
                        defaultMessage="Online card"
                      />
                    </div>
                    <YellowRadio />
                  </div>
                </div>
                <div className="ml-8">
                  <div className={classes.cardHint}>
                    <FormattedMessage
                      id="Checkout.FreezeCreditCard"
                      defaultMessage="We will freeze the order amount on your card and write off after delivery"
                    />
                  </div>
                  <div className={classes.advertisment}>
                    <div>
                      <FormattedMessage
                        id="mobileCheckout.PromotionalCode"
                        defaultMessage="Promotional code"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={classes.btnWrapper}>
              <button
                className={classNames(
                  classes.submitBtn,
                  "text-center w-full text-lg"
                )}
              >
                <Link to="/pay">
                  <span className="w-full h-full relative flex flex-no-wrap items-center">
                    <div className="flex mx-auto items-center justify-center">
                      <FormattedMessage
                        id="Checkout.ContinueCheckout"
                        defaultMessage="Proceed to checkout"
                      />
                    </div>
                    <div className={classes.btnContent}>50 ₽</div>
                  </span>
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    time: state.timeList.time,
    selectedItem: state.menu.selectedItem,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      openMenu,
      getTimeList,
    },
    dispatch
  );
}

export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(MobileCheckout)
);
