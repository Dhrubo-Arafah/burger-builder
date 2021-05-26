import React, { Component } from 'react'
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap'
import Burger from './Burger/Burger'
import Controls from './Controls/Controls'
import Ingredient from './Ingredient/Ingredient'
import Summery from './Summary/Summery'

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
  modalOpen: false,
  purchaseable:false,
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
  this.updatePurchaseable(ingredients);
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
  this.updatePurchaseable(ingredients);
 }

 toggleModal = () => {
  this.setState({
   modalOpen: !this.state.modalOpen
  })
 }
 
 handleCheckOut = () => {
  this.props.history.push("/checkout")
 }

 updatePurchaseable = ingredients=> {
  const sum = ingredients.reduce((sum, element) => {
   return sum + element.amount;
  }, 0);
  console.log(this.state.purchaseable);
  this.setState({purchaseable: sum>0})
}

 render() {
  return (
   <div>
    <div className="d-flex w-100 flex-md-row flex-column">
     <Burger
      ingredients={this.state.ingredients}
     />
     <Controls
      ingredientAdded={this.addIngredientHandle}
      removeIngredient={this.removeIngredientHandle}
      price={this.state.totalPrice}
      modal={this.toggleModal}
      purchaseable={this.state.purchaseable}
     />
    </div>
    <Modal isOpen={this.state.modalOpen}>
     <ModalHeader>Your Order Summary</ModalHeader>
     <ModalBody>
      <Summery ingredients={this.state.ingredients}/>
      <h5>Total Price: { this.state.totalPrice.toFixed(0)}BDT</h5>
     </ModalBody>
     <ModalFooter>
      <Button color="success" onClick={this.toggleModal}>Continue to checkout</Button>
      <Button color="danger" onClick={this.toggleModal}>Cancel</Button>
     </ModalFooter>
    </Modal>
   </div>
  )
 }
}
export default BurgerBuilder;