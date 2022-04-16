import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomePage from '../pages/HomePage';
import UserLoginPage from '../pages/UserLoginPage';
  

class AppRoute extends Component {
  render() {
    return (
      <Fragment>
          <Switch>
            <Route exact path="/" component={HomePage} ></Route>
            <Route exact path="/login" component={UserLoginPage} ></Route>
          </Switch>
      </Fragment>
    )
  }
}

export default AppRoute