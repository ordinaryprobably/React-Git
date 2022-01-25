import React, { Component } from 'react';
import { v4 as uuid } from 'uuid';

export default class NewTodoForm extends Component {
  constructor(props) {
    super(props);

    this.state = { task: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();

    this.props.createTodo({ ...this.state, id: uuid() });
    this.setState({ task: '' });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input 
          type="text"
          name="task"
          id="task"
          value={this.state.task}
          onChange={this.handleChange}
          />
        
        <button>Post</button>
      </form>
    )
  }
}