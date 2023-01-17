import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  box: {
    backgroundColor: "white",
    borderRadius: 5,
    boxShadow:"2px  0 0.6rem rgba(0,0,0,.25)"
  },
  headimg: {
    maxWidth: 180,
  },
  number: {
    color: "#846e91",
    fontSize: 20,
  },
  numberred: {
    color: "#bc6814",
    fontSize: 20,
  },
}));
const Box = () => {
  const classes = useStyles();
  return (
    <div className="md:w-1/3 w-full p-2">
      <div
        className={`p-8 text-gray-700 text-center flex items-center flex-col ${classes.box}`}
      >
        <img
          className={classes.headimg}
          alt="head"
          src="https://www.navitech-expo.ru/common/img/uploaded/exhibitions/navitech2020/img/RNVT-logo-eng.png"
        />
        <div className="mt-4">
          <b className={classes.number}>448 </b> exhibitors
          <br />
          <p className="mt-1">
            <b className={classes.numberred}>18&nbsp;126</b> visitors
          </p>
        </div>
      </div>
    </div>
  );
};

export default Box;
