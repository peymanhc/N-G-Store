import axios from "axios";

export const GET_FOOTER_SUCCESS = "GET_FOOTER_SUCCESS";
export const GET_FOOTER_LOADING = "GET_FOOTER_LOADING";
export const GET_FOOTER_FAILD = "GET_FOOTER_FAILD";

export const GET_COLOCTION_SUCCESS = "GET_COLOCTION_SUCCESS";
export const GET_COLOCTION_LOADING = "GET_COLOCTION_LOADING";
export const GET_COLOCTION_FAILD = "GET_COLOCTION_FAILD";

export const GET_ONLY_TODAY_SUCCESS = "GET_ONLY_TODAY_SUCCESS";
export const GET_ONLY_TODAY_LOADING = "GET_ONLY_TODAY_LOADING";
export const GET_ONLY_TODAY_FAILD = "GET_ONLY_TODAY_FAILD";

export const GET_DISCOUNT_LIST_TIME_SUCCESS = "GET_DISCOUNT_LIST_TIME_SUCCESS";
export const GET_DISCOUNT_LIST_TIME_LOADING = "GET_DISCOUNT_LIST_TIME_LOADING";
export const GET_DISCOUNT_LIST_TIME_FAILD = "GET_DISCOUNT_LIST_TIME_FAILD";

export const GET_DISCOUNT_DAYLYBANNER_SUCCESS =
  "GET_DISCOUNT_DAYLYBANNER_SUCCESS";
export const GET_DISCOUNT_DAYLYBANNER_LOADING =
  "GET_DISCOUNT_DAYLYBANNER_LOADING";
export const GET_DISCOUNT_DAYLYBANNER_FAILD = "GET_DISCOUNT_DAYLYBANNER_FAILD";

export const GET_DISCOUNT_TFBANNER_SUCCESS = "GET_DISCOUNT_TFBANNER_SUCCESS";
export const GET_DISCOUNT_TFBANNER_LOADING = "GET_DISCOUNT_TFBANNER_LOADING";
export const GET_DISCOUNT_TFBANNER_FAILD = "GET_DISCOUNT_TFBANNER_FAILD";

export const GET_DISCOUNT_30BANNER_SUCCESS = "GET_DISCOUNT_30BANNER_SUCCESS";
export const GET_DISCOUNT_30BANNER_LOADING = "GET_DISCOUNT_30BANNER_LOADING";
export const GET_DISCOUNT_30BANNER_FAILD = "GET_DISCOUNT_30BANNER_FAILD";

export const GET_TOP_BANNER_SUCCESS = "GET_TOP_BANNER_SUCCESS";
export const GET_TOP_BANNER_LOADING = "GET_TOP_BANNER_LOADING";
export const GET_TOP_BANNER_FAILD = "GET_TOP_BANNER_FAILD";

export const GET_RECOMMENTED_SUCCESS = "GET_RECOMMENTED_SUCCESS";
export const GET_RECOMMENTED_LOADING = "GET_RECOMMENTED_LOADING";
export const GET_RECOMMENTED_FAILD = "GET_RECOMMENTED_FAILD";

export const GET_NEWITEMS_SUCCESS = "GET_NEWITEMS_SUCCESS";
export const GET_NEWITEMS_LOADING = "GET_NEWITEMS_LOADING";
export const GET_NEWITEMS_FAILD = "GET_NEWITEMS_FAILD";

export const GET_CATEONE_SUCCESS = "GET_CATEONE_SUCCESS";
export const GET_CATEONE_LOADING = "GET_CATEONE_LOADING";
export const GET_CATEONE_FAILD = "GET_CATEONE_FAILD";

export const GET_CATETWO_SUCCESS = "GET_CATETWO_SUCCESS";
export const GET_CATETWO_LOADING = "GET_CATETWO_LOADING";
export const GET_CATETWO_FAILD = "GET_CATETWO_FAILD";

export const GET_CATETHREE_SUCCESS = "GET_CATETHREE_SUCCESS";
export const GET_CATETHREE_LOADING = "GET_CATETHREE_LOADING";
export const GET_CATETHREE_FAILD = "GET_CATETHREE_FAILD";

export const GET_BESTPRODUCT_ITEMS_SUCCESS = "GET_BESTPRODUCT_ITEMS_SUCCESS";
export const GET_BESTPRODUCT_ITEMS_LOADING = "GET_BESTPRODUCT_ITEMS_LOADING";
export const GET_BESTPRODUCT_ITEMS_FAILD = "GET_BESTPRODUCT_ITEMS_FAILD";

export const getFooterLoading = () => {
  return {
    type: GET_FOOTER_LOADING,
  };
};
export const getFooterSuccess = (footer) => {
  return {
    type: GET_FOOTER_SUCCESS,
    footer,
  };
};
export const getFooterFailure = (error) => {
  return {
    type: GET_FOOTER_FAILD,
    error,
  };
};
export const getColoctionLoading = () => {
  return {
    type: GET_COLOCTION_LOADING,
  };
};
export const getColoctionSuccess = (colection) => {
  return {
    type: GET_COLOCTION_SUCCESS,
    colection,
  };
};
export const getColoctionFailure = (error) => {
  return {
    type: GET_COLOCTION_FAILD,
    error,
  };
};
export const getBestProductLoading = () => {
  return {
    type: GET_BESTPRODUCT_ITEMS_LOADING,
  };
};
export const getBestProductSuccess = (data) => {
  return {
    type: GET_BESTPRODUCT_ITEMS_SUCCESS,
    data,
  };
};
export const getBestProductFaild = (error) => {
  return {
    type: GET_BESTPRODUCT_ITEMS_FAILD,
    error,
  };
};

export const getCateOneLoading = () => {
  return {
    type: GET_CATEONE_LOADING,
  };
};
export const getCateOneSuccess = (data) => {
  return {
    type: GET_CATEONE_SUCCESS,
    data,
  };
};
export const getCateOneFailure = (error) => {
  return {
    type: GET_CATEONE_FAILD,
    error,
  };
};

export const getCateTwoLoading = () => {
  return {
    type: GET_CATETWO_FAILD,
  };
};
export const getCateTwoSuccess = (data) => {
  return {
    type: GET_CATETWO_SUCCESS,
    data,
  };
};
export const getCateTwoFailure = (error) => {
  return {
    type: GET_CATETWO_FAILD,
    error,
  };
};
export const CateThreeLoading = () => {
  return {
    type: GET_CATETHREE_LOADING,
  };
};
export const CateThreeSuccess = (data) => {
  return {
    type: GET_CATETHREE_SUCCESS,
    data,
  };
};
export const CateThreeFailure = (error) => {
  return {
    type: GET_CATETHREE_FAILD,
    error,
  };
};

export const getOnlyTodayLoading = () => {
  return {
    type: GET_ONLY_TODAY_LOADING,
  };
};
export const getOnlyTodaySuccess = (onlyToday) => {
  return {
    type: GET_ONLY_TODAY_SUCCESS,
    onlyToday,
  };
};
export const getOnlyTodayFailure = (error) => {
  return {
    type: GET_ONLY_TODAY_FAILD,
    error,
  };
};
export const getRecommentedLoading = () => {
  return {
    type: GET_RECOMMENTED_LOADING,
  };
};
export const getRecommentedSuccess = (recommented) => {
  return {
    type: GET_RECOMMENTED_SUCCESS,
    recommented,
  };
};
export const getRecommentedFailure = (error) => {
  return {
    type: GET_RECOMMENTED_FAILD,
    error,
  };
};

export const getDiscountListLoading = () => {
  return {
    type: GET_DISCOUNT_LIST_TIME_LOADING,
  };
};
export const getDiscountListSuccess = (DiscountList) => {
  return {
    type: GET_DISCOUNT_LIST_TIME_SUCCESS,
    DiscountList,
  };
};
export const getDiscountListFailure = (error) => {
  return {
    type: GET_DISCOUNT_LIST_TIME_FAILD,
    error,
  };
};
export const getDiscount30Loading = () => {
  return {
    type: GET_DISCOUNT_30BANNER_LOADING,
  };
};
export const getDiscount30Success = (data) => {
  return {
    type: GET_DISCOUNT_30BANNER_SUCCESS,
    data,
  };
};
export const getDiscount30Failure = (error) => {
  return {
    type: GET_DISCOUNT_30BANNER_FAILD,
    error,
  };
};
export const getNewItemsLoading = () => {
  return {
    type: GET_NEWITEMS_LOADING,
  };
};
export const getNewItemsSuccess = (data) => {
  return {
    type: GET_NEWITEMS_SUCCESS,
    data,
  };
};
export const getNewItemsFailure = (error) => {
  return {
    type: GET_NEWITEMS_FAILD,
    error,
  };
};
export const getTopBannerLoading = () => {
  return {
    type: GET_TOP_BANNER_LOADING,
  };
};
export const getTopBannerSuccess = (data) => {
  return {
    type: GET_TOP_BANNER_SUCCESS,
    data,
  };
};
export const getTopBannerFailure = (error) => {
  return {
    type: GET_TOP_BANNER_FAILD,
    error,
  };
};

export const getDaylyBannerLoading = () => {
  return {
    type: GET_DISCOUNT_DAYLYBANNER_LOADING,
  };
};
export const getDaylyBannerSuccess = (daylybanner) => {
  return {
    type: GET_DISCOUNT_DAYLYBANNER_SUCCESS,
    daylybanner,
  };
};
export const getDaylyBannerFailure = (error) => {
  return {
    type: GET_DISCOUNT_DAYLYBANNER_FAILD,
    error,
  };
};
export const getTFBannerLoading = () => {
  return {
    type: GET_DISCOUNT_TFBANNER_LOADING,
  };
};
export const getTFBannerSuccess = (TFbanner) => {
  return {
    type: GET_DISCOUNT_TFBANNER_SUCCESS,
    TFbanner,
  };
};
export const getTFBannerFailure = (error) => {
  return {
    type: GET_DISCOUNT_TFBANNER_FAILD,
    error,
  };
};

export function getFooterData(locale, city) {
  const request = axios.get(
    `/eda/generalSettings/FooterConfiguration?cityLocation=${city}&SSIPD=5.63.13.165&lang=${locale}`
  );
  return (dispatch) => {
    dispatch(getFooterLoading());
    request
      .then((response) => {
        dispatch(getFooterSuccess(response.data));
      })
      .catch((error) => {
        dispatch(getFooterFailure(error));
      });
  };
}
export function getonlyTodayData(locale, city, name) {
  const request = axios.get(
    `/eda/v1/collections?cityLocation=${city}&SSIPD=5.63.13.165&lang=${locale}&name=${name}`
  );
  return (dispatch) => {
    dispatch(getOnlyTodayLoading());
    request
      .then((response) => {
        dispatch(getOnlyTodaySuccess(response.data));
      })
      .catch((error) => {
        dispatch(getOnlyTodayFailure(error));
      });
  };
}
export function getDiscountTimerData(locale, city, name) {
  const request = axios.get(
    `/eda/v1/collections?cityLocation=${city}&SSIPD=5.63.13.165&lang=${locale}&name=${name}`
  );
  return (dispatch) => {
    dispatch(getDiscountListLoading());
    request
      .then((response) => {
        dispatch(getDiscountListSuccess(response.data));
      })
      .catch((error) => {
        dispatch(getDiscountListFailure(error));
      });
  };
}
export function getDaylyBannerData(locale, city, name) {
  const request = axios.get(
    `/eda/v1/collections?cityLocation=${city}&SSIPD=5.63.13.165&lang=${locale}&name=${name}`
  );
  return (dispatch) => {
    dispatch(getDaylyBannerLoading());
    request
      .then((response) => {
        dispatch(getDaylyBannerSuccess(response.data));
      })
      .catch((error) => {
        dispatch(getDaylyBannerFailure(error));
      });
  };
}
export function getTFBannerData(locale, city, name) {
  const request = axios.get(
    `/eda/v1/collections?cityLocation=${city}&SSIPD=5.63.13.165&lang=${locale}&name=${name}`
  );
  return (dispatch) => {
    dispatch(getTFBannerLoading());
    request
      .then((response) => {
        dispatch(getTFBannerSuccess(response.data));
      })
      .catch((error) => {
        dispatch(getTFBannerFailure(error));
      });
  };
}
export function getRecommentedData(locale, city, name) {
  const request = axios.get(
    `/eda/v1/collections?cityLocation=${city}&SSIPD=5.63.13.165&lang=${locale}&name=${name}`
  );
  return (dispatch) => {
    dispatch(getRecommentedLoading());
    request
      .then((response) => {
        dispatch(getRecommentedSuccess(response.data));
      })
      .catch((error) => {
        dispatch(getRecommentedFailure(error));
      });
  };
}
export function getdiscount30Data(locale, city, name) {
  const request = axios.get(
    `/eda/v1/collections?cityLocation=${city}&SSIPD=5.63.13.165&lang=${locale}&name=${name}`
  );
  return (dispatch) => {
    dispatch(getDiscount30Loading());
    request
      .then((response) => {
        dispatch(getDiscount30Success(response.data));
      })
      .catch((error) => {
        dispatch(getDiscount30Failure(error));
      });
  };
}
export function getNewItemsData(locale, city, name) {
  const request = axios.get(
    `/eda/v1/collections?cityLocation=${city}&SSIPD=5.63.13.165&lang=${locale}&name=${name}`
  );
  return (dispatch) => {
    dispatch(getNewItemsLoading());
    request
      .then((response) => {
        dispatch(getNewItemsSuccess(response.data));
      })
      .catch((error) => {
        dispatch(getNewItemsFailure(error));
      });
  };
}
export function getCateOneData(locale, city, name) {
  const request = axios.get(
    `/eda/v1/collections?cityLocation=${city}&SSIPD=5.63.13.165&lang=${locale}&name=${name}`
  );
  return (dispatch) => {
    dispatch(getCateOneLoading());
    request
      .then((response) => {
        dispatch(getCateOneSuccess(response.data));
      })
      .catch((error) => {
        dispatch(getCateOneFailure(error));
      });
  };
}
export function getCateTwoData(locale, city, name) {
  const request = axios.get(
    `/eda/v1/collections?cityLocation=${city}&SSIPD=5.63.13.165&lang=${locale}&name=${name}`
  );
  return (dispatch) => {
    dispatch(getCateTwoLoading());
    request
      .then((response) => {
        dispatch(getCateTwoSuccess(response.data));
      })
      .catch((error) => {
        dispatch(getCateTwoFailure(error));
      });
  };
}
export function getCateThreeData(locale, city, name) {
  const request = axios.get(
    `/eda/v1/collections?cityLocation=${city}&SSIPD=5.63.13.165&lang=${locale}&name=${name}`
  );
  return (dispatch) => {
    dispatch(CateThreeLoading());
    request
      .then((response) => {
        dispatch(CateThreeSuccess(response.data));
      })
      .catch((error) => {
        dispatch(CateThreeFailure(error));
      });
  };
}
export function getBestProducts(locale, city, name) {
  const request = axios.get(
    `/eda/v1/collections?cityLocation=${city}&SSIPD=5.63.13.165&lang=${locale}&name=${name}`
  );
  return (dispatch) => {
    dispatch(getBestProductLoading());
    request
      .then((response) => {
        dispatch(getBestProductSuccess(response.data));
      })
      .catch((error) => {
        dispatch(getBestProductFaild(error));
      });
  };
}
export function getTopBanner(locale, city, name) {
  const request = axios.get(
    `/eda/v1/collections?cityLocation=${city}&SSIPD=5.63.13.165&lang=${locale}&name=${name}`
  );
  return (dispatch) => {
    dispatch(getTopBannerLoading());
    request
      .then((response) => {
        dispatch(getTopBannerSuccess(response.data));
      })
      .catch((error) => {
        dispatch(getTopBannerFailure(error));
      });
  };
}
export function Colection(city, lang) {
  const request = axios.get(
    `/eda/generalSettings/PageConfiguration?`,{
      params:{
        cityLocation: city,
        SSIPD: "5.63.13.165",
        lang: lang,
        page:"home"
      }
    }
  );
  return (dispatch) => {
    dispatch(getColoctionLoading());
    request
      .then((response) => {
        dispatch(getColoctionSuccess(response.data));
      })
      .catch((error) => {
        dispatch(getColoctionFailure(error));
      });
  };
}
