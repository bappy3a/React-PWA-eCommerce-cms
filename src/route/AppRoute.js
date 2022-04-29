import axios from 'axios' 
import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AppUrl from '../api/AppUrl';
import CartPage from '../pages/CartPage';
import ContactPage from '../pages/ContactPage';
import HomePage from '../pages/HomePage';
import ProductDetailsPage from '../pages/ProductDetailsPage';
import PurchasePage from '../pages/PurchasePage';
import UserLoginPage from '../pages/UserLoginPage';
  

class AppRoute extends Component {


constructor(){
    super();
    this.state={
         user:{}
    }
}

componentDidMount(){
    axios.get(AppUrl.UserData).then((response) => { 
         this.setUser(response.data)
    }).catch(error=>{

    });
}


setUser = (user) => {
    this.setState({user:user})
}


  render() {
    return (
      <Fragment>
          <Switch>
            <Route exact path="/" render={(props) => <HomePage {...props} key={Date.now()} /> } />
            <Route exact path="/login" component={UserLoginPage} ></Route>
            <Route exact path="/contact" component={ContactPage} ></Route>
            <Route exact path="/purchase" component={PurchasePage} ></Route>
            <Route exact path="/productdetails/:code" component={ProductDetailsPage} ></Route>
            <Route exact path="/cart" component={CartPage} />
          </Switch>
      </Fragment>
    )
  }
}

export default AppRoute