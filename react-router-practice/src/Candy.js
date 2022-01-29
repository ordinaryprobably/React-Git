import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Candy extends Component {
  render() {
    return (
      <div>
        <h1>the candy page</h1>
        <Link exact to="/">Go Back</Link>
      </div>
    )
  }
}