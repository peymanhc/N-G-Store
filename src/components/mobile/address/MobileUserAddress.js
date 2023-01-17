import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import classNames from "classnames";
import { FormattedMessage } from "react-intl";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { openDialog } from "store/dialog";

import AddressModal from "./AddressModal";

const useStyles = makeStyles((theme) => ({
  menuIcon: {
    width: "24px",
    height: " 24px",
    display: "inline-block",
    backgroundSize: "24px 24px",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
  dialogPaper: {
    height: "100%",
    width: "100%",
    margin: 0,
    maxWidth: "none",
    borderRadius: 0,
    zIndex: 999,
  },
}));

const locationIcon = {
  src: "/static/images/header/location.svg",
  alt: "location",
};

const MobileUserAddress = ({ openDialog }) => {
  const classes = useStyles();

  const InfoButton = () => (
    <button
      onClick={() =>
        openDialog({
          children: <AddressModal />,
          fullScreen: true,
          scroll: "body",
          classes: { paper: classes.dialogPaper },
        })
      }
      className={classNames("text-black flex items-center p-5 text-md w-full")}
    >
      <div className={classes.menuIcon}>
        <img alt={locationIcon.alt} src={locationIcon.src} />
      </div>
      <div className="rtl:mr-2 ltr:ml-2">
        <FormattedMessage
          id="header.myAddresses"
          defaultMessage="My Addresses"
        />
      </div>
    </button>
  );
  return <InfoButton />;
};
function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      openDialog,
    },
    dispatch
  );
}
export default connect(null, mapDispatchToProps)(MobileUserAddress);
