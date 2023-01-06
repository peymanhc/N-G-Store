//import axios from 'axios';

import {
  restaurants,
  categorise,
  productCategorise,
} from "../../data/restaurant";

export const GET_RESTAURANTS = "[RESTAURANT] GET_RESTAURANTS";
export const GET_RESTAURANT_CATEGORIES =
  "[RESTAURANT] GET_RESTAURANT_CATEGORIES";
export const SET_SEARCH_TEXT = "[RESTAURANT] SET_SEARCH_TEXT";
export const GET_RESTAURANT_PRODUCT_CATEGORIES =
  "[RESTAURANT] GET_RESTAURANT_PRODUCT_CATEGORIES";
export const GET_CURRENT_SORT = "[RESTAURANT] GET_CURRENT_SORT";

export function getRestaurants() {
  return {
    type: GET_RESTAURANTS,
    payload: restaurants,
  };
}

export function getRestaurantCategories() {
  return {
    type: GET_RESTAURANT_CATEGORIES,
    payload: categorise,
  };
}

export function getRestaurantProductCategories() {
  return {
    type: GET_RESTAURANT_PRODUCT_CATEGORIES,
    payload: productCategorise,
  };
}

export function setSearchText(event) {
  return {
    type: SET_SEARCH_TEXT,
    payload: event.target.value.toLowerCase(),
  };
}

export function getCurrentSort(currSort) {
  return {
    type: GET_CURRENT_SORT,
    payload: currSort,
  };
}


