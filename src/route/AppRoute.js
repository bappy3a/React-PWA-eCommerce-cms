import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ContactPage from '../pages/ContactPage';
import HomePage from '../pages/HomePage';
import ProductDetailsPage from '../pages/ProductDetailsPage';
import PurchasePage from '../pages/PurchasePage';
import UserLoginPage from '../pages/UserLoginPage';
  

class AppRoute extends Component {
  render() {
    return (
      <Fragment>
          <Switch>
            <Route exact path="/" component={HomePage} ></Route>
            <Route exact path="/login" component={UserLoginPage} ></Route>
            <Route exact path="/contact" component={ContactPage} ></Route>
            <Route exact path="/purchase" component={PurchasePage} ></Route>
            <Route exact path="/productdetails" component={ProductDetailsPage} ></Route>
          </Switch>
      </Fragment>
    )
  }
}

export default AppRoute