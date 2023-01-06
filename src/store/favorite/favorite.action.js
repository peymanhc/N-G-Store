import axios from "axios";

export const GET_CARTS = "GET CARTS";
export const GET_ALL_CARTS = "GET ALL CARTS";
export const SAVE_CART = "SAVE CART";
export const GET_ADDRESSES = "GET ADDRESSES";
export const GET_GATEWAYS = "GET GATEWAYS";
export const CONFIRM_CARTS = "CONFIRM CARTS";
export const VERIFICATION_PAYMENT = "VERIFICATION PAYMENT";
export const GET_USER_CARTS_COUNT = "GET USER CARTS COUNT";

export function verification(authority) {
  const request = axios.post("/shop/cart/verification", { authority });

  return (dispatch) =>
    request.then((response) => {
      return dispatch({
        type: VERIFICATION_PAYMENT,
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

export function addAddress(address, tel) {
  const request = axios.post("/shop/cart/add-address", { address, tel });

  return (dispatch) =>
    request.then((response) => {
      return dispatch(getAddresses());
    });
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

export function getAddresses(userid,lang) {
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
    });
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

export function AddToFavrite(product, properties, count, lang, date, type, image) {
  let CartsData = [];
  if (localStorage.getItem("fav")) {
    CartsData = JSON.parse(localStorage.getItem("fav")) || {};
  }
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
      pid: product,
      properties: { properties },
      cnt: 1,
      lang: lang,
      datetime: datetime,
      type: type,
    });
    localStorage.setItem("fav", JSON.stringify(CartsData));
    alert("item added to your basket");
  } else alert("already in your cart");
}
export function saveFavoriteOnline(userid, lang, count, properties, type, product) {
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
  var postData = {
    sid: userid,
    lang: lang,
    datetime: datetime,
    cnt: count,
    pid: product,
    isgift: true,
    properties: properties,
    type: type,
  };

  let axiosConfig = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const request = axios.post("/webservice/cart", postData, axiosConfig);
  return (dispatch) =>
    request.then((res) => {
      if (res.data.msgFlag === 1) {
        alert("err");
      } else {
        console.log(res);
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
