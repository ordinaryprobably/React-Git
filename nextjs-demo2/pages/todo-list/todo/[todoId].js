import { useRouter } from "next/router";
import { useContext } from "react";
import { TodoContext } from "../../../Components/Contexts/todo.context";

export default function TodoPage() {
  const todoList = useContext(TodoContext);
  const router = useRouter();

  const display = todoList.filter(todo => todo.id === router.query.todoId)[0];
console.log(todoList)
  return (
    <div>
      <h1>{display.title}</h1>
      <p>{display.email}</p>
      <p>{display.body}</p>
    </div>
  )
}