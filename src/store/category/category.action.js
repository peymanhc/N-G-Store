import axios from "axios";

export const GET_CATEGORY_SUCCESS = "GET_CATEGORY_SUCCESS";
export const GET_CATEGORY_ALL = "GET_CATEGORY_ALL";
export const GET_CATEGORY_LOADING = "GET_CATEGORY_LOADING";
export const GET_CATEGORY_FAILD = "GET_CATEGORY_FAILD";

export const getCategoryLoading = () => {
  return {
    type: GET_CATEGORY_LOADING,
  };
};

export const getCategorySuccess = (data) => {
  return {
    type: GET_CATEGORY_SUCCESS,
    data,
  };
};
export const getAllCategory = (data) => {
  return {
    type: GET_CATEGORY_ALL,
    data,
  };
};

export const getCategoryFailure = (error) => {
  return {
    type: GET_CATEGORY_FAILD,
    error,
  };
};

const normalizeData = (data) => {
  if (!data) return null;

  return data.categoryLabels.reduce((acc, curr) => {
    const children = data.categories.filter(
      (category) =>
        category.labelsObject.findIndex((_) => _.handle === curr.handle) > -1
    );
    acc.push({ ...curr, children });
    return acc;
  }, []);
};

export function getCategory(locale, city, name) {
  const request = axios.get(
    `/eda/v1/all-categories?cityLocation=${city}&SSIPD=5.63.13.165&lang=${locale}&type=skill`
  );
  return (dispatch) => {
    dispatch(getCategoryLoading());
    request
      .then((response) => {
        dispatch(getCategorySuccess(normalizeData(response.data)));
        dispatch(getAllCategory(response.data));
      })
      .catch((error) => {
        dispatch(getCategoryFailure(error));
      });
  };
}
