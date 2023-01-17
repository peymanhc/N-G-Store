import React from "react";
import { Icon, IconButton } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import classNames from "classnames";

const useStyles = makeStyles((theme) => ({
  closeButton: {
    color: "black",
    width: 60,
    height: 60,
  },
  logo: {
    flex: " 1 0 auto",
    lineHeight: 0,
    paddingRight: "65px",
  },
  headerWidth: {
    width: "312px",
    top: "0",
  },
}));

const logo = {
  src: "/static/images/header/logo.svg",
  alt: "logo",
};

const SideBarHeader = ({ close }) => {
  const classes = useStyles();

  return (
    <div
      className={classNames(
        classes.headerWidth,
        "shadow-md flex flex-row items-center p-2 justify-between bg-white z-10 sticky"
      )}
    >
      <div className="inline-block">
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={close}
        >
          <Icon className="text-lg text-black">close</Icon>
        </IconButton>
      </div>
      <div className={classNames(classes.logo, "text-center pb-2")}>
        <img alt={logo.alt} src={logo.src} className="h-6 mx-auto" />
      </div>
    </div>
  );
};

export default SideBarHeader;
