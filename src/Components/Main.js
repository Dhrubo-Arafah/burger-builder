import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import Auth from './Auth/Auth'
import BurgerBuilder from './BurgerBuilder/BurgerBuilder'
import Header from './Header/Header'
import Checkout from './Orders/Checkout/Checkout'
import Orders from './Orders/Orders'

const Main = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <Switch>
          <Route exact path="/order" component={Orders} />
          <Route exact path="/checkout" component={Checkout} />
          <Route exact path="/login" component={Auth} />
          <Route exact path="/"  component={BurgerBuilder} />
          <Redirect to="/" from="/burger-builder" />
        </Switch>
      </div>
    </div>
  )
}

export default Main
