/**
 * Colt 의 버전에서는, 
 * 아래의 reducer 함수를 따로 파일에 저장해서 export 시켰다.
 * 이 것 때문에 가독성이 떨어져서 현재 Hook 내부에 선언했다.
 * 
 * 장점으로,
 * todos.context.js 에서 useTodoStateReducer 를 호출할 때
 * 인자에 initialState 만 넣어주면 된다. 
 */

import { useReducer, useState } from "react";

function reducer(state, action) {
  switch(action.type) {
    case 'ADD':
      return [ ...state, { task: action.task }];
  }
}

export default initialState => {
  const [todos, dispatch] = useReducer(reducer, initialState);

  return [todos, dispatch];
}