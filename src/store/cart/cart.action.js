import axios from "axios";
import React from "react";
import AlertSuccess from "components/alert/Alert";
import AlertError from "components/alert/AlertError";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
export const GET_CARTS = "GET CARTS";
export const GET_ORDERS = "GET ORDERS";
export const GET_ALL_CARTS = "GET ALL CARTS";
export const SAVE_CART = "SAVE CART";
export const GET_ADDRESSES = "GET ADDRESSES";
export const GET_GATEWAYS = "GET GATEWAYS";
export const CONFIRM_CARTS = "CONFIRM CARTS";
export const SAVE_COUPON = "SAVE_COUPON";
export const GET_USER_CARTS_COUNT = "GET USER CARTS COUNT";

export function AddCoupon(userid, lang, coupon) {
  const request = axios.post("/webservice/verifyDiscountCode", {
    params: {
      sid: userid,
      lang: lang,
      ent_coupon: coupon,
    },
  });

  return (dispatch) =>
    request.then((response) => {
      console.log(response);
      return dispatch({
        type: SAVE_COUPON,
        payload: response.data,
      });
    });
}

export const getUserCartsCount = () => {
  const request = axios.get("shop/cart/");

  return (dispatch) =>
    request
      .then((response) => {
        return dispatch({
          type: GET_USER_CARTS_COUNT,
          payload: response.data,
        });
      })
      .catch((err) => {
        console.log("err");
      });
};

export const setUserCartsCount = (count) => {
  return { type: GET_USER_CARTS_COUNT, payload: count };
};

export function addAddress(
  userid,
  lang,
  title,
  address,
  tel,
  lat,
  long,
  description,
  type
) {
  const request = axios.post("/eda/cart/add-address", {
    sid: userid,
    lang: lang,
    title: title,
    address: address,
    tel: tel,
    lat: lat,
    long: long,
    description: description,
    type: type,
  });

  return (dispatch) =>
    request
      .then((res) => {
        confirmAlert({
          customUI: ({ onClose }) => {
            return (
              <div style={{ margin: "-70px" }}>
                <AlertSuccess close={onClose} message="address Added" />
              </div>
            );
          },
        });
        return dispatch(getAddresses());
      })
      .catch((err) => {
        confirmAlert({
          customUI: ({ onClose }) => {
            return (
              <div style={{ margin: "-70px" }}>
                <AlertError close={onClose} message={"err to add address"} />
              </div>
            );
          },
        });
      });
}
export function editAddress(
  userid,
  id,
  title,
  address,
  tel,
  lat,
  long,
  description
) {
  const request = axios.post("/eda/cart/edit-address", {
    sid: userid,
    id: id,
    tel: tel,
    title: title,
    address: address,
    number: "3",
    lat: lat,
    long: long,
    description: description,
  });

  return (dispatch) =>
    request
      .then((res) => {
        confirmAlert({
          customUI: ({ onClose }) => {
            return (
              <div style={{ margin: "-70px" }}>
                <AlertSuccess close={onClose} message={res.data.msgText} />
              </div>
            );
          },
        });
        return dispatch(getAddresses());
      })
      .catch((err) => {
        confirmAlert({
          customUI: ({ onClose }) => {
            return (
              <div style={{ margin: "-70px" }}>
                <AlertError close={onClose} message={"error to edit address"} />
              </div>
            );
          },
        });
      });
}
export function RemoveAddress(userid, id) {
  const request = axios.post("/eda/cart/delete-address", {
    sid: userid,
    id: id,
  });

  return (dispatch) =>
    request
      .then((response) => {
        confirmAlert({
          customUI: ({ onClose }) => {
            return (
              <div style={{ margin: "-70px" }}>
                <AlertSuccess close={onClose} message={"Address removed"} />
              </div>
            );
          },
        });
        return dispatch(getAddresses());
      })
      .catch((err) => {
        confirmAlert({
          customUI: ({ onClose }) => {
            return (
              <div style={{ margin: "-70px" }}>
                <AlertError close={onClose} message="item added to cart" />
              </div>
            );
          },
        });
      });
}
export function ConnectToPort(
  userid,
  lang,
  addressid,
  gatewayid,
  description,
  isgift,
  tel,
  lat,
  long
) {
  const request = axios.post("/webservice/orderConfirm", {
    sid: userid,
    lang: lang,
    addressid: addressid,
    gatewayid: gatewayid,
    isgift: isgift,
    tel: tel,
    lat: lat,
    long: long,
    description: description,
    bookingType: "now",
  });

  return (dispatch) =>
    request
      .then((response) => {
        console.log(response.data.msgFlag);
        if (response.data.msgFlag === "0") {
          window.location.replace("/en/all-city/Successfully");
        } else {
          confirmAlert({
            customUI: ({ onClose }) => {
              return (
                <div style={{ margin: "-70px" }}>
                  <AlertError close={onClose} message={response.data.msgText} />
                </div>
              );
            },
          });
        }
      })
      .catch((err) => console.log("err to Connect to the Port"));
}

export function getCarts(userid, lang, type) {
  const request = axios.get("/webservice/getcarts", {
    params: {
      sid: userid,
      lang: lang,
      type: type,
    },
  });

  return (dispatch) =>
    request
      .then((response) => {
        return dispatch({
          type: GET_CARTS,
          payload: response.data,
        });
      })
      .catch((err) => console.log("err"));
}

export function confirmCarts(addressId) {
  const request = axios.get("/shop/cart/confirm", { params: { addressId } });

  return (dispatch) =>
    request.then((response) => {
      dispatch(getUserCartsCount());
      return dispatch({
        type: CONFIRM_CARTS,
        payload: response.data,
      });
    });
}

export function getAddresses(userid, lang) {
  const access_token = localStorage.getItem("jwt_access_token");
  const request = axios.get("/eda/cart/address", {
    params: {
      sid: userid,
      lang: lang,
    },
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });

  return (dispatch) =>
    request.then((response) => {
      return dispatch({
        type: GET_ADDRESSES,
        payload: response.data,
      });
    }).catch((err)=> console.warn("err to get address"))
}

export function getGateways() {
  const access_token = localStorage.getItem("jwt_access_token");
  const request = axios.get("/eda/cart/gateways", {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });

  return (dispatch) =>
    request
      .then((response) => {
        return dispatch({
          type: GET_GATEWAYS,
          payload: response.data,
        });
      })
      .catch((err) => console.warn("error to get getwayes"));
}

export function getAllCarts() {
  const request = axios.get("/shop/cart/carts");

  return (dispatch) =>
    request.then((response) => {
      dispatch(getUserCartsCount());
      return dispatch({
        type: GET_ALL_CARTS,
        payload: response.data,
      });
    });
}

export function saveCart(userid, lang, count, properties, type, product) {
  let CartsData = [];
  if (localStorage.getItem("cart")) {
    CartsData = JSON.parse(localStorage.getItem("cart")) || {};
  }
  const size = properties.SIZE_ID;
  const color = properties.active;
  var currentdate = new Date();
  var datetime =
    currentdate.getDate() +
    "/" +
    (currentdate.getMonth() + 1) +
    "/" +
    currentdate.getFullYear() +
    " @ " +
    currentdate.getHours() +
    ":" +
    currentdate.getMinutes() +
    ":" +
    currentdate.getSeconds();

  const found = CartsData.some((el) => el.pid === product);
  if (!found) {
    CartsData.push({
      sid: userid,
      lang: lang,
      datetime: datetime,
      cnt: count,
      pid: product,
      isgift: true,
      properties: properties,
      type: type,
    });
    localStorage.setItem("cart", JSON.stringify(CartsData));
  }
}
export function saveCartOnline(userid, lang, count, properties, type, product) {
  var currentdate = new Date();
  var datetime =
    currentdate.getDate() +
    "/" +
    (currentdate.getMonth() + 1) +
    "/" +
    currentdate.getFullYear() +
    " @ " +
    currentdate.getHours() +
    ":" +
    currentdate.getMinutes() +
    ":" +
    currentdate.getSeconds();
  const size = properties.SIZE_ID;
  const color = properties.active;
  const property = !properties.active ? [size] : [size, color];
  const access_token = localStorage.getItem("jwt_access_token");
  var postData = {
    sid: userid,
    lang: lang,
    datetime: datetime,
    cnt: count,
    pid: product,
    isgift: true,
    properties: property,
    type: type,
  };

  let axiosConfig = {
    headers: {
      // "Content-Type": "application/x-www-form-urlencoded",
      Authorization: access_token,
    },
  };
  const request = axios.post("/webservice/cart", postData, axiosConfig);
  return (dispatch) =>
    request.then((res) => {
      console.log(res);
      if (res.data.msgFlag === 1) {
        confirmAlert({
          customUI: ({ onClose }) => {
            return (
              <div style={{ margin: "-70px" }}>
                <AlertError close={onClose} message={res.data.msgText} />
              </div>
            );
          },
        });
      } else {
        return dispatch(getCarts());
      }
    });
}

export function removeCart(cartId, productId) {
  const request = axios.delete("/shop/cart/remove", {
    data: { cartId, productId },
  });

  return (dispatch) =>
    request.then((response) => {
      dispatch(getUserCartsCount());
      if (productId) {
        return dispatch({
          type: GET_CARTS,
          payload: response.data,
        });
      } else {
        return dispatch({
          type: GET_ALL_CARTS,
          payload: response.data,
        });
      }
    });
}
export function getOrders(userid, lang, page, results, seed, cycle) {
  const request = axios.get("/webservice/getOrderList", {
    params: {
      sid: userid,
      lang: lang,
      page: page,
      results: results,
      seed: seed,
      cycle: cycle,
      orderid: 0,
    },
  });

  return (dispatch) =>
    request
      .then((response) => {
        return dispatch({
          type: GET_ORDERS,
          payload: response.data,
        });
      })
      .catch((err) => console.log("err"));
}
