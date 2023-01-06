import axios from "axios";

export const GET_PRODUCTS_SUCCESS = "[LANDING] GET_PRODUCTS_SUCCESS";
export const GET_PRODUCTS_LOADING = "[LANDING] GET_PRODUCTS_LOADING";
export const GET_PRODUCTS_FAILD = "[LANDING] GET_PRODUCTS_FAILD";

export const getProductsLoading = () => {
  return {
    type: GET_PRODUCTS_LOADING,
  };
};

export const getProductsSuccess = (data) => {
  return {
    type: GET_PRODUCTS_SUCCESS,
    data,
  };
};

export const getProductsFailure = (error) => {
  return {
    type: GET_PRODUCTS_FAILD,
    error,
  };
};

export function getProducts(locale, city, options) {
  let skip = 0;
  let limit = 16;
  let Price = [0, 600000];
  let property = [];
  let category = "";
  let brands = [];
  if (options) {
    limit = options.limit ? options.limit : 16;
    skip = options.skip ? options.skip : 0;
    Price = options.Price ? options.Price : [0, 600000];
    property = options.property ? options.property : [];
    brands = options.brands ? options.brands : [];
    category = options.category ? options.category : "";
  }
  const request = axios.get(
    `/eda/v1/getProducts?price=${Price[0]}-${Price[1]}&property=${property}&brand=${brands}&category=${category}`,
    {
      params: {
        cityLocation: city,
        lang: locale,
        limit: limit,
        skip: skip * limit,
      },
    }
  );
  return (dispatch) => {
    dispatch(getProductsLoading());
    request
      .then((response) => {
        dispatch(getProductsSuccess(response.data));
      })
      .catch((error) => {
        dispatch(getProductsFailure(error));
      });
  };
}
