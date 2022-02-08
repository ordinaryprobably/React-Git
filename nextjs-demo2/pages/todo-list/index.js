import { useContext } from "react"
import { TodoContext } from "../../Components/Contexts/todo.context"
import TodoList from "../../Components/Todo/TodoList"

export default function TodoListPage(props) {
  const todoList = useContext(TodoContext);

  return (
    <div>
      <h1>This is todolist page</h1>
      <TodoList list={todoList} />
    </div>
  )
}