import React, { Component } from 'react'
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem } from 'reactstrap'
import './Header.css'
import Logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const mapStateToProps = state => {
 return {
  token:state.token
 }
}

class Header extends Component{
 constructor(props) {
  super(props);
  this.state = {
   isNavOpen: false
  }
}

 navToggler = () => {
  this.setState({
  isNavOpen:!this.state.isNavOpen
 })
}

  render() {
  let links = null;
  if (this.props.token === null) {
   links = (
    <Nav className="mr-md-5">
     <NavItem>
      <Link exact="true" to="/login" className="NavLink">Login</Link>
     </NavItem>
    </Nav>
   )
  } else {
   links = (
    <Nav className="mr-md-5">
     <NavItem>
      <Link exact="true" to="/" className="NavLink">Burger Builder</Link>
     </NavItem>
     <NavItem>
      <Link exact="true" to="/orders" className="NavLink">Orders</Link>
       </NavItem>
       <NavItem>
         <Link exact="true" to="/logout" className="NavLink">Logout</Link>
       </NavItem>
    </Nav>
   )
  }

  return (
   <div className="Navigation" >
    <Navbar className="Navbar" expand="sm" dark color="dark" exact="true" >
     <div className="container">
      <NavbarBrand className="Brand" exact="true" >
       <img src={Logo} alt="logo" />
      </NavbarBrand>
      <NavbarToggler onClick={this.navToggler} />
      <Collapse navbar isOpen={this.state.isNavOpen}>
       {links}
      </Collapse>
     </div>
    </Navbar>
   </div>
  )
 }
}

export default connect(mapStateToProps)(Header)
