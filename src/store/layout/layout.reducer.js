import * as actions from "./layout.action";

const initialState = {
  footer: [],
  onlyToday: [],
  discountList: [],
  daylybanner: [],
  TFbanner: [],
  discount30banner: [],
  recommented: [],
  newItems: [],
  onecate: [],
  twocate: [],
  threecate: [],
  bestProducts: [],
  colection: [],
  error: "",
  TopBanner: [],
  loading: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_FOOTER_LOADING:
      return {
        ...state,
        loading: true,
      };
    case actions.GET_COLOCTION_LOADING:
      return {
        ...state,
        loading: true,
      };
    case actions.GET_ONLY_TODAY_LOADING:
      return {
        ...state,
        loading: true,
      };
    case actions.GET_DISCOUNT_LIST_TIME_LOADING:
      return {
        ...state,
        loading: true,
      };
    case actions.GET_DISCOUNT_DAYLYBANNER_LOADING:
      return {
        ...state,
        loading: true,
      };
    case actions.GET_DISCOUNT_TFBANNER_LOADING:
      return {
        ...state,
        loading: true,
      };
    case actions.GET_RECOMMENTED_LOADING:
      return {
        ...state,
        loading: true,
      };
    case actions.GET_DISCOUNT_30BANNER_LOADING:
      return {
        ...state,
        loading: true,
      };
    case actions.GET_NEWITEMS_LOADING:
      return {
        ...state,
        loading: true,
      };
    case actions.GET_CATEONE_LOADING:
      return {
        ...state,
        loading: true,
      };
    case actions.GET_CATETWO_LOADING:
      return {
        ...state,
        loading: true,
      };
    case actions.GET_CATETHREE_LOADING:
      return {
        ...state,
        loading: true,
      };
    case actions.GET_BESTPRODUCT_ITEMS_LOADING:
      return {
        ...state,
        loading: true,
      };
    case actions.GET_TOP_BANNER_LOADING:
      return {
        ...state,
        loading: true,
      };
    case actions.GET_FOOTER_SUCCESS:
      return {
        ...state,
        loading: false,
        footer: action.footer,
        error: "",
      };
    case actions.GET_FOOTER_FAILD:
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    case actions.GET_ONLY_TODAY_SUCCESS:
      return {
        ...state,
        loading: false,
        onlyToday: action.onlyToday,
        error: "",
      };
    case actions.GET_ONLY_TODAY_FAILD:
      return {
        loading: false,
        error: action.error,
      };

    case actions.GET_DISCOUNT_LIST_TIME_SUCCESS:
      return {
        ...state,
        loading: false,
        discountList: action.DiscountList,
        error: "",
      };
    case actions.GET_DISCOUNT_LIST_TIME_FAILD:
      return {
        loading: false,
        error: action.error,
      };

    case actions.GET_DISCOUNT_DAYLYBANNER_SUCCESS:
      return {
        ...state,
        loading: false,
        daylybanner: action.daylybanner,
        error: "",
      };
    case actions.GET_DISCOUNT_DAYLYBANNER_FAILD:
      return {
        loading: false,
        error: action.error,
      };

    case actions.GET_DISCOUNT_TFBANNER_SUCCESS:
      return {
        ...state,
        loading: false,
        TFbanner: action.TFbanner,
        error: "",
      };
    case actions.GET_DISCOUNT_DAYLYBANNER_FAILD:
      return {
        loading: false,
        error: action.error,
      };

    case actions.GET_RECOMMENTED_SUCCESS:
      return {
        ...state,
        loading: false,
        recommented: action.recommented,
        error: "",
      };
    case actions.GET_RECOMMENTED_FAILD:
      return {
        loading: false,
        error: action.error,
      };

    case actions.GET_DISCOUNT_30BANNER_SUCCESS:
      return {
        ...state,
        loading: false,
        discount30banner: action.data,
        error: "",
      };
    case actions.GET_DISCOUNT_30BANNER_FAILD:
      return {
        loading: false,
        error: action.error,
      };

    case actions.GET_NEWITEMS_SUCCESS:
      return {
        ...state,
        loading: false,
        newItems: action.data,
        error: "",
      };
    case actions.GET_NEWITEMS_FAILD:
      return {
        loading: false,
        error: action.error,
      };

    case actions.GET_CATEONE_SUCCESS:
      return {
        ...state,
        loading: false,
        onecate: action.data,
        error: "",
      };
    case actions.GET_CATEONE_FAILD:
      return {
        loading: false,
        error: action.error,
      };

    case actions.GET_CATETWO_SUCCESS:
      return {
        ...state,
        loading: false,
        twocate: action.data,
        error: "",
      };
    case actions.GET_CATETWO_FAILD:
      return {
        loading: false,
        error: action.error,
      };

    case actions.GET_CATETHREE_SUCCESS:
      return {
        ...state,
        loading: false,
        threecate: action.data,
        error: "",
      };
    case actions.GET_CATETHREE_FAILD:
      return {
        loading: false,
        error: action.error,
      };

    case actions.GET_BESTPRODUCT_ITEMS_SUCCESS:
      return {
        ...state,
        loading: false,
        bestProducts: action.data,
        error: "",
      };
    case actions.GET_BESTPRODUCT_ITEMS_FAILD:
      return {
        loading: false,
        error: action.error,
      };
    case actions.GET_TOP_BANNER_SUCCESS:
      return {
        ...state,
        loading: false,
        TopBanner: action.data,
        error: "",
      };
    case actions.GET_TOP_BANNER_FAILD:
      return {
        loading: false,
        error: action.error,
      };
    case actions.GET_COLOCTION_SUCCESS:
      return {
        ...state,
        loading: false,
        colection: action.colection,
        error: "",
      };
    case actions.GET_COLOCTION_FAILD:
      return {
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default reducer;
