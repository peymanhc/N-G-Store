import axios from "axios";

export const GET_BETTER_FOR_U_SUCCESS = "[LANDING] GET_BETTER_FOR_U_SUCCESS";
export const GET_BETTER_FOR_U_LOADING = "[LANDING] GET_BETTER_FOR_U_LOADING";
export const GET_BETTER_FOR_U_FAILD = "[LANDING] GET_BETTER_FOR_U_FAILD";

export const getBetterForULoading = () => {
  return {
    type: GET_BETTER_FOR_U_LOADING,
  };
};

export const getBetterForUSuccess = (data) => {
  return {
    type: GET_BETTER_FOR_U_SUCCESS,
    data,
  };
};

export const getBetterForUFailure = (error) => {
  return {
    type: GET_BETTER_FOR_U_FAILD,
    error,
  };
};

export function getBetterForU(locale, city, name) {
  const request = axios.get(`/eda/v1/collections`, {
    params: {
      cityLocation: city,
      SSIPD: "5.63.13.165",
      lang: locale,
      name: name,
    },
  });
  return (dispatch) => {
    dispatch(getBetterForULoading());
    request
      .then((response) => {
        dispatch(getBetterForUSuccess(response.data));
      })
      .catch((error) => {
        dispatch(getBetterForUFailure(error));
      });
  };
}
