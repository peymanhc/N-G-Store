import * as Actions from "./favorite.action";

const initialState = {
  allcarts: [],
  loading: true,

};

const reducer = function (state = initialState, action) {
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
    default: {
      return state;
    }
  }
};

export default reducer;
