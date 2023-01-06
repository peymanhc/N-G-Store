import * as actionTypes from "./carts.action";
import { updateObject } from "./utiliy";

const initialState = {
  ingredients: "",
  totalPrice: "",
  error: false,
  building: false,
};
const addIngredient = (state, action) => {
  const updatedIngredient = {
    [action.ingredientName]:
      state.ingredients[action.ingredientName] === undefined
        ? 1
        : state.ingredients[action.ingredientName] + 1,
  };
  const updateTotalprice = {
    [action.ingredientName]:
      state.totalPrice[action.totalPrice] === undefined
        ? action.totalPrice
        : state.totalPrice[action.totalPrice] + action.totalPrice,
  };
  const updatedIngredients = updateObject(state.ingredients, updatedIngredient);
  const updatedPrices = updateObject(state.totalPrice, updateTotalprice);
  const updatedState = {
    ingredients: updatedIngredients,
    totalPrice: updatedPrices,
    building: true,
  };
  return updateObject(state, updatedState);
};

const removeIngredient = (state, action) => {
  const updatedIng = {
    [action.ingredientName]:
      state.ingredients[action.ingredientName] === undefined
        ? 1
        : state.ingredients[action.ingredientName] - 1,
  };
  const updateTotalprice = {
    [action.ingredientName]:
      state.totalPrice[action.totalPrice] === undefined
        ? action.totalPrice
        : state.totalPrice[action.totalPrice] - action.totalPrice,
  };
  const updatedIngs = updateObject(state.ingredients, updatedIng);
  const updatedPrices = updateObject(state.totalPrice, updateTotalprice);
  const updatedSt = {
    ingredients: updatedIngs,
    totalPrice: updatedPrices,
    building: true,
  };
  return updateObject(state, updatedSt);
};

const setIngredients = (state, action) => {
  return updateObject(state, {
    totalPrice: action.totalPrice,
    error: false,
    building: false,
  });
};

const fetchIngredientsFailed = (state, action) => {
  return updateObject(state, { error: true });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_INGREDIENT:
      return addIngredient(state, action);
    case actionTypes.REMOVE_INGREDIENT:
      return removeIngredient(state, action);
    case actionTypes.SET_INGREDIENTS:
      return setIngredients(state, action);
    case actionTypes.FETCH_INGREDIENTS_FAILED:
      return fetchIngredientsFailed(state, action);
    default:
      return state;
  }
};

export default reducer;
