import axios from "axios";

export const GET_SEARCHDATA_SUCCESS = "[SEARCH] GET_SEARCHDATA_SUCCESS";
export const GET_SEARCHDATA_LOADING = "[SEARCH] GET_SEARCHDATA_LOADING";
export const GET_SEARCHDATA_FAILD = "[SEARCH] GET_SEARCHDATA_FAILD";

export const getSearchProductsLoading = () => {
  return {
    type: GET_SEARCHDATA_LOADING,
  };
};

export const getSearchProductsSuccess = (data) => {
  return {
    type: GET_SEARCHDATA_SUCCESS,
    data,
  };
};

export const getSearchProductsFailure = (error) => {
  return {
    type: GET_SEARCHDATA_FAILD,
    error,
  };
};

export function getAllProducts(locale, city, search) {
  const request = axios.get(
    `/eda/v1/getProducts?cityLocation=${city}&lang=${locale}&Page=1&skip=0&search=${search}&sortBy&sortDir&perPage`
  );
  return (dispatch) => {
    dispatch(getSearchProductsLoading());
    request
      .then((response) => {
        dispatch(getSearchProductsSuccess(response.data));
      })
      .catch((error) => {
        dispatch(getSearchProductsFailure(error));
      });
  };
}
