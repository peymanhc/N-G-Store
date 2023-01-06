import * as actions from "./megaMenu.action";

const initialState = {
  data: [],
  error: "",
  loading: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_MEGAMENU_LOADING:
      return {
        ...state,
        loading: true,
      };
    case actions.GET_MEGAMENU_SUCCESS:
      return {
        loading: false,
        data: action.data,
        error: "",
      };
    case actions.GET_MEGAMENU_FAILD:
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
