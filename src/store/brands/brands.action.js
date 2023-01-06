import axios from "axios";

export const GET_BRANDS_SUCCESS = "[LANDING] GET_BRANDS_SUCCESS";
export const GET_BRANDS_LOADING = "[LANDING] GET_BRANDS_LOADING";
export const GET_BRANDS_FAILD = "[LANDING] GET_BRANDS_FAILD";

export const GET_SLIDER_SUCCESS = "[LANDING] GET_SLIDER_SUCCESS";
export const GET_SLIDER_LOADING = "[LANDING] GET_SLIDER_LOADING";
export const GET_SLIDER_FAILD = "[LANDING] GET_SLIDER_FAILD";

export const getBrandsLoading = () => {
  return {
    type: GET_BRANDS_LOADING,
  };
};

export const getBrandsSuccess = (brands) => {
  return {
    type: GET_BRANDS_SUCCESS,
    brands,
  };
};

export const getBrandsFailure = (error) => {
  return {
    type: GET_BRANDS_FAILD,
    error,
  };
};
export const getSliderLoading = () => {
  return {
    type: GET_SLIDER_LOADING,
  };
};

export const getSliderSuccess = (slider) => {
  return {
    type: GET_SLIDER_SUCCESS,
    slider,
  };
};

export const getSliderFailure = (error) => {
  return {
    type: GET_SLIDER_FAILD,
    error,
  };
};

export function getBrands(locale, city) {
  const request = axios.get(
    `/eda/generalSettings/getbrand?cityLocation=${city}&SSIPD=5.63.13.165&lang=${locale}`
  );
  return (dispatch) => {
    dispatch(getBrandsLoading());
    request
      .then((response) => {
        dispatch(getBrandsSuccess(response.data));
      })
      .catch((error) => {
        dispatch(getBrandsFailure(error));
      });
  };
}
export function getSlider(locale, city) {
  const request = axios.get(
    `/eda/generalSettings/getslider?cityLocation=${city}&SSIPD=5.63.13.165&lang=${locale}`
  );
  return (dispatch) => {
    dispatch(getSliderLoading());
    request
      .then((response) => {
        dispatch(getSliderSuccess(response.data));
      })
      .catch((error) => {
        dispatch(getSliderFailure(error));
      });
  };
}
