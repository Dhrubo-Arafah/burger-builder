import React, { Component } from 'react'
import Burger from './Burger/Burger'
import Controls from './Controls/Controls'

const INGREDIENT_PRICES = {
 salad: 20,
 cheese: 40,
 meat: 90,
}

class BurgerBuilder extends Component {
 state = {
  ingredients: [
   { type: 'salad', amount: 0 },
   { type: 'cheese', amount: 0 },
   { type: 'meat', amount: 0 }
  ],
  totalPrice: 80,
 }

 addIngredientHandle = type => {
  const ingredients = [...this.state.ingredients];
  let price = this.state.totalPrice
  for (let item of ingredients) {
   if (item.type === type) {
    console.log(item.type)
    item.amount++;
    price += INGREDIENT_PRICES[type]
   }
  }
  this.setState({ ingredients: ingredients, totalPrice: price })
 }
 removeIngredientHandle = type => {
  const ingredients = [...this.state.ingredients];
  let price = this.state.totalPrice;
  for (let item of ingredients) {
   if (item.type === type) {
    if (item.amount <= 0) return;
    price -= INGREDIENT_PRICES[type];
    item.amount--;
   }
  }
  this.setState({ ingredients: ingredients, totalPrice: price })
 }

 render() {
  return (
   <div className="d-flex w-100 flex-md-row flex-column">
    <Burger
     ingredients={this.state.ingredients}
    />
    <Controls
     ingredientAdded={this.addIngredientHandle}
     removeIngredient={this.removeIngredientHandle}
     price={this.state.totalPrice}
    />
   </div>
  )
 }
}
export default BurgerBuilder;