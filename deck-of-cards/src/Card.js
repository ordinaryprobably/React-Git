import React, { Component } from 'react';
import './Card.css';

export default class Card extends Component {
  constructor(props) {
    super(props);

    const angle = Math.random() * 90 - 45;
    const xAxis = Math.random() * 40 - 20;
    const yAxis = Math.random() * 40 - 20;

    this._transform = `translate(${xAxis}px, ${yAxis}px) rotate(${angle}deg)`;
  }
  render() {
    return (
      <img 
        className="Card"
        src={this.props.src} 
        style={{transform: this._transform}}
      />
    );
  }
}