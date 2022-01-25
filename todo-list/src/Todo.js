import React, { Component } from 'react';
import './Todo.css';

export default class Todo extends Component {
  constructor(props) {
    super(props);

    this.state = { isEditing: false, task: this.props.task, isComplete: false };

    this.handleChange = this.handleChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.toggleEditForm = this.toggleEditForm.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleDelete() {
    this.props.deleteTodo(this.props.id);
  }

  handleSubmit(event) {
    event.preventDefault();

    this.props.editTodo(this.props.id, this.state.task);
    this.setState({ isEditing: false, task: '' });
  }

  handleClick() {
    this.setState({ isComplete: !this.state.isComplete });
  }

  toggleEditForm() {
    this.setState({ isEditing: !this.state.isEditing });
  }

  render() {
    let task;

    if(this.state.isEditing) {
      task = (
        <form className="EditForm" onSubmit={this.handleSubmit}>
          <input 
            type="text"
            name="task"
            value={this.state.task}
            onChange={this.handleChange}
            />
          <button>Save</button>
        </form>
      )
    } else {
      task = (
        <div className='Todo'>
          <li className={this.state.isComplete ? "complete" : null} onClick={this.handleClick}>{this.props.task}</li>
          <div>
            <button onClick={this.toggleEditForm}>Edit</button>
            <button onClick={this.handleDelete}>Delete</button>
          </div>
        </div>
      )
    }

    return task;
  }
}