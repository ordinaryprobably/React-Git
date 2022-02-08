import { useContext } from "react";
import { DispatchContext } from "./contexts/todos.context";
import useInput from "./hooks/useInput";

export default function TodoForm() {
  const [input, setInput, reset] = useInput('');
  const dispatch = useContext(DispatchContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({ type: 'ADD', task: input });
    reset();
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type='text' 
        value={input}
        onChange={setInput} 
      />
    </form>
  )
}