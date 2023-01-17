import React from "react";
import "./styles.css";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
const Alert = ({ message, close }) => {
  return (
    <div className="custom-modal">
      <div className="succes succes-animation icon-top">
        <CheckCircleOutlineIcon style={{ fontSize: 90, color: "#0fca79" }} />
      </div>
      <div className="succes border-bottom"></div>
      <div className="content">
        <p style={{ color: "#0fca79" }} className="type">
          Success
        </p>
        <p className="message-type">{message}</p>
        <button onClick={close} className="donealert-icon">
          Done
        </button>
      </div>
    </div>
  );
};

export default Alert;
