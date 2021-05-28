import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchOrders } from '../Redux/ActionCreator';

const mapStateToProps = state => {
 return {
  orders: state.orders,
  orderLoading: state.ordersLoading,
  orderErr:state.orderErr
 }
}

const mapDispatchToProps = dispatch => {
 return {
  fetchOrders:()=>dispatch(fetchOrders()),
 }
}
class Orders extends Component {
 componentDidMount() {
  this.props.fetchOrders();
 }
 componentDidUpdate() {
  console.log(this.props.orders)
 }
 render() {
  return (
   <div>
    
   </div>
  )
 }
}

export default connect(mapStateToProps, mapDispatchToProps)(Orders)
