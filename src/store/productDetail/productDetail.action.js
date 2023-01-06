import axios from "axios";

export const GET_PRODUCTS_DETAIL_SUCCESS =
  "[DETAIL] GET_PRODUCTS_DETAIL_SUCCESS";
export const GET_PRODUCTS_DETAIL_LOADING =
  "[DETAIL] GET_PRODUCTS_DETAIL_LOADING";
export const GET_PRODUCTS_DETAIL_FAILD = "[DETAIL] GET_PRODUCTS_DETAIL_FAILD";

export const getProductLoading = () => {
  return {
    type: GET_PRODUCTS_DETAIL_LOADING,
  };
};

export const getProductSuccess = (data) => {
  return {
    type: GET_PRODUCTS_DETAIL_SUCCESS,
    data,
  };
};

export const getProductFailure = (error) => {
  return {
    type: GET_PRODUCTS_DETAIL_FAILD,
    error,
  };
};

export function getDetail(locale, city, id) {
  const request = axios.get(`/eda/v1/getProduct`, {
    params: {
      cityLocation: city,
      SSIPD: "5.63.13.165",
      lang: locale,
      pid: id,
    },
  });
  return (dispatch) => {
    dispatch(getProductLoading());
    request
      .then((response) => {
        dispatch(getProductSuccess(response.data));
      })
      .catch((error) => {
        dispatch(getProductFailure(error));
      });
  };
}
