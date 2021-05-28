import React from 'react'
import './Order.css'

const Order = props => {
 const ingredients = props.order.ingredients.map(item => {
  return (
   <span key={item.type} className="Item">
    {item.amount} X <span style={ {textTransform:"capitalize"}}>{item.type}</span>
   </span>
 )
})
 return (
  <div className="Order">
   <p>Order Number: {props.order.key}</p>
   <p>Delivery Address: {props.order.customer.deliveryAddress}</p>
   <p>Total: {props.order.price}</p>
   {ingredients}
  </div>
 )
}

export default Order
