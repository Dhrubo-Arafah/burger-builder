import React from 'react'
import { Nav, Navbar, NavbarBrand, NavItem, NavLink } from 'reactstrap'
import './Header.css'
import Logo from '../../assets/logo.png'


const Header = () => {
 return (
  <div className="Navigation">
   <Navbar className="Navbar">
    <div className="container">
    <NavbarBrand className="Brand" href="/"><img src={Logo} alt="logo"/></NavbarBrand>
    <Nav>
     <NavItem>
      <NavLink className="NavLink" href="#">Something</NavLink>
     </NavItem>
     </Nav>
    </div>
   </Navbar>
  </div>
 )
}

export default Header
