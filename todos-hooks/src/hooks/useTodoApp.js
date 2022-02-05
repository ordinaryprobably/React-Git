import { useState } from "react"
import { v4 as uuid } from 'uuid';
import useLocalStorageState from "./useLocalStorageState";

export default initialValue => {
  const [todos, setTodos] = useLocalStorageState('todos', initialValue);

  return {
    todos,
    addTodo: (newTodo) => {
      setTodos([ ...todos, { id: uuid(), task: newTodo, completed: false }]);
    },
    deleteTodo: (id) => {
      const newTodos = todos.filter(todo => todo.id !== id);
  
      setTodos(newTodos);
    },
    editTodo: (id, value) => {
      const newTodos = todos.map(todo => {
        if(todo.id === id) {
          return { ...todo, task: value };
        } else {
          return todo;
        }
      })
  
      setTodos(newTodos);
    },
    toggleComplete: (id, state) => {
      const newTodos = todos.map(todo => {
        if(todo.id === id) {
          return { ...todo, completed: !state };
        } else {
          return todo;
        }
      })
  
      setTodos(newTodos);
    }
  }
}