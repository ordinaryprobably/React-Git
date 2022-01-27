import React, { Component } from 'react';
import './Joke.css';

const ADD = 'add';
const SUB = 'sub';

export default class Joke extends Component {
  constructor(props) {
    super(props);

    this.state = { vote: this.props.vote };

    this.voteUp = this.voteUp.bind(this);
    this.voteDown = this.voteDown.bind(this);
  }

  voteUp() {
    this.setState({ vote: this.state.vote + 1 }, this.props.updateVote(this.props.id, ADD));
  }

  voteDown() {
    this.setState({ vote: this.state.vote - 1 }, this.props.updateVote(this.props.id, SUB));
  }

  render() {
    return (
      <div className="Joke">
        <button onClick={this.voteUp}>UP</button>
        <p>{this.state.vote}</p>
        <button onClick={this.voteDown}>DOWN</button>
        <li>{this.props.joke}</li>
      </div>
    )
  }
}