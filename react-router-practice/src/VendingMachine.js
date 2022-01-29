import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class VendingMachine extends Component {
  render() {
    console.log('vendingmachine')
    return (
      <div>
        <h1>The Vending Machine</h1>
        <Link exact to="/snack">Snack</Link>
        <Link exact to="/drink">Drink</Link>
        <Link exact to="/candy">Candy</Link>
      </div>
    )
  }
}