import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Snack extends Component {
  render() {
    console.log('snack')
    return (
      <div>
        <h1>the snack page</h1>
        <Link exact to="/">Go Back</Link>
      </div>
    )
  }
}