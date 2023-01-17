import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import classNames from "classnames";
import { FormattedMessage } from "react-intl";

const useStyles = makeStyles((theme) => ({
  gray: {
    color: "#b0b0b0",
  },
  footer: {
    width: "100%",
    maxWidth: "600px",
    zIndex: 10,
    borderRadius: "15px 15px 0 0",
  },
  submitBtn: {
    border: " 1px solid rgb(255, 224, 51)",
    background: "rgb(255, 224, 51)",
    borderRadius: "3px",
  },
  counter: {
    border: " solid 1px #e0e0e0",
    padding: "13px",
    borderRadius: "4px",
  },
  counterButton: {
    width: "24px",
    height: "24px",
    fontSize: "22px",
    lineHeight: "24px",
    userSelect: "none",
  },
}));

const ProductMenuModalFooter = () => {
  const classes = useStyles();

  return (
    <div className={classNames(classes.footer, "px-3")}>
      <div className="flex flex-row">
        <button
          className={classNames(
            classes.submitBtn,
            "text-center font-bold my-2 px-4 text-lg"
          )}
        >
          <FormattedMessage
            id="restaurant.productMenuModalFooter.WithoutOptions"
            defaultMessage="Add without options"
          />
        </button>
        <div className={classNames(classes.counter, "my-2 mx-5")}>
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
        <div className="m-2 ml-auto items-right">
          <div className={classNames(classes.gray, "text-sm")}>
            <FormattedMessage
              id="restaurant.productMenuModalFooter.Amount"
              defaultMessage="Amount"
            />
          </div>
          <div className="text-lg">550 ₽</div>
        </div>
      </div>
    </div>
  );
};

export default ProductMenuModalFooter;
