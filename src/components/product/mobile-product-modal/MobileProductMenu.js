import React from "react";
import { IconButton, Icon } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import classNames from "classnames";
import { FormattedMessage } from "react-intl";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { closeDialog } from "store/dialog";

import PropertiesOptionModal from "../product-menu-Modal/PropertiesOptionModal";

const useStyles = makeStyles({
  closeButton: {
    right: 0,
    width: "40px",
    height: "40px",
    position: "fixed",
    boxShadow: "0 4px 12px 0 rgba(0, 0, 0, 0.07)",
    backgroundColor: "white",
    padding: "5px",
    margin: "10px",
    zIndex: 30,
  },
  drawerPaper: {
    maxHeight: "95%",
    borderRadius: "15px 15px 0 0",
  },
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
  image: {
    minHeight: "15rem ",
  },
  gray: {
    color: "#b0b0b0",
  },
  bgGray: {
    background: "#fafafa",
  },
  counterEdit: {
    boxShadow:
      "60px 14px 6px 16px rgba(232, 222, 222, 1), 0 2px 40px 20px rgba(249, 239, 239, 1)",
  },
  counter: {
    border: " solid 1px #e0e0e0",
    padding: "13px 20px",
    borderRadius: "4px",
  },
  counterButton: {
    width: "24px",
    height: "24px",
    fontSize: "22px",
    lineHeight: "24px",
    userSelect: "none",
  },
  submitBtn: {
    border: " 1px solid rgb(255, 224, 51)",
    background: "rgb(255, 224, 51)",
    borderRadius: "8px",
    boxShadow:
      "0 4px 12px 0 rgba(255, 231, 95, 0.3), 0 2px 4px 0 rgba(255, 224, 51, 0.3)",
  },
});

const MobileProductMenu = ({
  closeDialog,
  imagesAdress,
  name,
  price,
  menuBtnHandler,
}) => {
  const classes = useStyles();

  return (
    <div
      anchor="bottom"
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <IconButton
        aria-label="close"
        className={classes.closeButton}
        onClick={closeDialog}
      >
        <Icon className="text-lg text-black">close</Icon>
      </IconButton>
      <div className={classes.bgGray}>
        <div>
          <img
            className={classNames(
              classes.image,
              "bg-cover bg-no-repeat bg-center w-full h-full"
            )}
            alt={name}
            src={imagesAdress}
          />
        </div>
        <div className="p-5 text-base">
          Томатный соус, моцарелла, рикотта, прошутто котто, пармезан
        </div>
        <div className={classNames(classes.gray, "rtl:mr-5 ltr:ml-5")}>
          <div className="leading-loose">
            <FormattedMessage
              id="restaurant.productMenuModal.AdditionalIngredients"
              defaultMessage="Additional ingredients"
            />
          </div>
          <div className="leading-loose">
            <FormattedMessage
              id="restaurant.productMenuModal.ChooseTo"
              defaultMessage="Choose to "
            />{" "}
            18
          </div>
        </div>
        <div className="mb-8 rtl:mr-2 ltr:ml-2">
          <PropertiesOptionModal className="mb-4" />
        </div>
      </div>
      <div
        className={classNames(
          classes.counterEdit,
          "w-full p-5 fixed left-0 bottom-0 bg-white"
        )}
      >
        <div className="flex flex-row justify-between">
          <h2>Пицца Калветти</h2>
          <div>{price} ₽</div>
        </div>
        <div className="flex flex-row justify-between mt-3">
          <div className={classNames(classes.counter, "my-2")}>
            <span className="flex items-center text-center">
              <div
                className={classNames(
                  classes.counterButton,
                  "font-bold cursor-pointer"
                )}
              >
                -
              </div>
              <div className="my-0 mx-2 text-lg">1</div>
              <div
                className={classNames(
                  classes.counterButton,
                  "font-bold cursor-pointer"
                )}
              >
                +
              </div>
            </span>
          </div>
          <button
            onClick={menuBtnHandler}
            className={classNames(
              classes.submitBtn,
              "text-center w-full rtl:mr-3 ltr:ml-3 my-2 px-8 text-lg"
            )}
          >
            <FormattedMessage
              id="restaurant.mobileProductMenu.Add"
              defaultMessage="Add"
            />
          </button>
        </div>
      </div>
    </div>
  );
};
function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      closeDialog,
    },
    dispatch
  );
}

export default connect(null, mapDispatchToProps)(MobileProductMenu);
