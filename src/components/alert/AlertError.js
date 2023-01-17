import React from "react";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";
import "./styles.css";
const AlertError = ({ message,close }) => {
  return (
    <div className="custom-modal">
      <div className="succes succes-animation icon-top">
        <ErrorOutlineIcon style={{ fontSize: 90, color: "#ff4752" }} />
      </div>
      <div className="danger border-bottom"></div>
      <div className="content">
        <p style={{ color: "#ff4752" }} className="type">
          OH No
        </p>
        <p className="message-type">{message}</p>
        <button onClick={close} className="Erralert-icon">Try again</button>
      </div>
    </div>
  );
};

export default AlertError;
