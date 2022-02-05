import { Paper, TextField } from "@mui/material";
import useInput from "./hooks/useInput";

export default function TodoForm({ addTodo }) {
  const [value, handleChange, reset] = useInput('');

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