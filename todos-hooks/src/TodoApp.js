import { AppBar, Grid, Paper, Toolbar, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import useTodoApp from './hooks/useTodoApp';
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

export default function TodoApp() {
  const initTodos = JSON.parse(window.localStorage.getItem('todos') || '[]');
  const { todos, addTodo, deleteTodo, editTodo, toggleComplete } = useTodoApp(initTodos);

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
            checkComplete={toggleComplete}
          />
        </Grid>
      </Grid>
    </Paper>
  )
}