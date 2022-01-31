import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './DogList.css';

export default class DogList extends Component {
  render() {
    const dogs = this.props.dogs.map(dog => {
      return (
        <Link to={`/dogs/${dog.name}`} className="Link">
          <div>
            <img src={dog.src} width={300} height={300}/>
            <h3>{dog.name}</h3>
            <p>{dog.age} years old</p>
            <ul>
              {dog.facts.map(fact => <li>{fact}</li>)}
            </ul>
          </div>
        </Link>
      )
    })

    return (
      <div className="DogList">
        <h1>Dog List</h1>
        <div className="DogList-dogs">
          { dogs }
        </div>
      </div>
    )
  }
}