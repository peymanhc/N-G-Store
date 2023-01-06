import * as actions from "./auth.action";

const initialState = {
  data: [],
  error: "",
  loading: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.ACCOUNT_LOADING:
      return {
        ...state,
        loading: true,
      };
    case actions.USER_LOGIN:
      return {
        loading: false,
        data: action.data,
        error: "",
      };
    case actions.ACCOUNT_FAIL:
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
