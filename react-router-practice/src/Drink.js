import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Drink extends Component {
  render() {
    return (
      <div>
        <h1>the drink page</h1>
        <Link exact to="/">Go Back</Link>
      </div>
    )
  }
}