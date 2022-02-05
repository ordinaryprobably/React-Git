import { AppBar, Grid, Paper, Toolbar, Typography } from "@mui/material";
import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import { v4 as uuid } from 'uuid';

export default function TodoApp() {
  const initTodos = [];
  const [todos, setTodos] = useState(initTodos);

  const addTodo = (newTodo) => {
    setTodos([ ...todos, { id: uuid(), task: newTodo, completed: false }]);
  }

  const deleteTodo = (id) => {
    const newTodos = todos.filter(todo => todo.id !== id);

    setTodos(newTodos);
  }

  const editTodo = (id, value) => {
    const newTodos = todos.map(todo => {
      if(todo.id === id) {
        return { ...todo, task: value };
      } else {
        return todo;
      }
    })

    setTodos(newTodos);
  }

  const checkComplete = (id, state) => {
    const newTodos = todos.map(todo => {
      if(todo.id === id) {
        return { ...todo, completed: !state };
      } else {
        return todo;
      }
    })

    setTodos(newTodos);
  }

  return (
    <Paper
      style={{
        padding: 0,
        margin:0,
        height: '100vh',
        backgroundColor: '#fafafa'
      }}
      elevation={0}
      >
      <AppBar color="primary" position="static">
        <Toolbar>
          <Typography>TODOS WITH HOOKS</Typography>
        </Toolbar>
      </AppBar>
      <Grid container justifyContent='center'>
        <Grid item lg={4} md={8} xs={12}>
          <TodoForm addTodo={addTodo}/>
          <TodoList 
            todos={todos} 
            deleteTodo={deleteTodo} 
            edit={editTodo}
            checkComplete={checkComplete}
          />
        </Grid>
      </Grid>
    </Paper>
  )
}