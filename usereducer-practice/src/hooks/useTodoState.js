/**
 * useState 를 커스텀한 useTodoState 훅이다.
 * 
 * todos.context.js 에서 사용하기 위해 만들었지만,
 * 불필요한 렌더링과 효율적인 코드를 위해 useReducer 를 사용해서 리팩토링했다.
 * 결과는 useTodoStateReducer.js 에서 확인할 수 있다.
 */

import { useState } from "react";

export default initialState => {
  const [todos, setTodos] = useState(initialState);

  return {
    todos: todos,
    addTodo: function(todo) {
      setTodos([ ...todos, { task: todo }]);
    }
  }
}