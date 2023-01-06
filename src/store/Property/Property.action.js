import axios from "axios";

export const GET_PROPERTY_SUCCESS = "GET_PROPERTY_SUCCESS";
export const GET_PROPERTY_LOADING = "GET_PROPERTY_LOADING";
export const GET_PROPERTY_FAILD = "GET_PROPERTY_FAILD";

export const getPropertyLoading = () => {
  return {
    type: GET_PROPERTY_LOADING,
  };
};

export const getPropertySuccess = (data) => {
  return {
    type: GET_PROPERTY_SUCCESS,
    data,
  };
};

export const getPropertyFailure = (error) => {
  return {
    type: GET_PROPERTY_FAILD,
    error,
  };
};

export function getProperty(city,lang) {
  const request = axios.get(`/eda/generalSettings/getproperties`, {
    params: {
      cityLocation: city,
      SSIPD:"5.63.13.165",
      lang:lang
    },
  });
  return (dispatch) => {
    dispatch(getPropertyLoading());
    request
      .then((response) => {
        dispatch(getPropertySuccess(response.data));
      })
      .catch((error) => {
        dispatch(getPropertyFailure(error));
      });
  };
}
