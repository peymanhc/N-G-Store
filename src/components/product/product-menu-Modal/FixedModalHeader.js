import React from "react";
import { IconButton, Icon } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  closeButton: {
    position: "absolute",
    right: theme.spacing(2),
    color: theme.palette.grey[500],
    padding: "13px",
    marginTop:"10px"
  },
}));

const FixedModalHeader = ({ closeDialog, title }) => {
  const classes = useStyles();

  return (
    <>
      <div className="text-2xl font-bold p-8">{title}</div>
      <IconButton
        aria-label="close"
        className={classes.closeButton}
        onClick={closeDialog}
      >
        <Icon className="text-lg text-black">close</Icon>
      </IconButton>
    </>
  );
};

export default FixedModalHeader;
