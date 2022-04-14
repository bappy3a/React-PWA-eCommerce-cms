import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomePage from '../pages/HomePage';
  

class AppRoute extends Component {
  render() {
    return (
      <Fragment>
          <Switch>
            <Route exact to="/" component={HomePage} ></Route>
          </Switch>
      </Fragment>
    )
  }
}

export default AppRoute