import React, { Component } from "react";
import { Switch, Route, withRouter, Link, Redirect } from "react-router-dom";
import Calculator from "./Calculator";
import Result from "./Result";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/calculator' component={Calculator} />
        <Route exact path='/:condition/:num1/:num2' render={(routerProps => <Result {...routerProps}/>)} />
        <Redirect to='/calculator' />
      </Switch>
    )
  }
}

export default withRouter(App);