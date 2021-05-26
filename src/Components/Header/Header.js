import React, { Component } from 'react'
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem } from 'reactstrap'
import './Header.css'
import Logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'

class Header extends Component{
 state = {
  isNavOpen:false
 }

 navToggler = () => {
  this.setState({
  isNavOpen:!this.state.isNavOpen
 })
}

 render() {
  return (
   <div className="Navigation" >
    <Navbar className="Navbar" expand="sm" dark color="dark">
     <div className="container">
      <NavbarBrand className="Brand" exact to="/">
       <img src={Logo} alt="logo" />
      </NavbarBrand>
      <NavbarToggler onClick={this.navToggler} />
      <Collapse navbar isOpen={this.state.isNavOpen}>
       <Nav navbar className="mr-auto">
        <NavItem>
         <Link className="nav-link" to="/">Burger Builder</Link>
        </NavItem>
        <NavItem>
         <Link className="nav-link" to="/checkout">Checkout</Link>
        </NavItem>
        <NavItem>
         <Link className="nav-link" to="/order">Order</Link>
        </NavItem>
       </Nav>
      </Collapse>
     </div>
    </Navbar>
   </div>
  )
 }
}

export default Header
