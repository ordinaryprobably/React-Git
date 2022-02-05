import { Divider, List, ListItem, ListItemText, Paper } from "@mui/material";
import Todo from "./Todo";

export default function TodoList(props) {
  const { todos, deleteTodo, edit, checkComplete } = props;

  return (
    <Paper>

      {todos.map((todo, i) => (
        <>
          <Todo todo={todo} deleteTodo={deleteTodo} edit={edit} checkComplete={checkComplete}/>
          {i < (todos.length - 1) && <Divider/>}
        </>
      ))}  

    </Paper>
  )
}