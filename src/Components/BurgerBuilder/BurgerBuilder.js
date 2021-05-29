import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap'
import { addIngredient, removeIngredient, updatePurchaseable } from '../Redux/ActionCreator'
import Burger from './Burger/Burger'
import Controls from './Controls/Controls'
import Summery from './Summary/Summery'

const mapStateToProps = state => {
 return {
  ingredients: state.ingredients,
  totalPrice: state.totalPrice,
  purchaseable: state.purchaseable
 }
}

const mapDispatchToProps = dispatch => {
 return {
  addIngredient: (igType) => dispatch(addIngredient(igType)),
  removeIngredient: (igType) => dispatch(removeIngredient(igType)),
  updatePurchaseable: ()=> dispatch(updatePurchaseable())
 }
}

class BurgerBuilder extends Component {
 state = {
  modalOpen: false
 }

 addIngredientHandle = type => {
  this.props.addIngredient(type);
  this.props.updatePurchaseable();
 }
 removeIngredientHandle = type => {
  this.props.removeIngredient(type)
  this.props.updatePurchaseable();
 }

 toggleModal = () => {
  this.setState({
   modalOpen: !this.state.modalOpen
  })
 }
 
 handleCheckOut = () => {
  this.props.history.push("/checkout")
 }

 render() {
return (
   <div>
    <div className="d-flex w-100 flex-md-row flex-column">
     <Burger
      ingredients={this.props.ingredients}
     />

     <Controls
      ingredientAdded={this.addIngredientHandle}
      removeIngredient={this.removeIngredientHandle}
      price={this.props.totalPrice}
      modal={this.toggleModal}
      purchaseable={this.props.purchaseable}
     />

    </div>

    <Modal isOpen={this.state.modalOpen}>
     <ModalHeader>Your Order Summary</ModalHeader>
     <ModalBody>

    <Summery ingredients={this.props.ingredients} />
    <h5>Total Price: {this.props.totalPrice.toFixed(0)}BDT</h5>
     </ModalBody>
     <ModalFooter>
      <Button color="success" onClick={this.handleCheckOut}>Continue to checkout</Button>
      <Button color="danger" onClick={this.toggleModal}>Cancel</Button>
     </ModalFooter>
    </Modal>

   </div>
  )
 }
}
export default connect(mapStateToProps, mapDispatchToProps)(BurgerBuilder);