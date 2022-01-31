import React, { Component } from "react";

export default class Calculator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      condition: 'add',
      num1: '',
      num2: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit() {
    this.props.history.push(`/${this.state.condition}/${this.state.num1}/${this.state.num2}`);
  }

  render() {
    return (
      <div>
        <select value={this.state.condition} name="condition" onChange={this.handleChange}>
          <option value="add">add</option>
          <option value="subtract">subtract</option>
          <option value="multiply">multiply</option>
          <option value="divide">divide</option>
        </select>
        <input 
          type="text"
          value={this.state.num1}
          name="num1"
          onChange={this.handleChange}
        />
        <input 
          type="text"
          value={this.state.num2}
          name="num2"
          onChange={this.handleChange}
        />
        <button onClick={this.handleSubmit}>Show Result</button>
      </div>
    )
  }
}