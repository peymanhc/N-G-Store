import React, { useState } from "react";
import { IconButton, Icon, Drawer } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import classNames from "classnames";
import { FormattedMessage } from "react-intl";

import MobileSearchInput from "./MobileSearchInput";

const useStyles = makeStyles((theme) => ({
  closeButton: {
    right: 0,
    width: "40px",
    height: "40px",
    padding: "5px",
  },
  drawerPaper: {
    maxHeight: "95%",
    borderRadius: "15px 15px 0 0",
  },
  submitBtn: {
    border: " 1px solid rgb(255, 224, 51)",
    background: "rgb(255, 224, 51)",
    borderRadius: "8px",
    boxShadow:
      "0 4px 12px 0 rgba(255, 231, 95, 0.3), 0 2px 4px 0 rgba(255, 224, 51, 0.3)",
  },
  title: {
    borderRadius: "15px 15px 0 0",
    backgroundColor: "white",
    flex: "0 0 auto",
    padding: "12px 16px",
    fontSize: "20px",
    minHeight: "24px",
    width: "100%",
    lineHeight: "24px",
    fontWeight: "bold",
    borderBottom: "1px solid rgba(0,0,0,.05)",
    position: "fixed",
    zIndex: 30,
  },
  sortList: {
    height: "48px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: "16px",
    paddingRight: "16px",
  },
  checkMark: {
    width: "24px",
    height: "24px",
    display: "inline-block",
    backgroundSize: "24px 24px",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    transform: "scale(1.0)",
    animation: `$addressEnter 200ms ${theme.transitions.easing.easeInOut}`,
    marginLeft: "14px",
    backgroundImage: "url(/static/images/icons/check-mark.svg)",
  },
  "@keyframes addressEnter": {
    "0%": {
      opacity: 0,
      transform: "scale(0.0)",
    },
    "100%": {
      opacity: 1,
      transform: "scale(1.0)",
    },
  },
  resetBtn: {
    background: "transparent",
    borderRadius: "8px",
    boxShadow: " inset 0 0 0 1px rgba(0, 0, 0, .1)",
  },
}));
const sortList = [
  {
    id: 1,
    name: (
      <FormattedMessage
        id="home.mobileSearchBox.TrustYou"
        defaultMessage="Trust you"
      />
    ),
  },
  {
    id: 2,
    name: (
      <FormattedMessage
        id="home.mobileSearchBox.TopRated"
        defaultMessage="Top rated"
      />
    ),
  },
  {
    id: 3,
    name: (
      <FormattedMessage
        id="home.mobileSearchBox.Fast"
        defaultMessage="Fast"
      />
    ),
  },
  {
    id: 4,
    name: (
      <FormattedMessage
        id="home.mobileSearchBox.Inexpensive"
        defaultMessage="Inexpensive"
      />
    ),
  },
  {
    id: 5,
    name: (
      <FormattedMessage
        id="home.mobileSearchBox.Expensive"
        defaultMessage="Expensive"
      />
    ),
  },
];

const MobileSearchBox = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(null);
  const [defaultItem, setDefaultItem] = useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const handleActiveList = (id, index) => {
    setActive(id);
    if (index === 0) {
      setDefaultItem(true);
    } else {
      setDefaultItem(false);
    }
  };
  const resetToDefaultHandler = () => {
    setDefaultItem(true);
    setActive(null);
  };
  return (
    <>
      <MobileSearchInput handleDrawerOpen={handleDrawerOpen} />
      <Drawer
        anchor="bottom"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div
          className={classNames(
            classes.title,
            "flex flex-row items-center justify-between"
          )}
        >
          <div>
            <FormattedMessage
              id="home.mobileSearchBox.ShowFirst"
              defaultMessage="Which one should be shown first?"
            />
          </div>
          <div className="inline-block">
            <IconButton
              aria-label="close"
              className={classes.closeButton}
              onClick={handleDrawerClose}
            >
              <Icon className="text-lg text-black">close</Icon>
            </IconButton>
          </div>
        </div>
        <div className="p-5 text-base mt-12">
          <ul>
            {sortList.map((sortItem, index) => (
              <li
                className={classes.sortList}
                key={sortItem.id}
                onClick={() => handleActiveList(sortItem.id, index)}
              >
                <div>{sortItem.name}</div>
                {index === 0 && defaultItem ? (
                  <div className={classes.checkMark}></div>
                ) : (
                  sortItem.id === active && (
                    <div className={classes.checkMark}></div>
                  )
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-row m-3">
          {!defaultItem && (
            <button
              className={classNames(classes.resetBtn, "w-1/2 p-4 text-lg mr-3")}
              onClick={resetToDefaultHandler}
            >
              <FormattedMessage
                id="home.mobileSearchBox.Reset"
                defaultMessage="Reset"
              />
            </button>
          )}
          <button
            className={classNames(classes.submitBtn, "w-1/2 p-4 text-lg", {
              "w-full": defaultItem,
            })}
          >
            {defaultItem ? (
              <FormattedMessage
                id="home.mobileSearchBox.Done"
                defaultMessage="Done"
              />
            ) : (
              <FormattedMessage
                id="home.mobileSearchBox.Show"
                defaultMessage="Show"
              />
            )}
          </button>
        </div>
      </Drawer>
    </>
  );
};

export default MobileSearchBox;
