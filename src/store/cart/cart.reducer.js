import * as Actions from "./cart.action";

const initialState = {
  carts: [],
  allcarts: [],
  userCartsCount: 0,
  loading: true,
  getaddress: [],
  getwayes: [],
  orders: [],
  coupon:"",
};

const cart = function (state = initialState, action) {
  switch (action.type) {
    case Actions.GET_USER_CARTS_COUNT: {
      return {
        ...state,
        loading: false,
        userCartsCount: action.payload,
      };
    }
    case Actions.GET_CARTS: {
      return {
        ...state,
        loading: false,
        allcarts: action.payload,
      };
    }
    case Actions.SAVE_CART: {
      return {
        ...state,
        loading: false,
        carts: action.payload,
      };
    }
    case Actions.GET_ADDRESSES: {
      return {
        ...state,
        loading: false,
        getaddress: action.payload,
      };
    }
    case Actions.GET_GATEWAYS: {
      return {
        ...state,
        loading: false,
        getwayes: action.payload,
      };
    }
    case Actions.GET_ORDERS: {
      return {
        ...state,
        loading: false,
        orders: action.payload,
      };
    }
    case Actions.SAVE_COUPON: {
      return {
        ...state,
        coupon: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default cart;
