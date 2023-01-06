import axios from "axios";

export const GET_PROFILE_DETAIL = "[PROFILE] GET_PROFILE_DETAIL";
export const GET_PROFILE_LOADING = "[PROFILE] GET_PROFILE_LOADING";
export const GET_PROFILE_FAILED = "[PROFILE] GET_PROFILE_FAILED";
export const GET_PROFILE_DETAIL_COMMENTS =
  "[PROFILE] GET_PROFILE_DETAIL_COMMENTS";
export const SEND_COMMENTS = "[PROFILE] SEND_COMMENTS";

export const getProfileLoading = () => {
  return {
    type: GET_PROFILE_LOADING,
  };
};
export const getProfileSuccess = (data) => {
  return {
    type: GET_PROFILE_DETAIL,
    payload: data,
  };
};
export const getProfileFailed = (err) => {
  return {
    type: GET_PROFILE_FAILED,
    payload: err,
  };
};

export function getProfile(locale) {
  const access_token = localStorage.getItem("jwt_access_token");
  const request = axios.get(`/eda/cart/profile?lang=${locale}`, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
  return (dispatch) => {
    dispatch(getProfileLoading());
    request
      .then((response) => {
        dispatch(getProfileSuccess(response.data));
      })
      .catch((error) => dispatch(getProfileFailed(error)));
  };
}

export function getComments(locale, city, name) {
  const request = axios.get(
    `/eda/v1/tutors-comments?cityLocation=${city}&SSIPD=5.63.13.165&lang=${locale}&cateringId=&cateringName=${name}`
  );

  return (dispatch) =>
    request.then((response) =>
      dispatch({
        type: GET_PROFILE_DETAIL_COMMENTS,
        payload: response.data,
      })
    );
}

export function sendComment(data) {
  const request = axios.post("/eda/v1/tutors-BookingRequest", data);

  return (dispatch) =>
    request.then((response) => {
      return dispatch({
        type: SEND_COMMENTS,
        payload: response.data,
      });
    });
}
