import { createContext } from "react";
import useTodoApp from "../hooks/useTodoApp";

export const TodosContext = createContext();

export function TodosProvider(props) {

  const todosStuff = useTodoApp([]);

  return (
    <TodosContext.Provider value={todosStuff}>
      {props.children}
    </TodosContext.Provider>
  )
}

/**
 * useTodoApp returns an Object.
 * { todos, addTodo, deleteTodo, editTodo, toggleComplete } = useTodoApp([]);
 */