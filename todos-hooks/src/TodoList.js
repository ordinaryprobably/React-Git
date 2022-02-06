import { Divider, Paper } from "@mui/material";
import { useContext } from "react";
import { TodosContext } from "./contexts/todos.context";
import Todo from "./Todo";

export default function TodoList() {
  const { todos } = useContext(TodosContext);

  return (
    <Paper>
      {todos.map((todo, i) => (
        <>
          <Todo key={todo.id} todo={todo} />
          {i < (todos.length - 1) && <Divider/>}
        </>
      ))}  
    </Paper>
  )
}