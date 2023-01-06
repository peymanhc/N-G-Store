export const ADD_INGREDIENT = "ADD_INGREDIENT";
export const REMOVE_INGREDIENT = "REMOVE_INGREDIENT";
export const SET_INGREDIENTS = "SET_INGREDIENTS";
export const FETCH_INGREDIENTS_FAILED = "FETCH_INGREDIENTS_FAILED";

export const addIngredient = (name, totalPrice) => {
  return {
    type: ADD_INGREDIENT,
    ingredientName: name,
    totalPrice: totalPrice,
  };
};

export const removeIngredient = (name,totalPrice) => {
  return {
    type: REMOVE_INGREDIENT,
    ingredientName: name,
    totalPrice: totalPrice,
  };
};

export const setIngredients = (ingredients) => {
  return {
    type: SET_INGREDIENTS,
    totalPrice: ingredients,
  };
};

export const fetchIngredientsFailed = () => {
  return {
    type: FETCH_INGREDIENTS_FAILED,
  };
};
