import { useContext } from "react"
import { TodosContext } from "./contexts/todos.context"
import Todo from "./Todo";

export default function TodoList() {
  const todos = useContext(TodosContext);

  return (
    <div>
      {todos.map(todo => (
        <Todo task={todo.task} key={todo.task}/>
      ))}
    </div>
  )
}