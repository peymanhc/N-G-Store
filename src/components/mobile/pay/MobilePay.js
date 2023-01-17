import React, { useReducer } from "react";
import { withStyles } from '@material-ui/core/styles';
import {
  FormGroup,
  FormControlLabel,
  TextField,
  Checkbox,
} from "@material-ui/core";
import classNames from "classnames";
import { FormattedMessage } from "react-intl";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { openMenu } from "store/menu";
import { Link } from "react-router-dom";
import { getTimeList } from "store/time";

import FixedHeader from "../FixedHeader";

const InfoField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "#b0b0b0",
    },
    "& label.MuiFormLabel-root": {
      color: "#b0b0b0",
      fontSize: "16px",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#f5f5f5",
    },
    "& .MuiInput-underline:before": {
      borderBottomColor: "#f5f5f5",
    },

    "& .MuiInput-underline:hover ": {
      borderBottomColor: "#f5f5f5",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#f5f5f5",
      },
      "&:hover fieldset": {
        borderColor: "#f5f5f5",
      },
      "&.Mui-focused": {
        border: "1px solid #f5f5f5",
      },
    },
  },
})(TextField);

const GrayCheckbox = withStyles({
  root: {
    color: "#dcdbdb",
    "&:hover, &:focus": {
      backgroundColor: "transparent",
    },
    padding: "3px",
    "&$checked": {
      color: "#b0b0b0",
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

const styles = {
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
    backgroundColor: "white",
  },
  content: {
    flex: "1 1 auto",
    zIndex: "0",
    height: "100%",
    position: "relative",
    display: "flex",
    overflow: "auto",
    marginTop: "20px",
  },
  delivery: {
    color: "#3f3f3f",
    margin: "0 auto",
    maxWidth: "460px",
    backgroundColor: "#ffffff",
  },
  root: {
    display: "flex",
    flexWrap: "wrap",
    width: "100%",
    zIndex: 10,
  },
  disabledBtn: {
    padding: "16px",
    color: "#b0b0b0",
    border: "none",
    background: "#f5f5f5",
    boxShadow: "none",
    borderRadius: "8px",
  },
  btnContent: {
    flex: "0 0 auto",
    padding: "7px 10px",
    fontSize: "14px",
    borderRadius: "3px",
    backgroundColor: "rgba(0, 0, 0, 0.03)",
  },
  baseIcon: {
    width: "24px",
    height: "24px",
    display: "inline-block",
    backgroundSize: "24px 24px",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
  mRight: {
    width: "100%",
    marginTop: "10px",
  },
  mTop: {
    marginTop: "10px",
    width: "30%",
  },
  addCard: {
    margin: "auto",
    padding: "20px",
    maxWidth: "720px",
  },
  boxLabel: {
    color: "#b0b0b0",
    fontSize: "14px",
  },
};
const cardNumber = {
  name: <FormattedMessage id="pay.CardNumber" defaultMessage="Card number" />,
};
const cardExpiry = {
  name: <FormattedMessage id="pay.CardExpiry" defaultMessage="Card expiry" />,
};
const cardCvc = {
  name: <FormattedMessage id="pay.CardCvc" defaultMessage="Card cvc" />,
};

const initialState = {
  number: "",
  expiry: "",
  cvc: "",
  checkbox: true,
};
function reducer(state, { field, value }) {
  return {
    ...state,
    [field]: value,
  };
}
const MobilePay = ({ classes }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { number, expiry, cvc, checkbox } = state;

  const handleChange = (event) => {
    dispatch({
      field: event.target.name,
      value:
        event.target.type === "checkbox"
          ? event.target.checked
          : event.target.value,
    });
  };

  const checkboxText = (
    <div className={classes.boxLabel}>
      <FormattedMessage
        id="pay.RememberCard"
        defaultMessage="Remember card for next orders"
      />
    </div>
  );

  return (
    <div className={classes.fullScreen}>
      <div className={classes.infoRoot}>
        <FixedHeader
          link="/checkout"
          title={
            <FormattedMessage id="Checkout.Payment" defaultMessage="Payment" />
          }
        />
        <div className={classes.content}>
          <div className={classNames(classes.delivery, "mt-2 flex-row")}>
            <div className={classes.addCard}>
              <h2 className="font-bold text-3xl w-full py-4">
                <FormattedMessage
                  id="pay.mobilePay.NewCard"
                  defaultMessage="New card"
                />
              </h2>
              <form className={classes.root} noValidate autoComplete="off">
                <div className="w-full flex flex-row flex-wrap">
                  <InfoField
                    name="number"
                    className={classNames(classes.mRight)}
                    value={number}
                    label={cardNumber.name}
                    onChange={handleChange}
                  />
                  <div className="flex flex-row justify-between w-full mb-6 mt-3">
                    <InfoField
                      name="expiry"
                      className={classes.mTop}
                      value={expiry}
                      label={cardExpiry.name}
                      onChange={handleChange}
                    />
                    <InfoField
                      name="cvc"
                      className={classes.mTop}
                      value={cvc}
                      label={cardCvc.name}
                      onChange={handleChange}
                    />
                  </div>
                  <FormGroup row>
                    <FormControlLabel
                      control={
                        <GrayCheckbox
                          checked={checkbox}
                          onChange={handleChange}
                          name="checkbox"
                        />
                      }
                      label={checkboxText}
                    />
                  </FormGroup>
                  <button
                    className={classNames(
                      classes.disabledBtn,
                      "text-center w-full text-lg mt-10"
                    )}
                  >
                    <Link to="/pay">
                      <span className="w-full h-full relative flex flex-no-wrap items-center">
                        <div className="flex mx-auto items-center justify-center">
                          <FormattedMessage
                            id="Checkout.Payment"
                            defaultMessage="Payment"
                          />
                        </div>
                        <div className={classes.btnContent}>50 ₽</div>
                      </span>
                    </Link>
                  </button>
                </div>
              </form>
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
  connect(mapStateToProps, mapDispatchToProps)(MobilePay)
);
