import * as actions from "./productDetail.action";

const initialState = {
  data: [],
  error: "",
  loading: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_PRODUCTS_DETAIL_LOADING:
      return {
        ...state,
        loading: true,
      };
    case actions.GET_PRODUCTS_DETAIL_SUCCESS:
      return {
        loading: false,
        data: action.data,
        error: "",
      };
    case actions.GET_PRODUCTS_DETAIL_FAILD:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default reducer;
