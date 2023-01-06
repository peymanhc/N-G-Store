import axios from "axios";
import React from "react";
import { confirmAlert } from "react-confirm-alert";
import AlertSuccess from "components/alert/Alert";
import AlertError from "components/alert/AlertError";

export const USER_LOGIN = "USER LOGIN";
export const ACCOUNT_LOADING = "ACCOUNT LOADING";
export const ACCOUNT_FAIL = "ACCOUNT FAIL";
export const LOGOUT = "LOGOUT";

export const AccountSuccess = (Account) => {
  return {
    type: USER_LOGIN,
    Account,
  };
};
const setSession = (access_token) => {
  if (access_token) {
    localStorage.setItem("jwt_access_token", access_token);
    axios.defaults.headers.common["Authorization"] = "Bearer" + access_token;
  } else {
    localStorage.removeItem("jwt_access_token");
    delete axios.defaults.headers.common["Authorization"];
  }
};
export function userLogin(data) {
  const request = axios.get("/api/auth", {
    params: {
      email: data.email,
      password: data.password,
    },
  });
  return (dispatch) => {
    request
      .then((res) => {
        if (res.data.user === undefined) {
          setSession(null);
          confirmAlert({
            customUI: ({ onClose }) => {
              return (
                <div style={{ margin: "-70px" }}>
                  <AlertError close={onClose} message={res.statusText} />
                </div>
              );
            },
          });
          return dispatch(AccountSuccess(res));
        } else {
          setSession(res.data.access_token);
          dispatch({ type: ACCOUNT_FAIL, payload: false });
          confirmAlert({
            customUI: ({ onClose }) => {
              return (
                <div style={{ margin: "-70px" }}>
                  <AlertSuccess close={onClose} message="WelcomeBack" />
                </div>
              );
            },
          });
          setTimeout(() => {
            window.location.replace("/en/all-city/shop");
          }, 2000);
          return dispatch({
            type: USER_LOGIN,
            payload: res.data.user,
          });
        }
      })
      .catch((err) => {
        alert("some thing went wrong");
      });
  };
}
export function doRegister(data) {
  const request = axios.post("/api/auth/WPAAuthenticate", {
    params: {
      name: data.name,
      city: data.city,
      SSIPD: "5.63.13.165",
      lang: data.lang,
      code: "98",
      mobile: "09030525589",
      email: data.email,
      verifyCode: "11111",
      password: data.password,
      type: "register",
    },
  });
  return (dispatch) => {
    request
      .then((res) => {
        if (res.data.msgFlag === 0) {
          dispatch(AccountSuccess(res));
          alert(res.data.msgText);
          localStorage.setItem("jwt_access_token", res.data.access_token);
        } else {
          alert(res.data.msgText);
        }
      })
      .catch((err) => {
        alert(err.message);
      });
  };
}
export function doLogout() {
  localStorage.removeItem("jwt_access_token");
  setTimeout(() => {
    window.location.replace("/en/all-city/shop");
  }, 2000);
}
