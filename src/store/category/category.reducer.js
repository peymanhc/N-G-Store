import * as actions from "./category.action";

const initialState = {
  data: [],
  category: [],
  error: "",
  loading: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_CATEGORY_LOADING:
      return {
        ...state,
        loading: true,
      };
    case actions.GET_CATEGORY_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.data,
        error: "",
      };
    case actions.GET_CATEGORY_ALL:
      return {
        ...state,
        loading: false,
        category: action.data,
        error: "",
      };
    case actions.GET_CATEGORY_FAILD:
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
