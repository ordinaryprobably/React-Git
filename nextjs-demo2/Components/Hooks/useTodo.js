import { useReducer } from "react";

function reducer(state, action) {
  switch(action.type) {
    case 'ADD':
      return [ ...state, action.todo ];
  }
}

export default initialState => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return [state, dispatch];
}
