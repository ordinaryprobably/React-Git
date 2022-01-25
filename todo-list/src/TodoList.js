import React, { Component } from 'react';
import './TodoList.css';
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';

export default class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: []
    };

    this.create = this.create.bind(this);
    this.delete = this.delete.bind(this);
    this.edit = this.edit.bind(this);
  }

  create(newTask) {
    this.setState({ todos: [...this.state.todos, newTask] });
  }

  delete(id) {
    this.setState({ todos: this.state.todos.filter(todo => (
      todo.id !== id
    ))});
  }

  edit(id, newTask) {
    const editedTask = this.state.todos.map(todo => {
      if(todo.id === id) {
        return { ...todo, task: newTask };
      } else {
        return todo;
      }
    })

    this.setState({ todos: editedTask });
  }

  render() {
    const list = this.state.todos.map(todo => (
      <Todo 
        task={todo.task} 
        key={todo.id}
        id={todo.id}
        deleteTodo={this.delete}
        editTodo={this.edit}
        />
    ))

    return (
      <div className="TodoList">
        <h1>Todo List~!</h1>
        <NewTodoForm createTodo={this.create} />
        <ul>
          { list }
        </ul>
      </div>
    )
  }
}