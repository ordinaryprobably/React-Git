import { createContext, useState } from "react";
import useTodoState from "../hooks/useTodoState";
import useTodoStateReducer from "../hooks/useTodoStateReducer";

export const TodosContext = createContext(); 
export const DispatchContext = createContext();

export function TodosProvider(props) {
  const [ todos, dispatch ] = useTodoStateReducer([]);

  return (
    <TodosContext.Provider value={ todos }>
      <DispatchContext.Provider value={ dispatch }>
        {props.children}
      </DispatchContext.Provider>
    </TodosContext.Provider>
  )
}