import { Divider, Paper } from "@mui/material";
import React, { useContext } from "react";
import { TodosContext } from "./contexts/todos.context";
import Todo from "./Todo";

export default function TodoList() {
  const todos = useContext(TodosContext);

  return (
    <Paper>
      {todos.map((todo, i) => (
        <React.Fragment key={todo.id}>
          <Todo todo={todo} />
          {i < (todos.length - 1) && <Divider/>}
        </React.Fragment>
      ))}  
    </Paper>
  )
}