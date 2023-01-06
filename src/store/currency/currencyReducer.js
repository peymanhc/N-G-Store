import * as Actions from "./currencyActions";

const initialState = {
  currencies: [],
  current: "€ Euro",
};

const currencyReducer = function (state = initialState, action) {
  switch (action.type) {
    case Actions.GET_CURRENCIES: {
      return getCurrency(action.payload, state);
    }
    case Actions.CURRENCY_CHANGE: {
      return {
        ...state,
        current: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default currencyReducer;

const getCurrency = (payload, state) => {
  try {
    if (payload.msgFlag !== "0") return state;
    const data = payload.data;
    const currencies = data.map((item) => ({
      ...item,
      title: `${item.symbol} ${item.name}`,
    }));
    const current = currencies.find((item) => item.default === true);
    return { ...state, currencies, current: current ? current : state.current };
  } catch {}
  return state;
};
