import axios from "axios"
import { ADD_INGREDIENT, LOAD_ORDERS, ORDER_LOAD_FAILED, REMOVE_INGREDIENT, RESET_INGREDIENTS, UPDATE_PURCHASEABLE } from "./ActionType"
export const removeIngredient = igType => {
 return {
  type: REMOVE_INGREDIENT,
  payload:igType,
 }
}

export const addIngredient = igType => {
 return {
  type: ADD_INGREDIENT,
  payload:igType
 }
}

export const updatePurchaseable = () => {
 return {
  type: UPDATE_PURCHASEABLE,
 }
}

export const resetIngredients = () => {
 return {
  type:RESET_INGREDIENTS
 }
}

export const loadOrders = orders => {
 return {
  type: LOAD_ORDERS,
  payload:orders,
 }
}

export const orderLoadFailed = () => {
 return {
  type:ORDER_LOAD_FAILED 
 }
}

export const fetchOrders = ()=>dispatch=> {
 axios.get("https://burger-builder-b1bb9-default-rtdb.firebaseio.com/order.json")
  .then(response => dispatch(loadOrders(response.data)))
 
}