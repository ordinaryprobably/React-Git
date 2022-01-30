import React, { Component } from "react";

export default class Food extends Component {
  render() {
    return (
      <h1>{this.props.match.params.foodName}</h1>
    )
  }
}