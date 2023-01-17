import React from "react";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  card: {
    margin: "10px 0",
    width: "100%",
    height: 70,
    alignItems: "center",
    padding: 20,
    cursor: "pointer",
    backgroundColor: "white",
    borderRadius: 0,
    boxShadow: "0 2px 1px 0 rgba(0, 0, 0, 0.06)",
    display: "flex",
  },
  icon: {
    fontSize: 40,
    color: "#846e91",
  },
}));
const PictButton = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.card}>
      {props.icon}
      <p className="px-4">{props.text}</p>
    </div>
  );
};

export default PictButton;
