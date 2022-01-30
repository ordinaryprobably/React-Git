import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Food from './Food';
import VendingMachine from './VendingMachine';

export default class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={VendingMachine} />
          <Route exact path='/food/:foodName' render={(routerProps) => <Food { ...routerProps } />} />
          <Route exact render={() => <h1>NOT FOUND</h1>} />
        </Switch>
      </div>
    )
  }
}