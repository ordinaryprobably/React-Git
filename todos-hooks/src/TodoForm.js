import { Paper, TextField } from "@mui/material";
import { useContext } from "react";
import { TodosContext } from "./contexts/todos.context";
import useInput from "./hooks/useInput";

export default function TodoForm() {
  const [value, handleChange, reset] = useInput('');
  const { addTodo } = useContext(TodosContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    addTodo(value);
    reset();
  }

  return (
    <Paper style={{ margin: '1rem 0', padding: '1rem 1.5rem' }}>
      <form onSubmit={handleSubmit}>
        <TextField 
          value={value} 
          onChange={handleChange} 
          id="standard-basic" 
          label="List your todos" 
          variant="standard" 
          style={{ width: '100%'}}
          autoComplete='off'
        />
      </form>
    </Paper>
  )
}