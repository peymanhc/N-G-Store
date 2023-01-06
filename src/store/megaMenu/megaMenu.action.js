import axios from "axios";

export const GET_MEGAMENU_SUCCESS = "GET_MEGAMENU_SUCCESS";
export const GET_MEGAMENU_LOADING = "GET_MEGAMENU_LOADING";
export const GET_MEGAMENU_FAILD = "GET_MEGAMENU_FAILD";

export const getMegaMenuLoading = () => {
  return {
    type: GET_MEGAMENU_LOADING,
  };
};

export const getMegaMenuSuccess = (data) => {
  return {
    type: GET_MEGAMENU_SUCCESS,
    data,
  };
};

export const getMegaMenuFailure = (error) => {
  return {
    type: GET_MEGAMENU_FAILD,
    error,
  };
};

export function getMegaMenu(city, lang) {
  const request = axios.get(`/eda/generalSettings/MegamenuConfiguration`, {
    params: {
      cityLocation: city,
      SSIPD: "5.63.13.165",
      lang: lang,
    },
  });
  return (dispatch) => {
    dispatch(getMegaMenuLoading());
    request
      .then((response) => {
        dispatch(getMegaMenuSuccess(response.data));
      })
      .catch((error) => {
        dispatch(getMegaMenuFailure(error));
      });
  };
}
