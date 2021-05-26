import React, { Component } from 'react'
import { Button } from 'reactstrap'

export class Checkout extends Component {
 state = {
  values: {
   deliveryAddress: "",
   phone: "",
   paymentType: "Cash On Delivery"
  }
 }

 goBack = () => {
  this.props.history.goBack("/");
 }

 inputChangeHandler = event => {
  this.setState({
   values: {
    ...this.state.values,
    [event.target.name]:event.target.value
  }
 })
}

 submitHandler = () => {
  console.log(this.state.values)
 }
 
  render() {
   return (
    <div>
     <form className="border border-success px-5 py-5">
      <textarea
       name="deliveryAddress"
       value={this.state.values.deliveryAddress}
       className="form-control"
       placeholder="Input Your Address"
       onChange={(e) => this.inputChangeHandler(e)}>
      </textarea><br />

      <input type="number" name="phone"
       className="form-control"
       values={this.state.values.phone}
       placeholder="Input Your Contact Number"
       onChange={(e) => this.inputChangeHandler(e)} /><br />
      
      <select name="paymentType"
       className="form-control"
       value={this.state.values.paymentType}
       onChange={(e) => this.inputChangeHandler(e)}>
       <option value="Cash On Delivery">Cash On Delivery</option>
       <option value="Bkash">Bkash</option>
      </select><br/>
      <Button className="btn btn-danger mr-auto" onClick={this.goBack}>Cancel Order</Button>
      <Button className="btn btn-warning ml-1" onChange={(e)=>this.inputChangeHandler(e)}onClick={this.submitHandler}>Place Order</Button>
     </form>
    </div>
   )
  }
}

export default Checkout
