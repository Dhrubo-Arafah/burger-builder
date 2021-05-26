import { ADD_INGREDIENT, REMOVE_INGREDIENT, RESET_INGREDIENTS, UPDATE_PURCHASEABLE } from "./ActionType"
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