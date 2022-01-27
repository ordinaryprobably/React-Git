import React, { Component } from 'react';
import JokeList from './JokeList';

export default class App extends Component {
  render() {
    return (
      <div>
        <JokeList jokesNum={10} />
      </div>
    )
  }
}