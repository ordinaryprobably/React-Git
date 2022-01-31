import React, { Component } from "react";

export default class Result extends Component {
  render() {
    function calculator(condition, a, b) {
      if(condition === 'add') {
        return a + b;
      } else if(condition === 'subtract') {
        return a - b;
      } else if(condition === 'multiply') {
        return a * b;
      } else if(condition === 'divide') {
        return a / b;
      } 
    }

    const { params } = this.props.match;

    if(/^\d+$/.test(params.num1) && /^\d+$/.test(params.num2)) {
      if(params.condition === 'add' 
        || params.condition === 'subtract'
        || params.condition === 'multiply'
        || params.condition === 'divide') {
        return <h1>The result is: {calculator(params.condition, Number(params.num1), Number(params.num2))}</h1>;
      } else {
        return <h1>NOT A VALID URL</h1>
      }
    } else {
      return <h1>NOT A NUMBER</h1>;
    }
  }
}