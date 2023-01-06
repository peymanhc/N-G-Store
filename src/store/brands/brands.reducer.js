import * as actions from './brands.action'

const initialState = {
    brands: [],
    slider: [],
    error: "",
    loading: false,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.GET_BRANDS_LOADING:
            return {
                ...state,
                loading: true,
            };
        case actions.GET_BRANDS_SUCCESS:
            return {
                ...state,
                loading: false,
                brands: action.brands,
                error: "",
            };
        case actions.GET_BRANDS_FAILD:
            return {
                ...state,
                loading: false,
                error: action.error,
            };
        case actions.GET_SLIDER_LOADING:
            return {
                ...state,
                loading: true,
            };
        case actions.GET_SLIDER_SUCCESS:
            return {
                ...state,
                loading: false,
                slider: action.slider,
                error: "",
            };
        case actions.GET_SLIDER_FAILD:
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