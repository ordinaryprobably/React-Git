import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class VendingMachine extends Component {
  constructor(props) {
    super(props);

    this.state = { query: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleClick() {
    alert('You will soon be redirected.')

    this.props.history.push(`/food/${this.state.query}`)
  }

  render() {
    return (
      <div>
        <h1>The Vending Machine</h1>
        <input 
          type="text" 
          name="query"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <button onClick={this.handleClick}>Visit</button>
        <Link to={`/food/${this.state.query}`}>Visit {this.state.query}</Link>
      </div>
    )
  }
}