import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchOrders } from '../Redux/ActionCreator';
import Order from './Order/Order';
import Spinner from '../Spinner/Spinner'

const mapStateToProps = state => {
 console.log(state)
 return {
  orders: state.orders,
  orderLoading: state.ordersLoading,
  orderErr: state.orderErr
 }
}

const mapDispatchToProps = dispatch => {
 return {
  fetchOrders: () => dispatch(fetchOrders()),
 }
}
class Orders extends Component {
 componentDidMount() {
  this.props.fetchOrders();
 }

 render() {
  let orders = null;
  if (this.props.orderErr) {
   orders = <p className="Order">Sorry Failed To Load Orders</p>
  } else {
   if (this.props.orders.length === 0) {
    orders = <p className="Order">Sorry! You have no orders</p>
   } else {
    orders = this.props.orders.map(order => {
     return <div><Order order={order} key={order.id} /></div>
    }
    )
   }
  }
  return (
   <div>
    <h1>Orders</h1>
    {this.props.orderLoading ? <Spinner /> : orders}
   </div>
  )
 }
}

export default connect(mapStateToProps, mapDispatchToProps)(Orders)
