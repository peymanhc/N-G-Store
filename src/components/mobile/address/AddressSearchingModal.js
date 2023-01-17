import React from "react";
import { Dialog, Grow } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import classNames from "classnames";
import { FormattedMessage } from "react-intl";
import { injectIntl } from "react-intl";

import { connect } from "react-redux";

import GoogleAutocomplete from "components/location/GoogleAutocomplete";

const useStyles = makeStyles((theme) => ({
  borderBottom: {
    borderBottom: " 1px solid rgba(0,0,0,.05)",
    backgroundColor: " #ffffff",
  },
  addressInput: {
    padding: "10px",
    "&::placeholder": {
      color: "rgb(117, 117, 117)",
    },
  },
  divider: {
    width: "1px",
    height: "24px",
    backgroundColor: "rgba(0,0,0,.05)",
    marginTop: "15px",
  },
  cancelBtn: {
    width: "105px",
    border: "none",
    fontSize: "14px",
    backgroundColor: "#ffffff",
  },
  suggestItem: {
    maxWidth: "100%",
    marginLeft: "16px",
    paddingTop: "9px",
    paddingLeft: "4px",
    paddingRight: "12px",
    borderBottom: "1px solid rgba(0,0,0,.05)",
    paddingBottom: "13px",
  },
  subHint: {
    color: "#b0b0b0",
    fontSize: "14px",
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Grow ref={ref} {...props} timeout={500} />;
});

const AddressSearchingModal = ({ open, addressList, action, intl }) => {
  const classes = useStyles();

  const modalOnClose = () => {
    action({ field: "open", value: false });
  };
  const selectAddress = (item) => {
    action({ field: "address", value: item });
    modalOnClose();
  };

  return (
    <Dialog
      onClose={modalOnClose}
      TransitionComponent={Transition}
      open={open}
      classes={{ paper: classes.paperWidth }}
      fullScreen
    >
      <div
        className={classNames(
          classes.borderBottom,
          "flex flex-row flex-no-wrap"
        )}
      >
        <GoogleAutocomplete
          placeholder={intl.formatMessage({
            id: "home.hero.ShippingAddress",
            defaultMessage: "Enter shipping address ...",
          })}
          locationChange={selectAddress}
          classNames={classNames(
            classes.addressInput,
            "pr-0 pl-5 py-5 w-11/12"
          )}
        />
        <div className={classes.divider}></div>
        <button onClick={modalOnClose} className={classes.cancelBtn}>
          <FormattedMessage
            id="home.mobileSearchInput.Cancel"
            defaultMessage="Cancel"
          />
        </button>
      </div>
      <ul className="w-full mt-2">
        {addressList.map((item, index) => (
          <li
            key={index}
            onClick={() => selectAddress(item)}
            className="cursor-pointer"
          >
            <div className="w-full">
              <div className={classes.suggestItem}>
                <div className="text-base">{item.description}</div>
                <div className={classes.subHint}></div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </Dialog>
  );
};

function mapStateToProps(state) {
  return { addressList: state.user.addressList };
}

export default connect(mapStateToProps)(injectIntl(AddressSearchingModal));
