import axios from "axios";
// eslint-disable-next-line
import currencies from "../../data/currency";

export const GET_CURRENCIES = "[CURRENCY] GET_CURRENCIES";
export const CURRENCY_CHANGE = "[CURRENCY] CURRENCY_CHANGE";

//export function getCurrencies()
//{
//    return {
//        type	: GET_CURRENCIES,
//		payload	: currencies,
//    }
//}

export function getCurrencies() {
  const request = axios.get(
    "/eda/generalSettings/getcurrencies?SSIPD=nandwsouk&lang=en"
  );

  return (dispatch) =>
    request.then((response) =>
      dispatch({
        type: GET_CURRENCIES,
        payload: response.data,
      })
    ).catch(()=> console.warn("err to get curencies"))
}
export function currencyChange(currency) {
  return (dispatch) => {
    dispatch({
      type: CURRENCY_CHANGE,
      payload: currency,
    });
  };
}
