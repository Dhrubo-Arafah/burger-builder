import React, { Component } from 'react'
import Burger from './Burger/Burger'
import Controls from './Controls/Controls'
class BurgerBuilder extends Component{
 state = {
  ingredients: [
   { type: 'salad', amount: 0 },
   { type: 'cheese', amount: 0 },
   {type:'meat', amount:0}
  ]
 }

 addIngredientHandle = type => {
  const ingredients = [...this.state.ingredients];
  for (let item of ingredients) {
   if (item.type === type) {
    console.log(item.type)
    item.amount++;
   }
  }
  this.setState({ingredients:ingredients})
 }
 
 removeIngredientHandle = type => {
  const ingredients = [...this.state.ingredients];
  for (let item of ingredients) {
   if (item.type === type) {
    if (item.amount <= 0) return;
    console.log(item.type)
    item.amount--;
   }
  }
  this.setState({ ingredients: ingredients })
 }

 render() {
  return (
   <div className="d-flex w-100 flex-md-row flex-column">
    <Burger ingredients={this.state.ingredients} />
    <Controls
     ingredientAdded={this.addIngredientHandle}
     removeIngredient={this.removeIngredientHandle}
    />
   </div>
  )
 }
}
export default BurgerBuilder;