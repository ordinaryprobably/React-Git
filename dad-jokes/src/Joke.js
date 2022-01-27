import React, { Component } from 'react';
import './Joke.css';

const ADD = 'add';
const SUB = 'sub';

export default class Joke extends Component {
  constructor(props) {
    super(props);

    this.voteUp = this.voteUp.bind(this);
    this.voteDown = this.voteDown.bind(this);
  }

  voteUp() {
    this.props.updateVote(this.props.id, ADD);
  }

  voteDown() {
    this.props.updateVote(this.props.id, SUB);
  }

  render() {
    return (
      <div className="Joke">
        <button onClick={this.voteUp}>UP</button>
        <p>{this.props.vote}</p>
        <button onClick={this.voteDown}>DOWN</button>
        <p>{this.props.joke}</p>
      </div>
    );
  }
}