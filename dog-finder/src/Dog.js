import React, { Component } from 'react';
import './Dog.css';

export default class Dog extends Component {
  render() {
    const currentDogName = this.props.match.params.dog;
    const currentDog = this.props.dogs.find(dog => dog.name.toLowerCase() === currentDogName.toLowerCase());

    return (
      <div className="Dog">
        <button onClick={this.props.history.goBack}>Go Back</button>
        <h3>{this.props.match.params.dog}</h3>
        <img src={currentDog.src} />
        <p>{currentDog.name}</p>
        <p>{currentDog.age} years old.</p>
        <ul>
          {currentDog.facts.map(fact => <li>{fact}</li>)}
        </ul>
      </div>
    )
  }
}