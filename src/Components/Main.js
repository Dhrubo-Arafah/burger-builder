import React from 'react'
import BurgerBuilder from './BurgerBuilder.js/BurgerBuilder'
import Header from './Header/Header'

const Main = () => {
 return (
  <div>
   <Header />
  <div className="container">
    <BurgerBuilder />
   </div>
  </div>
 )
}

export default Main
