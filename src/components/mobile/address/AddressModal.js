import React, { useReducer, useCallback } from "react";
import { Icon, IconButton, Grow, Slide } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import classNames from "classnames";
import { FormattedMessage } from "react-intl";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { openDialog, closeDialog } from "store/dialog";

import AddressEditing from "./AddressEditing";
import SearchAddress from "./AddressSearchingModal";

const useStyles = makeStyles((theme) => ({
  headerWidth: {
    width: "100%",
    boxShadow: "0 1px 0 0 rgba(0, 0, 0, .05)",
    zIndex: 30,
  },
  container: {
    display: "flex",
    padding: "20px 20px 20px 0",
    overflow: "hidden",
    fontSize: "16px",
    marginLeft: "20px",
    whiteSpace: "nowrap",
    borderBottom: "1px solid rgba(0,0,0,.05)",
    cursor: "pointer",
  },
}));

const initialState = {
  address: null,
  open: false,
};

const reducer = (state, { field, value }) => ({ ...state, [field]: value });

const AddressModal = ({ closeDialog, openDialog, addressList }) => {
  const classes = useStyles();

  const [state, dispatch] = useReducer(reducer, initialState);

  const { address, open } = state;

  const firtPage = !Boolean(address);

  const selectAddress = (item) => {
    dispatch({ field: "address", value: item });
  };

  const goToBack = useCallback(() => {
    dispatch({ field: "address", value: null });
  }, []);

  const openSearchModal = () => {
    dispatch({ field: "open", value: true });
  };

  return (
    <div className="flex flex-col w-full h-full">
      <div
        className={classNames(
          classes.headerWidth,
          "flex flex-row items-center justify-between bg-white"
        )}
      >
        <div>
          {firtPage === true ? (
            <Grow in={firtPage} {...(firtPage ? { timeout: 1000 } : {})}>
              <IconButton
                aria-label="close"
                className="h-16 w-16"
                onClick={closeDialog}
              >
                <Icon className="text-lg text-black">close</Icon>
              </IconButton>
            </Grow>
          ) : (
            <Grow
              in={!firtPage}
              {...(firtPage === false ? { timeout: 1000 } : {})}
            >
              <IconButton
                aria-label="close"
                className="h-16 w-16"
                onClick={goToBack}
              >
                <Icon className="text-lg text-black">arrow_back</Icon>
              </IconButton>
            </Grow>
          )}
        </div>

        <div className="flex justify-center overflow-hidden text-xl font-bold">
          {firtPage === true ? (
            <Grow in={firtPage} {...(firtPage ? { timeout: 1000 } : {})}>
              <span className="truncate h-8">
                <FormattedMessage
                  id="header.myAddresses"
                  defaultMessage="My Addresses"
                />
              </span>
            </Grow>
          ) : (
            <Grow in={!firtPage} {...(firtPage ? { timeout: 400 } : {})}>
              <span className="truncate">{address && address.description}</span>
            </Grow>
          )}
        </div>
        <div className="w-16 h-16" />
      </div>
      <div className="flex">
        <Slide direction="right" in={firtPage} timeout={400}>
          <div className={firtPage ? "w-full" : "hidden"}>
            {addressList.map((item, index) => (
              <div
                key={index}
                className={classes.container}
                onClick={() => selectAddress(item)}
              >
                {item.description}
              </div>
            ))}
            <div onClick={openSearchModal} className={classes.container}>
            <FormattedMessage
              id="home.userAddress.AddMore"
              defaultMessage="Add more"
            />
            </div>
          </div>
        </Slide>
        {address && (
          <Slide direction="left" in={!firtPage} timeout={400}>
            <div>
              <AddressEditing address={address} goToBack={goToBack} />
            </div>
          </Slide>
        )}
      </div>
      {open && <SearchAddress open={open} action={dispatch} />}
    </div>
  );
};

function mapStateToProps(state) {
  return { addressList: state.user.addressList };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      closeDialog,
      openDialog,
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(AddressModal);
