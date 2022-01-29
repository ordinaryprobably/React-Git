import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Snack from './Snack';
import Drink from './Drink';
import Candy from './Candy';
import VendingMachine from './VendingMachine';
import NavBar from './NavBar';

export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Switch> 
          <Route exact path='/' render={() => <VendingMachine />} />
          <Route exact path='/Snack' render={() => <Snack />} />
          <Route exact path='/Drink' render={() => <Drink />} />
          <Route exact path='/Candy' render={() => <Candy />} />
        </Switch>
      </div>
    )
  }
}