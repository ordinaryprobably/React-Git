import { createContext, useReducer, useState } from "react";
import useTodo from "../Hooks/useTodo";

const initialState = [
  {
    id: '1',
    title: 'the first intaek',
    email: 'this@gmail.com',
    body: 'jdjeijdejidjeij2j3123 12j3i1 31j12rj asas',
  }
]

export const TodoContext = createContext();
export const DispatchContext = createContext();

export function TodoProvider(props) {
  const [todoList, dispatch] = useTodo(initialState);

  return (
    <TodoContext.Provider value={ todoList }>
      <DispatchContext.Provider value={ dispatch }>
        {props.children}
      </DispatchContext.Provider>
    </TodoContext.Provider>
  )
}